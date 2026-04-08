import React from 'react';
import Achievements from '../components/Achievements';
import Certifications from '../components/Certifications';
import Layout from '../components/Layout';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

const Accomplishments = () => {
  return (
    <>
      <SEO 
        title="Accomplishments"
        description="Achievements and certifications of Sanjay Gupta - Hackathon wins, coding competition achievements, academic accomplishments, and professional certifications."
        keywords="accomplishments, achievements, certifications, hackathon, coding competition, academic awards, professional development, Sanjay Gupta"
      />
      <PageTransition>
        <Layout>
          <Achievements />
          <Certifications />
        </Layout>
      </PageTransition>
    </>
  );
};

export default Accomplishments;
