self.addEventListener('push', function (event) {
    const options = {
        body: event.data.text(),
        icon: 'path/to/your/icon.png',
    };

    event.waitUntil(
        self.registration.showNotification('Título da Notificação', options)
    );
});