import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import TopBasicNav from '../../components/CommonUI/Nav/TopBasicNav/TopBasicNav';
import ProfileInfo from '../../components/modules/Profile/ProfileInfo';
import TabMenu from '../../components/CommonUI/TabMenu/TabMenu';
import ProfilePost from '../ProfilePost/ProfilePost';
import CommonProduct from '../../components/CommonUI/CommonProduct/CommonProduct';
import getProductList from '../../api/getProductList/getProducList';
import getProfilePost from '../../api/post/getProfilePost';
import { accountNameValue } from '../../atoms';

const MyProfile = () => {
  const { accountName } = useParams();
  const accountname = useRecoilValue(accountNameValue);
  const [productList, setProductList] = useState([]);
  const [postList, setPostList] = useState([]);
  const [isMyPost, setIsMyPost] = useState(false);

  useEffect(() => {
    if (accountName === accountname) {
      setIsMyPost(true);
    }
  }, []);

  useEffect(() => {
    // 상품 목록
    getProductList(accountName)
      .then((data) => {
        setProductList(data.product);
        // console.log(data.product);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // 게시글 목록
    getProfilePost(accountName)
      .then((data) => {
        console.log(data);
        setPostList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <TopBasicNav />
      <ProfileInfo />
      {productList && <CommonProduct data={productList} />}
      <ProfilePost data={postList} isMyPost={isMyPost} />
      <TabMenu place='myprofile' />
    </>
  );
};

export default MyProfile;
