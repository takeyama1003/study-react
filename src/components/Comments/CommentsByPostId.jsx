import Link from "next/link";
import { useCommentByPostId } from "src/hooks/useFetchArray";

export const CommentByPostId = (props) =>{
    const {data, error, isLoading, isEmpty } = useCommentByPostId(props.id);

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
      <ol>
      {data.map((comments)=>{
          return (
            <li key={comments.id}>
              <Link href={`/comments/${comments.id}`}>
                <a>{comments.body}</a>
              </Link>
            </li>
          );
      })}
      </ol>
    );

}