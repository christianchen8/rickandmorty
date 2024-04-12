import { MainList } from "@/components/Header";
import { CompareSection } from "@/components/CompareSection";

// Fetch data function from server
async function getData() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  return data;
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center bg-white overflow-hidden">
      <MainList data={data} />
      <CompareSection />
    </main>
  );
}
