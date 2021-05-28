import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";

function gunByTime({ dataSet, options }) {
  const { gsty } = dataSet;
  const { state_abbr, gun } = options;

  return vl
    .layer(
      vl
        .markLine()
        .data(gsty.derive({ state: (d) => "all" }))
        .transform(vl.filter('datum["gun"] == "' + gun + '"'))
        .encode(
          vl.x().fieldO("year"),
          vl.y().mean("gun_percentage"),
          vl.color().fieldN("state").title("State")
        ),
      vl
        .markLine()
        .data(gsty)
        .transform(
          vl.filter(
            'datum["state_abbr"] == ' +
              '"' +
              state_abbr +
              '" && datum["gun"] == "' +
              gun +
              '"'
          )
        )
        .encode(
          vl.x().fieldO("year"),
          vl
            .y()
            .mean("gun_percentage")
            .title("Percentage of " + gun),
          vl.color().fieldN("state_abbr").title(null)
        )
    )
    .width(500)
    .height(360)
    .config({
      mark: { opacity: 0.9 },
      background: "#1f2937",
      axis: {
        titleFontSize: 13,
        tickColor: "white",
        labelColor: "white",
        titleColor: "white",
        gridColor: "white",
        gridOpacity: 0.4,
        domainColor: "white",
      },
      legend: {
        labelFontSize: 14,
        labelColor: "white",
        titleColor: "white",
        title: null,
      },
      scale: { maxSize: 1500 },
      view: { stroke: null },
    });
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
