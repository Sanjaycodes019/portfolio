import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <>
      <SEO 
        title="Home"
        description="Sanjay Gupta - Backend Developer & Full-Stack Engineer. 3rd year Computer Science Engineering student specializing in backend development, REST APIs, and scalable web applications."
        keywords="Sanjay Gupta, backend developer, full-stack developer, Nepal, Chitkara University, Node.js, React, web development, software engineer"
      />
      <PageTransition>
        <Layout>
          <Hero />
        </Layout>
      </PageTransition>
    </>
  );
};

export default Home;
