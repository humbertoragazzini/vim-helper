import React from 'react';

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
}

const Navbar: React.FC<NavbarProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  categories,
}) => {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 flex-col gap-4 py-4 md:h-20 md:flex-row md:items-center md:justify-between md:gap-0 md:py-0">
          
          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity">
              VimCheatSheet
            </span>
          </div>

          {/* Controls */}
          <div className="flex flex-1 items-center gap-4 md:justify-end">
            
            {/* Search */}
            <div className="relative w-full max-w-md">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-slate-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full rounded-lg border border-slate-700 bg-slate-900 py-2 pl-10 pr-3 leading-5 text-slate-300 placeholder-slate-500 focus:border-emerald-500 focus:bg-slate-800 focus:text-white focus:outline-none focus:ring-1 focus:ring-emerald-500 sm:text-sm transition-colors"
                placeholder="Search commands (e.g. 'save', 'copy', 'Shift+k')..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filter */}
            <div className="relative min-w-[140px] hidden sm:block">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="block w-full appearance-none rounded-lg border border-slate-700 bg-slate-900 py-2 pl-3 pr-10 text-slate-300 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 sm:text-sm cursor-pointer hover:bg-slate-800 transition-colors"
              >
                <option value="All">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          
           {/* Mobile Filter (Shown if on mobile) */}
            <div className="block sm:hidden">
               <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="block w-full appearance-none rounded-lg border border-slate-700 bg-slate-900 py-2 pl-3 pr-10 text-slate-300 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 sm:text-sm"
              >
                <option value="All">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
