use("todoApp");
// db.todos.insertOne({ title: "Completed MongoDB", isCompleted: false });

const todosCollection = db.getCollection("todos");

for (let i = 0; i <= 10; i++) {
  todosCollection.insertOne({
    title: "Task " + i,
    isCompleted: Math.random() > 0.5 ? true : false,
  });
}
console.log(db.todos.find());
