// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  },
};
