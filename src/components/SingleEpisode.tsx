"use client";

import { useEffect, useState } from "react";
import { ModalEpisode } from "./ModalEpisode";

export function SingleEpisode({ apiUrl }: { apiUrl: string }) {
  const [episode, setEpisode] = useState<Episode | null>(null);
  const [open, setOpen] = useState(false);

  async function getEpisode() {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error("Failed to fetch episode");
    }
    const data = await res.json();
    setEpisode(data);
  }

  useEffect(() => {
    getEpisode();
  }, []);

  return (
    <>
      <button
        data-testid="episode-card"
        onClick={() => setOpen(true)}
        className="rounded-xl hover:bg-blue-100 cursor-pointer bg-gray-100 mb-2 py-2 px-2 w-full"
      >
        <h1 className="text-sm text-left">
          <strong>{episode?.episode}</strong> - {episode?.name} -
          {episode?.air_date}
        </h1>
      </button>

      {open && <ModalEpisode setOpen={setOpen} episode={episode} />}
    </>
  );
}
