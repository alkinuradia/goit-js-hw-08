function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var r,o,i,a,f,u,c=0,l=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function x(e){return c=e,f=setTimeout(j,t),l?y(e):a}function S(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-c>=i}function j(){var e=v();if(S(e))return O(e);f=setTimeout(j,function(e){var n=t-(e-u);return d?m(n,i-(e-c)):n}(e))}function O(e){return f=void 0,p&&r?y(e):(r=o=void 0,a)}function T(){var e=v(),n=S(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return x(u);if(d)return f=setTimeout(j,t),y(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=g(t)||0,b(n)&&(l=!!n.leading,i=(d="maxWait"in n)?s(g(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},T.flush=function(){return void 0===f?a:O(v())},T}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};const y={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")};y.form.addEventListener("input",e(t)((function(e){const t={email:y.email.value,textarea:y.textarea.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),y.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(y.email.value=e.email,y.textarea.value=e.textarea)}();
//# sourceMappingURL=03-feedback.75aeeb3f.js.map
