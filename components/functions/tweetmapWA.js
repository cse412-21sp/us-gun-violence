import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";

const brush = vl.selectPoint().fields("incident_id");

function map({ dataSet, options }) {
  const { wa, polarWA } = dataSet;

  return vl
    .layer(
      vl
        .markGeoshape({ fill: "#374151", stroke: "#fff", strokeWidth: 1 })
        .data(vl.topojson(wa).feature("counties")),
      vl
        .markCircle({ stroke: null })
        .data(polarWA)
        .params(brush)
        .transform(
          vl.filter("datum['latitude'] != 0 && datum['longitude'] != 0"),
          vl
            .calculate("datum['n_killed'] + datum['n_injured']")
            .as("num_victims"),
          vl.calculate("datum['comp']").as("sentimentality value")
        )
        .encode(
          vl.latitude().fieldQ("latitude"),
          vl.longitude().fieldQ("longitude"),
          vl
            .color()
            .fieldQ("sentimentality value")
            .title("Sentimentality value")
            .legend({ titleLineHeight: 10 })
            .scale({ scheme: "redblue" }),
          vl.size().fieldQ("num_victims").title(["Number of Victims"]),
          vl.tooltip([
            vl.fieldN("city_or_county"),
            vl.fieldQ("sentimentality value"),
            vl.fieldQ("latitude"),
            vl.fieldQ("longitude"),
          ]),
          vl.opacity().if(brush, vl.value(1)).value(0.1)
        )
    )
    .project(vl.projection());
}

function tweetMap({ dataSet, options }) {
  return vl
    .vconcat(map({ dataSet, options }).height(720).width(1200))
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
      scale: { maxSize: 300 },
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

export default tweetMap;

/*
{
  "$schema": "https://vega.github.io/schema/vega/v5.json",
  "description": "An interactive world map supporting pan and zoom.",
  "width": 900,
  "height": 500,
  "autosize": "none",
  "signals": [
    {"name": "tx", "update": "width / 2"},
    {"name": "ty", "update": "height / 2"},
    {
      "name": "scale",
      "value": 4000,
      "on": [
        {
          "events": {"type": "wheel", "consume": true},
          "update": "clamp(scale * pow(1.0005, -event.deltaY * pow(16, event.deltaMode)), 150, 20000)"
        }
      ]
    },
    {
      "name": "angles",
      "value": [0, 0],
      "on": [{"events": "mousedown", "update": "[rotateX, centerY]"}]
    },
    {
      "name": "cloned",
      "value": null,
      "on": [{"events": "mousedown", "update": "copy('projection')"}]
    },
    {
      "name": "start",
      "value": null,
      "on": [{"events": "mousedown", "update": "invert(cloned, xy())"}]
    },
    {
      "name": "drag",
      "value": null,
      "on": [
        {
          "events": "[mousedown, window:mouseup] > window:mousemove",
          "update": "invert(cloned, xy())"
        }
      ]
    },
    {
      "name": "delta",
      "value": null,
      "on": [
        {
          "events": {"signal": "drag"},
          "update": "[drag[0] - start[0], start[1] - drag[1]]"
        }
      ]
    },
    {
      "name": "rotateX",
      "value": 120,
      "on": [{"events": {"signal": "delta"}, "update": "angles[0] + delta[0]"}]
    },
    {
      "name": "centerY",
      "value": 47.5,
      "on": [
        {
          "events": {"signal": "delta"},
          "update": "clamp(angles[1] + delta[1], -60, 60)"
        }
      ]
    }
  ],
  "projections": [
    {
      "name": "projection",
      "scale": {"signal": "scale"},
      "rotate": [{"signal": "rotateX"}, 0, 0],
      "center": [0, {"signal": "centerY"}],
      "translate": [{"signal": "tx"}, {"signal": "ty"}]
    }
  ],
  "data": [
    {
      "name": "polar",
      "url": "https://us-gun-violence-data.netlify.app/polar_1_7d_WA_pro.csv",
      "format": {"type": "csv", "delimiter": ","}
    },
    {
      "name": "world",
      "url": "https://us-gun-violence-data.netlify.app/wa.json",
      "format": {"type": "topojson", "feature": "counties"}
    }
  ],
  "marks": [
    {
      "type": "shape",
      "from": {"data": "world"},
      "encode": {
        "enter": {
          "strokeWidth": {"value": 0.5},
          "stroke": {"value": "#fff"},
          "fill": {"value": "#374151"}
        }
      },
      "transform": [{"type": "geoshape", "projection": "projection"}]
    }
  ]
}
*/
