// Mini App MediaRadar UA: статична вітрина. Кнопка «Почати» відкриває бот (у Telegram — без виходу з застосунку).
(function () {
  var BOT = "https://t.me/mediaradar_ua_bot";
  var tg = window.Telegram && window.Telegram.WebApp;
  var start = document.body.getAttribute("data-start") || "app";
  var link = BOT + "?start=" + start;
  document.querySelectorAll("a.start").forEach(function (a) { a.href = link; });
  if (!tg || !tg.initData) return;                       // відкрито в браузері — звичайні посилання
  tg.ready(); tg.expand();
  function go(e) { if (e) e.preventDefault(); tg.openTelegramLink(link); tg.close(); }
  document.querySelectorAll("a.start").forEach(function (a) { a.addEventListener("click", go); });
  if (tg.MainButton) { tg.MainButton.setText("Почати — 7 днів безкоштовно"); tg.MainButton.onClick(go); tg.MainButton.show();
    var cta = document.querySelector(".cta"); if (cta) cta.style.display = "none"; }
})();
