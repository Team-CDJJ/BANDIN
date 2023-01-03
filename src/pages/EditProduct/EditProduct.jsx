import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TopUploadNav from '../../components/CommonUI/Nav/TopUploadNav/TopUploadNav';
import { ModiProductSection, ModiProductForm, ModiImageDesc } from './styled';
import ProductImgInput from '../../components/modules/ProductImgInput/ProductImgInput';
import InputBox from '../../components/atoms/InputBox/Input';
import getProductData from '../../api/editProduct/getProductData';
import putModifiedData from '../../api/editProduct/putModifiedData';

const EditProduct = () => {
  const { productId } = useParams();
  const [price, setPrice] = useState('');
  const [itemImage, setItemImage] = useState('');
  const [newItemImage, setNewItemImage] = useState('');

  const [isNameValid, setIsNameValid] = useState(false);
  const [nameError, setNameError] = useState('');

  const [isPriceValid, setIsPriceValid] = useState(false);
  const [priceError, setPriceError] = useState('');

  const [isLinkValid, setIsLinkValid] = useState(false);
  const [linkError, setLinkError] = useState('');
  const accountname = localStorage.getItem('accountname');

  const [inputValue, setInputValue] = useState({
    itemName: '',
    link: '',
  });

  const handleData = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const { itemName, link } = inputValue;

  // 가격형식
  const priceFormat = (str) => {
    const comma = (str) => {
      str = String(str);
      return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
    };
    const uncomma = (str) => {
      str = String(str);
      return str.replace(/[^\d]+/g, '');
    };
    return comma(uncomma(str));
  };

  useEffect(() => {
    getProductData(productId)
      .then((data) => {
        console.log('기존 상품정보 확인', data.product.itemImage);
        setItemImage(data.product.itemImage);
        setPrice(String(data.product.price));
        setInputValue({
          itemName: data.product.itemName,
          link: data.product.link,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(itemImage);

  // 상품명,가격,판매 링크 입력시 화면에 반영
  const handlePrice = (event) => {
    if (event.target.id === 'price') {
      setPrice(priceFormat(event.target.value));
    }
  };

  // 상품명 유효성 검사
  useEffect(() => {
    const nameValidator = () => {
      if (itemName.length >= 2 && itemName.length <= 15) {
        setIsNameValid(true);
        setNameError('');
      } else {
        setIsNameValid(false);
        setNameError('* 2~15자 이내여야 합니다.');
      }
    };
    nameValidator();
  }, [itemName]);

  // 가격 유효성 검사
  useEffect(() => {
    const priceValidator = () => {
      // eslint-disable-next-line no-restricted-globals
      if (!isNaN(price.replaceAll(',', ''))) {
        setIsPriceValid(true);
        setPriceError('');
        // eslint-disable-next-line no-restricted-globals
      } else {
        setIsPriceValid(false);
        setPriceError('* 숫자만 입력 가능합니다.');
      }
    };
    priceValidator();
  }, [price]);

  // 판매 링크 유효성 검사
  useEffect(() => {
    const linkValidator = () => {
      if (link.length > 0) {
        setIsLinkValid(true);
        setLinkError('');
      } else {
        setIsLinkValid(false);
        setLinkError('* URL을 입력해 주세요.');
      }
    };
    linkValidator();
  }, [link]);

  // 수정된 상품 정보 제출
  const handleSubmit = async (event) => {
    event.preventDefault();
    const modifiedData = {
      product: {
        itemName: itemName,
        price: parseInt(price.replaceAll(',', ''), 10),
        link: link,
        itemImage: newItemImage === '' ? itemImage : newItemImage,
      },
    };

    putModifiedData(productId, modifiedData)
      .then((data) => {
        console.log(data);
        window.location = `/profile/${accountname}`;
      })
      .catch((error) => {
        if (error.response.status === 422) {
          console.log(error);
          alert(`${error.response.data.message}`);
        } else {
          console.log(error);
        }
      });
  };

  return (
    <>
      <TopUploadNav
        state={isNameValid && isPriceValid && isLinkValid ? null : 'disabled'}
        disabled={
          isNameValid && isPriceValid && isLinkValid ? null : 'disabled'
        }
        onClick={handleSubmit}
        tit='저장'
      />
      <ModiProductSection>
        <h1 className='ir'>상품 수정 페이지</h1>
        <ModiProductForm onSubmit={handleSubmit}></ModiProductForm>
        <ModiImageDesc>이미지수정</ModiImageDesc>
        <ProductImgInput
          setNewItemImage={setNewItemImage}
          newItemImage={newItemImage}
          itemImage={itemImage}
        />
        <InputBox
          label='상품명'
          type='text'
          id='itemName'
          name='itemName'
          placeholder='2~15자 이내여야 합니다.'
          value={itemName || ''}
          errorMsg={nameError}
          onChange={handleData}
          required
        />
        <InputBox
          label='가격'
          type='text'
          id='price'
          name='price'
          placeholder='숫자만 입력 가능합니다.'
          value={price || ''}
          errorMsg={priceError}
          onChange={handlePrice}
          required
        />
        <InputBox
          label='판매 링크'
          type='url'
          id='link'
          name='link'
          placeholder='URL을 입력해 주세요.'
          value={link || ''}
          errorMsg={linkError}
          onChange={handleData}
          required
        />
      </ModiProductSection>
    </>
  );
};

export default EditProduct;
