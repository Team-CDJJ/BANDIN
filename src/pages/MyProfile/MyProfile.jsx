import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import TopBasicNav from '../../components/CommonUI/Nav/TopBasicNav/TopBasicNav';
import ProfileInfo from '../../components/modules/Profile/ProfileInfo';
import TabMenu from '../../components/CommonUI/TabMenu/TabMenu';
import ProfilePost from '../../components/modules/ProfilePost/ProfilePost';
import CommonProduct from '../../components/CommonUI/CommonProduct/CommonProduct';
import getProductList from '../../api/getProductList/getProducList';
import getProfilePost from '../../api/post/getProfilePost';
import { accountNameValue } from '../../atoms';
import profileImg from '../../assets/profile.png';
import Img from '../../components/atoms/Img/img';
import { LoadingWrapper, LoadingTxt } from './styled';

const MyProfile = () => {
  const { accountName } = useParams();
  const accountname = useRecoilValue(accountNameValue);
  const [productList, setProductList] = useState([]);
  const [postList, setPostList] = useState([]);
  const [isMyPost, setIsMyPost] = useState(false);
  const [view, setView] = useState('pending');

  useEffect(() => {
    setIsMyPost(accountName === accountname);
  }, []);

  useEffect(() => {
    getProductList(accountName)
      .then((data) => {
        setProductList(data.product);
        setView('fulfilled');
      })
      .catch((error) => {
        console.log(error);
        setView('rejected');
      });
  }, [accountName]);

  useEffect(() => {
    getProfilePost(accountName)
      .then((data) => {
        setPostList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [accountName]);

  return (
    <>
      <TopBasicNav />
      {view === 'fulfilled' ? (
        <>
          <ProfileInfo />
          {productList && (
            <CommonProduct data={productList} isMyPost={isMyPost} />
          )}
          <ProfilePost data={postList} isMyPost={isMyPost} />
          <TabMenu place='myprofile' />
        </>
      ) : (
        <LoadingWrapper>
          <Img src={profileImg} alt='프로필 이미지' className='loading-img' />
          <LoadingTxt>빠르게 로딩중!!</LoadingTxt>
        </LoadingWrapper>
      )}
    </>
  );
};

export default MyProfile;
