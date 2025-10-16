"use strict";

window.addEventListener("load", function () {
  if (window._flutter && window._flutter.loader) {
    window._flutter.loader.loadEntrypoint({
      onEntrypointLoaded: function (engineInitializer) {
        engineInitializer.initializeEngine().then(function (appRunner) {
          appRunner.runApp();
        });
      },
    });
  } else {
    console.error("Flutter Web Engine not found!");
  }
});
