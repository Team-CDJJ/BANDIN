import styled from 'styled-components';

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 54px 34px;

  input {
    &:nth-child(4) {
      margin-bottom: 30px;
    }
  }
`;

export const SignUpTitle = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 37px;
`;

export const InputLabel = styled.label`
  font-size: 12px;
  color: #767676;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 33px;
  border: none;
  background: transparent;
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: 19px;
  &::placeholder {
    color: #dbdbdb;
  }
`;

export const SignUpButton = styled.button`
  width: 100%;
  background-color: #7143df;
  color: #ffffff;
  padding: 13px 0;
  border: none;
  border-radius: 44px;
  margin-bottom: 20px;
  &:disabled {
    background-color: #bdabe8;
  }
`;
