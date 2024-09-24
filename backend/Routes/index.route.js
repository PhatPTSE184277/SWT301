const calculateRoute = require("./calculate.route");

module.exports = (app) => {
    app.use("/calculate-tax", calculateRoute);
}