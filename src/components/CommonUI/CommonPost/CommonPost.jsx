import { Link, useNavigate } from 'react-router-dom';
import Img from '../../atoms/Img/img';
import LikeBtn from '../../modules/LikeBtn/LikeBtn';
import UserItem from '../UserItem/UserItem';

import {
  CommonPostWrap,
  CommonPostSection,
  CommonUserInfo,
  UserName,
  UserInfoCont,
  VerticalBtn,
  UserID,
  PostTxt,
  IconGroup,
  LikeCount,
  ChatBtn,
  ChatCount,
  PostUploadTime,
} from './styled';

// import Profile from '../../../assets/profile.png';

const CommonPost = ({
  post,
  image,
  username,
  imageSrc,
  accountname,
  content,
  id,
  heartCount,
  commentCount,
  createdAt,
}) => {
  const [postData, setPostData] = useState([]);

  const changeDateFormat = (date) => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);

    return `${year}년 ${month}월 ${day}일`;
  };

  return (
    <CommonPostWrap>
      <CommonPostSection>
        <CommonHeaderSec>
          <UserItem
            image={image}
            username={username}
            accountname={accountname}
          />
          <VerticalBtn type='button' />
        </CommonHeaderSec>
        <PostTxt>{content}</PostTxt>
        <Link to={`/post/${id}`}>
          {imageSrc &&
            imageSrc
              .split(',')
              .map((item) => (
                <Img
                  key={post.id}
                  width='100%'
                  src={item}
                  alt='게시글 이미지'
                />
              ))}
        </Link>
        <IconGroup>
          <LikeBtn id={post.id} />
          <LikeCount
            heartCount={post.heartCount}
            id={post.id}
            hearted={post.hearted}
          >
            {post.heartCount}
          </LikeCount>
          <button type='button' onClick={onClickChat}>
            <ChatBtn />
            <ChatCount>{post.commentCount}</ChatCount>
          </button>
          <LikeBtn />
          <LikeCount>{heartCount}</LikeCount>
          <ChatBtn />
          <ChatCount>{commentCount}</ChatCount>
        </IconGroup>
        <PostUploadTime>{changeDateFormat(createdAt)}</PostUploadTime>
      </CommonPostSection>
    </CommonPostWrap>
  );
};

export default CommonPost;
