import Head from 'next/head';
import { PostTitleByCommentId } from 'src/components/Post/PostTitleByCommentId';
import { useFetch } from 'src/hooks/useFetch';
import { API_URL } from 'src/utils/const';
import { useRouter } from 'next/router';

 export const CommentDetail = ()=> {
  const router = useRouter();
  const { data, error, isLoading } = useFetch(router.query.id
    ?`${API_URL}/comments/${router.query.id}`: null);

  if(isLoading){
      return <div>ローディング中</div>;
  }

  if(error){
      return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
          <title>{data?.name}</title>
      </Head>
      <div className="text-lg">
      {data.name}({data?.email})
      </div>
      <h1 className="text-3xl font-bold">{data?.body}</h1>
      <h2 className="text-xl font-bold mt-10">元の記事</h2>
      <div className='mt-2'>
      <PostTitleByCommentId id={data.postId}/>
      </div>
    </div>
  );
};