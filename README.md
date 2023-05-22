![](/clock.png)
# live-wallpaper-clock


Clock wallpaper that updates every minute.
Runs at system startup with no command prompt visible. Tested with Windows 10 and vs Code.

### Steps to install and make it run seamlessly.  
| Step | Action | Links |
|---|---|---|
| 1 | Make sure you have node.js downloaded and installed | [Download node.js](https://nodejs.org/en/download) | 
| 2 | Download NirCmd (hides CMD window)  | [Download NirCmd](https://www.nirsoft.net/utils/nircmd.html), <br> [ Slightly better explanation how to install ](https://whatsoftware.com/hidden-start-runs-batch-files-silently-without-flickering-console/) |
| 3 | Create .bat file using note pad. Have included mine as an examples or you can modify them as you like. First one has to point to the second one and all the paths have to be spot on.  | [1st .bat](/start-live-clock-wallpaper.bat), <br> [2nd .bat](/live-clock-wallpaper.bat) |
| 4 | Once you have your .bat files, right click on the first one and select 'create shortcut' |   |
| 5 | Open run (press: Windows key + r) and open: shell:startup. Copy your shortcut file in startup folder |  |
| | This stage it should work. Please test it as you go along. You can see in the 2nd .bat the structure of the file path, just by opening/running that file your, wallpaper should work. it might take up to a minute for the time to change as new image is being created only when system clock changes. |  |

### Bugs and future plans.

- Border is animated when run normally but for some reason this program always takes a picture with same colours.
- Once program sets wallpaper image you need to go in to personalize menus and choose a fit. Windows might want to stretch or repeat it.



### Credits

Took most of the inspiration from YouTuber [Daniel Bark.](https://www.youtube.com/@danielbark) <br> [His video](https://www.youtube.com/watch?v=pATKLIrf-p0) and  [ GitHub repository ](https://github.com/danba340/wallpaper-clock)
 

 #### Any comments or suggestion feel free to contact me.


