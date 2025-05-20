
import { useState, useEffect } from 'react';

const Education = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      period: "2019 - 2021",
      description: "Specialized in Machine Learning and Distributed Systems. Thesis on 'Optimizing Neural Networks for Edge Computing Devices'."
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "Massachusetts Institute of Technology",
      period: "2015 - 2019",
      description: "Graduated with honors. Active member of the Robotics Club and ACM student chapter."
    }
  ];

  return (
    <section className="section pb-32" style={{ animationDelay: '0.7s', opacity: isLoaded ? 1 : 0 }}>
      <div className="content-container">
        <h2 className="section-title">Education</h2>
        
        <div className="space-y-10">
          {education.map((item, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg font-medium">{item.degree}</h3>
                <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">{item.period}</span>
              </div>
              <p className="text-muted-foreground mb-2">{item.institution}</p>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
