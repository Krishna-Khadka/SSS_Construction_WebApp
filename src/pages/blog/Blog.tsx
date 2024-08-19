import React from "react";

import portfolio1 from "../../../public/portfolio1.jpg";
import portfolio2 from "../../../public/portfolio2.jpg";
import portfolio3 from "../../../public/portfolio3.jpg";
import portfolio4 from "../../../public/portfolio4.jpg";
import portfolio5 from "../../../public/portfolio5.jpg";
import portfolio6 from "../../../public/portfolio6.jpg";
import BlogLayout from "./BlogLayout";

const blogs = [
  {
    imgSrc: portfolio1,
    author: "Adam Hull",
    date: "6 february, 2024",
    title: "The beast team around and how we make it work",
  },
  {
    imgSrc: portfolio2,
    author: "Adam Hull",
    date: "6 february, 2024",
    title: "Redefining Organizational Dynamics by Embracing",
  },
  {
    imgSrc: portfolio3,
    author: "Adam Hull",
    date: "6 february, 2024",
    title: "Starting Construction Is Not So Easy",
  },
  {
    imgSrc: portfolio4,
    author: "Adam Hull",
    date: "6 february, 2024",
    title: "Innovative structures rise, blending Construction project",
  },
  {
    imgSrc: portfolio5,
    author: "Adam Hull",
    date: "6 february, 2024",
    title: "How to get architect to a kitchen Island",
  },
  {
    imgSrc: portfolio6,
    author: "Adam Hull",
    date: "6 february, 2024",
    title: "When you choose a good & professional engineer",
  },
];

const Blog = () => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {blogs.map((blog, index) => (
            <BlogLayout
              key={index}
              imgSrc={blog.imgSrc}
              author={blog.author}
              date={blog.date}
              title={blog.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
