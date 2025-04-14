import NewsCard from "./NewsCard";
import { generateSlug } from "@/utils/slugify";

export default function GeneralNews({ Gnews }) {
    return (
        <div className="p-4 mx-auto max-w-7xl">
            <h3 className="text-xl font-bold mb-4">All News</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Gnews.map((news) => {
                    const id = generateSlug(news.title);
                    return <NewsCard key={id} news={news} id={id} />;
                })}
            </div>
        </div>
    );
}
