import { Outlet } from "react-router-dom";
import React, { Suspense, useState } from "react";

const MainLayout : React.FC = () => {

    return(
        <div className="flex flex-col h-full bg-white lg:mx-20">
            <nav className="fixed top-0 left-0 w-full z-50 bg-[#E3E3E3] flex items-center justify-between lg:px-6 py-2 shadow-md">
            </nav>
            <main className="flex flex-col flex-1 mt-16  h-full mb-10">
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </div>
    )
}

export default MainLayout;