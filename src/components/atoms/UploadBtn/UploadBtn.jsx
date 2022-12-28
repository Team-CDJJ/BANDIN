import StyledUploadBtn from './styled';

const UploadBtn = ({ onChange, onClick }) => {
  return (
    <>
      <label htmlFor='upload'>
        <p className='ir'>이미지 파일 업로드</p>
      </label>
      <StyledUploadBtn onClick={onClick} />
      <input
        type='file'
        id='upload'
        accept='image/*'
        onChange={onChange}
        className='ir'
      />
    </>
  );
};

export default UploadBtn;
