'use client';

import { ReactNode, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import GlobalStyles from '../styles/GlobalStyles';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import './globals.css';
import StyledComponentsRegistry from './registry';
import styled, { keyframes, css } from 'styled-components';

// 1. Animation definition
const flipAnimation = keyframes`
  0% { transform: rotateY(0deg); }
  50% { transform: rotateY(180deg); }
  100% { transform: rotateY(360deg); }
`;

// 2. Styled components
const LayoutContainer = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
`;

const MainContent = styled.main`
  width: 100%;
  padding: 0 ${theme.spacing.containerPadding};
  margin: 0 auto;
  min-height: calc(100vh - 120px);
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0 ${theme.spacing.mobilePadding};
  }
`;

const LoadingOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: ${theme.colors.background};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;

const LoadingImage = styled.div`
  ${css`
    animation: ${flipAnimation} 1.5s ease-in-out infinite;
  `}
  transform-style: preserve-3d;
  will-change: transform;
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 3. Remove PreloadedAssets to avoid hydration mismatch
  // Instead, preload in head or use Next.js built-in optimization

  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* Preload critical assets */}
        <link rel="preload" href="/images/logo.png" as="image" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <LayoutContainer>
              <Navbar />
              
              {/* 4. Only show loading state on client after mount */}
              {!mounted ? (
                <LoadingOverlay>
                  <LoadingImage>
                  <Image 
                      src="/images/logo.png"  // Path from public folder
                      alt="Scout Logo"
                      width={120}  // Required
                      height={40}  // Required
                      priority     // Optional for above-the-fold logos
                  />
                  </LoadingImage>
                </LoadingOverlay>
              ) : (
                <MainContent>
                  {children}
                </MainContent>
              )}

              <Footer />
            </LayoutContainer>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}