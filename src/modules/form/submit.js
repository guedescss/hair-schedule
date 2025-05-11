import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form")
const clientName = document.querySelector("#client")
const selectDate = document.querySelector("#date")

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

selectDate.value = inputToday
selectDate.min = inputToday

form.onsubmit = async (event) => {
  event.preventDefault()

  try {
    const name = clientName.value.trim()

    if (!name) {
      return alert("Informe o nome do cliente!")
    }

    const hourSelected = document.querySelector(".hour-selected")

    if (!hourSelected) {
      return alert("Selecione um horário!")
    }

    const [hour] = hourSelected.innerText.split(":")

    const when = dayjs(selectDate.value).add(hour, "hour")

    const id = new Date().getTime().toString()


    // faz o agendamento

    await scheduleNew({
      id,
      name,
      when,
    })

    // recarregar os agendamentos


    await schedulesDay()

    clientName.value = ""
  } catch (error) {
    alert("Não foi possível realizar o agendamento.")
    console.log(error)
  }
}