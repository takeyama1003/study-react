import { useRouter } from 'next/router';
import { API_URL } from 'src/utils/const';
import { fetcher } from 'src/utils/fetcher';
import useSWR from 'swr';
  
  export const useComment = () =>{
    const router = useRouter();

      const { data, error } = useSWR(
        router.query.id
        ?`${API_URL}/comments/${router.query.id}`: null, fetcher);

    return{
      data,
      error,
      isLoading: !data && !error,
    }
  }