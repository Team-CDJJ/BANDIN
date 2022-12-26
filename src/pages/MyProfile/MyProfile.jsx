import TopBasicNav from '../../components/CommonUI/Nav/TopBasicNav/TopBasicNav';
import ProfileInfo from '../../components/modules/Profile/ProfileInfo';
import TabMenu from '../../components/CommonUI/TabMenu/TabMenu';
import ProfilePost from '../ProfilePost/ProfilePost';

const MyProfile = () => {
  return (
    <div>
      <TopBasicNav />
      <ProfileInfo />
      <ProfilePost />
      <TabMenu place='myprofile' />
    </div>
  );
};

export default MyProfile;
