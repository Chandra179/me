
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Mock data
const items = [
  {
    id: 1,
    title: "Avoiding += for String Concatenation in Golang",
    description: "how to optimize string concatenation in go",
    date: "Nov 2024",
    type: "blog",
    tags: ["Golang", "Optimization"],
    link: "https://medium.com/stackademic/avoiding-for-string-concatenation-in-golang-8149822f3341"
  },
  {
    id: 2,
    title: "Mutable & Immutable Java DateTime API",
    description: "why we should use immutable datetime class",
    date: "Aug 2024",
    type: "blog",
    tags: ["Java", "DateTime"],
    link: "https://blog.stackademic.com/mutable-immutable-java-datetime-api-6b26e6d395d3"
  },
  {
    id: 3,
    title: "Grafana Agent: Reading Docker Logs From Stdout",
    description: "Log aggregator with grafana loki",
    date: "Feb 2025",
    type: "blog",
    tags: ["Grafana", "Loki"],
    link: "https://medium.com/stackademic/centralized-log-aggregation-with-loki-grafana-and-the-grafana-agent-853ced0a69a6"
  }
];

const Blog = () => {
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
    <section id="projects-blog" className="section" style={{ opacity: isLoaded ? 1 : 0 }}>
      <div className="content-container">
        <h2 className="section-title">Blog</h2>
        
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

export default Blog;
