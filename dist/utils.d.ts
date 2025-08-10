export declare function deleteSafely(fn: () => Promise<unknown>, name: string): Promise<void>;
export declare function runSeed<T>(seeder: (skipCleanup: boolean) => Promise<T>, label?: string): Promise<void>;
export declare function formatDate(date: Date): string;
