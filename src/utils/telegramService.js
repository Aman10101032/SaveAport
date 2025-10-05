// src/utils/telegramService.js

export const getEnvVars = () => {
    if (typeof import.meta !== 'undefined' && import.meta.env) {
        return import.meta.env;
    }
    if (typeof process !== 'undefined' && process.env) {
        return process.env;
    }
    return typeof window !== 'undefined' && window.__env ? window.__env : {};
};

export const getTelegramBotUsername = () => {
    const env = getEnvVars();

    const botUsername =
        env.VITE_TELEGRAM_BOT_USERNAME ||
        env.REACT_APP_TELEGRAM_BOT_USERNAME ||
        env.TELEGRAM_BOT_USERNAME ||
        localStorage.getItem('dev_telegram_bot');

    return botUsername;
};

export const requestBotUsername = () => {
    const userInput = window.prompt(
        'Telegram bot username not found in .env. Enter bot username (e.g., MyBot):'
    );

    if (!userInput) return null;

    const username = userInput.trim();
    try {
        localStorage.setItem('dev_telegram_bot', username);
    } catch (e) {
        console.warn('Cannot save to localStorage:', e);
    }

    return username;
};

export const createTelegramUrl = (message, botUsername = null) => {
    const username = botUsername || getTelegramBotUsername();
    if (!username) return null;

    const cleanUsername = username.replace('@', '');
    return `https://t.me/${cleanUsername}?start=${encodeURIComponent(message)}`;
};

// Отправка сообщения через Telegram
export const sendTelegramMessage = (message, options = {}) => {
    const { fallbackToPrompt = true } = options;

    let botUsername = getTelegramBotUsername();

    if (!botUsername && fallbackToPrompt) {
        botUsername = requestBotUsername();
    }

    if (!botUsername) {
        console.error('Telegram bot username not available');
        return false;
    }

    const url = createTelegramUrl(message, botUsername);
    if (url) {
        window.open(url, '_blank', 'noopener,noreferrer');
        return true;
    }

    return false;
};

export const telegramService = {
    contactTeam: () => sendTelegramMessage('Hello, I want to contact your team!'),

    becomePartner: () => sendTelegramMessage("I'd like to become a partner!"),

    askQuestion: () => sendTelegramMessage('I have a question about your project.'),

    sendFormData: (formData) => {
        const message = `📩 New message from Solution page:\n\n👤 Name: ${formData.name}\n📧 Email: ${formData.email}\n💬 Message: ${formData.msg}`;
        return sendTelegramMessage(message);
    }
};