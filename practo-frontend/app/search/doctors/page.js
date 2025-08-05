import { Suspense } from 'react';
import SearchPageClient from './SearchPageClient';
import { FiLoader } from "react-icons/fi";

const SearchPage = () => {
    return (
        <Suspense fallback={
            <div className="flex items-center w-full h-full border-2 justify-center">
                
                    <span className="sr-only">Loading...</span>
                </div>
        }>
            <SearchPageClient />
        </Suspense>
    );
};

export default SearchPage;
