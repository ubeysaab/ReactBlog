
// ! Think About it like DataContext

// thunk will support async actions 
// computed will be computed values of state
import { createStore, action, thunk, computed } from "easy-peasy";
import api from "./api/posts";
import { th } from "date-fns/locale";



export default createStore({
  // there is where we will keep all our states  and actions 
  // posts state and the default value will be an empty array 

  // ! State Store : 
  posts: [],
  setPosts: action((state, payload) => {
    state.posts = payload;
  }),

  postTitle: '',
  setPostTitle: action((state, payload) => {
    state.postTitle = payload;
  }),

  postBody: '',
  setPostBody: action((state, payload) => {
    state.postBody = payload;
  }),

  editTitle: '',
  setEditTitle: action((state, payload) => {
    state.editTitle = payload;
  }),

  editBody: '',
  setEditBody: action((state, payload) => {
    state.editBody = payload;
  }),

  search: '',
  setSearch: action((state, payload) => {
    state.search = payload;
  }),
  
  searchResults: [],
  setSearchResults: action((state, payload) => {
    state.searchResults = payload;
  }),



  // ? count : easypeasy let us  have computed values (this gonna tell use how many posts we have)
  postCount:computed(state=> state.posts.length),
  

  // this is a state even if we thought this would be an action  it's actually considered state and that because  it won't actually send us  the value it's gonna send us a function we will define inside it and that function will then take the id to return the specific post we want 
  getPostById : computed(state => {
    // 
    return (id) => state.posts.find(post => post.id == id )
  }),


  // ! Actions 

  // thunk actions are asynchronous actions 
  //  here  payload :is a new post 
  savePost : thunk(async(actions, payload,helpers)=>{
    // with help of helper we can deconstruct posts from the current state to use it inside this thunk action 

    const {posts} = helpers.getState();
    try {
      let response = await api.post("/posts", payload);
      let newPostsaArray = [...posts, response.data];
      // //setPosts(newPostsaArray); we can't refer set posts like this it's need to be 
      actions.setPosts(newPostsaArray);
      actions.setPostTitle("");
      actions.setPostBody("");

      // navigate("/"); We cannot call hooks inside of our store  so that needs to be back in the component after this function save post  is called 

    } catch (err) {
      console.log(err.message);
    }


  }),

  // here  payload is the ID 
  deletePost : thunk(async(actions,payload,helpers)=> {
    const {posts} = helpers.getState();
    

    try {
      await api.delete(`posts/${payload}`)
      const postsList = posts.filter(post => post.id != payload);

      actions.setPosts(postsList)
      
    } catch (error) {
      console.log(error)
    }


  }),

// here payload is updatedPost
  editPost:thunk(async(actions,payload,helpers)=> {

    const {posts} = helpers.getState();

    const {id} = payload;
    try {

      const response = await api.put(`/posts/${id}`, payload);

      actions.setEditBody("");
      actions.setEditTitle("");
    
      actions.setPosts(posts.map(post => {
        return post.id == id ?{...response.data}: post;
      }))


    } catch (error) {
      console.log(`Error : ${error.message}`);
    }
    
  })

  

});