
import { useState, useEffect } from 'react';
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const skillCategories = [
    {
      name: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "Go", "SQL", "HTML", "CSS"]
    },
    {
      name: "Frameworks & Libraries",
      skills: ["React", "Next.js", "Node.js", "Express", "Vue.js", "Angular", "Django", "Spring Boot"]
    },
    {
      name: "Tools & Platforms",
      skills: ["Git", "Docker", "Kubernetes", "AWS", "Firebase", "CI/CD", "Jest", "Webpack"]
    },
    {
      name: "Practices",
      skills: ["Test-Driven Development", "Agile/Scrum", "Microservices", "RESTful API Design", "GraphQL", "System Design"]
    }
  ];

  return (
    <section className="section" style={{ animationDelay: '0.5s', opacity: isLoaded ? 1 : 0 }}>
      <div className="content-container">
        <h2 className="section-title">Skills</h2>
        
        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-md font-medium mb-3">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge key={idx} variant="outline" className="px-3 py-1 border-black text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
