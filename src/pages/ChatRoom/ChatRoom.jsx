import { useState } from 'react';
import TopChatNav from '../../components/CommonUI/Nav/TopChatNav/TopChatNav';
import Comment from '../../components/CommonUI/Comment/Comment';

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

import profileImg from '../../assets/guitar-buyer.jpg';
import guitarImg from '../../assets/guitar.jpg';
import moreBtn from '../../assets/icon-more-vertical.png';
import ChatRoomModal from '../../components/modal/ChatModal/ChatModal';

const ChatRoom = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <TopContainer>
      <TopChatNav title='베이스 기타 삽니다!!' />
      <ChatRoomMoreModal
        type='button'
        onClick={() => {
          setIsModalOpen(!isModalOpen);
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
                안녕하세요!! 올려주신 어쿠스틱 기타에 관심 있어서 디엠 보내요~!
                직거래 완전 가능합니당
              </TalkingAbout>
            </TheOtherPersonTextBox>
            <TheOtherPersonTime>12:39</TheOtherPersonTime>
          </BoxAndTimeWrapper>
        </EachPersonWrapper>
        <EachPersonWrapper>
          <ProfileImg src={profileImg} alt='채팅 상대방 프로필' />
          <BoxAndTimeWrapper>
            <TheOtherPersonTextBox>
              <TalkingAbout>
                앰프 같이 팔아주시면 돈 더 드릴 수 있습니다! 대신 문제 없는 걸로
                원해용 가방, 케이블, 스트랩은 무조건 있어야 합니다.ㅎㅎ
              </TalkingAbout>
            </TheOtherPersonTextBox>
            <TheOtherPersonTime>12:41</TheOtherPersonTime>
          </BoxAndTimeWrapper>
        </EachPersonWrapper>
        <MyBoxAndTimeWrapper>
          <MyTime>12:50</MyTime>
          <MyTextBox>
            <MyTalk>안녕하세요~ 이 기타 말씀하시는 거죠?</MyTalk>
          </MyTextBox>
        </MyBoxAndTimeWrapper>
        <MyBoxAndTimeWrapper>
          <MyTime>12:51</MyTime>
          <img src={guitarImg} alt='기타 이미지' />
        </MyBoxAndTimeWrapper>
        <EachPersonWrapper>
          <ProfileImg src={profileImg} alt='채팅 상대방 프로필' />
          <BoxAndTimeWrapper>
            <TheOtherPersonTextBox>
              <TalkingAbout>네 맞습니다! 튜닝 되어 있을까요?</TalkingAbout>
            </TheOtherPersonTextBox>
            <TheOtherPersonTime>12:53</TheOtherPersonTime>
          </BoxAndTimeWrapper>
        </EachPersonWrapper>
      </ChatRoomSection>
      <Comment
        whatImg='diffImg'
        whatPlaceholder='inputMessage'
        chatRoomClick='send'
      />
      {isModalOpen === true ? (
        <ChatRoomModal
          leaveChatRoom='채팅방 나가기'
          setIsModalOpen={setIsModalOpen}
        />
      ) : null}
    </TopContainer>
  );
};

export default ChatRoom;
