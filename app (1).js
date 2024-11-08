// Inicializando o SDK do Facebook
window.fbAsyncInit = function() {
    FB.init({
        appId: '5569942208881312', 
        cookie: true,
        xfbml: true,
        version: 'v13.0'
    });

    FB.AppEvents.logPageView();
};

// Carrega o SDK do Facebook de forma assíncrona
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Função para logar com o Facebook
document.getElementById('fb-login-btn').addEventListener('click', function() {
    FB.login(function(response) {
        if (response.status === 'connected') {
            
            obterDadosUsuario();
        } else {
            alert('Falha na autenticação!');
        }
    }, { scope: 'public_profile,email' });
});

// Função para obter dados do usuário
function obterDadosUsuario() {
    FB.api('/me', { fields: 'name,email' }, function(response) {
        document.getElementById('user-info').style.display = 'block';
        document.getElementById('user-name').textContent = response.name;
        document.getElementById('user-email').textContent = response.email;
    });
}
