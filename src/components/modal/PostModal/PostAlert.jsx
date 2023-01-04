import { useRecoilValue } from 'recoil';
import deletePost from '../../../api/post/deletePost';
import postReportPost from '../../../api/post/postReportPost';
import { accountNameValue } from '../../../atoms';
import { AlertWrapper, AlertTxt, BtnsWrapper, ModalBtn } from '../styled';

const PostAlert = ({ id, isMyPost, handleAlertColse }) => {
  const accountname = useRecoilValue(accountNameValue);

  const handleDeletePost = () => {
    deletePost(id)
      .then((data) => {
        console.log(data);
        window.location = `/profile/${accountname}`;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleReportPost = () => {
    postReportPost(id)
      .then(() => {
        alert('게시물이 신고되었습니다!');
        window.location = '/home';
      })
      .error((error) => {
        console.log(error);
      });
  };

  return (
    <AlertWrapper>
      <AlertTxt>
        {isMyPost ? '게시글을 삭제할까요?' : '게시글을 신고할까요?'}
      </AlertTxt>
      <BtnsWrapper onClick={(e) => e.stopPropagation()}>
        <ModalBtn type='button' onClick={handleAlertColse}>
          취소
        </ModalBtn>
        <ModalBtn
          type='button'
          onClick={isMyPost ? handleDeletePost : handleReportPost}
        >
          {isMyPost ? '삭제' : '신고'}
        </ModalBtn>
      </BtnsWrapper>
    </AlertWrapper>
  );
};

export default PostAlert;
