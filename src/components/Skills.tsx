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
      skills: ["Golang", "Java", "Javascript"]
    },
    {
      name: "Frameworks & Libraries",
      skills: ["Spring Boot", "SolidJS"]
    },
    {
      name: "Tools & Platforms",
      skills: ["Docker", "Datadog", "Temporal", "ArgoCD", "PostgreSQL", "RabbitMQ", "ArangoDB", "Redis", "OpenAPI", "gRPC", "Oauth2"]
    }
  ];

  return (
    <section className="section pt-3" style={{ opacity: isLoaded ? 1 : 0 }}>
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
