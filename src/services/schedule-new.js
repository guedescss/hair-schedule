import { apiConfig } from "./api-config.js"

export async function scheduleNew({ id, name, when }) {
  try {

    // faz a requisição para enviar os dados do agendamento
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    })

    // exibe uma mensagem de sucesso
    alert("Agendamento realizado com sucesso!")
  } catch (error) {
    console.error(error)
    alert(
      "Não foi possível realizar o agendamento. Tente novamente mais tarde."
    )
  }
}