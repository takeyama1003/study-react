import Link from 'next/link';
import { useFetchArray } from 'src/hooks/useFetchArray';
import { API_URL } from 'src/utils/const';

 export const CommentList = ()=> {

  const { data, error, isLoading, isEmpty } = useFetchArray(`${API_URL}/comments`);

  if(isLoading){
      return <div>ローディング中</div>;
  }

  if(error){
      return <div>{error.message}</div>;
  }

  if(isEmpty){
      return <div>データは空です</div>;
  }

  return (
    <ul className="space-y-2">
    {data.map((comments)=>{
        return (
          <li key={comments.id} className="border-b pb-2">
            <Link href={`/comments/${comments.id}`} prefetch={false}>
              <a className="block hover:text-blue-500">
                {comments.body}
                </a>
            </Link>
          </li>
        );
    })}
    </ul>
  );
};