/* Modernizr */
(function (){
	if (Modernizr.flexbox) {
    	// alert('si soporta Flexblox');
	} else{
    	// alert('No soporta Flexbox');
    	var body = $("body");
    	body.append('<div class="browser-out"><img class="browser-out__logo"src="img/browser-out/ecuare.png" alt="EcuaRe"><h1 class="browser-out__title">Su navegador no está actualizado.</h1><p class="browser-out__text">Tiene fallos de seguridad conocidos y podría no mostrar las características de este y otros sitios web.</p><p>OBTENER EL MÁS RECIENTE:</p><a href="https://support.microsoft.com/es-es/help/17621/internet-explorer-downloads" target="_blank" class="browser-out__link"><img class="browser-out__img"src="img/browser-out/internet-explorer.png" alt="Internet Explorer"></a><a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank" class="browser-out__link"><img class="browser-out__img"src="img/browser-out/google-chrome.png" alt="Google Chrome"></a><a href="https://www.mozilla.org/es-ES/firefox/new/" target="_blank" class="browser-out__link"><img class="browser-out__img"src="img/browser-out/mozilla-firefox.png" alt="Mozilla Firefox"></a><a href="http://www.opera.com/es" target="_blank" class="browser-out__link"><img class="browser-out__img"src="img/browser-out/opera.png" alt="Opera"></a><a href="https://support.apple.com/downloads/safari" target="_blank" class="browser-out__link"><img class="browser-out__img"src="img/browser-out/safari.png" alt="Safari"></a></div>');
	}
})()
