import { useState } from 'react';
import Img from '../../atoms/Img/img';
import heartIcon from '../../../assets/icon-heart.png';
import activeHeartIcon from '../../../assets/icon-heart-active.png';

import { likeBtn, unLikeBtn } from '../../../api/LikeBtn/LikeBtn';
import { accessInstance } from '../../../api/api';

const LikeBtn = ({ heartCount, id, heartedBool }) => {
  const [hearted, setHearted] = useState(heartedBool);
  const [nowHeartCount, setHeartCount] = useState(heartCount);

  const token = localStorage.getItem('token');

  const heartedBtn = async (formData) => {
    try {
      const likeBtn = async (formData) => {
        const res = await accessInstance.post(`/post/${id}/heart`, formData);
        return res.data.post;
      };
    } catch (err) {
      console.error(err);
    }
  };
  likeBtn();
};
