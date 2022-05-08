import useSWR from 'swr';

const fetcher = async (url) => {
    const response = await fetch(url);
  
  if(!response.ok){
    throw new Error("エラー発生、データ取得失敗");
  }
  
  const json = await response.json();
  return json;
  
  };
  
  export const usePosts = () =>{
    const { data, error } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher);
    return{
      data,
      error,
      isLoading: !error && !data,
      isEmpty: data && data.length === 0,
    }
  }