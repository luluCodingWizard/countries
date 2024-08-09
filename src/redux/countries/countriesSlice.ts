import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CountryI {
  flags: { png: string; svg: string; alt: string };
  name: {
    common: string;
  };
  region: string;
  capital: string;
  population: number;
  // Add other fields as necessary
}

interface CountriesStateI {
  countries: CountryI[];
  searchQuery: string;
  regionFilter: string;
  filteredCountries: CountryI[];
  country: CountryI | null;
}

const initialState: CountriesStateI = {
  countries: [],
  searchQuery: "",
  regionFilter: "All",
  filteredCountries: [],
  country: null,
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setCountries: (state, action: PayloadAction<CountryI[]>) => {
      state.countries = action.payload;
      state.filteredCountries = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.filteredCountries = state.countries.filter((country) =>
        country.name.common
          .toLocaleLowerCase()
          .includes(action.payload.toLocaleLowerCase())
      );
    },
    setRegionFilter: (state, action: PayloadAction<string>) => {
      state.regionFilter = action.payload;
      state.filteredCountries = state.countries.filter(
        (country) =>
          (action.payload === "All" || country.region === action.payload) &&
          country.name.common
            .toLocaleLowerCase()
            .includes(state.searchQuery.toLocaleLowerCase())
      );
    },
  },
});

export const { setCountries, setSearchQuery, setRegionFilter } =
  countriesSlice.actions;
export default countriesSlice.reducer;

// RTK Query

export const countriesApi = createApi({
  reducerPath: "countriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1" }),
  endpoints: (builder) => ({
    getAllCountries: builder.query<CountryI[], void>({
      query: () => "all",
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(setCountries(data));
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCountriesQuery } = countriesApi;

// selectors
export const selectSearchQuery = (state: RootState) =>
  state.countries.searchQuery;
export const selectRegionFilter = (state: RootState) =>
  state.countries.regionFilter;
export const selectFilteredCountries = (state: RootState) =>
  state.countries.filteredCountries;
