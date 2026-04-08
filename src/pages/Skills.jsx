import React from 'react';
import Skills from '../components/Skills';
import Layout from '../components/Layout';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

const SkillsPage = () => {
  return (
    <>
      <SEO 
        title="Skills"
        description="Technical skills of Sanjay Gupta - Programming Languages, Data Structures & Algorithms, Backend & APIs, Databases, Frontend, Tools, and CS Fundamentals."
        keywords="skills, technical skills, programming, Node.js, React, MongoDB, algorithms, data structures, web development"
      />
      <PageTransition>
        <Layout>
          <Skills />
        </Layout>
      </PageTransition>
    </>
  );
};

export default SkillsPage;
