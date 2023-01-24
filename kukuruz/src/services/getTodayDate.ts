
const today = new Date();
const dd = today.getDate();
const mm = today.getMonth() + 1;
const yyyy = today.getFullYear();
const maxYear = yyyy + 10


export const currentDate = dd + '-' + mm + '-' + yyyy;
export const lastDate = dd + '-' + mm + '-' + maxYear;

