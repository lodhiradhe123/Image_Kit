
const imageKit = require("../routes/imagekit");

async function uploadFile(req,res) {
    try {
      const result = await imageKit.upload({
        file: req.files.image.data, // base64 encoded image
        fileName:req.files.image.name // required
      });
      res.send(result.url)
      console.log("File URL:", result.url);
      console.log("File ID:", result.fileId);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  }

  module.exports =uploadFile;