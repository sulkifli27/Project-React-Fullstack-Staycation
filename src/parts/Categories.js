import React from "react";

export default function Categories(data) {
  return data.map((category, index1) => {
    return <section className="container" key={`category-${index1}`}></section>;
  });
}
