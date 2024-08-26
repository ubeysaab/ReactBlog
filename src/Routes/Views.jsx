import { useEffect, useState } from "react";

import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import EditPost from "./EditPost";
import useWindowSize from '../Hooks/useWindowSize'

import { format } from "date-fns";

// - Components
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

// - Hooks
import useAxiosFetch from "../Hooks/useAxiosFetch";
import { DataProvider } from "../context/DataContext";
function Views() {
  // const [posts, setPosts] = useState([]);
  // const [editBody, setEditBody] = useState("");
  // const [editTitle, setEditTitle] = useState("");

  // const [search, setSearch] = useState("");
  // const [searchResults, setSearchResults] = useState("");
  // const [postTitle, setPostTitle] = useState("");
  // const [postBody, setPostBody] = useState("");

  // let navigate = useNavigate();
  // const {data,fetchError,isLoading} = useAxiosFetch("http://localhost:3000/posts")
  // useEffect(()=>{setPosts(data)},[data])

  // async function handleEdit(id) {
  //   const datetime = format(new Date(), "MMMM dd, yy pp");

  //   const updatedPost = { id, title: editTitle, datetime, body: editBody };
  //   try {
  //     // * we using patch if we updating
  //     //// api.patch(`/posts/${id}`)
  //     //*specific field  but here we replace the entire post
  //     const response = await api.put(`/posts/${id}`, updatedPost);

  //     // * just for where post id match  we pass in the new data which is the updated post

  //     // console.log(response);
  //     setEditBody("");
  //     setEditTitle("");
  //     console.log("Redirecting should work");
  //     setPosts(prev => {
  //       return (
  //         prev.map(post=> { return post.id == id ?{...response.data}:post})
  //       )
  //     })

  //     // console.log("I'm the response U need : ", { ...response.data }.title);
  //     navigate("/");
  //   } catch (error) {
  //     console.log(`Error : ${error.message}`);
  //   }
  // }

  // async function handleDelete(id) {
  //   // * For FrontEnd
  //   let newPosts = posts.filter((post) => post.id != id);
  //   setPosts(newPosts);
  //   navigate("/");

  //   // * for BackEnd
  //   try {
  //     let response = await api.delete(`/posts/${id}`);
  //     console.log(response.status);
  //   } catch (error) {
  //     if (error.response) {
  //       // The request was made and the server responded with a status code
  //       // that falls out of the range of 2xx
  //       console.log(error.response.data);
  //       console.log(error.response.status);
  //       console.log(error.response.headers);
  //     } else if (error.request) {
  //       // The request was made but no response was received
  //       // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
  //       // http.ClientRequest in node.js
  //       console.log(error.request);
  //     } else {
  //       // Something happened in setting up the request that triggered an Error
  //       console.log("Error", error.message);
  //     }
  //   }
  // }

  // useEffect(() => {
  //   let filteredSearch = posts.filter(
  //     (post) =>
  //       post["title"].toLowerCase().includes(search.toLowerCase()) ||
  //       post["body"].toLowerCase().includes(search.toLowerCase())
  //   );

  //   setSearchResults(filteredSearch.reverse());
  // }, [search, posts]);

  // // * to handle submit the new post
  // async function handleSubmit(e) {
  //   let now = new Date();
  //   e.preventDefault();

  //   let newPost = {
  //     id: posts.length + 1,
  //     title: postTitle,
  //     datetime: format(now, "LLLL dd yyyy  pp"),
  //     body: postBody,
  //   };

  //   setPostTitle("");
  //   setPostBody("");
  //   try {
  //     let response = await api.post("/posts", newPost);
  //     console.log(response.status);
  //     //// let newPostsArray = [...posts,newPost];
  //     //* for frontEnd we used it like above put a different way is by
  //     let newPostsaArray = [...posts, response.data];
  //     setPosts(newPostsaArray);
  //     // alert("new post added succesfully U will be render to posts page");
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  //   navigate("/");
  // }


  //  const window = useWindowSize()
  const {width} = useWindowSize()
  console.log(width)
  // console.log(window)
  return (
    <>
      <Header title={"ubey blog"}  width={width}/>
      <Nav />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="post" element={<NewPost />} />
          <Route path="post/:id" element={<PostPage />} />

          <Route path="edit/:id" element={<EditPost />} />

          <Route path="About" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default Views;
