import { SliderCharacters } from "./SliderCharacters";

export function ModalEpisode({
  setOpen,
  episode,
}: {
  setOpen: (open: boolean) => void;
  episode: Episode | null;
}) {
  return (
    <div className="fixed top-0 left-0 h-screen w-full bg-black/10 backdrop-blur-md z-30 flex justify-center items-center ">
      <div className="border-2 border-black rounded-xl h-[30rem] w-[60%] bg-black relative text-white py-6 px-8 overflow-auto">
        <button
          className="bg-white h-10 w-10 absolute top-4 right-4 rounded-full text-black hover:bg-red-100"
          onClick={() => setOpen(false)}
        >
          X
        </button>
        <h1 className="text-3xl w-2/3"> {episode?.name} </h1>
        <p>{episode?.air_date}</p>

        <p className="mt-4 text-2xl">Characters of the episode:</p>
        <SliderCharacters characeters={episode?.characters ?? []} />
      </div>
    </div>
  );
}
