'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Styling for the Events Page
const EventsContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 4rem 2rem;
  direction: rtl;
`;

const SectionHeader = styled(motion.h2)`
  font-family: ${({ theme }) => theme.fonts.arabic};
  font-size: 2.75rem;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 3rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: ${({ theme }) => theme.colors.accent};
    border-radius: 2px;
  }
`;

const EventList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const EventCard = styled(motion.div)`
  background: white;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.card};
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .event-info {
    padding: 1.5rem;
  }

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }

  .event-date {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.secondary};
  }

  .event-link {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.accent};
    font-weight: bold;
    display: inline-block;
    margin-top: 1rem;
  }
`;

const eventsData = [
  {
    id: 1,
    title: 'مائدة الافطار',
    description: 'مائدة افطار رمضانية لاصحاب الحق',
    date: '2025-03-01',
    image: '/events/ramadan.jpg',
    link: '/events/مائدة-الافطار',
  },
  {
    id: 2,
    title: 'سهرة سمر ',
    description: 'سهرة سمر كشفية مغاربية و عربية',
    date: '2025-03-21',
    image: '/events/marabe.jpg',
    link: '/events/سهرة-سمر',
  },
  {
    id: 3,
    title: 'مهرجان ليالي المدينة',
    description: 'مهرجان ليالي المدينة في نسخته الأولى',
    date: '2025-03-22',
    image: '/events/festival.jpg',
    link: '/events/المهرجان',
  },
];

export default function EventsPage() {
  const [formattedDates, setFormattedDates] = useState<string[]>([]);

  useEffect(() => {
    const dates = eventsData.map((event) =>
      new Date(event.date).toLocaleDateString('ar-EG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    );
    setFormattedDates(dates);
  }, []);

  return (
    <EventsContainer>
      <SectionHeader
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        الأحداث القادمة
      </SectionHeader>
      <EventList>
        {eventsData.map((event, index) => (
          <EventCard
            key={event.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Image src={event.image} alt={event.title} width={600} height={400} />
            <div className="event-info">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p className="event-date">{formattedDates[index] || 'جاري التحميل...'}</p>
              <a className="event-link" href={event.link}>
                تفاصيل الحدث
              </a>
            </div>
          </EventCard>
        ))}
      </EventList>
    </EventsContainer>
  );
}
