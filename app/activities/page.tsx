"use client";
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaClock,
  FaShip,
  FaWater,
  FaUsers,
  FaRegCompass
} from 'react-icons/fa';
import { 
  GiSailboat,
  GiFishingBoat,
  GiShipWheel,
} from 'react-icons/gi';

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

interface Activity {
  id: number;
  title: string;
  date: string;
  location: string;
  time: string;
  image: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

// =====================
// Styled Components
// =====================
const ActivitiesContainer = styled.div`
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

const ActivitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ActivityCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-left: 5px solid ${theme.colors.accent};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ActivityImage = styled.div`
  height: 200px;
  width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(to top, rgba(26, 54, 93, 0.7), transparent);
  }
`;

const ActivityContent = styled.div`
  padding: 1.5rem;
`;

const ActivityHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h2 {
    margin: 0;
    font-size: 1.5rem;
    color: ${theme.colors.primary};
  }

  span {
    background: ${theme.colors.lightBlue};
    color: ${theme.colors.primary};
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
  }
`;

const ActivityMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #555;
  font-size: 0.9rem;

  svg {
    color: ${theme.colors.accent};
  }
`;

const ActivityDescription = styled.p`
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const RegisterButton = styled(motion.button)`
  background: ${theme.colors.primary};
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.secondary};
  }
`;

// =====================
// Component
// =====================
const ActivitiesPage = () => {
  const activities: Activity[] = [
    {
      id: 1,
      title: "المعسكر الصيفي السنوي",
      date: "15 يوليو - 30 يوليو 2023",
      location: "خليج الحمامات",
      time: "9:00 ص - 5:00 م",
      image: "/images/summer-camp.jpg",
      description: "معسكر صيفي لمدة أسبوعين يتضمن أنشطة بحرية وترفيهية وتدريبات قيادية مع إقامة في مخيم على الشاطئ.",
      icon: <GiSailboat />,
      category: "معسكر"
    },
    {
      id: 2,
      title: "مسابقة القوارب الشراعية",
      date: "5 أغسطس 2023",
      location: "مارينا سوسة",
      time: "8:00 ص - 4:00 م",
      image: "/images/sailing-competition.jpg",
      description: "مسابقة سنوية للقوارب الشراعية بين فرق الكشافة البحرية بمشاركة فرق من مختلف الولايات.",
      icon: <GiShipWheel />,
      category: "مسابقة"
    },
    {
      id: 3,
      title: "رحلة استكشاف الساحل",
      date: "20 سبتمبر 2023",
      location: "جزيرة قرقنة",
      time: "7:00 ص - 6:00 م",
      image: "/images/coast-exploration.jpg",
      description: "رحلة استكشافية لدراسة الحياة البحرية والنظم البيئية الساحلية مع خبراء في البيئة البحرية.",
      icon: <FaRegCompass />,
      category: "رحلة"
    },
    {
      id: 4,
      title: "دورة السلامة البحرية",
      date: "10 أكتوبر 2023",
      location: "مقر الفوج",
      time: "3:00 م - 6:00 م",
      image: "/images/safety-course.jpg",
      description: "دورة متخصصة في إجراءات السلامة البحرية والإنقاذ المائي مع شهادة معتمدة من الدفاع المدني.",
      icon: <FaWater />,
      category: "دورة"
    },
    {
      id: 5,
      title: "مهرجان التراث البحري",
      date: "12 نوفمبر 2023",
      location: "الميناء القديم بسوسة",
      time: "10:00 ص - 10:00 م",
      image: "/images/heritage-festival.jpg",
      description: "فعالية سنوية للتعريف بالتراث البحري التونسي مع عروض للقوارب التقليدية وورش عمل حرفية.",
      icon: <GiFishingBoat />,
      category: "فعالية"
    },
    {
      id: 6,
      title: "تدريب القيادة البحرية",
      date: "5 ديسمبر 2023",
      location: "المدرسة البحرية بحلق الوادي",
      time: "8:00 ص - 4:00 م",
      image: "/images/leadership-training.jpg",
      description: "برنامج متقدم لتدريب القادة الشباب على مهارات القيادة البحرية وإدارة الفرق.",
      icon: <FaUsers />,
      category: "تدريب"
    }
  ];

  return (
    <ActivitiesContainer>
      <PageHeader
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>الأنشطة والبرامج</h1>
        <p>
          اكتشف مغامراتنا البحرية القادمة وبرامجنا التدريبية المصممة لتنمية مهارات الشباب
          وربطهم بالبيئة البحرية
        </p>
      </PageHeader>

      <ActivitiesGrid>
        {activities.map((activity) => (
          <ActivityCard
            key={activity.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ActivityImage style={{ backgroundImage: `url(${activity.image})` }}>
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                right: '1rem',
                zIndex: 2,
                color: 'white',
                fontSize: '2rem'
              }}>
                {activity.icon}
              </div>
            </ActivityImage>
            
            <ActivityContent>
              <ActivityHeader>
                <h2>{activity.title}</h2>
                <span>{activity.category}</span>
              </ActivityHeader>
              
              <ActivityMeta>
                <MetaItem>
                  <FaCalendarAlt />
                  {activity.date}
                </MetaItem>
                <MetaItem>
                  <FaMapMarkerAlt />
                  {activity.location}
                </MetaItem>
                <MetaItem>
                  <FaClock />
                  {activity.time}
                </MetaItem>
              </ActivityMeta>
              
              <ActivityDescription>
                {activity.description}
              </ActivityDescription>
              
              <RegisterButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaShip />
                سجل الآن
              </RegisterButton>
            </ActivityContent>
          </ActivityCard>
        ))}
      </ActivitiesGrid>
    </ActivitiesContainer>
  );
};

export default ActivitiesPage;