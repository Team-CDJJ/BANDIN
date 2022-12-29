import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Img from '../../components/atoms/Img/img';
import TopUploadNav from '../../components/CommonUI/Nav/TopUploadNav/TopUploadNav';
import postUpload from '../../api/post/postUpload';
import { UploadWrapper, ImgBox, StyledTextArea } from './styled';
import postUploadImgs from '../../api/uploadImg/postUploadImgs';
import UploadBtn from '../../components/atoms/UploadBtn/UploadBtn';
import getMyInfo from '../../api/profile/getMyInfo';
import { apiUrl } from '../../api/api';
import deleteIcon from '../../assets/icon-delete.png';

const UploadPost = () => {
  const [profileImg, setProfileImg] = useState('');
  const [text, setText] = useState('');
  const [imgSrc, setImgSrc] = useState([]);
  // const accountname = useRecoilValue(accountNameValue);
  const accountname = localStorage.getItem('accountname');

  const navigate = useNavigate();

  useEffect(() => {
    getMyInfo()
      .then((data) => {
        setProfileImg(data.image);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSetText = (event) => {
    setText(event.target.value);
  };

  const postData = {
    post: {
      content: text,
      image: imgSrc.join(', '),
    },
  };

  const handleUpload = () => {
    console.log('click');
    postUpload(postData)
      .then((data) => {
        console.log(data);
        navigate(`/profile/${accountname}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUploadImgs = (event) => {
    const formData = new FormData();
    const imgInput = event.target.files[0];
    console.log(imgInput);

    if (imgSrc.length > 2) {
      alert('이미지는 3장까지 업로드 할 수 있습니다.');
    }

    console.log(imgInput);
    formData.append('image', imgInput);

    postUploadImgs(formData)
      .then((data) => {
        console.log(data);
        setImgSrc([...imgSrc, `${apiUrl}/${data[0].filename}`]);
        console.log(imgSrc);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(imgSrc);

  const handleDeleteImg = (event) => {
    const idx = event.target.parentElement.id;
    console.log(idx);
    setImgSrc(imgSrc.filter((item) => item !== idx));
  };

  return (
    <>
      <TopUploadNav
        onClick={handleUpload}
        tit='업로드'
        state={text.length || imgSrc.length ? null : 'disabled'}
        disabled={text.length || imgSrc.length ? null : 'disabled'}
      />
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
          <ImgBox>
            {imgSrc?.map((img, idx) => {
              return (
                <li className='img-list' key={idx} id={idx}>
                  <Img
                    src={img}
                    width='168px'
                    height='126px'
                    alt=''
                    borderRadius='10px'
                  />
                  <button
                    className='delete-btn'
                    type='button'
                    onClick={handleDeleteImg}
                    id={img}
                  >
                    <img src={deleteIcon} alt='사진 삭제 버튼' />
                  </button>
                </li>
              );
            })}
          </ImgBox>
        </form>
        <UploadBtn onChange={handleUploadImgs} />
      </UploadWrapper>
    </>
  );
};

export default UploadPost;
