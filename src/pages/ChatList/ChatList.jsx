import TopBasicNav from '../../components/CommonUI/Nav/TopBasicNav/TopBasicNav';
import TabMenu from '../../components/CommonUI/TabMenu/TabMenu';
import {
  Section,
  ChatLink,
  TextContainer,
  ChatName,
  ChatTxt,
  ChatDate,
} from './styled';

const ChatList = () => {
  return (
    <>
      <TopBasicNav />
      <Section>
        <h1 className='ir'>채팅 목록</h1>
        <ChatLink to='/chatlist/chatroom'>
          <TextContainer>
            <ChatName>베이스 기타 삽니다!!</ChatName>
            <div>
              <ChatTxt>네 맞습니다! 튜닝 되어 있을까요?</ChatTxt>
              <ChatDate>2023.01.03</ChatDate>
            </div>
          </TextContainer>
        </ChatLink>

        <ChatLink to='/chatlist/chatroom'>
          <TextContainer>
            <ChatName>밴드음악조아</ChatName>
            <div>
              <ChatTxt>Jackson Dinky Arch Top 7현 이미 팔렸나요?</ChatTxt>
              <ChatDate>2023.01.02</ChatDate>
            </div>
          </TextContainer>
        </ChatLink>

        <ChatLink to='/chatlist/chatroom'>
          <TextContainer>
            <ChatName>브래멘음악대</ChatName>
            <div>
              <ChatTxt>제가 학생이라서 5만원 네고 안되나요?</ChatTxt>
              <ChatDate>2023.01.02</ChatDate>
            </div>
          </TextContainer>
        </ChatLink>
        <ChatLink to='/chatlist/chatroom'>
          <TextContainer>
            <ChatName>올해꼭내한간다</ChatName>
            <div>
              <ChatTxt>앰프 2개 준비되어 있습니다 :)</ChatTxt>
              <ChatDate>2023.01.01</ChatDate>
            </div>
          </TextContainer>
        </ChatLink>

        <ChatLink to='/chatlist/chatroom'>
          <TextContainer>
            <ChatName>두둥탁</ChatName>
            <div>
              <ChatTxt>홍대역 5분거리에 합주실이 있습니다.</ChatTxt>
              <ChatDate>2023.01.01</ChatDate>
            </div>
          </TextContainer>
        </ChatLink>
      </Section>
      <TabMenu place='chat' />
    </>
  );
};
export default ChatList;
