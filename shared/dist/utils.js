// shared\src\utils.ts
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
export async function deleteSafely(fn, name) {
    const MAX = 6;
    let tries = 0;
    while (true) {
        try {
            await fn();
            console.log(`✅ Deleted ${name}`);
            return;
        }
        catch (e) {
            if (e instanceof PrismaClientKnownRequestError && tries < MAX) {
                const delay = 100 * 2 ** tries++;
                console.log(`🔁 Retrying ${name} in ${delay}ms (try ${tries})`);
                await sleep(delay);
            }
            else
                throw e;
        }
    }
}
export async function runSeed(seeder, label = "seeding") {
    console.log(`🌱 ${label} started…`);
    const skip = process.env.SKIP_CLEANUP === "true";
    await seeder(skip);
    console.log(`✅ ${label} complete.`);
}
export function formatDate(date) {
    return date.toISOString().split("T")[0];
}
