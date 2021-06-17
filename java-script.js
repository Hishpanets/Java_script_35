// // const pizzaPalace = {
// //   company: 'Pizza Palace',
// // }; console.log(pizzaPalace);

// // const burgerShack = {
// //   company: 'Burger Shack',
// // }; console.log(burgerShack);

// // function composeMessage(customerName) {
// //   return `${customerName}, всегда рады вас видеть в «${this.company}».`;
// // }
// // // Пиши код ниже этой строки

// // const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
// // console.log(pizzaPalaceComposer);
// // const pizzaPalaceMessage = pizzaPalaceComposer('Манго');
// // console.log(pizzaPalaceMessage);
// // const burgerShackComposer = composeMessage.bind(burgerShack);
// // console.log(burgerShackComposer);
// // const burgerShackMessage = burgerShackComposer('Поли');
// // console.log(burgerShackMessage);


// // Задача 10 4-й модуль

// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };

// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }

// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service);
// /* ['mango@mail.com', 
//     'poly@hotmail.de', 
//     'ajax@jmail.net', 
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']
