
export function currentTimestamp() {
    const utcOffset = 7 * 60 * 60 * 1000; // UTC+7 in milliseconds
    const currentDateTime = new Date(); // Get the current date and time
    const localTime = currentDateTime.getTime()  // Adjust for Vietnam time
    return Math.floor(localTime / 1000); // Return as seconds
}



