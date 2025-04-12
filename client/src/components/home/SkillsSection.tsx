import { skills } from '@/data/skills';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Skills & Expertise</h2>
        <p className="text-gray-600 mb-8">My technical toolkit includes various DevOps technologies and practices.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="skill-badge bg-primary-dark text-white p-4 rounded-lg text-center shadow-md hover:shadow-lg"
            >
              <div className="text-secondary text-2xl mb-2">
                {skill.icon}
              </div>
              <div className="font-medium">{skill.name}</div>
              <div className="text-sm text-gray-400">{skill.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
