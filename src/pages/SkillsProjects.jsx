import React from 'react';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Layout from '../components/Layout';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

const SkillsProjects = () => {
  return (
    <>
      <SEO 
        title="Skills & Projects"
        description="Technical skills and portfolio projects of Sanjay Gupta - Programming Languages, Data Structures & Algorithms, Backend & APIs, Databases, Frontend, Tools, and CS Fundamentals."
        keywords="skills, projects, technical skills, programming, Node.js, React, MongoDB, algorithms, data structures, web development, portfolio"
      />
      <PageTransition>
        <Layout>
          <Skills />
          <Projects />
        </Layout>
      </PageTransition>
    </>
  );
};

export default SkillsProjects;
