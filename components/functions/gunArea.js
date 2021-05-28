import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";

function gunArea({ dataSet, options }) {
  const { gstm } = dataSet;

  const select = vl.selectPoint().fields("gun").bind("legend");

  const brush = vl
    .selectInterval() // Brush is a better (vivid?) name than selection in this case!
    .encodings("x"); // limit selection to x-axis (year) values

  return vl
    .hconcat(
      vl
        .markArea({ opacity: 0.7 })
        .data(gstm)
        .params(select, brush)
        .transform(vl.filter('datum["year"] >= 2014'))
        .encode(
          vl.x().yearmonth("date"),
          vl.y().sum("count_guns").title("Number of guns"),
          vl
            .color()
            .fieldN("gun")
            .scale({ scheme: "tableau20" })
            .title("Gun type"),
          vl.opacity().if(select, vl.value(0.9)).value(0.2)
        )
        .width(600)
        .height(400),
      vl
        .markLine({ opacity: 0.8 })
        .data(gstm)
        .params(select)
        .transform(vl.filter('datum["year"] >= 2014'))
        .encode(
          vl.x().yearmonth("date").scale({ domain: brush }),
          vl.y().fieldQ("gun_percentage"),
          vl.color().fieldN("gun"),
          vl.opacity().if(select, vl.value(0.9)).value(0.05)
        )
        .width(600)
        .height(400)
    )
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

export default gunArea;
