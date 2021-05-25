import { User } from './models/User';

const newUser = new User({ name: 'John', age: 48 });

console.log(newUser.get('name'));
console.log(newUser.get('age'));
