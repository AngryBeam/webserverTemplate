var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
      type: String,       //Field data type
      required: true,     //Field validation
      minlength: 1,
      trim: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    completedAt: {
      type: Number,
      default: null
    }
  }); 

module.exports = {Todo};


/* var otherTodo = new Todo({
  text: 'Something to do'
});

otherTodo.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save', e);
});

var ObjectID = require('mongodb');

if(!ObjectID.isValid(id)){
  res.status(404).send();
}else{
  Todo.findById(id).then((data) => {
    res.status(404).send();
  }).catch(e){
    res.status(400).send();
  }
}
*/