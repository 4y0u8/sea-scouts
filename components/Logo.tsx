// components/Logo.tsx
'use client'

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 150%; // Ensure it takes full height of the navbar
`;

const Logo = () => {
  return (
    <LogoContainer>
      <Image 
        src="/images/logo.png" // Path to your logo image in the public directory
        alt="Logo"
        width={100} // Adjust width as needed
        height={80} // Adjust height as needed
        style={{ objectFit: 'contain' }} // Ensure the logo maintains its aspect ratio
      />
    </LogoContainer>
  );
};

export default Logo;