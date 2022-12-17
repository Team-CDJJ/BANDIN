import { useState } from 'react';
import TopMainNav from '../../components/CommonUI/Nav/TopMainNav/TopMainNav';
import TapNav from '../../components/CommonUI/TabMenu/TabMenu';
import { EmptyHomeWrap, HomeWrap, FeedTxt } from './styled';
// import { Link } from 'react-router-dom';
// import Splash from '../Splash/Splash';
import Post from '../../components/CommonUI/CommonPost/CommonPost';
import TxtPost from '../../components/CommonUI/CommonOnlyText/CommonOnlyText';
import profileImg from '../../assets/profile.png';
import Button from '../../components/atoms/Button/Button';

const Home = () => {
  const [post, setPost] = useState(false);
  return (
    <>
      <TopMainNav />
      {post ? (
        <HomeWrap>
          <Post userName='' userId='' />
          <Post userName='' userId='' />
          <TxtPost userName='' userId='' />
        </HomeWrap>
      ) : (
        <EmptyHomeWrap>
          <img src={profileImg} alt='프로필 이미지' className='profile-img' />
          <FeedTxt>유저를 검색해 팔로우 해보세요!</FeedTxt>
          <Button type='button' size='md, lg' tit='검색하기'></Button>
          {/* <Link to='/login'>로그인</Link> */}
        </EmptyHomeWrap>
      )}
      <TapNav />;
    </>
  );
};

export default Home;