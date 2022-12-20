import { useState } from 'react';
import TopChatNav from '../../components/CommonUI/Nav/TopChatNav/TopChatNav';
import Comment from '../../components/CommonUI/Comment/Comment';
import PostModal from '../../components/CommonUI/PostModal/PostModal';
import Button from '../../components/atoms/Button/Button';

import {
  TopContainer,
  ChatRoomMoreModal,
  ChatRoomSection,
  EachPersonWrapper,
  ProfileImg,
  BoxAndTimeWrapper,
  TheOtherPersonTextBox,
  TalkingAbout,
  TheOtherPersonTime,
  MyBoxAndTimeWrapper,
  MyTextBox,
  MyTalk,
  MyTime,
} from './styled';

import profileImg from '../../assets/profile.png';
import animalImg from '../../assets/dog.png';
import moreBtn from '../../assets/icon-more-vertical.png';

const ChatRoom = () => {
  const [modal, setModal] = useState(false);

  return (
    <TopContainer>
      <TopChatNav />
      <ChatRoomMoreModal
        type='button'
        onClick={() => {
          setModal(!modal);
        }}
      >
        <img src={moreBtn} alt='더보기 모달' />
      </ChatRoomMoreModal>
      <ChatRoomSection>
        <h1 className='ir'>채팅방</h1>
        <EachPersonWrapper>
          <ProfileImg src={profileImg} alt='채팅 상대방 프로필' />
          <BoxAndTimeWrapper>
            <TheOtherPersonTextBox>
              <TalkingAbout>
                옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여,
                뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할
                넣는 풍부하게 뛰노는 인생의 힘있다.
              </TalkingAbout>
            </TheOtherPersonTextBox>
            <TheOtherPersonTime>12:39</TheOtherPersonTime>
          </BoxAndTimeWrapper>
        </EachPersonWrapper>
        <EachPersonWrapper>
          <ProfileImg src={profileImg} alt='채팅 상대방 프로필' />
          <BoxAndTimeWrapper>
            <TheOtherPersonTextBox>
              <TalkingAbout>안녕하세요. 감귤 사고싶어요요요요요</TalkingAbout>
            </TheOtherPersonTextBox>
            <TheOtherPersonTime>12:41</TheOtherPersonTime>
          </BoxAndTimeWrapper>
        </EachPersonWrapper>
        {/* 나 */}
        <MyBoxAndTimeWrapper>
          <MyTime>12:50</MyTime>
          <MyTextBox>
            <MyTalk>네 말씀하세요.</MyTalk>
          </MyTextBox>
        </MyBoxAndTimeWrapper>
        <MyBoxAndTimeWrapper>
          <MyTime>12:51</MyTime>
          <img src={animalImg} alt='강아지 이미지' />
        </MyBoxAndTimeWrapper>
      </ChatRoomSection>
      <Comment
        whatImg='diffImg'
        whatPlaceholder='inputMessage'
        chatRoomClick='send'
      />
      {modal === true ? <PostModal /> : null}
    </TopContainer>
  );
};

export default ChatRoom;
