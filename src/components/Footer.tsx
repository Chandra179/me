
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="content-container">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github size={18} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" aria-label="Email" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
