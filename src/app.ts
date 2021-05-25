import { User } from './models/User';

const user = new User({ name: 'John', age: 48 });

user.on('change', () => {});
user.on('change', () => {});
user.on('onclick', () => {});

console.log(user);
