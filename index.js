class HtmlWebpackTopBannerPlugin {
  banner = ''

  constructor(options) {
    const banner = this.getBannerFromOptions(options)
    this.banner = `<!--${banner.join('\n')}-->\n`
  }

  getBannerFromOptions(options) {
    const isArray = Array.isArray(options)
    if (isArray) {
      return options
    } else if (typeof options === 'string') {
      return [options]
    } else if (typeof options === 'object') {
      return this.getBannerFromOptions(options.banner)
    }
    return []
  }

  apply(compiler) {
    compiler.hooks.compilation.tap(
      'HtmlWebpackTopBannerPlugin',
      (compilation, callback) => {
        compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tap(
          'HtmlWebpackTopBannerPlugin',
          (htmlPluginData, callback) => {
            htmlPluginData.html = this.banner + htmlPluginData.html
            return htmlPluginData
          }
        )
      }
    )
  }
}

module.exports = HtmlWebpackTopBannerPlugin
