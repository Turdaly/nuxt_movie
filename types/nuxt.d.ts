import type { AxiosInstance } from "axios";

declare module "#app" {
  interface NuxtApp {
    $apiMovie: AxiosInstance;
  }
}
