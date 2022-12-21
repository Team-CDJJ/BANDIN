import { Link } from 'react-router-dom';

import { useState } from 'react';
import {
  CommentSection,
  CommentInner,
  CommentForm,
  CommentInput,
  CommentBtn,
} from './styled';

import commentProfile from '../../../assets/profile.png';
import imgBtn from '../../../assets/img-button.png';

const Comment = ({ whatImg, whatPlaceholder, chatRoomClick }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputText('');
    // focus();
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
              value={inputText}
              placeholder='메시지 입력하기...'
              onChange={(e) => setInputText(e.target.value)}
            />
          ) : (
            <CommentInput
              type='text'
              id='message'
              value={inputText}
              placeholder='댓글 입력하기...'
              onChange={(e) => setInputText(e.target.value)}
            />
          )}
          {chatRoomClick === 'send' ? (
            <CommentBtn disabled={!inputText} onClick={handleSubmit}>
              전송
            </CommentBtn>
          ) : (
            <CommentBtn disabled={!inputText} onClick={handleSubmit}>
              게시
            </CommentBtn>
          )}
        </CommentForm>
      </CommentInner>
    </CommentSection>
  );
};

export default Comment;
