import {} from './styled';

const DeleteAlert = () => {
  return (
    <div>
        <strong>게시글을 삭제할까요?</strong>
      <div>
        <button>취소</button>
        <button>삭제</button>
      </div>
    </div>
  );
};

export default DeleteAlert;