import { gql } from "graphql-request";
import { useInfiniteQuery } from "react-query";
import { client } from "./utils";

const charactersQuery = gql`
  query($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      results {
        id
        name
        gender
        species
        status
        image
      }
      info {
        count
        next
        pages
        prev
      }
    }
  }
`;

export const useCharacters = (variables) => {
  const queryString = new URLSearchParams(variables.filter).toString();
  const key = `characters${queryString && `:${queryString}`}`;

  return useInfiniteQuery(
    key,
    async ({ pageParam = variables?.page }) => {
      const { characters } = await client.request(charactersQuery, {
        page: pageParam,
        ...variables
      });

      return characters;
    },
    {
      getNextPageParam: (lastPage) => lastPage.info.next
    }
  );
};
