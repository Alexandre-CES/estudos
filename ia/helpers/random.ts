
export function genNum(min: number, max: number): number{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function genList(min: number, max: number, size: number,): number[] {

    const randomNumbers: number[] = [];
    for (let i = 0; i < size; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;

}