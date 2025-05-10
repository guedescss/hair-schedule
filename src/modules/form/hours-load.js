import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours");

export function hoursLoad({ date }){

    const opening = openingHours.map((hour) => {
        //recupera somente a hora
        const [schedulesHour] = hour.split(":");

        // adicionar a hora na data e verificar se está no passado
        const isHourPast = dayjs(date).add(schedulesHour, "hour").isAfter(dayjs());

        return {
            hour,
            available: isHourPast
        }
    })


    // renderiza as horas
    opening.forEach(({ hour, available }) => {
        const li = document.createElement("li");

        li.classList.add("hour");
        li.classList.add(available ? "hour-available" : "hour-unavailable");

        li.textContent = hour;


        if(hour === "09:00"){
            hourHeadderAdd("Manhã");
        }else if(hour === "13:00"){
            hourHeadderAdd("Tarde");
        }else if(hour === "18:00"){
            hourHeadderAdd("Noite");
        }

        hours.append(li)

    })

    hoursClick()
}

function hourHeadderAdd(title){
    const header = document.createElement("li");
    header.classList.add("hour-period");
    header.textContent = title;

    hours.append(header);
}

