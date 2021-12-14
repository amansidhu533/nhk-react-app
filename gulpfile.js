"use strict";

const gitRevSync = require("git-rev-sync");
const gulp = require("gulp");
const $ = require("gulp-load-plugins")();

const pkg = require("./package.json");

gulp.task("deploy", () => {
  return gulp.src("dist/**/*").pipe(
    $.ghPages({
      branch: process.env.DEPLOY_BRANCH || "gh-pages",
      remoteUrl: `git@github.com:${pkg.repository}.git`,
      message: `Deploy ${gitRevSync.short()} from v${pkg.version}`,
    })
  );
});
