import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  max-width: 1000px;
  margin: 80px auto;
  padding: 40px;
  background: ${(props) => props.theme.sectionBg};
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
`;

const Section = styled.div`
  margin-bottom: 50px;
`;

const FutureList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FutureItem = styled.li`
  font-size: 18px;
  margin-bottom: 15px;
  padding-left: 30px;
  position: relative;

  &::before {
    content: "🚀";
    position: absolute;
    left: 0;
  }
`;

const Quote = styled.blockquote`
  font-style: italic;
  margin: 40px 0;
  padding: 20px;
  background: ${(props) => props.theme.accent}22;
  border-left: 4px solid ${(props) => props.theme.accent};
  border-radius: 8px;
  font-size: 20px;
`;

const MemeSection = styled.div`
  margin-top: 60px;
`;

const MemeTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

const MemeGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`;

const MemeImage = styled(motion.img)`
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const imageVariants = (direction = "left") => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -100 : 100,
    rotate: direction === "left" ? -10 : 10,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
});


const MyFuture = () => {
  return (
    <Container>
      <Title>Моє майбутнє</Title>

      <Section>
        <h2>🌟 Мрії та цілі</h2>
        <FutureList>
          <FutureItem>Закінчити університет та розвиватися у напрямку IT</FutureItem>
          <FutureItem>Працювати в ІТ-компанії або створити власний стартап</FutureItem>
          <FutureItem>Подорожувати Європою</FutureItem>
          <FutureItem>Допомагати іншим вчитися (через YouTube або блог)</FutureItem>
        </FutureList>
      </Section>

      <Section>
        <h2>💬 Натхнення</h2>
        <Quote>
          “Майбутнє належить тим, хто вірить у красу своїх мрій.” — Елеонора Рузвельт
        </Quote>
      </Section>

      <MemeSection>
        <MemeTitle>😅 Трішки правди про майбутнє</MemeTitle>
        <MemeGallery>
          <MemeImage 
            src= "./images/1.png"
            alt="Мем 1"
            loading="lazy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants("left")}
          />
          <MemeImage
            src="./images/2.jpg" alt="Мем 2"
            loading="lazy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants("right")}
          />
        </MemeGallery>
      </MemeSection>
    </Container>
  );
};

export default MyFuture;
