import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DropDownSection, CurrentTit, SelectUl, OptionLi } from './styled';

const DropDown = () => {
  const lists = [
    {
      key: 1,
      value: '밴드 매칭',
      path: '/',
    },
    {
      key: 2,
      value: '상품 판매',
      path: '/',
    },
    {
      key: 3,
      value: '정보 공유',
      path: '/',
    },
    {
      key: 4,
      value: '음악 추천',
      path: '/',
    },
    {
      key: 5,
      value: '악기 사용기',
      path: '/',
    },
  ];
  const [isShow, setIsShow] = useState(false);
  const [currentValue, setCurrentValue] = useState(lists[0].value);

  const handleChangeItem = (e) => {
    setCurrentValue(e.target.getAttribute('value'));
  };

  return (
    <DropDownSection onClick={() => setIsShow((prev) => !prev)}>
      <CurrentTit>{currentValue}</CurrentTit>
      <SelectUl show={isShow}>
        {lists.map((item) => (
          <OptionLi
            key={item.key}
            value={item.value}
            onClick={handleChangeItem}
          >
            <Link to={item.path}>{item.value}</Link>
          </OptionLi>
        ))}
      </SelectUl>
    </DropDownSection>
  );
};

export default DropDown;
