import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import TopMainNav from '../../components/CommonUI/Nav/TopMainNav/TopMainNav';
import { EmptyHomeWrapper, FeedWrapper, FeedTxt } from './styled';
import CommonPost from '../../components/CommonUI/CommonPost/CommonPost';
import profileImg from '../../assets/profile.png';
import Button from '../../components/atoms/Button/Button';
import TabMenu from '../../components/CommonUI/TabMenu/TabMenu';
// import getFeedPost from '../../api/post/getFeedPost';
import { apiUrl } from '../../api/api';

const Home = () => {
  const [postData, setPostData] = useState([]);
  const userToken = localStorage.getItem('token');
  const [numFeed, setNumFeed] = useState(0);
  const [done, setDone] = useState(false);
  const [ref, inView] = useInView();

  const getFeedPost = useCallback(async () => {
    const option = {
      url: `${apiUrl}/post/feed/?limit=10&skip=${numFeed}`,
      method: `GET`,
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    };

    await axios(option)
      .then((res) => {
        setPostData(postData.concat(res.data.posts));

        if (res.data.posts.length < 10) {
          setDone(true);
        }
      })
      .catch((err) => {
        console.error(err);
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

  return (
    <>
      <TopMainNav />
      {postData.length !== 0 ? (
        <FeedWrapper>
          <h2 className='ir'>홈 피드</h2>
          {postData.map((post, i) =>
            postData.length - 1 === i ? (
              <div key={post.id} ref={ref}>
                <CommonPost post={post} />
              </div>
            ) : (
              <div key={post.id}>
                <CommonPost post={post} />
              </div>
            ),
          )}
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
      )}
      <TabMenu place='homefeed' />
    </>
  );
};

export default Home;
