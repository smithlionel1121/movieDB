import React from "react";
import styled, { css } from "styled-components";

import * as colors from "../../colors";
import * as breakpoints from "../../breakpoints";

export default function SearchBar({
  icon,
  mobile = false,
  children,
  ...inputProps
}) {
  return (
    <SearchBarWrapper mobile={mobile}>
      <InputBarWrapper>
        <InputBar autoComplete="off" {...inputProps} />
        <SearchBarIcon src={icon} />
      </InputBarWrapper>

      {children}
    </SearchBarWrapper>
  );
}

const SearchBarWrapper = styled.div`
  ${(props) =>
    !props.mobile &&
    css`
      @media only screen and (max-width: ${breakpoints.md}) {
        display: none;
      }
    `}
`;

const InputBarWrapper = styled.div`
  position: relative;
`;

const InputBar = styled.input`
  border-style: none;
  border-bottom-style: solid;
  border-color: ${colors.primaryColor};
  color: ${colors.primaryColor};
  width: 100%;
  padding: 16px 0 16px 35px;
  box-sizing: border-box;
  outline: 0;
  font-size: 1.17em;
  font-weight: bold;

  &::placeholder {
    color: ${colors.primaryColor};
    font-weight: 300;
  }
`;

const SearchBarIcon = styled.img.attrs({ draggable: false })`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`;
