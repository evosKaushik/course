import { create } from "zustand";

const usePostStore = create((set) => ({
  posts: [],
  loading: false,
  error: null,
  fetchPosts: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const data = await res.json();
      set({ posts: data });
    } catch (error) {
      set({ error: `Failed to fetch posts, Error: ${error.message}` });
    } finally {
      set({ loading: false });
    }
  },
}));

export default usePostStore;
