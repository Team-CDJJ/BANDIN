import { useState } from 'react';

import Img from '../../atoms/Img/img';
import heartIcon from '../../../assets/icon-heart.png';
import activeHeartIcon from '../../../assets/icon-heart-active.png';

import { CountNum, HeartBtn } from './styled';

import { likeAxios, unlikeAxios } from '../../../api/LikeAxios/LikeAxios';

const LikeBtn = ({ heartCount, id, heartedBool }) => {
  const token = localStorage.getItem('token');

  const [hearted, setHearted] = useState(heartedBool);
  const [nowHeartCount, setHeartCount] = useState(heartCount);

  const heartedBtn = async (e) => {
    e.preventDefault();
    const data = await likeAxios(id);
    setHeartCount(data.heartCount);
    setHearted(data.hearted);
    console.log(id);
  };

  const unheartedBtn = async (e) => {
    e.preventDefault();
    const data = await unlikeAxios(id, token);
    setHeartCount(data.heartCount);
    setHearted(data.hearted);
  };

  return (
    <div>
      <HeartBtn type='submit' onClick={hearted ? unheartedBtn : heartedBtn}>
        <dt className='ir'>좋아요</dt>
        <Img
          width='20px'
          height='20px'
          src={hearted ? activeHeartIcon : heartIcon}
          alt='좋아요 아이콘'
        />
        <CountNum>{nowHeartCount}</CountNum>
      </HeartBtn>
    </div>
  );
};

export default LikeBtn;
