var form = document.getElementById("my-form");

async function handleSubmit(event) {
   event.preventDefault();
   var status = document.getElementById("status");
   var data = new FormData(event.target);
   fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
         'Accept': 'application/json'
      }
   }).then(response => {
      status.classList.add('success');
      status.innerHTML = "Obrigado pela mensagem! Entraremos em contato em breve.";
      form.reset()
   }).catch(error => {
      status.classList.add('error');
      status.innerHTML = "Oops! Ocorreu um erro. Tente novamente."
   });
}
form.addEventListener("submit", handleSubmit)