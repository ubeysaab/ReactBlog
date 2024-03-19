import React from "react";

function Footer() {
  const today = new Date();

  return (
    <footer className="Footer">
      <p>CopyRight &copy; {today.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
