import { User } from './models/User';

const user = new User({ id: 1, name: 'Jinx', age: 19 });

// console.log(user.get('name'));
// console.log(user.get('age'));

user.on('change', () => {
  // console.log('User was changed, we propably need to update some Html');
  console.log(user.get('name'));
  console.log(user.get('age'));
});

user.fetch();

console.log(user.get('name'));
console.log(user.get('age'));
