// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('Pond.Advanced.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');
goog.require('Pond.soy');


Pond.Advanced.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return Pond.soy.messages(null, null, opt_ijData) + '<div style="display: none"></div>';
};


Pond.Advanced.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Pond.Advanced.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'JS rybník'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Uložiť a zdieľať odkaz na tento program."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Pomoc</button></td></tr></table>' + Pond.soy.visualization(null, null, opt_ijData) + '<div id="editor"></div>' + Pond.soy.playerTarget(null, null, opt_ijData) + Pond.soy.playerRabbit(null, null, opt_ijData) + Pond.soy.playerCounter(null, null, opt_ijData) + Pond.soy.playerRook(null, null, opt_ijData) + Pond.soy.playerSniper(null, null, opt_ijData) + Pond.soy.playerPendulum(null, null, opt_ijData) + Pond.soy.playerScared(null, null, opt_ijData) + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 3) ? Pond.soy.helpUseScan(null, null, opt_ijData) : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Na zasiahnutie cieľa použi príkaz "kanón". Prvý parameter je uhol, druhý parameter je sila. Nájdi správnu kombináciu oboch.<pre>cannon(0, 70);</pre>' : (opt_ijData.level == 2) ? 'Tento cieľ treba zasiahnuť veľakrát. Slučka "kým je (pravda)" opakuje niečo donekonečna.<pre>while (true) {\n  ...\n}</pre>' : (opt_ijData.level == 3) ? 'Tento protivník sa pohybuje tam a späť, a je ho ťažko zasiahnuť. Výraz "skenovať" vracia presnú silu na zasiahnutie oponenta v danom smere.<pre>scan(0, 5)</pre>Presne takúto silu potrebuje príkaz "kanón" na presný zásah.' : (opt_ijData.level == 4) ? 'Tento protivník nie je v dosahu kanóna (ktorý má limit 70 metrov). Namiesto toho použi príkaz "plávať" a nabúraj do protivníka.<pre>swim(0, 50);</pre>' : (opt_ijData.level == 5) ? 'Tento protivník je tiež mimo dosah kanóna. Navyše, si slabý a náraz neprežiješ. Plávaj smerom k protivníkovi, kým tvoja vodorovná poloha je menej ako 50. Potom použi "zastaviť" a "kanón".<pre>loc_x() &lt; 50</pre><pre>stop();</pre>' : (opt_ijData.level == 6) ? 'Tento protivník po zásahu začne utekať. Ak je mimo dosahu, plávaj mu oproti.' : (opt_ijData.level == 7) ? 'Králik pobehuje náhodne sem a tam. Trafíš ho?' : (opt_ijData.level == 8) ? 'Veža vracia úder! Ale pozerať sa môže len na sever, juh, východ a západ.' : (opt_ijData.level == 9) ? 'Counter má výhľad všetkými smermi. Ustriehneš dvoch protivníkov súčasne?' : (opt_ijData.level == 10) ? 'Sniper sa skrýva v rohu a hľadá terče. Veľa šťastia. Budeš ho potrebovať.' : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
