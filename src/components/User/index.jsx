import Head from 'next/head';
import { useUser } from 'src/hooks/useUser';

 export const User = ()=> {

  const { post, user, error, isLoading } = useUser();

  if(isLoading){
      return <div>ローディング中</div>;
  }

  if(error){
      return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
          <title>{user?.name}</title>
      </Head>
      <h1>{user?.name}</h1>
      <ul>
        <li>{user?.email}</li>
        <li>{user?.username}</li>
        <li>{user?.address.city}</li>
        <li>{user?.phone}</li>
        <li>{user?.website}</li>
        <li>{user?.company.name}</li>
      </ul>
    </div>
  );
};