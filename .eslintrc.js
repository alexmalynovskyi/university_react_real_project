module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "browser": true
  },
  "extends": [
    // "plugin:react/recommended",
    // "plugin:react-hooks/recommended"
  ],
  "plugins": [
    "import",
    "react-hooks"
  ],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-console": [
      "error",
      {
        "allow": [
          "warn"
        ]
      }
    ]
  }
}