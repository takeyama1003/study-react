import { useCallback, useEffect, useReducer } from 'react/'

const initialState = {
  data: [],
  loading: true,
  error: null,
};

const reducer = (state, action) =>{
  switch(action.type){
    case "end":{
      return{
        ...state,
        data: action.data,
        loading: false,
      };
    }
    case "error":{
      return{
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default:{
      throw new Error("no such action type!");
    }
  }
};

 export const Posts = ()=> {

  // const [posts,setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // const [state, setState] = useState({
  //   data: [],
  //   loading: true,
  //   error: null,
  // });

const [state, dispatch] = useReducer(reducer, initialState);

  const getPosts = useCallback(async () => {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");

        if(!res.ok){
          throw new Error("エラーが発生、データ取得失敗")
        }
        const json = await res.json();
        // setPosts(json);
        // setState((prevState)=>{
        //   return{
        //     ...prevState,
        //     data: json,
        //     loading: false,
        //   };
        // });
        dispatch({ type: "end", data: json});
    }
    catch(error){
        // setError(error);
        // setState((prevState)=>{
        //   return{
        //     ...prevState,
        //     loading: false,
        //     error,
        //   };
        // });
        dispatch({ type: "error", error});
    }
    // setLoading(false);
  },[]);

useEffect(()=>{
  getPosts();
},[]);

if(state.loading){
    return <div>ローディング中</div>
}

if(state.error){
    return <div>{state.error.message}</div>;
}

if(state.data.length === 0){
    return <div>データは空です</div>;
}

  return (
    <ol>
    {state.data.map((post)=>{
        return <li key={post.id}>{post.title}</li>;
    })}
    </ol>
  );
};