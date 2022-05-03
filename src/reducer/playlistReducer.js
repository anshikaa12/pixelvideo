import { videos } from "../backend/db/videos";

const playlistReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_PLAYLIST":
      return {
        ...state,
        playlistList: [...state.playlistList, action.payload],
      };
    case "UPDATE_EXISTING_PLAYLIST":
      return {
        ...state,
        playlistList: state.playlistList.map((item) =>
          item.title === action.payload.name
            ? { ...item, videos: [...item.videos, action.payload.vid] }
            : item
        ),
      };
    case "REMOVE_FROM_PLAYLIST":
      return {
        ...state,
        playlistList: state.playlistList.map((item) =>
          item.title === action.payload.name
            ? {
                ...item,
                videos: item.videos.filter(
                  (videoItem) => videoItem._id !== action.payload.vidItem
                ),
              }
            : item
        ),
      };
    case "DELETE_PLAYLIST":
      return {
        ...state,
        playlistList: state.playlistList.filter(
          (item) => item.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export { playlistReducer };
