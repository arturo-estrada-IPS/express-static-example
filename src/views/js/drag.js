/* eslint-disable no-param-reassign */
const d3 = require("d3");

function dragstart() {
  d3.select(this).attr("stroke", "black");
}

function dragged(event, d) {
  d3.select(this)
    .raise()
    .attr("cx", (d.x = event.x))
    .attr("cy", (d.y = event.y));
}

function dragend() {
  d3.select(this).attr("stroke", null);
}

const drag = d3
  .drag()
  .on("start", dragstart)
  .on("drag", dragged)
  .on("end", dragend);

module.exports = drag;
