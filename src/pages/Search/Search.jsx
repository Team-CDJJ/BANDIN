import TabMenu from '../../components/CommonUI/TabMenu/TabMenu';
import TopSearchNav from '../../components/CommonUI/Nav/TopSearchNav/TopSearchNav';
import UserItem from '../../components/CommonUI/UserItem/UserItem';
import { UserLists, SearchSection } from './styled';

const Search = () => {
  return (
    <>
      <TopSearchNav />
      <SearchSection>
        <h1 className='ir'>계정 검색 페이지</h1>
        <UserLists>
          <UserItem></UserItem>
          <UserItem></UserItem>
          <UserItem></UserItem>
        </UserLists>
      </SearchSection>
      <TabMenu place='search' />
    </>
  );
};

export default Search;
