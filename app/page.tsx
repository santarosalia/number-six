import { getNumber } from "@/util/util";

export default function Home() {
  const arr = new Array<number>();
  
  while (arr.length !== 6) {
    const num = getNumber();
    if (!arr.includes(num)) {
      arr.push(num);
    }
    continue;
  }
  const sorted = arr.sort((a, b) => a - b);
  console.log(sorted)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {sorted}
    </main>
  );
}
