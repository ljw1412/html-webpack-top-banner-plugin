# html-webpack-top-banner-plugin

This is an extension plugin for the [webpack 5/4](http://webpack.github.io) plugin [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin) - a plugin that simplifies the creation of HTML files to serve your webpack bundles.

Adds a banner to the top of generated html.

## Installation

### webpack 5

Install the plugin with npm:

```bash
$ npm install -d html-webpack-top-banner-plugin
```

```bash
$ yarn add -D html-webpack-top-banner-plugin
```

### webpack 4

Install the plugin with npm:

```bash
$ npm install -d html-webpack-top-banner-plugin@4
```

```bash
$ yarn add -D html-webpack-top-banner-plugin@4
```

### Basic Usage

Load the plugin.

```js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackTopBannerPlugin = require('html-webpack-top-banner-plugin')
```

And add it to your webpack config as follows:

```js
plugins: [
  new HtmlWebpackPlugin(),
  new HtmlWebpackTopBannerPlugin('hello world'),
]
```

You will get the following results:

```html
<!--
hello world
-->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Webpack App</title>
  </head>
  <body></body>
</html>
```

#### Options

```js
new HtmlWebpackTopBannerPlugin(options)

options: string | string[] |
    { banner: string | string[] }
```

Enter a string or array as follows:

```js
new HtmlWebpackTopBannerPlugin('hello world')
// If you enter an array, it will be automatically converted to a string separated by '\n'.
new HtmlWebpackTopBannerPlugin(['hello world'])
```

Or enter a object as follows:

_(New features will be added in the future)_

```js
new HtmlWebpackTopBannerPlugin({ banner: 'hello world' })
new HtmlWebpackTopBannerPlugin({ banner: ['hello world'] })
```

## License

MIT
