'use client'
import { useMainStore } from "@/store/store";
import { useEffect } from "react";

const ThisWeek = () => {
    const { thisWeekCount, setThisWeekCount, sorted } = useMainStore();

    useEffect(() => {
        const thisWeek = async () => {
            const res = await fetch('/api/count', {
                method: 'GET'
            });
            const result = await res.json();
            setThisWeekCount(result);
        }
        thisWeek();
    }, [sorted]);

    return (
        <span className="text-sm text-gray-50">이번 주 생성 횟수: {thisWeekCount}</span>
    )
}
export default ThisWeek;