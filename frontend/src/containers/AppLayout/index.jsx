import React from 'react';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <div className="relative">
      <div className="lg-pl-[64px]">
        <div className="px-4 sm:px-8 py-4 sm:py-6 min-h-screen">
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
