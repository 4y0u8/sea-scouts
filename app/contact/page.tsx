'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled, { keyframes } from 'styled-components';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { motion } from 'framer-motion';

// =====================
// Animations & Theme
// =====================
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

const theme = {
  colors: {
    primary: '#2563eb',
    secondary: '#1e40af',
    accent: '#3b82f6',
    white: '#ffffff',
    text: '#1e293b',
    error: '#ef4444',
  },
};

// =====================
// Styled Components
// =====================
const ContactContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f4f8, #e0e7ff);
  color: ${theme.colors.text};
  direction: rtl;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25' fill='%232563eb'/%3E%3Cpath d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' opacity='.5' fill='%232563eb'/%3E%3Cpath d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z' fill='%232563eb'/%3E%3C/svg%3E");
    background-size: cover;
    animation: ${waveAnimation} 8s ease-in-out infinite;
    z-index: 1;
  }
`;
const ContactTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: ${theme.colors.primary};
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ContactGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

const FormContainer = styled(motion.div)`
  background: ${theme.colors.white};
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
`;

const InputGroup = styled.div`
  margin-bottom: 2rem;
  text-align: right;

  label {
    display: block;
    margin-bottom: 0.8rem;
    color: ${theme.colors.primary};
    font-weight: 700;
    font-size: 1.2rem;
  }

  input, textarea {
    width: 100%;
    padding: 1rem;
    border: 2px solid rgba(37, 99, 235, 0.2);
    border-radius: 12px;
    font-size: 1.1rem;
    transition: all 0.3s;

    &:focus {
      outline: none;
      border-color: ${theme.colors.primary};
      box-shadow: 0 0 10px rgba(37, 99, 235, 0.2);
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

const SubmitButton = styled(motion.button)`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  padding: 1.2rem 2.5rem;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 12px;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 1rem;

  &:hover {
    background: ${theme.colors.secondary};
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const InfoContainer = styled(motion.div)`
  background: ${theme.colors.white};
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  text-align: right;
  margin-bottom: 2rem;

  svg {
    font-size: 2rem;
    color: ${theme.colors.primary};
    flex-shrink: 0;
  }

  h3 {
    margin: 0;
    font-size: 1.4rem;
    color: ${theme.colors.primary};
    font-weight: 700;
  }

  p, a {
    margin: 0.5rem 0 0;
    font-size: 1.1rem;
    color: ${theme.colors.text};
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: ${theme.colors.primary};
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 3rem;

  a {
    color: ${theme.colors.primary};
    font-size: 2rem;
    transition: all 0.3s;
    background: rgba(37, 99, 235, 0.1);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: ${theme.colors.white};
      background: ${theme.colors.primary};
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(37, 99, 235, 0.3);
    }
  }
`;

const ErrorMessage = styled.span`
  color: ${theme.colors.error};
  font-size: 1rem;
  margin-top: 0.5rem;
  display: block;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 15px;
  overflow: hidden;
  margin-top: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const FloatingContactButton = styled(motion.a)`
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  background: #25D366;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  z-index: 100;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

// =====================
// Contact Page Component
// =====================
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.', {
        position: "top-center",
        autoClose: 5000,
      });
      reset();
    }, 1000);
  };

  return (
    <ContactContainer>
      <ToastContainer rtl />
      
      {/* Floating WhatsApp Button */}
      <FloatingContactButton
        href="https://wa.me/21652563846"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp />
      </FloatingContactButton>

      <ContactTitle initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        تواصل معنا
      </ContactTitle>

      <ContactGrid>
        {/* Form Section */}
        <FormContainer initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputGroup>
              <label>الاسم الكامل</label>
              <input 
                type="text" 
                {...register('name', { required: 'يرجى إدخال الاسم' })} 
              />
              {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <label>البريد الإلكتروني</label>
              <input
                type="email"
                {...register('email', {
                  required: 'يرجى إدخال البريد الإلكتروني',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'بريد إلكتروني غير صالح'
                  }
                })}
              />
              {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </InputGroup>

            <InputGroup>
              <label>الرسالة</label>
              <textarea 
                rows={6} 
                {...register('message', { required: 'يرجى كتابة الرسالة' })} 
              />
              {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
            </InputGroup>

            <SubmitButton 
              type="submit" 
              whileHover={{ scale: 1.03 }} 
              whileTap={{ scale: 0.97 }}
            >
              إرسال الرسالة
            </SubmitButton>
          </form>
        </FormContainer>

        {/* Contact Info Section */}
        <InfoContainer initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
          <InfoItem>
            <FaMapMarkerAlt />
            <div>
              <h3>العنوان</h3>
              <p>سيدي بوعلي، سوسة، تونس</p>
            </div>
          </InfoItem>

          <InfoItem>
            <FaPhone />
            <div>
              <h3>الهاتف</h3>
              <a href="tel:+21652563846">216-52563846+</a>
            </div>
          </InfoItem>

          <InfoItem>
            <FaEnvelope />
            <div>
              <h3>البريد الإلكتروني</h3>
              <a href="mailto:contact@scouts-maritime.tn">contact@scouts-maritime.tn</a>
            </div>
          </InfoItem>

          {/* Google Maps Embed */}
          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.1234567890123!2d10.12345678901234!3d35.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDA3JzI0LjQiTiAxMMKwMDcnMjQuNCJF!5e0!3m2!1sen!2stn!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </MapContainer>

          <SocialLinks>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </SocialLinks>
        </InfoContainer>
      </ContactGrid>
    </ContactContainer>
  );
};

export default ContactPage;