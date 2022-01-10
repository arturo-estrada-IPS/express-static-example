const { select, range, schemeCategory10 } = require("d3");
const drag = require("./drag");

const margin = {
  top: 20,
  right: 20,
  bottom: 30,
  left: 40,
};
const width = 960 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;
const radius = 32;

const circles = range(20).map((index) => ({
  x: Math.random() * (width - radius * 2) + radius,
  y: Math.random() * (height - radius * 2) + radius,
  index,
}));

const svg = select("#container")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .attr("stroke-width", 2);

svg
  .selectAll("circle")
  .data(circles)
  .join("circle")
  .attr("cx", (d) => d.x)
  .attr("cy", (d) => d.y)
  .attr("r", radius)
  .attr("fill", (d) => schemeCategory10[d.index % 10])
  .call(drag)
  .on("click", (event, d) => {
    if (event.defaultPrevented) return;
    select(event.target)
      .transition()
      .attr("fill", "black")
      .attr("r", radius * 2)
      .transition()
      .attr("r", radius)
      .attr("fill", schemeCategory10[d.index % 10]);
  });
