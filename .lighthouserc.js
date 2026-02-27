module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:1313/'],
      startServerCommand: 'npm run serve:built',
      numberOfRuns: 1,
    },
    assert: {
      assertions: {
        'categories:performance':    ['error', { minScore: 0.90 }],
        'categories:accessibility':  ['error', { minScore: 1.00 }],
        'categories:best-practices': ['error', { minScore: 0.93 }],
        'categories:seo':            ['error', { minScore: 0.90 }],
        'first-contentful-paint':    ['error', { maxNumericValue: 1500 }],
        'largest-contentful-paint':  ['error', { maxNumericValue: 1500 }],
        'speed-index':               ['error', { maxNumericValue: 3000 }],
      },
    },
  },
};
