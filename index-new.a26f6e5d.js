!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a);var c=a("bpxeT"),i=a("2TvXO"),u=(c=a("bpxeT"),a("8MBJY")),o=a("a2hTj"),s=(i=a("2TvXO"),a("dIxxU")),l=function(){"use strict";function t(){e(u)(this,t),this.query="",this.page=1}return e(o)(t,[{key:"getNews",value:function(){var t=this;return e(c)(e(i).mark((function n(){var r,a;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat("https://newsapi.org/v2/everything?q=").concat(t.query,"&").concat("apiKey=bcf8ba2c5fd94471ba7bc35b189c696c","&pageSize=10&page=").concat(t.page),e.next=3,s.default.get(r);case 3:return a=e.sent.data,t.incrementPage(),e.abrupt("return",a);case 6:case"end":return e.stop()}}),n)})))()}},{key:"resetPage",value:function(){this.page=1}},{key:"incrementPage",value:function(){this.page+=1}}]),t}(),p=a("6JpON"),f=a("eK5fP"),d=document.querySelector(".search-form"),h=document.querySelector(".news-wrapper"),v=new(0,f.default)({selector:".load-more1",isHidden:!0}),g=new l;function w(){return(w=e(c)(e(i).mark((function t(n){return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),v.show(),g.query=n.currentTarget.elements.searchQuery.value,g.resetPage(),y(),b(),d.reset();case 7:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function y(){h.innerHTML=""}function b(){return m.apply(this,arguments)}function m(){return(m=e(c)(e(i).mark((function t(){var n;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x();case 3:n=e.sent,h.insertAdjacentHTML("beforeend",n),v.enable(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),q();case 11:case"end":return e.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function x(){return k.apply(this,arguments)}function k(){return(k=e(c)(e(i).mark((function t(){var n,r;return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.getNews();case 3:if(0!==(n=t.sent.articles).length){t.next=6;break}throw new Error(q());case 6:return r=n.reduce((function(e,t){return e+T(t)}),""),t.abrupt("return",r);case 10:t.prev=10,t.t0=t.catch(0),e(p).Notify.failure("Помилка запиту з сервера");case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function T(e){var t=e.title,n=e.author,r=e.url,a=e.urlToImage,c=e.description;return'\n          <div class="article-card">\n    <h2 class="article-title">'.concat(t,'</h2>\n    <h3 class="article-author">').concat(n||"Unknown","</h3>\n    <img src=").concat(a||"https://sun9-43.userapi.com/impf/c637716/v637716451/5754/CZa3BJtbJtg.jpg?size=520x0&quality=95&sign=02df8d0cd8ae78099bc1f50938efd60a",' class="article-img">\n    <p class="article-description">').concat(c,"</p>\n    <a href=").concat(r,' target="_blank" class="article-link">Read more</a>\n  </div>\n  ')}function q(){v.hide(),e(p).Notify.failure("Нажаль по Ващому запиту нічого не знайдено")}d.addEventListener("submit",(function(e){return w.apply(this,arguments)})),v.button.addEventListener("click",b),window.addEventListener("scroll",(function(){var e=document.documentElement,t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;t+r>=n-5&&b()}))}();
//# sourceMappingURL=index-new.a26f6e5d.js.map
