
const today = new Date();
const dd = today.getDate();
const mm = today.getMonth() + 1;
const yyyy = today.getFullYear();
const maxYear = yyyy + 10


export const currentDate = yyyy + '-' + mm + '-' + dd;
export const lastDate = maxYear + '-' + mm + '-' + dd;

