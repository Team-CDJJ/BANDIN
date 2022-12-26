import { useState, useEffect } from 'react';
import axios from 'axios';
import Img from '../../atoms/Img/img';
import heartIcon from '../../../assets/icon-heart.png';
import activeHeartIcon from '../../../assets/icon-heart-active.png';
// import { likeBtn, unLikeBtn } from '../../../api/LikeBtn/LikeBtn';
import { CountNum, HeartBtn } from './styled';

// eslint-disable-next-line consistent-return
const LikeBtnTest = ({ heartCount, id, heartedBool }) => {
  const token = localStorage.getItem('token');
  const [hearted, setHearted] = useState(heartedBool);
  const [nowHeartCount, setHeartCount] = useState(heartCount);

  const onClicklikeBtn = async () => {
    // e.preventDefault();
    const option = {
      url: `https://mandarin.api.weniv.co.kr/post/${id}/heart`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    };
    await axios(option)
      .then((res) => {
        setHearted(true);
        setHeartCount(res.data.post.heartCount + 1);
      })
      .catch((err) => console.error(err));
  };
  const onClickUnlikeBtn = async () => {
    // e.preventDefault();
    const option = {
      url: `https://mandarin.api.weniv.co.kr/post/${id}/unheart`,
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    };
    await axios(option)
      .then((res) => {
        setHearted(false);
        setHeartCount(res.data.post.heartCount - 1);
      })
      .catch((err) => console.error(err));
  };

  //   onClickUnlikeBtn();
  // }, []);

  // const heartedBtn = async (e) => {
  //   e.preventDefault();
  //   const data = await likeBtn(id, token);
  //   setHeartCount(data.heartCount);
  //   setHearted(data.hearted);
  // };

  // const unheartedBtn = async (e) => {
  //   e.preventDefault();
  //   const data = await unLikeBtn(id, token);
  //   setHeartCount(data.heartCount);
  //   setHearted(data.hearted);
  // }

  return (
    <>
      <HeartBtn
        onClick={() => {
          // eslint-disable-next-line no-unused-expressions
          hearted ? onClickUnlikeBtn() : onClicklikeBtn();
        }}
        type='button'
      >
        <div className='ir'>좋아요</div>
        <Img
          width='20px'
          height='20px'
          src={hearted ? activeHeartIcon : heartIcon}
          alt='좋아요 아이콘'
        />
      </HeartBtn>
      <CountNum>{nowHeartCount}</CountNum>
    </>
  );
};

export default LikeBtnTest;
