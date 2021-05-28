export class Attributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: Partial<T>): void {
    // Object.assign(this.data, update);
    this.data = { ...this.data, ...update };
  }

  getAll(): T {
    return this.data;
  }
}
