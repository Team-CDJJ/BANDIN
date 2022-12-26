import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getPost from '../../api/post/getPost';
import CommonPost from '../../components/CommonUI/CommonPost/CommonPost';
import TopMainNav from '../../components/CommonUI/Nav/TopMainNav/TopMainNav';
import TabMenu from '../../components/CommonUI/TabMenu/TabMenu';

const postDetail = () => {
  const postId = useParams();
  const [postData, setPostData] = useState({});

  useEffect(() => {
    getPost(postId.post_id)
      .then((data) => {
        setPostData(data.post);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(postData);

  return (
    <div>
      <TopMainNav />
      <CommonPost
        image={postData.author.image}
        username={postData.author.username}
        accountname={postData.author.accountname}
        content={postData.content}
        heartCount={postData.heartCount}
        commentCount={postData.commentCount}
        imageSrc={postData.image}
        id={postData.id}
        createdAt={postData.createdAt}
      />
      <TabMenu />
    </div>
  );
};
export default postDetail;
