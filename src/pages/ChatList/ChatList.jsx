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
        {/* chatroom 경로 수정 필요 */}
        <ChatLink to='/chatroom'>
          <TextContainer>
            <ChatName>애월읍 위니브 감귤농장</ChatName>
            <ChatTxt>이번에 정정 언제하맨마씸?</ChatTxt>
            <ChatDate>2020.10.25</ChatDate>
          </TextContainer>
        </ChatLink>

        <ChatLink to='/chatroom'>
          <TextContainer>
            <ChatName>제주감귤마을</ChatName>
            <ChatTxt>깊은 어둠의 존재감, 롤스로이스 뉴 블랙 배지...</ChatTxt>
            <ChatDate>2020.10.25</ChatDate>
          </TextContainer>
        </ChatLink>

        <ChatLink to='/chatroom'>
          <TextContainer>
            <ChatName>누구네 농장 친환경 한라봉</ChatName>
            <ChatTxt>내 차는 내가 평가한다. 오픈 이벤트에 참여 하...</ChatTxt>
            <ChatDate>2020.10.25</ChatDate>
          </TextContainer>
        </ChatLink>
      </Section>
      <TabMenu />
    </>
  );
};

export default ChatList;
