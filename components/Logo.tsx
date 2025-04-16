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
                src="/images/logo.png"
                alt="Scout Logo"
                width={120}  // Required
                height={40}  // Required
                priority     // For above-the-fold logos
              />
    </LogoContainer>
  );
};

export default Logo;