const buttons = document.querySelectorAll("li button");

buttons.forEach((button) => {
  button.addEventListener("click", async () => {
    const id = button.dataset.id;

    const res = await fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    });
    await res.json();
    window.location.reload();
  });
});
