import { User } from './models/User';

const user = new User({ name: 'Jinx', age: 19 });

user.on('test', () => console.log('le test est passé'));
user.trigger('test');
