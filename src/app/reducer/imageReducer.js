export default function imageReducer(state, action) {
  switch (action.type) {
    case "GET_ALL_IMAGES":
      return {
        ...state,
        imageDetails: action.payload.hits,
        totalpages: action.payload.totalHits / 20,
        page: 1,
      };

    case "GET_QUERY_IMAGES":
      return {
        ...state,
        imageDetails: action.payload.data.hits,
        totalpages: action.payload.data.totalHits / 20,
        page: action.payload.pageNo,
      };

    case "SET_QUERY":
      return {
        ...state,
        query: action.payload.query,
        page: action.payload.pageNo,
      };

    default:
      state;
  }
}
