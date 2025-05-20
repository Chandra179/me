
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Mock data
const items = [
  {
    id: 1,
    title: "E-commerce Platform Redesign",
    description: "Rebuilt the front-end architecture of a major e-commerce platform, improving performance metrics by 40%.",
    date: "2023",
    type: "project",
    tags: ["React", "TypeScript", "Redux", "Tailwind CSS"],
    link: "#"
  },
  {
    id: 2,
    title: "Building Scalable Backend Services",
    description: "A deep dive into building microservices with Node.js and Docker.",
    date: "May 2023",
    type: "blog",
    tags: ["Backend", "Node.js", "Microservices", "Docker"],
    link: "#"
  },
  {
    id: 3,
    title: "Inventory Management System",
    description: "Developed an inventory tracking system that reduced manual errors by 85%.",
    date: "2022",
    type: "project",
    tags: ["Vue.js", "Express", "MongoDB", "Socket.io"],
    link: "#"
  },
  {
    id: 4,
    title: "The Art of Clean Code",
    description: "Discussing principles and practices for writing maintainable code.",
    date: "February 2023",
    type: "blog",
    tags: ["Clean Code", "Best Practices", "Architecture"],
    link: "#"
  },
  {
    id: 5,
    title: "Machine Learning Recommendation Engine",
    description: "Built a product recommendation engine that increased conversion rates by 23%.",
    date: "2022",
    type: "project",
    tags: ["Python", "TensorFlow", "Flask", "AWS"],
    link: "#"
  },
  {
    id: 6,
    title: "Modern Authentication Patterns",
    description: "Exploring secure authentication strategies for modern applications.",
    date: "November 2022",
    type: "blog",
    tags: ["Security", "Auth", "JWT", "OAuth"],
    link: "#"
  }
];

const ProjectsAndBlog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const itemsPerPage = 3;
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Calculate items for current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  
  // Calculate total pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of section
    document.getElementById('projects-blog')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects-blog" className="section" style={{ animationDelay: '0.3s', opacity: isLoaded ? 1 : 0 }}>
      <div className="content-container">
        <h2 className="section-title">Projects & Writing</h2>
        
        <div className="space-y-8 mb-8">
          {currentItems.map(item => (
            <Card key={item.id} className="p-6 hover:border-black transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-medium">{item.title}</h3>
                <span className="text-sm text-muted-foreground">{item.date}</span>
              </div>
              <p className="mb-4 text-muted-foreground">{item.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex flex-wrap gap-2">
                  {item.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="text-xs px-2 py-1 bg-secondary rounded-sm">
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 2 && (
                    <span className="text-xs px-2 py-1 bg-secondary rounded-sm">
                      +{item.tags.length - 2}
                    </span>
                  )}
                </div>
                <div className="text-sm">
                  <span className="mr-2 text-muted-foreground">{item.type === 'project' ? 'Project' : 'Article'}</span>
                  <a href={item.link} className="underline hover:text-gray-700">View</a>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
              <Button
                key={number}
                onClick={() => handlePageChange(number)}
                variant={currentPage === number ? "default" : "outline"}
                size="sm"
                className="w-8 h-8 p-0"
              >
                {number}
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsAndBlog;
