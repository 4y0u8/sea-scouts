"use client";
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaImages, 
  FaArrowLeft, 
  FaArrowRight,
  FaRegCompass,
  FaTimes,
  FaShip,
  FaWater,
  FaUsers,
  FaCalendarAlt
} from 'react-icons/fa';
import { GiSailboat, GiAnchor } from 'react-icons/gi';

// =====================
// Theme & Types
// =====================
const theme = {
  colors: {
    primary: '#1a365d',
    secondary: '#2c5282',
    accent: '#4299e1',
    lightBlue: '#bee3f8'
  }
};

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: string;
  date: string;
}

// =====================
// Styled Components
// =====================
const GalleryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  direction: rtl;
`;

const PageHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5rem;
    color: ${theme.colors.primary};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    max-width: 800px;
    margin: 0 auto;
  }
`;

const CategoryFilters = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const FilterButton = styled(motion.button)<{ $active: boolean }>`
  background: ${props => props.$active ? theme.colors.primary : 'white'};
  color: ${props => props.$active ? 'white' : theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: ${props => props.$active ? theme.colors.primary : theme.colors.lightBlue};
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

const GalleryItem = styled(motion.div)`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  height: 250px;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    .overlay {
      opacity: 1;
    }
    
    img {
      transform: scale(1.05);
    }
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const ItemOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(26, 54, 93, 0.8), transparent);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
`;

const ItemTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

const ItemMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  opacity: 0.9;
`;

// Lightbox Styles
const Lightbox = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LightboxImage = styled.img`
  max-width: 90%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 5px;
`;

const LightboxNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-top: 1rem;
`;

const NavButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.accent};
  }
`;

const CloseButton = styled(NavButton)`
  position: absolute;
  top: 2rem;
  right: 2rem;
`;

const LightboxCaption = styled.div`
  color: white;
  text-align: center;
  margin-top: 1rem;
  max-width: 800px;

  h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.5rem;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 1rem;
    opacity: 0.8;
  }
`;

// =====================
// Component
// =====================
const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      image: "/images/gallery/camp-1.jpg",
      title: "المعسكر الصيفي 2023",
      category: "معسكرات",
      date: "يوليو 2023"
    },
    {
      id: 2,
      image: "/images/gallery/sailing-1.jpg",
      title: "مسابقة القوارب الشراعية",
      category: "مسابقات",
      date: "أغسطس 2023"
    },
    {
      id: 3,
      image: "/images/gallery/training-1.jpg",
      title: "تدريب الملاحة البحرية",
      category: "تدريبات",
      date: "سبتمبر 2023"
    },
    {
      id: 4,
      image: "/images/gallery/trip-1.jpg",
      title: "رحلة استكشاف الساحل",
      category: "رحلات",
      date: "أكتوبر 2023"
    },
    {
      id: 5,
      image: "/images/gallery/event-1.jpg",
      title: "مهرجان التراث البحري",
      category: "فعاليات",
      date: "نوفمبر 2023"
    },
    {
      id: 6,
      image: "/images/gallery/meeting-1.jpg",
      title: "اجتماع قادة الفوج",
      category: "اجتماعات",
      date: "ديسمبر 2023"
    },
    {
      id: 7,
      image: "/images/gallery/camp-2.jpg",
      title: "أنشطة ليلية في المعسكر",
      category: "معسكرات",
      date: "يوليو 2023"
    },
    {
      id: 8,
      image: "/images/gallery/sailing-2.jpg",
      title: "تدريب القوارب الشراعية",
      category: "مسابقات",
      date: "أغسطس 2023"
    },
    {
      id: 9,
      image: "/images/gallery/training-2.jpg",
      title: "ورشة عمل السلامة البحرية",
      category: "تدريبات",
      date: "سبتمبر 2023"
    }
  ];

  const categories = ['الكل', 'معسكرات', 'مسابقات', 'تدريبات', 'رحلات', 'فعاليات', 'اجتماعات'];

  const filteredItems = activeCategory === 'الكل' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const goToPrev = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex(prev => 
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <GalleryContainer>
      <PageHeader
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>معرض الصور</h1>
        <p>
          ذكريات مميزة من أنشطة الفوج البحري وأبرز اللحظات التي شاركناها مع أعضائنا
        </p>
      </PageHeader>

      <CategoryFilters>
        {categories.map(category => (
          <FilterButton
            key={category}
            $active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category === 'معسكرات' && <FaCalendarAlt />}
            {category === 'مسابقات' && <GiSailboat />}
            {category === 'تدريبات' && <FaWater />}
            {category === 'رحلات' && <FaRegCompass />}
            {category === 'فعاليات' && <FaUsers />}
            {category === 'اجتماعات' && <FaShip />}
            {category === 'الكل' && <FaImages />}
            {category}
          </FilterButton>
        ))}
      </CategoryFilters>

      <GalleryGrid>
        {filteredItems.map((item, index) => (
          <GalleryItem
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => openLightbox(index)}
          >
            <GalleryImage 
              src={item.image} 
              alt={item.title}
              loading="lazy"
            />
            <ItemOverlay className="overlay">
              <ItemTitle>{item.title}</ItemTitle>
              <ItemMeta>
                <span>{item.category}</span>
                <span>{item.date}</span>
              </ItemMeta>
            </ItemOverlay>
          </GalleryItem>
        ))}
      </GalleryGrid>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <Lightbox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CloseButton onClick={closeLightbox}>
              <FaTimes />
            </CloseButton>
            
            <LightboxImage 
              src={filteredItems[currentImageIndex].image} 
              alt={filteredItems[currentImageIndex].title}
            />
            
            <LightboxCaption>
              <h3>{filteredItems[currentImageIndex].title}</h3>
              <div>
                <span>{filteredItems[currentImageIndex].category}</span>
                <span>{filteredItems[currentImageIndex].date}</span>
              </div>
            </LightboxCaption>
            
            <LightboxNav>
              <NavButton onClick={goToPrev}>
                <FaArrowRight /> {/* Flipped for RTL */}
              </NavButton>
              <NavButton onClick={goToNext}>
                <FaArrowLeft /> {/* Flipped for RTL */}
              </NavButton>
            </LightboxNav>
          </Lightbox>
        )}
      </AnimatePresence>
    </GalleryContainer>
  );
};

export default GalleryPage;