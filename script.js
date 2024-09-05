const {createApp} = Vue;

createApp({
    data() {
      return {
        newObjectInput: {
          text: '',
          done: false
        },
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
    },
    methods: {
      removeToDo(index) {
        this.toDo.splice(index, 1);
        console.log(index)
      },

      addToDo(inputToDo) {
        // this.toDo.push(this.toDo.text['inputToDo'])
        this.newObjectInput.text = inputToDo;
        this.toDo.push(this.newObjectInput);
        this.inputToDo = '';
        console.log(this.toDo)
      }
    }
  }).mount('#app')