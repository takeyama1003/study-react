import Link from "next/link";
import { useFetchArray } from "src/hooks/useFetchArray";
import { API_URL } from "src/utils/const";

export const CommentListByPostId = (props) =>{
    const {data, error, isLoading, isEmpty } = useFetchArray(props.id ? `${API_URL}/posts/${props.id}/comments`: null);

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
              <Link href={`/comments/${comments.id}`}>
                <a className="block hover:text-blue-500">
                  {comments.body}
                  </a>
              </Link>
            </li>
          );
      })}
      </ul>
    );

}