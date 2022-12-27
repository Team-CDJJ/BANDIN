import Button from '../../atoms/Button/Button';

const YourProfileBtn = ({ isFollow, handleFollow, handleUnFollow }) => {
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
