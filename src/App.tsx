import React from 'react';
import { Gamepad2 } from 'lucide-react';

const LEADERBOARD_DATA = [
  { rank: 1, name: "PIXEL_MASTER", score: 999999, character: "warrior" },
  { rank: 2, name: "RETRO_QUEEN", score: 888888, character: "mage" },
  { rank: 3, name: "8BIT_HERO", score: 777777, character: "archer" },
  { rank: 4, name: "GAME_SAGE", score: 666666, character: "rogue" },
  { rank: 5, name: "CHIP_TUNE", score: 555555, character: "knight" },
];

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f1b] text-white font-pixel px-4 py-6 md:p-8">
      {/* Header */}
      <header className="container mx-auto max-w-2xl text-center mb-6 md:mb-12 relative">
        <div className="inline-block animate-float">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 text-yellow-400 tracking-wider arcade-text">
            RETRO ARCADE
          </h1>
          <div className="flex justify-center items-center gap-2 mt-4">
            <Gamepad2 className="w-4 h-4 md:w-6 md:h-6 text-green-400" />
            <span className="text-green-400 blink text-sm md:text-base">INSERT COIN</span>
            <Gamepad2 className="w-4 h-4 md:w-6 md:h-6 text-green-400" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-2xl">
        <div className="pixel-border bg-indigo-950 p-4 mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-pink-500 arcade-text">HIGH SCORES</h2>
            <div className="h-1 bg-pink-500 mt-2 pixel-border"></div>
          </div>

          <div className="space-y-3">
            {LEADERBOARD_DATA.map((player) => (
              <div key={player.rank} className="pixel-border bg-indigo-950 p-2 md:p-3 relative group hover:bg-indigo-900 transition-colors">
                <div className="flex items-center justify-between gap-2 md:gap-4">
                  <div className="flex items-center gap-2 md:gap-4">
                    <span className="text-xl md:text-2xl font-bold min-w-6 md:min-w-8 text-center">
                      {player.rank === 1 ? '👑' : player.rank === 2 ? '🥈' : player.rank === 3 ? '🥉' : `#${player.rank}`}
                    </span>
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
            ))}
          </div>
        </div>

        {/* CRT Effect Overlay */}
        <div className="crt-overlay fixed inset-0 pointer-events-none"></div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto max-w-2xl text-center mt-6 md:mt-8">
        <button className="text-green-400 arcade-text blink text-sm md:text-base hover:text-green-300">
          PRESS START TO PLAY
        </button>
      </footer>
    </div>
  );
}

export default App;