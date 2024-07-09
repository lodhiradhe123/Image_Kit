var express = require("express");
var router = express.Router();
const ImageKit = require("imagekit");


router.get("/", function (req, res, next) {
  res.render("index");
});

const  imageKit= new ImageKit({
  publicKey: "public_7cPE2v09OZ4ljObGNGk3KkKHv4w=",
  privateKey: "private_lulp6ID673CQDZpkec2qlHwjzlY=",
  urlEndpoint: "https://ik.imagekit.io/vtd0qp9vb",
});
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



router.post("/upload", async (req, res, next) => {
  console.log(req.files);
 uploadFile(req, res);
  
});

module.exports = router;
