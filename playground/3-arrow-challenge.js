const tasks = {
    tasks:[{
        text: 'Grocery shopping',
        completed:true
    },

    {
        text: 'Clean Yard',
        completed:false
    },

    {
        text: 'Film Course',
        completed:false
    },
    

],
    getTasksToDo() {
        return this.tasks.filter((task) =>  task.completed === false)


    }
}



console.log(tasks.getTasksToDo())