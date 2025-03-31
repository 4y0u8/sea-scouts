"use client";
import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaAnchor, FaShip, FaUsers, FaRegCompass, FaCalendarAlt, FaPhone, 
  FaTwitter, FaFacebook, FaInstagram, FaEnvelope 
} from 'react-icons/fa';
import { 
  GiSailboat, GiWaveSurfer, GiFishingBoat, GiShipWheel 
} from 'react-icons/gi';
import { 
  MdOutlineHistory, MdGroups, MdEmojiEvents 
} from 'react-icons/md';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

// ---------------------
// Type Definitions
// ---------------------
interface Feature {
  icon: React.ReactNode;
  title: string;
  text: string;
}

interface GalleryItem {
  image: string;
  title: string;
  description: string;
}

interface Testimonial {
  text: string;
  name: string;
  role: string;
  image: string;
}

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social?: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
}

interface FAQItem {
  question: string;
  answer: string;
}

// ---------------------
// Theme & Animations
// ---------------------
const theme = {
  colors: {
    primary: '#1a365d',
    secondary: '#2c5282',
    accent: '#4299e1',
    lightBlue: '#bee3f8',
    darkBlue: '#1a365d',
    white: '#ffffff',
    offWhite: '#f8fafc',
    text: '#1e293b',
    sand: '#e2e8f0',
    wave: '#3182ce',
  },
  fonts: {
    primary: "'Tajawal', sans-serif",
    arabic: "'Noto Sans Arabic', sans-serif",
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
      black: 900
    }
  },
  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem'
  }
};

// Animation keyframes
const floatAnimation = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

// ---------------------
// Base Components
// ---------------------
const Container = styled.div`
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
  font-family: ${theme.fonts.arabic};
  direction: rtl;
  overflow-x: hidden;

  @media (max-width: ${theme.breakpoints.xs}) {
    padding: 0 ${theme.spacing.xs};
  }
`;

const Section = styled.section`
  padding: ${theme.spacing.xxl} 0;
  position: relative;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: ${theme.fonts.weights.black};
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.darkBlue};
  position: relative;
  display: inline-block;
  text-align: center;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing.sm};
    right: 0;
    width: 70%;
    height: 4px;
    background: linear-gradient(90deg, ${theme.colors.accent}, ${theme.colors.primary});
    border-radius: 2px;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 2.2rem;
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    font-size: 1.8rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: ${theme.colors.text};
  max-width: 800px;
  margin: 0 auto ${theme.spacing.xl};
  line-height: 1.6;
  text-align: center;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1.2rem;
    margin-bottom: ${theme.spacing.lg};
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    font-size: 1rem;
  }
`;

// ---------------------
// Hero Section
// ---------------------
const HeroSection = styled(Section)`
  height: 100vh;
  min-height: 600px;
  background: 
    linear-gradient(135deg, rgba(26, 54, 93, 0.9) 0%, rgba(66, 153, 225, 0.9) 100%),
    url('/images/ocean-wave.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  margin-bottom: -5rem;

  @media (max-width: ${theme.breakpoints.md}) {
    height: 80vh;
    min-height: 500px;
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    height: 70vh;
    min-height: 400px;
  }
`;

const HeroContent = styled(motion.div)`
  text-align: center;
  color: ${theme.colors.white};
  padding: ${theme.spacing.md};
  max-width: 900px;
  position: relative;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: ${theme.fonts.weights.black};
  margin-bottom: ${theme.spacing.sm};
  line-height: 1.2;
  background: linear-gradient(to right, ${theme.colors.white}, ${theme.colors.lightBlue});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 3rem;
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.8rem;
  margin-bottom: ${theme.spacing.lg};
  line-height: 1.5;
  font-weight: ${theme.fonts.weights.light};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1.4rem;
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    font-size: 1.1rem;
    margin-bottom: ${theme.spacing.md};
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: ${theme.breakpoints.xs}) {
    gap: ${theme.spacing.sm};
  }
`;

const HeroButton = styled(motion.a)`
  display: inline-block;
  padding: ${theme.spacing.sm} ${theme.spacing.xl};
  font-size: 1.2rem;
  font-weight: ${theme.fonts.weights.bold};
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  min-width: 180px;
  text-align: center;

  &:first-child {
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
  }

  &:last-child {
    background: transparent;
    color: ${theme.colors.white};
    border: 2px solid ${theme.colors.white};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xs} ${theme.spacing.lg};
    font-size: 1rem;
    min-width: 150px;
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;
    min-width: 120px;
  }
`;

const FloatingBoats = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  overflow: hidden;
`;

const FloatingBoat = styled(motion.div)`
  position: absolute;
  font-size: 4rem;
  color: rgba(255, 255, 255, 0.15);
  animation: ${floatAnimation} 8s ease-in-out infinite;
  
  &:nth-child(1) {
    top: 20%;
    left: 10%;
    animation-delay: 0s;
  }
  
  &:nth-child(2) {
    top: 40%;
    right: 15%;
    animation-delay: 1s;
  }
  
  &:nth-child(3) {
    bottom: 25%;
    left: 20%;
    animation-delay: 2s;
  }
  
  &:nth-child(4) {
    bottom: 15%;
    right: 25%;
    animation-delay: 3s;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 3rem;
  }
`;

// ---------------------
// About Section
// ---------------------
const AboutSection = styled(Section)`
  background: ${theme.colors.offWhite};
  position: relative;
  padding-top: 8rem;
`;

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.xl};
  align-items: center;

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
  }
`;

const AboutImage = styled(motion.div)`
  position: relative;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  
  @media (max-width: ${theme.breakpoints.lg}) {
    height: 400px;
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    height: 300px;
  }
`;

const AboutContent = styled.div`
  position: relative;
  z-index: 2;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1.1rem;
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    font-size: 1rem;
  }
`;

const AboutStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled(motion.div)`
  background: ${theme.colors.white};
  padding: ${theme.spacing.md};
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border-bottom: 4px solid ${theme.colors.accent};
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: ${theme.fonts.weights.black};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.xs};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: ${theme.colors.text};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

const WaterMark = styled.div`
  position: absolute;
  font-size: 15rem;
  color: rgba(66, 153, 225, 0.03);
  font-weight: ${theme.fonts.weights.black};
  z-index: 0;
  bottom: -50px;
  left: -50px;
  user-select: none;

  @media (max-width: ${theme.breakpoints.lg}) {
    font-size: 10rem;
    bottom: -30px;
    left: -30px;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

// ---------------------
// Features Section
// ---------------------
const FeaturesSection = styled(Section)`
  background: ${theme.colors.white};
  position: relative;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.xs}) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(motion.div)`
  background: ${theme.colors.white};
  border-radius: 15px;
  padding: ${theme.spacing.lg};
  text-align: center;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  border-top: 5px solid ${theme.colors.accent};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: ${theme.spacing.md};
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 3rem;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: ${theme.fonts.weights.bold};
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.darkBlue};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1.3rem;
  }
`;

const FeatureText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${theme.colors.text};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

// ---------------------
// Gallery Section
// ---------------------
const GallerySection = styled(Section)`
  background: ${theme.colors.offWhite};
  padding-bottom: ${theme.spacing.xl};
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.xl};
`;

const GalleryItem = styled(motion.div)`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  height: 250px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    .gallery-overlay {
      opacity: 1;
      transform: translateY(0);
    }
    
    .gallery-image {
      transform: scale(1.1);
    }
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    height: 200px;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const GalleryOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(26, 54, 93, 0.9), rgba(26, 54, 93, 0.7));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  color: white;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s ease;
  padding: ${theme.spacing.md};
`;

const GalleryTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: ${theme.fonts.weights.bold};
  margin-bottom: ${theme.spacing.xs};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1.1rem;
  }
`;

const GalleryDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 0.9rem;
  }
`;

// ---------------------
// Timeline Section
// ---------------------
const TimelineSection = styled(Section)`
  background: ${theme.colors.white};
  position: relative;
  overflow: hidden;
`;

const TimelineContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};

  &::before {
    content: '';
    position: absolute;
    width: 6px;
    background: linear-gradient(to bottom, ${theme.colors.primary}, ${theme.colors.accent});
    top: 0;
    bottom: 0;
    right: 50%;
    margin-right: -3px;
    border-radius: 10px;

    @media (max-width: ${theme.breakpoints.md}) {
      right: 31px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  position: relative;
  width: 50%;
  box-sizing: border-box;

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    right: -10px;
    background: ${theme.colors.accent};
    border: 3px solid ${theme.colors.primary};
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }

  &:nth-child(odd) {
    right: 0;
    
    &::after {
      right: -10px;
    }
  }

  &:nth-child(even) {
    left: 0;
    
    &::after {
      left: -10px;
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    width: 100%;
    padding-right: 70px;
    padding-left: 25px;
    
    &:nth-child(odd), &:nth-child(even) {
      right: auto;
      left: auto;
      
      &::after {
        right: 18px;
        left: auto;
      }
    }
  }
`;

const TimelineContent = styled.div`
  padding: ${theme.spacing.md};
  background: ${theme.colors.offWhite};
  position: relative;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  border-right: 4px solid ${theme.colors.primary};
`;

const TimelineYear = styled.div`
  font-size: 1.5rem;
  font-weight: ${theme.fonts.weights.black};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.xs};
  display: flex;
  align-items: center;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1.3rem;
  }
`;

const TimelineTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: ${theme.fonts.weights.bold};
  margin-bottom: ${theme.spacing.xs};
  color: ${theme.colors.darkBlue};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1.1rem;
  }
`;

const TimelineText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${theme.colors.text};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 0.9rem;
  }
`;

const TimelineIcon = styled.div`
  margin-left: ${theme.spacing.sm};
  font-size: 1.5rem;
  color: ${theme.colors.accent};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1.2rem;
  }
`;

// ---------------------
// Team Section
// ---------------------
const TeamSection = styled(Section)`
  background: ${theme.colors.offWhite};
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.xs}) {
    grid-template-columns: 1fr;
  }
`;

const TeamCard = styled(motion.div)`
  background: ${theme.colors.white};
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
    
    .team-image {
      transform: scale(1.05);
    }
  }
`;

const TeamImageWrapper = styled.div`
  height: 300px;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.md}) {
    height: 250px;
  }
`;

const TeamImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const TeamContent = styled.div`
  padding: ${theme.spacing.lg};
  text-align: center;
`;

const TeamName = styled.h3`
  font-size: 1.5rem;
  font-weight: ${theme.fonts.weights.black};
  margin-bottom: ${theme.spacing.xs};
  color: ${theme.colors.darkBlue};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1.3rem;
  }
`;

const TeamRole = styled.p`
  font-size: 1.1rem;
  color: ${theme.colors.accent};
  margin-bottom: ${theme.spacing.md};
  font-weight: ${theme.fonts.weights.bold};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

const TeamBio = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 0.9rem;
  }
`;

const TeamSocial = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.sm};
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${theme.colors.lightBlue};
  color: ${theme.colors.primary};
  transition: all 0.3s ease;
  
  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    transform: translateY(-3px);
  }

  @media (max-width: ${theme.breakpoints.md}) {
    width: 35px;
    height: 35px;
  }
`;

// ---------------------
// Testimonials Section
// ---------------------
const TestimonialsSection = styled(Section)`
  background: url('/images/wave-bg.jpg') center/cover no-repeat;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(26, 54, 93, 0.85);
  }
`;

const TestimonialsContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialCard = styled(motion.div)`
  background: ${theme.colors.white};
  border-radius: 15px;
  padding: ${theme.spacing.lg};
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  margin: 0 ${theme.spacing.sm};
  position: relative;
  border-left: 4px solid ${theme.colors.accent};
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.md};
  font-style: italic;
  position: relative;
  
  &::before, &::after {
    content: '"';
    font-size: 2.5rem;
    color: ${theme.colors.lightBlue};
    position: absolute;
    opacity: 0.3;
  }
  
  &::before {
    top: -15px;
    right: -10px;
  }
  
  &::after {
    bottom: -30px;
    left: -10px;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1.1rem;
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    font-size: 1rem;
  }
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const AuthorImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: ${theme.spacing.md};
  border: 3px solid ${theme.colors.lightBlue};

  @media (max-width: ${theme.breakpoints.md}) {
    width: 50px;
    height: 50px;
  }
`;

const AuthorInfo = styled.div`
  text-align: right;
`;

const AuthorName = styled.h4`
  font-size: 1.3rem;
  font-weight: ${theme.fonts.weights.bold};
  color: ${theme.colors.darkBlue};
  margin-bottom: ${theme.spacing.xs};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1.1rem;
  }
`;

const AuthorRole = styled.p`
  font-size: 1.1rem;
  color: ${theme.colors.primary};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

// ---------------------
// FAQ Section
// ---------------------
const FAQSection = styled(Section)`
  background: ${theme.colors.white};
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled(motion.div)`
  margin-bottom: ${theme.spacing.md};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid ${theme.colors.lightBlue};
`;

const FAQQuestion = styled.div`
  padding: ${theme.spacing.md};
  background: ${theme.colors.offWhite};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: ${theme.fonts.weights.bold};
  color: ${theme.colors.darkBlue};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1.1rem;
    padding: ${theme.spacing.sm};
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    font-size: 1rem;
  }
`;

const FAQAnswer = styled(motion.div)`
  padding: 0 ${theme.spacing.md};
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${theme.colors.text};
  background: ${theme.colors.white};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1rem;
    padding: 0 ${theme.spacing.sm};
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    font-size: 0.9rem;
  }
`;

const FAQIcon = styled.span`
  transition: transform 0.3s ease;
  font-size: 1.3rem;
  color: ${theme.colors.primary};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1.1rem;
  }
`;

// ---------------------
// CTA Section
// ---------------------
const CTASection = styled(Section)`
  padding: 8rem 0;
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.darkBlue} 100%);
  color: ${theme.colors.white};
  text-align: center;
  position: relative;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 6rem 0;
  }
`;

const CTAContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: 3rem;
  font-weight: ${theme.fonts.weights.black};
  margin-bottom: ${theme.spacing.md};
  line-height: 1.3;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 2.2rem;
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    font-size: 1.8rem;
  }
`;

const CTAText = styled.p`
  font-size: 1.5rem;
  margin-bottom: ${theme.spacing.lg};
  line-height: 1.5;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1.2rem;
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    font-size: 1rem;
  }
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  background: ${theme.colors.white};
  color: ${theme.colors.primary};
  padding: ${theme.spacing.sm} ${theme.spacing.xl};
  font-size: 1.2rem;
  font-weight: ${theme.fonts.weights.bold};
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xs} ${theme.spacing.lg};
    font-size: 1rem;
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const FloatingShips = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
`;

const FloatingShip = styled(FaShip)`
  position: absolute;
  font-size: 10rem;
  color: rgba(255, 255, 255, 0.05);
  animation: ${floatAnimation} 8s ease-in-out infinite;
  
  &:nth-child(1) {
    top: 20%;
    left: 10%;
    animation-delay: 0s;
  }
  
  &:nth-child(2) {
    bottom: 15%;
    right: 10%;
    animation-delay: 2s;
  }
  
  &:nth-child(3) {
    top: 40%;
    right: 25%;
    animation-delay: 4s;
  }
  
  &:nth-child(4) {
    bottom: 30%;
    left: 20%;
    animation-delay: 6s;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 8rem;
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    font-size: 5rem;
  }
`;

// ---------------------
// Data Arrays
// ---------------------
const features: Feature[] = [
  {
    icon: <GiSailboat />,
    title: "التدريب البحري المتخصص",
    text: "برامج تدريبية شاملة في الملاحة البحرية، السلامة المائية، وصيانة القوارب تحت إشراف مدربين معتمدين"
  },
  {
    icon: <MdGroups />,
    title: "بناء الفريق والقيادة",
    text: "ورش عمل وأنشطة تعاونية مصممة لتعزيز روح الفريق وتنمية مهارات القيادة بين الشباب"
  },
  {
    icon: <GiWaveSurfer />,
    title: "المغامرات البحرية",
    text: "رحلات استكشافية وتحديات بحرية في مختلف المواقع لتعزيز الثقة بالنفس والقدرة على التكيف"
  },
  {
    icon: <MdOutlineHistory />,
    title: "التراث البحري",
    text: "برامج للحفاظ على التراث البحري وتعريف الأجيال الجديدة بتاريخ وتقاليد البحرية"
  },
  {
    icon: <MdEmojiEvents />,
    title: "المسابقات والبطولات",
    text: "تنظيم مسابقات بحرية محلية وإقليمية لتنمية روح المنافسة الصحية وتحقيق التميز"
  },
  {
    icon: <GiShipWheel />,
    title: "التوجيه المهني",
    text: "توجيه الشباب نحو المهن البحرية وفرص العمل في القطاع البحري والملاحة"
  }
];

const galleryItems: GalleryItem[] = [
  {
    image: "/images/training.jpg",
    title: "جلسات تدريبية عملية",
    description: "تدريب مكثف على القوارب الشراعية تحت إشراف مدربين متخصصين"
  },
  {
    image: "/images/camp.jpg",
    title: "المعسكر الصيفي السنوي",
    description: "أنشطة ترفيهية وتعليمية تجمع بين المتعة وتنمية المهارات"
  },
  {
    image: "/images/competition.jpg",
    title: "مسابقات بحرية",
    description: "منافسات بحرية محلية وإقليمية لتنمية الروح الرياضية"
  },
  {
    image: "/images/graduation.jpg",
    title: "حفلات التخرج",
    description: "تكريم المتدربين المتميزين وتخريج دفعات جديدة"
  },
  {
    image: "/images/teamwork.jpg",
    title: "أنشطة بناء الفريق",
    description: "تمارين عملية لتعزيز العمل الجماعي والثقة المتبادلة"
  },
  {
    image: "/images/heritage.jpg",
    title: "التراث البحري",
    description: "فعاليات للحفاظ على التراث البحري وتعريف الأجيال الجديدة"
  }
];

const testimonials: Testimonial[] = [
  {
    text: "انضمامي للفوج البحري كان نقطة تحول في حياتي. تعلمت ليس فقط مهارات بحرية، ولكن أيضًا قيم الانضباط والعمل الجماعي التي ساعدتني في مسيرتي المهنية.",
    name: "محمد السعيدي",
    role: "قبطان - عضو سابق",
    image: "/images/testimonial1.jpg"
  },
  {
    text: "أفضل قرار اتخذته هو انضمام ابني لهذا الفوج. لاحظت تغيرًا كبيرًا في شخصيته من حيث الثقة بالنفس والمسؤولية والانضباط.",
    name: "أميرة الفهري",
    role: "والدة عضو",
    image: "/images/testimonial2.jpg"
  },
  {
    text: "كمتدرب جديد، أشعر أنني انضممت لعائلة كبيرة. المدربون يقدمون الدعم الكامل والزملاء يشجعون بعضهم البعض لتحقيق الأفضل.",
    name: "يوسف المرزوقي",
    role: "متدرب جديد",
    image: "/images/testimonial3.jpg"
  }
];

const timelineEvents: TimelineEvent[] = [
  {
    year: "2005",
    title: "تأسيس الفوج",
    description: "تأسيس الفوج البحري سيدي بوعلي بمجموعة صغيرة من المتحمسين للأنشطة البحرية",
    icon: <FaAnchor />
  },
  {
    year: "2010",
    title: "الاعتماد الرسمي",
    description: "حصول الفوج على الاعتماد الرسمي من وزارة الشباب والرياضة",
    icon: <FaShip />
  },
  {
    year: "2015",
    title: "أول مشاركة دولية",
    description: "مشاركة الفوج في أول بطولة دولية للقوارب الشراعية وحصوله على المركز الثالث",
    icon: <MdEmojiEvents />
  },
  {
    year: "2018",
    title: "توسعة المنشآت",
    description: "افتتاح المقر الجديد والمجهز بأحدث التجهيزات التدريبية البحرية",
    icon: <FaUsers />
  },
  {
    year: "2022",
    title: "برامج جديدة",
    description: "إطلاق برامج تدريبية متخصصة في السلامة البحرية والإنقاذ",
    icon: <FaRegCompass />
  }
];

const teamMembers: TeamMember[] = [
  {
    name: "الكابتن أحمد البحري",
    role: "المدير العام",
    image: "/images/team1.jpg",
    bio: "خبرة 25 عامًا في المجال البحري، مدرب معتمد من الاتحاد الدولي للقوارب الشراعية",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    name: "المدرب يوسف النجاري",
    role: "رئيس المدربين",
    image: "/images/team2.jpg",
    bio: "متخصص في تدريب القوارب الشراعية، حاصل على عدة جوائز محلية وإقليمية",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    name: "سارة الخليفي",
    role: "منسقة البرامج",
    image: "/images/team3.jpg",
    bio: "خريجة علوم بحرية، متخصصة في تصميم البرامج التدريبية للشباب",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#"
    }
  }
];

const faqs: FAQItem[] = [
  {
    question: "ما هي شروط الانضمام للفوج البحري؟",
    answer: "يشترط أن يكون عمر المتقدم بين 12-25 سنة، اجتياز الفحص الطبي، والموافقة الخطية من ولي الأمر للقاصرين."
  },
  {
    question: "ما هي تكلفة الاشتراك في البرامج التدريبية؟",
    answer: "تختلف التكلفة حسب نوع البرنامج ومدته، مع وجود خصومات للمجموعات والإخوة. نقدم أيضًا منحًا للمتميزين غير القادرين."
  },
  {
    question: "هل توجد برامج خاصة بالفتيات؟",
    answer: "نعم، لدينا برامج مخصصة للفتيات بإشراف مدربات مؤهلات، مع مراعاة جميع الضوابط الشرعية والاجتماعية."
  },
  {
    question: "ما هي مدة البرنامج التدريبي؟",
    answer: "تتراوح المدة بين 3 أشهر للبرامج الأساسية وسنة كاملة للبرامج المتقدمة، مع وجود معسكرات صيفية مكثفة."
  },
  {
    question: "هل يشترط معرفة مسبقة بالسباحة؟",
    answer: "لا يشترط للبرامج المبتدئة، حيث نقدم تدريبًا على السباحة كجزء من البرنامج. ولكن يفضل أن يكون العضو مرتاحًا في الماء."
  }
];

// ---------------------
// About Us Page Component
// ---------------------
const AboutUsPage = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <Container>
      {/* Hero Section */}
      <HeroSection>
        <FloatingBoats>
          <FloatingBoat><GiSailboat /></FloatingBoat>
          <FloatingBoat><GiFishingBoat /></FloatingBoat>
          <FloatingBoat><FaShip /></FloatingBoat>
          <FloatingBoat><GiShipWheel /></FloatingBoat>
        </FloatingBoats>
        
        <HeroContent
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <HeroTitle>الفوج البحري بسيدي بوعلي</HeroTitle>
          <HeroSubtitle>رحلة بحرية لبناء جيل واعٍ، قوي، ومتصل بتراثه البحري</HeroSubtitle>
          
          <HeroButtons>
            <HeroButton
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              تعرف علينا
            </HeroButton>
            <HeroButton
              href="#join"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              انضم إلينا
            </HeroButton>
          </HeroButtons>
        </HeroContent>
      </HeroSection>

      {/* About Section */}
      <AboutSection id="about">
        <WaterMark>الفوج البحري</WaterMark>
        
        <SectionTitle
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          من نحن
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          رحلة تمتد لأكثر من 15 عامًا في بناء الأجيال وتنمية المواهب البحرية
        </SectionSubtitle>
        
        <AboutContainer>
          <AboutImage
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="/images/about.jpg" 
              alt="الفوج البحري" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                objectPosition: 'center'
              }} 
              loading="lazy"
            />
          </AboutImage>
          
          <AboutContent>
            <AboutText>
              الفوج البحري بسيدي بوعلي هو مؤسسة تربوية بحرية تأسست عام 2005 بهدف تنمية مهارات الشباب البحرية وربطهم بتراثهم البحري. نعمل على بناء شخصية متوازنة من خلال برامج متكاملة تجمع بين التدريب البحري المتخصص والأنشطة التربوية.
            </AboutText>
            <AboutText>
              نؤمن بأن البحر مدرسة للحياة تعلم الصبر، الانضباط، والعمل الجماعي. على مدى 15 عامًا، تخرج من فوجنا أكثر من 500 بحار، العديد منهم يحترفون الآن في المجال البحري.
            </AboutText>
            
            <AboutStats>
              <StatItem
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <StatNumber>15+</StatNumber>
                <StatLabel>سنوات من الخبرة</StatLabel>
              </StatItem>
              
              <StatItem
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <StatNumber>500+</StatNumber>
                <StatLabel>متخرج</StatLabel>
              </StatItem>
              
              <StatItem
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <StatNumber>30+</StatNumber>
                <StatLabel>مدرب معتمد</StatLabel>
              </StatItem>
            </AboutStats>
          </AboutContent>
        </AboutContainer>
      </AboutSection>

      {/* Features Section */}
      <FeaturesSection>
        <SectionTitle
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          مميزاتنا
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          برامج متكاملة مصممة لتنمية المهارات البحرية والشخصية
        </SectionSubtitle>
        
        <FeaturesGrid>
          {features.map((feature: Feature, index: number) => (
            <FeatureCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureText>{feature.text}</FeatureText>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </FeaturesSection>

      {/* Gallery Section */}
      <GallerySection>
        <SectionTitle
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          معرض أعمالنا
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          لحظات مميزة من رحلتنا مع أفراد الفوج
        </SectionSubtitle>
        
        <GalleryGrid>
          {galleryItems.map((item: GalleryItem, index: number) => (
            <GalleryItem
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GalleryImage 
                src={item.image} 
                alt={item.title} 
                className="gallery-image" 
                loading="lazy"
              />
              <GalleryOverlay className="gallery-overlay">
                <GalleryTitle>{item.title}</GalleryTitle>
                <GalleryDescription>{item.description}</GalleryDescription>
              </GalleryOverlay>
            </GalleryItem>
          ))}
        </GalleryGrid>
      </GallerySection>

      {/* Timeline Section */}
      <TimelineSection>
        <SectionTitle
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          رحلتنا عبر الزمن
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          محطات رئيسية في تاريخ الفوج البحري
        </SectionSubtitle>
        
        <TimelineContainer>
          {timelineEvents.map((event: TimelineEvent, index: number) => (
            <TimelineItem
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TimelineContent>
                <TimelineYear>
                  {event.year}
                  <TimelineIcon>{event.icon}</TimelineIcon>
                </TimelineYear>
                <TimelineTitle>{event.title}</TimelineTitle>
                <TimelineText>{event.description}</TimelineText>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </TimelineSection>

      {/* Team Section */}
      <TeamSection>
        <SectionTitle
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          فريقنا
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          مدربون وموجهون متميزون يسهرون على نجاح رحلتك البحرية
        </SectionSubtitle>
        
        <TeamGrid>
          {teamMembers.map((member: TeamMember, index: number) => (
            <TeamCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TeamImageWrapper>
                <TeamImage 
                  src={member.image} 
                  alt={member.name} 
                  className="team-image" 
                  loading="lazy"
                />
              </TeamImageWrapper>
              
              <TeamContent>
                <TeamName>{member.name}</TeamName>
                <TeamRole>{member.role}</TeamRole>
                <TeamBio>{member.bio}</TeamBio>
                
                {member.social && (
                  <TeamSocial>
                    {member.social.twitter && (
                      <SocialLink href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                      </SocialLink>
                    )}
                    {member.social.facebook && (
                      <SocialLink href={member.social.facebook} target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                      </SocialLink>
                    )}
                    {member.social.instagram && (
                      <SocialLink href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                      </SocialLink>
                    )}
                  </TeamSocial>
                )}
              </TeamContent>
            </TeamCard>
          ))}
        </TeamGrid>
      </TeamSection>

      {/* Testimonials Section */}
      <TestimonialsSection>
        <TestimonialsContainer>
          <SectionTitle
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ color: theme.colors.white }}
          >
            آراء أعضائنا
          </SectionTitle>
          
          <SectionSubtitle
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ color: theme.colors.lightBlue }}
          >
            تجارب حقيقية من أعضاء الفوج وعائلاتهم
          </SectionSubtitle>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            flexWrap: 'wrap', 
            gap: theme.spacing.md 
          }}>
            {testimonials.map((testimonial: Testimonial, index: number) => (
              <TestimonialCard
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                style={{ maxWidth: '500px', width: '100%' }}
              >
                <TestimonialText>{testimonial.text}</TestimonialText>
                <TestimonialAuthor>
                  <AuthorInfo>
                    <AuthorName>{testimonial.name}</AuthorName>
                    <AuthorRole>{testimonial.role}</AuthorRole>
                  </AuthorInfo>
                  <AuthorImage 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    loading="lazy"
                  />
                </TestimonialAuthor>
              </TestimonialCard>
            ))}
          </div>
        </TestimonialsContainer>
      </TestimonialsSection>

      {/* FAQ Section */}
      <FAQSection>
        <SectionTitle
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          الأسئلة الشائعة
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          أجوبة على أكثر الأسئلة التي تهم أعضائنا وأولياء الأمور
        </SectionSubtitle>
        
        <FAQContainer>
          {faqs.map((faq: FAQItem, index: number) => (
            <FAQItem key={index}>
              <FAQQuestion onClick={() => toggleFAQ(index)}>
                {faq.question}
                <FAQIcon style={{ transform: activeFAQ === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  {activeFAQ === index ? <FiChevronUp /> : <FiChevronDown />}
                </FAQIcon>
              </FAQQuestion>
              
              <AnimatePresence>
                {activeFAQ === index && (
                  <FAQAnswer
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </FAQAnswer>
                )}
              </AnimatePresence>
            </FAQItem>
          ))}
        </FAQContainer>
      </FAQSection>

      {/* CTA Section */}
      <CTASection id="join">
        <FloatingShips>
          <FloatingShip />
          <FloatingShip />
          <FloatingShip />
          <FloatingShip />
        </FloatingShips>
        
        <CTAContent
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <CTATitle>جاهز لبدء رحلتك البحرية؟</CTATitle>
          <CTAText>سجل الآن وانضم إلى عائلة الفوج البحري سيدي بوعلي</CTAText>
          <CTAButton
            href="/register"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            سجل الآن
          </CTAButton>
        </CTAContent>
      </CTASection>
    </Container>
  );
};

export default AboutUsPage;