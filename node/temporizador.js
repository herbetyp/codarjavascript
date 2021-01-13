const schedule = require('node-schedule')

const task1 = schedule.scheduleJob('*/5 * 00 * * 3', function () { 
    console.log('Executando tarefa 1!', new Date().getSeconds())
 })

setTimeout(function() {
    task1.cancel()
    console.log('Cacelando Tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 00
regra.second = 30

const task2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})
