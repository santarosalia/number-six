import { create } from "zustand";

interface Store {
    thisWeekCount: number,
    setThisWeekCount: (count: number) => void,
    sorted: number[],
    setSorted: (sorted: number[]) => void
}
export const useMainStore = create<Store>((set) => ({
    thisWeekCount: 0,
    setThisWeekCount: (count: number) => set(() => ({thisWeekCount: count})),
    sorted: [],
    setSorted: (sorted: number[]) => set(() => ({sorted: sorted}))
}));