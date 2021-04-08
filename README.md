# Setting Webhook

```
curl -F "url=<VERCEL_URL>/start_bot" https://api.telegram.org/bot<TELEGRAM_API_TOKEN>/setWebhook
```

# Things to note

1. VERCEL_URL is the deployed url. Example : `https://quiz-bot-oa7ycrd1h-shubhambharti201.vercel.app/`
2. VERCEL_URL deployed url should be working for the bot to work properly in telegram.
3. TELEGRAM_API_TOKEN is in config file.
