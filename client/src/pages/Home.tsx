import HeroSection from '@/components/home/HeroSection';
import SkillsSection from '@/components/home/SkillsSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import BlogSection from '@/components/home/BlogSection';
import ServicesSection from '@/components/home/ServicesSection';
import { useEffect } from 'react';

const Home = () => {
  // Update page title when component mounts
  useEffect(() => {
    document.title = "Shivam | DevOps Engineer & Infrastructure Specialist";
  }, []);

  return (
    <main>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <BlogSection />
      <ServicesSection />
    </main>
  );
};

export default Home;
