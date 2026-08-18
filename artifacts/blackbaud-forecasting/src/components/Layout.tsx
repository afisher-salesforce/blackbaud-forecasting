import React, { useState, useEffect } from 'react';
import { useClerk, useUser } from '@clerk/react';
import { Sidebar } from './Sidebar';

function UserNav() {
  const { user } = useUser();
  const { signOut } = useClerk();

  return (
    <div className="flex items-center gap-2">
      <span className="text-[13px] text-[#5b6473] hidden sm:block">
        {user?.emailAddresses?.[0]?.emailAddress}
      </span>
      <button
        onClick={() => window.print()}
        title="Save as PDF"
        className="text-[13px] font-medium text-[#24344c] bg-[#eef2f7] hover:bg-[#d6dde8] px-3 py-1.5 rounded-lg transition-colors cursor-pointer border border-[#d6dde8] print:hidden"
      >
        Save as PDF
      </button>
      <button
        onClick={() => signOut({ redirectUrl: '/' })}
        className="text-[13px] font-medium text-[#24344c] bg-[#eef2f7] hover:bg-[#d6dde8] px-3 py-1.5 rounded-lg transition-colors cursor-pointer border border-[#d6dde8] print:hidden"
      >
        Sign out
      </button>
    </div>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('bb-nav-collapsed');
    if (saved) {
      setCollapsed(saved === 'true');
    }
  }, []);

  const toggleNav = () => {
    const newState = !collapsed;
    setCollapsed(newState);
    localStorage.setItem('bb-nav-collapsed', String(newState));
  };

  return (
    <div className={collapsed ? 'nav-collapsed' : ''}>
      <header className="top-container">
        <div className="top-inner">
          <button className="nav-toggle" onClick={toggleNav}>
            {collapsed ? 'Show Navigation' : 'Hide Navigation'}
          </button>
          <UserNav />
        </div>
      </header>
      <div className="layout">
        <Sidebar />
        <main className="main">
          {children}
        </main>
      </div>
    </div>
  );
}
