import React from 'react';
import { Layout } from 'antd';
import Header from '../components/PageLayout/Header';
import Footer from '../components/PageLayout/Footer';
import SidebarWrapper from '../components/PageLayout/Sidebar';
import AboutMe from '../components/PageFragments/HomePage/AboutMe';
import Skills from '../components/PageFragments/HomePage/SkillProgress';

export default () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SidebarWrapper>
        <>
          <AboutMe />
          <Skills />
        </>
      </SidebarWrapper>
      <Footer />
    </Layout>
  </Layout>
);
