import React from 'react';
import About from '../components/About';
import Layout from '../components/Layout';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

const AboutPage = () => {
  return (
    <>
      <SEO 
        title="About"
        description="Learn more about Sanjay Gupta - 3rd year Computer Science Engineering student passionate about backend development and creating scalable web applications."
        keywords="about Sanjay Gupta, computer science engineering, backend developer, student profile, Nepal"
      />
      <PageTransition>
        <Layout>
          <About />
        </Layout>
      </PageTransition>
    </>
  );
};

export default AboutPage;
