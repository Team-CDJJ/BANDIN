import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getPostDetail from '../../api/post/getPostDetail';
import CommonPost from '../../components/CommonUI/CommonPost/CommonPost';
import TopMainNav from '../../components/CommonUI/Nav/TopMainNav/TopMainNav';
import TabMenu from '../../components/CommonUI/TabMenu/TabMenu';
import PostWrapper from './styled';

const postDetail = () => {
  const { postId } = useParams();
  const [postData, setPostData] = useState();

  useEffect(() => {
    getPostDetail(postId)
      .then((data) => {
        setPostData(data.post);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(postData);

  return (
    <>
      <TopMainNav />
      <PostWrapper>{postData && <CommonPost post={postData} />}</PostWrapper>
      <TabMenu place='homefeed' />
    </>
  );
};
export default postDetail;
