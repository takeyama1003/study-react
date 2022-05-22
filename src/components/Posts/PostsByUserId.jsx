import Link from "next/link";
import { usePostsByUserId } from "src/hooks/useFetchArray";

export const PostsByUserId = (props) => {

    const {data, error, isLoading, isEmpty } = usePostsByUserId(props.id);

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
        {data.map((posts)=>{
            return (
              <li key={posts.id}>
                <Link href={`/posts/${posts.id}`}>
                  <a>{posts.title}</a>
                </Link>
              </li>
            );
        })}
        </ol>   
    );
}