import React from "react";
import { Store } from "./Store";
import { toggleFavAction } from "./Actions";
import { IEpisodesProps } from "./interfaces";

const EpisodesList = React.lazy(() => import("./EpisodesList"));

export default function FavPage(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);
  const props: IEpisodesProps = {
    episodes: state.favourites,
    store: {state, dispatch},
    toggleFavAction,
    favourites: state.favourites,
  };;

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <section className="episode-layout">
        <EpisodesList {...props} />
      </section>
    </React.Suspense>
  );
}
