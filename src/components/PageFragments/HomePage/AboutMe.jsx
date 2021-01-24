import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `Hi !! My name is Sumit Sinha. I'm a  frontend developer who is
    passionate about various web technologies. I have 11 + years of IT experience in the areas of Application and Web Development .`,
  paraTwo: `Currently I work mostly with HTML, Bootstrap, SASS/LESS and Javascript technologies like ReactJS and NodeJS. I also
    have hands on experience working with platforms like AEM(Adobe CQ).I also have extensive knowledge in User experience design and hands on knowledge in tools like Photoshop, Illustrator, Zeplin etc`,
  paraThree: `Apart from Coding I love to draw. I am comicbook enthusiast and freelance Sketch and Digital artist.I also have a Youtube Art Channel where I post art related video content .`
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)} ${stripTags(pageText.paraThree)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Sumit', 'Sinha', 'Frontend Developer ', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Git', 'AEM', 'Bootstrap']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
        <p dangerouslySetInnerHTML={domHtml(pageText.paraThree)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Born in"
            textH3="Assam, India"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Self Taught Developer"
            textH3="Thanks to the Web Resources"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="onsite.png"
            alt="onsite image"
            textH4="Onsite Abroad"
            textH3="Work Experience"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="Socially Awkward"
            textH3="At times"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="superhero-geek.png"
            alt="superhero nerd image"
            textH4="Love Comic Books"
            textH3="Gift me one for collection"
          />
        </Col>
        
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="artlove.png"
            alt="art image"
            textH4="Artist"
            textH3="Art + Me = Passion + Happiness"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Pursued MCA in"
            textH3="Computer Applications"
            height={60}
            width={60}
          />
        </Col>
       
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="gadget-lover1.png"
            alt="gadget geek image"
            textH4="Love Tech"
            textH3="Love for new Gadgets and Tech"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="youtuber.svg"
            alt="youtuber image"
            textH4="Youtuber in the making"
            textH3="YouTube content creator"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
