const users =  [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

// 6.1
// const getUserNames = function(users) 
// {let result = users.map(function (user) { const { name } = user; return name });
//     return result;} 

// const getUserNames = function (arr) {return arr.map(function ({ name }) { return name }); }

// const getUserNames = array => array.map(function ({ name }) { return name });

// const getUserNames = array => array.map(function ({ name }) { return name });

// console.log(getUserNames(users));

// 6.2

// const getUsersWithEyeColor = (array, color) => array.filter(function({eyeColor}) {return eyeColor === color});

// 6.3

// const getUsersWithGender = (array, genders) => array.filter(function ({ gender }) {return gender === genders}).map(function ({ name }) { return name });

// 6.4

// const getInactiveUsers = array  => array.filter(function ({isActive}) {return !isActive});

//  console.log(getInactiveUsers(users));

// 6.5

// const getUserWithEmail = (array, mail) => array.find(function ({email}) {return email === mail});

// console.log(getUserWithEmail(users, 'rossvazquez@xinware.com'));

// 6.6

// const getUsersWithAge = (array, min, max) => array
//  .filter(({age}) => min <= age && age <= max)   
//   .map(({ name, email }) => ({ 'name': name, 'email': email}));  

// console.log(getUsersWithAge(users, 20, 30));
// console.log(getUsersWithAge(users, 30, 40));

// 6.7

// const calculateTotalBalance = array => array.reduce(function (amount, {balance}) {return amount + balance}, 0);

// console.log(calculateTotalBalance(users));

// 6.8

// const getUsersWithFriend = (array, friendName) => array.filter(function({friends}) {return friends.includes(friendName)}).map(function({name}){return name});

// console.log(getUsersWithFriend(users, 'Briana Decker'));
// [ 'Sharlene Bush', 'Sheree Anthony' ]

// console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// [ 'Elma Head', 'Sheree Anthony' ]

// 6.9

// const getNamesSortedByFriendsCount = (array) => {
//   const newArray =
//     [...array].sort(function (prevFriend, nextFriend)
//     { return prevFriend.friends.length - nextFriend.friends.length});
//   console.table(newArray);
//   return newArray.map(function({name}) {return name})
// }

//  console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// 6.10

// const getSortedUniqueSkills = (array) => 
//   array
//     .reduce(function (skills, user) { return skills = [...user.skills, ...skills] }, [])
//     .filter(function (skill, index, array) { return array.indexOf(skill) === index})
//     .sort()

  
// console.log(getSortedUniqueSkills(users));
