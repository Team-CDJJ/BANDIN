import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TimeAgo from '../TimeAgo/TimeAgo';
import Img from '../../atoms/Img/img';
import { VerticalBtn } from '../PostUserInfo/styled';
import { CommentModal } from '../../CommonUI/PostModal/PostModal';
import {
  ModalBg,
  UserInfo,
  UserName,
  CreatedTime,
  CommentContent,
  CommentHeader,
} from './styled';
import deleteComment from '../../../api/comment/deleteComment';
import getPostComments from '../../../api/post/getPostComments';
import reportComment from '../../../api/comment/reportComment';

const PostComment = ({
  accountname,
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
  const [isDelete, setIsDelete] = useState(false);
  const curAccountName = localStorage.getItem('accountname');
  const outside = useRef();
  const navigate = useNavigate();

  const onClickModal = () => {
    if (accountname === curAccountName) {
      setModalContent('삭제');
    } else {
      setModalContent('신고');
    }
    setOpenModal(true);
  };

  const onClickDelete = () => {
    deleteComment(postId, commentId).then(() => {
      setIsDelete(!isDelete);
      setOpenModal(false);
    });
  };

  const onClickReport = () => {
    reportComment(postId, commentId).then(() => {
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

  const handleToProfile = () => {
    navigate(`/profile/${accountname}`);
  };

  return (
    <div>
      <CommentHeader>
        <UserInfo onClick={handleToProfile}>
          <Img
            width='36px'
            height='36px'
            borderRadius='50%'
            src={thumbnail}
            alt={alt}
          />
          <UserName>{username}</UserName>
        </UserInfo>
        <CreatedTime>{TimeAgo(new Date(createdAt))}</CreatedTime>
        <VerticalBtn onClick={onClickModal} />
      </CommentHeader>

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
    </div>
  );
};

export default PostComment;
