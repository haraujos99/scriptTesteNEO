  function popSubmit (){    
    if(document.getElementById(`inputData`).value == "" || document.getElementById(`selectMotivoAgendamento`).value == "" || document.getElementById(`selectRetorno`).value ==""){
      return window.alert("Preencha todas as informações!");  
    }

    window.alert("Agendamento realizado!");  
  }

  function preencheData(){
    document.getElementById('inputDataText').value = document.getElementById('inputData').value;
  }

  function mask(o, f) {
    setTimeout(function() {
      var v = mphone(o.value);
      if (v != o.value) {
        o.value = v;
      }
    }, 1);
  }
  
  function mphone(v) {
    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
      r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
      r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
      r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
      r = r.replace(/^(\d*)/, "($1");
    }
    return r;
  }
