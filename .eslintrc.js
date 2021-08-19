module.exports = {
  root: true,
  extends: ['plugin:vue/recommended', 'standard'],
  rules: {
    semi: ['error', 'always'],
    'comma-dangle': 'off',
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 3,
      }
    }]
  }
};