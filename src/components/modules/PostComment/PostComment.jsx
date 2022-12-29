import { useState, useRef, useEffect } from 'react';
import TimeAgo from '../TimeAgo/TimeAgo';
import Img from '../../atoms/Img/img';
import { VerticalBtn } from '../PostUserInfo/styled';
import { CommentModal } from '../../CommonUI/PostModal/PostModal';
import {
  ModalBg,
  CommentWrapper,
  UserInfo,
  UserName,
  CreatedTime,
  CommentContent,
} from './styled';
import deleteComment from '../../../api/comment/deleteComment';
import getPostComments from '../../../api/post/getPostComments';
import reportComment from '../../../api/comment/reportComment';

const PostComment = ({
  image,
  alt,
  username,
  comment,
  createdAt,
  postId,
  setCommentData,
  commentId,
  thumbnail,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const currentUserName = localStorage.getItem('username');
  const [isDelete, setIsDelete] = useState(false);
  const outside = useRef();
  const onClickModal = () => {
    if (username === currentUserName) {
      setModalContent('삭제');
    } else {
      setModalContent('신고');
    }
    setOpenModal(true);
  };
  const onClickDelete = async () => {
    const deleteCall = await deleteComment(postId, commentId).then((res) => {
      console.log(res);
      setIsDelete(!isDelete);
      setOpenModal(false);
    });
  };
  const onClickReport = async () => {
    const report = await reportComment(postId, commentId).then((res) => {
      console.log(res);
      setIsDelete(!isDelete);
      setOpenModal(false);
    });
  };
  useEffect(() => {
    getPostComments(postId)
      .then((data) => {
        setCommentData(data.comments);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isDelete]);
  return (
    <CommentWrapper>
      <UserInfo>
        <Img
          width='36px'
          height='36px'
          borderRadius='50%'
          src={thumbnail}
          alt={alt}
        />
        <UserName>{username}</UserName>
        <CreatedTime>{TimeAgo(new Date(createdAt))}</CreatedTime>
        <VerticalBtn onClick={onClickModal} />
      </UserInfo>
      <CommentContent>{comment}</CommentContent>
      {openModal && (
        <ModalBg
          // 모달창 바깥을 찍으면 모달창이 꺼지게 하는 효과
          ref={outside}
          onClick={(e) => {
            if (e.target === outside.current) setOpenModal(false);
          }}
        >
          <CommentModal
            onClickDelete={
              modalContent === '삭제' ? onClickDelete : onClickReport
            }
            content={modalContent}
          />
        </ModalBg>
      )}
    </CommentWrapper>
  );
};

export default PostComment;
