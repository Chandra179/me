import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "chandrafirst67@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <footer className="py-8 border-t border-border">
      <div className="content-container">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Chandra. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Chandra179"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/chandra-888777/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <div
              className="relative group cursor-pointer"
              onMouseEnter={() => setShowEmail(true)}
              onMouseLeave={() => setShowEmail(false)}
              onClick={handleCopy}
              aria-label="Email"
            >
              <Mail
                size={18}
                className="text-muted-foreground group-hover:text-foreground transition-colors"
              />
              {showEmail && (
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-background border border-border rounded px-3 py-1 text-xs shadow z-10 whitespace-nowrap flex items-center gap-2">
                  <span>{email}</span>
                  <button
                    className="ml-2 px-2 py-0.5 bg-secondary rounded text-xs hover:bg-accent"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy();
                    }}
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
