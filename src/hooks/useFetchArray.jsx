import { fetcher } from 'src/utils/fetcher';
import useSWRImmutable from 'swr/immutable';
  
  const useFetchArray = (url,fetcher) =>{

    const { data, error } = useSWRImmutable(url,fetcher);

    return{
      data,
      error,
      isLoading: !error && !data,
      isEmpty: data && data.length === 0,
    };
  };

  const API_URL ="https://jsonplaceholder.typicode.com";


// Post
  export const usePosts = () =>{
    return useFetchArray(`${API_URL}/posts`, fetcher);
  };

//User
  export const useUsers = () =>{
    return useFetchArray(`${API_URL}/users`, fetcher);
  };

  export const usePostsByUserId = (id) =>{
    return useFetchArray(id ? `${API_URL}/posts?userId=${id}`: null, fetcher);
  };

//Comment
  export const useComments = () =>{
    return useFetchArray(`${API_URL}/comments`, fetcher);
  };

  export const useCommentByPostId = (id) =>{
    return useFetchArray(id ? `${API_URL}/comments?postId=${id}`: null, fetcher);
  };