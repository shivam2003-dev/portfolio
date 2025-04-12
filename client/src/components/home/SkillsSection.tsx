import { skills, getIconComponent } from '@/data/skills';
import { createElement } from 'react';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-primary">Skills & Expertise</h2>
        <p className="text-gray-700 mb-8">My technical toolkit includes various DevOps technologies and practices.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => {
            const Icon = getIconComponent(skill.icon);
            return (
              <div 
                key={index}
                className="skill-badge bg-white border border-gray-100 p-5 rounded-lg text-center shadow-sm hover:shadow-lg"
              >
                <div className="text-primary text-3xl mb-3">
                  {createElement(Icon)}
                </div>
                <div className="font-semibold text-gray-800">{skill.name}</div>
                <div className="text-sm text-gray-500">{skill.category}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
