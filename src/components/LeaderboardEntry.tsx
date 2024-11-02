import React from 'react';
import { Trophy } from 'lucide-react';

type Player = {
  rank: number;
  name: string;
  score: number;
  character: string;
};

export function LeaderboardEntry({ player }: { player: Player }) {
  const getRankIcon = (rank: number) => {
    if (rank === 1) return '👑';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return '#' + rank;
  };

  return (
    <div className="pixel-border bg-indigo-950 p-2 md:p-3 relative group hover:bg-indigo-900 transition-colors">
      <div className="flex items-center justify-between gap-2 md:gap-4">
        <div className="flex items-center gap-2 md:gap-4">
          <span className="text-xl md:text-2xl font-bold min-w-6 md:min-w-8 text-center">{getRankIcon(player.rank)}</span>
          <span className="text-sm md:text-xl uppercase tracking-wider truncate max-w-[120px] sm:max-w-[200px] md:max-w-none">
            {player.name}
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-base md:text-xl font-bold text-yellow-400 tabular-nums">
            {player.score.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}