import Introduction from "@/components/Introduction";
import Tabs from "@/components/Tabs";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main className="py-12">
        <Introduction />
        <Tabs />
        <Skills />
        <Education />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
