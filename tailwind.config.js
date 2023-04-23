module.exports = {
  mode: 'jit',
  content: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    fontFamily: {
      sans: ['"Titillium Web"', '"Baloo 2"']
    },
    extend: {
      dropShadow: {
        'base': '0 0 25px rgba(var(--th-title-10))',
      },
      colors: {
        green: {
          '60': '#F2FFF0',
          '30': '#D7F5D1',
          '10': '#3A3A38',
          description: '#6C757D',
          text: '#FFFFFF'
        },
        blue: {
          '60': '#F2F9FF',
          '30': '#D3EAF7',
          '10': '#331CA3',
          description: '#6C757D',
          text: '#FFFFFF'
        },
        dark: {
          '60': '#1A1A1A',
          '30': '#3C3C3C',
          '10': '#F0F0F0',
          description: '#B3B3B3',
          text: '#181718'
        },
        'th-bg-60': 'var(--th-bg-60)',
        'th-bg-30': 'var(--th-bg-30)',
        'th-title-10': 'var(--th-title-10)',
        'th-bg-button': 'var(--th-bg-button)',
        'th-text': 'var(--th-text)',
        'th-description': 'var(--th-description)',
        'th-short-description': 'var(--th-short-description)',
      },
    }
  }
}
