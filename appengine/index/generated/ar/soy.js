// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

goog.provide('Index.soy');

goog.require('soy');
goog.require('soydata');


Index.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="title">Blockly Games</span><span id="Index_clear">Delete all your solutions?</span></div>';
};


Index.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Index.soy.messages(null, null, opt_ijData) + '<div id="header"><img id="banner" src="index/title-beta.png" height="51" width="244" alt="Blockly Games"><div id="subtitle">Games for tomorrow\'s programmers. &nbsp;' + ((opt_ijData.html) ? '<a href="about.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="about?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'المزيد من المعلومات...</a></div></div><svg height="100%" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="translate(-80,-60)"><svg height="100%" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="none" x=80 y=60><path id="path" d="M 10,15 C 15,60 35,100 50,70 S 80,20 90,85"/></svg>' + Index.soy.appLink({app: 'puzzle', x: 10, y: 15, contentText: 'أحجية'}, null, opt_ijData) + Index.soy.appLink({app: 'maze', x: 16, y: 47, contentText: 'المتاهة'}, null, opt_ijData) + Index.soy.appLink({app: 'bird', x: 29, y: 75, contentText: 'Bird'}, null, opt_ijData) + Index.soy.appLink({app: 'turtle', x: 49, y: 72, contentText: 'السلحفاة'}, null, opt_ijData) + Index.soy.appLink({app: 'movie', x: 64, y: 48, contentText: 'Movie'}, null, opt_ijData) + Index.soy.appLink({app: 'pond-basic', x: 83, y: 53, contentText: 'Pond'}, null, opt_ijData) + Index.soy.appLink({app: 'pond-advanced', x: 90, y: 85, contentText: 'JS Pond'}, null, opt_ijData) + '</g></svg><select id="languageMenu"></select><p id="clearDataPara" style="visibility: hidden">هل ترغب في البدأ من جديد؟<button class="secondary" id="clearData">Clear data</span></button></p>';
};


Index.soy.appLink = function(opt_data, opt_ignored, opt_ijData) {
  return '<svg height="150" width="160" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="' + soy.$$escapeHtml(opt_data.x) + '%" y="' + soy.$$escapeHtml(opt_data.y) + '%"><path d="M 41.11,98.89 A 55 55 0 1 1 118.89,98.89" class="gaugeBack" id="back-' + soy.$$escapeHtml(opt_data.app) + '" /><g class="icon" id="icon-' + soy.$$escapeHtml(opt_data.app) + '"><circle cx=80 cy=60 r=50 class="iconBack" /><image xlink:href="index/' + soy.$$escapeHtml(opt_data.app) + '.png" height="100" width="100" x=30 y=10 />' + ((opt_ijData.html) ? '<a xlink:href="' + soy.$$escapeHtml(opt_data.app) + '.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a xlink:href="' + soy.$$escapeHtml(opt_data.app) + '?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + '<circle cx=80 cy=60 r=50 class="iconBorder" /><path d="M 21.11,98.89 A 55 55 0 1 1 21.11,98.89" class="gaugeFront" id="gauge-' + soy.$$escapeHtml(opt_data.app) + '" /><text x="80" y="135">' + soy.$$escapeHtml(opt_data.contentText) + '</text></a></g></svg>';
};
