const state = require("../state/state.js");

class ProblemsController {
  constructor(server) {
    server.get("/api/problems", (req, res) => {
      res.json( {entries: state.entries});
    });
  }
}

module.exports = ProblemsController;
