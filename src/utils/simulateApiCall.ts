export function simulateApiCall<T>(result: T, ms: number = 1500): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(result), ms));
}