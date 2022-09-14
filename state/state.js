const state = {
  ngrokUrl: "",
  /*
  codeObjects: [],
  presentations: [],
  */
  entries: [],
  qrCode: "",
  originalIgnoreList: ['node_modules', 'dom-io', 'qs.js', 
                        'libs/', 'lib/', 'assets/', '.min.js',
                        '.reveal.js', '.bundle.js', '.re.js'],
  ignoreList: [],
  outputPath: "",
  chaptersPath: "",
  curriculumName: "",
  baseUrl: ""
}

module.exports = state;