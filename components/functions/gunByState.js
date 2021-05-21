import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";

function gunByState(gun, yearStart, yearEnd, scheme) {
  return vl
    .layer(
      vl
        .markGeoshape({ fill: "#ddd", stroke: "#fff", strokeWidth: 1 })
        .data(vl.topojson(usa).feature("states"))
        .transform(
          vl.lookup("id").from(vl.data(gst).key("fip").fields("state"))
        )
        .encode(vl.tooltip("state")),
      vl
        .markGeoshape({ stroke: "#fff", strokeWidth: 1 })
        .data(vl.topojson(usa).feature("states"))
        .transform(
          vl.lookup("id").from(
            vl
              .lookupData(
                gst
                  .params({ gun: gun, yearStart: yearEnd, yearEnd: yearEnd })
                  .filter((d) => d.gun == gun)
                  .filter((d) => d.year >= yearStart)
                  .filter((d) => d.year <= yearEnd)
                  .groupby(["state", "fip"])
                  .rollup({ count_guns: (d) => op.sum(d.count_guns) })
                  .objects()
              )
              .key("fip")
              .fields(["state", "count_guns"])
          )
        )
        .encode(
          vl
            .color()
            .fieldQ("count_guns")
            .scale({ scheme: scheme, clamp: true })
            .title("Number of guns (" + gun + ")"),
          vl.tooltip([vl.fieldN("state"), vl.fieldQ("count_guns")])
        )
    )
    .project(vl.projection("albersUsa"));
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

export default gunByState;
