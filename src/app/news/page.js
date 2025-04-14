"use client";

import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { getAllNews } from "@/utils/fetchNews";
import GeneralNews from "@/components/GeneralNews";

export default function News() {
    const [newsList, setNewsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchNews() {
            try {
                const data = await getAllNews();
                setNewsList(data);
            } catch (err) {
                console.error("Error fetching news:", err);
                setError(err.response ? err.response.data : err.message);
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
                <h2 className="text-2xl font-bold">News</h2>
                {loading ? (
                    <p className="text-center mt-4">Loading...</p>
                ) : error ? (
                    <p className="text-red-500 text-center mt-4">Error: {error.message}</p>
                ) : (
                    <GeneralNews Gnews={newsList} />
                )}
            </main>
        </div>
    );
}
