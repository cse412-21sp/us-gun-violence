import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";

function perpetratorsByTime({ dataSet, options }) {
  const { WA } = options;
  return (map = vl
    .markGeoshape({ fill: "#ddd", stroke: "#fff", strokeWidth: 1 })
    .data(vl.topojson(WA).feature("states")));
}
export default perpetratorsByTime;
