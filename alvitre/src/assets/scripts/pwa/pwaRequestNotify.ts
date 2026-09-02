
export async function requestNotify() {
        console.log("Solicitando permissões de notificação")
        try {
          const permission = await Notification.requestPermission();
          if (permission === "granted") {
            console.log("Permissão de notificação concedida");
          } else {
            console.log("Permissão já concedida");
          }
        } catch (error) {
          console.error("Erro ao solicitar permissão de notificação:", error);
        }
      };
    