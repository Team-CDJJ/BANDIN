import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Img from '../../components/atoms/Img/img';
import TopUploadNav from '../../components/CommonUI/Nav/TopUploadNav/TopUploadNav';
import postUpload from '../../api/post/postUpload';
import { UploadWrapper, ImgBox, StyledTextArea } from './styled';
import postUploadImgs from '../../api/uploadImg/postUploadImgs';
import UploadBtn from '../../components/atoms/UploadBtn/UploadBtn';
import getMyInfo from '../../api/profile/getMyInfo';
import { apiUrl } from '../../api/api';
import deleteIcon from '../../assets/icon-delete.png';
import noneProfileImg from '../../assets/profile.png';
import { accountNameValue } from '../../atoms';

const UploadPost = () => {
  const [profileImg, setProfileImg] = useState('');
  const [text, setText] = useState('');
  const [imgSrc, setImgSrc] = useState([]);
  const accountname = useRecoilValue(accountNameValue);
  // const accountname = localStorage.getItem('accountname');
  const inputRef = useRef(null);

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

  const handleSetText = (e) => {
    setText(e.target.value);
  };

  const postData = {
    post: {
      content: text,
      image: imgSrc.join(', '),
    },
  };

  const handleUpload = () => {
    postUpload(postData)
      .then(() => {
        navigate(`/profile/${accountname}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUploadImgs = (e) => {
    const formData = new FormData();
    const imgInput = e.target.files[0];

    if (imgSrc.length > 2) {
      alert('이미지는 3장까지 업로드 할 수 있습니다.');
    }

    formData.append('image', imgInput);

    postUploadImgs(formData)
      .then((data) => {
        setImgSrc([...imgSrc, `${apiUrl}/${data[0].filename}`]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteImg = (e) => {
    const idx = e.target.parentElement.id;
    setImgSrc(imgSrc.filter((item) => item !== idx));
  };

  useEffect(() => {
    if (inputRef === null || inputRef.current === null) {
      return;
    }
    inputRef.current.style.height = '64px';
    inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
  }, []);

  const handleResize = useCallback(() => {
    if (inputRef === null || inputRef.current === null) {
      return;
    }
    inputRef.current.style.height = '64px';
    inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
  }, []);

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
          src={profileImg.includes('Ellipse.png') ? noneProfileImg : profileImg}
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
            onInput={handleResize}
            ref={inputRef}
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
