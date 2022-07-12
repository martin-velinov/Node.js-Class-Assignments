const users = [{id: 1, name: 'Martin', lastname: 'Velinov', ssn: '12345'}];



module.exports = {
    index: (req, res) => {
        res.render('index', { title: 'CRUD app', users: users });
    },
    
    viewUser: (req, res) => {
        const user = users.find(user => user.id == req.params.id);

        res.render('view-user', { user: user });
    },

    editUser: (req, res) => {
        const user = users.find(user => user.id == req.params.id);

        res.render('edit-user', { user: user });
    },

    createUser: (req, res) => {
        res.render('create');
    },


    postCreate: (req, res) => {
        const user = req.body;
        user.id = users.length + 1;

        users.push(user); 

        res.redirect('/');
    },

    putEditUser: (req, res) => {
        try {
            //Find index of specific object using findIndex method.   
            userIndex = users.findIndex((user => user.id == req.params.id));
            users[userIndex] = req.body;

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

    deleteMethodUser: (req, res) => { 
        userIndex = users.findIndex((user => user.id == req.params.id));

        
        users.splice(userIndex,1);
        
        res.send({
            success: true
        });


    }
}
