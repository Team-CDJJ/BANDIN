import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import TimeAgo from '../TimeAgo/TimeAgo';
import Img from '../../atoms/Img/img';
import { VerticalBtn } from '../PostUserInfo/styled';
import {
  UserInfo,
  UserName,
  CreatedTime,
  CommentContent,
  CommentHeader,
} from './styled';
import deleteComment from '../../../api/comment/deleteComment';
import getPostComments from '../../../api/post/getPostComments';
import reportComment from '../../../api/comment/reportComment';
import CommentModal from '../../modal/CommentModal/CommentModal';
import { accountNameValue } from '../../../atoms';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [isDelete, setIsDelete] = useState(false);
  // const curAccountName = localStorage.getItem('accountname');
  const curAccountName = useRecoilValue(accountNameValue);
  const navigate = useNavigate();

  const onClickModal = () => {
    if (accountname === curAccountName) {
      setModalContent('삭제');
    } else {
      setModalContent('신고');
    }
    setIsModalOpen(true);
  };

  const onClickDelete = () => {
    deleteComment(postId, commentId).then(() => {
      setIsDelete(!isDelete);
      setIsModalOpen(false);
      alert('댓글이 삭제되었습니다!');
    });
  };

  const onClickReport = () => {
    reportComment(postId, commentId).then(() => {
      setIsDelete(!isDelete);
      setIsModalOpen(false);
      alert('댓글이 신고되었습니다!');
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
      {isModalOpen && (
        <CommentModal
          onClickDelete={
            modalContent === '삭제' ? onClickDelete : onClickReport
          }
          content={modalContent}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default PostComment;
