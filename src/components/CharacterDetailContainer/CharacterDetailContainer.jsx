import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import DetailCharacter from "../DetailCharacter/DetailCharacter";
import Loading from "../Loading/Loading";

const CharacterDetailContainer = () => {
  const { id } = useParams();
  const GET_CHARACTER = gql`
    query getCharacter($id: ID!) {
      character(id: $id) {
        id
        name
        status
        species
        gender
        type
        image
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id: parseInt(id) },
  });
  if (loading)
    return (
      <div className="loading-container">
        <Loading />
      </div>
    );
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="detail-container">
      <DetailCharacter character={data.character} />
    </div>
  );
};

export default CharacterDetailContainer;