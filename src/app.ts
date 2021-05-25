import { User } from './models/User';

const user = new User({ id: 1, name: 'Mario', age: 40 });

user.fetch();

setTimeout(() => {
  console.log(user);
}, 4000);
