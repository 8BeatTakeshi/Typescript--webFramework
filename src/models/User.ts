import { AxiosResponse } from 'axios';

import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

export interface UserProps {
  id?: number;
  name: string;
  age: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: Partial<UserProps>): void {
    this.attributes.set(update);

    this.events.trigger('change');
  }

  async fetch(): Promise<void> {
    const id = this.get('id');

    if (typeof id !== 'number' || id === 0) {
      throw new Error('Cannot fetch without valid id!');
    }

    try {
      const response: AxiosResponse = await this.sync.fetch(id);
      this.set(response.data);
    } catch (err) {
      console.log(err);
    }
  }
}
