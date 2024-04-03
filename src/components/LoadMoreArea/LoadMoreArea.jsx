import PropTypes from "prop-types";
import './LoadMoreArea.css'

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
            className="custom-button button"
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
