import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";

function gunCounts(yearStart, yearEnd) {
  return vl
    .markBar({ opacity: 0.8 })
    .data(g)
    .transform(
      vl.filter(
        "datum['gun'] != 'Unknown' && datum['year'] >= " +
          yearStart +
          " && datum['year'] <= " +
          yearEnd
      )
    )
    .encode(
      vl.y().fieldN("gun").sort(vl.count()),
      vl.x().count().title("Number of guns"),
      vl
        .color()
        .fieldN("gun")
        .scale({ scheme: "category20b" })
        .legend(false)
        .title("Gun type")
    );
}
const options = {
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
vl.register(vega, vegaLite, options);

export default gunCounts;
