import { services, getServiceIconComponent } from '@/data/services';
import { createElement } from 'react';

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-green-400">Services</h2>
        <p className="text-gray-400 mb-8">Key areas where I can help your organization succeed.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = getServiceIconComponent(service.icon);
            return (
              <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-6 transition duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-green-400/20">
                <div className="text-green-400 text-3xl mb-4">
                  {createElement(Icon, { className: service.iconClass })}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
