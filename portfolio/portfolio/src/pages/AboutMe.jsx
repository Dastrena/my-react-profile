import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const BackgroundWrapper = styled.div`
  background: ${(props) => props.theme.backgroundGradient};
  padding: 40px 0;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 40px auto;
  padding: 40px;
  text-align: center;
  background: ${(props) => props.theme.sectionBg};
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
`;

const ProfileImage = styled.img`
  width: 230px;
  height: 230px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: ${(props) => (props.showQR ? "60px" : "20px")};
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
  border: 5px solid ${(props) => props.theme.accent};
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Section = styled.section`
  margin-bottom: 30px;
  padding: 25px;
  border-radius: 12px;
  background: #f2f2f2;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  &:hover {
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
    transform: scale(1.02);
  }
`;

const ProjectButton = styled.a`
  display: inline-block;
  margin: 10px;
  padding: 12px 18px;
  font-size: 18px;
  border-radius: 8px;
  background: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonText};
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    background: ${(props) => props.theme.buttonHover};
  }
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
`;

const SkillTag = styled.span`
  display: inline-block;
  padding: 12px;
  border-radius: 8px;
  background: ${(props) => props.theme.skillBg};
      color: ${(props) => props.theme.tagText};
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    background: ${(props) => props.theme.accent};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const SocialLink = styled.a`
  padding: 12px 18px;
  font-size: 18px;
  border-radius: 8px;
  background: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonText};
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
  cursor: pointer;
  border: none;
  
  &:hover {
    background: ${(props) => props.theme.buttonHover};
    color: #ffffff;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background: white;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QRImage = styled.img`
  width: 250px;
  height: 250px;
`;

const CloseButton = styled.button`
  margin-top: 20px;
  background: #0088cc;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
`;

const AboutMe = () => {
  const [showQR, setShowQR] = useState(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowQR(false);
    }
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setShowQR(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <BackgroundWrapper>
      <Container>
        <ProfileImage src="/images/daryna.jpg" alt="Дарина" showQR={showQR} />
        <h1>Привіт! Я Дарина 👋</h1>

        <Section>
          <h2>🎯 Про мене</h2>
          <p>Я студентка <strong>НУБІП</strong>, захоплююсь програмуванням, математикою та моделюванням.</p>
          <p>Люблю вирішувати складні задачі, досліджую взаємозв’язок технологій, економіки та IT.</p>
        </Section>

        <Section>
          <h2>💼 Мої проєкти</h2>
          <ProjectButton href="https://github.com/Dastrena/css-pratice" target="_blank">HTML + CSS</ProjectButton>
          <ProjectButton href="https://github.com/Dastrena/js-DOM1" target="_blank">JavaScript</ProjectButton>
          <ProjectButton href="https://github.com/Dastrena/react-photo-gallery" target="_blank">React</ProjectButton>
        </Section>

        <Section>
          <h2>🏆 Навички</h2>
          <SkillsGrid>
            <SkillTag>GPSS World</SkillTag>
            <SkillTag>Математичне моделювання</SkillTag>
            <SkillTag>React & JavaScript</SkillTag>
            <SkillTag>Алгоритми та структури даних</SkillTag>
          </SkillsGrid>
        </Section>

        <Section>
          <h2>🔗 Контакти</h2>
          <SocialLinks>
            <SocialLink href="https://www.instagram.com/stepanenkodaryna/" target="_blank">Instagram</SocialLink>
            <SocialLink as="button" onClick={() => setShowQR(true)}>Telegram</SocialLink>
          </SocialLinks>
        </Section>

        <AnimatePresence>
          {showQR && (
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleOverlayClick}
            >
              <ModalContent
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <h2>Скануй, щоб перейти в Telegram 📱</h2>
                <QRImage
                  src="/images/6.jpg"
                  alt="QR код Telegram"
                />
                <CloseButton onClick={() => setShowQR(false)}>Закрити</CloseButton>
              </ModalContent>
            </Overlay>
          )}
        </AnimatePresence>
      </Container>
    </BackgroundWrapper>
  );
};

export default AboutMe;
