import React from 'react';
import Certifications from '../components/Certifications';
import Achievements from '../components/Achievements';
import Layout from '../components/Layout';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

const CertificationsAchievements = () => {
  return (
    <>
      <SEO 
        title="Certifications & Achievements"
        description="Certifications and achievements of Sanjay Gupta - Professional certifications, hackathon wins, coding competition achievements, and academic accomplishments."
        keywords="certifications, achievements, hackathon, coding competition, academic awards, professional development, Sanjay Gupta"
      />
      <PageTransition>
        <Layout>
          <Certifications />
          <Achievements />
        </Layout>
      </PageTransition>
    </>
  );
};

export default CertificationsAchievements;
