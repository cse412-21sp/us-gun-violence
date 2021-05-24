import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";
import { op, not } from "arquero";

function gunByTime(dataSet, options) {
  const { g } = dataSet;
  const { state_abbr, gun } = options;
  const data = g
    .params({ gun: gun })
    .filter((d) => d.gun == gun)
    .groupby("state", "year")
    .rollup({
      count_guns: (d) => op.count(),
    })
    .join(
      g
        .params({ gun: gun })
        .groupby("state", "year")
        .rollup({
          total_guns: (d) => op.count(),
        }),
      "state"
    )
    .join(stf, "state")
    .filter((d) => d.year_1 === d.year_2)
    .select(not("year_2"))
    .rename({ year_1: "year" })
    .derive({ percentage: (d) => (100 * d.count_guns) / d.total_guns });

  return vl
    .layer(
      vl
        .markLine()
        .data(data.derive({ state: (d) => "all" }))
        .encode(
          vl.x().fieldO("year"),
          vl.y().mean("percentage"),
          vl.color().fieldN("state").title("State")
        ),
      vl
        .markLine()
        .data(data)
        .transform(
          vl.filter('datum["state_abbr"] == ' + '"' + state_abbr + '"')
        )
        .encode(
          vl.x().fieldO("year"),
          vl
            .y()
            .mean("percentage")
            .title("Percentage of " + gun),
          vl.color().fieldN("state_abbr").title("State")
        )
    )
    .width(500);
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

export default gunByTime;
