import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const FeaturedNews = ({newsList}) => {
    return (
        <div className="p-4">
            <h3 className="text-xl font-bold mb-4">Top Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {newsList.map((news) => (
                    <div key={news.id} className="rounded-lg shadow-[0px_0px_15px_rgba(0,0,0,0.3)] p-4">
                        <h3 className="text-lg font-bold">{news.title}</h3>
                        <p>{news.description}</p>
                        <Link href={`/news/${news.id}`} className="text-blue-600 mt-2 inline-flex items-center hover:underline">
                            Read more <FaArrowRight className="ml-2" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FeaturedNews;