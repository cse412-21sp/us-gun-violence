import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";
function perpetratorsByTime_backup({ dataSet, options }) {
  const { p } = dataSet;
  const { field, state_abbr, color, y_domain } = options;
  const titles = {
    mean_age: "Perpetrators mean age",
    underages_ratio: ["Ratio of underage/total", "perpetrators"],
  };

  const data = p
    .filter((d) => d.type == "Subject-Suspect")
    .derive({
      is_underage: (d) => d.age <= 18,
      month: (d) => op.utcmonth(d.date),
    })
    .groupby(["month", "year", "state"])
    .rollup({
      count_underages: (d) => op.sum(d.is_underage),
      count_perpetrators: (d) => op.count(),
      mean_age: (d) => op.mean(d.age),
      latitude: (d) => op.mean(d.latitude),
      longitude: (d) => op.mean(d.longitude),
    })
    .join(stf.join(stp, "state"), "year")
    .filter((d) => d.state_1 === d.state_2)
    .select(aq.not("state_2"))
    .rename({ state_1: "state" })
    .derive({
      underages_ratio: (d) => d.count_underages / d.count_perpetrators,
      perpetrators_per_1M: (d) =>
        (d.count_perpetrators / d.population) * 1000000,
      date: (d) => op.utcdatetime(d.year, d.month),
    });

  return vl.layer(
    vl
      .markLine()
      .data(data)
      .encode(
        vl.x().year("date"),
        vl.y().mean(field).title(titles[field]),
        vl.color().value("orange")
      ),
    vl
      .markLine()
      .data(
        data
          .params({ state_abbr: state_abbr })
          .filter((d) => d.state_abbr === state_abbr)
      )
      .encode(
        vl.x().year("date"),
        vl.y().mean(field).title(titles[field]),
        vl.color().value(color)
      )
  );
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

export default perpetratorsByTime_backup;
