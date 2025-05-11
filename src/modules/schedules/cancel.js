import { schedulesDay } from "./load.js"
import  { scheduleCancel } from "../../services/schedules-cancel.js"
const periods = document.querySelectorAll('.period');

// gera evento de click para cada lista (manhã, tarde e noite)
periods.forEach((period) => {
    // capturar o evento de click na lista
    period.addEventListener("click", async (event) => {
        if(event.target.classList.contains("cancel-icon")){

            // obtem a li pai do elemento clicado
            const item = event.target.closest("li")
            const { id } = item.dataset

            if (id) {
                const isConfirm = confirm(
                    "Tem certeza que quer cancelar o agendamento?"

                )
            if (isConfirm) {
                await scheduleCancel({id})
                schedulesDay() 
            }
            }
        }
    })
})