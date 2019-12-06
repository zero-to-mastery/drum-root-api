const formidable = require("formidable");

const uploadSound = (req, res) => {
  if (req.method == "POST") {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
      res.write(
        `Uploaded ${files.filetoupload.name}. Save sound file to db functionality not yet implemented.`
      );
      res.end();
      //functionality to save uploaded sound to db not yet implemented
    });
  }
};

module.exports = { uploadSound };
