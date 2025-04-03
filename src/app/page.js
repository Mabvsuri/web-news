import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FeaturedNews from "@/components/FeaturedNews";

export default function Home() {

  const fakeNews = [
    { id: 1, title: "News 1", description: "Description for news 1" },
    { id: 2, title: "News 2", description: "Description for news 2" },
    { id: 3, title: "News 3", description: "Description for news 3" },
  ];
  
  return (
    <div>
      <Navbar />
      <main className="container p-4">
        <h2 className="text-2xl font-bold">Welcome to Web News</h2>
        <p className="mt-4">Your source for the latest news.</p>
      </main>
      <FeaturedNews newsList ={fakeNews} />
      <Footer />
    </div>
  );
}