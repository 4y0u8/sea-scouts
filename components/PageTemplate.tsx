'use client'

import styled from 'styled-components'
import Navbar from './Navbar'
import Footer from './Footer'

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding-top: 80px; // Offset for fixed navbar
`

export default function PageTemplate({ children }: { children: React.ReactNode }) {
  return (
    <PageContainer>
      <Navbar />
      <MainContent>
        {children}
      </MainContent>
      <Footer />
    </PageContainer>
  )
}