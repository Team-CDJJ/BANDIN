import { Link } from 'react-router-dom';

import {
  CommentSection,
  CommentInner,
  CommentInput,
  CommentBtn,
} from './styled';

import commentProfile from '../../../assets/profile.png';

const Comment = () => {
  return (
    <CommentSection>
      <h1 className='ir'>댓글 게시</h1>
      <CommentInner>
        {/* 경로 수정 필요 */}
        <Link to='/'>
          <img src={commentProfile} alt='' />
        </Link>
        <CommentInput type='text' placeholder='댓글 입력하기...' />
        <CommentBtn>게시</CommentBtn>
      </CommentInner>
    </CommentSection>
  );
};

export default Comment;
