import { useState } from 'react';
import {
  TopContainer,
  DropDownSection,
  CurrentTit,
  SelectUl,
  OptionLi,
} from './styled';

const DropDown = () => {
  const lists = [
    {
      key: 1,
      value: '밴드 매칭',
    },
    {
      key: 2,
      value: '상품 판매',
    },
    {
      key: 3,
      value: '정보 공유',
    },
    {
      key: 4,
      value: '음악 추천',
    },
    {
      key: 5,
      value: '악기 사용기',
    },
  ];
  const [isShow, setIsShow] = useState(false);
  const [currentValue, setCurrentValue] = useState('밴드 매칭');

  const handleChangeItem = (e) => {
    setCurrentValue(e.target.textContent);
  };

  return (
    <TopContainer>
      <DropDownSection onClick={() => setIsShow((prev) => !prev)}>
        <CurrentTit>{currentValue}</CurrentTit>
        <SelectUl show={isShow}>
          {lists.map((item) => (
            <OptionLi
              key={item.key}
              value={item.value}
              onClick={handleChangeItem}
            >
              {item.value}
            </OptionLi>
          ))}
        </SelectUl>
      </DropDownSection>
    </TopContainer>
  );
};

export default DropDown;
