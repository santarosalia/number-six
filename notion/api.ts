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
export const getThisWeekCount = async () => {
    const notion = getNotion();
    const result = await notion.databases.query({
        database_id: 'a3b896c6cad44549b5fe1d218d997d87',
        filter: {
            property: 'created',
            created_time: {
                this_week: {}
            }
        }
    });
    return result.results.length;
}
// export const getGameResult = async () => {
//     fetch('https://dhlottery.co.kr/gameResult.do?method=byWin').then(async result => {
//         const text = await result.text();
//     })
// }