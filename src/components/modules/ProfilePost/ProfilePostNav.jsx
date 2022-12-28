import { BtnWrapper, ProfilePostNavWrapper } from './styled';
import listOff from '../../../assets/icon-post-list-off.png';
import listOn from '../../../assets/icon-post-list-on.png';
import albumOff from '../../../assets/icon-post-album-off.png';
import albumOn from '../../../assets/icon-post-album-on.png';

const ProfilePostNav = ({
  postList,
  listClick,
  albumClick,
  onClickList,
  onClickAlbum,
}) => {
  return (
    postList && (
      <ProfilePostNavWrapper>
        <h2 className='ir'>포스트 보기 형태 전환 바</h2>
        <BtnWrapper>
          <button type='button' className='list-btn' onClick={onClickList}>
            {!listClick ? (
              <img src={listOff} alt='' />
            ) : (
              <img src={listOn} alt='' />
            )}
          </button>
          <button type='button' className='album-btn' onClick={onClickAlbum}>
            {!albumClick ? (
              <img src={albumOff} alt='' />
            ) : (
              <img src={albumOn} alt='' />
            )}
          </button>
        </BtnWrapper>
      </ProfilePostNavWrapper>
    )
  );
};

export default ProfilePostNav;
