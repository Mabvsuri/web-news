import Link from "next/link";
import { FaHome, FaNewspaper } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Web News</h1>
                <div className="space-x-4 flex items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <FaHome /> Home
                    </Link>
                    <Link href="/news" className="flex items-center gap-2">
                        <FaNewspaper /> News
                    </Link>

                </div>
            </div>
        </nav>
    )
}