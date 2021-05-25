import { User } from './models/User';

const user = new User({ name: 'John', age: 48 });

user.on('change', () => {
  console.log('Change #1');
});
user.on('change', () => {
  console.log('Change #2');
});
user.on('onclick', () => {
  console.log('Onclick #1');
});

user.trigger('jkljlkjlklklkjl');

console.log(user);
