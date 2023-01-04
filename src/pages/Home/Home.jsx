import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import TopMainNav from '../../components/CommonUI/Nav/TopMainNav/TopMainNav';
import {
  EmptyHomeWrapper,
  FeedWrapper,
  FeedTxt,
  TopBtn,
  LoadingTxt,
  LoadingWrapper,
} from './styled';
import CommonPost from '../../components/CommonUI/CommonPost/CommonPost';
import profileImg from '../../assets/profile.png';
import topImg from '../../assets/top-btn.png';
import Button from '../../components/atoms/Button/Button';
import TabMenu from '../../components/CommonUI/TabMenu/TabMenu';
import { apiUrl } from '../../api/api';
import Img from '../../components/atoms/Img/img';

const Home = () => {
  const [postData, setPostData] = useState([]);
  const token = localStorage.getItem('token');
  const [numFeed, setNumFeed] = useState(0);
  const [done, setDone] = useState(false);
  const [ref, inView] = useInView();
  const [view, setView] = useState('pending');

  const getFeedPost = useCallback(async () => {
    const option = {
      url: `${apiUrl}/post/feed/?limit=10&skip=${numFeed}`,
      method: `GET`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    };

    await axios(option)
      .then((res) => {
        setPostData(postData.concat(res.data.posts));
        setView('fulfilled');
        if (res.data.posts.length < 10) {
          setDone(true);
        }
      })
      .catch((err) => {
        console.error(err);
        setView('rejected');
      });
  }, [numFeed]);

  useEffect(() => {
    if (!done) {
      getFeedPost();
    }
  }, [numFeed]);

  useEffect(() => {
    if (inView === true) {
      setNumFeed((current) => current + 10);
    }
  }, [inView]);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <TopMainNav />
      {view === 'fulfilled' ? (
        postData.length !== 0 ? (
          <FeedWrapper>
            <h2 className='ir'>홈 피드</h2>
            {postData.map((post, i) =>
              postData.length - 1 === i ? (
                <div key={i} ref={ref}>
                  <CommonPost post={post} />
                </div>
              ) : (
                <div key={i}>
                  <CommonPost post={post} />
                </div>
              ),
            )}
            <TopBtn>
              <div>
                <button onClick={scrollToTop} type='button'>
                  <Img src={topImg} alt='위 방향 화살표' />
                </button>
              </div>
            </TopBtn>
          </FeedWrapper>
        ) : (
          <EmptyHomeWrapper>
            <h2 className='ir'>홈 피드</h2>
            <img src={profileImg} alt='프로필 이미지' className='profile-img' />
            <FeedTxt>유저를 검색해 팔로우 해보세요!</FeedTxt>
            <Link to='/search'>
              <Button type='button' size='md, lg' tit='검색하기'></Button>
            </Link>
          </EmptyHomeWrapper>
        )
      ) : (
        <LoadingWrapper>
          <Img src={profileImg} alt='프로필 이미지' className='loading-img' />
          <LoadingTxt>빠르게 로딩중!!</LoadingTxt>
        </LoadingWrapper>
      )}
      <TabMenu place='homefeed' />
    </>
  );
};

export default Home;
