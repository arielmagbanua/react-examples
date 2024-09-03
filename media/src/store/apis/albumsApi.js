import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {faker} from "@faker-js/faker";

// TODO: DEV only!!! remove in production!!!
const pause = (duration) => {
  return new Promise(resolve => setTimeout(resolve, duration));
}

const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005/',
    fetchFn: async (...args) => {
      // TODO: remove for production
      await pause(1000);
      return fetch(...args);
    }
  }),
  endpoints(builder) {
    return {
      removeAlbum: builder.mutation({
        invalidatesTags: (result, error, albumArg) => {
          return [
            {
              type: 'Album',
              id: albumArg.id,
            }
          ];
        },
        query: (album) => {
          return {
            url: `/albums/${album.id}`,
            method: 'DELETE',
          };
        }
      }),
      addAlbum: builder.mutation({
        invalidatesTags: (result, error, usrArg) => {
          return [
            {
              type: 'UsersAlbums',
              id: usrArg.id,
            }
          ];
        },
        query: (user) => {
          return {
            url: '/albums',
            method: 'POST',
            body: {
              userId: user.id,
              title: faker.commerce.productName()
            }
          };
        }
      }),
      fetchAlbums: builder.query({
        providesTags: (result, error, usrArg) => {
          const tags = result.map((album) => {
            return {type: 'Album', id: album.id};
          });

          tags.push({
            type: 'UsersAlbums',
            id: usrArg.id,
          });

          return tags;
        },
        query: (user) => {
          return {
            url: '/albums',
            method: 'GET',
            params: {
              userId: user.id
            }
          };
        }
      })
    }
  }
});

export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} = albumsApi;
export {albumsApi}
