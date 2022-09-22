        const todoList = {
            items: [
            {
                text: 'Завершить текущий челлендж',
                completed: true,
            },
            {
                text: 'Отдохнуть во время перерыва',
                completed: false,
            },
            {
                text: 'Помочь напарнику понять код',
                completed: false,
            },
            {
                text: 'Выиграть в мафию',
                completed: false,
            },
        ],
          

            printAll () {
            for (let i = 0; i < this.items.length; i ++) {
                this.print (i)
            }
           
        },
        

        add (text) {
           
            this.items.unshift({
                text: text,
                completed: false
            })
        },

        remove (text) {
            this.items.splice(text, 1)
            
        },

        print (text) {

           if (this.items[text].completed === true) {
                    console.log('[x]', this.items[text].text)
                }else {
                    console.log('[ ]', this.items[text].text)
                }
        },

        complete (text) {
            this.items[text].completed = true
        },

        };
         todoList.complete(2)
         todoList.printAll()
       
        
        