import React from "react";
import { useStore, useStoreState } from "easy-peasy";
function Footer() {
  // const today = new Date();
 const postCount = useStoreState(state => state.postCount)
  return (
    <footer className="Footer">
      {/* <p>CopyRight &copy; {today.getFullYear()}</p> */}
      <p>Post Count {postCount}</p>
    </footer>
  );
}

export default Footer;
