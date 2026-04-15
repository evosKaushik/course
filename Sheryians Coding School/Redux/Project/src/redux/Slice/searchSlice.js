const initialState = {
  query: "",
  activeTab: "",
  result: [],
  loading: false,
  error: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setActiveTabs(state, action) {
      state.activeTab = action.payload;
    },
    setLoading(state, action) {
      state.result = action.payload;
      state.error = null;
    },
    setResults(state, action) {
      state.result = action.payload;
      state.loading = false;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setQuery, setActiveTabs, setLoading, setResults, setError } =
  searchSlice.actions;

export default searchSlice.reducer;
