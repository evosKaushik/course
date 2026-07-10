setInterval(async () => {
  const response = await fetch("https://procodrr.com/");
  console.log(response.status);
}, 100);
