import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>My Front End development skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
      <ProgressBar
          percent={70}
          text="Bootstrap"
        />
        <ProgressBar
          percent={90}
          text="CSS"
        />
       
        <ProgressBar
          percent={95}
          text="HTML"
        />
        <ProgressBar
          percent={70}
          text="SASS/SCSS/LESS"
        />
        
      </Col>
      <Col xs={24} sm={24} md={12}>
        
         <ProgressBar
          percent={70}
          text="Javascript"
        />
        <ProgressBar
          percent={50}
          text="ReactJS"
        />
        <ProgressBar
          percent={70}
          text="AEM Basics"
        />
        <ProgressBar
          percent={70}
          text="Wordpress"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={70}
          text="Photoshop"
        />
        <ProgressBar
          percent={90}
          text="Responsive Design"
        />
        <ProgressBar
          percent={60}
          text="Flex Design"
        />
        <ProgressBar
          percent={70}
          text="UX Patterns"
        />
      </Col>
      
    </Row>
    <h2>Other Skills</h2>
    <Row gutter={[20, 20]}>
    <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={70}
          text="Portrait drawing "
        />
        <ProgressBar
          percent={70}
          text="Digital Sketch and Painting"
        />
        <ProgressBar
          percent={60}
          text="Video Editing(Adobe Premier)"
        />
        <ProgressBar
          percent={60}
          text="Concept Art and illustration"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
