import {
  CommonPostWrap,
  CommonPostSection,
  CommonHeaderSec,
  UserName,
  VerticalBtn,
  UserID,
  PostTxt,
  IconGroup,
  LikeBtn,
  LikeCount,
  ChatBtn,
  ChatCount,
  PostUploadTime,
} from './styled';

import Profile from '../../../assets/profile.png';
import PostImg from '../../../assets/post.png';

const CommonPost = () => {
  return (
    <CommonPostWrap>
      <img src={Profile} alt='프로필 이미지' className='img-profile' />
      <CommonPostSection>
        <CommonHeaderSec>
          <UserName>애월읍 위니브 감귤농장</UserName>
          <VerticalBtn type='button' />
        </CommonHeaderSec>
        <UserID>@ weniv_Mandarin</UserID>
        <PostTxt>
          옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
          이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게
          뛰노는 인생의 힘있다.
        </PostTxt>
        <img src={PostImg} alt='게시글 이미지' className='img-post' />
        <IconGroup>
          <LikeBtn />
          <LikeCount>58</LikeCount>
          <ChatBtn />
          <ChatCount>12</ChatCount>
        </IconGroup>
        <PostUploadTime>2020년 10월 21일</PostUploadTime>
      </CommonPostSection>
    </CommonPostWrap>
  );
};

export default CommonPost;
