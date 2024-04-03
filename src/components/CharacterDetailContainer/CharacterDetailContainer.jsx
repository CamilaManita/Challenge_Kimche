import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { request, gql } from "graphql-request";
import DetailCharacter from "../DetailCharacter/DetailCharacter";
import Loading from "../Loading/Loading";

const CharacterDetailContainer = () => {
  const { id } = useParams();

  const getCharacter = async () => {
    const query = gql`
      query GetCharacter($id: ID!) {
        character(id: $id) {
          id
          name
          gender
          species
          status
          image
          type
          origin {
            name
          }
          location {
            name
            dimension
          }
        }
      }
    `;

    try {
      const data = await request("https://rickandmortyapi.com/graphql", query, {
        id,
      });

      return data.character;
    } catch (error) {
      throw new Error(`Error fetching character: ${error.message}`);
    }
  };

  const { data, isLoading, isError } = useQuery(
    ["character", id],
    getCharacter
  );

  if (isLoading)
    return (
      <div className="loading-container">
        <Loading />
      </div>
    );

  if (isError) return <p>Error: {isError.message}</p>;

  return (
    <div className="detail-container">
      {data && <DetailCharacter character={data} />}
    </div>
  );
};

export default CharacterDetailContainer;
