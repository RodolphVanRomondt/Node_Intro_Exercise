const fs = require("fs")
const axios = require("axios");
const { execPath } = require("process");

function cat(path) {

    fs.readFile(path, "utf8", function (err, data) {

        if (err) {
            console.log(err);
            process.exit(1);
        }

        console.log(data);
        process.exit(0);
    })
}


async function webCat(url) {

    try {
        let res = await axios.get(url)
        console.log(res.data);
        process.exit(0);
    }
    catch (e) {
        console.log(`Error fetching ${process.argv[2]}:`);
        console.log("  Error: Request failed with status code 404");
        process.exit(1);
    }
}


if (process.argv[2].slice(-4) === ".txt") {
    cat(process.argv[2]);
}
if (process.argv[2].slice(0, 4) === "http") {
    webCat(process.argv[2]);
}
