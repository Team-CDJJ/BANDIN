import { useParams } from 'react-router-dom';
import TopBasicNav from '../../components/CommonUI/Nav/TopBasicNav/TopBasicNav';
import ProfileInfo from '../../components/modules/Profile/ProfileInfo';
import TabMenu from '../../components/CommonUI/TabMenu/TabMenu';

const MyProfile = () => {
  const { accountName } = useParams();
  console.log(accountName);

  return (
    <div>
      <TopBasicNav />
      <ProfileInfo />
      <TabMenu place='myprofile' />
    </div>
  );
};

export default MyProfile;
