import axios, { AxiosResponse } from 'axios';

import { Eventing } from './Eventing';

interface UserProps {
  id?: number;
  name: string;
  age: number;
}

export class User {
  public events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: Partial<UserProps>): void {
    // Object.assign(this.data, update);
    this.data = { ...this.data, ...update };
  }

  async fetch(): Promise<void> {
    const response: AxiosResponse = await axios.get(
      `http://localhost:3000/users/${this.get('id')}`
    );

    this.set(response.data);
  }

  async save() {
    const id = this.get('id');

    if (id) {
      // Update user
      const response: AxiosResponse = await axios.put(
        `http://localhost:3000/users/${id}`,
        this.data
      );
    } else {
      // Create new user in db
      const response = await axios.post(
        'http://localhost:3000/users',
        this.data
      );
    }
  }
}
