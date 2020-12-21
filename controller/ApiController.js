const Property = require("../models/image");
const multiparty = require("multiparty");
const cloudinary = require("cloudinary");

module.exports = {
    addImage: (req, res) => {
        const form = new multiparty.Form({
            uploadDir: "uploads",
        });
        form.parse(req, function (err, fields, files) {
            const img = files.image[0].path;
            // console.log(img);

            cloudinary.uploader.upload(img, function (result, error) {
                if (error) {
                    console.log("first erroro" + error);
                }

                const im = new Property({ image: result.secure_url });
                const property = im
                    .save()
                    .then(function (data) {
                        console.log(data);
                        res.send("added ");
                    })
                    .catch(function (err) {
                        res.status(401).send("Invalid token");
                        console.log(err.message);
                    });
                // console.log(user.id);
            });
        });
    },
};
