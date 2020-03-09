'use strict'

const path = require('path')
const fs = require('fs')
const rimraf = require('rimraf')
const assert = require('assert')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackTopBannerPlugin = require('../')

function resolve(...pathname) {
  return path.resolve(__dirname, ...pathname)
}

const entry = resolve('entry.js')
const outputDir = resolve('dist')
const htmlFile = resolve('dist', 'index.html')

function getConfig(options) {
  return {
    entry,
    output: { path: outputDir },
    plugins: [new HtmlWebpackPlugin(), new HtmlWebpackTopBannerPlugin(options)]
  }
}

describe('html-webpack-top-banner-plugin', ctx => {
  afterEach(() => {
    rimraf.sync(outputDir)
  })

  it('string', done => {
    const banner = 'hello world'
    webpack(getConfig(banner), (err, stats) => {
      if (err || stats.hasErrors()) {
        assert(false, err)
        return done(err)
      }
      const html = fs.readFileSync(htmlFile, 'utf-8')
      assert(/^<\!--hello world-->/.test(html))
      done()
    })
  })

  it('array', done => {
    const banner = ['', 'hello world', '']
    webpack(getConfig(banner), (err, stats) => {
      if (err || stats.hasErrors()) {
        assert(false, err)
        return done(err)
      }
      const html = fs.readFileSync(htmlFile, 'utf-8')
      assert(/^<\!--\nhello world\n-->/.test(html))
      done()
    })
  })

  it('object<banner:string>', done => {
    const banner = { banner: 'hello world' }
    webpack(getConfig(banner), (err, stats) => {
      if (err || stats.hasErrors()) {
        assert(false, err)
        return done(err)
      }
      const html = fs.readFileSync(htmlFile, 'utf-8')
      assert(/^<\!--hello world-->/.test(html))
      done()
    })
  })

  it('object<banner:array>', done => {
    const banner = { banner: ['', 'hello world', ''] }
    webpack(getConfig(banner), (err, stats) => {
      if (err || stats.hasErrors()) {
        assert(false, err)
        return done(err)
      }
      const html = fs.readFileSync(htmlFile, 'utf-8')
      assert(/^<\!--\nhello world\n-->/.test(html))
      done()
    })
  })
})
