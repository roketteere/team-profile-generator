const fs = require("fs");

module.exports = () => {
  fs.writeFile(
    "out/style.css",
    `.team-heading{
    background-color: rgb(228, 69, 69);
}
.card-header{
    background-color: rgb(76, 131, 233);
}

h3, h2,h1, i{
    color:white;

}`,
    (err) => {
      err
        ? console.log("Error", err)
        : console.log("style.css written successfully!");
    }
  );
};
