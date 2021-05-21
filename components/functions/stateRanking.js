import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";

function stateRanking({ dataSet, options }) {
  const { pst } = dataSet;
  const { field, yearStart, yearEnd, scheme } = options;
  return vl
    .markRect()
    .data(pst)
    .transform(
      vl.filter(
        'datum["year"] >= ' + yearStart + ' && datum["year"] <= ' + yearEnd
      )
    )
    .encode(
      vl
        .y()
        .fieldN("state")
        .sort(vl.mean(field).order("descending"))
        .title("State"),
      vl.color().mean(field).scale({ scheme: scheme }),
      vl.tooltip([vl.fieldN("state"), vl.mean(field)])
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

export default stateRanking;
