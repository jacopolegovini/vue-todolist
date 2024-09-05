const {createApp} = Vue;

createApp({
    data() {
      return {
        toDo: [
          {
            text: 'Comprare il pane',
            done: false
          },
          {
            text: 'Passare dal meccanico',
            done: false
          },
          {
            text: 'Ritornare il pacco',
            done: true
          },
          {
            text: 'Giocare alla play',
            done: false
          },
          {
            text: 'Fare esercizi',
            done: false
          },
          {
            text: 'Comprare regalo',
            done: false
          }
        ]
      }
    }
  }).mount('#app')