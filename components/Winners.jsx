export default function Winners({ winners }) {
  const prizes = [
    "Vale de Gs. 1.000.000",
    "Vale de Gs. 500.000",
    "Vale de Gs. 300.000"
  ];

  return (
    <div className="grid gap-5 mt-10">
      {winners.map((winner, index) => (
        <div
          key={winner.username}
          className="bg-zinc-900 border border-gold/30 rounded-3xl p-6 gold-glow"
        >
          <div className="text-gold text-xl font-bold mb-2">
            {index + 1}° Premio
          </div>

          <div className="text-3xl font-bold">
            @{winner.username}
          </div>

          <div className="text-zinc-400 mt-2">
            {winner.comment}
          </div>

          <div className="mt-4 text-gold font-semibold">
            {prizes[index]}
          </div>
        </div>
      ))}
    </div>
  );
}