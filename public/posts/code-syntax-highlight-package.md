https://www.npmjs.com/package/highlight.js?activeTab=readme
https://www.npmjs.com/package/@highlightjs/vue-plugin
```
yarn add highlight.js
```

#### Node.js on the Server
The bare minimum to auto-detect the language and highlight some code.
```
hljs = require('highlight.js/lib/common');
```

To highlight code with a specific language, use highlight:
```
html = hljs.highlight('<h1>Hello World!</h1>', {language: 'xml'}).value
```

#### Using with Vue.js
See highlightjs/vue-plugin for a simple Vue plugin that works great with Highlight.js.

An example of vue-plugin in action:
```
  <div id="app">
    <!-- bind to a data property named `code` -->
    <highlightjs autodetect :code="code" />
    <!-- or literal code works as well -->
    <highlightjs language='javascript' code="var x = 5;" />
  </div>
```