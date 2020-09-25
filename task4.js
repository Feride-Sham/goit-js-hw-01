const orderPieces = 25;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let totalPrice = orderPieces >= 0 ? orderPieces * pricePerDroid : 0;
// Write code on this line
let balanceCredit = totalPrice <= credits ? credits - totalPrice : null;
// Write code on this line
let message;

if (orderPieces == null) {
  message = CANCELED_BY_USER;
} else if (balanceCredit != null) {
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
} else {
  message = ACCESS_DENIED;
}
console.log(message);
