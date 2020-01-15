module.exports = {
  scripts: {
    build: {
      webpack: [
        'npx webpack'
      ],
      rollup: [
        'npx rollup -c'
      ]
    },
    'start-dev': {
      webpack: [
        'npx webpack -w'
      ],
      rollup: [
        'npx rollup -cw'
      ]
    }
  },
  plugins: [
    '@jamsite/plugin-helmet',
    {
      resolve: '@jamsite/plugin-source-wp',
      options: {
        // refreshCache: true,
        endpoint: 'https://example.com/wp-json/wp/v2',
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
    },
    '@jamsite/plugin-transform-wp'
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
