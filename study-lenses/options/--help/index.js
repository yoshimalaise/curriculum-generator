/*



things i did not finish last night
- load docs into plugins as well in server/load-plugins
- pass a copy of lenses into each lens/option
- use that in the help


*/

"use strict";

const renderPluginGuide = require("./render-plugin-guide.js");

const renderMainGuide = require("./render-main-guide.js");

const helpOption = async ({ config, resource, lenses, options }) => {
  // console.log("help!");

  if (resource.info) {
    resource.info.ext = ".html";
  } else {
    resource.info = { ext: ".html" };
  }

  if (config.queryValue) {
    resource.content = await renderPluginGuide({ config, lenses, options });
  } else {
    resource.content = await renderMainGuide({
      config,
      resource,
      lenses,
      options,
    });
  }

  return {
    resource,
  };
};

module.exports = helpOption;
