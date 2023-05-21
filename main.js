const clock = document.querySelector("#time")

let now = new Date();

function hours() {
h = now.getHours()
    if (h < 10) {
       return "0" + h;
    } else {
        return h
    };
};

function minutes() {
    m = now.getMinutes()
        if (m < 10) {
           return "0" + m;
        } else {
            return m
        };
    };

clock.innerHTML = ( hours() + ":" + minutes());