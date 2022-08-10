// ==UserScript==
// @name GOGdb & GG on GOG
// @homepageURL https://github.com/gog-integrator/gogdb-and-gg-on-gog
// @downloadURL https://github.com/gog-integrator/gogdb-and-gg-on-gog/raw/main/gogdb-and-gg-on-gog.user.js
// @description Add GOG Database and GOG Games links to the GOG store
// @version 1.2
// @author GOG Integrator, Yepoleb
// @license CC0
// @namespace https://github.com/gog-integrator/gogdb-and-gg-on-gog
// @icon https://gogalaxy.gog-statics.com/build/images/logo-gog-galaxy-mobile@2x-797469db.png
// @run-at document-end
// @match https://www.gog.com/game/*
// @match https://www.gog.com/*/game/*
// @grant unsafeWindow
// ==/UserScript==

var product_id = unsafeWindow.productcardData.cardProductId;

var product_title = encodeURIComponent(unsafeWindow.document.getElementsByClassName("productcard-basics__title")[0].textContent);

var gogdb_element = document.createElement("a");
gogdb_element.textContent = "GOGdb";
gogdb_element.setAttribute("href", "https://www.gogdb.org/product/" + product_id + "#downloads");
gogdb_element.className = "details__link";
gogdb_element.setAttribute("target", "_blank");

var separator_element = document.createTextNode(", ");

var links_xpath = "//a[@class='details__link' and contains(@href, 'gog.com/forum')]";
var links_element = document.evaluate(links_xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.parentNode;
links_element.appendChild(separator_element);
links_element.appendChild(gogdb_element);

var gg_element = document.createElement("a");
gg_element.textContent = "Download";
gg_element.setAttribute("href", "https://gog-games.com/search/" + product_title + "/1/relevance/asc/any");
gg_element.className = "details__link";
gg_element.setAttribute("target", "_blank");

var separator_element = document.createTextNode(", ");

var links_xpath = "//a[@class='details__link' and contains(@href, 'gog.com/forum')]";
var links_element = document.evaluate(links_xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.parentNode;
links_element.appendChild(separator_element);
links_element.appendChild(gg_element);
