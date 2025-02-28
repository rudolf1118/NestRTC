'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const HomePage: React.FC = () => {
    const route = useRouter();
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
            <span className='text-4xl font-bold mb-4'>Welcome to open video-platform!</span>
            <div className="mt-6">
            <button 
                className='px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300'
                onClick={() => {
                route.push("/rooms")
                }} 
            >
                Click to dive into the room.
            </button>
            </div>
        </div>
    );
};

export default HomePage;