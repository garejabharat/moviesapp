import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  AlternateTitleType,
  ChangeType,
  CountryNameType,
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
type PopularType = 'streaming' | 'TV' | 'Rent' | 'Theaters';
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
  tagTypes: [
    'TRENDING_MOVIE',
    'MOVIE_DETAIL',
    'MOVIE_CREDITS',
    'MOVIE_KEYWORDS',
    'PERSON_DETAILS',
    'REVIEWS',
    'MOVIE_CHANGES',
    'POPULAR_MOVIES',
    'ALTERNATE_TITLE',
  ],
  endpoints: (builder) => ({
    getTrendingMovies: builder.query<moviesType, string>({
      query(data) {
        return {
          url: `trending/movie/${data}?language=en-US`,
          method: 'GET',
        };
      },
      providesTags: [{ type: 'TRENDING_MOVIE' }],
      // transformResponse: (response, meta, arg) => {
      //   console.log(response);
      //   return response;
      // },
    }),

    getMoviesDetails: builder.query<MovieDetailType, number>({
      query: (moviesId) => `movie/${moviesId}?language=en-US`,
      providesTags: [{ type: 'MOVIE_DETAIL' }],
    }),

    getMoviesCredits: builder.query<MovieCredits, number>({
      query: (moviesId) => `movie/${moviesId}/credits?language=en-US`,
      providesTags: [{ type: 'MOVIE_CREDITS' }],
    }),
    getMoviesKeywords: builder.query<MoviesKeywordsType, number>({
      query: (movie_id) => `movie/${movie_id}/keywords`,
      providesTags: [{ type: 'MOVIE_KEYWORDS' }],
    }),
    getPersonDetails: builder.query<PersonDetails, number>({
      query: (personId) => `person/${personId}`,
      providesTags: [{ type: 'PERSON_DETAILS' }],
    }),
    getReviews: builder.query<ReviewDetailsType, number>({
      query: (movie_id) => `movie/${movie_id}/reviews`,
      providesTags: [{ type: 'REVIEWS' }],
    }),
    getChanges: builder.query<ChangeType, string>({
      query: (changes_name) => `person/${changes_name}?page=1`,
      providesTags: [{ type: 'MOVIE_CHANGES' }],
    }),
    getPopular: builder.query<ChangeType, PopularType>({
      query: (popular_name) => `movie/popular?language=en-US&page=1&region=${popular_name}`,
      providesTags: [{ type: 'POPULAR_MOVIES' }],
    }),
    getAlternateTitle: builder.query<AlternateTitleType, number>({
      query: (movie_id) => `movie/${movie_id}/alternative_titles`,
      providesTags: [{ type: 'ALTERNATE_TITLE' }],
    }),
    countryName: builder.query<CountryNameType[], string>({
      query: (language) => `configuration/countries?language=${language}`,
      providesTags: [{ type: 'ALTERNATE_TITLE' }],
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
  useGetAlternateTitleQuery,
  useCountryNameQuery,
} = movieApi;
