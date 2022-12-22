import { useState } from 'react';
import TopChatNav from '../../components/CommonUI/Nav/TopChatNav/TopChatNav';
import Comment from '../../components/CommonUI/Comment/Comment';
import PostChatModal from '../../components/CommonUI/PostModal/PostModal';

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
      <TopChatNav title='베이스 기타 삽니다!!' />
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
                안녕하세요!! 글 올려주신 거 관심 있어서 디엠 보내요~! 직거래
                완전 가능합니당
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
                원해용 가방, 케이블, 스트랩은 무조건 있어야 하고 튜닝 환영합니다
                ㅎㅎ..
              </TalkingAbout>
            </TheOtherPersonTextBox>
            <TheOtherPersonTime>12:41</TheOtherPersonTime>
          </BoxAndTimeWrapper>
        </EachPersonWrapper>
        {/* 나 */}
        <MyBoxAndTimeWrapper>
          <MyTime>12:50</MyTime>
          <MyTextBox>
            <MyTalk>네 안녕하세요~ 디자인은 몇 번째 사진으로 원하세요?</MyTalk>
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
      {modal === true ? <PostChatModal leaveChatRoom='채팅방 나가기' /> : null}
    </TopContainer>
  );
};

export default ChatRoom;
