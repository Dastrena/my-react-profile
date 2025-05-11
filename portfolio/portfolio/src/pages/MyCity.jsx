import React, { useEffect, useState } from "react";
import styled from "styled-components";


const MyCity = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_KEY = "3b46e374dd08be17b0e5710835f49909";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Obukhiv,UA&units=metric&lang=ua&appid=${API_KEY}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Не вдалося отримати погоду");
        }
        return res.json();
      })
      .then((data) => setWeather(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return (
      <Container>
        <p>❌ {error}</p>
      </Container>
    );
  }

  if (!weather) {
    return (
      <Container>
        <p>Завантаження погоди...</p>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Моє місто — Обухів</Title>
      <Paragraph>
        Обухів — мальовниче місто в Київській області, розташоване неподалік від Дніпра. Це місто поєднує в собі історичну глибину та сучасний дух, дарує натхнення природою й спокоєм.
      </Paragraph>

      <WeatherInfo>
        <h2>☁️ Поточна погода</h2>
        <WeatherIcon
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="Іконка погоди"
        />
        <TempText temp={weather.main.temp}>
          🌡 Температура: {weather.main.temp}°C (відчувається як {weather.main.feels_like}°C)
        </TempText>
        <p>💧 Вологість: {weather.main.humidity}%</p>
        <p>🌬 Вітер: {weather.wind.speed} м/с</p>
        <p>📍 Координати: {weather.coord.lat}, {weather.coord.lon}</p>
        <p>🗺 Місто: {weather.name}, {weather.sys.country}</p>
      </WeatherInfo>

      <h2>🖼 Фотогалерея Обухова</h2>
      <ImageCarousel>
        <CityImage src="/images/4.jpg" alt="Обухів 1" />
        <CityImage src="/images/5.jpg" alt="Обухів 2" />
        <CityImage src="/images/7.jpg" alt="Обухів 3" />
        <CityImage src="/images/8.jpg" alt="Обухів 4" />
      </ImageCarousel>
    </Container>
  );
};

export default MyCity;

const Container = styled.div`
  max-width: 1000px;
  margin: 80px auto;
  padding: 40px;
  background: ${(props) => props.theme.sectionBg};
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  color: ${(props) => props.theme.text || "#000"};
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
`;

const WeatherInfo = styled.div`
  text-align: center;
  margin: 60px 0;
`;

const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
  transition: transform 0.3s ease;
  background-color:rgb(154, 173, 196);
  border-radius: 50px;

  &:hover {
    transform: scale(1.2);
  }
`;

const TempText = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => {
    if (props.temp < 0) return "#4f9aff";
    if (props.temp < 15) return "#ff9f00";
    return "#ff4040";
  }};
`;

const ImageCarousel = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 15px;
  margin-top: 20px;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #999;
    border-radius: 4px;
  }
`;

const CityImage = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  flex-shrink: 0;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;
