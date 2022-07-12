const todos = [{id:1,todo:'default'}];



module.exports = {
    
    index: (req, res) => {
        res.render('index', { title: 'ToDo app', todos: todos });
    },
    
    viewTodo: (req, res) => {
        const todo = todos.find(todo => todo.id == req.params.id);

        res.render('view-todo', { todo: todo });
    },

    editTodo: (req, res) => {
        const todo = todos.find(todo => todo.id == req.params.id);

        res.render('edit-todo', { todo: todo });
    },

    createTodo: (req, res) => {
        res.render('create');
    },


    postCreate: (req, res) => {
        const todo = req.body;
        todo.id = todos.length + 1;

        todos.push(todo); 

        res.redirect('/');
    },

    putEditTodo: (req, res) => {
        try {
            //Find index of specific object using findIndex method.   
            todoIndex = todos.findIndex((todo => todo.id == req.params.id));
            todos[todoIndex] = req.body;

            // throw new Error('Ova e samo random greska 5555555');

            res.send({
                success: true
            });
        } catch (error) {
            res.send({
                success: false,
                message: error.message
            });
        }
    },

    deleteMethodTodo: (req, res) => { 
        todoIndex = todos.findIndex((todo => todo.id == req.params.id));

        
        todos.splice(todoIndex,1);
        
        res.send({
            success: true
        });


    }
}
