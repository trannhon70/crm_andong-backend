export function currentTimestamp() {
    const utcOffset = 7 * 60 * 60 * 1000; // UTC+7 in milliseconds
    const localTime = Date.now() + utcOffset; // Adjust for Vietnam time
    return Math.floor(localTime / 1000);
}