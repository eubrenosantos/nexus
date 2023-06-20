const url =
  "https://copyjornadhoje.bubbleapps.io/version-test/api/1.1/wf/sendemail";


  export function SenderEmail(){

    let nome = document.querySelector("#nome").value;
    let email = document.querySelector("#email").value;
    let empresa = document.querySelector("#nomedaempresa").value;
    let telefone = document.querySelector("#telefone").value;
    let projeto = document.querySelector("#projeto").value;

    const data = {
      infos: `
      Nome: ${nome}
      Email : ${email}
      Nome da empresa: ${empresa}
      Telefone: ${telefone}
      Projeto: ${projeto}
      
      `
          };


    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    ;

   

   if(nome && empresa && telefone && projeto){

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        alert("Sucesso, nossa equipe entrará em contato com você!");
        document.querySelector("#nome").value = "";
        document.querySelector("#nomedaempresa").value = ""
        document.querySelector("#telefone").value = "";
        document.querySelector("#projeto").value = "";
        document.querySelector("#email").value = "";
      })
      .catch((error) => {
        console.error("Ocorreu um erro:", error);
      });






   }else{
    alert("Preencha todos os campos")
   }


  } 

  export function Focar(input){

    const inputElement = document.querySelector(input)
    inputElement.focus();
    alert("Preencha o formulário ao lado e um de nossos especialistas entrará em contato!")

  }


