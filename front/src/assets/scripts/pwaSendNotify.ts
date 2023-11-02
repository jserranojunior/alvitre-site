
export  function layoutNotify(swRegistration:any) {
        if (swRegistration) {
          const options = {
            body: '',
            icon: '/static/logo/png/alvitre.png',
            image: '/static/logo/png/logo-alvitre-dark-mode-retangulo-arrendodado.png',
            badge: '/static/logo/png/logo-circulo-de-fundo.png',
            actions: [
              { action: 'close', title: 'Fechar' }
            ],
            requireInteraction: true,
            silent: false,
            timestamp: Date.now()
          };
          return options
        }
      };

