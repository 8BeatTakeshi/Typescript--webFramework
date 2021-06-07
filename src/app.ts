import { User } from './models/User';

const user = User.buildUser({ id: 1 });

// console.log(user.get('name'));
// console.log(user.get('age'));

user.on('change', () => {
  // console.log('User was changed, we propably need to update some Html');
  console.log(user);
});

user.fetch();

// console.log(user.get('name'));
// console.log(user.get('age'));
