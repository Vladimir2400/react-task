import './timer.css';
import React from "react";

function TimerShow() {
    const endDate = new Date("Dec 24, 2022 12:00:00").getTime();
    const timer = setInterval(function() {
        let now = new Date().getTime();
        let t = endDate - now;
        if (t >= 0) {
            let days = Math.floor(t / (1000 * 60 * 60 * 24));
            let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            let secs = Math.floor((t % (1000 * 60)) / 1000);
                document.getElementById("timer-days").innerHTML = days +
                    "<span class='label'>Дней</span>";

                document.getElementById("timer-hours").innerHTML = ("0"+hours).slice(-2) +
                    "<span class='label'>Часов</span>";

                document.getElementById("timer-mins").innerHTML = ("0"+mins).slice(-2) +
                    "<span class='label'>Минут</span>";

                document.getElementById("timer-secs").innerHTML = ("0"+secs).slice(-2) +
                    "<span class='label'>Секунд</span>";

        } else {
            document.getElementById("timer").innerHTML = "The countdown is over!";
        }

        /* Здесь идет остальная часть кода JavaScript. */
    }, 1000);
    return (
        <div className="container">
            <p id="timer">
                <p className="main__content-menu-stock-p"><h4>До начала акции осталось:</h4></p>
                <span className="time" id="timer-days"></span>
                <span className="time" id="timer-hours"></span>
                <span className="time" id="timer-mins"></span>
                <span className="time" id="timer-secs"></span>
            </p>
        </div>
    );
}
export default TimerShow