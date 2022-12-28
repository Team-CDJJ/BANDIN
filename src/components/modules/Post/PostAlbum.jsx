import { PostGridWrapper } from './styled';

const PostAlbum = ({ postList }) => {
  console.log(postList);

  return (
    <PostGridWrapper>
      {postList && postList.length
        ? postList.map((post) => (
            <li key={post.id}>
              <img src={post.image} alt={post.content} />
            </li>
          ))
        : null}
    </PostGridWrapper>
  );
};

export default PostAlbum;
