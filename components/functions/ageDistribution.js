import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";

function ageDistribution({ dataSet, options }) {
  const { p } = dataSet;
  const { yearStart, yearEnd, color } = options;

  const selection = vl.selectMulti().encodings(["x", "y"]);

  const box = vl
    .markBoxplot({ color: "white" })
    .data(p)
    .transform(vl.filter('datum["year"] >= 2014 && datum["age"] <= 100'))
    .encode(
      vl.x().fieldO("year"),
      vl.y().mean("age"),
      vl.color().value("#91faef"),
      vl.opacity().if(selection, vl.value(0.6)).value(0.2)
    )
    .params(selection);

  const meanLine = vl
    .markLine({ opacity: 0.9 })
    .data(p.derive({ label: (d) => "Mean Age" }))
    .transform(vl.filter('datum["year"] >= 2014 && datum["age"] <= 100'))
    .encode(
      vl.x().fieldO("year"),
      vl.y().mean("age"),
      vl.color().fieldN("label").scale({ scheme: "set3" })
    )
    .params(selection);

  const medianLine = vl
    .markLine()
    .data(p.derive({ label: (d) => "Median Age" }))
    .transform(vl.filter('datum["year"] >= 2014 && datum["age"] <= 100'))
    .encode(
      vl.x().fieldO("year"),
      vl.y().median("age"),
      vl.color().fieldN("label").scale({ scheme: "set3" })
    );

  const boxplot = vl.layer(box, medianLine, meanLine).width(480).height(480);

  const hist = vl
    .markBar()
    .data(p.filter((d) => d.age <= 100))
    .transform(vl.filter(selection))
    .encode(
      vl
        .x()
        .fieldQ("age")
        .scale({ domain: [0, 100] })
        .bin({ step: 5 })
        .title("Age"),
      vl
        .y()
        .count()
        .scale({ domain: [0, 28000] })
        .title("Number of Perpetrators"),
      vl.color().value(color)
    )
    .width(480)
    .height(480);

  return vl.hconcat(boxplot, hist).config({
    mark: { opacity: 0.8 },
    background: "#1f2937",
    axis: {
      titleFontSize: 13,
      tickColor: "white",
      labelColor: "white",
      titleColor: "white",
      gridOpacity: 0.6,
      gridColor: "white",
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

export default ageDistribution;
