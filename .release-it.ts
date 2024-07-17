import type { Config } from "release-it";

export default {
  $schema: "https://unpkg.com/release-it@17/schema/release-it.json",
  git: {
    commitMessage: "chore: release v${version}",
    commit: true,
    tag: true,
    push: true,
  },
  github: {
    release: true,
    tokenRef: "GITHUB_TOKEN",
  },
  npm: {
    publish: false,
  },
  hooks: {
    "before:init": "npm run format:fix",
  },
} as Config;
