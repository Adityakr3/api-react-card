import React, { useState } from "react";
import "./Accordion.css";
export const Accordion = () => {
  const [isTilte, setIsTitle] = useState(false);
  const [isImage, setIsImage] = useState(false);
  const [isVideo, setIsVideo] = useState(false);

  const handleClick = () => {
    setIsTitle(!isTilte);
  };

  const handleClick1 = () => {
    setIsImage(!isImage);
  };

  const handleClick2 = () => {
    setIsVideo(!isVideo);
  };
  return (
    <div className="accordion">
      {/* ........................................................................ */}

      <div className="accordion-title" onClick={handleClick}>
        <h1>accordion title</h1>
      </div>
      <div
        className="accordion-content"
        style={{ display: isTilte ? "block" : "none" }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          provident nostrum reiciendis culpa ipsum voluptate, voluptatem ipsa
          non laboriosam placeat. Minima aspernatur iusto asperiores voluptate
          odit autem recusandae, cumque eligendi repellendus fuga modi ipsum
          error et ut corporis, sit accusantium voluptas distinctio ipsa fugiat
          obcaecati explicabo. Laborum nobis cum saepe officiis, praesentium
          perferendis quod inventore aliquam dignissimos odio ad voluptatibus
          commodi! Velit, magni, quibusdam quasi eum ipsam eos optio ea autem,
          ducimus tempore repellendus maxime? Fugit rem necessitatibus quis
          voluptate laudantium cupiditate a omnis voluptatem molestiae
          repudiandae accusamus, nulla obcaecati corrupti hic officia, qui eos
          dolore esse aspernatur ipsam tempore incidunt! A maxime at sunt
          molestias iure, repudiandae cupiditate nam praesentium, quo, vel
          molestiae. Perferendis, et alias necessitatibus adipisci assumenda
          iste excepturi fuga quo deserunt.
        </p>
      </div>
      {/* ................................................................... */}
      <div className="accordion-title" onClick={handleClick1}>
        <h1>Accordion Image</h1>
      </div>
      <div
        className="accordion-content"
        style={{ display: isImage ? "block" : "none" }}
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1666277013010-ec1452d3bb35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          srcset=""
        />
      </div>
      {/* .............................................................................. */}

      <div className="accordion-title" onClick={handleClick2}>
        <h1>Accordion Video</h1>
      </div>
      <div
        className="accordion-content"
        style={{ display: isVideo ? "block" : "none" }}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/15PBALCMJEA?si=glrufU0NbxuMP2WP"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      {/* ........................................................................................... */}
    </div>
  );
};
