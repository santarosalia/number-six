import { getNumber } from "@/util/util";
import { read, getThisWeekCount, write } from "./api/route";
export default async function Home() {
  const arr = new Array<number>();
  
  while (arr.length !== 6) {
    const num = getNumber();
    if (!arr.includes(num)) {
      arr.push(num);
    }
    continue;
  }
  const sorted = arr.sort((a, b) => a - b);
  const nums = sorted.map(num => {
    return (
      <div key={num} className="flex bg-zinc-50 w-20 h-10 rounded-md justify-center items-center">
        <span className="text-black">{num}</span>
      </div>
    )
  });
  await write(sorted);
  // read()
  const thisWeek = await getThisWeekCount();
  return (
    <div className="flex flex-col p-5">
      <div>
        <span className="text-sm">이번주: {thisWeek}</span>
      </div>
      <div className="flex gap-5 justify-between mt-20 border-r-cyan-400">
        {nums}
      </div>
    </div>
  );
}
