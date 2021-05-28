import { User } from './models/User';

const user = new User({ name: 'Sonic', age: 45 });

// console.log(user.get('name'));
// console.log(user.get('age'));

user.on('save', () => {
  // console.log('User was changed, we propably need to update some Html');
  console.log(user.get('name'));
  console.log(user.get('age'));
});

user.save();

console.log(user.get('name'));
console.log(user.get('age'));
