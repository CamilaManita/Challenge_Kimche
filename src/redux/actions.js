import axios from 'axios';
import { GET_CHARACTERS } from './action_types';

export const getCharacters = () => {
    return async function (dispatch) {
        try {
            const {data} = await axios.post('https://rickandmortyapi.com/graphql', {
                query:`
                    query {
                        characters {
                            results{
                                id 
                                name
                                status
                                species
                                gender
                            }
                        }
                    }
                `
            });

            dispatch({ type: GET_CHARACTERS, payload: data.data.characters.results});
        } catch (error) {
            return error.message;
        }
    }
}