import { schedulesDay } from "../schedules/load"

const selectedDate = document.querySelector("#date")

selectedDate.onchange = () => schedulesDay()