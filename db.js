const mongoose = require("mongoose");

mongoose
    .connect(
        `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cctech.1xdk0.mongodb.net/<dbname>?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        }
    )
    .then(function () {
        console.log("Mongo db compass connected");
    })
    .catch(function (err) {
        console.log(err.message);
    });
