import { useState } from 'react';
import Blog from './Blog';
import Work from './Work';
import { Button } from '@/components/ui/button';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<'blog' | 'work'>('blog');

  return (
    <div className="content-container mt-10 pb-1">
      <div className="flex gap-2 mb-5 justify-center">
        <Button
          variant={activeTab === 'work' ? 'default' : 'outline'}
          onClick={() => setActiveTab('work')}
          className="px-6"
        >
          Work
        </Button>
        <Button
          variant={activeTab === 'blog' ? 'default' : 'outline'}
          onClick={() => setActiveTab('blog')}
          className="px-6"
        >
          Blog
        </Button>
      </div>
      <div>
        {activeTab === 'blog' ? <Blog /> : <Work />}
      </div>
    </div>
  );
};

export default Tabs;
