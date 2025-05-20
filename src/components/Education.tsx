
import { useState, useEffect } from 'react';

const Education = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Univesitas Multimedia Nusantara",
      period: "2017 - 2021"
      // description: "GPA: 3.75/4.00"
    }
  ];

  return (
    <section className="section pt-12 pb-32" style={{ animationDelay: '0.7s', opacity: isLoaded ? 1 : 0 }}>
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
              {/* <p className="text-sm">{item.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
