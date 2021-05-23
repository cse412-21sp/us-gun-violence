import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";

function gunRect(data) {
  return vl.markRect()
    .data(data)
    .encode(
      vl.y().fieldN('state').sort(vl.mean('percentage').order('descending')).title("State"),
      vl.color().fieldQ('percentage'),
      vl.tooltip([vl.fieldN('state'), vl.fieldQ('percentage'), vl.fieldQ('guns/1M population/year')]),
    )
}

function gunMap(data, usa, pst, gun) {
  return vl.layer(
    vl.markGeoshape({fill: '#ddd', stroke: '#fff', strokeWidth: 1})
    .data(vl.topojson(usa).feature('states'))
    .transform(
      vl.lookup('id').from(
        vl.data(pst).key('fip').fields('state')
      )
    ).encode(
      vl.tooltip('state')
    ),
    vl.markCircle({stroke: '#5e5e5e', strokeWidth: 2})
      .data(data)
      .encode(
        vl.latitude().fieldQ('latitude'),
        vl.longitude().fieldQ('longitude'),
        vl.color().fieldQ('percentage').scale({'scheme': 'redpurple', 'clamp': true}).title('Percentage of ' + gun),
        vl.size().fieldQ('guns/1M population/year'),
        vl.tooltip([vl.fieldN('state'), vl.fieldQ('percentage'), vl.fieldQ('guns/1M population/year')]),
      )
    )
  .project(vl.projection('albersUsa'));
}

function gunMapFull(dataSet, options) {
  const { g, stf, usa, pst} = dataSet;
  const { gun, yearStart, yearEnd} = options;
  const data = g.params({"gun": gun, "yearStart": yearEnd, "yearEnd": yearEnd})
           .filter((d) => d.gun == gun && d.year >= yearStart && d.year <= yearEnd)
           .groupby('state')
           .rollup(
             {
               count_guns: (d) => op.count(),
               latitude: (d) => op.mean(d.latitude),
               longitude: (d) => op.mean(d.longitude)
             }
           )
          .join(
            g.params({"gun": gun, "yearStart": yearEnd, "yearEnd": yearEnd})
             .filter((d) => d.year >= yearStart && d.year <= yearEnd)
             .groupby('state')
             .rollup(
               {
                 total_guns: (d) => op.count(),
               }
             )
            , 'state'
          )
          .join(stf, 'state')
          .join(
            stp.params({"gun": gun, "yearStart": yearEnd, "yearEnd": yearEnd})
               .filter((d) => d.year >= yearStart && d.year <= yearEnd)
               .groupby('state')
               .rollup({population: (d) => op.mean(d.population)}),
            'state'
          )
          .derive({percentage: (d) => 100 * d.count_guns / d.total_guns, 'guns/1M population/year': (d) => d.count_guns / d.population * 1000000})

  return vl.hconcat(
    gunRect(data).height(500),
    gunMap(data, usa, pst, gun).height(500).width(720)
  ).config({scale: {maxSize: 1500}, view: {stroke: null}})
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

export default gunMapFull;
