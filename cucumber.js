const common = `
  --require src/**/*.js
  --format json:reports/report.json 
  --format message:reports/report.ndjson
  --format html:reports/report.html
  --format summary 
  --format progress-bar 
  --format @cucumber/pretty-formatter
  --format-options ${JSON.stringify({ snippetInterface: 'async-await' })}
  --publish-quiet
  `;

const getWorldParams = () => {
  const params = {
    foo: 'bar',
  };

  return `--world-parameters ${JSON.stringify({ params })}`;
};

module.exports = {
  default: `${common} ${getWorldParams()}`,
};
