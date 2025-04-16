'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: linear-gradient(90deg, #2563eb, #3b82f6);
  color: white;
  padding: 2rem 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  direction: rtl;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: #10b981;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    position: relative;
    padding-bottom: 0.5rem;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 50px;
      height: 2px;
      background: white;
    }
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 0.75rem;
  }

  a {
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;

    &:hover {
      color: #10b981;
      padding-right: 0.5rem;
    }
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #10b981;
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  opacity: 0.8;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>روابط سريعة</h3>
          <FooterLinks>
            <li><Link href="/about">عن الفوج</Link></li>
            <li><Link href="/activities">الأنشطة</Link></li>
            <li><Link href="/gallery">معرض الصور</Link></li>
            <li><Link href="/contact">اتصل بنا</Link></li>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h3>معلومات الاتصال</h3>
          <FooterLinks>
            <li>العنوان: سيدي بوعلي، صفاقس</li>
            <li>الهاتف: 123 456 789</li>
            <li>البريد الإلكتروني: info@scouts-maritime.tn</li>
            <li>أوقات الدوام: 8ص - 5م</li>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h3>تابعنا</h3>
          <SocialMediaContainer>
            <SocialIcon href="https://www.facebook.com/profile.php?id=61570435333964" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </SocialIcon>
            <SocialIcon href="https://www.tiktok.com/@sea.scouts.sba" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/sea_scouts_sba/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </SocialIcon>
          </SocialMediaContainer>
        </FooterSection>
      </FooterContent>

      <Copyright>
        © {new Date().getFullYear()} الفوج البحري سيدي بوعلي. جميع الحقوق محفوظة
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;