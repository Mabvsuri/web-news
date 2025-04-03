import Navbar from "@/components/Navbar";
import NewsCard from "@/components/NewsCard";

export default function News() {
    const fakeNews = [
        { id: 1, title: "News 1", description: "Description for news 1" },
        { id: 2, title: "News 2", description: "Description for news 2" },
        { id: 3, title: "News 3", description: "Description for news 3" },
    ];

    return (
        <div>
            <Navbar />
            <main className="container mx-auto p-4">
                <h2 className="text-2xl font-bold">News</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {fakeNews.map((news) => (
                        <NewsCard key={news.id} news={news}/>
                    ))}
                </div>
            </main>
        </div>
    );
}