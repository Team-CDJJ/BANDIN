import Button from '../../atoms/Button/Button';
import CircleBtn from './styled';

const YourProfileBtn = ({ isFollow, handleFollow, handleUnFollow }) => {
  return (
    <>
      <CircleBtn className='msg' />
      {isFollow === false ? (
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
      )}
      <CircleBtn className='share' />
    </>
  );
};

export default YourProfileBtn;
