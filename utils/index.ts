

export function currentDate() {
    const currentDate = new Date();
    const startDate = new Date(currentDate.setHours(0, 0, 0, 0));
    const endDate = new Date(currentDate.setHours(23, 59, 59, 999));
    
    const startTimestamp = Math.floor(startDate.getTime() / 1000);
    const endTimestamp = Math.floor(endDate.getTime() / 1000);
    return {startTimestamp, endTimestamp}
}

export function yesterday() {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1);
    const startDate = new Date(currentDate.setHours(0, 0, 0, 0));
    const endDate = new Date(currentDate.setHours(23, 59, 59, 999));
    
    const startTimestamp = Math.floor(startDate.getTime() / 1000);
    const endTimestamp = Math.floor(endDate.getTime() / 1000);
    return {startTimestamp, endTimestamp}
}

export const STATUS = {
    CHODOI: 'CHỜ ĐỢI',
    DADEN: 'ĐÃ ĐẾN',
    CHUDEN: 'CHƯA ĐẾN',
    KHONGXACDINH: 'KHÔNG XÁC ĐỊNH'
}

   
export function thisMonth() {
    const now = new Date();
    // Ngày bắt đầu của tháng hiện tại (ngày 1 lúc 00:00:00)
    const startDate = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0);
    // Ngày cuối cùng của tháng hiện tại (ngày cuối cùng lúc 23:59:59)
    const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
    const startTimestamp = Math.floor(startDate.getTime() / 1000);
    const endTimestamp = Math.floor(endDate.getTime() / 1000);
    return { startTimestamp, endTimestamp };
}

export function yearly () {
    const now = new Date();
    // Ngày bắt đầu của tháng trước (ngày 1 lúc 00:00:00)
    const startDate = new Date(now.getFullYear(), now.getMonth() - 1, 1, 0, 0, 0, 0);
    // console.log(startDate, 'startDate');
    // Ngày hiện tại của tháng trước (với giờ là 23:59:59)
    const endDate = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate(), 23, 59, 59, 999);
    // console.log(endDate, 'endDate');
    const startTimestamp = Math.floor(startDate.getTime() / 1000);
    const endTimestamp = Math.floor(endDate.getTime() / 1000);
    
    return { startTimestamp, endTimestamp };
}

export function lastMonth() {
    const now = new Date();
    // Ngày bắt đầu của tháng trước (ngày 1 lúc 00:00:00)
    const startDate = new Date(now.getFullYear(), now.getMonth() - 1, 1, 0, 0, 0, 0);
    // Ngày cuối cùng của tháng trước (ngày cuối cùng lúc 23:59:59)
    const endDate = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59, 999);
    
    const startTimestamp = Math.floor(startDate.getTime() / 1000);
    const endTimestamp = Math.floor(endDate.getTime() / 1000);

    return { startTimestamp, endTimestamp };
}

export function listMonthYear () {
    const currentYear = new Date().getFullYear();
   const result = Array.from({ length: 12 }, (_, index) => {
        const date = new Date();
        date.setMonth(index); // Thiết lập tháng từ 0 (tháng 1) đến 11 (tháng 12)
        date.setDate(1); // Thiết lập ngày là ngày đầu tiên của tháng
        date.setHours(0, 0, 0, 0); // Thiết lập giờ về đầu ngày để có timestamp bắt đầu của tháng
        const startOfMonth = new Date(currentYear, index, 1, 0, 0, 0, 0);
        const startTimestamp = Math.floor(startOfMonth.getTime() / 1000);
        const endOfMonth = new Date(currentYear, index + 1, 0, 23, 59, 59, 999);
        const endTimestamp = Math.floor(endOfMonth.getTime() / 1000);

        return {
            month: date.getMonth() + 1,
            year: date.getFullYear(),
            startTimestamp,
            endTimestamp
        };
    });

    return result
}

export const SEX = {
    NAM: 'NAM',
    NU: 'NỮ',
    KHONGXACDINH: 'KHÔNG XÁC ĐỊNH'
}

// //thời gian hết hạn redis
// export const expirationTime = 8 * 60 * 60 * 1000; // 8 giờ (milliseconds)
// //thời gian hết hạn token
// export const expiresIn = '8h'

// Đổi thời gian từ 2 giờ thành 1 giờ
export const expirationTime = 3 * 60 * 60 * 1000; // 3 giờ (milliseconds)
export const expiresIn = '3h'; // 3 giờ (chuỗi, ví dụ dùng trong JWT)