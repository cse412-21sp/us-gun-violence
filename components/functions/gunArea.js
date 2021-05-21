import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";

function gunArea({ dataSet, options }) {
  const { g } = dataSet;

  return vl
    .markArea({ opacity: 0.8 })
    .data(g)
    .transform(vl.filter("datum['gun'] != 'Unknown'"))
    .encode(
      vl.x().yearmonth("date"),
      vl.y().count().title("Number of guns"),
      vl
        .color()
        .fieldN("gun")
        .scale({ scheme: "category20b" })
        .title("Gun type")
    );
}

const vegaOptions = {
  config: {
    // Vega-Lite default configuration
  },
  init: (view) => {
    // initialize tooltip handler
    view.tooltip(new vegaTooltip.Handler().call);
  },
  view: {
    renderer: "canvas",
  },
};
vl.register(vega, vegaLite, vegaOptions);

export default gunArea;
