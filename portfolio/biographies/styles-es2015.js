(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300&display=swap\");\n@charset \"UTF-8\";\n/* You can add global styles to this file, and also import other style files */\n/* --\nCSS Reseter\nCSSLab © 2010 by Jorge Epuñan\nhttp://www.csslab.cl/2010/06/01/css-reseter-v2/\n-- */\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, sub, sup, tt, var, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, dialog, figure, header, footer, hgroup, menu, nav, section, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-weight: inherit;\n  font-style: inherit;\n  font-size: 100%;\n}\narticle, aside, nav, section, dialog, figure, header, footer, hgroup {\n  display: block;\n}\nlegend {\n  display: none;\n}\n:focus {\n  outline: 0;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ncaption, th, td {\n  text-align: left;\n  font-weight: normal;\n}\na img, iframe {\n  border: none;\n}\nul {\n  list-style: none;\n}\ninput, textarea, select, button {\n  font-size: 100%;\n  font-family: inherit;\n}\ninput, select {\n  vertical-align: middle;\n}\nselect {\n  margin: inherit;\n}\nbutton {\n  border: 0;\n  padding: 0;\n  background: transparent;\n  cursor: pointer;\n}\n/* Fixes incorrect placement of numbers in ol's in IE6/7 */\nol {\n  margin-left: 2em;\n}\n/* ========================================= clearfix == */\n.clearfix:after {\n  content: \".\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n.clearfix {\n  display: inline-block;\n}\n* html .clearfix {\n  height: 1%;\n}\n.clearfix {\n  display: block;\n}\n.subtitle-font, h2 {\n  font-family: \"Poppins\", sans-serif;\n  color: #edeaf4;\n  font-size: 0.875rem;\n  font-weight: 300;\n}\n.paragraph-font, p {\n  font-family: \"Poppins\", sans-serif;\n  color: #edeaf4;\n  font-size: 0.875rem;\n  font-weight: 200;\n}\n.col-1 {\n  width: 8.3333333333%;\n}\n.col-2 {\n  width: 16.6666666667%;\n}\n.col-3 {\n  width: 25%;\n}\n.col-4 {\n  width: 33.3333333333%;\n}\n.col-5 {\n  width: 41.6666666667%;\n}\n.col-6 {\n  width: 50%;\n}\n.col-7 {\n  width: 58.3333333333%;\n}\n.col-8 {\n  width: 66.6666666667%;\n}\n.col-9 {\n  width: 75%;\n}\n.col-10 {\n  width: 83.3333333333%;\n}\n.col-11 {\n  width: 91.6666666667%;\n}\n.col-12 {\n  width: 100%;\n}\n@media only screen and (max-width: 768px) {\n  .col-sm-1 {\n    width: 8.3333333333%;\n  }\n\n  .col-sm-2 {\n    width: 16.6666666667%;\n  }\n\n  .col-sm-3 {\n    width: 25%;\n  }\n\n  .col-sm-4 {\n    width: 33.3333333333%;\n  }\n\n  .col-sm-5 {\n    width: 41.6666666667%;\n  }\n\n  .col-sm-6 {\n    width: 50%;\n  }\n\n  .col-sm-7 {\n    width: 58.3333333333%;\n  }\n\n  .col-sm-8 {\n    width: 66.6666666667%;\n  }\n\n  .col-sm-9 {\n    width: 75%;\n  }\n\n  .col-sm-10 {\n    width: 83.3333333333%;\n  }\n\n  .col-sm-11 {\n    width: 91.6666666667%;\n  }\n\n  .col-sm-12 {\n    width: 100%;\n  }\n}\n@media only screen and (min-width: 922px) {\n  .col-md-1 {\n    width: 8.3333333333%;\n  }\n\n  .col-md-2 {\n    width: 16.6666666667%;\n  }\n\n  .col-md-3 {\n    width: 25%;\n  }\n\n  .col-md-4 {\n    width: 33.3333333333%;\n  }\n\n  .col-md-5 {\n    width: 41.6666666667%;\n  }\n\n  .col-md-6 {\n    width: 50%;\n  }\n\n  .col-md-7 {\n    width: 58.3333333333%;\n  }\n\n  .col-md-8 {\n    width: 66.6666666667%;\n  }\n\n  .col-md-9 {\n    width: 75%;\n  }\n\n  .col-md-10 {\n    width: 83.3333333333%;\n  }\n\n  .col-md-11 {\n    width: 91.6666666667%;\n  }\n\n  .col-md-12 {\n    width: 100%;\n  }\n}\nbody {\n  background: linear-gradient(135deg, #EDEAF4, #D7D4DD);\n  height: 100vh;\n  min-height: 500px;\n  display: flex;\n  flex-direction: column;\n}\nimg {\n  width: 100%;\n}\n@media only screen and (max-width: 768px) {\n  body {\n    background: black;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaG9uLm9zb3Jpby9Eb2N1bWVudHMvUGVyc29uYWwvYmlvL3NyYy9hc3NldHMvc2Nzcy9fZm9udC5zY3NzIiwic3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL2pob24ub3NvcmlvL0RvY3VtZW50cy9QZXJzb25hbC9iaW8vc3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL2pob24ub3NvcmlvL0RvY3VtZW50cy9QZXJzb25hbC9iaW8vc3JjL2Fzc2V0cy9zY3NzL19yZXNldGVyLnNjc3MiLCIvVXNlcnMvamhvbi5vc29yaW8vRG9jdW1lbnRzL1BlcnNvbmFsL2Jpby9zcmMvYXNzZXRzL3Njc3MvX2NvbG9yLnNjc3MiLCIvVXNlcnMvamhvbi5vc29yaW8vRG9jdW1lbnRzL1BlcnNvbmFsL2Jpby9zcmMvYXNzZXRzL3Njc3MvX2dyaWQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQVEseUZBQUE7QUNBUixnQkFBZ0I7QUNBaEIsOEVBQUE7QUNBQTs7OztJQUFBO0FBTUE7O0VBRUUsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FGR0Y7QUVBQTtFQUNFLGNBQUE7QUZHRjtBRUFBO0VBQ0UsYUFBQTtBRkdGO0FFQUE7RUFDRSxVQUFBO0FGR0Y7QUVBQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUZHRjtBRUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBRkdGO0FFQUE7RUFDRSxZQUFBO0FGR0Y7QUVBQTtFQUNFLGdCQUFBO0FGR0Y7QUVBQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBRkdGO0FFQUE7RUFDRSxzQkFBQTtBRkdGO0FFQUE7RUFDRSxlQUFBO0FGR0Y7QUVBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FGR0Y7QUVBQSwwREFBQTtBQUNBO0VBQUssZ0JBQUE7QUZJTDtBRURBLDBEQUFBO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUZJRjtBRURBO0VBQVcscUJBQUE7QUZLWDtBRUhBO0VBQWtCLFVBQUE7QUZPbEI7QUVOQTtFQUFXLGNBQUE7QUZVWDtBRHpGQTtFQUNBLGtDQUZlO0VBR2IsY0lOVztFSk9YLG1CQUFBO0VBQ0EsZ0JBQUE7QUM0RkY7QUR6RkE7RUFDRSxrQ0FUYTtFQVViLGNJYlc7RUpjWCxtQkFBQTtFQUNBLGdCQUFBO0FDNEZGO0FJeEdFO0VBQ0Usb0JBQUE7QUoyR0o7QUk1R0U7RUFDRSxxQkFBQTtBSitHSjtBSWhIRTtFQUNFLFVBQUE7QUptSEo7QUlwSEU7RUFDRSxxQkFBQTtBSnVISjtBSXhIRTtFQUNFLHFCQUFBO0FKMkhKO0FJNUhFO0VBQ0UsVUFBQTtBSitISjtBSWhJRTtFQUNFLHFCQUFBO0FKbUlKO0FJcElFO0VBQ0UscUJBQUE7QUp1SUo7QUl4SUU7RUFDRSxVQUFBO0FKMklKO0FJNUlFO0VBQ0UscUJBQUE7QUorSUo7QUloSkU7RUFDRSxxQkFBQTtBSm1KSjtBSXBKRTtFQUNFLFdBQUE7QUp1Sko7QUlsSkE7RUFFSTtJQUNFLG9CQUFBO0VKb0pKOztFSXJKRTtJQUNFLHFCQUFBO0VKd0pKOztFSXpKRTtJQUNFLFVBQUE7RUo0Sko7O0VJN0pFO0lBQ0UscUJBQUE7RUpnS0o7O0VJaktFO0lBQ0UscUJBQUE7RUpvS0o7O0VJcktFO0lBQ0UsVUFBQTtFSndLSjs7RUl6S0U7SUFDRSxxQkFBQTtFSjRLSjs7RUk3S0U7SUFDRSxxQkFBQTtFSmdMSjs7RUlqTEU7SUFDRSxVQUFBO0VKb0xKOztFSXJMRTtJQUNFLHFCQUFBO0VKd0xKOztFSXpMRTtJQUNFLHFCQUFBO0VKNExKOztFSTdMRTtJQUNFLFdBQUE7RUpnTUo7QUFDRjtBSTVMQTtFQUVJO0lBQ0Usb0JBQUE7RUo2TEo7O0VJOUxFO0lBQ0UscUJBQUE7RUppTUo7O0VJbE1FO0lBQ0UsVUFBQTtFSnFNSjs7RUl0TUU7SUFDRSxxQkFBQTtFSnlNSjs7RUkxTUU7SUFDRSxxQkFBQTtFSjZNSjs7RUk5TUU7SUFDRSxVQUFBO0VKaU5KOztFSWxORTtJQUNFLHFCQUFBO0VKcU5KOztFSXRORTtJQUNFLHFCQUFBO0VKeU5KOztFSTFORTtJQUNFLFVBQUE7RUo2Tko7O0VJOU5FO0lBQ0UscUJBQUE7RUppT0o7O0VJbE9FO0lBQ0UscUJBQUE7RUpxT0o7O0VJdE9FO0lBQ0UsV0FBQTtFSnlPSjtBQUNGO0FDclBBO0VBQ0UscURFUHFCO0VGUXJCLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBRHVQRjtBQ3BQQTtFQUNFLFdBQUE7QUR1UEY7QUNwUEE7RUFFRTtJQUNFLGlCQUFBO0VEc1BGO0FBQ0YiLCJmaWxlIjoic3JjL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDAmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IFwiY29sb3JcIjtcblxuJGRlZmF1bHQtZm9udDogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuLnN1YnRpdGxlLWZvbnQge1xuZm9udC1mYW1pbHk6ICRkZWZhdWx0LWZvbnQ7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLnBhcmFncmFwaC1mb250IHtcbiAgZm9udC1mYW1pbHk6ICRkZWZhdWx0LWZvbnQ7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxucHtcbiAgQGV4dGVuZCAucGFyYWdyYXBoLWZvbnQ7XG59XG5cbmgye1xuICBAZXh0ZW5kIC5zdWJ0aXRsZS1mb250O1xufVxuXG4iLCJAY2hhcnNldCBcIlVURi04XCI7XG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4vKiAtLVxuQ1NTIFJlc2V0ZXJcbkNTU0xhYiDCqSAyMDEwIGJ5IEpvcmdlIEVwdcOxYW5cbmh0dHA6Ly93d3cuY3NzbGFiLmNsLzIwMTAvMDYvMDEvY3NzLXJlc2V0ZXItdjIvXG4tLSAqL1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwJmRpc3BsYXk9c3dhcFwiKTtcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLCBhLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsIGRlbCwgZGZuLCBlbSwgZm9udCwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCwgc21hbGwsIHN0cmlrZSwgc3ViLCBzdXAsIHR0LCB2YXIsIGRsLCBkdCwgZGQsIG9sLCB1bCwgbGksIGZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLCB0YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBkaWFsb2csIGZpZ3VyZSwgaGVhZGVyLCBmb290ZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uLCB0aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbn1cblxuYXJ0aWNsZSwgYXNpZGUsIG5hdiwgc2VjdGlvbiwgZGlhbG9nLCBmaWd1cmUsIGhlYWRlciwgZm9vdGVyLCBoZ3JvdXAge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxubGVnZW5kIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuY2FwdGlvbiwgdGgsIHRkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuYSBpbWcsIGlmcmFtZSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5pbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCwgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbn1cblxuaW5wdXQsIHNlbGVjdCB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbnNlbGVjdCB7XG4gIG1hcmdpbjogaW5oZXJpdDtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBGaXhlcyBpbmNvcnJlY3QgcGxhY2VtZW50IG9mIG51bWJlcnMgaW4gb2wncyBpbiBJRTYvNyAqL1xub2wge1xuICBtYXJnaW4tbGVmdDogMmVtO1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBjbGVhcmZpeCA9PSAqL1xuLmNsZWFyZml4OmFmdGVyIHtcbiAgY29udGVudDogXCIuXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDA7XG4gIGNsZWFyOiBib3RoO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5jbGVhcmZpeCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuKiBodG1sIC5jbGVhcmZpeCB7XG4gIGhlaWdodDogMSU7XG59XG5cbi5jbGVhcmZpeCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc3VidGl0bGUtZm9udCwgaDIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjZWRlYWY0O1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4ucGFyYWdyYXBoLWZvbnQsIHAge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjZWRlYWY0O1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG4uY29sLTEge1xuICB3aWR0aDogOC4zMzMzMzMzMzMzJTtcbn1cblxuLmNvbC0yIHtcbiAgd2lkdGg6IDE2LjY2NjY2NjY2NjclO1xufVxuXG4uY29sLTMge1xuICB3aWR0aDogMjUlO1xufVxuXG4uY29sLTQge1xuICB3aWR0aDogMzMuMzMzMzMzMzMzMyU7XG59XG5cbi5jb2wtNSB7XG4gIHdpZHRoOiA0MS42NjY2NjY2NjY3JTtcbn1cblxuLmNvbC02IHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmNvbC03IHtcbiAgd2lkdGg6IDU4LjMzMzMzMzMzMzMlO1xufVxuXG4uY29sLTgge1xuICB3aWR0aDogNjYuNjY2NjY2NjY2NyU7XG59XG5cbi5jb2wtOSB7XG4gIHdpZHRoOiA3NSU7XG59XG5cbi5jb2wtMTAge1xuICB3aWR0aDogODMuMzMzMzMzMzMzMyU7XG59XG5cbi5jb2wtMTEge1xuICB3aWR0aDogOTEuNjY2NjY2NjY2NyU7XG59XG5cbi5jb2wtMTIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29sLXNtLTEge1xuICAgIHdpZHRoOiA4LjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLmNvbC1zbS0yIHtcbiAgICB3aWR0aDogMTYuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAuY29sLXNtLTMge1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cblxuICAuY29sLXNtLTQge1xuICAgIHdpZHRoOiAzMy4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5jb2wtc20tNSB7XG4gICAgd2lkdGg6IDQxLjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLmNvbC1zbS02IHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG5cbiAgLmNvbC1zbS03IHtcbiAgICB3aWR0aDogNTguMzMzMzMzMzMzMyU7XG4gIH1cblxuICAuY29sLXNtLTgge1xuICAgIHdpZHRoOiA2Ni42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wtc20tOSB7XG4gICAgd2lkdGg6IDc1JTtcbiAgfVxuXG4gIC5jb2wtc20tMTAge1xuICAgIHdpZHRoOiA4My4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5jb2wtc20tMTEge1xuICAgIHdpZHRoOiA5MS42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wtc20tMTIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkyMnB4KSB7XG4gIC5jb2wtbWQtMSB7XG4gICAgd2lkdGg6IDguMzMzMzMzMzMzMyU7XG4gIH1cblxuICAuY29sLW1kLTIge1xuICAgIHdpZHRoOiAxNi42NjY2NjY2NjY3JTtcbiAgfVxuXG4gIC5jb2wtbWQtMyB7XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxuXG4gIC5jb2wtbWQtNCB7XG4gICAgd2lkdGg6IDMzLjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLmNvbC1tZC01IHtcbiAgICB3aWR0aDogNDEuNjY2NjY2NjY2NyU7XG4gIH1cblxuICAuY29sLW1kLTYge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cblxuICAuY29sLW1kLTcge1xuICAgIHdpZHRoOiA1OC4zMzMzMzMzMzMzJTtcbiAgfVxuXG4gIC5jb2wtbWQtOCB7XG4gICAgd2lkdGg6IDY2LjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLmNvbC1tZC05IHtcbiAgICB3aWR0aDogNzUlO1xuICB9XG5cbiAgLmNvbC1tZC0xMCB7XG4gICAgd2lkdGg6IDgzLjMzMzMzMzMzMzMlO1xuICB9XG5cbiAgLmNvbC1tZC0xMSB7XG4gICAgd2lkdGg6IDkxLjY2NjY2NjY2NjclO1xuICB9XG5cbiAgLmNvbC1tZC0xMiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjRURFQUY0LCAjRDdENEREKTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWluLWhlaWdodDogNTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICB9XG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGltcG9ydCBcImFzc2V0cy9zY3NzL3Jlc2V0ZXJcIjtcbkBpbXBvcnQgXCJhc3NldHMvc2Nzcy9jb2xvclwiO1xuQGltcG9ydCBcImFzc2V0cy9zY3NzL2ZvbnRcIjtcbkBpbXBvcnQgXCJhc3NldHMvc2Nzcy9ncmlkXCI7XG5AaW1wb3J0IFwiYXNzZXRzL3Njc3MvdmFsdWVzXCI7XG5AaW1wb3J0IFwiYXNzZXRzL3Njc3Mvc2hhcGVzXCI7XG5cblxuYm9keXtcbiAgYmFja2dyb3VuZDogJGdyYWRpZW50LWNvbG9yLWxpZ2h0O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaW1ne1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbW9iaWxlLXNpemUpIHtcblxuICBib2R5e1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICB9XG59XG4iLCIvKiAtLVxuQ1NTIFJlc2V0ZXJcbkNTU0xhYiDCqSAyMDEwIGJ5IEpvcmdlIEVwdcOxYW5cbmh0dHA6Ly93d3cuY3NzbGFiLmNsLzIwMTAvMDYvMDEvY3NzLXJlc2V0ZXItdjIvXG4tLSAqL1xuXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSwgYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLCBkZWwsIGRmbiwgZW0sIGZvbnQsIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsIHNtYWxsLCBzdHJpa2UsIHN1Yiwgc3VwLCB0dCwgdmFyLCBkbCwgZHQsIGRkLCBvbCwgdWwsIGxpLCBmaWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCwgdGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgZGlhbG9nLCBmaWd1cmUsIGhlYWRlciwgZm9vdGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiwgdGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBmb250LXN0eWxlOiBpbmhlcml0O1xuICBmb250LXNpemU6IDEwMCU7XG59XG5cbmFydGljbGUsIGFzaWRlLCBuYXYsIHNlY3Rpb24sIGRpYWxvZywgZmlndXJlLCBoZWFkZXIsIGZvb3RlciwgaGdyb3VwIHtcbiAgZGlzcGxheTpibG9jaztcbn1cblxubGVnZW5kIHtcbiAgZGlzcGxheTpub25lO1xufVxuXG46Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG5jYXB0aW9uLCB0aCwgdGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5hIGltZywgaWZyYW1lIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0LCBidXR0b24ge1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xufVxuXG5pbnB1dCwgc2VsZWN0IHtcbiAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xufVxuXG5zZWxlY3Qge1xuICBtYXJnaW46IGluaGVyaXQ7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogRml4ZXMgaW5jb3JyZWN0IHBsYWNlbWVudCBvZiBudW1iZXJzIGluIG9sJ3MgaW4gSUU2LzcgKi9cbm9sIHsgbWFyZ2luLWxlZnQ6MmVtOyB9XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gY2xlYXJmaXggPT0gKi9cbi5jbGVhcmZpeDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiLlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAwO1xuICBjbGVhcjogYm90aDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uY2xlYXJmaXgge2Rpc3BsYXk6IGlubGluZS1ibG9jazt9XG5cbiogaHRtbCAuY2xlYXJmaXgge2hlaWdodDogMSU7fVxuLmNsZWFyZml4IHtkaXNwbGF5OiBibG9jazt9XG4iLCIkdGV4dC1jb2xvcjogcmdiKDIzNywgMjM0LCAyNDQpO1xuJHByaW1hcnktY29sb3I6IHJnYmEoMTEwLDEwNywxMjEsMjU1KTtcbiRzZWNvbmRhcnktY29sb3I6ICMzNzM2M0Q7XG4kZ3JhZGllbnQtY29sb3ItbGlnaHQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNFREVBRjQsICNEN0Q0REQpO1xuJGdyYWRpZW50LWNvbG9yLWRhcms6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICRwcmltYXJ5LWNvbG9yLCAgJHNlY29uZGFyeS1jb2xvcik7XG5cbiIsIkBpbXBvcnQgXCJ2YWx1ZXNcIjtcblxuQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAxMiB7XG4gIC5jb2wtI3skaX0ge1xuICAgIHdpZHRoOiAgMTAwJS8xMiokaTtcbiAgfVxufVxuXG4vLz09PT09PT09PT09PT09PU1lZGlhUXVlcnkgc3R5bGU9PT09PT09PT09PT09PT1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZS1zaXplKSB7XG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggMTIge1xuICAgIC5jb2wtc20tI3skaX0ge1xuICAgICAgd2lkdGg6ICAxMDAlLzEyKiRpO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR0YWJsZXQtc2l6ZSkge1xuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDEyIHtcbiAgICAuY29sLW1kLSN7JGl9IHtcbiAgICAgIHdpZHRoOiAgMTAwJS8xMiokaTtcbiAgICB9XG4gIH1cbn1cblxuXG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jhon.osorio/Documents/Personal/bio/src/styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map