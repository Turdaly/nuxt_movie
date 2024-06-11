import axios from './axios';
import type { AxiosRequestConfig } from 'axios';

export class ApiClass {
  private async axiosCall<T>(config: AxiosRequestConfig): Promise<T> {
    const { data } = await axios.request<T>(config);
    return data;
  }
}