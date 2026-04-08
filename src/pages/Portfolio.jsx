import React from 'react';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Layout from '../components/Layout';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

const Portfolio = () => {
  return (
    <>
      <SEO 
        title="Portfolio"
        description="Portfolio projects and technical skills of Sanjay Gupta - Full-stack development projects, programming expertise, and technical capabilities."
        keywords="portfolio, projects, technical skills, programming, Node.js, React, MongoDB, algorithms, data structures, web development"
      />
      <PageTransition>
        <Layout>
          <Projects />
          <Skills />
        </Layout>
      </PageTransition>
    </>
  );
};

export default Portfolio;
