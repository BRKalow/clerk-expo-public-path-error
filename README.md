# Expo / clerk-js issue

1. Install:

```
npm i
npm run ios
```

2. Load in simulator

3. Observe error:

```
 ERROR  Error: Automatic publicPath is not supported in this browser, js engine: hermes
 ERROR  Invariant Violation: "main" has not been registered. This can happen if:
* Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.
* A module failed to load due to an error and `AppRegistry.registerComponent` wasn't called., js engine: hermes
› Stopped server
```
