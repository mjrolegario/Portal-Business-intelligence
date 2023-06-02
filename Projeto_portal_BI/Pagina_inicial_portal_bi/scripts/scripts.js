jQuery("#botao_pagina_inicial").mousemove (()=>{	
	jQuery("#botao_pagina_inicial").css("text-decoration", "underline")
})
jQuery('#botao_pagina_inicial').mouseleave (()=>{	
	jQuery("#botao_pagina_inicial").css("text-decoration", "none")
})
jQuery("#botao_dashboards").mousemove (()=>{	
	jQuery("#botao_dashboards").css("text-decoration", "underline")
})
jQuery('#botao_dashboards').mouseleave (()=>{	
	jQuery("#botao_dashboards").css("text-decoration", "none")
})
jQuery("#botao_calculadora").mousemove (()=>{	
	jQuery("#botao_calculadora").css("text-decoration", "underline")
})
jQuery('#botao_calculadora').mouseleave (()=>{	
	jQuery("#botao_calculadora").css("text-decoration", "none")
})

$(document).ready(function() {
	$('select[name="lista_dasboards"]').change(function() {
		var selectedOption = $(this).val();
		if (selectedOption === 'comercial') {
			alert('Opção selecionada: Comercial');
			
		}
	});
});
function openPopup1() {
	var width = screen.width;
  	var height = screen.height;
  	var popup = window.open("dashboard_comercial.html", "popup", "width=" + width + ", height=" + height + ", left=0, top=0");
  	popup.moveTo(0, 0);
  }
  
  function openPopup2() {
	var width = screen.width;
  	var height = screen.height;
  	var popup = window.open("vendas.html", "popup", "width=" + width + ", height=" + height + ", left=0, top=0");
  	popup.moveTo(0, 0);
  }

  

