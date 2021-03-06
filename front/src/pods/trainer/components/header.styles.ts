import { css } from 'emotion';
import { theme } from 'core/theme';
const { palette, typography, spacing } = theme;

export const headerContainer = css`
  width: 100%;
  margin-bottom: ${spacing(80)};
  margin-top: ${spacing(60)};
`;

export const inputField = css`
  margin-bottom: ${spacing(30)};
  &:last-of-type {
    margin-bottom: ${spacing(0)};
  }
`;

export const label = css`
  color: ${palette.text.primary};
  font-size: 18px;
  font-family: ${typography.fontFamily};
`;

export const inputIconContainer = css`
  margin-top: 10px;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const textArea = css`
  font-family: ${typography.fontFamily};
  min-width: 0;
  color: ${palette.text.primary};
  margin-right: 0;
  border: 2px solid #ccc;
  border-top-left-radius: 0.4rem;
  border-bottom-left-radius: 0.4rem;
  font-size: 16px;
  padding: 18px;
  flex: 1;
  &:hover,
  &:active,
  &:focus {
    border: 2px solid #ccc;
    outline: none;
  }
  &::selection {
    background: #ccc;
  }

  @media (max-width: 380px) {
    font-size: 14px;
    padding: 16px;
  }
`;

export const copyIcon = css`
  font-size: 30px;
  @media (max-width: 380px) {
    font-size: 26px;
  }
`;

export const copyBtn = css`
  background-color: ${palette.background.default};
  border-right: 2px solid #ccc;
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
  border-left: none;
  outline: none;
  height: 59px;
  width: 59px;
  border-top-right-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  &:hover {
    cursor: pointer;
    background-color: #ccc;
  }
  &:active {
    background-color: #fff;
  }

  @media (max-width: 380px) {
    height: 52px;
    width: 52px;
  }
`;
