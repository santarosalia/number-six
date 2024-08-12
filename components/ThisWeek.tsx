"use client";
import { useMainStore } from "@/store/store";
import { useEffect } from "react";

const ThisWeek = () => {
  const { thisWeekCount, setThisWeekCount, sorted } = useMainStore();

  useEffect(() => {
    const thisWeek = async () => {
      const res = await fetch("/api/count", {
        method: "POST",
      });
      const result = await res.json();
      setThisWeekCount(result.count);
    };
    thisWeek();
  }, []);
  if (thisWeekCount === 0) {
    return (
      <span className="text-sm text-gray-50 flex items-center gap-2">
        <span>이번 주 생성 횟수:</span>
        <div
          style={{
            height: "1px",
            width: "10px",
            border: "1px solid white",
            animation: "spin 1s ease infinite",
          }}
        ></div>
      </span>
    );
  }
  return (
    <span className="text-sm text-gray-50">
      이번 주 생성 횟수: {thisWeekCount}
    </span>
  );
};
export default ThisWeek;
