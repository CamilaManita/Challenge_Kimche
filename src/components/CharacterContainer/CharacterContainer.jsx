import { useQuery, gql } from "@apollo/client";
import CharacterList from "../CharacterList/CharacterList";
import Loading from "../Loading/Loading";

const GET_CHARACTERS = gql`
  query getCharacters {
    characters {
      results {
        id
        name
        status
        species
        gender
        type
        image
      }
    }
  }
`;

const CharacterContainer = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading)
    return (
      <div className="loading-container">
        <Loading />
      </div>
    );
  if (error) return <p>Error: {error.message}</p>;
  return <CharacterList character={data} />;
};

export default CharacterContainer;
