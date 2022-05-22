import Head from 'next/head';
import { useComment } from 'src/hooks/useComment';
import { PostByPostId } from 'src/components/Post/PostByPostId';

 export const Comment = ()=> {

  const { data, error, isLoading } = useComment();

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
      <h1>{data?.body}</h1>
      <ul>
        <li>{data?.name}</li>
        <li>{data?.email}</li>
        <li><PostByPostId id={data.id}/></li>
      </ul>
      <h2>元の記事</h2>
      
    </div>
  );
};