```javascript
function connectToWebSocketServer(url) {
  const socket = new WebSocket(url);

  socket.onopen = function() {
    console.log('Соединение установлено');
    // здесь вы можете добавить логику для обработки успешного подключения
  };

  socket.onmessage = function(event) {
    console.log('Получены данные: ' + event.data);
    // здесь вы можете обрабатывать полученные данные
  };

  socket.onclose = function() {
    console.log('Соединение закрыто');
    // здесь вы можете добавить логику для обработки закрытия соединения
  };

  socket.onerror = function(error) {
    console.error('Произошла ошибка: ' + error.message);
    // здесь вы можете обрабатывать ошибки соединения
  };

  // Возвращает объект WebSocket, чтобы можно было использовать его в других частях приложения
  return socket;
}

// Пример использования
const socket = connectToWebSocketServer('ws://example.com/socket');

// Теперь вы можете использовать этот socket для отправки данных на сервер или для дальнейших обработок
```

Обратите внимание, что в этом примере использованы события WebSocket, такие как `onopen`, `onmessage`, `onclose` и `onerror`, чтобы добавить логику для установки соединения, получения данных, закрытия соединения и обработки ошибок соответственно.
