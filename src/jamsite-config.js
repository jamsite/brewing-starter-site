module.exports = {
  scripts: {
    // commands to run before % jamsite build
    // can be executed directly % jamsite build:webpack
    build: {
      webpack: [
        'npm run webpack:bundle'
      ],
      rollup: [
        'npm run rollup:bundle'
      ]
    },
    // commands to run before % jamsite --watch
    watch: {
      webpack: [
        'npm run webpack:dev'
      ],
      rollup: [
        'npm run rollup:dev'
      ]
    }
  },
  plugins: [
    '@jamsite/handlebars-helpers-autoloader',
    '@jamsite/transform-wp',
    '@jamsite/source-github',
    '@jamsite/source-gist',
    {
      resolve: '@jamsite/source-wp',
      options: {
        endpoint: 'https://cms.tokenguru.net/dansk-casino/wp-json/wp/v2',
        exclude: ['post', 'page', 'attachment']
      }
    }, {
      resolve: '@jamsite/source-drupal',
      enabled: false,
      options: {
        baseUrl: 'https://live-contentacms.pantheonsite.io/',
        apiBase: 'api', // optional, defaults to `jsonapi`
        concurrentFileRequests: 60,
        basicAuth: {
          username: process.env.BASIC_AUTH_USERNAME,
          password: process.env.BASIC_AUTH_PASSWORD,
        },
        params: {
          'api-key': process.env.API_KEY
        },
        headers: {
          Host: 'https://example.com'
        },
        secret: process.env.PREVIEW_SECRET
      }
    }
  ],
  errors: {
    404: '/__errors/404.html',
    '50x': '/__errors/50x.html'
  },
  redirects: [{
    source: '/beta',
    destination: '/',
    type: 301
  }],
  headers: [{
    source: '**/*.js',
    headers: [{
      key: '',
      value: ''
    }]
  }, {
    source: '**/*',
    headers: [{
      key: 'Content-Security-Policy',
      value: 'default-src "none"; img-src "self"; script-src "self"; style-src "self"'
    }, {
      key: 'X-Content-Type-Options',
      value: 'nosniff'
    }, {
      key: 'X-Frame-Option',
      value: 'DENY'
    }, {
      key: 'Strict-Transport-Security',
      value: 'max-age=63072000; includeSubDomains; preload'
    }, {
      key: 'Public-Key-Pins',
      value: 'max-age=1296000; includeSubDomains; pin-sha256="WoiWRyIOVNa9ihaBciRSC7XHjliYS9VwUGOIud4PB18=";pin-sha256="YLh1dUR9y6Kja30RrAn7JKnbQG/uEtLMkBgFF2Fuihg="; pin-sha256="P0NdsLTMT6LSwXLuSEHNlvg4WxtWb5rIJhfZMyeXUE0="'
    }]
  }]
}
