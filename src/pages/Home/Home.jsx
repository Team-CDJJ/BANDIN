import { useEffect, useState } from 'react';
import TopMainNav from '../../components/CommonUI/Nav/TopMainNav/TopMainNav';
import TapNav from '../../components/CommonUI/TabMenu/TabMenu';
import { EmptyHomeWrap, HomeWrap, FeedTxt } from './styled';
// import { Link } from 'react-router-dom';
// import Splash from '../Splash/Splash';
import PostItem from '../../components/CommonUI/CommonPost/CommonPost';
import profileImg from '../../assets/profile.png';
import Button from '../../components/atoms/Button/Button';
import feedMatching from '../../api/home/feedMatching';

const Home = () => {
  // const token = localStorage.getItem('token');

  const [post, setPost] = useState([]);

  const goSearch = () => {
    window.location.href = '/search';
  };

  useEffect(() => {
    const getPost = () => {
      feedMatching()
        .then((data) => {
          console.log(data);
          setPost(data.posts);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getPost();
  }, []);
  console.log(post);
  return (
    <>
      <TopMainNav />
      {post.length !== 0 ? (
        <HomeWrap>
          {post.map((item, id) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <div key={id}>
                <PostItem post={item} />
              </div>
            );
          })}
        </HomeWrap>
      ) : (
        <EmptyHomeWrap>
          <img src={profileImg} alt='프로필 이미지' className='profile-img' />
          <FeedTxt>유저를 검색해 팔로우 해보세요!</FeedTxt>
          <Button
            type='button'
            size='md, lg'
            tit='검색하기'
            onClick={goSearch}
          ></Button>
          {/* <Link to='/login'>로그인</Link> */}
        </EmptyHomeWrap>
      )}
      {/* <TapNav /> */}
      <TabMenu place='search' />
    </>
  );
};

export default Home;
