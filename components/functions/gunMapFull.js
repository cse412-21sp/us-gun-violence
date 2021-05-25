import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";
import { op } from "arquero";

function gunRect(data, gun, yearStart, yearEnd) {
  return vl
    .markRect()
    .data(data)
    .transform(
      vl.filter(
        'datum["gun"] == "' +
          gun +
          '" && datum["year"] >= ' +
          yearStart +
          ' && datum["year"] <= ' +
          yearEnd
      ),
      vl
        .groupby("state")
        .aggregate(
          vl.mean("latitude").as("latitude"),
          vl.mean("longitude").as("longitude"),
          vl.mean("gun_percentage").as("Percentage of " + gun),
          vl.mean("total_guns_per_1M").as("Total guns/1M population/year")
        )
    )
    .encode(
      vl
        .y()
        .fieldN("state")
        .sort(vl.mean("Percentage of " + gun).order("descending"))
        .title("State"),
      vl.color().fieldQ("Percentage of " + gun),
      vl.tooltip([
        vl.fieldN("state"),
        vl.fieldQ("Percentage of " + gun),
        vl.fieldQ("Total guns/1M population/year"),
      ])
    );
}

function gunMap(data, gun, yearStart, yearEnd, usa) {
  return vl
    .layer(
      vl
        .markGeoshape({ fill: "#374151", stroke: "#fff", strokeWidth: 1 })
        .data(vl.topojson(usa).feature("states"))
        .transform(
          vl.lookup("id").from(vl.data(data).key("fip").fields("state"))
        )
        .encode(vl.tooltip("state")),
      vl
        .markCircle({ stroke: "white", strokeWidth: 2 })
        .data(data)
        .transform(
          vl.filter(
            'datum["gun"] == "' +
              gun +
              '" && datum["year"] >= ' +
              yearStart +
              ' && datum["year"] <= ' +
              yearEnd
          ),
          vl
            .groupby("state")
            .aggregate(
              vl.mean("latitude").as("latitude"),
              vl.mean("longitude").as("longitude"),
              vl.mean("gun_percentage").as("Percentage of " + gun),
              vl.mean("total_guns_per_1M").as("Total guns/1M population/year")
            )
        )
        .encode(
          vl.latitude().fieldQ("latitude"),
          vl.longitude().fieldQ("longitude"),
          vl.color()
            .fieldQ("Percentage of " + gun)
            .scale({ scheme: "redpurple", clamp: true }),
          vl.size().fieldQ("Total guns/1M population/year").title(["Total guns/", "1M population/year"]),
          vl.tooltip([
            vl.fieldN("state"),
            vl.fieldQ("Percentage of " + gun),
            vl.fieldQ("Total guns/1M population/year"),
          ])
        )
    )
    .project(vl.projection("albersUsa"));
}

function gunMapFull({ dataSet, options }) {
  const { gsty, usa } = dataSet;
  const { gun, yearStart, yearEnd } = options;
  return vl
    .hconcat(
      gunRect(gsty, gun, yearStart, yearEnd).height(500),
      gunMap(gsty, gun, yearStart, yearEnd, usa).height(500).width(720)
    )
    .config({
      mark: { opacity: 0.9 },
      background: "#1f2937",
      axis: {
        titleFontSize: 16,
        tickColor: "white",
        labelColor: "white",
        titleColor: "white",
        gridColor: "white",
        domainColor: "white",
      },
      legend: {
        titleFontSize: 14,
        labelFontSize: 12,
        labelColor: "white",
        titleColor: "white",
        symbolFillColor: "#6b7280",
        symbolStrokeColor: "white",
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

export default gunMapFull;
