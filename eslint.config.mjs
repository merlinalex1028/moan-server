import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  stylistic: {
    overrides: {
      'style/comma-dangle': ['error', 'never']
    }
  }
})
