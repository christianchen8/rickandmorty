"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function CharacterImage({ apiUrl }: { apiUrl: string }) {
  const [image, setImage] = useState<string >("");

  async function getCharacter() {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error("Failed to fetch episode");
    }
    const data = await res.json();
    setImage(data.image);
  }

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <>
      <div className="h-[18rem] w-[230px] relative">
        <Image src={image} alt="image" fill className="object-cover" />
      </div>
    </>
  );
}
