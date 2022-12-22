import { useState, useEffect } from 'react';
import { accessInstance } from '../../api/api';

import TabMenu from '../../components/CommonUI/TabMenu/TabMenu';
import TopSearchNav from '../../components/CommonUI/Nav/TopSearchNav/TopSearchNav';
import UserItem from '../../components/CommonUI/UserItem/UserItem';
import NoneProfileImg from '../../assets/profile.png';
import { UserUl, SearchMain } from './styled';

const Search = () => {
  const [userInput, setUserInput] = useState('');
  const [userArr, setUserArr] = useState([]);

  useEffect(() => {
    if (userInput) {
      // eslint-disable-next-line consistent-return
      const searchUser = async (formData) => {
        try {
          const res = await accessInstance.get(
            `/user/searchuser/?keyword=${userInput}`,
            formData,
          );
          setUserArr(res.data);
          // return res.data;
        } catch (err) {
          console.error(err);
        }
      };
      searchUser();
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
