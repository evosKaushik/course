const res = await fetch("http://localhost:4000/api", {
  methods: "PATCH",
});
const data = await res.json();

console.log(data);
