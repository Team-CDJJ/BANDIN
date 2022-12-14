import React from 'react';
import {} from './styled';

import basicProfile from '../../assets/basic-profile.png';

const CommonPost = () => {
  return (
    <CommonPostWrap>
      <img src={basicProfile} alt='profile-img' />
    </CommonPostWrap>
  );
};

export default CommonPost;
