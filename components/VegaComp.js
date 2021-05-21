import React, { useEffect } from "react";
import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";

const Veg = ({ func, name }) => {
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
  useEffect(() => {
    func()
      .render()
      .then((viewElement) => {
        // render returns a promise to a DOM element containing the chart
        // viewElement.value contains the Vega View object instance
        document.getElementById(name).appendChild(viewElement);
      });
  }, []);
  return <div id={name}></div>;
};
export default Veg;
