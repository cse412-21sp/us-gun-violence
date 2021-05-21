import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";
function perpetratorsByState({ dataSet, options }) {
  const { field, yearStart, yearEnd, scheme } = options;
  const { pst } = dataSet;
  const titles = {
    mean_age: "Perpetrators mean age",
    underages_ratio: ["Ratio of underage/total", "perpetrators"],
  };

  return vl
    .data(pst)
    .layer(
      vl
        .markGeoshape({ fill: "#ddd", stroke: "#fff", strokeWidth: 1 })
        .data(vl.topojson(usa).feature("states"))
        .transform(
          vl.lookup("id").from(vl.data(ppst).key("fip").fields("state"))
        )
        .encode(vl.tooltip("state")),
      vl
        .markCircle({ stroke: "#5e5e5e" })
        .data(pst)
        .transform(
          vl.filter(
            'datum["year"] >= ' + yearStart + ' && datum["year"] <= ' + yearEnd
          ),
          vl
            .groupby("state")
            .aggregate(
              vl.mean("mean_age").as("mean_age"),
              vl.mean("underages_ratio").as("underages_ratio"),
              vl.mean("perpetrators_per_1M").as("perpetrators_per_1M"),
              vl.mean("latitude").as("latitude"),
              vl.mean("longitude").as("longitude")
            )
        )
        .encode(
          vl.latitude().fieldQ("latitude"),
          vl.longitude().fieldQ("longitude"),
          vl
            .color()
            .mean(field)
            .legend({ titleLineHeight: 10 })
            .scale({ scheme: scheme })
            .title(titles[field]),
          vl
            .size()
            .mean("perpetrators_per_1M")
            .title(["Perpetrators per", "1M population"]),
          vl.tooltip([
            vl.fieldN("state"),
            vl.fieldQ(field),
            vl.fieldQ("perpetrators_per_1M"),
          ])
        )
    )
    .project(vl.projection("albersUsa"));
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

export default perpetratorsByState;
