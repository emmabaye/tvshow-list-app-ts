import React from "react";
import { fetchDataAction, toggleFavAction } from "./Actions";
import { IEpisodesProps } from "./interfaces";
import { Store } from "./Store";

const EpisodesList = React.lazy<any>(() => import("./EpisodesList"));

export default function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props: IEpisodesProps = {
    episodes: state.episodes,
    store: {state, dispatch},
    toggleFavAction,
    favourites: state.favourites,
  };

  console.log("state ", state);

  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <section className="episode-layout">
          <EpisodesList {...props} />
        </section>
      </React.Suspense>
    </>
  );
}
