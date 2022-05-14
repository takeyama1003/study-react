import Head from 'next/head';
import { useComment } from 'src/hooks/useComment';

 export const Comment = ()=> {

  const { comment, error, isLoading } = useComment();

  if(isLoading){
      return <div>ローディング中</div>;
  }

  if(error){
      return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
          <title>{comment?.name}</title>
      </Head>
      <h1>{comment?.body}</h1>
      <ul>
        <li>{comment?.name}</li>
        <li>{comment?.email}</li>
      </ul>
    </div>
  );
};