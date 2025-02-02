import React, { useEffect } from "react";
import Feed from "../Components/Feed";

import { useStoreState } from "easy-peasy";

function Home({ isLoading, fetchError }) {
  const searchResults = useStoreState((state) => state.searchResults);

  return (
    <>
      <main className="Home">
        {isLoading ? (
          <p>all posts are loading now please wait a minute</p>
        ) : !isLoading && searchResults.length ? (
          <Feed posts={searchResults} />
        ) : (
          <p>{fetchError}</p>
        )}
      </main>
    </>
  );
}

export default Home;
