import { Navigate, useNavigate } from 'react-router-dom';
import { AlertWrapper, AlertTxt, BtnsWrapper, ModalBtn } from './styled';
import deleteProductData from '../../../api/modifyProduct/deleteProductData';
import { accountNameValue } from '../../../atoms';

const DeleteAlert = ({ productId, handleCancel }) => {
  const accountname = localStorage.getItem('accountname');
  const navigate = useNavigate();
  const deleteProduct = (event) => {
    event.preventDefault();

    deleteProductData(productId)
      .then((data) => {
        console.log(data);
        // return window.location.replace(`/profile/${accountNameValue}`);
        // return Navigate(`/profile/${accountNameValue}`);
        window.location = `/profile/${accountname}`;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <AlertWrapper>
      <AlertTxt>상품을 삭제할까요?</AlertTxt>
      <BtnsWrapper>
        <ModalBtn type='button' onClick={handleCancel}>
          취소
        </ModalBtn>
        <ModalBtn type='button' onClick={deleteProduct}>
          삭제
        </ModalBtn>
      </BtnsWrapper>
    </AlertWrapper>
  );
};

export default DeleteAlert;
