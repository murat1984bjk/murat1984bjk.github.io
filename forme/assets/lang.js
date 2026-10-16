// Turkish or English: ?lang= first, then the visitor's earlier choice, then the browser language.
(function () {
  var root = document.documentElement;
  function stored() { try { return localStorage.getItem('forme-lang'); } catch (e) { return null; } }
  function set(lang, remember) {
    root.classList.toggle('en', lang === 'en');
    root.lang = lang;
    if (remember) { try { localStorage.setItem('forme-lang', lang); } catch (e) {} }
    var buttons = document.querySelectorAll('[data-set-lang]');
    for (var i = 0; i < buttons.length; i++) buttons[i].setAttribute('aria-pressed', String(buttons[i].getAttribute('data-set-lang') === lang));
    var title = root.getAttribute('data-title-' + lang);
    if (title) document.title = title;
  }
  var query = new URLSearchParams(location.search).get('lang');
  var initial = query === 'tr' || query === 'en' ? query : stored() || ((navigator.language || 'tr').toLowerCase().indexOf('tr') === 0 ? 'tr' : 'en');
  set(initial, false);
  document.addEventListener('DOMContentLoaded', function () {
    set(initial, false);
    var buttons = document.querySelectorAll('[data-set-lang]');
    for (var i = 0; i < buttons.length; i++) buttons[i].addEventListener('click', function () { set(this.getAttribute('data-set-lang'), true); });
  });
})();

(function(){function reveal(){var id;try{id=decodeURIComponent(location.hash.slice(1));}catch(e){return;}var node=document.getElementById(id);if(node&&node.tagName==='DETAILS'){node.open=true;}}window.addEventListener('hashchange',reveal);document.addEventListener('DOMContentLoaded',reveal);})();
