import { Episodes } from "./Episodes";
import { ShareEpisodes } from "./ShareEpisodes";

export function CompareSection() {
  return (
    <div className="grid grid-cols-3 h-[40vh] w-full border-t text-black ">
      <Episodes position="first" />
      <ShareEpisodes />
      <Episodes position="second" />
    </div>
  );
}
