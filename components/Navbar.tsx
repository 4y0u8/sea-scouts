'use client';
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
// Types
// =====================
interface NavLink {
  href: string;
  text: string;
  icon: React.ReactNode;
}

interface SocialLink {
  href: string;
  icon: React.ReactNode;
  color: string;
}

// =====================
// Theme Constants
// =====================
const NAVBAR_HEIGHT = '80px';
const MOBILE_BREAKPOINT = '768px';
const COLORS = {
  primary: '#1a365d',
  secondary: '#2c5282',
  white: '#ffffff',
  glass: 'rgba(255, 255, 255, 0.1)'
};

// =====================
// Styled Components
// =====================
const NavbarWrapper = styled.div`
  position: relative;
  height: ${NAVBAR_HEIGHT};
`;

const NavbarContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${NAVBAR_HEIGHT};
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
  cursor: pointer;
  
  img {
    height: 60px;
    width: auto;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${COLORS.white};
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.5rem 0;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row-reverse; // Icon before text
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 2px;
    background: ${COLORS.white};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  background: transparent;
  border: none;
  color: ${COLORS.white};
  font-size: 1.8rem;
  cursor: pointer;
  display: none;
  z-index: 1001;
  padding: 0.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: ${NAVBAR_HEIGHT};
  right: 0;
  width: 100%;
  height: calc(100vh - ${NAVBAR_HEIGHT});
  background: ${COLORS.primary};
  z-index: 999;
  padding: 2rem;
  overflow-y: auto;
`;

const MobileNavLink = styled(NavLink)`
  padding: 1rem 0;
  border-bottom: 1px solid ${COLORS.glass};
  width: 100%;
  font-size: 1.2rem;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid ${COLORS.glass};
`;

const SocialIcon = styled.a<{ color: string }>`
  color: ${COLORS.white};
  font-size: 1.3rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${COLORS.glass};
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
  const [isScrolled, setIsScrolled] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks: NavLink[] = [
    { href: "/", text: "الرئيسية", icon: <FaHome /> },
    { href: "/about", text: "عن الفوج", icon: <FaInfoCircle /> },
    { href: "/activities", text: "الأنشطة البحرية", icon: <FaShip /> },
    { href: "/events", text: "الفعاليات", icon: <FaCalendarAlt /> },
    { href: "/community", text: "خدمة المجتمع", icon: <FaLifeRing /> },
    { href: "/gallery", text: "معرض الصور", icon: <FaImages /> },
    { href: "/contact", text: "اتصل بنا", icon: <FaPhone /> }
  ];

  const socialLinks: SocialLink[] = [
    { href: "https://facebook.com/ScoutsSidiBouali", icon: <FaFacebook />, color: "#1877F2" },
    { href: "https://instagram.com/scouts_sidibouali", icon: <FaInstagram />, color: "#E4405F" },
    { href: "https://youtube.com/@ScoutsMarinsSidiBouali", icon: <FaYoutube />, color: "#CD201F" },
    { href: "https://wa.me/216XXXXXXXX", icon: <FaWhatsapp />, color: "#25D366" }
  ];

  return (
    <NavbarWrapper>
      <NavbarContainer
        initial={{ y: -100 }}
        animate={{ 
          y: 0,
          boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.2)' : 'none'
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <Logo
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image 
            src="/images/logo.png"
            alt="Scout Logo"
            width={120}
            height={40}
            priority
          />
        </Logo>

        <DesktopNav>
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.icon}
              {link.text}
            </NavLink>
          ))}
        </DesktopNav>

        <MobileMenuButton 
          className="menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </NavbarContainer>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            className="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {navLinks.map((link) => (
              <MobileNavLink 
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.icon}
                {link.text}
              </MobileNavLink>
            ))}
            
            <SocialIcons>
              {socialLinks.map((social) => (
                <SocialIcon
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  color={social.color}
                  aria-label={`Visit our ${social.href.includes('facebook') ? 'Facebook' : 
                    social.href.includes('instagram') ? 'Instagram' : 
                    social.href.includes('youtube') ? 'YouTube' : 'WhatsApp'}`}
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