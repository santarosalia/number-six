export const getNumber = () => {
    const uInt8Array = new Uint8Array(50000);
    const randomArray = crypto.getRandomValues(uInt8Array);
    const eol45 = randomArray.filter(num => num > 0 && num <= 45 );
    const numArray = Array.from(eol45);
    const num = mostFrequentNumber(numArray);
    return num;
}
const mostFrequentNumber = (arr: number[]) => {
    const frequencyMap = new Map<number, number>();
  
    for (const num of arr) {
      if (frequencyMap.has(num)) {
        frequencyMap.set(num, frequencyMap.get(num)! + 1);
      } else {
        frequencyMap.set(num, 1);
      }
    }
  
    let mostFrequent = 0;
    let maxCount = 0;
  
    for (const [num, count] of frequencyMap.entries()) {
      if (count > maxCount) {
        maxCount = count;
        mostFrequent = num;
      }
    }
  
    return mostFrequent;
  }