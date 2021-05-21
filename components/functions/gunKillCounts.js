import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";
function gunKillCounts({ dataSet, options }) {
  const { yearStart, yearEnd } = options;
  const { g } = dataSet;
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
      vl.y().fieldN("gun").sort(vl.mean("n_killed")),
      vl.x().mean("n_killed").title("Mean kill counts in an incident"),
      vl
        .color()
        .fieldN("gun")
        .scale({ scheme: "category20b" })
        .legend(false)
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

export default gunKillCounts;
