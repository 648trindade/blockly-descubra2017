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
  return Pond.Advanced.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'Stagno JS'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Salva e collega ai blocchi."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Aiuto</button></td></tr></table>' + Pond.soy.visualization(null, null, opt_ijData) + '<div id="editor"></div>' + Pond.soy.playerTarget(null, null, opt_ijData) + Pond.soy.playerRabbit(null, null, opt_ijData) + Pond.soy.playerCounter(null, null, opt_ijData) + Pond.soy.playerRook(null, null, opt_ijData) + Pond.soy.playerSniper(null, null, opt_ijData) + Pond.soy.playerPendulum(null, null, opt_ijData) + Pond.soy.playerScared(null, null, opt_ijData) + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 3) ? Pond.soy.helpUseScan(null, null, opt_ijData) : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Utilizza il comando \'cannone\' per colpire il bersaglio. Il primo parametro è l\'angolo, il secondo parametro è la gittata. Trova la combinazione giusta.<pre>cannon(0, 70);</pre>' : (opt_ijData.level == 2) ? 'Questo obiettivo deve essere colpito molte volte. Utilizza un ciclo \'while (true)\' per fare qualcosa per un tempo indefinito.<pre>while (true) {\n  ...\n}</pre>' : (opt_ijData.level == 3) ? 'Questo avversario si muove avanti e indietro, il che lo rende difficile da colpire. L\'espressione \'scansione\' restituisce la distanza esatta dall\'avversario nella direzione specificata.<pre>scan(0, 5)</pre>Questa gittata è esattamente ciò di cui ha bisogno il comando \'cannone\' per fare fuoco con precisione.' : (opt_ijData.level == 4) ? 'Questo avversario è troppo lontano per usare il cannone (che ha un limite di 70 metri). Utilizza, invece, il comando \'swim\' per iniziare a nuotare verso l\'avversario e scontrarcisi.<pre>swim(0, 50);</pre>' : (opt_ijData.level == 5) ? 'Anche questo avversario è troppo lontano per usare il cannone. Ma sei troppo debole per sopravvivere a una collisione. Nuota verso l\'avversario mentre la tua posizione orizzontale è minore di 50. Poi fermati (\'stop\') e usa il cannone.<pre>loc_x() &lt; 50</pre><pre>stop();</pre>' : (opt_ijData.level == 6) ? 'Questo avversario si allontanerà quando verrà colpito. Nuota verso di esso se è fuori della tua portata (70 metri).' : (opt_ijData.level == 7) ? 'Il coniglio corre qua e là in modo casuale. Riesci a colpirlo?' : (opt_ijData.level == 8) ? 'Rook torna a combattere! Ma guarda solo il nord, il sud, l\'est e l\'ovest.' : (opt_ijData.level == 9) ? 'Coubter guarda in tutte le direzioni. Riesci a gestire due avversari alla volta?' : (opt_ijData.level == 10) ? 'Il cecchino si nasconde in un angolo in cerca di obiettivi. Buona fortuna. Sul serio.' : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
