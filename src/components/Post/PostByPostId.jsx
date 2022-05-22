import Link from "next/link";
import { usePostByPostId } from "src/hooks/useFetchArray";
import { usePost } from "src/hooks/usePost";

export const PostByPostId = (props) => {

    const {data, error, isLoading, isEmpty } = usePost(props.id);

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
        <div>
        {/* {data.map((posts)=>{
            return (
              <li key={posts.id}>
                <Link href={`/posts/${posts.id}`}>
                  <a>{posts.title}</a>
                </Link>
              </li>
            );
        })} */}
            <Link href={`/posts/${data.id}`}>
                <a>{data.title}</a>
            </Link>
        </div>
    );
}