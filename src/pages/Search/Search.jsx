import TabMenu from '../../components/CommonUI/TabMenu/TabMenu';
import TopSearchNav from '../../components/CommonUI/Nav/TopSearchNav/TopSearchNav';
import UserItem from '../../components/CommonUI/UserItem/UserItem';
import UserLists from './styled';

const UserSearch = () => {
  return (
    <section>
      <h1 className='ir'>계정 검색 페이지</h1>
      <TopSearchNav />
      <UserLists>
        <UserItem></UserItem>
        <UserItem></UserItem>
      </UserLists>
      <TabMenu place='search' />
    </section>
  );
};

export default UserSearch;
