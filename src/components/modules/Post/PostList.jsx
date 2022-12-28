import CommonPost from '../../CommonUI/CommonPost/CommonPost';
import { PostListWapper } from './styled';

const PostList = ({ postList }) => {
  return (
    <PostListWapper>
      {postList && postList.length
        ? postList.map((post, idx) => (
            <li key={idx} className='div-post'>
              <CommonPost post={post} />
            </li>
          ))
        : null}
    </PostListWapper>
  );
};

export default PostList;
