import { useEffect, useState } from "react";

import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import EditPost from "./EditPost";
//- packet
import { format } from "date-fns";
import { Routes, Route} from "react-router-dom";

// - Components
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

// - Hooks
import useWindowSize from '../Hooks/useWindowSize'
import useAxiosFetch from "../Hooks/useAxiosFetch";

import { useStoreActions } from "easy-peasy";



function Views() {
  const {width} = useWindowSize()

    // ! we cannot call hooks inside store of easypeasy so instead we'll do thing here

    const { data, isLoading, fetchError } = useAxiosFetch(
      "http://localhost:3000/posts"
    );
  
  
  const setPosts = useStoreActions(actions=> actions.setPosts);
  useEffect(() => {
    setPosts(data)
  },[data]);


  return (
    <>
      <Header title={"React blog"}  width={width}/>
      <Nav />
      <Routes>
        <Route path="/">
          <Route index element={<Home  isLoading={isLoading} fetchError={fetchError}/>} />
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
