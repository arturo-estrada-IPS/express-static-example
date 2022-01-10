/* eslint-disable no-param-reassign */
const { select, drag } = require("d3");

function dragstart() {
  select(this).attr("stroke", "black");
}

function dragged(event, d) {
  select(this)
    .raise()
    .attr("cx", (d.x = event.x))
    .attr("cy", (d.y = event.y));
}

function dragend() {
  select(this).attr("stroke", null);
}

module.exports = drag()
  .on("start", dragstart)
  .on("drag", dragged)
  .on("end", dragend);
