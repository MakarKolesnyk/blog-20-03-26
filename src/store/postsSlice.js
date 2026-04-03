import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllPosts,
  getOnePost,
  getAllCommentsByPost,
  getAllUserPost,
  getAllTags,
  getAllPostByTag,
  getSearchPost,
} from "../api";

export const getSearchPostAsync = createAsyncThunk(
  "posts/getSearchPostAsync",
  async (args, thunkAPI) => {
    try {
      const response = await getSearchPost(args);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.message || "Posts not exists");
    }
  },
);

export const getAllPostByTagAsync = createAsyncThunk(
  "posts/getAllPostByTagAsync",
  async (args, thunkAPI) => {
    try {
      const response = await getAllPostByTag(args);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.message || "Posts not exists");
    }
  },
);

export const getAllTagsAsync = createAsyncThunk(
  "posts/getAllTags",
  async (args, thunkAPI) => {
    try {
      const response = await getAllTags();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.message || "Tags not exists");
    }
  },
);

export const getAllUserPostAsync = createAsyncThunk(
  "posts/getAllUserPostAsync",
  async (id, thunkAPI) => {
    try {
      const response = await getAllUserPost(id);
      return response.data.posts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.message || "Posts not exists");
    }
  },
);

export const getAllPostsAsync = createAsyncThunk(
  "posts/getAllPostsAsync",
  async (args, thunkAPI) => {
    try {
      const response = await getAllPosts(args);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.message || "Posts not exists");
    }
  },
);

export const getOnePostAsync = createAsyncThunk(
  "posts/getOnePostAsync",
  async (id, thunkAPI) => {
    try {
      const response = await getOnePost(id);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.message || "Post not exists");
    }
  },
);

export const getAllCommentsByPostAsync = createAsyncThunk(
  "posts/getAllCommentsByPostAsync",
  async (id, thunkAPI) => {
    try {
      const response = await getAllCommentsByPost(id);
      return response.data.comments;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.message || "Commensts not exists");
    }
  },
);

const setPending = (state) => {
  state.isPending = true;
};
const setRejected = (state, action) => {
  state.isPending = false;
  state.posts = action.payload;
};

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    total: 0,
    comments: [],
    // postsByUser: [],
    postsByTag: [],
    tags: [],
    selectedPost: null,
    error: null,
    isPending: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPostsAsync.pending, setPending);
    builder.addCase(getAllPostsAsync.fulfilled, (state, action) => {
      state.isPending = false;
      state.posts = action.payload.posts;
      state.total = action.payload.total;
    });
    builder.addCase(getAllPostsAsync.rejected, setRejected);
    builder.addCase(getOnePostAsync.pending, setPending);
    builder.addCase(getOnePostAsync.fulfilled, (state, action) => {
      state.isPending = false;
      state.selectedPost = action.payload;
    });
    builder.addCase(getOnePostAsync.rejected, setRejected);
    builder.addCase(getAllCommentsByPostAsync.pending, setPending);
    builder.addCase(getAllCommentsByPostAsync.fulfilled, (state, action) => {
      state.isPending = false;
      state.comments = action.payload;
    });
    builder.addCase(getAllCommentsByPostAsync.rejected, setRejected);
    builder.addCase(getAllUserPostAsync.pending, setPending);
    builder.addCase(getAllUserPostAsync.fulfilled, (state, action) => {
      state.isPending = false;
      state.postsByUser = action.payload || [];
    });
    builder.addCase(getAllUserPostAsync.rejected, setRejected);
    builder.addCase(getAllTagsAsync.pending, setPending);
    builder.addCase(getAllTagsAsync.fulfilled, (state, action) => {
      state.isPending = false;
      state.tags = action.payload;
    });
    builder.addCase(getAllTagsAsync.rejected, setRejected);
    builder.addCase(getAllPostByTagAsync.pending, setPending);
    builder.addCase(getAllPostByTagAsync.fulfilled, (state, action) => {
      state.isPending = false;
      state.posts = action.payload.posts;
      state.total = action.payload.total;
    });
    builder.addCase(getAllPostByTagAsync.rejected, setRejected);
    builder.addCase(getSearchPostAsync.pending, setPending);
    builder.addCase(getSearchPostAsync.fulfilled, (state, action) => {
      state.isPending = false;
      state.posts = action.payload?.posts || [];
      state.total = action.payload?.total || 0;
    });
    builder.addCase(getSearchPostAsync.rejected, setRejected);
  },
});

export default postsSlice.reducer;
