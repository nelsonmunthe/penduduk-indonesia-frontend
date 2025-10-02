import { Outlet } from "react-router-dom";
import React, { Suspense, useState } from "react";

const MainLayout : React.FC = () => {

    return(
        <div className="flex flex-col h-full bg-white lg:mx-20">
            <main className="flex flex-col flex-1 mt-16  h-full mb-10">
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </div>
    )
}

export default MainLayout;