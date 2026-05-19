export default function ParticipantsInput({
  link,
  setLink,
  text,
  setText
}) {
  return (
    <div className="space-y-6">
      <input
        type="text"
        placeholder="Link de Instagram"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        className="w-full bg-zinc-900 border border-zinc-700 rounded-xl p-4 outline-none focus:border-gold"
      />

      <textarea
        placeholder="@usuario comentario..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={10}
        className="w-full bg-zinc-900 border border-zinc-700 rounded-xl p-4 outline-none focus:border-gold"
      />
    </div>
  );
}