"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFibonacci = generateFibonacci;
exports.generatePrimeNumbers = generatePrimeNumbers;
function generateFibonacci(maxValue) {
    if (maxValue < 0)
        return [];
    if (maxValue === 0)
        return [0];
    const sequence = [0, 1];
    while (true) {
        const next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        if (next > maxValue)
            break;
        sequence.push(next);
    }
    return sequence;
}
function generatePrimeNumbers(maxValue) {
    if (maxValue < 2)
        return [];
    const primes = [];
    const isPrime = new Array(maxValue + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    for (let i = 2; i <= maxValue; i++) {
        if (isPrime[i]) {
            primes.push(i);
            for (let j = i * i; j <= maxValue; j += i) {
                isPrime[j] = false;
            }
        }
    }
    return primes;
}
