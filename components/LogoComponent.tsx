import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <Image 
        src="/images/logo.png" // Path to your logo image in the public directory
        alt="Logo"
        width={150} // Adjust width as needed
        height={50} // Adjust height as needed
      />
    </LogoContainer>
  );
};

export default Logo;