/**
 * Created by john8301 on 3/4/16.
 */
var browserSync = require("browser-sync").create(),
    publicBuildFolder = './public',
    sourceWatchFolder = './src',
    args = process.argv.slice(2);

if (args[0]) {
  publicBuildFolder = args[0];
  console.log("Server Watch folder is set to " + publicBuildFolder);
} else {
  console.log("Server Watch folder is set to default " + publicBuildFolder);
}
if (args[1]) {
  sourceWatchFolder = args[1];
  console.log("Source Watch folder is set to " + sourceWatchFolder);
} else {
  console.log("Source Watch folder is set to default " + sourceWatchFolder);
}

browserSync.watch(sourceWatchFolder + "/**/*.html", null).on("change", browserSync.reload);
browserSync.watch(sourceWatchFolder + "/**/*.css", null).on("change", browserSync.reload);
browserSync.watch(sourceWatchFolder + "/**/*.js", null).on("change", browserSync.reload);

// .init starts the browser-sync server
browserSync.init({
  server: publicBuildFolder
});
browserSync.notify("<span color='green'>Change detected - reloading page...</span>", 1500);
browserSync.reload("*.html", "*.js", "*.css");
