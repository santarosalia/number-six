import prisma from "@/lib/prisma";

export const write = async (item: {
    created: Date,
    numbers: number[]
}) => {
    await prisma.number.create({
        data: item
    });
}

export const getThisWeekCount = async () => {
  
    const today = new Date(new Date() + 9 * 60 * 60 * 1000);
    const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -5 : 1)); // Monday
    startOfWeek.setHours(0);
    startOfWeek.setMinutes(0);
    startOfWeek.setSeconds(0);
    const endOfWeek = new Date(startOfWeek);
    
    endOfWeek.setDate(startOfWeek.getDate() + 6); // Sunday
    const count = await prisma.number.count({
        where: {
            created: {
                gte: startOfWeek,
                lt: endOfWeek
            }
        }
    })
    
    return count;
}
