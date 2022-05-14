import { useRouter } from 'next/router';
import { fetcher } from 'src/utils/fetcher';
import useSWR from 'swr';
  
  export const useUser = () =>{
    const router = useRouter();
    // const { data: post, error: postError } = useSWR(
    //   router.query.id
    //   ?`https://jsonplaceholder.typicode.com/posts/${router.query.id}`: null, fetcher);

      const { data: user, error: userError } = useSWR(
        // post?.userId
        router.query.id
        ?`https://jsonplaceholder.typicode.com/users/${router.query.id}`: null, fetcher);

    return{
      // post,
      user,
      error: userError,
      isLoading: !user && !userError,
    }
  }