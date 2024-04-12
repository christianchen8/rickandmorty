import { useEffect, useState } from "react";

export function SingleEpisode({ apiUrl }: { apiUrl: string }) {
  const [episode, setEpisode] = useState<Episode | null>(null);

  async function getEpisode() {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error("Failed to fetch episode");
    }
    const data = await res.json();

    console.log("data");

    setEpisode(data);
  }

  useEffect(() => {
    getEpisode();
  }, []);

  return (
    <h1 className="text-sm">
      <strong>{episode?.episode}</strong> - {episode?.name} -{episode?.air_date}
    </h1>
  );
}
