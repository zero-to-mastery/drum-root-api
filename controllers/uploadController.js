const formidable = require("formidable");

const uploadSound = (req, res) => {
   var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
      res.write(
        "Save sound file to db functionality not yet implemented."
      );
      res.end();
      //not yet implemented functionality to save uploaded sound to db
    });
};

module.exports = { uploadSound };
