import axios from "axios";
import type { AxiosInstance } from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const apiMovie: AxiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
      Accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGIxYjQwMThlODE0NzExMDQ2N2I4YjgwNmNmYTE3MSIsIm5iZiI6MTcyMTA1MzA0OS44NTA0MTksInN1YiI6IjY2OTUyNzk4YzEzNWFmZmVhNWJhYzY1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qRkXijE7vN_kCYFxBfR-TJ3weSR54xu_bER3cyLHNMM",
    },
  });
  const apiCustom: AxiosInstance = axios.create({
    baseURL: "https://41d702835d3daeea.mokky.dev",
    "headers": {
      "accept": "application/json",
    },
  })
  nuxtApp.provide("apiMovie", apiMovie);
});
