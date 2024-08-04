import { getNumber } from "@/util/util";
import { read, getThisWeekCount, write } from "@/notion/api";
import CopyButton from "./CopyButton";
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
        <span className="text-sm text-gray-50">이번 주 생성 횟수: {thisWeek}</span>
      </div>
      <div className="p-3 flex flex-col w-full overflow-hidden gap-2 mt-20 border-red-50 border-solid border-4 rounded-md ">
        <div className="flex justify-end">
          <CopyButton></CopyButton>
        </div>
        <div className="flex w-full gap-5 justify-between">
          {nums}
        </div>
      </div>
    </div>
  );
}
