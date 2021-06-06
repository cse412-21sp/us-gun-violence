var fs = require("fs");
fs.readFile("us-10m.json", function (err, data) {
  if (err) {
    console.log(err);
  }
  const us = JSON.parse(data);
  const fipcode = "53";
  const geomeFip = us.objects.counties.geometries.filter((code) => {
    return String(code.id).substring(0, 2) == fipcode;
  });
  const output = {
    type: "Topology",
    transform: {
      scale: [0.003589294092944858, 0.0005371535195261037],
      translate: [-179.1473400003406, 17.67439566600018],
    },
    objects: {
      counties: {
        type: "GeometryCollection",
        geometries: [
          { type: "MultiPolygon", arcs: [], id: 22051 },
          { type: null, id: 23023 },
          { type: null, id: 37031 },
          { type: null, id: 42045 },
          ...geomeFip,
        ],
      },
    },
    arcs: us.arcs,
  };
  console.log(output);
  fs.writeFile("./wa.json", JSON.stringify(output), "utf8", function (err) {
    if (err) {
      console.log(err);
    }
  });
});
