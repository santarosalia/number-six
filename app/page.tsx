import Numbers from "@/components/Numbers";
import CopyButton from "./CopyButton";
import ThisWeek from "@/components/ThisWeek";
export default async function Home() {
  
  return (
    <div className="flex flex-col p-5">
      <div>
        <ThisWeek/>
      </div>
      <div className="p-3 flex flex-col w-full overflow-hidden gap-2 mt-20 border-red-50 border-solid border-4 rounded-md ">
        <div className="flex justify-end">
          <CopyButton></CopyButton>
        </div>
        <div className="flex w-full gap-5 justify-between">
          <Numbers/>
        </div>
      </div>
    </div>
  );
}
