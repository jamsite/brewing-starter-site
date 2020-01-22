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
    '@jamsite/plugin-transform-wp',
    '@jamsite/plugin-robots-txt',
    '@jamsite/plugin-sitemap-xml'
  ],
  errors: {
    '404': '/__errors/404.html'
  },
  static: {
    // https://github.co  m/zeit/serve-handler#redirects-array
    redirects: [{
      source: '/beta',
      destination: '/',
      type: 301
    }],
    // https://github.com/zeit/serve-handler#headers-array
    headers: [
      {
        source: '**/*',
        headers: [{
          key: 'X-MY-MAYA',
          value: 'MAYA!'
        }]
      }
    ]
  }
}
