import dayjs from "dayjs";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");
const clientName = document.getElementById("client");

// date atual pro input

const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// carrega a data atual
selectedDate.value = inputToday
//define o min do input date

selectedDate.min = inputToday


form.onsubmit = (event) => {
    event.preventDefault();

    try {
        // recuperando o nome do cliente
        const name = clientName.value.trim()

        if(!name){
            return alert("Preencha o nome do cliente")
        }

        //recuperar o horario selecionado
        const hourSelected = document.querySelector(".hour-selected")

        if(!hourSelected){
            return alert("Selecione um horário")
        }
        
        // recupera somente a  hora

        const [hour] = hourSelected.innerText.split(":");

        // inserir a hora na data 
        const when = dayjs(selectedDate.value).add(hour, "hour");


        // gerar um id 

        const id = new Date().getTime();


    } catch (error) {
        alert("Erro ao realizar o agendamento");
        console.error(error);
        
    }

}