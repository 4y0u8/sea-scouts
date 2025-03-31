// components/Timeline.tsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TimelineWrapper = styled.div`
  position: fixed;
  top: 10%;
  right: 10%;
  height: 80%;
  width: 5px;
  background: linear-gradient(to bottom, #8B4513, #D2691E, #A52A2A);  /* Brown gradient */
  z-index: -1; /* Ensure it's behind other content */
`;

const TimelineDot = styled(motion.div)`
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: #8B4513;  /* Brown color */
  border-radius: 50%;
  left: -5px; /* Center the dot on the line */
  transition: top 0.3s ease-in-out;
`;

const Timeline: React.FC = () => {
  return (
    <TimelineWrapper>
      <TimelineDot style={{ top: '10%' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} />
      <TimelineDot style={{ top: '30%' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} />
      <TimelineDot style={{ top: '50%' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} />
      <TimelineDot style={{ top: '70%' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} />
    </TimelineWrapper>
  );
};

export default Timeline;
