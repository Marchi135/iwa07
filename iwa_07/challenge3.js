const leoName = 'Leo';
const leoSurname = 'Musvaire     ';
const leoBalance = '-9394';

const sarahName = 'Sarah    ';
const sarahSurname = 'Kleinhans';
const sarahBalance = '-4582.2';

const divider = '----------------------------------';

// Only change below this line

const owed = parseFloat(leoBalance) + parseFloat(sarahBalance);
const leo = `${leoName} ${leoSurname.trim()} (Owed: R ${parseFloat(leoBalance).toFixed(2)})\n`;
const sarah = `${sarahName} ${sarahSurname.trim()} (Owed: R ${parseFloat(sarahBalance).toFixed(2)})\n`;
const total = `Total amount owed: R ${owed.toFixed(2)}`;

const result = `\n${leo}${sarah}${divider}\n\n  ${total}\n${divider}`;

console.log(result);


