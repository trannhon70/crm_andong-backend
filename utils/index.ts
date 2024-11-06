

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