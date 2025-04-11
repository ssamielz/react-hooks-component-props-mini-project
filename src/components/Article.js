import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  let displayTime = "";
  if (minutes < 30) {
    const cups = Math.ceil(minutes / 5);
    displayTime = "☕️".repeat(cups) + ` ${minutes} min read`;
  } else {
    const boxes = Math.ceil(minutes / 10);
    displayTime = "🍱".repeat(boxes) + ` ${minutes} min read`;
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {displayTime}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
