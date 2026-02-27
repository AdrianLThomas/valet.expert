module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:1313/',
        'http://localhost:1313/about-me',
        'http://localhost:1313/services-and-pricing',
        'http://localhost:1313/areas-covered',
        'http://localhost:1313/contact-me',
      ],
      startServerCommand: 'npm run serve:built',
      numberOfRuns: 1,
    },
    assert: {
      assertions: {
        'categories:performance':    ['error', { minScore: 0.90 }],
        'categories:accessibility':  ['error', { minScore: 1.00 }],
        'categories:best-practices': ['error', { minScore: 1.00 }],
        'categories:seo':            ['error', { minScore: 0.90 }],
        'first-contentful-paint':    ['error', { maxNumericValue: 1600 }],
        'largest-contentful-paint':  ['error', { maxNumericValue: 2100 }],
        'speed-index':               ['error', { maxNumericValue: 3000 }],
      },
    },
  },
};
