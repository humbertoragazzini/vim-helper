import { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import CommandCard from './components/CommandCard';
import vimCommandsData from './data/vimCommands.json';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSource, setSelectedSource] = useState('All');

  // Derive unique categories from data
  const categories = useMemo(() => {
    const cats = new Set(vimCommandsData.map((cmd) => cmd.category));
    return Array.from(cats).sort();
  }, []);

  // Derive unique sources from data
  const sources = useMemo(() => {
    const srcs = new Set(vimCommandsData.map((cmd) => cmd.source));
    return Array.from(srcs).sort();
  }, []);

  // Filter commands logic
  const filteredCommands = useMemo(() => {
    return vimCommandsData.filter((cmd) => {
      // Category filter
      if (selectedCategory !== 'All' && cmd.category !== selectedCategory) {
        return false;
      }

      // Source filter
      if (selectedSource !== 'All' && cmd.source !== selectedSource) {
        return false;
      }

      // Search filter
      const query = searchQuery.toLowerCase();
      return (
        cmd.key.toLowerCase().includes(query) ||
        cmd.combination.toLowerCase().includes(query) ||
        cmd.source.toLowerCase().includes(query) ||
        cmd.descriptionEn.toLowerCase().includes(query) ||
        cmd.descriptionEs.toLowerCase().includes(query) ||
        cmd.explanation.toLowerCase().includes(query)
      );
    });
  }, [searchQuery, selectedCategory, selectedSource]);

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-200 flex flex-col">
      {/* Background decoration */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] h-[50vh] w-[50vw] rounded-full bg-purple-900/10 blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] h-[50vh] w-[50vw] rounded-full bg-emerald-900/10 blur-3xl"></div>
      </div>

      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
        selectedSource={selectedSource}
        setSelectedSource={setSelectedSource}
        sources={sources}
      />

      <main className="relative z-10 mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex-1">
        
        {/* Results Header */}
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            Showing <span className="font-semibold text-white">{filteredCommands.length}</span> commands
          </p>
          {(selectedCategory !== 'All' || selectedSource !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedSource('All');
              }}
              className="text-xs text-emerald-400 hover:text-emerald-300 underline self-start sm:self-auto"
            >
              Reset active filters
            </button>
          )}
        </div>

        {/* Grid */}
        {filteredCommands.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCommands.map((cmd, index) => (
              <CommandCard key={`${cmd.key}-${index}`} command={cmd} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="mb-4 rounded-full bg-slate-800/50 p-4">
              <svg className="h-8 w-8 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-white">No commands found</h3>
            <p className="mt-1 text-slate-500">
              Try adjusting your search query, category, or source filter.
            </p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedSource('All');
              }}
              className="mt-6 text-sm text-emerald-400 hover:text-emerald-300 hover:underline font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </main>

      <footer className="relative z-10 mt-auto border-t border-slate-900 py-8 text-center text-sm text-slate-600">
        <p>Built with React, Vite & Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;
