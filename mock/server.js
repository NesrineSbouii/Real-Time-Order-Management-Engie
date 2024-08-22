const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST"]
    }
}).listen(5050);

const categories = ["category1", "category2", "category3"];
const products = [["cat1-product1", "cat1-product2", "cat1-product3"], ["cat2-product1", "cat2-product2", "cat2-product3"], ["cat3-product1", "cat3-product2", "cat3-product3"]];


io.on('connection', (socket) => {
    console.log('A user connected');

    setInterval(() => {
        const categoryIndex = Math.floor(Math.random() * (3 - 0))
        socket.emit('get-orders', `${JSON.stringify({
            id: (Math.random() + 1).toString(36).substring(7),
            product: products[categoryIndex][Math.floor(Math.random() * (3 - 0))],
            price: (Math.random() < 0.5 ? ((1 - Math.random()) * (10000 - 100) + 100) : (Math.random() * (100000 - 100) + 100)).toFixed(3),
            quantity: Math.floor(Math.random() * (100 - 1)),
            category: categories[categoryIndex],
            createdAt: new Date(),
        })}`)
    }, 500);

});



app.listen(3000, () => {
    console.log('listening on *:3000');
});

