import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  MovieCredits,
  MovieDetailType,
  MoviesKeywordsType,
  PersonDetails,
  ReviewDetailsType,
  moviesType,
} from '../../utils';

// function transformMoviesCreditsResponse(response: unknown): CastCreditCrew[] {
//   const data = response as { crew: CastCreditCrew[] };
//   const responseData = data.crew.filter(
//     (Castjob: CastCreditCrew) => Castjob.job === 'Director' || Castjob.job === 'Writing' || Castjob.job === 'Characters'
//   );
//   console.log(responseData);

//   return responseData;
// }

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
    // tagTypes: ['TRENDING_MOVIE'],
    prepareHeaders: (headers) => {
      const token = `${import.meta.env.VITE_TMDB_TOKEN}`;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['TRENDING_MOVIE'],
  endpoints: (builder) => ({
    getTrendingMovies: builder.query<moviesType, string>({
      query(data) {
        return {
          url: `trending/movie/${data}?language=en-US`,
          method: 'GET',
        };
      },
      // providesTags: [{ type: 'TRENDING_MOVIE' }],
      // transformResponse: (response, meta, arg) => {
      //   console.log(response);
      //   return response;
      // },
    }),
    getMoviesDetails: builder.query<MovieDetailType, number>({
      query(moviesId) {
        return {
          url: `movie/${moviesId}?language=en-US`,
          method: 'GET',
        };
      },
    }),

    getMoviesCredits: builder.query<MovieCredits, number>({
      query(moviesId) {
        return {
          url: `movie/${moviesId}/credits?language=en-US`,
          method: 'GET',
        };
      },
      // transformResponse: transformMoviesCreditsResponse,
    }),
    getMoviesKeywords: builder.query<MoviesKeywordsType, number>({
      query(movie_id) {
        return {
          url: `movie/${movie_id}/keywords`,
          method: 'GET',
        };
      },
    }),
    getPersonDetails: builder.query<PersonDetails, number>({
      query(personId) {
        return {
          url: `person/${personId}`,
          method: 'GET',
        };
      },
    }),
    getReviews: builder.query<ReviewDetailsType, number>({
      query(movie_id) {
        return {
          url: `movie/${movie_id}/reviews`,
          method: 'GET',
        };
      },
    }),
  }),
});

export const {
  useGetTrendingMoviesQuery,
  useGetMoviesDetailsQuery,
  useGetMoviesCreditsQuery,
  useGetMoviesKeywordsQuery,
  useGetPersonDetailsQuery,
  useGetReviewsQuery,
} = movieApi;
