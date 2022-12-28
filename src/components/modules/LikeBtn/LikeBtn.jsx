import { useState } from 'react';

import Img from '../../atoms/Img/img';
import heartIcon from '../../../assets/icon-heart.png';
import activeHeartIcon from '../../../assets/icon-heart-active.png';
import { CountNum, HeartBtn } from './styled';

import { likeAxios, unlikeAxios } from '../../../api/LikeAxios/LikeAxios';

const LikeBtn = ({ heartCount, id, heartedBool }) => {
  const [hearted, setHearted] = useState(heartedBool);
  const [nowHeartCount, setHeartCount] = useState(heartCount);

  const heartedBtn = async () => {
    const data = await likeAxios(id);
    setHeartCount(data.post.heartCount);
    setHearted(data.post.hearted);
  };

  const unheartedBtn = async () => {
    const data = await unlikeAxios(id);
    setHeartCount(data.post.heartCount);
    setHearted(data.post.hearted);
  };

  return (
    <HeartBtn type='button' onClick={hearted ? unheartedBtn : heartedBtn}>
      <dt className='ir'>좋아요</dt>
      <Img
        width='20px'
        height='20px'
        src={hearted ? activeHeartIcon : heartIcon}
        alt='좋아요 아이콘'
      />
      <CountNum>{nowHeartCount}</CountNum>
    </HeartBtn>
  );
};

export default LikeBtn;
