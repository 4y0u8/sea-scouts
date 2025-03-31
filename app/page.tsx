"use client";
import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaAnchor, FaShip, FaWater, FaUsers, FaRegCompass, 
  FaCalendarAlt, FaPhone, FaMapMarkerAlt, FaSearch
} from 'react-icons/fa';
import { GiSailboat, GiWaveSurfer, GiFishingBoat, GiShipWheel } from 'react-icons/gi';
import { MdOutlineHistory, MdGroups, MdEmojiEvents } from 'react-icons/md';

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
    orca: '#4fd1c5',       // Orca group color
    tulip: '#f687b3',      // Tulip group color
    barbarossa: '#f6ad55', // Barbarossa group color
    houriya: '#9f7aea',    // Houriya group color
    rover: '#ff0000',      // Rover group color
    guide: '#d53f8c'       // Guide group color
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

const waveAnimation = keyframes`
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
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
    padding: 0 ${theme.spacing.sm};
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
    url('/images/hero-background.jpg') center/cover no-repeat;
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
  font-size: 4.5rem;
  font-weight: ${theme.fonts.weights.black};
  margin-bottom: ${theme.spacing.sm};
  line-height: 1.2;
  background: linear-gradient(to right, ${theme.colors.white}, ${theme.colors.lightBlue});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  text-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 3.5rem;
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 2rem;
  margin-bottom: ${theme.spacing.lg};
  line-height: 1.5;
  font-weight: ${theme.fonts.weights.light};
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1.5rem;
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    font-size: 1.2rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
`;

const HeroButton = styled(motion.a)`
  display: inline-block;
  padding: ${theme.spacing.sm} ${theme.spacing.xl};
  font-size: 1.3rem;
  font-weight: ${theme.fonts.weights.bold};
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  min-width: 200px;
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

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xs} ${theme.spacing.lg};
    font-size: 1.1rem;
    min-width: 160px;
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    padding: 0.8rem 1.2rem;
    font-size: 1rem;
    min-width: 140px;
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
// Age Groups Section
// ---------------------
const AgeGroupsSection = styled(Section)`
  background: ${theme.colors.offWhite};
  position: relative;
`;

const AgeGroupsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.xs}) {
    grid-template-columns: 1fr;
  }
`;

const AgeGroupCard = styled(motion.div)<{ $color: string }>`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  border-top: 5px solid ${({ $color }) => $color};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  }
`;

const AgeGroupHeader = styled.div<{ $color: string }>`
  background: ${({ $color }) => $color};
  padding: ${theme.spacing.md};
  text-align: center;
`;

const AgeGroupTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: ${theme.fonts.weights.bold};
  color: white;
  margin: 0;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1.5rem;
  }
`;

const AgeGroupContent = styled.div`
  padding: ${theme.spacing.lg};
  text-align: center;
`;

const AgeGroupImage = styled.div`
  height: 200px;
  width: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  margin-bottom: ${theme.spacing.md};
`;

const AgeGroupDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

const AgeGroupButton = styled.a<{ $color: string }>`
  display: inline-block;
  padding: ${theme.spacing.xs} ${theme.spacing.lg};
  background: ${({ $color }) => $color};
  color: white;
  border-radius: 50px;
  text-decoration: none;
  font-weight: ${theme.fonts.weights.bold};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

// ---------------------
// Activities Section
// ---------------------
const ActivitiesSection = styled(Section)`
  background: white;
  position: relative;
`;

const ActivitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xl};
`;

const ActivityCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
`;

const ActivityImage = styled.div`
  height: 200px;
  width: 100%;
  background-size: cover;
  background-position: center;
`;

const ActivityContent = styled.div`
  padding: ${theme.spacing.lg};
`;

const ActivityTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: ${theme.fonts.weights.bold};
  color: ${theme.colors.darkBlue};
  margin-bottom: ${theme.spacing.sm};
`;

const ActivityDate = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  color: ${theme.colors.accent};
  font-weight: ${theme.fonts.weights.bold};
  margin-bottom: ${theme.spacing.sm};
`;

const ActivityDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.md};
`;

const ActivityButton = styled.a`
  display: inline-block;
  padding: ${theme.spacing.xs} ${theme.spacing.lg};
  background: ${theme.colors.primary};
  color: white;
  border-radius: 50px;
  text-decoration: none;
  font-weight: ${theme.fonts.weights.bold};
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.secondary};
    transform: translateY(-3px);
  }
`;

// ---------------------
// Gallery Preview Section
// ---------------------
const GalleryPreviewSection = styled(Section)`
  background: ${theme.colors.offWhite};
  position: relative;
`;

const GalleryPreviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    grid-template-columns: 1fr;
  }
`;

const GalleryPreviewItem = styled(motion.div)`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  height: 250px;
  cursor: pointer;

  &:hover {
    .gallery-overlay {
      opacity: 1;
    }
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    height: 200px;
  }
`;

const GalleryPreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const GalleryPreviewOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(26, 54, 93, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const GalleryPreviewButton = styled.a`
  color: white;
  font-size: 1.2rem;
  font-weight: ${theme.fonts.weights.bold};
  text-decoration: none;
  padding: ${theme.spacing.xs} ${theme.spacing.lg};
  border: 2px solid white;
  border-radius: 50px;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    color: ${theme.colors.primary};
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
`;

const AuthorInfo = styled.div`
  text-align: right;
`;

const AuthorName = styled.h4`
  font-size: 1.3rem;
  font-weight: ${theme.fonts.weights.bold};
  color: ${theme.colors.darkBlue};
  margin-bottom: ${theme.spacing.xs};
`;

const AuthorRole = styled.p`
  font-size: 1.1rem;
  color: ${theme.colors.primary};
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
`;

// ---------------------
// Data Arrays
// ---------------------
const ageGroups = [
  {
    id: 1,
    name: "فرقة الأوركا للأشبال",
    color: theme.colors.orca,
    image: "/images/orca-group.jpg",
    description: "برامج ترفيهية وتعليمية للأطفال من 7 إلى 11 سنة، تركز على تنمية المهارات الأساسية والثقة بالنفس",
    ageRange: "7-11 سنة"
  },
  {
    id: 2,
    name: "باقة التوليب للزهرات",
    color: theme.colors.tulip,
    image: "/images/tulip-group.jpg",
    description: "أنشطة إبداعية وتربوية للفتيات من 07 إلى 11 سنة، مع التركيز على القيم والقيادة",
    ageRange: "07-11 سنة"
  },
  {
    id: 3,
    name: "فرقة خير الدين بربروس للكشافة",
    color: theme.colors.barbarossa,
    image: "/images/barbarossa-group.jpg",
    description: "تدريبات بحرية ومغامرات للفتيان من 12 إلى 17 سنة، مع التركيز على العمل الجماعي والمهارات القيادية",
    ageRange: "12-17 سنة"
  },
  {
    id: 4,
    name: "فرقة حورية للمرشدات",
    color: theme.colors.houriya,
    image: "/images/houriya-group.jpg",
    description: "برامج متقدمة للفتيات من 12 إلى 17 سنة، تشمل التطوع والخدمة المجتمعية",
    ageRange: "12-17 سنة"
  },
  {
    id: 5,
    name: "العشيرة البحرية للجوالة",
    color: theme.colors.rover,
    image: "/images/rover-group.jpg",
    description: "أنشطة متخصصة للشباب من 17 إلى 23 سنة، مع فرص للتدريب والتأهيل المهني",
    ageRange: "17-23 سنة"
  },
  {
    id: 6,
    name: "عشيرة اللؤلؤة للدليلات",
    color: theme.colors.guide,
    image: "/images/guide-group.jpg",
    description: "برامج قيادية وتطوعية للشابات من 17 إلى 23 سنة، مع فرص للتطوير الشخصي والمهني",
    ageRange: "17-23 سنة"
  }
];

const activities = [
  {
    id: 1,
    title: "المعسكر الصيفي السنوي",
    date: "15 يوليو - 30 يوليو 2023",
    image: "/images/summer-camp.jpg",
    description: "معسكر صيفي لمدة أسبوعين يتضمن أنشطة بحرية وترفيهية وتدريبات قيادية"
  },
  {
    id: 2,
    title: "مسابقة القوارب الشراعية",
    date: "5 أغسطس 2023",
    image: "/images/sailing-competition.jpg",
    description: "مسابقة سنوية للقوارب الشراعية بين فرق الكشافة البحرية"
  },
  {
    id: 3,
    title: "رحلة استكشاف الساحل",
    date: "20 سبتمبر 2023",
    image: "/images/coast-exploration.jpg",
    description: "رحلة استكشافية لدراسة الحياة البحرية والنظم البيئية الساحلية"
  }
];

const galleryItems = [
  { id: 1, image: "/images/gallery1.jpg" },
  { id: 2, image: "/images/gallery2.jpg" },
  { id: 3, image: "/images/gallery3.jpg" },
  { id: 4, image: "/images/gallery4.jpg" }
];

// ---------------------
// Home Page Component
// ---------------------
const HomePage = () => {
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
          <HeroTitle>الفوج البحري سيدي بوعلي</HeroTitle>
          <HeroSubtitle>نحو بحار من القيم والقيادة والمهارات</HeroSubtitle>
          
          <HeroButtons>
            <HeroButton
              href="#age-groups"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              اكتشف فرقنا
            </HeroButton>
            <HeroButton
              href="/register"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              سجل الآن
            </HeroButton>
          </HeroButtons>
        </HeroContent>
      </HeroSection>

      {/* Age Groups Section */}
      <AgeGroupsSection id="age-groups">
        <SectionTitle
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          فرقنا العمرية
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          برامج مصممة خصيصًا لكل فئة عمرية
        </SectionSubtitle>
        
        <AgeGroupsContainer>
          {ageGroups.map((group, index) => (
            <AgeGroupCard
              key={group.id}
              $color={group.color}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <AgeGroupHeader $color={group.color}>
                <AgeGroupTitle>{group.name}</AgeGroupTitle>
              </AgeGroupHeader>
              
              <AgeGroupContent>
                <AgeGroupImage style={{ backgroundImage: `url(${group.image})` }} />
                <AgeGroupDescription>{group.description}</AgeGroupDescription>
                <AgeGroupButton $color={group.color} href={`/groups/`}>
                  تعرف أكثر
                </AgeGroupButton>
              </AgeGroupContent>
            </AgeGroupCard>
          ))}
        </AgeGroupsContainer>
      </AgeGroupsSection>

      {/* Activities Section */}
      <ActivitiesSection>
        <SectionTitle
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          أنشطتنا القادمة
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          اكتشف المغامرات التي تنتظرك مع الفوج البحري
        </SectionSubtitle>
        
        <ActivitiesGrid>
          {activities.map((activity, index) => (
            <ActivityCard
              key={activity.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ActivityImage style={{ backgroundImage: `url(${activity.image})` }} />
              <ActivityContent>
                <ActivityTitle>{activity.title}</ActivityTitle>
                <ActivityDate>
                  <FaCalendarAlt /> {activity.date}
                </ActivityDate>
                <ActivityDescription>{activity.description}</ActivityDescription>
                <ActivityButton href={`/activities/${activity.id}`}>
                  سجل الآن
                </ActivityButton>
              </ActivityContent>
            </ActivityCard>
          ))}
        </ActivitiesGrid>
      </ActivitiesSection>

      {/* Gallery Preview Section */}
      <GalleryPreviewSection>
        <SectionTitle
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          معرض الذكريات
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          لحظات مميزة من رحلتنا مع أعضاء الفوج
        </SectionSubtitle>
        
        <GalleryPreviewGrid>
          {galleryItems.map((item, index) => (
            <GalleryPreviewItem
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GalleryPreviewImage 
                src={item.image} 
                alt={`Gallery item ${item.id}`} 
                loading="lazy"
              />
              <GalleryPreviewOverlay className="gallery-overlay">
                <GalleryPreviewButton href="/gallery">
                  عرض المزيد
                </GalleryPreviewButton>
              </GalleryPreviewOverlay>
            </GalleryPreviewItem>
          ))}
        </GalleryPreviewGrid>
      </GalleryPreviewSection>
    </Container>
  );
};

export default HomePage;