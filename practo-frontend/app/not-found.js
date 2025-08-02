import Link from 'next/link';
import Header from "./components/Header";

export default function NotFound() {
    return (<>
        <Header />
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-4">
            <div className="text-blue-500 font-bold text-9xl">404</div>
            <div className="text-6xl font-medium">:( </div>
            <h1 className="text-4xl font-bold mt-4">Page Not Found</h1>
            <p className="text-gray-600 mt-2 max-w-md">
                This is a clone of the Practo website for educational purposes. Not all features are functional.
            </p>
            <Link href="/find-doctors" className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
                Find Doctors
            </Link>

            <div className="mt-12 w-full max-w-sm bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">About the Creator</h2>
                <div className="text-left text-gray-700 space-y-4 justify-center items-center flex flex-col">
                    <p><strong className="font-semibold">Creator:</strong> Subham Chaudhary</p>
                    <div className="flex space-x-4">
                        <a href="https://www.linkedin.com/in/subham-chaudhary-53668229b/" target="_blank" rel="noopener noreferrer" className="hover:text-white  hover:bg-blue-500 border-3 border-blue-500 px-3 py-1 rounded-full text-blue-500">
                            <strong className="font-semibold">LinkedIn</strong>
                        </a>
                        <a href="https://github.com/Subham-chaudhary" target="_blank" rel="noopener noreferrer" className="hover:text-white  hover:bg-black border-3 border-black px-3 py-1 rounded-full text-black">
                            <strong className="font-semibold">GitHub</strong>
                        </a>
                        <a href="https://wa.link/18tf6f" target="_blank" rel="noopener noreferrer" className="hover:text-white  hover:bg-green-700 border-3 border-green-700 px-3 py-1 rounded-full text-green-700">
                            <strong className="font-semibold">WhatsApp</strong>
                        </a>
                    </div>
                    <p>
                        <strong className="font-semibold">Email:</strong>
                        <a href="mailto:shubhu.uwu@gmail.com" className="text-blue-500 ">
                            shubhu.uwu@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </>
    );
}
