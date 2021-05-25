import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";

function perpetratorRect({ dataSet, options }) {
  const { pst } = dataSet;
  const { field, yearStart, yearEnd } = options;
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
      vl.color().mean(field),
      vl.tooltip([vl.fieldN("state"), vl.mean(field)])
    );
}

function perpetratorMap({ dataSet, options }) {
  const { field, yearStart, yearEnd } = options;
  const { pst, usa } = dataSet;
  const titles = {
    mean_age: "Perpetrators mean age",
    underages_ratio: ["Ratio of underage/total", "perpetrators"],
    male_pctg: ["Percentage of ", "male perpetrators"],
    female_pctg: ["Percentage of ", "female perpetrators"],
  };

  const schemes = {
    mean_age: "goldred",
    underages_ratio: "yellowgreenblue",
    male_pctg: "tealblues",
    female_pctg: "redpurple",
  };

  return vl
    .data(pst)
    .layer(
      vl
        .markGeoshape({ fill: "#374151", stroke: "#fff", strokeWidth: 1 })
        .data(vl.topojson(usa).feature("states"))
        .transform(
          vl.lookup("id").from(vl.data(pst).key("fip").fields("state"))
        )
        .encode(vl.tooltip("state")),
      vl
        .markCircle({ stroke: "#white" })
        .data(pst)
        .transform(
          vl.filter(
            'datum["year"] >= ' + yearStart + ' && datum["year"] <= ' + yearEnd
          ),
          vl
            .groupby("state")
            .aggregate(
              vl.mean(field).as(field),
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
            .scale({ scheme: schemes[field] })
            .title(titles[field]),
          vl
            .size()
            .mean("perpetrators_per_1M")
            .title(["Perpetrators/", "1M population/year"]),
          vl.tooltip([
            vl.fieldN("state"),
            vl.fieldQ(field),
            vl.fieldQ("perpetrators_per_1M"),
          ])
        )
    )
    .project(vl.projection("albersUsa"));
}

function perpetratorMapFull({ dataSet, options }) {
  return vl
    .hconcat(
      perpetratorRect({ dataSet, options }).height(500),
      perpetratorMap({ dataSet, options }).height(500).width(720)
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

export default perpetratorMapFull;
