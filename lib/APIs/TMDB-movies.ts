'use server';

import axios from "axios";
import { IFetchResponse } from "@/lib/definitions";

const instance = axios.create({
  baseURL: process.env.TMDB_API_URL!,
  headers: {'Authorization': `Bearer ${process.env.TMDB_API_TOKEN}`},
})


export async function fetchMoviesByPopularity(language?: string, page?: number): Promise<IFetchResponse> {
  try {
    const {data} = await instance.get('/movie/popular', {params: {
      language: language || 'en-US',
      page: page || 1,
      }});
    return data;
  } catch (e: unknown) {
    if (e instanceof Error) {
      throw new Error(e.message);
    }
    throw new Error('Error fetching movies from API');
  }
}