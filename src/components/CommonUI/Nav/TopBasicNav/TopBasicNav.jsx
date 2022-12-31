import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  TopBasicNavSection,
  InnerBasicNav,
  PrevBtn,
  TopBasicNavBtn,
} from './styled';

import ProfileModal from '../../../modal/ProfileModal/ProfileModal';

const TopBasicNav = ({ moreBtn }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const handlePrev = () => {
    navigate(-1);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <TopBasicNavSection>
      <h1 className='ir'>상단바</h1>
      <InnerBasicNav>
        <PrevBtn onClick={handlePrev}></PrevBtn>
        {moreBtn ? null : <TopBasicNavBtn onClick={showModal}></TopBasicNavBtn>}
      </InnerBasicNav>
      {isModalOpen && <ProfileModal setIsModalOpen={setIsModalOpen} />}
    </TopBasicNavSection>
  );
};

export default TopBasicNav;
