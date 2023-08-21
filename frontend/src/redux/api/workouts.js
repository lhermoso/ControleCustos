import { BaseApi } from '../internals';

export const workoutApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWorkouts: builder.query({
      query: ({
        limit = 9,
        offset = 0,
        equipment = '',
        difficulty = '',
        muscles = '',
        goals = '',
        ordering,
      }) => {
        if (equipment === '') return `/newapi/workout/originals/workouts/?limit=${limit}&offset=${offset}&ordering=${ordering}&difficulty=${difficulty}&muscles=${muscles}&goals=${goals}`;
        return `/newapi/workout/originals/workouts/?limit=${limit}&offset=${offset}&ordering=${ordering}&equipment=${equipment}&difficulty=${difficulty}&muscles=${muscles}&$goals=${goals}`;
      },

      providesTags: ['OriginalWorkouts'],
    }),
    getWorkoutById: builder.query({
      query: (id) => `/newapi/workout/originals/workouts/${id}/`,
      providesTags: ['OriginalWorkouts'],
    }),
    getWorkoutBySlug: builder.query({
      query: (slug) => `/newapi/workout/originals/workouts/?slug=${slug}`,
      providesTags: ['OriginalWorkouts'],
    }),

    getGoals: builder.query({
      query: () => '/newapi/workout/originals/goals/',
      providesTags: ['WorkoutGoals'],
    }),
    getCategories: builder.query({
      query: () => '/newapi/workout/originals/workouts/categories/',
      providesTags: ['WorkoutCategories'],
    }),

  }),
});

export const {

  useGetWorkoutsQuery,
  useGetGoalsQuery,
  useGetWorkoutByIdQuery,
  useGetWorkoutBySlugQuery,
  useGetCategoriesQuery,
} = workoutApi;
