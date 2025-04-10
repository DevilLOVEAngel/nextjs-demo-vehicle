import React from 'react';

const featuresData = [
  {
    title: 'Feature One',
    description: 'Description of feature one.',
    icon: '🔧', // Replace with actual icon component or image
  },
  {
    title: 'Feature Two',
    description: 'Description of feature two.',
    icon: '🚀', // Replace with actual icon component or image
  },
  {
    title: 'Feature Three',
    description: 'Description of feature three.',
    icon: '📈', // Replace with actual icon component or image
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;