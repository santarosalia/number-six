'use client'
import { useMainStore } from "@/store/store";
import { getNumber } from "@/util/util";
import { useEffect, useState } from "react";


const Numbers = () => {
    const {sorted, setSorted} = useMainStore();
    useEffect(() => {
        const arr = new Array<number>();
    
        while (arr.length !== 6) {
            const num = getNumber();
            if (!arr.includes(num)) {
            arr.push(num);
            }
            continue;
        }
        const sorted = arr.sort((a, b) => a - b);
        setSorted(sorted);
        fetch('/api/number', {
            method: 'POST',
            body: JSON.stringify(sorted)
        });
    }, []);

    const numbers = sorted.map(num => {
        return (
        <div
            key={num}
            className="flex bg-zinc-50 w-20 h-10 rounded-md justify-center items-center"
            style={{
                animation: 'flip 1s ease',
            }}
            >
            <span className="text-black">{num}</span>
        </div>
        )
    });
    const skeleton = [...new Array(6)].map((_,i) => {
        return (
        <div
            key={i}
            className="flex bg-zinc-50 w-20 h-10 rounded-md justify-center items-center"
            >
            <span className="text-black"></span>
        </div>
        )
    });
    
    return sorted.length > 0 ? numbers : skeleton;
}

export default Numbers;