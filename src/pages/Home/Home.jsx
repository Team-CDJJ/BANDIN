import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TopMainNav from '../../components/CommonUI/Nav/TopMainNav/TopMainNav';
import { EmptyHomeWrapper, FeedWrapper, FeedTxt } from './styled';
import CommonPost from '../../components/CommonUI/CommonPost/CommonPost';
import profileImg from '../../assets/profile.png';
import Button from '../../components/atoms/Button/Button';
import TabMenu from '../../components/CommonUI/TabMenu/TabMenu';
import getFeedPost from '../../api/post/getFeedPost';

const Home = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const getPost = () => {
      getFeedPost()
        .then((data) => {
          setPost(data.posts);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getPost();
  }, []);

  // console.log(post);

  return (
    <>
      <TopMainNav />
      {post.length !== 0 ? (
        <FeedWrapper>
          {post.map((item) => {
            return (
              <div key={item.id}>
                <CommonPost
                  image={item.author.image}
                  username={item.author.username}
                  accountname={item.author.accountname}
                  content={item.content}
                  heartCount={item.heartCount}
                  commentCount={item.commentCount}
                  imageSrc={item.image}
                  id={item.id}
                  createdAt={item.createdAt}
                />
              </div>
            );
          })}
        </FeedWrapper>
      ) : (
        <EmptyHomeWrapper>
          <img src={profileImg} alt='프로필 이미지' className='profile-img' />
          <FeedTxt>유저를 검색해 팔로우 해보세요!</FeedTxt>
          <Link to='/search'>
            <Button type='button' size='md, lg' tit='검색하기'></Button>
          </Link>
        </EmptyHomeWrapper>
      )}
      <TabMenu place='search' />
    </>
  );
};

export default Home;
