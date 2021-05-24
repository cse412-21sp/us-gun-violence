import React, { useEffect, useRef } from "react";
import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";
import useStore from "../store/index";

const Veg = React.Memo(
  ({ func, name, width, height, options }) => {
    const container = useRef();
    const dataSet = useStore((state) => state.dataset);
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
    useEffect(() => {
      try {
        func({ dataSet, options })
          .render()
          .then((viewElement) => {
            if (typeof window !== undefined && container.current && container) {
              container.current.appendChild(viewElement);
            }
          });
      } catch (err) {
        console.log(err);
      }
    }, [container, container.current]);

    return <div ref={container} tw="rounded-2xl"></div>;
  },
  [props]
);

export default Veg;
