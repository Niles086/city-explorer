import React from 'react';
import { Accordion } from 'react-bootstrap';

export default function RenderWeather(props) {
  return (
    <Accordion defaultActiveKey="0">
      {props.weatherReport.map((item, index) => (
        <Accordion.Item key={index} eventKey={index.toString()}>
          <Accordion.Header>{item.date}</Accordion.Header>
          <Accordion.Body>
            <p>{item.description}</p>
            {/* Additional content can be added here */}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
