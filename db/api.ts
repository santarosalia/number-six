import prisma from "@/lib/prisma";

export const write = async (item: { numbers: number[] }) => {
  await prisma.number.create({
    data: item,
  });
};

export const getThisWeekCount = async () => {
  const today = new Date(Date.now() + 9 * 60 * 60 * 1000);
  const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)

  today.setDate(today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1)); // Monday
  today.setHours(0, 0, 0, 0);
  const startOfWeek = new Date(today.getTime() - 9 * 60 * 60 * 1000);
  const endOfWeek = new Date(startOfWeek);

  endOfWeek.setDate(startOfWeek.getDate() + 6); // Sunday
  endOfWeek.setHours(23, 59, 59, 999);
  const count = await prisma.number.count({
    where: {
      created: {
        gte: startOfWeek,
        lt: endOfWeek,
      },
    },
  });

  return count;
};
