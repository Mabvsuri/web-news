import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto text-center">
                <p>&copy; 2025 Web News. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                        <FaFacebook />
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                        <FaTwitter />
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </footer>
    );
}