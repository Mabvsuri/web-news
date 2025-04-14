import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getAllNews } from "@/utils/fetchNews";
import { getTopHeadlines } from "@/utils/fetchNews";
import { generateSlug } from "@/utils/slugify";


export default async function NewsDetail({ params }) {

    const { id } = params;

    let allNews;
    if (id.startsWith("top-")) {
        allNews = await getTopHeadlines();
    } else {
        allNews = await getAllNews();
    }

    const cleanId = id.replace(/^top-/, "");

    const selectedNews = allNews.find(
        (news) => generateSlug(news.title) === cleanId
    );

    return (
        <div>
            <Navbar />
            <main className="container mx-auto p-4">
                {selectedNews ? (
                    <>
                        <h2 className="text-2xl font-bold mb-4">{selectedNews.title}</h2>
                        <p className="text-sm text-gray-500 mb-2">
                            {new Date(selectedNews.publishedAt).toLocaleDateString()}
                        </p>
                        {selectedNews.urlToImage && (
                            <img
                                src={selectedNews.urlToImage}
                                alt={selectedNews.title}
                                className="w-full h-auto rounded-md mb-4"
                            />
                        )}
                        <p className="text-lg">{selectedNews.content || selectedNews.description}</p>
                    </>
                ) : (
                    <p className="text-red-500">News article not found.</p>
                )}
            </main>
            <Footer />
        </div>
    );
}
