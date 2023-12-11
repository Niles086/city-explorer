import React from 'react';
import { Accordion } from 'react-bootstrap';

// Nested WeatherDay component
const WeatherDay = ({ date, description }) => (
  <div>
    <p>Date: {date}</p>
    <p>Description: {description}</p>
    {/* Additional content specific to a single day can be added here */}
  </div>
);

// RenderWeather component
export default function RenderWeather(props) {
  return (
    <Accordion defaultActiveKey="0">
      {props.weatherReport.map((item, index) => (
        <Accordion.Item key={index} eventKey={index.toString()}>
          <Accordion.Header>{item.date}</Accordion.Header>
          <Accordion.Body>
            <WeatherDay date={item.date} description={item.description} />
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
