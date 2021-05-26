import { User } from './models/User';

const user = new User({ name: 'Mario', age: 40 });

console.log(user);

user.sync.save({ name: 'Mario', age: 40 });
