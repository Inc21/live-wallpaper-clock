 import {getWallpaper, setWallpaper} from 'wallpaper';
import nodeHtmlToImage from 'node-html-to-image'
import fs from "fs";
import * as cron from 'node-cron'

const html = fs.readFileSync("./index.html", (err, html) => {
    if(err) {
        throw err
    }
    return html;
})

cron.schedule("* * * * *", () => {
    nodeHtmlToImage({
        output: "./image.png",
        html: html.toString("utf-8")
    }).then(() => {
        console.log("Image created successfully")
        setWallpaper("./image.png").then(err => {
            if(err){
                throw err;
            }
            console.log("Wallpaper set successfully")
        }) 
    });
})