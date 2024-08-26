export function linearRegression(data:any[],label:number[]):number[]{
    const N = data.length;
    const sumX = data.reduce((a, b) => a + b, 0);
    const sumY = label.reduce((a, b) => a + b, 0);
    const sumXY = data.reduce((sum, x, i) => sum + x * label[i], 0);
    const sumX2 = data.reduce((sum, x) => sum + x * x, 0);

    const m = (N * sumXY - sumX * sumY) / (N * sumX2 - sumX * sumX);
    const b = (sumY - m * sumX) / N;

    return [m,b]
}