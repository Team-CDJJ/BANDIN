import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TopBasicNav from '../../components/CommonUI/Nav/TopBasicNav/TopBasicNav';
import ProfileInfo from '../../components/modules/Profile/ProfileInfo';
import TabMenu from '../../components/CommonUI/TabMenu/TabMenu';
import ProfilePost from '../ProfilePost/ProfilePost';
import CommonProduct from '../../components/CommonUI/CommonProduct/CommonProduct';
import getProductList from '../../api/getProductList/getProducList';
import getProfilePost from '../../api/getProfilePost/getProfilePost';

const MyProfile = () => {
  const { accountName } = useParams();
  const [productList, setProductList] = useState([]);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    // 상품 목록
    getProductList(accountName)
      .then((data) => {
        setProductList(data.product);
        console.log(data.product);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // 게시글 목록
    getProfilePost(accountName)
      .then((data) => {
        console.log(accountName);
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
      {/* <CommonProduct data={productList} /> */}
      {productList && <CommonProduct data={productList} />}
      <ProfilePost />
      <TabMenu place='myprofile' />
    </>
  );
};

export default MyProfile;
