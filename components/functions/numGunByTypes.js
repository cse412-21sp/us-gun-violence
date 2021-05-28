import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";

const selection = vl.selectPoint().fields("gun");

function gunCounts({ dataSet, options }) {
  const { yearStart, yearEnd } = options;
  const { gstm } = dataSet;
  return vl.layer(
    vl
      .markBar({ opacity: 0.8 })
      .params(selection)
      .data(gstm)
      .transform(
        vl.filter(
          "datum['gun'] != 'Unknown' && datum['year'] >= " +
            yearStart +
            " && datum['year'] <= " +
            yearEnd
        )
      )
      .encode(
        vl.y().fieldN("gun").sort(vl.mean("gun_percentage")),
        vl.x().mean("gun_percentage").title("Percentage over total guns"),
        vl
          .color()
          .fieldN("gun")
          .scale({ scheme: "category20b" })
          .legend(false)
          .title("Gun type"),
        vl.opacity().if(selection, vl.value(1)).value(0.2)
      ),
    vl
      .markText({ opacity: 0.75, color: "white", dx: 20 })
      .data(gstm)
      .transform(
        vl.filter(
          "datum['gun'] != 'Unknown' && datum['year'] >= " +
            yearStart +
            " && datum['year'] <= " +
            yearEnd
        )
      )
      .encode(
        vl.text().mean("gun_percentage").format(".2f"),
        vl.y().fieldN("gun").sort(vl.mean("gun_percentage")),
        vl.x().mean("gun_percentage").title("Percentage over total guns")
      )
  );
}

function gunKillCounts({ dataSet, options }) {
  const { yearStart, yearEnd } = options;
  const { gstm } = dataSet;
  return vl.layer(
    vl
      .markBar({ opacity: 0.8 })
      .data(gstm)
      .params(selection)
      .transform(
        vl.filter(
          "datum['gun'] != 'Unknown' && datum['year'] >= " +
            yearStart +
            " && datum['year'] <= " +
            yearEnd
        ),
        vl
          .calculate(
            'datum["n_killed"]/ (datum["n_injured"] + datum["n_killed"])'
          )
          .as("kill_rate")
      )
      .encode(
        vl.y().fieldN("gun").sort(vl.mean("kill_rate")),
        vl.x().mean("kill_rate").title("Lethality (kills/injured)"),
        vl
          .color()
          .fieldN("gun")
          .scale({ scheme: "category20b" })
          .legend(false)
          .title("Gun type"),
        vl.opacity().if(selection, vl.value(1)).value(0.2)
      ),
    vl
      .markText({ opacity: 0.75, color: "white", dx: 20 })
      .data(gstm)
      .transform(
        vl.filter(
          "datum['gun'] != 'Unknown' && datum['year'] >= " +
            yearStart +
            " && datum['year'] <= " +
            yearEnd
        ),
        vl
          .calculate(
            'datum["n_killed"]/ (datum["n_injured"] + datum["n_killed"])'
          )
          .as("kill_rate")
      )
      .encode(
        vl.text().mean("kill_rate").format(".2f"),
        vl.y().fieldN("gun").sort(vl.mean("kill_rate")),
        vl.x().mean("kill_rate")
      )
  );
}

function numGunByTypes({ dataSet, options }) {
  return vl
    .hconcat(
      gunCounts({ dataSet, options }).width(400),
      gunKillCounts({ dataSet, options }).width(400)
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

export default numGunByTypes;
