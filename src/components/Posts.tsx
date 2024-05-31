import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetPokemonByNameQuery } from 'store/api';
import { setPokemonData, setError, setLoading } from 'store/slice/pokemon';

function Posts() {
    const dispatch = useDispatch();
    const { data, error, isLoading } = useGetPokemonByNameQuery('pikachu');

    useEffect(() => {
        if (data) {
            dispatch(setPokemonData(data));
        }
        if (error) {
            dispatch(setError(error));
        }
        if (isLoading) {
            dispatch(setLoading());
        }
    }, [dispatch, data, error, isLoading]);

    const pokemonData = useSelector((state) => state?.pokemon?.pokemonData);

    return (
        <div className="App">
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : pokemonData ? (
                <>
                    <h3>{pokemonData.species.name}</h3>
                    <img src={pokemonData.sprites.front_shiny} alt={pokemonData.species.name} />
                </>
            ) : null}
        </div>
    );
}

export default Posts;
