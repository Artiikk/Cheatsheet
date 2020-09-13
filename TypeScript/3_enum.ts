enum Membership {
  Simple,
  Standart,
  Premium
}

const membership = Membership.Standart;
const membershipReverse = Membership[2];
console.log(membership); // 1
console.log(membershipReverse); // Premium calling by index

enum SocialMedia {
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM'
}

// Смысл в том, что перечисление используется для хранения ограниченного набора значений. 
// Что за значения такие - зависит от контекста вашей бизнес-логики.

// Это могут быть дни недели, список статусов по документам и любые другие списки.

// Зачем использовать для этого целый тип, если можно обойтись абстрактным набором числовых значений или строк? 
// Ну потому, что цель одного программиста - написать понятный и логичный код. 
// А цель его напарника - без труда заниматься поддержкой решения, а не ломать голову, что же там за список статусов {0, 1, 2, ..., N} такой.
enum Color { Red, Green, Blue }
let c: Color = Color.Green;
