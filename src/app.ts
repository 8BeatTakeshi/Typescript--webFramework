import { User } from './models/User';

const user = new User({ name: 'Mario', age: 40 });

console.log(user);

user.events.on('test', () => console.log('test'));
user.events.trigger('test');
