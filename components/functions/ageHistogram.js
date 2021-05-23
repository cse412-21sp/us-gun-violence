import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";

function ageHistogram({ dataSet, options }) {
  const { p } = dataSet;
  const { yearStart, yearEnd, color } = options;
  return vl
    .markBar({ opacity: 0.5 })
    .data(
      p
        .params({ yearStart: yearStart, yearEnd: yearEnd })
        .filter(
          (d) => op.year(d.date) >= yearStart && op.year(d.date) <= yearEnd
        )
    )
    .encode(
      vl
        .x()
        .fieldQ("age")
        .scale({ domain: [0, 100] })
        .bin({ step: 5 }),
      vl.y().count().title("Number of Perpetrators"),
      vl.color().value(color)
    )
    .width(720)
    .height(360);
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

export default ageHistogram;
