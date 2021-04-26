import React from "react";
import "./Cards.css";

export default function Cards({ title, image, body }) {
  return (
    <div class="card">
      <a href="https://algosort.herokuapp.com/">
        <div class="card-image">
          <figure class="image is-size-128x128">
            <img src="capstone.png" alt="Project Screenshot" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left"></div>
            <div class="media-content">
              <p class="title is-4">Al Goes Exploring</p>
            </div>
          </div>

          <div class="content">
            An online game designed for kids to learn the basics of sorting
            algorithms in a gamified manner
          </div>
        </div>
      </a>
      <a href="https://github.com/Winter-Net-Is-Coming/Winter-Net-Is-Coming">
        GitHub
      </a>
    </div>
  );
}
