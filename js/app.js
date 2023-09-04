document.addEventListener('DOMContentLoaded', function () {

    // Manejar cambios en el selector de "Tipo de Bebida"
    var tipoDeBebidaSelect = document.getElementById('product');
    tipoDeBebidaSelect.addEventListener('change', function () {
      var soda = document.getElementById('soda');
      var juice = document.getElementById('juice');
      var soup = document.getElementById('soup');
      var type_juice = document.getElementById('type_juice');
  
      // Habilitar o deshabilitar el selector de "Variante" basado en la selección
      if (tipoDeBebidaSelect.value === 'juice') {
        soda.disabled = true;
        type_juice.disabled = false;
        juice.disabled = false;
        soup.disabled = true;
      } else if(tipoDeBebidaSelect.value === 'soda') {
        soda.disabled = false;
        juice.disabled = true;
        type_juice.disabled = true;
        soup.disabled = true;
      }else if(tipoDeBebidaSelect.value === 'soup') {
        soda.disabled = true;
        juice.disabled = true;
        type_juice.disabled = true;
        soup.disabled = false;
      }
    });
  });

