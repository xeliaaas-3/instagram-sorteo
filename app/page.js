"use client";

import { useState } from "react";
import confetti from "canvas-confetti";

import Header from "../components/Header";
import Rules from "../components/Rules";
import ParticipantsInput from "../components/ParticipantsInput";
import Spinner from "../components/Spinner";
import Winners from "../components/Winners";
import Footer from "../components/Footer";

import {
  parseParticipants,
  drawWinners
} from "../utils/raffle";

export default function Home() {
  const [link, setLink] = useState("");
  const [text, setText] = useState("");
  const [winners, setWinners] = useState([]);
  const [loading, setLoading] = useState(false);
  const [spinningUser, setSpinningUser] = useState("");

  const handleDraw = async () => {
    const participants = parseParticipants(text);

    if (!participants.length) return;

    setLoading(true);

    let counter = 0;

    const interval = setInterval(() => {
      const random =
        participants[
          Math.floor(Math.random() * participants.length)
        ];

      setSpinningUser(random.username);

      counter++;

      if (counter > 35) {
        clearInterval(interval);

        const selected = drawWinners(participants);

        setWinners(selected);
        setLoading(false);

        confetti({
          particleCount: 200,
          spread: 120
        });
      }
    }, 100);
  };

  return (
    <main className="min-h-screen p-5 md:p-10">
      <div className="max-w-4xl mx-auto">
        <Header />

        <Rules />

        <ParticipantsInput
          link={link}
          setLink={setLink}
          text={text}
          setText={setText}
        />

        <button
          onClick={handleDraw}
          className="w-full mt-8 bg-gold text-black font-bold py-4 rounded-2xl hover:scale-[1.02] transition-all"
        >
          Realizar Sorteo
        </button>

        {loading && (
          <div className="mt-10">
            <Spinner spinningUser={spinningUser} />
          </div>
        )}

        {winners.length > 0 && !loading && (
          <Winners winners={winners} />
        )}

        <Footer />
      </div>
    </main>
  );
}