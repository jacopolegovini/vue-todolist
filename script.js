const {createApp} = Vue;

createApp({
    data() {
      return {
        // newObjectInput: {
        //   text: '',
        //   done: false
        // },
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

      addToDo(content) {
        const newObjectInput = {
          text: content,
          done: false
        };
        this.toDo.push(newObjectInput);
        this.inputToDo = '';
        console.log(this.toDo)
      }
    }
  }).mount('#app')