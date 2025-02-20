const plugins = [
  "babel-plugin-transform-typescript-metadata",
  ["@babel/plugin-proposal-decorators", { legacy: true }],
  [
    'babel-plugin-transform-import', {
      "@mui/material" : {
        transform: "@mui/material/${member}",
        preventFullImport: true,
      },
      "@mui/icons-material" : {
        transform: "@mui/icons-material/${member}",
        preventFullImport: true,
      },
    }
  ],
  
];

module.exports = { plugins };