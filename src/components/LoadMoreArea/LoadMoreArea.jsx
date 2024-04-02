import PropTypes from "prop-types";

const LoadMoreArea = ({
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage,
}) => {
  return (
    <>
      <div className="loadmore-button-wrapper">
        {(isFetchingNextPage || hasNextPage) && (
          <button
            className="loadmore-button"
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage ? "Loading more..." : "Load More"}
          </button>
        )}
      </div>
    </>
  );
};

LoadMoreArea.propTypes = {
    isFetchingNextPage: PropTypes.bool.isRequired,
    hasNextPage: PropTypes.bool,
    fetchNextPage: PropTypes.func.isRequired
}

export default LoadMoreArea;
