import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function NewsCard({ news, id }) {
    return (
        <div className="rounded-lg shadow-[0px_0px_15px_rgba(0,0,0,0.3)] p-4">
            {news.urlToImage && (
                <img src={news.urlToImage} alt={news.title} className="w-full h-48 object-cover rounded-md mb-4" />
            )}
            <h3 className="text-lg font-bold">{news.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{new Date(news.publishedAt).toLocaleDateString()}</p>
            <p className="mb-2">{news.description}</p>
            <Link href={`/news/${id}`} className="text-blue-600 mt-2 inline-flex items-center hover:underline">
                Read more <FaArrowRight className="ml-2" />
            </Link>
        </div>
    );
}
