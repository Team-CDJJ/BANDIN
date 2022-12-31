import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  TopBasicNavSection,
  InnerBasicNav,
  PrevBtn,
  TopBasicNavBtn,
} from './styled';

import arrowLeft from '../../../../assets/icon-arrow-left.png';
import moreVertical from '../../../../assets/icon-more-vertical.png';
import NavVerticalModal from '../../PostModal/PostModal';

const TopBasicNav = ({ moreBtn }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();
  const handlePrev = () => {
    navigate(-1);
  };

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <TopBasicNavSection>
      <h1 className='ir'>상단바</h1>
      <InnerBasicNav>
        <PrevBtn onClick={handlePrev}>
          <img src={arrowLeft} alt='뒤로 가기' />
        </PrevBtn>
        {moreBtn ? null : (
          <TopBasicNavBtn onClick={showModal}>
            <img src={moreVertical} alt='더보기' />
          </TopBasicNavBtn>
        )}
      </InnerBasicNav>
      {modalOpen && <NavVerticalModal setModalOpen={setModalOpen} />}
    </TopBasicNavSection>
  );
};

export default TopBasicNav;
