import React from 'react';
import Projects from '../components/Projects';
import Layout from '../components/Layout';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

const ProjectsPage = () => {
  return (
    <>
      <SEO 
        title="Projects"
        description="Portfolio projects by Sanjay Gupta - CargoNepal logistics platform, SafeHer women's safety app, Snake game, and other full-stack development projects."
        keywords="projects, portfolio, web development, CargoNepal, SafeHer, Node.js, React, full-stack, hackathon"
      />
      <PageTransition>
        <Layout>
          <Projects />
        </Layout>
      </PageTransition>
    </>
  );
};

export default ProjectsPage;
