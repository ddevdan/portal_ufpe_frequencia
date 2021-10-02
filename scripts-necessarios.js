//script para não fechar o formulario se n tiver enviado o q preencheu
$(function () {
  var formObject = $('.new_materia, .edit_materia');
  formObject.data('original_serialized_form', formObject.serialize());

  $(':submit').click(function () {
    window.onbeforeunload = null;
  });

  window.onbeforeunload = function () {
    if (formObject.data('original_serialized_form') !== formObject.serialize()) {
      return "As mudanças deste formulário não foram salvas. Saindo desta página, todas as mudanças serão perdidas.";
    }
  };
});

//script para desabilitar o botao de submit, para q duplicatas n sejam enviadas.
function desabilitar(form) {
  form.myButton.disabled = true; return true;
}

//script para verificar se ta online


function start() {
  setTimeout('start()', 1000)
  if (navigator.onLine) {
      console.log('we have internet')
      
     /* var fakeButton = document.getElementById("fake-button");
      var trueButton = document.getElementById("true-button");
      var semInternet = document.getElementById("semInternet");
      trueButton.style.zIndex = "0"
      fakeButton.style.display = "none";
      trueButton.style.display = "block";*/
      
      
  }
  else {
    console.log('n temos internet aaaaaa :(')
      var fakeButton = document.getElementById("fake-button");
      var trueButton = document.getElementById("true-button");
      var limparDados = document.getElementById("limpar-dados");
      fakeButton.style.display = "block";
      trueButton.style.display = "none";
      
  
  };

}

function semInternet() {
  var semInternet = document.getElementById("semInternet");
  semInternet.style.display = "block"
  semInternet.innerHTML ="<b>Você está sem internet.</b><br>Durante as <b>próximas 24 horas</b> nós cuidaremos direitinho do que você preencheu, não se preocupe.<br>Mas <b>não esquece de voltar aqui quando tiver internet, ok?</b><br>Até daqui a pouco 😘<br><span onclick='location.reload()' style='text-decoration: underline; cursor:pointer;'>Clique para recarregar a página.</span>"
}



