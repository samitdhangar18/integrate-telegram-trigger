document.getElementById("appointmentForm").addEventListener("submit", async function(e){
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    date: document.getElementById("date").value
  };

  const response = await fetch("https://YOUR-N8N-URL/webhook/appointment", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  });

  const result = await response.json();
  document.getElementById("response").innerText = result.message;
});
