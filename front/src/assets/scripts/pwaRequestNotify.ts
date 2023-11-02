
export async function requestNotify() {
        console.log("Solicitando permissões de notificação")

        try {
          const permission = await Notification.requestPermission();
          if (permission === "granted") {
            console.log("Permissão de notificação concedida");
  /*           registryUserOnServer()
            showNotification(); */
          } else {
            console.log("Permissão já concedida");
          /*   registryUserOnServer(); */
          }
        } catch (error) {
          console.error("Erro ao solicitar permissão de notificação:", error);
        }
      };
    
      // Chamar a função acima em algum ponto do seu código, por exemplo, quando a página carrega.
    