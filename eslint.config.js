//  @ts-check

import { tanstackConfig } from "@tanstack/eslint-config"

export default [
  {
    ignores: [".output/**", ".tanstack/**", "node_modules/**"],
  },
  ...tanstackConfig,
]
