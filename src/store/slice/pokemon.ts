import { createSlice } from "@reduxjs/toolkit";

type PokemonBio = {
    pokemonData: object | null,
    isLoading: boolean,
    error: object | null
}

const initialState: PokemonBio = {
    pokemonData: null,
    isLoading: false,
    error: null,
};
const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        setPokemonData: (state, action) => {
            state.pokemonData = action.payload;
            state.error = null;
            state.isLoading = false;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        setLoading: (state) => {
            state.isLoading = true;
        }
    }
});

export const { setPokemonData, setError, setLoading } = pokemonSlice.actions;
export default pokemonSlice.reducer;
