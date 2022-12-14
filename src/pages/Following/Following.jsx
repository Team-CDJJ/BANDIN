import { Link } from 'react-router-dom';
import {
  FollowingHeaderWrapper,
  FollowingHeader,
  HeaderArrow,
  FollowingTit,
} from './styled';

import arrowLeft from '../../assets/icon-arrow-left.png';
import homeLogo from '../../assets/icon-home.png';
import chattingLogo from '../../assets/icon-message-circle.png';
import editLogo from '../../assets/icon-edit.png';
import userLogo from '../../assets/icon-user.png';
// 임시 설정
import profile from '../../assets/profile.png';

const Following = () => {
  return (
    <>
      <FollowingHeaderWrapper>
        <FollowingHeader>
          <HeaderArrow src={arrowLeft} alt='' />
          <FollowingTit>Following</FollowingTit>
        </FollowingHeader>
      </FollowingHeaderWrapper>
      <main>
        <div>
          <img src={profile} alt='' />
        </div>
        <div>
          {/* 임시 설정 */}
          <p>애월읍 한라봉 최고 맛집</p>
          <p>정성을 다해 농사짓는 한라봉</p>
        </div>
        {/* following은 기본이 팔로잉 */}
        <button>팔로잉</button>
      </main>
      <footer>
        <div>
          <img src={homeLogo} alt='' />
          <span>홈</span>
        </div>
        <div>
          <img src={chattingLogo} alt='' />
          <span>채팅</span>
        </div>
        <div>
          <img src={editLogo} alt='' />
          <span>게시물 작성</span>
        </div>
        <div>
          <img src={userLogo} alt='' />
          <span>프로필</span>
        </div>
      </footer>
    </>
  );
};

export default Following;
