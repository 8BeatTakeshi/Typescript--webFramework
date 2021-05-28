import { User } from './models/User';

const user = new User({ name: 'Jinx', age: 19 });

console.log(user.get('name'));

user.on('change', () => {
  console.log('User was changed.');
});

user.trigger('change');
