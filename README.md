# html-webpack-top-banner-plugin

This is an extension plugin for the [webpack4](http://webpack.github.io) plugin [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin) - a plugin that simplifies the creation of HTML files to serve your webpack bundles.

Adds a banner to the top of generated html.

## Installation

Install the plugin with npm:

```bash
$ npm install -d html-webpack-top-banner-plugin
```

Install the plugin with yarn:

```bash
$ yarn add -D html-webpack-top-banner-plugin
```

### Basic Usage

Load the plugin.

```js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackTopBannerPlugin = require('html-webpack-top-banner-plugin');
```

And add it to your webpack config as follows:

```js
plugins: [
    new HtmlWebpackPlugin(),
    new HtmlWebpackTopBannerPlugin('hello world')
]
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
new HtmlWebpackTopBannerPlugin({ banner: 'hello world'} )
new HtmlWebpackTopBannerPlugin({ banner: ['hello world'] })
```

## License

MIT