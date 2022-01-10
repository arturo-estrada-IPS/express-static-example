const d3 = require("d3");
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

const circles = d3.range(20).map((index) => ({
  x: Math.random() * (width - radius * 2) + radius,
  y: Math.random() * (height - radius * 2) + radius,
  index,
}));

const svg = d3
  .select("#container")
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
  .attr("fill", (d) => d3.schemeCategory10[d.index % 10])
  .call(drag)
  .on("click", (event, d) => {
    if (event.defaultPrevented) return;
    d3.select(event.target)
      .transition()
      .attr("fill", "black")
      .attr("r", radius * 2)
      .transition()
      .attr("r", radius)
      .attr("fill", d3.schemeCategory10[d.index % 10]);
  });
