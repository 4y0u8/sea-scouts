"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaFacebook, FaInstagram, FaYoutube, FaWhatsapp,
  FaBars, FaTimes, FaHome, FaInfoCircle, FaCalendarAlt, 
  FaPhone, FaImages, FaShip, FaLifeRing
} from 'react-icons/fa';

// =====================
// Styled Components
// =====================
const NavbarWrapper = styled.div`
  position: relative;
  height: 80px;
`;

const NavbarContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(135deg, 
    rgba(26, 54, 93, 0.98) 0%, 
    rgba(66, 153, 225, 0.98) 100%);
  z-index: 1000;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  direction: rtl;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  img {
    height: 60px;
    width: auto;
    transition: transform 0.3s ease;
  }

  .logo-text {
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
    text-align: right;
    line-height: 1.2;
  }

  &:hover {
    img {
      transform: scale(1.05);
    }
  }
`;

const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.5rem 0;
  position: relative;
  display: flex;
  align-items: center;

  svg {
    margin-left: 0.5rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  display: none;
  z-index: 1001;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 80px;
  right: 0;
  width: 100%;
  height: calc(100vh - 80px);
  background: #1a365d;
  z-index: 999;
  padding: 1rem 2rem;
  box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
`;

const MobileNavLink = styled(NavLink)`
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
`;

const SocialIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const SocialIcon = styled.a<{ color: string }>`
  color: white;
  font-size: 1.3rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.color};
    transform: translateY(-3px);
  }
`;

// =====================
// Component
// =====================
const MarineNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen) {
        const target = event.target as HTMLElement;
        if (!target.closest('.mobile-menu') && !target.closest('.menu-button')) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/", text: "الرئيسية", icon: <FaHome /> },
    { href: "/about", text: "عن الفوج", icon: <FaInfoCircle /> },
    { href: "/activities", text: "الأنشطة البحرية", icon: <FaShip /> },
    { href: "/events", text: "الفعاليات", icon: <FaCalendarAlt /> },
    { href: "/community", text: "خدمة المجتمع", icon: <FaLifeRing /> },
    { href: "/gallery", text: "معرض الصور", icon: <FaImages /> },
    { href: "/contact", text: "اتصل بنا", icon: <FaPhone /> }
  ];

  // Updated social links based on common Tunisian scout group presences
  const socialLinks = [
    { href: "https://facebook.com/ScoutsSidiBouali", icon: <FaFacebook />, color: "#1877F2" },
    { href: "https://instagram.com/scouts_sidibouali", icon: <FaInstagram />, color: "#E4405F" },
    { href: "https://youtube.com/@ScoutsMarinsSidiBouali", icon: <FaYoutube />, color: "#CD201F" },
    { href: "https://wa.me/216XXXXXXXX", icon: <FaWhatsapp />, color: "#25D366" } // Replace with actual number
  ];

  return (
    <NavbarWrapper>
      <NavbarContainer
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <Logo>
        <Image src="/images/logo.png" alt="Logo" width={100} height={100} />

          <div className="logo-text">
          </div>
        </Logo>

        <DesktopNav>
          {navLinks.map((link, index) => (
            <NavLink key={index} href={link.href}>
              {link.text}
              {link.icon}
            </NavLink>
          ))}
          <SocialIcons>
            {socialLinks.map((social, index) => (
              <SocialIcon
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                color={social.color}
              >
                {social.icon}
              </SocialIcon>
            ))}
          </SocialIcons>
        </DesktopNav>

        <MobileMenuButton 
          className="menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </NavbarContainer>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            className="mobile-menu"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {navLinks.map((link, index) => (
              <MobileNavLink 
                key={index} 
                href={link.href}
                onClick={closeMobileMenu}
              >
                {link.text}
                {link.icon}
              </MobileNavLink>
            ))}
            <SocialIcons>
              {socialLinks.map((social, index) => (
                <SocialIcon
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  color={social.color}
                >
                  {social.icon}
                </SocialIcon>
              ))}
            </SocialIcons>
          </MobileMenu>
        )}
      </AnimatePresence>
    </NavbarWrapper>
  );
};

export default MarineNavbar;