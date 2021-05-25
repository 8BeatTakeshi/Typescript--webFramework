interface UserProps {
  name: string;
  age: number;
}

type CallBack = () => {};

export class User {
  events: { [key: string]: CallBack[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: Partial<UserProps>): void {
    // Object.assign(this.data, update);
    this.data = { ...this.data, ...update };
  }

  on(eventName: string, callback: CallBack): void {}
}
