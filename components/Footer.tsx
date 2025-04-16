"use client";
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { 
  FaFacebook, FaInstagram, FaYoutube, FaWhatsapp,
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock
} from 'react-icons/fa';
import { 
  FaHome, FaInfoCircle, FaCalendarAlt, FaImages
} from 'react-icons/fa';
import { GiSailboat, GiAnchor } from 'react-icons/gi';

// =====================
// Styled Components
// =====================
const FooterWrapper = styled.footer`
  background: linear-gradient(135deg, #1a365d 0%, #2c5282 100%);
  color: white;
  padding: 3rem 2rem;
  position: relative;
  overflow: hidden;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 2;
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    
    svg {
      color: #4299e1;
    }
  }
`;

const FooterLogo = styled.div`
  img {
    height: 80px;
    width: auto;
    margin-bottom: 1rem;
  }
  
  p {
    line-height: 1.6;
    opacity: 0.9;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
  
  svg {
    margin-top: 0.2rem;
    color: #4299e1;
  }
  
  div {
    flex: 1;
    
    p {
      margin: 0;
      line-height: 1.6;
    }
    
    a {
      color: white;
      text-decoration: none;
      transition: opacity 0.3s;
      
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  
  a {
    color: white;
    text-decoration: none;
    transition: transform 0.3s, opacity 0.3s;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    &:hover {
      transform: translateX(-5px);
      opacity: 0.8;
    }
    
    svg {
      color: #4299e1;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialIcon = styled.a<{ color: string }>`
  color: white;
  background: ${props => props.color};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px ${props => `${props.color}80`};
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  svg {
    color: #4299e1;
  }
`;

const Decoration = styled.div`
  position: absolute;
  font-size: 10rem;
  color: rgba(255, 255, 255, 0.03);
  z-index: 1;
  
  &:nth-child(1) {
    top: 20%;
    left: 10%;
  }
  
  &:nth-child(2) {
    bottom: 20%;
    right: 10%;
  }
`;

// =====================
// Component
// =====================
const MarineFooter = () => {
  const quickLinks = [
    { href: "/", text: "الرئيسية", icon: <FaHome /> },
    { href: "/about", text: "من نحن", icon: <FaInfoCircle /> },
    { href: "/activities", text: "الأنشطة", icon: <FaCalendarAlt /> },
    { href: "/gallery", text: "معرض الصور", icon: <FaImages /> },
    { href: "/contact", text: "اتصل بنا", icon: <FaPhone /> }
  ];

  const socialLinks = [
    { href: "https://facebook.com", icon: <FaFacebook />, color: "#1877F2", name: "Facebook" },
    { href: "https://instagram.com", icon: <FaInstagram />, color: "#E4405F", name: "Instagram" },
    { href: "https://youtube.com", icon: <FaYoutube />, color: "#CD201F", name: "YouTube" },
    { href: "https://wa.me/21652563846", icon: <FaWhatsapp />, color: "#25D366", name: "WhatsApp" }
  ];

  return (
    <FooterWrapper>
      {/* Decorative elements */}
      <Decoration><GiSailboat /></Decoration>
      <Decoration><GiAnchor /></Decoration>
      
      <FooterContent>
        {/* About Section */}
        <FooterSection>
          <h3><GiSailboat /> الفوج البحري</h3>
          <FooterLogo>
          <Image src="/logo.png" alt="Logo" width={100} height={100} />

            <p>
              فوج بحري يهدف إلى تنمية مهارات الشباب معتمدا الاختصاص البحري
              من خلال برامج متكاملة تجمع بين مختلف الج.
            </p>
          </FooterLogo>
        </FooterSection>

        {/* Contact Section */}
        <FooterSection>
          <h3><FaMapMarkerAlt /> معلومات التواصل</h3>
          <ContactItem>
            <FaMapMarkerAlt />
            <div>
              <p>سيدي بوعلي، سوسة، تونس</p>
            </div>
          </ContactItem>
          <ContactItem>
            <FaPhone />
            <div>
              <a href="tel:+21652563846">52563846 (216+)</a>
            </div>
          </ContactItem>
          <ContactItem>
            <FaEnvelope />
            <div>
              <a href="mailto:contact@scouts-maritime.tn">contact@scouts-maritime.tn</a>
            </div>
          </ContactItem>
          <ContactItem>
            <FaClock />
            <div>
              <p>السبت إلى الخميس: 8:00 ص - 6:00 م</p>
            </div>
          </ContactItem>
        </FooterSection>

        {/* Quick Links */}
        <FooterSection>
          <h3><GiAnchor /> روابط سريعة</h3>
          <QuickLinks>
            {quickLinks.map((link, index) => (
              <a key={index} href={link.href}>
                {link.icon}
                {link.text}
              </a>
            ))}
          </QuickLinks>
        </FooterSection>

        {/* Social Media */}
        <FooterSection>
          <h3><FaFacebook /> وسائل التواصل</h3>
          <p>تابعنا على المنصات الاجتماعية</p>
          <SocialIcons>
            {socialLinks.map((social, index) => (
              <SocialIcon
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                color={social.color}
                aria-label={social.name}
              >
                {social.icon}
              </SocialIcon>
            ))}
          </SocialIcons>
        </FooterSection>
      </FooterContent>

      <Copyright>
        <GiSailboat />
        <span>جميع الحقوق محفوظة © الفوج البحري بسيدي بوعلي {new Date().getFullYear()}</span>
      </Copyright>
    </FooterWrapper>
  );
};

export default MarineFooter;