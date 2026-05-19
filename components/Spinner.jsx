export default function Spinner({ spinningUser }) {
  return (
    <div className="bg-zinc-900 rounded-3xl p-10 text-center border border-gold/30 gold-glow min-h-[180px] flex items-center justify-center">
      <div>
        <div className="text-zinc-400 mb-3">
          Sorteando...
        </div>

        <div className="text-4xl font-bold text-gold animate-pulse">
          @{spinningUser}
        </div>
      </div>
    </div>
  );
}