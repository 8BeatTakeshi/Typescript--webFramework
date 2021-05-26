import axios, { AxiosPromise, AxiosResponse } from 'axios';

interface HasId {
  id?: number;
}

export class Sync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      // Update in db
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      // Create in db
      return axios.post(this.rootUrl, data);
    }
  }
}
