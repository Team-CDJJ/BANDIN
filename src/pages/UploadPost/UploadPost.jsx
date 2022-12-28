import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { profileImgSrc } from '../../atoms';
import Img from '../../components/atoms/Img/img';
import TopUploadNav from '../../components/CommonUI/Nav/TopUploadNav/TopUploadNav';
import ProductImgInput from '../../components/modules/ProductImgInput/ProductImgInput';
import postUpload from '../../api/post/postUpload';
import { UploadWrapper, StyledTextArea } from './styled';
import postUploadImg from '../../api/uploadImg/postUploadImg';
import postUploadImgs from '../../api/uploadImg/postUploadImgs';
import UploadBtn from '../../components/atoms/UploadBtn/UploadBtn';

const UploadPost = () => {
  const [text, setText] = useState('');
  const [image, setImage] = useState([]);
  const profileImg = useRecoilValue(profileImgSrc);

  const handleSetText = (event) => {
    setText(event.target.value);
  };

  const postData = {
    post: {
      content: text,
      image: image.join(', '),
    },
  };

  const handleUpload = () => {
    console.log('click');
    postUpload(postData)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUploadImgs = () => {
    postUploadImgs(postData)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <TopUploadNav onClick={handleUpload} />
      <UploadWrapper>
        <Img
          width='42px'
          height='42px'
          src={profileImg}
          alt=''
          borderRadius='50%'
        />
        <form className='upload-form'>
          <StyledTextArea
            className='text-input'
            placeholder='게시글 입력하기...'
            cols='30'
            rows='5'
            onChange={handleSetText}
            value={text}
          />
        </form>
      </UploadWrapper>
      <UploadBtn onClick={handleUploadImgs} onChange={handleUploadImgs} />
    </div>
  );
};

export default UploadPost;
