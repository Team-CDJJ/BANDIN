import UploadBtnLabel from './styled';

const UploadBtn = ({ onChange }) => {
  return (
    <UploadBtnLabel>
      <p className='ir'>이미지 파일 업로드</p>
      <input
        type='file'
        multiple='multiple'
        accept='image/*'
        onChange={onChange}
        className='ir'
      />
    </UploadBtnLabel>
  );
};

export default UploadBtn;
