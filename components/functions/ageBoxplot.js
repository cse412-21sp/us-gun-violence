import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";

function ageBoxplot({ dataSet, options }) {
  const { p } = dataSet;

  const box = vl
    .markBoxplot({ color: "white", opacity: 0.5, outliers: null })
    .data(p)
    .transform(vl.filter('datum["age"] <= 100'))
    .encode(
      vl.x().fieldO("year"),
      vl
        .y()
        .mean("age")
        .scale({ domain: [0, 70] }),
      vl.color().value("#91faef")
    );

  const meanLine = vl
    .markLine({ opacity: 0.9 })
    .data(p.derive({ label: (d) => "Mean Age" }))
    .transform(vl.filter('datum["age"] <= 100'))
    .encode(
      vl.x().fieldO("year"),
      vl
        .y()
        .mean("age")
        .scale({ domain: [0, 70] }),
      vl.color().fieldN("label").scale({ scheme: "set3" })
    );

  const medianLine = vl
    .markLine()
    .data(p.derive({ label: (d) => "Median Age" }))
    .transform(vl.filter('datum["age"] <= 100'))
    .encode(
      vl.x().fieldO("year"),
      vl
        .y()
        .median("age")
        .scale({ domain: [0, 70] }),
      vl.color().fieldN("label").scale({ scheme: "set3" })
    );

  return vl
    .layer(box, medianLine, meanLine)
    .width(480)
    .height(360)
    .config({
      mark: { opacity: 0.7 },
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

export default ageBoxplot;
