import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";

function perpetratorsByTime({ dataSet, options }) {
  const { field, state_abbr} = options;
  const { pst } = dataSet;

  const titles = {
    "mean_age": "Perpetrators mean age",
    "underages_ratio": ["Ratio of underage/total", "perpetrators"],
    "male_pctg": ["Percentage of ", "male perpetrators"],
    "female_pctg": ["Percentage of ", "female perpetrators"]
  }

  return vl.layer(
    vl.markLine().data(pst.derive({state: d => 'all'}))
      .encode(
        vl.x().fieldO('year'),
        vl.y().mean(field).title(titles[field]),
        vl.color().fieldN('state').title('State')
      ),
    vl.markLine().data(pst)
      .transform(
        vl.filter('datum["state_abbr"] == ' + '"' + state_abbr + '"'),
      )
      .encode(
        vl.x().fieldO('year'),
        vl.y().mean(field).title(titles[field]),
        vl.color().fieldN('state_abbr').title('State')
      )
   ).width(500).height(250)
   .config({
    mark: { opacity: 0.9 },
    background: "#3e3e3e",
    axis: {
      tickColor: "white",
      labelColor: "white",
      titleColor: "white",
      gridColor: "white",
      domainColor: "white",
    },
    legend: { labelColor: "white", titleColor: "white" },
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

export default perpetratorsByTime;
