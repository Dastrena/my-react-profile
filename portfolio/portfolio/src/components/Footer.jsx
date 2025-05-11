import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
background: ${(props) => props.theme.headerBg};
  padding: 20px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  box-shadow: 0px -3px 10px rgba(0, 0, 0, 0.1);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2025 dasterna | Всі права захищено</p>
    </FooterContainer>
  );
};

export default Footer;