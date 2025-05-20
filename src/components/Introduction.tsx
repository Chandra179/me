
import { useState, useEffect } from 'react';

const Introduction = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="section py-20" style={{ animationDelay: '0.1s', opacity: isLoaded ? 1 : 0 }}>
      <div className="content-container">
        <h1 className="text-4xl md:text-5xl mb-8">Hello, I'm <span className="font-bold">John Doe</span>.</h1>
        <p className="text-lg md:text-xl leading-relaxed mb-4">
          I'm a software engineer specializing in building exceptional digital experiences.
          Currently, I'm focused on creating accessible, human-centered products at <a href="#" className="underline hover:text-gray-700 transition-colors">Company Name</a>.
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          I value clean code, thoughtful interfaces, and scalable architecture.
        </p>
      </div>
    </section>
  );
};

export default Introduction;
