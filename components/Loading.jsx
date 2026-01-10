import React from 'react';

const Loading = ({ isExiting }) => {
    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-transform duration-700 ease-in-out ${isExiting ? '-translate-y-full' : 'translate-y-0'
                }`}
        >
            {/* Bento-style loader grid */}
            <div className="grid grid-cols-3 gap-2 w-24 h-24">
                {[...Array(9)].map((_, index) => (
                    <div
                        key={index}
                        className="bg-zinc-800 rounded-lg animate-pulse"
                        style={{
                            animationDelay: `${index * 0.1}s`,
                            animationDuration: '1.5s'
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Loading;
