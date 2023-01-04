import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/Button/Button';

const MyProfileBtn = () => {
  const navigate = useNavigate();
  const addProduct = () => {
    navigate('/addproduct');
  };

  const modifyProfile = () => {
    navigate('/editprofile');
  };

  return (
    <>
      <Button
        size='md'
        type='button'
        state='active'
        tit='프로필 수정'
        onClick={modifyProfile}
      ></Button>
      <Button
        size='md'
        type='button'
        state='active'
        tit='상품 등록'
        onClick={addProduct}
      ></Button>
    </>
  );
};

export default MyProfileBtn;
