import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";
function perpetratorsByState_backup(field, yearStart, yearEnd, scheme) {
  const titles = {
    mean_age: "Perpetrators mean age",
    underages_ratio: ["Ratio of underage/total", "perpetrators"],
  };

  const pop_data = stp
    .params({ yearStart: yearStart, yearEnd: yearEnd })
    .filter((d) => d.year <= yearEnd && d.year >= yearStart)
    .groupby("state")
    .rollup({ population: (d) => op.mean(d.population) });

  const data = p
    .params({ yearStart: yearStart, yearEnd: yearEnd })
    .filter(
      (d) =>
        d.type == "Subject-Suspect" && d.year <= yearEnd && d.year >= yearStart
    )
    .derive({
      is_underage: (d) => d.age <= 18,
      month: (d) => op.utcmonth(d.date),
    })
    .groupby(["state"])
    .rollup({
      count_underages: (d) => op.sum(d.is_underage),
      count_perpetrators: (d) => op.count(),
      mean_age: (d) => op.mean(d.age),
      latitude: (d) => op.mean(d.latitude),
      longitude: (d) => op.mean(d.longitude),
    })
    .join(stf.join(pop_data, "state"), "state")
    .derive({
      underages_ratio: (d) => d.count_underages / d.count_perpetrators,
      perpetrators_per_1M: (d) =>
        (d.count_perpetrators / d.population) * 1000000,
    });

  const backgroundUS = vl
    .markGeoshape({ fill: "#ddd", stroke: "#fff", strokeWidth: 1 })
    .data(vl.topojson(usa).feature("states"))
    .transform(vl.lookup("id").from(vl.data(data).key("fip").fields("state")))
    .encode(vl.tooltip("state"));

  return vl
    .layer(
      backgroundUS,
      vl
        .markCircle({ stroke: "#5e5e5e" })
        .data(data)
        .encode(
          vl.latitude().fieldQ("latitude"),
          vl.longitude().fieldQ("longitude"),
          vl
            .size()
            .fieldQ("perpetrators_per_1M")
            .title(["Number of perpetrators ", "per 1M population"]),
          vl
            .color()
            .fieldQ(field)
            .legend({ titleLineHeight: 10 })
            .scale({ scheme: scheme })
            .title(titles[field]),
          vl.tooltip([
            vl.fieldN("state"),
            vl.fieldQ(field),
            vl.fieldQ("perpetrators_per_1M"),
          ])
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

export default perpetratorsByState_backup;
