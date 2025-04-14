"use client";

import { use, useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FeaturedNews from "@/components/FeaturedNews";
import { getTopHeadlines } from "@/utils/fetchNews";

export default function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const newsData = await getTopHeadlines();
        setNews(newsData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-bold">Welcome to Web News</h2>
        <p className="mt-4">Your source for the latest news.</p>
      </main>
      {loading ?(
        <p className="text-center mt-4">Loading...</p>
      ) : error ? (
        <p className="text-red-500 text-center mt-4">Error: {error.message}</p>
      ) : (
        <FeaturedNews Fnews={news} />
      )}
      <Footer />
    </div>
  );
}