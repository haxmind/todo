const express = require('express')
const app = express()

app.get('/todo', (request, response) => {
    throw response.send([
        {
            text: "По есть еду"
          },
          {
            text: "Помытб посуду"
          },
          {
            text: "Сделатб уроки"
          },
          {
            text: "Поиглать в манкрафт"
          }
    ]);
})

app.listen(3050) //Я даун, привет, прилажение запускаедся на порту 3050