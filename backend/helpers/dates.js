
const isSameDay = (date1, date2) => {
    return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getYear() === date2.getYear()
}

// const isSameDay = (date1, date2) => {
//     if (date1.getDate() !== date2.getDate()) return false;
//     if (date1.getMonth() !== date2.getMonth()) return false;
//     if (date1.getYear() !== date2.getYear()) return false;
//     return true;
// }


module.exports = {
    isSameDay
}