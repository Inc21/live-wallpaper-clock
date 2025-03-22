import {getWallpaper, setWallpaper} from 'wallpaper';
import nodeHtmlToImage from 'node-html-to-image'
import fs from "fs";
import * as cron from 'node-cron'

// Read the HTML template once
let htmlTemplate = fs.readFileSync("./index.html", "utf-8");

cron.schedule("* * * * *", () => {
    // Get current time for accurate clock
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    // Generate a random rotation for the gradient (0-360 degrees)
    const randomRotation = Math.floor(Math.random() * 360);
    
    // Inject custom styles for a unique snapshot
    const modifiedHtml = htmlTemplate.replace(
        '<style>',
        `<style>
        /* Injected style for unique snapshot */
        .container {
            filter: hue-rotate(${randomRotation}deg) !important;
        }`
    );

    nodeHtmlToImage({
        output: "./image.png",
        html: modifiedHtml,
        content: {
            currentTime: `${hours}:${minutes}`
        }
    }).then(() => {
        console.log(`Image created successfully - rotation: ${randomRotation}°`);
        setWallpaper("./image.png").then(err => {
            if(err){
                throw err;
            }
            console.log("Wallpaper set successfully");
        });
    });
});