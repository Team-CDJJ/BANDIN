import { Link, useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
import {
  CommentSection,
  CommentInner,
  CommentForm,
  CommentInput,
  CommentBtn,
} from './styled';

import Img from '../../atoms/Img/img';
import getMyInfo from '../../../api/profile/getMyInfo';
import postComments from '../../../api/post/postComments';
import imgBtn from '../../../assets/img-button.png';
import noneProfileImg from '../../../assets/profile.png';

const Comment = ({
  setHasInput,
  hasInput,
  setComment,
  whatImg,
  whatPlaceholder,
  chatRoomClick,
}) => {
  const { postId } = useParams();
  const [inputValue, setInputValue] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    getMyInfo()
      .then((data) => {
        setImage(data.image);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // async 안주면 실시간 업데이트 안 되는 문제..
  const handleSubmit = async (e) => {
    e.preventDefault();
    await postComments(postId, inputValue);
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
            <Img
              borderRadius='50%'
              src={image.includes('Ellipse.png') ? noneProfileImg : image}
              alt='댓글 입력할 사람의 프로필'
            />
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
