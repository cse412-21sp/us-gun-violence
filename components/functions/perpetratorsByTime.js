import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";

function perpetratorsByTime({ dataSet, options }) {
  const { field, state_abbr, color } = options;
  const { pst } = dataSet;
  const titles = {
    mean_age: "Perpetrators mean age",
    underages_ratio: ["Ratio of underage/total", "perpetrators"],
  };

  return vl
    .layer(
      vl
        .markLine()
        .data(pst)
        .encode(
          vl.x().fieldO("year"),
          vl.y().mean(field).title(titles[field]),
          vl.color().value("orange")
        ),
      vl
        .markLine()
        .data(pst)
        .transform(
          vl.filter('datum["state_abbr"] == ' + '"' + state_abbr + '"')
        )
        .encode(
          vl.x().fieldO("year"),
          vl.y().mean(field).title(titles[field]),
          vl.color().value(color)
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

export default perpetratorsByTime;
