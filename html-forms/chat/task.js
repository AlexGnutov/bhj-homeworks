window.onload = () => {

    const chatWidget = document.querySelector('.chat-widget');
    const chatWidgetArea = document.querySelector('.chat-widget__area');
    const chatWidgetSide = document.querySelector('.chat-widget__side');
    const chatWidgetInput = document.querySelector('.chat-widget__input');
    const cwMessagesContainer = document.querySelector('.chat-widget__messages-container');
    const chatWidgetMessages = document.querySelector('.chat-widget__messages');

    let botPauseMesIntrv = null;

    // Toggling the chat
    chatWidgetSide.addEventListener('click', function() {
        botPauseMessage();
        chatWidget.classList.toggle('chat-widget_active');        
    });

    chatWidgetArea.addEventListener('click', function(e) {
        if (e.target !== chatWidgetInput) {
            clearInterval(botPauseMesIntrv);
            chatWidget.classList.toggle('chat-widget_active');
        }
    });

    // Keyboard event - Enter
    window.addEventListener('keyup', function(e) {
      if (e.key === "Enter" && document.activeElement === chatWidgetInput && chatWidgetInput.value) {
        clearInterval(botPauseMesIntrv);

        AddMessage(chatWidgetInput.value.trim(), 'user');        
        chatWidgetInput.value = "";
        setTimeout(function() {
            AddMessage(botMessage(), 'bot');
        }, 750);

        botPauseMessage();
      }      
    })

    function botPauseMessage() {
        let time = 0;
        botPauseMesIntrv = setInterval(function() {
            time += 1;
            if (time === 10) {
                AddMessage('Что молчим, корешуля?', 'bot');
                clearInterval(botPauseMesIntrv);
            }
        }, 1000);
    };

    //Send text to a chat - user or bot
    function AddMessage(text, id) {
        if (id === 'user') {
            chatWidgetMessages.innerHTML += 
            `<div class="message message_client">
                <div class="message__time">${getCurrTime()}</div>
                <div class="message__text">${text}</div>
            </div>`;
        } else if (id === 'bot') {
            chatWidgetMessages.innerHTML += 
            `<div class="message">
                <div class="message__time">${getCurrTime()}</div>
                <div class="message__text">${text}</div>
            </div>`
        }
        cwMessagesContainer.scrollTop = cwMessagesContainer.scrollHeight;
    }

    // Get current time XX:XX
    function getCurrTime() {
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();

        if (hours < 10) {hours = "0" + hours}; 
        if (minutes < 10) {minutes = "0" + minutes}; 

        return '' + hours + ':' + minutes;
    }

    // Get random message from bot
    function botMessage() {
        const botMessages = [
            'Доброе утро!',
            'Все ушли на работу...',
            'Завтра звоните, а лучше в пятницу!',
            'Вам не многовато будет?',
            'У нас много клиентов...',
            'Вы рожей не вышли, так чего вошли?',
            'Пять минут!',
            'Псс...псс... кабачок нужен?',
        ];
        return botMessages[Math.floor(Math.random() * (botMessages.length))];
    }

}