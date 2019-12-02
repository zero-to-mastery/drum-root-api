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
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      '<form action="uploadsound" method="post" enctype="multipart/form-data">'
    );
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write("</form>");
    return res.end();
  }
};

module.exports = { uploadSound };
