import React from "react";

function About({ blogImage = "https://via.placeholder.com/215", aboutText }) {
  return (
    <aside>
      <img src={blogImage} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
}

export default About;