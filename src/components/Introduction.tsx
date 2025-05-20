
import { useState, useEffect } from 'react';

const Introduction = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="section py-5" style={{ animationDelay: '0.1s', opacity: isLoaded ? 1 : 0 }}>
      <div className="content-container">
        <h1 className="text-4xl md:text-5xl mb-8">Hello, I'm <span className="font-bold">Chandra</span>.</h1>
        <p className="text-lg md:text-xl leading-relaxed mb-4">
          I'm a Software Engineer with three years of experience in a <a href="#" className="underline hover:text-gray-700 transition-colors">multifinance company</a>. 
          My main focus is backend development using Golang, and I'm good at thinking through abstract problems. 
          I'm also interested in economy and investing, and I can explain things clearly.
        </p>
      </div>
    </section>
  );
};

export default Introduction;
