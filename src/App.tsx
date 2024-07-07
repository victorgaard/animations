import React from "react";
import { AnimatePresence, m } from "framer-motion";
import { Game, games } from "./games";

export default function App() {
  const [activeGame, setActiveGame] = React.useState<Game | null>(null);

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveGame(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="min-h-dvh relative py-24 bg-slate-950 text-sm grid justify-center">
      <AnimatePresence>
        {activeGame && (
          <div className="absolute inset-0 flex items-center justify-center">
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50"
              onClick={() => setActiveGame(null)}
            />
            <m.div
              layoutId={activeGame.id}
              className="flex flex-col gap-4 bg-slate-900 w-[500px] z-10 p-4 rounded-2xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <m.img
                    layoutId={activeGame.image}
                    src={activeGame.image}
                    className="rounded-2xl size-14"
                  />
                  <div className="flex flex-col">
                    <m.p
                      layoutId={activeGame.title}
                      className="text-white font-medium"
                    >
                      {activeGame.title}
                    </m.p>
                    <m.p
                      layoutId={activeGame.description}
                      className="text-slate-400"
                    >
                      {activeGame.description}
                    </m.p>
                  </div>
                </div>
                <m.button
                  layoutId={`button-${activeGame.title}`}
                  className="bg-slate-800 text-white rounded-full py-1 px-2.5 text-xs"
                >
                  Get
                </m.button>
              </div>
              <m.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="text-slate-400"
              >
                {activeGame.longDescription}
              </m.p>
            </m.div>
          </div>
        )}
      </AnimatePresence>
      <div className="flex flex-col">
        {games.map((game) => (
          <m.div
            layoutId={game.id}
            onClick={() => setActiveGame(game)}
            key={game.title}
            className="flex items-center justify-between cursor-pointer gap-24 hover:bg-slate-900 transition-colors rounded-xl p-4"
          >
            <div className="flex items-center gap-4">
              <m.img
                layoutId={game.image}
                src={game.image}
                className="rounded-2xl size-14"
              />
              <div className="flex flex-col">
                <m.p layoutId={game.title} className="text-white font-medium">
                  {game.title}
                </m.p>
                <m.p layoutId={game.description} className="text-slate-400">
                  {game.description}
                </m.p>
              </div>
            </div>
            <m.button
              layoutId={`button-${game.title}`}
              className="bg-slate-800 text-white rounded-full py-1 px-2.5 text-xs"
            >
              Get
            </m.button>
          </m.div>
        ))}
      </div>
    </div>
  );
}
