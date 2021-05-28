import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";
import { op } from "arquero";

function perpetratorsByGender({ dataSet, options }) {
  const { p } = dataSet;
  const brush = vl
    .selectInterval() // Brush is a better (vivid?) name than selection in this case!
    .encodings("x"); // limit selection to x-axis (year) values

  const x = vl.x().yearmonth("date");

  const gender_ratio = p
    .filter((d) => d.year <= 2018 && d.year >= 2014)
    .derive({
      month: (d) => op.utcmonth(d.date),
      is_male: (d) => d.gender === "Male",
      is_female: (d) => d.gender === "Female",
    })
    .groupby(["month", "year"])
    .rollup({
      female_pctg: (d) =>
        (100 * op.sum(d.is_female)) / (op.sum(d.is_female) + op.sum(d.is_male)),
      male_pctg: (d) =>
        (100 * op.sum(d.is_male)) / (op.sum(d.is_female) + op.sum(d.is_male)),
      date: (d) => op.min(op.utcdatetime(d.date)),
    })
    .derive({ date: (d) => op.datetime(d.year, d.month) })
    .rename({ male_pctg: "male", female_pctg: "female" })
    .fold(["female", "male"])
    .rename({ key: "gender" });

  const gender_count = p
    .filter((d) => d.year <= 2018 && d.year >= 2014)
    .derive({
      month: (d) => op.utcmonth(d.date),
      is_male: (d) => d.gender === "Male",
      is_female: (d) => d.gender === "Female",
    })
    .groupby(["month", "year"])
    .rollup({
      female_count: (d) => op.sum(d.is_female),
      male_count: (d) => op.sum(d.is_male),
      date: (d) => op.min(op.utcdatetime(d.date)),
    })
    .derive({ date: (d) => op.datetime(d.year, d.month) })
    .rename({ male_count: "male", female_count: "female" })
    .fold(["female", "male"])
    .rename({ key: "gender" });

  return vl
    .hconcat(
      vl
        .markArea()
        .data(gender_count)
        .encode(
          x,
          vl.y().fieldQ("value").title("Number of perpetrators"),
          vl.color().fieldN("gender").scale({ scheme: "set1" })
        )
        .params(brush)
        .width(450)
        .height(360),
      vl
        .markArea()
        .data(gender_ratio)
        .encode(
          x,
          vl.y().fieldQ("value").title("Percentage of perpetrators"),
          vl.color().fieldN("gender").scale({ scheme: "set1" })
        )
        .encode(x.scale({ domain: brush }))
        .width(450)
        .height(360)
    )
    .config({
      mark: { opacity: 0.7 },
      background: "#1f2937",
      axis: {
        titleFontSize: 13,
        tickColor: "white",
        labelColor: "white",
        titleColor: "white",
        gridColor: "white",
        gridOpacity: 0.6,
        domainColor: "white",
      },
      legend: {
        titleFontSize: 16,
        labelFontSize: 14,
        labelColor: "white",
        titleColor: "white",
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

export default perpetratorsByGender;
