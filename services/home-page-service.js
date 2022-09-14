class HomePageService {
    generateHomePageHTML() {
        return (`
<!doctype html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="bootstrap/css/bootstrap.css">
        <script src="bootstrap/js/bootstrap.js"></script>
        <link rel="stylesheet" href="main.css">
        <meta  charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Curriculum project generator</title>
    </head>
    <body>
    <div id="loading-bar" class="loading-bar">
      <div class="loading-bar progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
      </div>
      <div class="loading-text">Generating project. Please wait.</div>
    </div>
    </body>
</html>
        `);
    }
}

module.exports = HomePageService;