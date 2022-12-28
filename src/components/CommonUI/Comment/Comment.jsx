import { Link, useParams } from 'react-router-dom';

import { useState } from 'react';
import {
  CommentSection,
  CommentInner,
  CommentForm,
  CommentInput,
  CommentBtn,
} from './styled';

import postComments from '../../../api/post/postComments';
import commentProfile from '../../../assets/profile.png';
import imgBtn from '../../../assets/img-button.png';

const Comment = ({
  setHasInput,
  hasInput,
  setComment,
  whatImg,
  whatPlaceholder,
  chatRoomClick,
}) => {
  const [inputValue, setInputValue] = useState('');
  const { postId } = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await postComments(postId, inputValue)
      .then((data) => {
        console.log(111, data);
      })
      .catch((error) => {
        console.log(error);
      });
    setComment(inputValue);
    setInputValue('');
    setHasInput(!hasInput);
  };

  return (
    <CommentSection>
      <h1 className='ir'>댓글 게시</h1>
      <CommentInner>
        {/* 경로 수정 필요 */}
        {whatImg === 'diffImg' ? (
          <img src={imgBtn} alt='이미지 버튼' />
        ) : (
          <Link to='/'>
            <img src={commentProfile} alt='댓글 입력할 사람의 프로필' />
          </Link>
        )}
        <CommentForm onSubmit={handleSubmit}>
          {whatPlaceholder === 'inputMessage' ? (
            <CommentInput
              type='text'
              id='message'
              value={inputValue}
              placeholder='메시지 입력하기...'
              onChange={(e) => setInputValue(e.target.value)}
            />
          ) : (
            <CommentInput
              type='text'
              id='message'
              value={inputValue}
              placeholder='댓글 입력하기...'
              onChange={(e) => setInputValue(e.target.value)}
            />
          )}
          {chatRoomClick === 'send' ? (
            <CommentBtn disabled={!inputValue} onClick={handleSubmit}>
              전송
            </CommentBtn>
          ) : (
            <CommentBtn disabled={!inputValue} onClick={handleSubmit}>
              게시
            </CommentBtn>
          )}
        </CommentForm>
      </CommentInner>
    </CommentSection>
  );
};

export default Comment;
