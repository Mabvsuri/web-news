import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function NewsDetail({ params }) {
    const { id } = params;
    return (
        <div>
            <Navbar />
            <main className="container mx-auto p-4">
                <h2 className="text-2xl font-bold">News {id}</h2>
                <p className="mt-4">This is the detailed view of news {id}.</p>
            </main>
            <Footer />
        </div>
    );
}