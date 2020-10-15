var users = [
    {id: 1 , name: 'Duy'},
    {id: 2, name: 'Huy'},
    {id: 3, name: 'Nam'},
    {id: 4, name: 'Name'}
];
module.exports.index = function (req,res) {
    res.render('users/user' ,{
        users : users
    })
};// export ra thằng index
module.exports.search = function (req,res) {
    var q = req.query.q ;
    var filter = users.filter( (user)=>
      user.name.indexOf(q) !== -1
    );
    res.render('users/user',{
        users : filter
    } )
};
module.exports.create = function(req,res)  {
    res.render('users/create');
};
module.exports.Postcreate = function (req,res)  {
    users.push(req.body);
    res.redirect('/user');

};