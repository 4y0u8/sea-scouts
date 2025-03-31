"use client";
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaUsers, 
  FaWater, 
  FaRegCompass, 
  FaCalendarAlt 
} from 'react-icons/fa';
import { 
  GiSailboat, 
  GiWaveSurfer, 
  GiFishingBoat, 
  GiShipWheel 
} from 'react-icons/gi';
import { 
  MdGroups,
  MdEmojiEvents 
} from 'react-icons/md';

// =====================
// Theme & Types
// =====================
const theme = {
  colors: {
    primary: '#1a365d',
    secondary: '#2c5282',
    accent: '#4299e1',
    orca: '#4fd1c5',
    tulip: '#f687b3',
    barbarossa: '#f6ad55',
    houriya: '#9f7aea',
    rover: '#667eea',
    guide: '#d53f8c'
  }
};

interface Group {
  id: number;
  name: string;
  ageRange: string;
  color: string;
  icon: React.ReactNode;
  image: string;
  description: string;
  activities: string[];
}

// =====================
// Styled Components
// =====================
const GroupsContainer = styled.div`
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

const GroupsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const GroupCard = styled(motion.div)<{ $color: string }>`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-top: 5px solid ${props => props.$color};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
`;

const GroupHeader = styled.div<{ $color: string }>`
  background: ${props => props.$color};
  padding: 1.5rem;
  color: white;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 2rem;
  }

  h2 {
    margin: 0;
    font-size: 1.5rem;
  }

  span {
    display: block;
    font-size: 0.9rem;
    opacity: 0.9;
  }
`;

const GroupImage = styled.div`
  height: 200px;
  width: 100%;
  background-size: cover;
  background-position: center;
`;

const GroupContent = styled.div`
  padding: 1.5rem;

  p {
    color: #555;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const ActivitiesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.8rem;
    color: #444;

    svg {
      color: ${theme.colors.accent};
    }
  }
`;

// =====================
// Component
// =====================
const GroupsPage = () => {
  const groups: Group[] = [
    {
      id: 1,
      name: "فرقة الأوركا للأشبال",
      ageRange: "7-11 سنة",
      color: theme.colors.orca,
      icon: <GiFishingBoat />,
      image: "/images/orca-group.jpg",
      description: "برامج ترفيهية وتعليمية للأطفال تركز على تنمية المهارات الأساسية والثقة بالنفس من خلال أنشطة بحرية ممتعة وآمنة.",
      activities: [
        "تعليم أساسيات السباحة",
        "ألعاب بحرية ترفيهية",
        "ورش عمل عن البيئة البحرية",
        "أنشطة تعزيز العمل الجماعي"
      ]
    },
    {
      id: 2,
      name: "باقة التوليب للزهرات",
      ageRange: "12-14 سنة",
      color: theme.colors.tulip,
      icon: <GiWaveSurfer />,
      image: "/images/tulip-group.jpg",
      description: "أنشطة إبداعية وتربوية للفتيات مع التركيز على القيم والقيادة والمهارات البحرية الأساسية.",
      activities: [
        "التجديف الأساسي",
        "ورش القيادة البحرية",
        "أنشطة الحفاظ على البيئة",
        "مسابقات بحرية تعليمية"
      ]
    },
    {
      id: 3,
      name: "فرقة بربروس للكشافة",
      ageRange: "15-17 سنة",
      color: theme.colors.barbarossa,
      icon: <GiShipWheel />,
      image: "/images/barbarossa-group.jpg",
      description: "تدريبات بحرية متقدمة للفتيان مع التركيز على العمل الجماعي والمهارات القيادية والمغامرات البحرية.",
      activities: [
        "الملاحة البحرية الأساسية",
        "تدريبات السلامة في البحر",
        "رحلات استكشاف السواحل",
        "مسابقات القوارب الشراعية"
      ]
    },
    {
      id: 4,
      name: "فرقة حورية للمرشدات",
      ageRange: "15-17 سنة",
      color: theme.colors.houriya,
      icon: <MdGroups />,
      image: "/images/houriya-group.jpg",
      description: "برامج متقدمة للفتيات تشمل التطوع والخدمة المجتمعية مع تطوير المهارات البحرية المتخصصة.",
      activities: [
        "الإسعافات الأولية البحرية",
        "مشاريع خدمة المجتمع",
        "تدريبات الإنقاذ المائي",
        "الريادة البحرية"
      ]
    },
    {
      id: 5,
      name: "عشيرة الجوالة",
      ageRange: "18-22 سنة",
      color: theme.colors.rover,
      icon: <GiSailboat />,
      image: "/images/rover-group.jpg",
      description: "أنشطة متخصصة للشباب مع فرص للتدريب والتأهيل المهني في المجالات البحرية المختلفة.",
      activities: [
        "التدريب على القيادة البحرية",
        "ورش الصيانة البحرية",
        "التدريب المهني البحري",
        "البعثات الدولية"
      ]
    },
    {
      id: 6,
      name: "عشيرة الدليلات",
      ageRange: "18-22 سنة",
      color: theme.colors.guide,
      icon: <MdEmojiEvents />,
      image: "/images/guide-group.jpg",
      description: "برامج قيادية وتطوعية للشابات مع فرص للتطوير الشخصي والمهني في المجال البحري.",
      activities: [
        "القيادة البحرية المتقدمة",
        "التدريب على الإرشاد البحري",
        "مشاريع التوعية البيئية",
        "المشاركة في المؤتمرات الدولية"
      ]
    }
  ];

  return (
    <GroupsContainer>
      <PageHeader
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>فرقنا العمرية</h1>
        <p>
          اكتشف مجموعاتنا المصممة خصيصًا لكل فئة عمرية، مع برامج متكاملة
          تركز على تطوير المهارات البحرية والقيادية والاجتماعية
        </p>
      </PageHeader>

      <GroupsGrid>
        {groups.map((group) => (
          <GroupCard 
            key={group.id}
            $color={group.color}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GroupHeader $color={group.color}>
              {group.icon}
              <div>
                <h2>{group.name}</h2>
                <span>{group.ageRange}</span>
              </div>
            </GroupHeader>
            
            <GroupImage style={{ backgroundImage: `url(${group.image})` }} />
            
            <GroupContent>
              <p>{group.description}</p>
              
              <h3>الأنشطة الرئيسية:</h3>
              <ActivitiesList>
                {group.activities.map((activity, index) => (
                  <li key={index}>
                    <FaRegCompass />
                    {activity}
                  </li>
                ))}
              </ActivitiesList>
            </GroupContent>
          </GroupCard>
        ))}
      </GroupsGrid>
    </GroupsContainer>
  );
};

export default GroupsPage;