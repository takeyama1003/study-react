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
            <Link href={`/posts/${data.id}`}>
                <a className="text-lg hover:text-blue-500">{data.title}</a>
            </Link>
        </div>
    );
}