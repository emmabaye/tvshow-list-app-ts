import { IEpisode, IState } from "./interfaces";

export const fetchDataAction = async (dispatch: any) => {
    const URL =
      "https://api.tvmaze.com/singlesearch/shows?q=flash&embed=episodes";
    const data = await fetch(URL);
    const dataJSON = await data.json();
    console.log("DATA ", dataJSON);
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes,
    });
  };

  export const toggleFavAction = (state: IState, dispatch: any, episode: IEpisode | any) => {
    const episodeInFav = state.favourites.includes(episode);
    let dispatchObj = {
      type: "ADD_FAV",
      payload: episode,
    };
    if (episodeInFav) {
      const favWithoutEpisode = state.favourites.filter(
        (fav: IEpisode) => fav.id !== episode.id
      );
      dispatchObj = {
        type: "REMOVE_FAV",
        payload: favWithoutEpisode,
      };
    }

    return dispatch(dispatchObj);
  };
