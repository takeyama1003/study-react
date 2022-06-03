import Head from 'next/head';
import { CommentList } from 'src/components/Comment/CommentList';
import { SWRConfig } from 'swr';
import { API_URL } from 'src/utils/const';

export const getStaticProps = async ()=>{
  const COMMENTS_API_URL = `${API_URL}/comments`;
  const comments = await fetch(COMMENTS_API_URL);
  const commentsData = await comments.json();

  return{
    props:{
      fallback:{
        [COMMENTS_API_URL]:commentsData,
      },
    },
    revalidate: 1,
  };
};


const Comments = (props)=> {
  const {fallback} = props;
  return (
    <div>
      <SWRConfig value={{ fallback }}>
      <Head>
        <title>Comments Page</title>
      </Head>
      <CommentList />
      </SWRConfig>
    </div>
  );
};

export default Comments;