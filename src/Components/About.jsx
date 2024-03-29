/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/White Cube Pattern 4k Wallpaper,HD Abstract Wallpapers,4k Wallpapers,Images,Backgrounds,Photos and Pictures.jpeg";

const imageAltText = "white cube patter background image";

/**
 * Sort description that expands on your title on the Home component.
 */
const description = "Passionate about networking and connecting with fellow students.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList =[
  <a href="https://temperature-converteer.netlify.app/" target="_blank" rel="noreferrer" key="temperature-converter" id="buotton">Temperature Converter</a>,
  <a href="https://to-do-list-mansi.netlify.app" target="_blank" rel="noreferrer" key="to-do-list" id="buotton">To-Do list</a>
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Skilled in forging new connections, embracing new technologies, and eager to learn. Excited to share insights on tech fests, networking, and the latest in technology. Join me in exploring the world of tech together!";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
