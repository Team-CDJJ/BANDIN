import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/Button/Button';

const YourProfileBtn = ({ isFollow }) => {
  const navigate = useNavigate();
  const handleFollow = () => {
    navigate('/addproduct');
  };

  const handleUnFollow = () => {
    navigate('/modifyprofile');
  };
  console.log(isFollow);

  return isFollow === false ? (
    <Button
      size='md'
      type='button'
      tit='팔로우'
      onClick={handleFollow}
    ></Button>
  ) : (
    <Button
      size='md'
      type='button'
      state='active'
      tit='언팔로우'
      onClick={handleUnFollow}
    ></Button>
  );
};

export default YourProfileBtn;
