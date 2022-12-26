import { useState, useEffect } from 'react';

import TabMenu from '../../components/CommonUI/TabMenu/TabMenu';
import TopSearchNav from '../../components/CommonUI/Nav/TopSearchNav/TopSearchNav';
import UserItem from '../../components/CommonUI/UserItem/UserItem';
import NoneProfileImg from '../../assets/profile.png';
import { UserUl, SearchMain } from './styled';
import searchUser from '../../api/searchuser/searchuser';

const Search = () => {
  const [userInput, setUserInput] = useState('');
  const [userArr, setUserArr] = useState([]);

  useEffect(() => {
    if (userInput) {
      searchUser(userInput)
        .then((data) => {
          console.log(data);
          setUserArr(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userInput]);

  const getInput = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <>
      <TopSearchNav onChangeGetInput={getInput} />
      <SearchMain>
        <h1 className='ir'>계정 검색 페이지</h1>
        <UserUl>
          {userArr.slice(0, 100).map((item) => {
            return (
              <UserItem
                width='50px'
                height='50px'
                image={
                  item.image.includes('Ellipse.png')
                    ? NoneProfileImg
                    : item.image
                }
                alt={`${item.username}님의 프로필 이미지`}
                // eslint-disable-next-line no-underscore-dangle
                key={item._id}
                username={item.username}
                accountname={item.accountname}
              />
            );
          })}
        </UserUl>
      </SearchMain>
      <TabMenu place='search' />
    </>
  );
};

export default Search;
