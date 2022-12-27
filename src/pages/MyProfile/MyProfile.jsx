import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TopBasicNav from '../../components/CommonUI/Nav/TopBasicNav/TopBasicNav';
import ProfileInfo from '../../components/modules/Profile/ProfileInfo';
import TabMenu from '../../components/CommonUI/TabMenu/TabMenu';
import ProfilePost from '../ProfilePost/ProfilePost';
import CommonProduct from '../../components/CommonUI/CommonProduct/CommonProduct';
import getProductList from '../../api/getProductList/getProducList';

const MyProfile = () => {
  const { accountName } = useParams();
  const [productList, setProductList] = useState([]);

  // console.log(accountName);

  useEffect(() => {
    getProductList(accountName)
      .then((data) => {
        console.log(data);
        setProductList(data.product);
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
      <TabMenu place='myprsofile' />
    </>
  );
};

export default MyProfile;
