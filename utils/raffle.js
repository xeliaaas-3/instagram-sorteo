export function parseParticipants(text) {
  const lines = text
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean);

  const participants = [];

  lines.forEach(line => {
    const username = line.split(" ")[0].replace("@", "");

    participants.push({
      username,
      comment: line
    });
  });

  return participants;
}

export function drawWinners(participants, total = 3) {
  const weighted = [];

  participants.forEach(participant => {
    weighted.push(participant);
  });

  const winners = [];
  const used = new Set();

  while (winners.length < total && weighted.length > 0) {
    const random =
      weighted[Math.floor(Math.random() * weighted.length)];

    if (!used.has(random.username)) {
      winners.push(random);
      used.add(random.username);
    }
  }

  return winners;
}