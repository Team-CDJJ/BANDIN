import Img from '../../atoms/Img/img';

const PostComment = ({ image, alt, username, comment }) => {
  return (
    <div>
      <Img width='36px' height='36px' src={image} alt={alt} />
      <strong>{username}</strong>
      <p>{comment}</p>
      <button type='button'>햄버거</button>
    </div>
  );
};

export default PostComment;
