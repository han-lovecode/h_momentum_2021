const quotes = [
    {
        quote : "쫄지마라 쫄지마!!",
        author : "동백이엄마"
    },
    {
        quote : "Be a magnet for joy, love and focus.",
        author : "Dr Roopleen"
    },
    {
        quote : "Take it easy.",
        author : "someone"
    },
    {
        quote : "Don't let mental blocks control you.",
        author : "Dr Roopleen"
    },
    {
        quote : "Deep breath!",
        author : "somebody"
    },
    {
        quote : "훨훨 살아보자!",
        author : "동백이엄마"
    },
    {
        quote : "인생은 취미로 사는 거야!",
        author : "han"
    },
    {
        quote : "다 못해도 괜찮아, 내일하면 됨",
        author : "han"
    },
    {
        quote : "나를 항상 격려해주기, 어떤 상황에서도!",
        author : "han"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;