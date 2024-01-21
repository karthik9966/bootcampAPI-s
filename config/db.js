const mongo = require("mongoose");

const URI = process.env.Mongo_Uri;

exports.dbConnection = () => {
  mongo
    .connect(process.env.Mongo_Uri)
    .then((con) => console.log(`Connected to DB ${con.connection.host}`))
    .catch((error) =>
      console.log(`Connection to DB failed with error ${error}`)
    );
};
