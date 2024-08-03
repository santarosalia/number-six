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
  console.log(arr)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {arr}
    </main>
  );
}
