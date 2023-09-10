/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/PF.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "LISTIFY",
    description:
      "Listify: A web app for making and managing to-do lists Listify is a web app that helps you create and organize your to-do lists. You can add tasks, set deadlines, mark them as done, and delete them. You can also sort your tasks by priority, date, or category. Listify is simple and easy to use. You can access your lists from any device or browser. Listify is built with HTML, CSS, JavaScript. Listify is an open source project and welcomes contributions from anyone who is interested in to-do list making and management. You can find the source code on [GitHub] and report any issues or suggestions on the [issue tracker]. You can also fork the repo and submit pull requests with your own improvements or features.",
    url: "https://aman003singh.github.io/LISTIFY",
  },
  {
    title: "STEGORACY",
    description:
      "A web app for hiding an image in another image Stegoracy is a web app that allows you to conceal an image inside another image. You can use it to hide some secret message or information as well. Stegoracy uses the [DukeLearning] library for image processing and steganography. Steganography is the art and science of hiding information in plain sight. Stegoracy is secure and easy to use. You can upload two images, one as the cover and one as the secret, and Stegoracy will merge them into one image. You can also extract the secret image from the merged image by uploading it to Stegoracy.",
    url: "https://aman003singh.github.io/STEGORACY/",
  },
  {
    title: "Parallax-Website",
    description:
      "This is a parallax website made using HTML, CSS and JavaScript",
    url: "https://aman003singh.github.io/Parallax-Website/",
  },
  {
    title: "MAGIFY",
    description:
      "A web app for changing the green background of an image to any background you want Magify is a web app that lets you upload an image with a green background and replace it with any background you choose. You can select a background from a gallery of images or upload your own. Magify uses the [DukeLearning] library for image processing and green screen removal.",
    url: "https://aman003singh.github.io/MAGIFY/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
