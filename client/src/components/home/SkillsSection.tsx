import { skills, getIconComponent } from '@/data/skills';
import { createElement } from 'react';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-green-400">Skills & Expertise</h2>
        <p className="text-gray-400 mb-8">My technical toolkit includes various DevOps technologies and practices.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => {
            const Icon = getIconComponent(skill.icon);
            return (
              <div 
                key={index}
                className="skill-badge bg-gray-900 border border-gray-800 p-5 rounded-lg text-center transition-all duration-300 
                  hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20 hover:-translate-y-1"
              >
                <div className="text-green-400 text-3xl mb-3">
                  {createElement(Icon)}
                </div>
                <div className="font-semibold text-gray-100">{skill.name}</div>
                <div className="text-sm text-green-300/70">{skill.category}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
