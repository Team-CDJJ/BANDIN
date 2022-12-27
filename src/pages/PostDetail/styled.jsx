import styled, { css } from 'styled-components';

export const PostWrapper = styled.div`
  ${({ theme }) => {
    return css`
      margin-top: 68px;
      padding-bottom: 24px;
      border-bottom: 1px solid ${theme.colors.greyDB};
    `;
  }}
`;

export const CommentWrapper = styled.section`
  padding: 18px 16px;
`;
