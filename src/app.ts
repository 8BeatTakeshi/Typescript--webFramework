import { User } from './models/User';

const user = User.buildUser({ name: 'Garen', age: 30 });

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
