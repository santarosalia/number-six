import { NextRequest, NextResponse } from "next/server"
import { getNotion } from "@/notion/notion";
export const POST = async (req?: NextRequest) => {
    return new NextResponse
}

export const write = async (nums: number[]) => {
    const notion = getNotion();
    const multiSelect = nums.map(num => {
        return {
            name: num.toString()
        }
    });
    await notion.pages.create({
        parent: {
            database_id: 'a3b896c6cad44549b5fe1d218d997d87',
        },
        properties: {
            name: {
                type: 'title',
                title: [{
                    type: 'text',
                    text: {
                        content: '-'
                    }
                }]
            },
            num: {
                multi_select: multiSelect
            }
        }
    });
}
export const read = async () => {
    const notion = getNotion();
    const result = await notion.databases.query({
        database_id: 'a3b896c6cad44549b5fe1d218d997d87',
    });
    // console.log(result.results[0].properties.num.multi_select)
}
export const getThisWeekCount = async (cursor: string | null, count: number): Promise<number> => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1)); // Monday
    startOfWeek.setHours(0);
    startOfWeek.setMinutes(0);
    startOfWeek.setSeconds(0);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6); // Sunday

    const notion = getNotion();
    const result = await notion.databases.query({
        database_id: 'a3b896c6cad44549b5fe1d218d997d87',
        filter: {
            and: [
                {
                    property: 'created',
                    date: {
                        on_or_after: startOfWeek.toISOString()
                    }
                },
                {
                    property: 'created',
                    date: {
                        on_or_before: endOfWeek.toISOString()
                    }
                }
            ]
        },
        start_cursor: cursor ?? undefined
    });
    count += result.results.length;
    if (result.has_more) {
        return await getThisWeekCount(result.next_cursor, count);
    } 
    return count;
    
}
// export const getGameResult = async () => {
//     fetch('https://dhlottery.co.kr/gameResult.do?method=byWin').then(async result => {
//         const text = await result.text();
//     })
// }