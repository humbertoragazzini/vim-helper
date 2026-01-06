import React from 'react';

interface CommandCardProps {
  command: {
    category: string;
    key: string;
    combination: string;
    descriptionEn: string;
    descriptionEs: string;
    explanation: string;
  };
}

const CommandCard: React.FC<CommandCardProps> = ({ command }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/50 hover:shadow-emerald-500/10 hover:-translate-y-1">
      <div className="absolute top-0 right-0 h-24 w-24 translate-x-12 translate-y--12 bg-emerald-500/10 blur-2xl transition-all duration-500 group-hover:bg-emerald-500/20"></div>
      
      <div className="mb-4 flex items-start justify-between">
        <div className="flex flex-col gap-2">
            <span className="inline-flex w-fit items-center rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
              {command.category}
            </span>
            <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 text-pretty break-words">
                {command.key}
            </h3>
        </div>
      </div>
      
       <div className="mb-4 flex items-center gap-2">
         <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Combination:</span>
         <code className="relative rounded bg-slate-800 px-[0.5rem] py-[0.2rem] font-mono text-sm font-bold text-emerald-300 ring-1 ring-white/10">
           {command.combination}
         </code>
      </div>

      <div className="space-y-3">
        <div>
          <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-300">
            <span className="select-none">🇺🇸</span> Description
          </h4>
          <p className="text-sm text-slate-400">{command.descriptionEn}</p>
        </div>
        
        <div>
           <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-300">
            <span className="select-none">🇪🇸</span> Descripción
          </h4>
          <p className="text-sm text-slate-400">{command.descriptionEs}</p>
        </div>

        <div className="mt-4 border-t border-slate-800 pt-3">
           <p className="text-xs italic text-slate-500">
             {command.explanation}
           </p>
        </div>
      </div>
    </div>
  );
};

export default CommandCard;
