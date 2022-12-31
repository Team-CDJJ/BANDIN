import { AlertWrapper, AlertTxt, BtnsWrapper, ModalBtn } from '../styled';
import deleteProductData from '../../../api/modifyProduct/deleteProductData';

const ProductAlert = ({ productId, handleCancel }) => {
  const accountname = localStorage.getItem('accountname');

  const deleteProduct = (event) => {
    event.preventDefault();

    deleteProductData(productId)
      .then((data) => {
        console.log(data);
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

export default ProductAlert;
