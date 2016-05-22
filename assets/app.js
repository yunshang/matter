/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _vue = __webpack_require__(3);

	var _vue2 = _interopRequireDefault(_vue);

	var _componentsAppVue = __webpack_require__(5);

	var _componentsAppVue2 = _interopRequireDefault(_componentsAppVue);

	_vue2["default"].config.debug = true;
	var vm = new _vue2["default"]({
	  el: document.getElementsByTagName('body')[0],
	  components: {
	    app: _componentsAppVue2["default"]
	  }
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/*!
	 * Vue.js v1.0.24
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */'use strict';function set(obj,key,val){if(hasOwn(obj,key)){obj[key] = val;return;}if(obj._isVue){set(obj._data,key,val);return;}var ob=obj.__ob__;if(!ob){obj[key] = val;return;}ob.convert(key,val);ob.dep.notify();if(ob.vms){var i=ob.vms.length;while(i--) {var vm=ob.vms[i];vm._proxy(key);vm._digest();}}return val;} /**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */function del(obj,key){if(!hasOwn(obj,key)){return;}delete obj[key];var ob=obj.__ob__;if(!ob){if(obj._isVue){delete obj._data[key];obj._digest();}return;}ob.dep.notify();if(ob.vms){var i=ob.vms.length;while(i--) {var vm=ob.vms[i];vm._unproxy(key);vm._digest();}}}var hasOwnProperty=Object.prototype.hasOwnProperty; /**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */function hasOwn(obj,key){return hasOwnProperty.call(obj,key);} /**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */var literalValueRE=/^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;function isLiteral(exp){return literalValueRE.test(exp);} /**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */function isReserved(str){var c=(str + '').charCodeAt(0);return c === 0x24 || c === 0x5F;} /**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */function _toString(value){return value == null?'':value.toString();} /**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */function toNumber(value){if(typeof value !== 'string'){return value;}else {var parsed=Number(value);return isNaN(parsed)?value:parsed;}} /**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */function toBoolean(value){return value === 'true'?true:value === 'false'?false:value;} /**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */function stripQuotes(str){var a=str.charCodeAt(0);var b=str.charCodeAt(str.length - 1);return a === b && (a === 0x22 || a === 0x27)?str.slice(1,-1):str;} /**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */var camelizeRE=/-(\w)/g;function camelize(str){return str.replace(camelizeRE,toUpper);}function toUpper(_,c){return c?c.toUpperCase():'';} /**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */var hyphenateRE=/([a-z\d])([A-Z])/g;function hyphenate(str){return str.replace(hyphenateRE,'$1-$2').toLowerCase();} /**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */var classifyRE=/(?:^|[-_\/])(\w)/g;function classify(str){return str.replace(classifyRE,toUpper);} /**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */function bind(fn,ctx){return function(a){var l=arguments.length;return l?l > 1?fn.apply(ctx,arguments):fn.call(ctx,a):fn.call(ctx);};} /**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */function toArray(list,start){start = start || 0;var i=list.length - start;var ret=new Array(i);while(i--) {ret[i] = list[i + start];}return ret;} /**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */function extend(to,from){var keys=Object.keys(from);var i=keys.length;while(i--) {to[keys[i]] = from[keys[i]];}return to;} /**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */function isObject(obj){return obj !== null && typeof obj === 'object';} /**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */var toString=Object.prototype.toString;var OBJECT_STRING='[object Object]';function isPlainObject(obj){return toString.call(obj) === OBJECT_STRING;} /**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */var isArray=Array.isArray; /**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */function def(obj,key,val,enumerable){Object.defineProperty(obj,key,{value:val,enumerable:!!enumerable,writable:true,configurable:true});} /**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */function _debounce(func,wait){var timeout,args,context,timestamp,result;var later=function later(){var last=Date.now() - timestamp;if(last < wait && last >= 0){timeout = setTimeout(later,wait - last);}else {timeout = null;result = func.apply(context,args);if(!timeout)context = args = null;}};return function(){context = this;args = arguments;timestamp = Date.now();if(!timeout){timeout = setTimeout(later,wait);}return result;};} /**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */function indexOf(arr,obj){var i=arr.length;while(i--) {if(arr[i] === obj)return i;}return -1;} /**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */function cancellable(fn){var cb=function cb(){if(!cb.cancelled){return fn.apply(this,arguments);}};cb.cancel = function(){cb.cancelled = true;};return cb;} /**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */function looseEqual(a,b){ /* eslint-disable eqeqeq */return a == b || (isObject(a) && isObject(b)?JSON.stringify(a) === JSON.stringify(b):false); /* eslint-enable eqeqeq */}var hasProto=('__proto__' in {}); // Browser environment sniffing
	var inBrowser=typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]'; // detect devtools
	var devtools=inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__; // UA sniffing for working around browser-specific quirks
	var UA=inBrowser && window.navigator.userAgent.toLowerCase();var isIE9=UA && UA.indexOf('msie 9.0') > 0;var isAndroid=UA && UA.indexOf('android') > 0;var isIos=UA && /(iphone|ipad|ipod|ios)/i.test(UA);var isWechat=UA && UA.indexOf('micromessenger') > 0;var transitionProp=undefined;var transitionEndEvent=undefined;var animationProp=undefined;var animationEndEvent=undefined; // Transition property/event sniffing
	if(inBrowser && !isIE9){var isWebkitTrans=window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;var isWebkitAnim=window.onanimationend === undefined && window.onwebkitanimationend !== undefined;transitionProp = isWebkitTrans?'WebkitTransition':'transition';transitionEndEvent = isWebkitTrans?'webkitTransitionEnd':'transitionend';animationProp = isWebkitAnim?'WebkitAnimation':'animation';animationEndEvent = isWebkitAnim?'webkitAnimationEnd':'animationend';} /**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */var nextTick=(function(){var callbacks=[];var pending=false;var timerFunc;function nextTickHandler(){pending = false;var copies=callbacks.slice(0);callbacks = [];for(var i=0;i < copies.length;i++) {copies[i]();}} /* istanbul ignore if */if(typeof MutationObserver !== 'undefined' && !(isWechat && isIos)){var counter=1;var observer=new MutationObserver(nextTickHandler);var textNode=document.createTextNode(counter);observer.observe(textNode,{characterData:true});timerFunc = function(){counter = (counter + 1) % 2;textNode.data = counter;};}else { // webpack attempts to inject a shim for setImmediate
	// if it is used as a global, so we have to work around that to
	// avoid bundling unnecessary code.
	var context=inBrowser?window:typeof global !== 'undefined'?global:{};timerFunc = context.setImmediate || setTimeout;}return function(cb,ctx){var func=ctx?function(){cb.call(ctx);}:cb;callbacks.push(func);if(pending)return;pending = true;timerFunc(nextTickHandler,0);};})();var _Set=undefined; /* istanbul ignore if */if(typeof Set !== 'undefined' && Set.toString().match(/native code/)){ // use native Set when available.
	_Set = Set;}else { // a non-standard Set polyfill that only works with primitive keys.
	_Set = function(){this.set = Object.create(null);};_Set.prototype.has = function(key){return this.set[key] !== undefined;};_Set.prototype.add = function(key){this.set[key] = 1;};_Set.prototype.clear = function(){this.set = Object.create(null);};}function Cache(limit){this.size = 0;this.limit = limit;this.head = this.tail = undefined;this._keymap = Object.create(null);}var p=Cache.prototype; /**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */p.put = function(key,value){var removed;if(this.size === this.limit){removed = this.shift();}var entry=this.get(key,true);if(!entry){entry = {key:key};this._keymap[key] = entry;if(this.tail){this.tail.newer = entry;entry.older = this.tail;}else {this.head = entry;}this.tail = entry;this.size++;}entry.value = value;return removed;}; /**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */p.shift = function(){var entry=this.head;if(entry){this.head = this.head.newer;this.head.older = undefined;entry.newer = entry.older = undefined;this._keymap[entry.key] = undefined;this.size--;}return entry;}; /**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */p.get = function(key,returnEntry){var entry=this._keymap[key];if(entry === undefined)return;if(entry === this.tail){return returnEntry?entry:entry.value;} // HEAD--------------TAIL
	//   <.older   .newer>
	//  <--- add direction --
	//   A  B  C  <D>  E
	if(entry.newer){if(entry === this.head){this.head = entry.newer;}entry.newer.older = entry.older; // C <-- E.
	}if(entry.older){entry.older.newer = entry.newer; // C. --> E
	}entry.newer = undefined; // D --x
	entry.older = this.tail; // D. --> E
	if(this.tail){this.tail.newer = entry; // E. <-- D
	}this.tail = entry;return returnEntry?entry:entry.value;};var cache$1=new Cache(1000);var filterTokenRE=/[^\s'"]+|'[^']*'|"[^"]*"/g;var reservedArgRE=/^in$|^-?\d+/; /**
	 * Parser state
	 */var str;var dir;var c;var prev;var i;var l;var lastFilterIndex;var inSingle;var inDouble;var curly;var square;var paren; /**
	 * Push a filter to the current directive object
	 */function pushFilter(){var exp=str.slice(lastFilterIndex,i).trim();var filter;if(exp){filter = {};var tokens=exp.match(filterTokenRE);filter.name = tokens[0];if(tokens.length > 1){filter.args = tokens.slice(1).map(processFilterArg);}}if(filter){(dir.filters = dir.filters || []).push(filter);}lastFilterIndex = i + 1;} /**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */function processFilterArg(arg){if(reservedArgRE.test(arg)){return {value:toNumber(arg),dynamic:false};}else {var stripped=stripQuotes(arg);var dynamic=stripped === arg;return {value:dynamic?arg:stripped,dynamic:dynamic};}} /**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} s
	 * @return {Object}
	 */function parseDirective(s){var hit=cache$1.get(s);if(hit){return hit;} // reset parser state
	str = s;inSingle = inDouble = false;curly = square = paren = 0;lastFilterIndex = 0;dir = {};for(i = 0,l = str.length;i < l;i++) {prev = c;c = str.charCodeAt(i);if(inSingle){ // check single quote
	if(c === 0x27 && prev !== 0x5C)inSingle = !inSingle;}else if(inDouble){ // check double quote
	if(c === 0x22 && prev !== 0x5C)inDouble = !inDouble;}else if(c === 0x7C &&  // pipe
	str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C){if(dir.expression == null){ // first filter, end of expression
	lastFilterIndex = i + 1;dir.expression = str.slice(0,i).trim();}else { // already has filter
	pushFilter();}}else {switch(c){case 0x22:inDouble = true;break; // "
	case 0x27:inSingle = true;break; // '
	case 0x28:paren++;break; // (
	case 0x29:paren--;break; // )
	case 0x5B:square++;break; // [
	case 0x5D:square--;break; // ]
	case 0x7B:curly++;break; // {
	case 0x7D:curly--;break; // }
	}}}if(dir.expression == null){dir.expression = str.slice(0,i).trim();}else if(lastFilterIndex !== 0){pushFilter();}cache$1.put(s,dir);return dir;}var directive=Object.freeze({parseDirective:parseDirective});var regexEscapeRE=/[-.*+?^${}()|[\]\/\\]/g;var cache=undefined;var tagRE=undefined;var htmlRE=undefined; /**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */function escapeRegex(str){return str.replace(regexEscapeRE,'\\$&');}function compileRegex(){var open=escapeRegex(config.delimiters[0]);var close=escapeRegex(config.delimiters[1]);var unsafeOpen=escapeRegex(config.unsafeDelimiters[0]);var unsafeClose=escapeRegex(config.unsafeDelimiters[1]);tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close,'g');htmlRE = new RegExp('^' + unsafeOpen + '.*' + unsafeClose + '$'); // reset cache
	cache = new Cache(1000);} /**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */function parseText(text){if(!cache){compileRegex();}var hit=cache.get(text);if(hit){return hit;}if(!tagRE.test(text)){return null;}var tokens=[];var lastIndex=tagRE.lastIndex = 0;var match,index,html,value,first,oneTime; /* eslint-disable no-cond-assign */while(match = tagRE.exec(text)) { /* eslint-enable no-cond-assign */index = match.index; // push text token
	if(index > lastIndex){tokens.push({value:text.slice(lastIndex,index)});} // tag token
	html = htmlRE.test(match[0]);value = html?match[1]:match[2];first = value.charCodeAt(0);oneTime = first === 42; // *
	value = oneTime?value.slice(1):value;tokens.push({tag:true,value:value.trim(),html:html,oneTime:oneTime});lastIndex = index + match[0].length;}if(lastIndex < text.length){tokens.push({value:text.slice(lastIndex)});}cache.put(text,tokens);return tokens;} /**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */function tokensToExp(tokens,vm){if(tokens.length > 1){return tokens.map(function(token){return formatToken(token,vm);}).join('+');}else {return formatToken(tokens[0],vm,true);}} /**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */function formatToken(token,vm,single){return token.tag?token.oneTime && vm?'"' + vm.$eval(token.value) + '"':inlineFilters(token.value,single):'"' + token.value + '"';} /**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */var filterRE=/[^|]\|[^|]/;function inlineFilters(exp,single){if(!filterRE.test(exp)){return single?exp:'(' + exp + ')';}else {var dir=parseDirective(exp);if(!dir.filters){return '(' + exp + ')';}else {return 'this._applyFilters(' + dir.expression +  // value
	',null,' +  // oldValue (null for read)
	JSON.stringify(dir.filters) +  // filter descriptors
	',false)'; // write?
	}}}var text=Object.freeze({compileRegex:compileRegex,parseText:parseText,tokensToExp:tokensToExp});var delimiters=['{{','}}'];var unsafeDelimiters=['{{{','}}}'];var config=Object.defineProperties({ /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */debug:false, /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */silent:false, /**
	   * Whether to use async rendering.
	   */async:true, /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */warnExpressionErrors:true, /**
	   * Whether to allow devtools inspection.
	   * Disabled by default in production builds.
	   */devtools:process.env.NODE_ENV !== 'production', /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */_delimitersChanged:true, /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */_assetTypes:['component','directive','elementDirective','filter','transition','partial'], /**
	   * prop binding modes
	   */_propBindingModes:{ONE_WAY:0,TWO_WAY:1,ONE_TIME:2}, /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */_maxUpdateCount:100},{delimiters:{ /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */get:function get(){return delimiters;},set:function set(val){delimiters = val;compileRegex();},configurable:true,enumerable:true},unsafeDelimiters:{get:function get(){return unsafeDelimiters;},set:function set(val){unsafeDelimiters = val;compileRegex();},configurable:true,enumerable:true}});var warn=undefined;var formatComponentName=undefined;if(process.env.NODE_ENV !== 'production'){(function(){var hasConsole=typeof console !== 'undefined';warn = function(msg,vm){if(hasConsole && !config.silent){console.error('[Vue warn]: ' + msg + (vm?formatComponentName(vm):''));}};formatComponentName = function(vm){var name=vm._isVue?vm.$options.name:vm.name;return name?' (found in component: <' + hyphenate(name) + '>)':'';};})();} /**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */function appendWithTransition(el,target,vm,cb){applyTransition(el,1,function(){target.appendChild(el);},vm,cb);} /**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */function beforeWithTransition(el,target,vm,cb){applyTransition(el,1,function(){before(el,target);},vm,cb);} /**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */function removeWithTransition(el,vm,cb){applyTransition(el,-1,function(){remove(el);},vm,cb);} /**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */function applyTransition(el,direction,op,vm,cb){var transition=el.__v_trans;if(!transition ||  // skip if there are no js hooks and CSS transition is
	// not supported
	!transition.hooks && !transitionEndEvent ||  // skip transitions for initial compile
	!vm._isCompiled ||  // if the vm is being manipulated by a parent directive
	// during the parent's compilation phase, skip the
	// animation.
	vm.$parent && !vm.$parent._isCompiled){op();if(cb)cb();return;}var action=direction > 0?'enter':'leave';transition[action](op,cb);}var transition=Object.freeze({appendWithTransition:appendWithTransition,beforeWithTransition:beforeWithTransition,removeWithTransition:removeWithTransition,applyTransition:applyTransition}); /**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */function query(el){if(typeof el === 'string'){var selector=el;el = document.querySelector(el);if(!el){process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);}}return el;} /**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */function inDoc(node){if(!node)return false;var doc=node.ownerDocument.documentElement;var parent=node.parentNode;return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));} /**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */function getAttr(node,_attr){var val=node.getAttribute(_attr);if(val !== null){node.removeAttribute(_attr);}return val;} /**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */function getBindAttr(node,name){var val=getAttr(node,':' + name);if(val === null){val = getAttr(node,'v-bind:' + name);}return val;} /**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */function hasBindAttr(node,name){return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);} /**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */function before(el,target){target.parentNode.insertBefore(el,target);} /**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */function after(el,target){if(target.nextSibling){before(el,target.nextSibling);}else {target.parentNode.appendChild(el);}} /**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */function remove(el){el.parentNode.removeChild(el);} /**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */function prepend(el,target){if(target.firstChild){before(el,target.firstChild);}else {target.appendChild(el);}} /**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */function replace(target,el){var parent=target.parentNode;if(parent){parent.replaceChild(el,target);}} /**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */function on(el,event,cb,useCapture){el.addEventListener(event,cb,useCapture);} /**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */function off(el,event,cb){el.removeEventListener(event,cb);} /**
	 * For IE9 compat: when both class and :class are present
	 * getAttribute('class') returns wrong value...
	 *
	 * @param {Element} el
	 * @return {String}
	 */function getClass(el){var classname=el.className;if(typeof classname === 'object'){classname = classname.baseVal || '';}return classname;} /**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */function setClass(el,cls){ /* istanbul ignore if */if(isIE9 && !/svg$/.test(el.namespaceURI)){el.className = cls;}else {el.setAttribute('class',cls);}} /**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */function addClass(el,cls){if(el.classList){el.classList.add(cls);}else {var cur=' ' + getClass(el) + ' ';if(cur.indexOf(' ' + cls + ' ') < 0){setClass(el,(cur + cls).trim());}}} /**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */function removeClass(el,cls){if(el.classList){el.classList.remove(cls);}else {var cur=' ' + getClass(el) + ' ';var tar=' ' + cls + ' ';while(cur.indexOf(tar) >= 0) {cur = cur.replace(tar,' ');}setClass(el,cur.trim());}if(!el.className){el.removeAttribute('class');}} /**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */function extractContent(el,asFragment){var child;var rawContent; /* istanbul ignore if */if(isTemplate(el) && isFragment(el.content)){el = el.content;}if(el.hasChildNodes()){trimNode(el);rawContent = asFragment?document.createDocumentFragment():document.createElement('div'); /* eslint-disable no-cond-assign */while(child = el.firstChild) { /* eslint-enable no-cond-assign */rawContent.appendChild(child);}}return rawContent;} /**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */function trimNode(node){var child; /* eslint-disable no-sequences */while((child = node.firstChild,isTrimmable(child))) {node.removeChild(child);}while((child = node.lastChild,isTrimmable(child))) {node.removeChild(child);} /* eslint-enable no-sequences */}function isTrimmable(node){return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);} /**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */function isTemplate(el){return el.tagName && el.tagName.toLowerCase() === 'template';} /**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */function createAnchor(content,persist){var anchor=config.debug?document.createComment(content):document.createTextNode(persist?' ':'');anchor.__v_anchor = true;return anchor;} /**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */var refRE=/^v-ref:/;function findRef(node){if(node.hasAttributes()){var attrs=node.attributes;for(var i=0,l=attrs.length;i < l;i++) {var name=attrs[i].name;if(refRE.test(name)){return camelize(name.replace(refRE,''));}}}} /**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */function mapNodeRange(node,end,op){var next;while(node !== end) {next = node.nextSibling;op(node);node = next;}op(end);} /**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */function removeNodeRange(start,end,vm,frag,cb){var done=false;var removed=0;var nodes=[];mapNodeRange(start,end,function(node){if(node === end)done = true;nodes.push(node);removeWithTransition(node,vm,onRemoved);});function onRemoved(){removed++;if(done && removed >= nodes.length){for(var i=0;i < nodes.length;i++) {frag.appendChild(nodes[i]);}cb && cb();}}} /**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */function isFragment(node){return node && node.nodeType === 11;} /**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */function getOuterHTML(el){if(el.outerHTML){return el.outerHTML;}else {var container=document.createElement('div');container.appendChild(el.cloneNode(true));return container.innerHTML;}}var commonTagRE=/^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;var reservedTagRE=/^(slot|partial|component)$/i;var isUnknownElement=undefined;if(process.env.NODE_ENV !== 'production'){isUnknownElement = function(el,tag){if(tag.indexOf('-') > -1){ // http://stackoverflow.com/a/28210364/1070244
	return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;}else {return (/HTMLUnknownElement/.test(el.toString()) &&  // Chrome returns unknown for several HTML5 elements.
	// https://code.google.com/p/chromium/issues/detail?id=540526
	!/^(data|time|rtc|rb)$/.test(tag));}};} /**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */function checkComponentAttr(el,options){var tag=el.tagName.toLowerCase();var hasAttrs=el.hasAttributes();if(!commonTagRE.test(tag) && !reservedTagRE.test(tag)){if(resolveAsset(options,'components',tag)){return {id:tag};}else {var is=hasAttrs && getIsBinding(el,options);if(is){return is;}else if(process.env.NODE_ENV !== 'production'){var expectedTag=options._componentNameMap && options._componentNameMap[tag];if(expectedTag){warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');}else if(isUnknownElement(el,tag)){warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');}}}}else if(hasAttrs){return getIsBinding(el,options);}} /**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */function getIsBinding(el,options){ // dynamic syntax
	var exp=el.getAttribute('is');if(exp != null){if(resolveAsset(options,'components',exp)){el.removeAttribute('is');return {id:exp};}}else {exp = getBindAttr(el,'is');if(exp != null){return {id:exp,dynamic:true};}}} /**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */var strats=config.optionMergeStrategies = Object.create(null); /**
	 * Helper that recursively merges two data objects together.
	 */function mergeData(to,from){var key,toVal,fromVal;for(key in from) {toVal = to[key];fromVal = from[key];if(!hasOwn(to,key)){set(to,key,fromVal);}else if(isObject(toVal) && isObject(fromVal)){mergeData(toVal,fromVal);}}return to;} /**
	 * Data
	 */strats.data = function(parentVal,childVal,vm){if(!vm){ // in a Vue.extend merge, both should be functions
	if(!childVal){return parentVal;}if(typeof childVal !== 'function'){process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.',vm);return parentVal;}if(!parentVal){return childVal;} // when parentVal & childVal are both present,
	// we need to return a function that returns the
	// merged result of both functions... no need to
	// check if parentVal is a function here because
	// it has to be a function to pass previous merges.
	return function mergedDataFn(){return mergeData(childVal.call(this),parentVal.call(this));};}else if(parentVal || childVal){return function mergedInstanceDataFn(){ // instance merge
	var instanceData=typeof childVal === 'function'?childVal.call(vm):childVal;var defaultData=typeof parentVal === 'function'?parentVal.call(vm):undefined;if(instanceData){return mergeData(instanceData,defaultData);}else {return defaultData;}};}}; /**
	 * El
	 */strats.el = function(parentVal,childVal,vm){if(!vm && childVal && typeof childVal !== 'function'){process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.',vm);return;}var ret=childVal || parentVal; // invoke the element factory if this is instance merge
	return vm && typeof ret === 'function'?ret.call(vm):ret;}; /**
	 * Hooks and param attributes are merged as arrays.
	 */strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function(parentVal,childVal){return childVal?parentVal?parentVal.concat(childVal):isArray(childVal)?childVal:[childVal]:parentVal;}; /**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */function mergeAssets(parentVal,childVal){var res=Object.create(parentVal || null);return childVal?extend(res,guardArrayAssets(childVal)):res;}config._assetTypes.forEach(function(type){strats[type + 's'] = mergeAssets;}); /**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */strats.watch = strats.events = function(parentVal,childVal){if(!childVal)return parentVal;if(!parentVal)return childVal;var ret={};extend(ret,parentVal);for(var key in childVal) {var parent=ret[key];var child=childVal[key];if(parent && !isArray(parent)){parent = [parent];}ret[key] = parent?parent.concat(child):[child];}return ret;}; /**
	 * Other object hashes.
	 */strats.props = strats.methods = strats.computed = function(parentVal,childVal){if(!childVal)return parentVal;if(!parentVal)return childVal;var ret=Object.create(null);extend(ret,parentVal);extend(ret,childVal);return ret;}; /**
	 * Default strategy.
	 */var defaultStrat=function defaultStrat(parentVal,childVal){return childVal === undefined?parentVal:childVal;}; /**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */function guardComponents(options){if(options.components){var components=options.components = guardArrayAssets(options.components);var ids=Object.keys(components);var def;if(process.env.NODE_ENV !== 'production'){var map=options._componentNameMap = {};}for(var i=0,l=ids.length;i < l;i++) {var key=ids[i];if(commonTagRE.test(key) || reservedTagRE.test(key)){process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);continue;} // record a all lowercase <-> kebab-case mapping for
	// possible custom element case error warning
	if(process.env.NODE_ENV !== 'production'){map[key.replace(/-/g,'').toLowerCase()] = hyphenate(key);}def = components[key];if(isPlainObject(def)){components[key] = Vue.extend(def);}}}} /**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */function guardProps(options){var props=options.props;var i,val;if(isArray(props)){options.props = {};i = props.length;while(i--) {val = props[i];if(typeof val === 'string'){options.props[val] = null;}else if(val.name){options.props[val.name] = val;}}}else if(isPlainObject(props)){var keys=Object.keys(props);i = keys.length;while(i--) {val = props[keys[i]];if(typeof val === 'function'){props[keys[i]] = {type:val};}}}} /**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */function guardArrayAssets(assets){if(isArray(assets)){var res={};var i=assets.length;var asset;while(i--) {asset = assets[i];var id=typeof asset === 'function'?asset.options && asset.options.name || asset.id:asset.name || asset.id;if(!id){process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');}else {res[id] = asset;}}return res;}return assets;} /**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */function mergeOptions(parent,child,vm){guardComponents(child);guardProps(child);if(process.env.NODE_ENV !== 'production'){if(child.propsData && !vm){warn('propsData can only be used as an instantiation option.');}}var options={};var key;if(child['extends']){parent = typeof child['extends'] === 'function'?mergeOptions(parent,child['extends'].options,vm):mergeOptions(parent,child['extends'],vm);}if(child.mixins){for(var i=0,l=child.mixins.length;i < l;i++) {parent = mergeOptions(parent,child.mixins[i],vm);}}for(key in parent) {mergeField(key);}for(key in child) {if(!hasOwn(parent,key)){mergeField(key);}}function mergeField(key){var strat=strats[key] || defaultStrat;options[key] = strat(parent[key],child[key],vm,key);}return options;} /**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @param {Boolean} warnMissing
	 * @return {Object|Function}
	 */function resolveAsset(options,type,id,warnMissing){ /* istanbul ignore if */if(typeof id !== 'string'){return;}var assets=options[type];var camelizedId;var res=assets[id] ||  // camelCase ID
	assets[camelizedId = camelize(id)] ||  // Pascal Case ID
	assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];if(process.env.NODE_ENV !== 'production' && warnMissing && !res){warn('Failed to resolve ' + type.slice(0,-1) + ': ' + id,options);}return res;}var uid$1=0; /**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */function Dep(){this.id = uid$1++;this.subs = [];} // the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null; /**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */Dep.prototype.addSub = function(sub){this.subs.push(sub);}; /**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */Dep.prototype.removeSub = function(sub){this.subs.$remove(sub);}; /**
	 * Add self as a dependency to the target watcher.
	 */Dep.prototype.depend = function(){Dep.target.addDep(this);}; /**
	 * Notify all subscribers of a new value.
	 */Dep.prototype.notify = function(){ // stablize the subscriber list first
	var subs=toArray(this.subs);for(var i=0,l=subs.length;i < l;i++) {subs[i].update();}};var arrayProto=Array.prototype;var arrayMethods=Object.create(arrayProto) /**
	 * Intercept mutating methods and emit events
	 */;['push','pop','shift','unshift','splice','sort','reverse'].forEach(function(method){ // cache original method
	var original=arrayProto[method];def(arrayMethods,method,function mutator(){ // avoid leaking arguments:
	// http://jsperf.com/closure-with-arguments
	var i=arguments.length;var args=new Array(i);while(i--) {args[i] = arguments[i];}var result=original.apply(this,args);var ob=this.__ob__;var inserted;switch(method){case 'push':inserted = args;break;case 'unshift':inserted = args;break;case 'splice':inserted = args.slice(2);break;}if(inserted)ob.observeArray(inserted); // notify change
	ob.dep.notify();return result;});}); /**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */def(arrayProto,'$set',function $set(index,val){if(index >= this.length){this.length = Number(index) + 1;}return this.splice(index,1,val)[0];}); /**
	 * Convenience method to remove the element at given index or target element reference.
	 *
	 * @param {*} item
	 */def(arrayProto,'$remove',function $remove(item){ /* istanbul ignore if */if(!this.length)return;var index=indexOf(this,item);if(index > -1){return this.splice(index,1);}});var arrayKeys=Object.getOwnPropertyNames(arrayMethods); /**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However in certain cases, e.g.
	 * v-for scope alias and props, we don't want to force conversion
	 * because the value may be a nested value under a frozen data structure.
	 *
	 * So whenever we want to set a reactive property without forcing
	 * conversion on the new value, we wrap that call inside this function.
	 */var shouldConvert=true;function withoutConversion(fn){shouldConvert = false;fn();shouldConvert = true;} /**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */function Observer(value){this.value = value;this.dep = new Dep();def(value,'__ob__',this);if(isArray(value)){var augment=hasProto?protoAugment:copyAugment;augment(value,arrayMethods,arrayKeys);this.observeArray(value);}else {this.walk(value);}} // Instance methods
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */Observer.prototype.walk = function(obj){var keys=Object.keys(obj);for(var i=0,l=keys.length;i < l;i++) {this.convert(keys[i],obj[keys[i]]);}}; /**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */Observer.prototype.observeArray = function(items){for(var i=0,l=items.length;i < l;i++) {observe(items[i]);}}; /**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */Observer.prototype.convert = function(key,val){defineReactive(this.value,key,val);}; /**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */Observer.prototype.addVm = function(vm){(this.vms || (this.vms = [])).push(vm);}; /**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */Observer.prototype.removeVm = function(vm){this.vms.$remove(vm);}; // helpers
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */function protoAugment(target,src){ /* eslint-disable no-proto */target.__proto__ = src; /* eslint-enable no-proto */} /**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */function copyAugment(target,src,keys){for(var i=0,l=keys.length;i < l;i++) {var key=keys[i];def(target,key,src[key]);}} /**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */function observe(value,vm){if(!value || typeof value !== 'object'){return;}var ob;if(hasOwn(value,'__ob__') && value.__ob__ instanceof Observer){ob = value.__ob__;}else if(shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue){ob = new Observer(value);}if(ob && vm){ob.addVm(vm);}return ob;} /**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */function defineReactive(obj,key,val){var dep=new Dep();var property=Object.getOwnPropertyDescriptor(obj,key);if(property && property.configurable === false){return;} // cater for pre-defined getter/setters
	var getter=property && property.get;var setter=property && property.set;var childOb=observe(val);Object.defineProperty(obj,key,{enumerable:true,configurable:true,get:function reactiveGetter(){var value=getter?getter.call(obj):val;if(Dep.target){dep.depend();if(childOb){childOb.dep.depend();}if(isArray(value)){for(var e,i=0,l=value.length;i < l;i++) {e = value[i];e && e.__ob__ && e.__ob__.dep.depend();}}}return value;},set:function reactiveSetter(newVal){var value=getter?getter.call(obj):val;if(newVal === value){return;}if(setter){setter.call(obj,newVal);}else {val = newVal;}childOb = observe(newVal);dep.notify();}});}var util=Object.freeze(Object.defineProperties({defineReactive:defineReactive,set:set,del:del,hasOwn:hasOwn,isLiteral:isLiteral,isReserved:isReserved,_toString:_toString,toNumber:toNumber,toBoolean:toBoolean,stripQuotes:stripQuotes,camelize:camelize,hyphenate:hyphenate,classify:classify,bind:bind,toArray:toArray,extend:extend,isObject:isObject,isPlainObject:isPlainObject,def:def,debounce:_debounce,indexOf:indexOf,cancellable:cancellable,looseEqual:looseEqual,isArray:isArray,hasProto:hasProto,inBrowser:inBrowser,devtools:devtools,isIE9:isIE9,isAndroid:isAndroid,isIos:isIos,isWechat:isWechat,nextTick:nextTick,query:query,inDoc:inDoc,getAttr:getAttr,getBindAttr:getBindAttr,hasBindAttr:hasBindAttr,before:before,after:after,remove:remove,prepend:prepend,replace:replace,on:on,off:off,setClass:setClass,addClass:addClass,removeClass:removeClass,extractContent:extractContent,trimNode:trimNode,isTemplate:isTemplate,createAnchor:createAnchor,findRef:findRef,mapNodeRange:mapNodeRange,removeNodeRange:removeNodeRange,isFragment:isFragment,getOuterHTML:getOuterHTML,mergeOptions:mergeOptions,resolveAsset:resolveAsset,checkComponentAttr:checkComponentAttr,commonTagRE:commonTagRE,reservedTagRE:reservedTagRE},{transitionProp:{get:function get(){return transitionProp;},configurable:true,enumerable:true},transitionEndEvent:{get:function get(){return transitionEndEvent;},configurable:true,enumerable:true},animationProp:{get:function get(){return animationProp;},configurable:true,enumerable:true},animationEndEvent:{get:function get(){return animationEndEvent;},configurable:true,enumerable:true},_Set:{get:function get(){return _Set;},configurable:true,enumerable:true},warn:{get:function get(){return warn;},configurable:true,enumerable:true}}));var uid=0;function initMixin(Vue){ /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */Vue.prototype._init = function(options){options = options || {};this.$el = null;this.$parent = options.parent;this.$root = this.$parent?this.$parent.$root:this;this.$children = [];this.$refs = {}; // child vm references
	this.$els = {}; // element references
	this._watchers = []; // all watchers as an array
	this._directives = []; // all directives
	// a uid
	this._uid = uid++; // a flag to avoid this being observed
	this._isVue = true; // events bookkeeping
	this._events = {}; // registered callbacks
	this._eventsCount = {}; // for $broadcast optimization
	// fragment instance properties
	this._isFragment = false;this._fragment =  // @type {DocumentFragment}
	this._fragmentStart =  // @type {Text|Comment}
	this._fragmentEnd = null; // @type {Text|Comment}
	// lifecycle state
	this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;this._unlinkFn = null; // context:
	// if this is a transcluded component, context
	// will be the common parent vm of this instance
	// and its host.
	this._context = options._context || this.$parent; // scope:
	// if this is inside an inline v-for, the scope
	// will be the intermediate scope created for this
	// repeat fragment. this is used for linking props
	// and container directives.
	this._scope = options._scope; // fragment:
	// if this instance is compiled inside a Fragment, it
	// needs to reigster itself as a child of that fragment
	// for attach/detach to work properly.
	this._frag = options._frag;if(this._frag){this._frag.children.push(this);} // push self into parent / transclusion host
	if(this.$parent){this.$parent.$children.push(this);} // merge options.
	options = this.$options = mergeOptions(this.constructor.options,options,this); // set ref
	this._updateRef(); // initialize data as empty object.
	// it will be filled up in _initData().
	this._data = {}; // call init hook
	this._callHook('init'); // initialize data observation and scope inheritance.
	this._initState(); // setup event system and option events.
	this._initEvents(); // call created hook
	this._callHook('created'); // if `el` option is passed, start compilation.
	if(options.el){this.$mount(options.el);}};}var pathCache=new Cache(1000); // actions
	var APPEND=0;var PUSH=1;var INC_SUB_PATH_DEPTH=2;var PUSH_SUB_PATH=3; // states
	var BEFORE_PATH=0;var IN_PATH=1;var BEFORE_IDENT=2;var IN_IDENT=3;var IN_SUB_PATH=4;var IN_SINGLE_QUOTE=5;var IN_DOUBLE_QUOTE=6;var AFTER_PATH=7;var ERROR=8;var pathStateMachine=[];pathStateMachine[BEFORE_PATH] = {'ws':[BEFORE_PATH],'ident':[IN_IDENT,APPEND],'[':[IN_SUB_PATH],'eof':[AFTER_PATH]};pathStateMachine[IN_PATH] = {'ws':[IN_PATH],'.':[BEFORE_IDENT],'[':[IN_SUB_PATH],'eof':[AFTER_PATH]};pathStateMachine[BEFORE_IDENT] = {'ws':[BEFORE_IDENT],'ident':[IN_IDENT,APPEND]};pathStateMachine[IN_IDENT] = {'ident':[IN_IDENT,APPEND],'0':[IN_IDENT,APPEND],'number':[IN_IDENT,APPEND],'ws':[IN_PATH,PUSH],'.':[BEFORE_IDENT,PUSH],'[':[IN_SUB_PATH,PUSH],'eof':[AFTER_PATH,PUSH]};pathStateMachine[IN_SUB_PATH] = {"'":[IN_SINGLE_QUOTE,APPEND],'"':[IN_DOUBLE_QUOTE,APPEND],'[':[IN_SUB_PATH,INC_SUB_PATH_DEPTH],']':[IN_PATH,PUSH_SUB_PATH],'eof':ERROR,'else':[IN_SUB_PATH,APPEND]};pathStateMachine[IN_SINGLE_QUOTE] = {"'":[IN_SUB_PATH,APPEND],'eof':ERROR,'else':[IN_SINGLE_QUOTE,APPEND]};pathStateMachine[IN_DOUBLE_QUOTE] = {'"':[IN_SUB_PATH,APPEND],'eof':ERROR,'else':[IN_DOUBLE_QUOTE,APPEND]}; /**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */function getPathCharType(ch){if(ch === undefined){return 'eof';}var code=ch.charCodeAt(0);switch(code){case 0x5B: // [
	case 0x5D: // ]
	case 0x2E: // .
	case 0x22: // "
	case 0x27: // '
	case 0x30: // 0
	return ch;case 0x5F: // _
	case 0x24: // $
	return 'ident';case 0x20: // Space
	case 0x09: // Tab
	case 0x0A: // Newline
	case 0x0D: // Return
	case 0xA0: // No-break space
	case 0xFEFF: // Byte Order Mark
	case 0x2028: // Line Separator
	case 0x2029: // Paragraph Separator
	return 'ws';} // a-z, A-Z
	if(code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A){return 'ident';} // 1-9
	if(code >= 0x31 && code <= 0x39){return 'number';}return 'else';} /**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */function formatSubPath(path){var trimmed=path.trim(); // invalid leading 0
	if(path.charAt(0) === '0' && isNaN(path)){return false;}return isLiteral(trimmed)?stripQuotes(trimmed):'*' + trimmed;} /**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */function parse(path){var keys=[];var index=-1;var mode=BEFORE_PATH;var subPathDepth=0;var c,newChar,key,type,transition,action,typeMap;var actions=[];actions[PUSH] = function(){if(key !== undefined){keys.push(key);key = undefined;}};actions[APPEND] = function(){if(key === undefined){key = newChar;}else {key += newChar;}};actions[INC_SUB_PATH_DEPTH] = function(){actions[APPEND]();subPathDepth++;};actions[PUSH_SUB_PATH] = function(){if(subPathDepth > 0){subPathDepth--;mode = IN_SUB_PATH;actions[APPEND]();}else {subPathDepth = 0;key = formatSubPath(key);if(key === false){return false;}else {actions[PUSH]();}}};function maybeUnescapeQuote(){var nextChar=path[index + 1];if(mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"'){index++;newChar = '\\' + nextChar;actions[APPEND]();return true;}}while(mode != null) {index++;c = path[index];if(c === '\\' && maybeUnescapeQuote()){continue;}type = getPathCharType(c);typeMap = pathStateMachine[mode];transition = typeMap[type] || typeMap['else'] || ERROR;if(transition === ERROR){return; // parse error
	}mode = transition[0];action = actions[transition[1]];if(action){newChar = transition[2];newChar = newChar === undefined?c:newChar;if(action() === false){return;}}if(mode === AFTER_PATH){keys.raw = path;return keys;}}} /**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */function parsePath(path){var hit=pathCache.get(path);if(!hit){hit = parse(path);if(hit){pathCache.put(path,hit);}}return hit;} /**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */function getPath(obj,path){return parseExpression(path).get(obj);} /**
	 * Warn against setting non-existent root path on a vm.
	 */var warnNonExistent;if(process.env.NODE_ENV !== 'production'){warnNonExistent = function(path,vm){warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.',vm);};} /**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */function setPath(obj,path,val){var original=obj;if(typeof path === 'string'){path = parse(path);}if(!path || !isObject(obj)){return false;}var last,key;for(var i=0,l=path.length;i < l;i++) {last = obj;key = path[i];if(key.charAt(0) === '*'){key = parseExpression(key.slice(1)).get.call(original,original);}if(i < l - 1){obj = obj[key];if(!isObject(obj)){obj = {};if(process.env.NODE_ENV !== 'production' && last._isVue){warnNonExistent(path,last);}set(last,key,obj);}}else {if(isArray(obj)){obj.$set(key,val);}else if(key in obj){obj[key] = val;}else {if(process.env.NODE_ENV !== 'production' && obj._isVue){warnNonExistent(path,obj);}set(obj,key,val);}}}return true;}var path=Object.freeze({parsePath:parsePath,getPath:getPath,setPath:setPath});var expressionCache=new Cache(1000);var allowedKeywords='Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';var allowedKeywordsRE=new RegExp('^(' + allowedKeywords.replace(/,/g,'\\b|') + '\\b)'); // keywords that don't make sense inside expressions
	var improperKeywords='break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';var improperKeywordsRE=new RegExp('^(' + improperKeywords.replace(/,/g,'\\b|') + '\\b)');var wsRE=/\s/g;var newlineRE=/\n/g;var saveRE=/[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;var restoreRE=/"(\d+)"/g;var pathTestRE=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;var identRE=/[^\w$\.](?:[A-Za-z_$][\w$]*)/g;var booleanLiteralRE=/^(?:true|false)$/; /**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */var saved=[]; /**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */function save(str,isString){var i=saved.length;saved[i] = isString?str.replace(newlineRE,'\\n'):str;return '"' + i + '"';} /**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */function rewrite(raw){var c=raw.charAt(0);var path=raw.slice(1);if(allowedKeywordsRE.test(path)){return raw;}else {path = path.indexOf('"') > -1?path.replace(restoreRE,restore):path;return c + 'scope.' + path;}} /**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */function restore(str,i){return saved[i];} /**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */function compileGetter(exp){if(improperKeywordsRE.test(exp)){process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);} // reset state
	saved.length = 0; // save strings and object literal keys
	var body=exp.replace(saveRE,save).replace(wsRE,''); // rewrite all paths
	// pad 1 space here becaue the regex matches 1 extra char
	body = (' ' + body).replace(identRE,rewrite).replace(restoreRE,restore);return makeGetterFn(body);} /**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */function makeGetterFn(body){try{ /* eslint-disable no-new-func */return new Function('scope','return ' + body + ';'); /* eslint-enable no-new-func */}catch(e) {process.env.NODE_ENV !== 'production' && warn('Invalid expression. ' + 'Generated function body: ' + body);}} /**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */function compileSetter(exp){var path=parsePath(exp);if(path){return function(scope,val){setPath(scope,path,val);};}else {process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);}} /**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */function parseExpression(exp,needSet){exp = exp.trim(); // try cache
	var hit=expressionCache.get(exp);if(hit){if(needSet && !hit.set){hit.set = compileSetter(hit.exp);}return hit;}var res={exp:exp};res.get = isSimplePath(exp) && exp.indexOf('[') < 0 // optimized super simple getter
	?makeGetterFn('scope.' + exp) // dynamic getter
	:compileGetter(exp);if(needSet){res.set = compileSetter(exp);}expressionCache.put(exp,res);return res;} /**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */function isSimplePath(exp){return pathTestRE.test(exp) &&  // don't treat true/false as paths
	!booleanLiteralRE.test(exp) &&  // Math constants e.g. Math.PI, Math.E etc.
	exp.slice(0,5) !== 'Math.';}var expression=Object.freeze({parseExpression:parseExpression,isSimplePath:isSimplePath}); // we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	var queue=[];var userQueue=[];var has={};var circular={};var waiting=false; /**
	 * Reset the batcher's state.
	 */function resetBatcherState(){queue.length = 0;userQueue.length = 0;has = {};circular = {};waiting = false;} /**
	 * Flush both queues and run the watchers.
	 */function flushBatcherQueue(){var _again=true;_function: while(_again) {_again = false;runBatcherQueue(queue);runBatcherQueue(userQueue); // user watchers triggered more watchers,
	// keep flushing until it depletes
	if(queue.length){_again = true;continue _function;} // dev tool hook
	/* istanbul ignore if */if(devtools && config.devtools){devtools.emit('flush');}resetBatcherState();}} /**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */function runBatcherQueue(queue){ // do not cache length because more watchers might be pushed
	// as we run existing watchers
	for(var i=0;i < queue.length;i++) {var watcher=queue[i];var id=watcher.id;has[id] = null;watcher.run(); // in dev build, check and stop circular updates.
	if(process.env.NODE_ENV !== 'production' && has[id] != null){circular[id] = (circular[id] || 0) + 1;if(circular[id] > config._maxUpdateCount){warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"',watcher.vm);break;}}}queue.length = 0;} /**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */function pushWatcher(watcher){var id=watcher.id;if(has[id] == null){ // push watcher into appropriate queue
	var q=watcher.user?userQueue:queue;has[id] = q.length;q.push(watcher); // queue the flush
	if(!waiting){waiting = true;nextTick(flushBatcherQueue);}}}var uid$2=0; /**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */function Watcher(vm,expOrFn,cb,options){ // mix in options
	if(options){extend(this,options);}var isFn=typeof expOrFn === 'function';this.vm = vm;vm._watchers.push(this);this.expression = expOrFn;this.cb = cb;this.id = ++uid$2; // uid for batching
	this.active = true;this.dirty = this.lazy; // for lazy watchers
	this.deps = [];this.newDeps = [];this.depIds = new _Set();this.newDepIds = new _Set();this.prevError = null; // for async error stacks
	// parse expression for getter/setter
	if(isFn){this.getter = expOrFn;this.setter = undefined;}else {var res=parseExpression(expOrFn,this.twoWay);this.getter = res.get;this.setter = res.set;}this.value = this.lazy?undefined:this.get(); // state for avoiding false triggers for deep and Array
	// watchers during vm._digest()
	this.queued = this.shallow = false;} /**
	 * Evaluate the getter, and re-collect dependencies.
	 */Watcher.prototype.get = function(){this.beforeGet();var scope=this.scope || this.vm;var value;try{value = this.getter.call(scope,scope);}catch(e) {if(process.env.NODE_ENV !== 'production' && config.warnExpressionErrors){warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(),this.vm);}} // "touch" every property so they are all tracked as
	// dependencies for deep watching
	if(this.deep){traverse(value);}if(this.preProcess){value = this.preProcess(value);}if(this.filters){value = scope._applyFilters(value,null,this.filters,false);}if(this.postProcess){value = this.postProcess(value);}this.afterGet();return value;}; /**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */Watcher.prototype.set = function(value){var scope=this.scope || this.vm;if(this.filters){value = scope._applyFilters(value,this.value,this.filters,true);}try{this.setter.call(scope,scope,value);}catch(e) {if(process.env.NODE_ENV !== 'production' && config.warnExpressionErrors){warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(),this.vm);}} // two-way sync for v-for alias
	var forContext=scope.$forContext;if(forContext && forContext.alias === this.expression){if(forContext.filters){process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.',this.vm);return;}forContext._withLock(function(){if(scope.$key){ // original is an object
	forContext.rawValue[scope.$key] = value;}else {forContext.rawValue.$set(scope.$index,value);}});}}; /**
	 * Prepare for dependency collection.
	 */Watcher.prototype.beforeGet = function(){Dep.target = this;}; /**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */Watcher.prototype.addDep = function(dep){var id=dep.id;if(!this.newDepIds.has(id)){this.newDepIds.add(id);this.newDeps.push(dep);if(!this.depIds.has(id)){dep.addSub(this);}}}; /**
	 * Clean up for dependency collection.
	 */Watcher.prototype.afterGet = function(){Dep.target = null;var i=this.deps.length;while(i--) {var dep=this.deps[i];if(!this.newDepIds.has(dep.id)){dep.removeSub(this);}}var tmp=this.depIds;this.depIds = this.newDepIds;this.newDepIds = tmp;this.newDepIds.clear();tmp = this.deps;this.deps = this.newDeps;this.newDeps = tmp;this.newDeps.length = 0;}; /**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */Watcher.prototype.update = function(shallow){if(this.lazy){this.dirty = true;}else if(this.sync || !config.async){this.run();}else { // if queued, only overwrite shallow with non-shallow,
	// but not the other way around.
	this.shallow = this.queued?shallow?this.shallow:false:!!shallow;this.queued = true; // record before-push error stack in debug mode
	/* istanbul ignore if */if(process.env.NODE_ENV !== 'production' && config.debug){this.prevError = new Error('[vue] async stack trace');}pushWatcher(this);}}; /**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */Watcher.prototype.run = function(){if(this.active){var value=this.get();if(value !== this.value ||  // Deep watchers and watchers on Object/Arrays should fire even
	// when the value is the same, because the value may
	// have mutated; but only do so if this is a
	// non-shallow update (caused by a vm digest).
	(isObject(value) || this.deep) && !this.shallow){ // set new value
	var oldValue=this.value;this.value = value; // in debug + async mode, when a watcher callbacks
	// throws, we also throw the saved before-push error
	// so the full cross-tick stack trace is available.
	var prevError=this.prevError; /* istanbul ignore if */if(process.env.NODE_ENV !== 'production' && config.debug && prevError){this.prevError = null;try{this.cb.call(this.vm,value,oldValue);}catch(e) {nextTick(function(){throw prevError;},0);throw e;}}else {this.cb.call(this.vm,value,oldValue);}}this.queued = this.shallow = false;}}; /**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */Watcher.prototype.evaluate = function(){ // avoid overwriting another watcher that is being
	// collected.
	var current=Dep.target;this.value = this.get();this.dirty = false;Dep.target = current;}; /**
	 * Depend on all deps collected by this watcher.
	 */Watcher.prototype.depend = function(){var i=this.deps.length;while(i--) {this.deps[i].depend();}}; /**
	 * Remove self from all dependencies' subcriber list.
	 */Watcher.prototype.teardown = function(){if(this.active){ // remove self from vm's watcher list
	// this is a somewhat expensive operation so we skip it
	// if the vm is being destroyed or is performing a v-for
	// re-render (the watcher list is then filtered by v-for).
	if(!this.vm._isBeingDestroyed && !this.vm._vForRemoving){this.vm._watchers.$remove(this);}var i=this.deps.length;while(i--) {this.deps[i].removeSub(this);}this.active = false;this.vm = this.cb = this.value = null;}}; /**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */var seenObjects=new _Set();function traverse(val,seen){var i=undefined,keys=undefined;if(!seen){seen = seenObjects;seen.clear();}var isA=isArray(val);var isO=isObject(val);if(isA || isO){if(val.__ob__){var depId=val.__ob__.dep.id;if(seen.has(depId)){return;}else {seen.add(depId);}}if(isA){i = val.length;while(i--) traverse(val[i],seen);}else if(isO){keys = Object.keys(val);i = keys.length;while(i--) traverse(val[keys[i]],seen);}}}var text$1={bind:function bind(){this.attr = this.el.nodeType === 3?'data':'textContent';},update:function update(value){this.el[this.attr] = _toString(value);}};var templateCache=new Cache(1000);var idSelectorCache=new Cache(1000);var map={efault:[0,'',''],legend:[1,'<fieldset>','</fieldset>'],tr:[2,'<table><tbody>','</tbody></table>'],col:[2,'<table><tbody></tbody><colgroup>','</colgroup></table>']};map.td = map.th = [3,'<table><tbody><tr>','</tr></tbody></table>'];map.option = map.optgroup = [1,'<select multiple="multiple">','</select>'];map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1,'<table>','</table>'];map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1,'<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">','</svg>']; /**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */function isRealTemplate(node){return isTemplate(node) && isFragment(node.content);}var tagRE$1=/<([\w:-]+)/;var entityRE=/&#?\w+?;/; /**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */function stringToFragment(templateString,raw){ // try a cache hit first
	var cacheKey=raw?templateString:templateString.trim();var hit=templateCache.get(cacheKey);if(hit){return hit;}var frag=document.createDocumentFragment();var tagMatch=templateString.match(tagRE$1);var entityMatch=entityRE.test(templateString);if(!tagMatch && !entityMatch){ // text only, return a single text node.
	frag.appendChild(document.createTextNode(templateString));}else {var tag=tagMatch && tagMatch[1];var wrap=map[tag] || map.efault;var depth=wrap[0];var prefix=wrap[1];var suffix=wrap[2];var node=document.createElement('div');node.innerHTML = prefix + templateString + suffix;while(depth--) {node = node.lastChild;}var child; /* eslint-disable no-cond-assign */while(child = node.firstChild) { /* eslint-enable no-cond-assign */frag.appendChild(child);}}if(!raw){trimNode(frag);}templateCache.put(cacheKey,frag);return frag;} /**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */function nodeToFragment(node){ // if its a template tag and the browser supports it,
	// its content is already a document fragment. However, iOS Safari has
	// bug when using directly cloned template content with touch
	// events and can cause crashes when the nodes are removed from DOM, so we
	// have to treat template elements as string templates. (#2805)
	/* istanbul ignore if */if(isRealTemplate(node)){return stringToFragment(node.innerHTML);} // script template
	if(node.tagName === 'SCRIPT'){return stringToFragment(node.textContent);} // normal node, clone it to avoid mutating the original
	var clonedNode=cloneNode(node);var frag=document.createDocumentFragment();var child; /* eslint-disable no-cond-assign */while(child = clonedNode.firstChild) { /* eslint-enable no-cond-assign */frag.appendChild(child);}trimNode(frag);return frag;} // Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate=(function(){ /* istanbul ignore else */if(inBrowser){var a=document.createElement('div');a.innerHTML = '<template>1</template>';return !a.cloneNode(true).firstChild.innerHTML;}else {return false;}})(); // Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug=(function(){ /* istanbul ignore else */if(inBrowser){var t=document.createElement('textarea');t.placeholder = 't';return t.cloneNode(true).value === 't';}else {return false;}})(); /**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */function cloneNode(node){ /* istanbul ignore if */if(!node.querySelectorAll){return node.cloneNode();}var res=node.cloneNode(true);var i,original,cloned; /* istanbul ignore if */if(hasBrokenTemplate){var tempClone=res;if(isRealTemplate(node)){node = node.content;tempClone = res.content;}original = node.querySelectorAll('template');if(original.length){cloned = tempClone.querySelectorAll('template');i = cloned.length;while(i--) {cloned[i].parentNode.replaceChild(cloneNode(original[i]),cloned[i]);}}} /* istanbul ignore if */if(hasTextareaCloneBug){if(node.tagName === 'TEXTAREA'){res.value = node.value;}else {original = node.querySelectorAll('textarea');if(original.length){cloned = res.querySelectorAll('textarea');i = cloned.length;while(i--) {cloned[i].value = original[i].value;}}}}return res;} /**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */function parseTemplate(template,shouldClone,raw){var node,frag; // if the template is already a document fragment,
	// do nothing
	if(isFragment(template)){trimNode(template);return shouldClone?cloneNode(template):template;}if(typeof template === 'string'){ // id selector
	if(!raw && template.charAt(0) === '#'){ // id selector can be cached too
	frag = idSelectorCache.get(template);if(!frag){node = document.getElementById(template.slice(1));if(node){frag = nodeToFragment(node); // save selector to cache
	idSelectorCache.put(template,frag);}}}else { // normal string template
	frag = stringToFragment(template,raw);}}else if(template.nodeType){ // a direct node
	frag = nodeToFragment(template);}return frag && shouldClone?cloneNode(frag):frag;}var template=Object.freeze({cloneNode:cloneNode,parseTemplate:parseTemplate});var html={bind:function bind(){ // a comment node means this is a binding for
	// {{{ inline unescaped html }}}
	if(this.el.nodeType === 8){ // hold nodes
	this.nodes = []; // replace the placeholder with proper anchor
	this.anchor = createAnchor('v-html');replace(this.el,this.anchor);}},update:function update(value){value = _toString(value);if(this.nodes){this.swap(value);}else {this.el.innerHTML = value;}},swap:function swap(value){ // remove old nodes
	var i=this.nodes.length;while(i--) {remove(this.nodes[i]);} // convert new value to a fragment
	// do not attempt to retrieve from id selector
	var frag=parseTemplate(value,true,true); // save a reference to these nodes so we can remove later
	this.nodes = toArray(frag.childNodes);before(frag,this.anchor);}}; /**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 * @param {Fragment} [parentFrag]
	 */function Fragment(linker,vm,frag,host,scope,parentFrag){this.children = [];this.childFrags = [];this.vm = vm;this.scope = scope;this.inserted = false;this.parentFrag = parentFrag;if(parentFrag){parentFrag.childFrags.push(this);}this.unlink = linker(vm,frag,host,scope,this);var single=this.single = frag.childNodes.length === 1 &&  // do not go single mode if the only node is an anchor
	!frag.childNodes[0].__v_anchor;if(single){this.node = frag.childNodes[0];this.before = singleBefore;this.remove = singleRemove;}else {this.node = createAnchor('fragment-start');this.end = createAnchor('fragment-end');this.frag = frag;prepend(this.node,frag);frag.appendChild(this.end);this.before = multiBefore;this.remove = multiRemove;}this.node.__v_frag = this;} /**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */Fragment.prototype.callHook = function(hook){var i,l;for(i = 0,l = this.childFrags.length;i < l;i++) {this.childFrags[i].callHook(hook);}for(i = 0,l = this.children.length;i < l;i++) {hook(this.children[i]);}}; /**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */function singleBefore(target,withTransition){this.inserted = true;var method=withTransition !== false?beforeWithTransition:before;method(this.node,target,this.vm);if(inDoc(this.node)){this.callHook(attach);}} /**
	 * Remove fragment, single node version
	 */function singleRemove(){this.inserted = false;var shouldCallRemove=inDoc(this.node);var self=this;this.beforeRemove();removeWithTransition(this.node,this.vm,function(){if(shouldCallRemove){self.callHook(detach);}self.destroy();});} /**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */function multiBefore(target,withTransition){this.inserted = true;var vm=this.vm;var method=withTransition !== false?beforeWithTransition:before;mapNodeRange(this.node,this.end,function(node){method(node,target,vm);});if(inDoc(this.node)){this.callHook(attach);}} /**
	 * Remove fragment, multi-nodes version
	 */function multiRemove(){this.inserted = false;var self=this;var shouldCallRemove=inDoc(this.node);this.beforeRemove();removeNodeRange(this.node,this.end,this.vm,this.frag,function(){if(shouldCallRemove){self.callHook(detach);}self.destroy();});} /**
	 * Prepare the fragment for removal.
	 */Fragment.prototype.beforeRemove = function(){var i,l;for(i = 0,l = this.childFrags.length;i < l;i++) { // call the same method recursively on child
	// fragments, depth-first
	this.childFrags[i].beforeRemove(false);}for(i = 0,l = this.children.length;i < l;i++) { // Call destroy for all contained instances,
	// with remove:false and defer:true.
	// Defer is necessary because we need to
	// keep the children to call detach hooks
	// on them.
	this.children[i].$destroy(false,true);}var dirs=this.unlink.dirs;for(i = 0,l = dirs.length;i < l;i++) { // disable the watchers on all the directives
	// so that the rendered content stays the same
	// during removal.
	dirs[i]._watcher && dirs[i]._watcher.teardown();}}; /**
	 * Destroy the fragment.
	 */Fragment.prototype.destroy = function(){if(this.parentFrag){this.parentFrag.childFrags.$remove(this);}this.node.__v_frag = null;this.unlink();}; /**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */function attach(child){if(!child._isAttached && inDoc(child.$el)){child._callHook('attached');}} /**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */function detach(child){if(child._isAttached && !inDoc(child.$el)){child._callHook('detached');}}var linkerCache=new Cache(5000); /**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */function FragmentFactory(vm,el){this.vm = vm;var template;var isString=typeof el === 'string';if(isString || isTemplate(el) && !el.hasAttribute('v-if')){template = parseTemplate(el,true);}else {template = document.createDocumentFragment();template.appendChild(el);}this.template = template; // linker can be cached, but only for components
	var linker;var cid=vm.constructor.cid;if(cid > 0){var cacheId=cid + (isString?el:getOuterHTML(el));linker = linkerCache.get(cacheId);if(!linker){linker = compile(template,vm.$options,true);linkerCache.put(cacheId,linker);}}else {linker = compile(template,vm.$options,true);}this.linker = linker;} /**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */FragmentFactory.prototype.create = function(host,scope,parentFrag){var frag=cloneNode(this.template);return new Fragment(this.linker,this.vm,frag,host,scope,parentFrag);};var ON=700;var MODEL=800;var BIND=850;var TRANSITION=1100;var EL=1500;var COMPONENT=1500;var PARTIAL=1750;var IF=2100;var FOR=2200;var SLOT=2300;var uid$3=0;var vFor={priority:FOR,terminal:true,params:['track-by','stagger','enter-stagger','leave-stagger'],bind:function bind(){ // support "item in/of items" syntax
	var inMatch=this.expression.match(/(.*) (?:in|of) (.*)/);if(inMatch){var itMatch=inMatch[1].match(/\((.*),(.*)\)/);if(itMatch){this.iterator = itMatch[1].trim();this.alias = itMatch[2].trim();}else {this.alias = inMatch[1].trim();}this.expression = inMatch[2];}if(!this.alias){process.env.NODE_ENV !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.',this.vm);return;} // uid as a cache identifier
	this.id = '__v-for__' + ++uid$3; // check if this is an option list,
	// so that we know if we need to update the <select>'s
	// v-model when the option list has changed.
	// because v-model has a lower priority than v-for,
	// the v-model is not bound here yet, so we have to
	// retrive it in the actual updateModel() function.
	var tag=this.el.tagName;this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT'; // setup anchor nodes
	this.start = createAnchor('v-for-start');this.end = createAnchor('v-for-end');replace(this.el,this.end);before(this.start,this.end); // cache
	this.cache = Object.create(null); // fragment factory
	this.factory = new FragmentFactory(this.vm,this.el);},update:function update(data){this.diff(data);this.updateRef();this.updateModel();}, /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */diff:function diff(data){ // check if the Array was converted from an Object
	var item=data[0];var convertedFromObject=this.fromObject = isObject(item) && hasOwn(item,'$key') && hasOwn(item,'$value');var trackByKey=this.params.trackBy;var oldFrags=this.frags;var frags=this.frags = new Array(data.length);var alias=this.alias;var iterator=this.iterator;var start=this.start;var end=this.end;var inDocument=inDoc(start);var init=!oldFrags;var i,l,frag,key,value,primitive; // First pass, go through the new Array and fill up
	// the new frags array. If a piece of data has a cached
	// instance for it, we reuse it. Otherwise build a new
	// instance.
	for(i = 0,l = data.length;i < l;i++) {item = data[i];key = convertedFromObject?item.$key:null;value = convertedFromObject?item.$value:item;primitive = !isObject(value);frag = !init && this.getCachedFrag(value,i,key);if(frag){ // reusable fragment
	frag.reused = true; // update $index
	frag.scope.$index = i; // update $key
	if(key){frag.scope.$key = key;} // update iterator
	if(iterator){frag.scope[iterator] = key !== null?key:i;} // update data for track-by, object repeat &
	// primitive values.
	if(trackByKey || convertedFromObject || primitive){withoutConversion(function(){frag.scope[alias] = value;});}}else { // new isntance
	frag = this.create(value,alias,i,key);frag.fresh = !init;}frags[i] = frag;if(init){frag.before(end);}} // we're done for the initial render.
	if(init){return;} // Second pass, go through the old fragments and
	// destroy those who are not reused (and remove them
	// from cache)
	var removalIndex=0;var totalRemoved=oldFrags.length - frags.length; // when removing a large number of fragments, watcher removal
	// turns out to be a perf bottleneck, so we batch the watcher
	// removals into a single filter call!
	this.vm._vForRemoving = true;for(i = 0,l = oldFrags.length;i < l;i++) {frag = oldFrags[i];if(!frag.reused){this.deleteCachedFrag(frag);this.remove(frag,removalIndex++,totalRemoved,inDocument);}}this.vm._vForRemoving = false;if(removalIndex){this.vm._watchers = this.vm._watchers.filter(function(w){return w.active;});} // Final pass, move/insert new fragments into the
	// right place.
	var targetPrev,prevEl,currentPrev;var insertionIndex=0;for(i = 0,l = frags.length;i < l;i++) {frag = frags[i]; // this is the frag that we should be after
	targetPrev = frags[i - 1];prevEl = targetPrev?targetPrev.staggerCb?targetPrev.staggerAnchor:targetPrev.end || targetPrev.node:start;if(frag.reused && !frag.staggerCb){currentPrev = findPrevFrag(frag,start,this.id);if(currentPrev !== targetPrev && (!currentPrev ||  // optimization for moving a single item.
	// thanks to suggestions by @livoras in #1807
	findPrevFrag(currentPrev,start,this.id) !== targetPrev)){this.move(frag,prevEl);}}else { // new instance, or still in stagger.
	// insert with updated stagger index.
	this.insert(frag,insertionIndex++,prevEl,inDocument);}frag.reused = frag.fresh = false;}}, /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */create:function create(value,alias,index,key){var host=this._host; // create iteration scope
	var parentScope=this._scope || this.vm;var scope=Object.create(parentScope); // ref holder for the scope
	scope.$refs = Object.create(parentScope.$refs);scope.$els = Object.create(parentScope.$els); // make sure point $parent to parent scope
	scope.$parent = parentScope; // for two-way binding on alias
	scope.$forContext = this; // define scope properties
	// important: define the scope alias without forced conversion
	// so that frozen data structures remain non-reactive.
	withoutConversion(function(){defineReactive(scope,alias,value);});defineReactive(scope,'$index',index);if(key){defineReactive(scope,'$key',key);}else if(scope.$key){ // avoid accidental fallback
	def(scope,'$key',null);}if(this.iterator){defineReactive(scope,this.iterator,key !== null?key:index);}var frag=this.factory.create(host,scope,this._frag);frag.forId = this.id;this.cacheFrag(value,frag,index,key);return frag;}, /**
	   * Update the v-ref on owner vm.
	   */updateRef:function updateRef(){var ref=this.descriptor.ref;if(!ref)return;var hash=(this._scope || this.vm).$refs;var refs;if(!this.fromObject){refs = this.frags.map(findVmFromFrag);}else {refs = {};this.frags.forEach(function(frag){refs[frag.scope.$key] = findVmFromFrag(frag);});}hash[ref] = refs;}, /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */updateModel:function updateModel(){if(this.isOption){var parent=this.start.parentNode;var model=parent && parent.__v_model;if(model){model.forceUpdate();}}}, /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */insert:function insert(frag,index,prevEl,inDocument){if(frag.staggerCb){frag.staggerCb.cancel();frag.staggerCb = null;}var staggerAmount=this.getStagger(frag,index,null,'enter');if(inDocument && staggerAmount){ // create an anchor and insert it synchronously,
	// so that we can resolve the correct order without
	// worrying about some elements not inserted yet
	var anchor=frag.staggerAnchor;if(!anchor){anchor = frag.staggerAnchor = createAnchor('stagger-anchor');anchor.__v_frag = frag;}after(anchor,prevEl);var op=frag.staggerCb = cancellable(function(){frag.staggerCb = null;frag.before(anchor);remove(anchor);});setTimeout(op,staggerAmount);}else {var target=prevEl.nextSibling; /* istanbul ignore if */if(!target){ // reset end anchor position in case the position was messed up
	// by an external drag-n-drop library.
	after(this.end,prevEl);target = this.end;}frag.before(target);}}, /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */remove:function remove(frag,index,total,inDocument){if(frag.staggerCb){frag.staggerCb.cancel();frag.staggerCb = null; // it's not possible for the same frag to be removed
	// twice, so if we have a pending stagger callback,
	// it means this frag is queued for enter but removed
	// before its transition started. Since it is already
	// destroyed, we can just leave it in detached state.
	return;}var staggerAmount=this.getStagger(frag,index,total,'leave');if(inDocument && staggerAmount){var op=frag.staggerCb = cancellable(function(){frag.staggerCb = null;frag.remove();});setTimeout(op,staggerAmount);}else {frag.remove();}}, /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */move:function move(frag,prevEl){ // fix a common issue with Sortable:
	// if prevEl doesn't have nextSibling, this means it's
	// been dragged after the end anchor. Just re-position
	// the end anchor to the end of the container.
	/* istanbul ignore if */if(!prevEl.nextSibling){this.end.parentNode.appendChild(this.end);}frag.before(prevEl.nextSibling,false);}, /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */cacheFrag:function cacheFrag(value,frag,index,key){var trackByKey=this.params.trackBy;var cache=this.cache;var primitive=!isObject(value);var id;if(key || trackByKey || primitive){id = getTrackByKey(index,key,value,trackByKey);if(!cache[id]){cache[id] = frag;}else if(trackByKey !== '$index'){process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);}}else {id = this.id;if(hasOwn(value,id)){if(value[id] === null){value[id] = frag;}else {process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);}}else if(Object.isExtensible(value)){def(value,id,frag);}else if(process.env.NODE_ENV !== 'production'){warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');}}frag.raw = value;}, /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */getCachedFrag:function getCachedFrag(value,index,key){var trackByKey=this.params.trackBy;var primitive=!isObject(value);var frag;if(key || trackByKey || primitive){var id=getTrackByKey(index,key,value,trackByKey);frag = this.cache[id];}else {frag = value[this.id];}if(frag && (frag.reused || frag.fresh)){process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);}return frag;}, /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */deleteCachedFrag:function deleteCachedFrag(frag){var value=frag.raw;var trackByKey=this.params.trackBy;var scope=frag.scope;var index=scope.$index; // fix #948: avoid accidentally fall through to
	// a parent repeater which happens to have $key.
	var key=hasOwn(scope,'$key') && scope.$key;var primitive=!isObject(value);if(trackByKey || key || primitive){var id=getTrackByKey(index,key,value,trackByKey);this.cache[id] = null;}else {value[this.id] = null;frag.raw = null;}}, /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */getStagger:function getStagger(frag,index,total,type){type = type + 'Stagger';var trans=frag.node.__v_trans;var hooks=trans && trans.hooks;var hook=hooks && (hooks[type] || hooks.stagger);return hook?hook.call(frag,index,total):index * parseInt(this.params[type] || this.params.stagger,10);}, /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */_preProcess:function _preProcess(value){ // regardless of type, store the un-filtered raw value.
	this.rawValue = value;return value;}, /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * wathcer's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */_postProcess:function _postProcess(value){if(isArray(value)){return value;}else if(isPlainObject(value)){ // convert plain object to array.
	var keys=Object.keys(value);var i=keys.length;var res=new Array(i);var key;while(i--) {key = keys[i];res[i] = {$key:key,$value:value[key]};}return res;}else {if(typeof value === 'number' && !isNaN(value)){value = range(value);}return value || [];}},unbind:function unbind(){if(this.descriptor.ref){(this._scope || this.vm).$refs[this.descriptor.ref] = null;}if(this.frags){var i=this.frags.length;var frag;while(i--) {frag = this.frags[i];this.deleteCachedFrag(frag);frag.destroy();}}}}; /**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */function findPrevFrag(frag,anchor,id){var el=frag.node.previousSibling; /* istanbul ignore if */if(!el)return;frag = el.__v_frag;while((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {el = el.previousSibling; /* istanbul ignore if */if(!el)return;frag = el.__v_frag;}return frag;} /**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */function findVmFromFrag(frag){var node=frag.node; // handle multi-node frag
	if(frag.end){while(!node.__vue__ && node !== frag.end && node.nextSibling) {node = node.nextSibling;}}return node.__vue__;} /**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */function range(n){var i=-1;var ret=new Array(Math.floor(n));while(++i < n) {ret[i] = i;}return ret;} /**
	 * Get the track by key for an item.
	 *
	 * @param {Number} index
	 * @param {String} key
	 * @param {*} value
	 * @param {String} [trackByKey]
	 */function getTrackByKey(index,key,value,trackByKey){return trackByKey?trackByKey === '$index'?index:trackByKey.charAt(0).match(/\w/)?getPath(value,trackByKey):value[trackByKey]:key || value;}if(process.env.NODE_ENV !== 'production'){vFor.warnDuplicate = function(value){warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.',this.vm);};}var vIf={priority:IF,terminal:true,bind:function bind(){var el=this.el;if(!el.__vue__){ // check else block
	var next=el.nextElementSibling;if(next && getAttr(next,'v-else') !== null){remove(next);this.elseEl = next;} // check main block
	this.anchor = createAnchor('v-if');replace(el,this.anchor);}else {process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.',this.vm);this.invalid = true;}},update:function update(value){if(this.invalid)return;if(value){if(!this.frag){this.insert();}}else {this.remove();}},insert:function insert(){if(this.elseFrag){this.elseFrag.remove();this.elseFrag = null;} // lazy init factory
	if(!this.factory){this.factory = new FragmentFactory(this.vm,this.el);}this.frag = this.factory.create(this._host,this._scope,this._frag);this.frag.before(this.anchor);},remove:function remove(){if(this.frag){this.frag.remove();this.frag = null;}if(this.elseEl && !this.elseFrag){if(!this.elseFactory){this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm,this.elseEl);}this.elseFrag = this.elseFactory.create(this._host,this._scope,this._frag);this.elseFrag.before(this.anchor);}},unbind:function unbind(){if(this.frag){this.frag.destroy();}if(this.elseFrag){this.elseFrag.destroy();}}};var show={bind:function bind(){ // check else block
	var next=this.el.nextElementSibling;if(next && getAttr(next,'v-else') !== null){this.elseEl = next;}},update:function update(value){this.apply(this.el,value);if(this.elseEl){this.apply(this.elseEl,!value);}},apply:function apply(el,value){if(inDoc(el)){applyTransition(el,value?1:-1,toggle,this.vm);}else {toggle();}function toggle(){el.style.display = value?'':'none';}}};var text$2={bind:function bind(){var self=this;var el=this.el;var isRange=el.type === 'range';var lazy=this.params.lazy;var number=this.params.number;var debounce=this.params.debounce; // handle composition events.
	//   http://blog.evanyou.me/2014/01/03/composition-event/
	// skip this for Android because it handles composition
	// events quite differently. Android doesn't trigger
	// composition events for language input methods e.g.
	// Chinese, but instead triggers them for spelling
	// suggestions... (see Discussion/#162)
	var composing=false;if(!isAndroid && !isRange){this.on('compositionstart',function(){composing = true;});this.on('compositionend',function(){composing = false; // in IE11 the "compositionend" event fires AFTER
	// the "input" event, so the input handler is blocked
	// at the end... have to call it here.
	//
	// #1327: in lazy mode this is unecessary.
	if(!lazy){self.listener();}});} // prevent messing with the input when user is typing,
	// and force update on blur.
	this.focused = false;if(!isRange && !lazy){this.on('focus',function(){self.focused = true;});this.on('blur',function(){self.focused = false; // do not sync value after fragment removal (#2017)
	if(!self._frag || self._frag.inserted){self.rawListener();}});} // Now attach the main listener
	this.listener = this.rawListener = function(){if(composing || !self._bound){return;}var val=number || isRange?toNumber(el.value):el.value;self.set(val); // force update on next tick to avoid lock & same value
	// also only update when user is not typing
	nextTick(function(){if(self._bound && !self.focused){self.update(self._watcher.value);}});}; // apply debounce
	if(debounce){this.listener = _debounce(this.listener,debounce);} // Support jQuery events, since jQuery.trigger() doesn't
	// trigger native events in some cases and some plugins
	// rely on $.trigger()
	//
	// We want to make sure if a listener is attached using
	// jQuery, it is also removed with jQuery, that's why
	// we do the check for each directive instance and
	// store that check result on itself. This also allows
	// easier test coverage control by unsetting the global
	// jQuery variable in tests.
	this.hasjQuery = typeof jQuery === 'function';if(this.hasjQuery){var method=jQuery.fn.on?'on':'bind';jQuery(el)[method]('change',this.rawListener);if(!lazy){jQuery(el)[method]('input',this.listener);}}else {this.on('change',this.rawListener);if(!lazy){this.on('input',this.listener);}} // IE9 doesn't fire input event on backspace/del/cut
	if(!lazy && isIE9){this.on('cut',function(){nextTick(self.listener);});this.on('keyup',function(e){if(e.keyCode === 46 || e.keyCode === 8){self.listener();}});} // set initial value if present
	if(el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()){this.afterBind = this.listener;}},update:function update(value){this.el.value = _toString(value);},unbind:function unbind(){var el=this.el;if(this.hasjQuery){var method=jQuery.fn.off?'off':'unbind';jQuery(el)[method]('change',this.listener);jQuery(el)[method]('input',this.listener);}}};var radio={bind:function bind(){var self=this;var el=this.el;this.getValue = function(){ // value overwrite via v-bind:value
	if(el.hasOwnProperty('_value')){return el._value;}var val=el.value;if(self.params.number){val = toNumber(val);}return val;};this.listener = function(){self.set(self.getValue());};this.on('change',this.listener);if(el.hasAttribute('checked')){this.afterBind = this.listener;}},update:function update(value){this.el.checked = looseEqual(value,this.getValue());}};var select={bind:function bind(){var self=this;var el=this.el; // method to force update DOM using latest value.
	this.forceUpdate = function(){if(self._watcher){self.update(self._watcher.get());}}; // check if this is a multiple select
	var multiple=this.multiple = el.hasAttribute('multiple'); // attach listener
	this.listener = function(){var value=getValue(el,multiple);value = self.params.number?isArray(value)?value.map(toNumber):toNumber(value):value;self.set(value);};this.on('change',this.listener); // if has initial value, set afterBind
	var initValue=getValue(el,multiple,true);if(multiple && initValue.length || !multiple && initValue !== null){this.afterBind = this.listener;} // All major browsers except Firefox resets
	// selectedIndex with value -1 to 0 when the element
	// is appended to a new parent, therefore we have to
	// force a DOM update whenever that happens...
	this.vm.$on('hook:attached',this.forceUpdate);},update:function update(value){var el=this.el;el.selectedIndex = -1;var multi=this.multiple && isArray(value);var options=el.options;var i=options.length;var op,val;while(i--) {op = options[i];val = op.hasOwnProperty('_value')?op._value:op.value; /* eslint-disable eqeqeq */op.selected = multi?indexOf$1(value,val) > -1:looseEqual(value,val); /* eslint-enable eqeqeq */}},unbind:function unbind(){ /* istanbul ignore next */this.vm.$off('hook:attached',this.forceUpdate);}}; /**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */function getValue(el,multi,init){var res=multi?[]:null;var op,val,selected;for(var i=0,l=el.options.length;i < l;i++) {op = el.options[i];selected = init?op.hasAttribute('selected'):op.selected;if(selected){val = op.hasOwnProperty('_value')?op._value:op.value;if(multi){res.push(val);}else {return val;}}}return res;} /**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */function indexOf$1(arr,val){var i=arr.length;while(i--) {if(looseEqual(arr[i],val)){return i;}}return -1;}var checkbox={bind:function bind(){var self=this;var el=this.el;this.getValue = function(){return el.hasOwnProperty('_value')?el._value:self.params.number?toNumber(el.value):el.value;};function getBooleanValue(){var val=el.checked;if(val && el.hasOwnProperty('_trueValue')){return el._trueValue;}if(!val && el.hasOwnProperty('_falseValue')){return el._falseValue;}return val;}this.listener = function(){var model=self._watcher.value;if(isArray(model)){var val=self.getValue();if(el.checked){if(indexOf(model,val) < 0){model.push(val);}}else {model.$remove(val);}}else {self.set(getBooleanValue());}};this.on('change',this.listener);if(el.hasAttribute('checked')){this.afterBind = this.listener;}},update:function update(value){var el=this.el;if(isArray(value)){el.checked = indexOf(value,this.getValue()) > -1;}else {if(el.hasOwnProperty('_trueValue')){el.checked = looseEqual(value,el._trueValue);}else {el.checked = !!value;}}}};var handlers={text:text$2,radio:radio,select:select,checkbox:checkbox};var model={priority:MODEL,twoWay:true,handlers:handlers,params:['lazy','number','debounce'], /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */bind:function bind(){ // friendly warning...
	this.checkFilters();if(this.hasRead && !this.hasWrite){process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.',this.vm);}var el=this.el;var tag=el.tagName;var handler;if(tag === 'INPUT'){handler = handlers[el.type] || handlers.text;}else if(tag === 'SELECT'){handler = handlers.select;}else if(tag === 'TEXTAREA'){handler = handlers.text;}else {process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag,this.vm);return;}el.__v_model = this;handler.bind.call(this);this.update = handler.update;this._unbind = handler.unbind;}, /**
	   * Check read/write filter stats.
	   */checkFilters:function checkFilters(){var filters=this.filters;if(!filters)return;var i=filters.length;while(i--) {var filter=resolveAsset(this.vm.$options,'filters',filters[i].name);if(typeof filter === 'function' || filter.read){this.hasRead = true;}if(filter.write){this.hasWrite = true;}}},unbind:function unbind(){this.el.__v_model = null;this._unbind && this._unbind();}}; // keyCode aliases
	var keyCodes={esc:27,tab:9,enter:13,space:32,'delete':[8,46],up:38,left:37,right:39,down:40};function keyFilter(handler,keys){var codes=keys.map(function(key){var charCode=key.charCodeAt(0);if(charCode > 47 && charCode < 58){return parseInt(key,10);}if(key.length === 1){charCode = key.toUpperCase().charCodeAt(0);if(charCode > 64 && charCode < 91){return charCode;}}return keyCodes[key];});codes = [].concat.apply([],codes);return function keyHandler(e){if(codes.indexOf(e.keyCode) > -1){return handler.call(this,e);}};}function stopFilter(handler){return function stopHandler(e){e.stopPropagation();return handler.call(this,e);};}function preventFilter(handler){return function preventHandler(e){e.preventDefault();return handler.call(this,e);};}function selfFilter(handler){return function selfHandler(e){if(e.target === e.currentTarget){return handler.call(this,e);}};}var on$1={priority:ON,acceptStatement:true,keyCodes:keyCodes,bind:function bind(){ // deal with iframes
	if(this.el.tagName === 'IFRAME' && this.arg !== 'load'){var self=this;this.iframeBind = function(){on(self.el.contentWindow,self.arg,self.handler,self.modifiers.capture);};this.on('load',this.iframeBind);}},update:function update(handler){ // stub a noop for v-on with no value,
	// e.g. @mousedown.prevent
	if(!this.descriptor.raw){handler = function(){};}if(typeof handler !== 'function'){process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler,this.vm);return;} // apply modifiers
	if(this.modifiers.stop){handler = stopFilter(handler);}if(this.modifiers.prevent){handler = preventFilter(handler);}if(this.modifiers.self){handler = selfFilter(handler);} // key filter
	var keys=Object.keys(this.modifiers).filter(function(key){return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';});if(keys.length){handler = keyFilter(handler,keys);}this.reset();this.handler = handler;if(this.iframeBind){this.iframeBind();}else {on(this.el,this.arg,this.handler,this.modifiers.capture);}},reset:function reset(){var el=this.iframeBind?this.el.contentWindow:this.el;if(this.handler){off(el,this.arg,this.handler);}},unbind:function unbind(){this.reset();}};var prefixes=['-webkit-','-moz-','-ms-'];var camelPrefixes=['Webkit','Moz','ms'];var importantRE=/!important;?$/;var propCache=Object.create(null);var testEl=null;var style={deep:true,update:function update(value){if(typeof value === 'string'){this.el.style.cssText = value;}else if(isArray(value)){this.handleObject(value.reduce(extend,{}));}else {this.handleObject(value || {});}},handleObject:function handleObject(value){ // cache object styles so that only changed props
	// are actually updated.
	var cache=this.cache || (this.cache = {});var name,val;for(name in cache) {if(!(name in value)){this.handleSingle(name,null);delete cache[name];}}for(name in value) {val = value[name];if(val !== cache[name]){cache[name] = val;this.handleSingle(name,val);}}},handleSingle:function handleSingle(prop,value){prop = normalize(prop);if(!prop)return; // unsupported prop
	// cast possible numbers/booleans into strings
	if(value != null)value += '';if(value){var isImportant=importantRE.test(value)?'important':'';if(isImportant){ /* istanbul ignore if */if(process.env.NODE_ENV !== 'production'){warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');}value = value.replace(importantRE,'').trim();this.el.style.setProperty(prop.kebab,value,isImportant);}else {this.el.style[prop.camel] = value;}}else {this.el.style[prop.camel] = '';}}}; /**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */function normalize(prop){if(propCache[prop]){return propCache[prop];}var res=prefix(prop);propCache[prop] = propCache[res] = res;return res;} /**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */function prefix(prop){prop = hyphenate(prop);var camel=camelize(prop);var upper=camel.charAt(0).toUpperCase() + camel.slice(1);if(!testEl){testEl = document.createElement('div');}var i=prefixes.length;var prefixed;if(camel !== 'filter' && camel in testEl.style){return {kebab:prop,camel:camel};}while(i--) {prefixed = camelPrefixes[i] + upper;if(prefixed in testEl.style){return {kebab:prefixes[i] + prop,camel:prefixed};}}} // xlink
	var xlinkNS='http://www.w3.org/1999/xlink';var xlinkRE=/^xlink:/; // check for attributes that prohibit interpolations
	var disallowedInterpAttrRE=/^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/; // these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE=/^(?:value|checked|selected|muted)$/; // these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE=/^(?:draggable|contenteditable|spellcheck)$/; // these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps={value:'_value','true-value':'_trueValue','false-value':'_falseValue'};var bind$1={priority:BIND,bind:function bind(){var attr=this.arg;var tag=this.el.tagName; // should be deep watch on object mode
	if(!attr){this.deep = true;} // handle interpolation bindings
	var descriptor=this.descriptor;var tokens=descriptor.interp;if(tokens){ // handle interpolations with one-time tokens
	if(descriptor.hasOneTime){this.expression = tokensToExp(tokens,this._scope || this.vm);} // only allow binding on native attributes
	if(disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')){process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.',this.vm);this.el.removeAttribute(attr);this.invalid = true;} /* istanbul ignore if */if(process.env.NODE_ENV !== 'production'){var raw=attr + '="' + descriptor.raw + '": '; // warn src
	if(attr === 'src'){warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.',this.vm);} // warn style
	if(attr === 'style'){warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.',this.vm);}}}},update:function update(value){if(this.invalid){return;}var attr=this.arg;if(this.arg){this.handleSingle(attr,value);}else {this.handleObject(value || {});}}, // share object handler with v-bind:class
	handleObject:style.handleObject,handleSingle:function handleSingle(attr,value){var el=this.el;var interp=this.descriptor.interp;if(this.modifiers.camel){attr = camelize(attr);}if(!interp && attrWithPropsRE.test(attr) && attr in el){var attrValue=attr === 'value'?value == null // IE9 will set input.value to "null" for null...
	?'':value:value;if(el[attr] !== attrValue){el[attr] = attrValue;}} // set model props
	var modelProp=modelProps[attr];if(!interp && modelProp){el[modelProp] = value; // update v-model if present
	var model=el.__v_model;if(model){model.listener();}} // do not set value attribute for textarea
	if(attr === 'value' && el.tagName === 'TEXTAREA'){el.removeAttribute(attr);return;} // update attribute
	if(enumeratedAttrRE.test(attr)){el.setAttribute(attr,value?'true':'false');}else if(value != null && value !== false){if(attr === 'class'){ // handle edge case #1960:
	// class interpolation should not overwrite Vue transition class
	if(el.__v_trans){value += ' ' + el.__v_trans.id + '-transition';}setClass(el,value);}else if(xlinkRE.test(attr)){el.setAttributeNS(xlinkNS,attr,value === true?'':value);}else {el.setAttribute(attr,value === true?'':value);}}else {el.removeAttribute(attr);}}};var el={priority:EL,bind:function bind(){ /* istanbul ignore if */if(!this.arg){return;}var id=this.id = camelize(this.arg);var refs=(this._scope || this.vm).$els;if(hasOwn(refs,id)){refs[id] = this.el;}else {defineReactive(refs,id,this.el);}},unbind:function unbind(){var refs=(this._scope || this.vm).$els;if(refs[this.id] === this.el){refs[this.id] = null;}}};var ref={bind:function bind(){process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.',this.vm);}};var cloak={bind:function bind(){var el=this.el;this.vm.$once('pre-hook:compiled',function(){el.removeAttribute('v-cloak');});}}; // must export plain object
	var directives={text:text$1,html:html,'for':vFor,'if':vIf,show:show,model:model,on:on$1,bind:bind$1,el:el,ref:ref,cloak:cloak};var vClass={deep:true,update:function update(value){if(!value){this.cleanup();}else if(typeof value === 'string'){this.setClass(value.trim().split(/\s+/));}else {this.setClass(normalize$1(value));}},setClass:function setClass(value){this.cleanup(value);for(var i=0,l=value.length;i < l;i++) {var val=value[i];if(val){apply(this.el,val,addClass);}}this.prevKeys = value;},cleanup:function cleanup(value){var prevKeys=this.prevKeys;if(!prevKeys)return;var i=prevKeys.length;while(i--) {var key=prevKeys[i];if(!value || value.indexOf(key) < 0){apply(this.el,key,removeClass);}}}}; /**
	 * Normalize objects and arrays (potentially containing objects)
	 * into array of strings.
	 *
	 * @param {Object|Array<String|Object>} value
	 * @return {Array<String>}
	 */function normalize$1(value){var res=[];if(isArray(value)){for(var i=0,l=value.length;i < l;i++) {var _key=value[i];if(_key){if(typeof _key === 'string'){res.push(_key);}else {for(var k in _key) {if(_key[k])res.push(k);}}}}}else if(isObject(value)){for(var key in value) {if(value[key])res.push(key);}}return res;} /**
	 * Add or remove a class/classes on an element
	 *
	 * @param {Element} el
	 * @param {String} key The class name. This may or may not
	 *                     contain a space character, in such a
	 *                     case we'll deal with multiple class
	 *                     names at once.
	 * @param {Function} fn
	 */function apply(el,key,fn){key = key.trim();if(key.indexOf(' ') === -1){fn(el,key);return;} // The key contains one or more space characters.
	// Since a class name doesn't accept such characters, we
	// treat it as multiple classes.
	var keys=key.split(/\s+/);for(var i=0,l=keys.length;i < l;i++) {fn(el,keys[i]);}}var component={priority:COMPONENT,params:['keep-alive','transition-mode','inline-template'], /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */bind:function bind(){if(!this.el.__vue__){ // keep-alive cache
	this.keepAlive = this.params.keepAlive;if(this.keepAlive){this.cache = {};} // check inline-template
	if(this.params.inlineTemplate){ // extract inline template as a DocumentFragment
	this.inlineTemplate = extractContent(this.el,true);} // component resolution related state
	this.pendingComponentCb = this.Component = null; // transition related state
	this.pendingRemovals = 0;this.pendingRemovalCb = null; // create a ref anchor
	this.anchor = createAnchor('v-component');replace(this.el,this.anchor); // remove is attribute.
	// this is removed during compilation, but because compilation is
	// cached, when the component is used elsewhere this attribute
	// will remain at link time.
	this.el.removeAttribute('is');this.el.removeAttribute(':is'); // remove ref, same as above
	if(this.descriptor.ref){this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));} // if static, build right now.
	if(this.literal){this.setComponent(this.expression);}}else {process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);}}, /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */update:function update(value){if(!this.literal){this.setComponent(value);}}, /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */setComponent:function setComponent(value,cb){this.invalidatePending();if(!value){ // just remove current
	this.unbuild(true);this.remove(this.childVM,cb);this.childVM = null;}else {var self=this;this.resolveComponent(value,function(){self.mountComponent(cb);});}}, /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */resolveComponent:function resolveComponent(value,cb){var self=this;this.pendingComponentCb = cancellable(function(Component){self.ComponentName = Component.options.name || (typeof value === 'string'?value:null);self.Component = Component;cb();});this.vm._resolveComponent(value,this.pendingComponentCb);}, /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */mountComponent:function mountComponent(cb){ // actual mount
	this.unbuild(true);var self=this;var activateHooks=this.Component.options.activate;var cached=this.getCached();var newComponent=this.build();if(activateHooks && !cached){this.waitingFor = newComponent;callActivateHooks(activateHooks,newComponent,function(){if(self.waitingFor !== newComponent){return;}self.waitingFor = null;self.transition(newComponent,cb);});}else { // update ref for kept-alive component
	if(cached){newComponent._updateRef();}this.transition(newComponent,cb);}}, /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */invalidatePending:function invalidatePending(){if(this.pendingComponentCb){this.pendingComponentCb.cancel();this.pendingComponentCb = null;}}, /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */build:function build(extraOptions){var cached=this.getCached();if(cached){return cached;}if(this.Component){ // default options
	var options={name:this.ComponentName,el:cloneNode(this.el),template:this.inlineTemplate, // make sure to add the child with correct parent
	// if this is a transcluded component, its parent
	// should be the transclusion host.
	parent:this._host || this.vm, // if no inline-template, then the compiled
	// linker can be cached for better performance.
	_linkerCachable:!this.inlineTemplate,_ref:this.descriptor.ref,_asComponent:true,_isRouterView:this._isRouterView, // if this is a transcluded component, context
	// will be the common parent vm of this instance
	// and its host.
	_context:this.vm, // if this is inside an inline v-for, the scope
	// will be the intermediate scope created for this
	// repeat fragment. this is used for linking props
	// and container directives.
	_scope:this._scope, // pass in the owner fragment of this component.
	// this is necessary so that the fragment can keep
	// track of its contained components in order to
	// call attach/detach hooks for them.
	_frag:this._frag}; // extra options
	// in 1.0.0 this is used by vue-router only
	/* istanbul ignore if */if(extraOptions){extend(options,extraOptions);}var child=new this.Component(options);if(this.keepAlive){this.cache[this.Component.cid] = child;} /* istanbul ignore if */if(process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment){warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template,child);}return child;}}, /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */getCached:function getCached(){return this.keepAlive && this.cache[this.Component.cid];}, /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */unbuild:function unbuild(defer){if(this.waitingFor){if(!this.keepAlive){this.waitingFor.$destroy();}this.waitingFor = null;}var child=this.childVM;if(!child || this.keepAlive){if(child){ // remove ref
	child._inactive = true;child._updateRef(true);}return;} // the sole purpose of `deferCleanup` is so that we can
	// "deactivate" the vm right now and perform DOM removal
	// later.
	child.$destroy(false,defer);}, /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */remove:function remove(child,cb){var keepAlive=this.keepAlive;if(child){ // we may have a component switch when a previous
	// component is still being transitioned out.
	// we want to trigger only one lastest insertion cb
	// when the existing transition finishes. (#1119)
	this.pendingRemovals++;this.pendingRemovalCb = cb;var self=this;child.$remove(function(){self.pendingRemovals--;if(!keepAlive)child._cleanup();if(!self.pendingRemovals && self.pendingRemovalCb){self.pendingRemovalCb();self.pendingRemovalCb = null;}});}else if(cb){cb();}}, /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */transition:function transition(target,cb){var self=this;var current=this.childVM; // for devtool inspection
	if(current)current._inactive = true;target._inactive = false;this.childVM = target;switch(self.params.transitionMode){case 'in-out':target.$before(self.anchor,function(){self.remove(current,cb);});break;case 'out-in':self.remove(current,function(){target.$before(self.anchor,cb);});break;default:self.remove(current);target.$before(self.anchor,cb);}}, /**
	   * Unbind.
	   */unbind:function unbind(){this.invalidatePending(); // Do not defer cleanup when unbinding
	this.unbuild(); // destroy all keep-alive cached instances
	if(this.cache){for(var key in this.cache) {this.cache[key].$destroy();}this.cache = null;}}}; /**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */function callActivateHooks(hooks,vm,cb){var total=hooks.length;var called=0;hooks[0].call(vm,next);function next(){if(++called >= total){cb();}else {hooks[called].call(vm,next);}}}var propBindingModes=config._propBindingModes;var empty={}; // regexes
	var identRE$1=/^[$_a-zA-Z]+[\w$]*$/;var settablePathRE=/^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/; /**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @param {Vue} vm
	 * @return {Function} propsLinkFn
	 */function compileProps(el,propOptions,vm){var props=[];var names=Object.keys(propOptions);var i=names.length;var options,name,attr,value,path,parsed,prop;while(i--) {name = names[i];options = propOptions[name] || empty;if(process.env.NODE_ENV !== 'production' && name === '$data'){warn('Do not use $data as prop.',vm);continue;} // props could contain dashes, which will be
	// interpreted as minus calculations by the parser
	// so we need to camelize the path here
	path = camelize(name);if(!identRE$1.test(path)){process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.',vm);continue;}prop = {name:name,path:path,options:options,mode:propBindingModes.ONE_WAY,raw:null};attr = hyphenate(name); // first check dynamic version
	if((value = getBindAttr(el,attr)) === null){if((value = getBindAttr(el,attr + '.sync')) !== null){prop.mode = propBindingModes.TWO_WAY;}else if((value = getBindAttr(el,attr + '.once')) !== null){prop.mode = propBindingModes.ONE_TIME;}}if(value !== null){ // has dynamic binding!
	prop.raw = value;parsed = parseDirective(value);value = parsed.expression;prop.filters = parsed.filters; // check binding type
	if(isLiteral(value) && !parsed.filters){ // for expressions containing literal numbers and
	// booleans, there's no need to setup a prop binding,
	// so we can optimize them as a one-time set.
	prop.optimizedLiteral = true;}else {prop.dynamic = true; // check non-settable path for two-way bindings
	if(process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)){prop.mode = propBindingModes.ONE_WAY;warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value,vm);}}prop.parentPath = value; // warn required two-way
	if(process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY){warn('Prop "' + name + '" expects a two-way binding type.',vm);}}else if((value = getAttr(el,attr)) !== null){ // has literal binding!
	prop.raw = value;}else if(process.env.NODE_ENV !== 'production'){ // check possible camelCase prop usage
	var lowerCaseName=path.toLowerCase();value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));if(value){warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.',vm);}else if(options.required){ // warn missing required
	warn('Missing required prop: ' + name,vm);}} // push prop
	props.push(prop);}return makePropsLinkFn(props);} /**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */function makePropsLinkFn(props){return function propsLinkFn(vm,scope){ // store resolved props info
	vm._props = {};var inlineProps=vm.$options.propsData;var i=props.length;var prop,path,options,value,raw;while(i--) {prop = props[i];raw = prop.raw;path = prop.path;options = prop.options;vm._props[path] = prop;if(inlineProps && hasOwn(inlineProps,path)){initProp(vm,prop,inlineProps[path]);}if(raw === null){ // initialize absent prop
	initProp(vm,prop,undefined);}else if(prop.dynamic){ // dynamic prop
	if(prop.mode === propBindingModes.ONE_TIME){ // one time binding
	value = (scope || vm._context || vm).$get(prop.parentPath);initProp(vm,prop,value);}else {if(vm._context){ // dynamic binding
	vm._bindDir({name:'prop',def:propDef,prop:prop},null,null,scope); // el, host, scope
	}else { // root instance
	initProp(vm,prop,vm.$get(prop.parentPath));}}}else if(prop.optimizedLiteral){ // optimized literal, cast it and just set once
	var stripped=stripQuotes(raw);value = stripped === raw?toBoolean(toNumber(raw)):stripped;initProp(vm,prop,value);}else { // string literal, but we need to cater for
	// Boolean props with no value, or with same
	// literal value (e.g. disabled="disabled")
	// see https://github.com/vuejs/vue-loader/issues/182
	value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name))?true:raw;initProp(vm,prop,value);}}};} /**
	 * Process a prop with a rawValue, applying necessary coersions,
	 * default values & assertions and call the given callback with
	 * processed value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} rawValue
	 * @param {Function} fn
	 */function processPropValue(vm,prop,rawValue,fn){var isSimple=prop.dynamic && isSimplePath(prop.parentPath);var value=rawValue;if(value === undefined){value = getPropDefaultValue(vm,prop);}value = coerceProp(prop,value);var coerced=value !== rawValue;if(!assertProp(prop,value,vm)){value = undefined;}if(isSimple && !coerced){withoutConversion(function(){fn(value);});}else {fn(value);}} /**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */function initProp(vm,prop,value){processPropValue(vm,prop,value,function(value){defineReactive(vm,prop.path,value);});} /**
	 * Update a prop's value on a vm.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */function updateProp(vm,prop,value){processPropValue(vm,prop,value,function(value){vm[prop.path] = value;});} /**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @return {*}
	 */function getPropDefaultValue(vm,prop){ // no default, return undefined
	var options=prop.options;if(!hasOwn(options,'default')){ // absent boolean value defaults to false
	return options.type === Boolean?false:undefined;}var def=options['default']; // warn against non-factory defaults for Object & Array
	if(isObject(def)){process.env.NODE_ENV !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.',vm);} // call factory function for non-Function types
	return typeof def === 'function' && options.type !== Function?def.call(vm):def;} /**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 * @param {Vue} vm
	 */function assertProp(prop,value,vm){if(!prop.options.required && ( // non-required
	prop.raw === null ||  // abscent
	value == null) // null or undefined
	){return true;}var options=prop.options;var type=options.type;var valid=!type;var expectedTypes=[];if(type){if(!isArray(type)){type = [type];}for(var i=0;i < type.length && !valid;i++) {var assertedType=assertType(value,type[i]);expectedTypes.push(assertedType.expectedType);valid = assertedType.valid;}}if(!valid){if(process.env.NODE_ENV !== 'production'){warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.',vm);}return false;}var validator=options.validator;if(validator){if(!validator(value)){process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".',vm);return false;}}return true;} /**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */function coerceProp(prop,value){var coerce=prop.options.coerce;if(!coerce){return value;} // coerce is a function
	return coerce(value);} /**
	 * Assert the type of a value
	 *
	 * @param {*} value
	 * @param {Function} type
	 * @return {Object}
	 */function assertType(value,type){var valid;var expectedType;if(type === String){expectedType = 'string';valid = typeof value === expectedType;}else if(type === Number){expectedType = 'number';valid = typeof value === expectedType;}else if(type === Boolean){expectedType = 'boolean';valid = typeof value === expectedType;}else if(type === Function){expectedType = 'function';valid = typeof value === expectedType;}else if(type === Object){expectedType = 'object';valid = isPlainObject(value);}else if(type === Array){expectedType = 'array';valid = isArray(value);}else {valid = value instanceof type;}return {valid:valid,expectedType:expectedType};} /**
	 * Format type for output
	 *
	 * @param {String} type
	 * @return {String}
	 */function formatType(type){return type?type.charAt(0).toUpperCase() + type.slice(1):'custom type';} /**
	 * Format value
	 *
	 * @param {*} value
	 * @return {String}
	 */function formatValue(val){return Object.prototype.toString.call(val).slice(8,-1);}var bindingModes=config._propBindingModes;var propDef={bind:function bind(){var child=this.vm;var parent=child._context; // passed in from compiler directly
	var prop=this.descriptor.prop;var childKey=prop.path;var parentKey=prop.parentPath;var twoWay=prop.mode === bindingModes.TWO_WAY;var parentWatcher=this.parentWatcher = new Watcher(parent,parentKey,function(val){updateProp(child,prop,val);},{twoWay:twoWay,filters:prop.filters, // important: props need to be observed on the
	// v-for scope if present
	scope:this._scope}); // set the child initial value.
	initProp(child,prop,parentWatcher.value); // setup two-way binding
	if(twoWay){ // important: defer the child watcher creation until
	// the created hook (after data observation)
	var self=this;child.$once('pre-hook:created',function(){self.childWatcher = new Watcher(child,childKey,function(val){parentWatcher.set(val);},{ // ensure sync upward before parent sync down.
	// this is necessary in cases e.g. the child
	// mutates a prop array, then replaces it. (#1683)
	sync:true});});}},unbind:function unbind(){this.parentWatcher.teardown();if(this.childWatcher){this.childWatcher.teardown();}}};var queue$1=[];var queued=false; /**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */function pushJob(job){queue$1.push(job);if(!queued){queued = true;nextTick(flush);}} /**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */function flush(){ // Force layout
	var f=document.documentElement.offsetHeight;for(var i=0;i < queue$1.length;i++) {queue$1[i]();}queue$1 = [];queued = false; // dummy return, so js linters don't complain about
	// unused variable f
	return f;}var TYPE_TRANSITION='transition';var TYPE_ANIMATION='animation';var transDurationProp=transitionProp + 'Duration';var animDurationProp=animationProp + 'Duration'; /**
	 * If a just-entered element is applied the
	 * leave class while its enter transition hasn't started yet,
	 * and the transitioned property has the same value for both
	 * enter/leave, then the leave transition will be skipped and
	 * the transitionend event never fires. This function ensures
	 * its callback to be called after a transition has started
	 * by waiting for double raf.
	 *
	 * It falls back to setTimeout on devices that support CSS
	 * transitions but not raf (e.g. Android 4.2 browser) - since
	 * these environments are usually slow, we are giving it a
	 * relatively large timeout.
	 */var raf=inBrowser && window.requestAnimationFrame;var waitForTransitionStart=raf /* istanbul ignore next */?function(fn){raf(function(){raf(fn);});}:function(fn){setTimeout(fn,50);}; /**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */function Transition(el,id,hooks,vm){this.id = id;this.el = el;this.enterClass = hooks && hooks.enterClass || id + '-enter';this.leaveClass = hooks && hooks.leaveClass || id + '-leave';this.hooks = hooks;this.vm = vm; // async state
	this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;this.justEntered = false;this.entered = this.left = false;this.typeCache = {}; // check css transition type
	this.type = hooks && hooks.type; /* istanbul ignore if */if(process.env.NODE_ENV !== 'production'){if(this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION){warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type,vm);}} // bind
	var self=this;['enterNextTick','enterDone','leaveNextTick','leaveDone'].forEach(function(m){self[m] = bind(self[m],self);});}var p$1=Transition.prototype; /**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */p$1.enter = function(op,cb){this.cancelPending();this.callHook('beforeEnter');this.cb = cb;addClass(this.el,this.enterClass);op();this.entered = false;this.callHookWithCb('enter');if(this.entered){return; // user called done synchronously.
	}this.cancel = this.hooks && this.hooks.enterCancelled;pushJob(this.enterNextTick);}; /**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */p$1.enterNextTick = function(){var _this=this; // prevent transition skipping
	this.justEntered = true;waitForTransitionStart(function(){_this.justEntered = false;});var enterDone=this.enterDone;var type=this.getCssTransitionType(this.enterClass);if(!this.pendingJsCb){if(type === TYPE_TRANSITION){ // trigger transition by removing enter class now
	removeClass(this.el,this.enterClass);this.setupCssCb(transitionEndEvent,enterDone);}else if(type === TYPE_ANIMATION){this.setupCssCb(animationEndEvent,enterDone);}else {enterDone();}}else if(type === TYPE_TRANSITION){removeClass(this.el,this.enterClass);}}; /**
	 * The "cleanup" phase of an entering transition.
	 */p$1.enterDone = function(){this.entered = true;this.cancel = this.pendingJsCb = null;removeClass(this.el,this.enterClass);this.callHook('afterEnter');if(this.cb)this.cb();}; /**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */p$1.leave = function(op,cb){this.cancelPending();this.callHook('beforeLeave');this.op = op;this.cb = cb;addClass(this.el,this.leaveClass);this.left = false;this.callHookWithCb('leave');if(this.left){return; // user called done synchronously.
	}this.cancel = this.hooks && this.hooks.leaveCancelled; // only need to handle leaveDone if
	// 1. the transition is already done (synchronously called
	//    by the user, which causes this.op set to null)
	// 2. there's no explicit js callback
	if(this.op && !this.pendingJsCb){ // if a CSS transition leaves immediately after enter,
	// the transitionend event never fires. therefore we
	// detect such cases and end the leave immediately.
	if(this.justEntered){this.leaveDone();}else {pushJob(this.leaveNextTick);}}}; /**
	 * The "nextTick" phase of a leaving transition.
	 */p$1.leaveNextTick = function(){var type=this.getCssTransitionType(this.leaveClass);if(type){var event=type === TYPE_TRANSITION?transitionEndEvent:animationEndEvent;this.setupCssCb(event,this.leaveDone);}else {this.leaveDone();}}; /**
	 * The "cleanup" phase of a leaving transition.
	 */p$1.leaveDone = function(){this.left = true;this.cancel = this.pendingJsCb = null;this.op();removeClass(this.el,this.leaveClass);this.callHook('afterLeave');if(this.cb)this.cb();this.op = null;}; /**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */p$1.cancelPending = function(){this.op = this.cb = null;var hasPending=false;if(this.pendingCssCb){hasPending = true;off(this.el,this.pendingCssEvent,this.pendingCssCb);this.pendingCssEvent = this.pendingCssCb = null;}if(this.pendingJsCb){hasPending = true;this.pendingJsCb.cancel();this.pendingJsCb = null;}if(hasPending){removeClass(this.el,this.enterClass);removeClass(this.el,this.leaveClass);}if(this.cancel){this.cancel.call(this.vm,this.el);this.cancel = null;}}; /**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */p$1.callHook = function(type){if(this.hooks && this.hooks[type]){this.hooks[type].call(this.vm,this.el);}}; /**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */p$1.callHookWithCb = function(type){var hook=this.hooks && this.hooks[type];if(hook){if(hook.length > 1){this.pendingJsCb = cancellable(this[type + 'Done']);}hook.call(this.vm,this.el,this.pendingJsCb);}}; /**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */p$1.getCssTransitionType = function(className){ /* istanbul ignore if */if(!transitionEndEvent ||  // skip CSS transitions if page is not visible -
	// this solves the issue of transitionend events not
	// firing until the page is visible again.
	// pageVisibility API is supported in IE10+, same as
	// CSS transitions.
	document.hidden ||  // explicit js-only transition
	this.hooks && this.hooks.css === false ||  // element is hidden
	isHidden(this.el)){return;}var type=this.type || this.typeCache[className];if(type)return type;var inlineStyles=this.el.style;var computedStyles=window.getComputedStyle(this.el);var transDuration=inlineStyles[transDurationProp] || computedStyles[transDurationProp];if(transDuration && transDuration !== '0s'){type = TYPE_TRANSITION;}else {var animDuration=inlineStyles[animDurationProp] || computedStyles[animDurationProp];if(animDuration && animDuration !== '0s'){type = TYPE_ANIMATION;}}if(type){this.typeCache[className] = type;}return type;}; /**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */p$1.setupCssCb = function(event,cb){this.pendingCssEvent = event;var self=this;var el=this.el;var onEnd=this.pendingCssCb = function(e){if(e.target === el){off(el,event,onEnd);self.pendingCssEvent = self.pendingCssCb = null;if(!self.pendingJsCb && cb){cb();}}};on(el,event,onEnd);}; /**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */function isHidden(el){if(/svg$/.test(el.namespaceURI)){ // SVG elements do not have offset(Width|Height)
	// so we need to check the client rect
	var rect=el.getBoundingClientRect();return !(rect.width || rect.height);}else {return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);}}var transition$1={priority:TRANSITION,update:function update(id,oldId){var el=this.el; // resolve on owner vm
	var hooks=resolveAsset(this.vm.$options,'transitions',id);id = id || 'v';el.__v_trans = new Transition(el,id,hooks,this.vm);if(oldId){removeClass(el,oldId + '-transition');}addClass(el,id + '-transition');}};var internalDirectives={style:style,'class':vClass,component:component,prop:propDef,transition:transition$1}; // special binding prefixes
	var bindRE=/^v-bind:|^:/;var onRE=/^v-on:|^@/;var dirAttrRE=/^v-([^:]+)(?:$|:(.*)$)/;var modifierRE=/\.[^\.]+/g;var transitionRE=/^(v-bind:|:)?transition$/; // default directive priority
	var DEFAULT_PRIORITY=1000;var DEFAULT_TERMINAL_PRIORITY=2000; /**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */function compile(el,options,partial){ // link function for the node itself.
	var nodeLinkFn=partial || !options._asComponent?compileNode(el,options):null; // link function for the childNodes
	var childLinkFn=!(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes()?compileNodeList(el.childNodes,options):null; /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */return function compositeLinkFn(vm,el,host,scope,frag){ // cache childNodes before linking parent, fix #657
	var childNodes=toArray(el.childNodes); // link
	var dirs=linkAndCapture(function compositeLinkCapturer(){if(nodeLinkFn)nodeLinkFn(vm,el,host,scope,frag);if(childLinkFn)childLinkFn(vm,childNodes,host,scope,frag);},vm);return makeUnlinkFn(vm,dirs);};} /**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */function linkAndCapture(linker,vm){ /* istanbul ignore if */if(process.env.NODE_ENV === 'production'){ // reset directives before every capture in production
	// mode, so that when unlinking we don't need to splice
	// them out (which turns out to be a perf hit).
	// they are kept in development mode because they are
	// useful for Vue's own tests.
	vm._directives = [];}var originalDirCount=vm._directives.length;linker();var dirs=vm._directives.slice(originalDirCount);dirs.sort(directiveComparator);for(var i=0,l=dirs.length;i < l;i++) {dirs[i]._bind();}return dirs;} /**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */function directiveComparator(a,b){a = a.descriptor.def.priority || DEFAULT_PRIORITY;b = b.descriptor.def.priority || DEFAULT_PRIORITY;return a > b?-1:a === b?0:1;} /**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */function makeUnlinkFn(vm,dirs,context,contextDirs){function unlink(destroying){teardownDirs(vm,dirs,destroying);if(context && contextDirs){teardownDirs(context,contextDirs);}} // expose linked directives
	unlink.dirs = dirs;return unlink;} /**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */function teardownDirs(vm,dirs,destroying){var i=dirs.length;while(i--) {dirs[i]._teardown();if(process.env.NODE_ENV !== 'production' && !destroying){vm._directives.$remove(dirs[i]);}}} /**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */function compileAndLinkProps(vm,el,props,scope){var propsLinkFn=compileProps(el,props,vm);var propDirs=linkAndCapture(function(){propsLinkFn(vm,scope);},vm);return makeUnlinkFn(vm,propDirs);} /**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */function compileRoot(el,options,contextOptions){var containerAttrs=options._containerAttrs;var replacerAttrs=options._replacerAttrs;var contextLinkFn,replacerLinkFn; // only need to compile other attributes for
	// non-fragment instances
	if(el.nodeType !== 11){ // for components, container and replacer need to be
	// compiled separately and linked in different scopes.
	if(options._asComponent){ // 2. container attributes
	if(containerAttrs && contextOptions){contextLinkFn = compileDirectives(containerAttrs,contextOptions);}if(replacerAttrs){ // 3. replacer attributes
	replacerLinkFn = compileDirectives(replacerAttrs,options);}}else { // non-component, just compile as a normal element.
	replacerLinkFn = compileDirectives(el.attributes,options);}}else if(process.env.NODE_ENV !== 'production' && containerAttrs){ // warn container directives for fragment instances
	var names=containerAttrs.filter(function(attr){ // allow vue-loader/vueify scoped css attributes
	return attr.name.indexOf('_v-') < 0 &&  // allow event listeners
	!onRE.test(attr.name) &&  // allow slots
	attr.name !== 'slot';}).map(function(attr){return '"' + attr.name + '"';});if(names.length){var plural=names.length > 1;warn('Attribute' + (plural?'s ':' ') + names.join(', ') + (plural?' are':' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');}}options._containerAttrs = options._replacerAttrs = null;return function rootLinkFn(vm,el,scope){ // link context scope dirs
	var context=vm._context;var contextDirs;if(context && contextLinkFn){contextDirs = linkAndCapture(function(){contextLinkFn(context,el,null,scope);},context);} // link self
	var selfDirs=linkAndCapture(function(){if(replacerLinkFn)replacerLinkFn(vm,el);},vm); // return the unlink function that tearsdown context
	// container directives.
	return makeUnlinkFn(vm,selfDirs,context,contextDirs);};} /**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */function compileNode(node,options){var type=node.nodeType;if(type === 1 && !isScript(node)){return compileElement(node,options);}else if(type === 3 && node.data.trim()){return compileTextNode(node,options);}else {return null;}} /**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */function compileElement(el,options){ // preprocess textareas.
	// textarea treats its text content as the initial value.
	// just bind it as an attr directive for value.
	if(el.tagName === 'TEXTAREA'){var tokens=parseText(el.value);if(tokens){el.setAttribute(':value',tokensToExp(tokens));el.value = '';}}var linkFn;var hasAttrs=el.hasAttributes();var attrs=hasAttrs && toArray(el.attributes); // check terminal directives (for & if)
	if(hasAttrs){linkFn = checkTerminalDirectives(el,attrs,options);} // check element directives
	if(!linkFn){linkFn = checkElementDirectives(el,options);} // check component
	if(!linkFn){linkFn = checkComponent(el,options);} // normal directives
	if(!linkFn && hasAttrs){linkFn = compileDirectives(attrs,options);}return linkFn;} /**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */function compileTextNode(node,options){ // skip marked text nodes
	if(node._skip){return removeText;}var tokens=parseText(node.wholeText);if(!tokens){return null;} // mark adjacent text nodes as skipped,
	// because we are using node.wholeText to compile
	// all adjacent text nodes together. This fixes
	// issues in IE where sometimes it splits up a single
	// text node into multiple ones.
	var next=node.nextSibling;while(next && next.nodeType === 3) {next._skip = true;next = next.nextSibling;}var frag=document.createDocumentFragment();var el,token;for(var i=0,l=tokens.length;i < l;i++) {token = tokens[i];el = token.tag?processTextToken(token,options):document.createTextNode(token.value);frag.appendChild(el);}return makeTextNodeLinkFn(tokens,frag,options);} /**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */function removeText(vm,node){remove(node);} /**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */function processTextToken(token,options){var el;if(token.oneTime){el = document.createTextNode(token.value);}else {if(token.html){el = document.createComment('v-html');setTokenType('html');}else { // IE will clean up empty textNodes during
	// frag.cloneNode(true), so we have to give it
	// something here...
	el = document.createTextNode(' ');setTokenType('text');}}function setTokenType(type){if(token.descriptor)return;var parsed=parseDirective(token.value);token.descriptor = {name:type,def:directives[type],expression:parsed.expression,filters:parsed.filters};}return el;} /**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */function makeTextNodeLinkFn(tokens,frag){return function textNodeLinkFn(vm,el,host,scope){var fragClone=frag.cloneNode(true);var childNodes=toArray(fragClone.childNodes);var token,value,node;for(var i=0,l=tokens.length;i < l;i++) {token = tokens[i];value = token.value;if(token.tag){node = childNodes[i];if(token.oneTime){value = (scope || vm).$eval(value);if(token.html){replace(node,parseTemplate(value,true));}else {node.data = value;}}else {vm._bindDir(token.descriptor,node,host,scope);}}}replace(el,fragClone);};} /**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */function compileNodeList(nodeList,options){var linkFns=[];var nodeLinkFn,childLinkFn,node;for(var i=0,l=nodeList.length;i < l;i++) {node = nodeList[i];nodeLinkFn = compileNode(node,options);childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes()?compileNodeList(node.childNodes,options):null;linkFns.push(nodeLinkFn,childLinkFn);}return linkFns.length?makeChildLinkFn(linkFns):null;} /**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */function makeChildLinkFn(linkFns){return function childLinkFn(vm,nodes,host,scope,frag){var node,nodeLinkFn,childrenLinkFn;for(var i=0,n=0,l=linkFns.length;i < l;n++) {node = nodes[n];nodeLinkFn = linkFns[i++];childrenLinkFn = linkFns[i++]; // cache childNodes before linking parent, fix #657
	var childNodes=toArray(node.childNodes);if(nodeLinkFn){nodeLinkFn(vm,node,host,scope,frag);}if(childrenLinkFn){childrenLinkFn(vm,childNodes,host,scope,frag);}}};} /**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */function checkElementDirectives(el,options){var tag=el.tagName.toLowerCase();if(commonTagRE.test(tag)){return;}var def=resolveAsset(options,'elementDirectives',tag);if(def){return makeTerminalNodeLinkFn(el,tag,'',options,def);}} /**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */function checkComponent(el,options){var component=checkComponentAttr(el,options);if(component){var ref=findRef(el);var descriptor={name:'component',ref:ref,expression:component.id,def:internalDirectives.component,modifiers:{literal:!component.dynamic}};var componentLinkFn=function componentLinkFn(vm,el,host,scope,frag){if(ref){defineReactive((scope || vm).$refs,ref,null);}vm._bindDir(descriptor,el,host,scope,frag);};componentLinkFn.terminal = true;return componentLinkFn;}} /**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Array} attrs
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */function checkTerminalDirectives(el,attrs,options){ // skip v-pre
	if(getAttr(el,'v-pre') !== null){return skip;} // skip v-else block, but only if following v-if
	if(el.hasAttribute('v-else')){var prev=el.previousElementSibling;if(prev && prev.hasAttribute('v-if')){return skip;}}var attr,name,value,modifiers,matched,dirName,rawName,arg,def,termDef;for(var i=0,j=attrs.length;i < j;i++) {attr = attrs[i];name = attr.name.replace(modifierRE,'');if(matched = name.match(dirAttrRE)){def = resolveAsset(options,'directives',matched[1]);if(def && def.terminal){if(!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority){termDef = def;rawName = attr.name;modifiers = parseModifiers(attr.name);value = attr.value;dirName = matched[1];arg = matched[2];}}}}if(termDef){return makeTerminalNodeLinkFn(el,dirName,value,options,termDef,rawName,arg,modifiers);}}function skip(){}skip.terminal = true; /**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} def
	 * @param {String} [rawName]
	 * @param {String} [arg]
	 * @param {Object} [modifiers]
	 * @return {Function} terminalLinkFn
	 */function makeTerminalNodeLinkFn(el,dirName,value,options,def,rawName,arg,modifiers){var parsed=parseDirective(value);var descriptor={name:dirName,arg:arg,expression:parsed.expression,filters:parsed.filters,raw:value,attr:rawName,modifiers:modifiers,def:def}; // check ref for v-for and router-view
	if(dirName === 'for' || dirName === 'router-view'){descriptor.ref = findRef(el);}var fn=function terminalNodeLinkFn(vm,el,host,scope,frag){if(descriptor.ref){defineReactive((scope || vm).$refs,descriptor.ref,null);}vm._bindDir(descriptor,el,host,scope,frag);};fn.terminal = true;return fn;} /**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */function compileDirectives(attrs,options){var i=attrs.length;var dirs=[];var attr,name,value,rawName,rawValue,dirName,arg,modifiers,dirDef,tokens,matched;while(i--) {attr = attrs[i];name = rawName = attr.name;value = rawValue = attr.value;tokens = parseText(value); // reset arg
	arg = null; // check modifiers
	modifiers = parseModifiers(name);name = name.replace(modifierRE,''); // attribute interpolations
	if(tokens){value = tokensToExp(tokens);arg = name;pushDir('bind',directives.bind,tokens); // warn against mixing mustaches with v-bind
	if(process.env.NODE_ENV !== 'production'){if(name === 'class' && Array.prototype.some.call(attrs,function(attr){return attr.name === ':class' || attr.name === 'v-bind:class';})){warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.',options);}}}else  // special attribute: transition
	if(transitionRE.test(name)){modifiers.literal = !bindRE.test(name);pushDir('transition',internalDirectives.transition);}else  // event handlers
	if(onRE.test(name)){arg = name.replace(onRE,'');pushDir('on',directives.on);}else  // attribute bindings
	if(bindRE.test(name)){dirName = name.replace(bindRE,'');if(dirName === 'style' || dirName === 'class'){pushDir(dirName,internalDirectives[dirName]);}else {arg = dirName;pushDir('bind',directives.bind);}}else  // normal directives
	if(matched = name.match(dirAttrRE)){dirName = matched[1];arg = matched[2]; // skip v-else (when used with v-show)
	if(dirName === 'else'){continue;}dirDef = resolveAsset(options,'directives',dirName,true);if(dirDef){pushDir(dirName,dirDef);}}} /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */function pushDir(dirName,def,interpTokens){var hasOneTimeToken=interpTokens && hasOneTime(interpTokens);var parsed=!hasOneTimeToken && parseDirective(value);dirs.push({name:dirName,attr:rawName,raw:rawValue,def:def,arg:arg,modifiers:modifiers, // conversion from interpolation strings with one-time token
	// to expression is differed until directive bind time so that we
	// have access to the actual vm context for one-time bindings.
	expression:parsed && parsed.expression,filters:parsed && parsed.filters,interp:interpTokens,hasOneTime:hasOneTimeToken});}if(dirs.length){return makeNodeLinkFn(dirs);}} /**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */function parseModifiers(name){var res=Object.create(null);var match=name.match(modifierRE);if(match){var i=match.length;while(i--) {res[match[i].slice(1)] = true;}}return res;} /**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */function makeNodeLinkFn(directives){return function nodeLinkFn(vm,el,host,scope,frag){ // reverse apply because it's sorted low to high
	var i=directives.length;while(i--) {vm._bindDir(directives[i],el,host,scope,frag);}};} /**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */function hasOneTime(tokens){var i=tokens.length;while(i--) {if(tokens[i].oneTime)return true;}}function isScript(el){return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');}var specialCharRE=/[^\w\-:\.]/; /**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */function transclude(el,options){ // extract container attributes to pass them down
	// to compiler, because they need to be compiled in
	// parent scope. we are mutating the options object here
	// assuming the same object will be used for compile
	// right after this.
	if(options){options._containerAttrs = extractAttrs(el);} // for template tags, what we want is its content as
	// a documentFragment (for fragment instances)
	if(isTemplate(el)){el = parseTemplate(el);}if(options){if(options._asComponent && !options.template){options.template = '<slot></slot>';}if(options.template){options._content = extractContent(el);el = transcludeTemplate(el,options);}}if(isFragment(el)){ // anchors for fragment instance
	// passing in `persist: true` to avoid them being
	// discarded by IE during template cloning
	prepend(createAnchor('v-start',true),el);el.appendChild(createAnchor('v-end',true));}return el;} /**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */function transcludeTemplate(el,options){var template=options.template;var frag=parseTemplate(template,true);if(frag){var replacer=frag.firstChild;var tag=replacer.tagName && replacer.tagName.toLowerCase();if(options.replace){ /* istanbul ignore if */if(el === document.body){process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');} // there are many cases where the instance must
	// become a fragment instance: basically anything that
	// can create more than 1 root nodes.
	if( // multi-children template
	frag.childNodes.length > 1 ||  // non-element template
	replacer.nodeType !== 1 ||  // single nested component
	tag === 'component' || resolveAsset(options,'components',tag) || hasBindAttr(replacer,'is') ||  // element directive
	resolveAsset(options,'elementDirectives',tag) ||  // for block
	replacer.hasAttribute('v-for') ||  // if block
	replacer.hasAttribute('v-if')){return frag;}else {options._replacerAttrs = extractAttrs(replacer);mergeAttrs(el,replacer);return replacer;}}else {el.appendChild(frag);return el;}}else {process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);}} /**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */function extractAttrs(el){if(el.nodeType === 1 && el.hasAttributes()){return toArray(el.attributes);}} /**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */function mergeAttrs(from,to){var attrs=from.attributes;var i=attrs.length;var name,value;while(i--) {name = attrs[i].name;value = attrs[i].value;if(!to.hasAttribute(name) && !specialCharRE.test(name)){to.setAttribute(name,value);}else if(name === 'class' && !parseText(value) && (value = value.trim())){value.split(/\s+/).forEach(function(cls){addClass(to,cls);});}}} /**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */function resolveSlots(vm,content){if(!content){return;}var contents=vm._slotContents = Object.create(null);var el,name;for(var i=0,l=content.children.length;i < l;i++) {el = content.children[i]; /* eslint-disable no-cond-assign */if(name = el.getAttribute('slot')){(contents[name] || (contents[name] = [])).push(el);} /* eslint-enable no-cond-assign */if(process.env.NODE_ENV !== 'production' && getBindAttr(el,'slot')){warn('The "slot" attribute must be static.',vm.$parent);}}for(name in contents) {contents[name] = extractFragment(contents[name],content);}if(content.hasChildNodes()){var nodes=content.childNodes;if(nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()){return;}contents['default'] = extractFragment(content.childNodes,content);}} /**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @return {DocumentFragment}
	 */function extractFragment(nodes,parent){var frag=document.createDocumentFragment();nodes = toArray(nodes);for(var i=0,l=nodes.length;i < l;i++) {var node=nodes[i];if(isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')){parent.removeChild(node);node = parseTemplate(node,true);}frag.appendChild(node);}return frag;}var compiler=Object.freeze({compile:compile,compileAndLinkProps:compileAndLinkProps,compileRoot:compileRoot,transclude:transclude,resolveSlots:resolveSlots});function stateMixin(Vue){ /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */Object.defineProperty(Vue.prototype,'$data',{get:function get(){return this._data;},set:function set(newData){if(newData !== this._data){this._setData(newData);}}}); /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */Vue.prototype._initState = function(){this._initProps();this._initMeta();this._initMethods();this._initData();this._initComputed();}; /**
	   * Initialize props.
	   */Vue.prototype._initProps = function(){var options=this.$options;var el=options.el;var props=options.props;if(props && !el){process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.',this);} // make sure to convert string selectors into element now
	el = options.el = query(el);this._propsUnlinkFn = el && el.nodeType === 1 && props // props must be linked in proper scope if inside v-for
	?compileAndLinkProps(this,el,props,this._scope):null;}; /**
	   * Initialize the data.
	   */Vue.prototype._initData = function(){var dataFn=this.$options.data;var data=this._data = dataFn?dataFn():{};if(!isPlainObject(data)){data = {};process.env.NODE_ENV !== 'production' && warn('data functions should return an object.',this);}var props=this._props; // proxy data on instance
	var keys=Object.keys(data);var i,key;i = keys.length;while(i--) {key = keys[i]; // there are two scenarios where we can proxy a data key:
	// 1. it's not already defined as a prop
	// 2. it's provided via a instantiation option AND there are no
	//    template prop present
	if(!props || !hasOwn(props,key)){this._proxy(key);}else if(process.env.NODE_ENV !== 'production'){warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.',this);}} // observe data
	observe(data,this);}; /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */Vue.prototype._setData = function(newData){newData = newData || {};var oldData=this._data;this._data = newData;var keys,key,i; // unproxy keys not present in new data
	keys = Object.keys(oldData);i = keys.length;while(i--) {key = keys[i];if(!(key in newData)){this._unproxy(key);}} // proxy keys not already proxied,
	// and trigger change for changed values
	keys = Object.keys(newData);i = keys.length;while(i--) {key = keys[i];if(!hasOwn(this,key)){ // new property
	this._proxy(key);}}oldData.__ob__.removeVm(this);observe(newData,this);this._digest();}; /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */Vue.prototype._proxy = function(key){if(!isReserved(key)){ // need to store ref to self here
	// because these getter/setters might
	// be called by child scopes via
	// prototype inheritance.
	var self=this;Object.defineProperty(self,key,{configurable:true,enumerable:true,get:function proxyGetter(){return self._data[key];},set:function proxySetter(val){self._data[key] = val;}});}}; /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */Vue.prototype._unproxy = function(key){if(!isReserved(key)){delete this[key];}}; /**
	   * Force update on every watcher in scope.
	   */Vue.prototype._digest = function(){for(var i=0,l=this._watchers.length;i < l;i++) {this._watchers[i].update(true); // shallow updates
	}}; /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */function noop(){}Vue.prototype._initComputed = function(){var computed=this.$options.computed;if(computed){for(var key in computed) {var userDef=computed[key];var def={enumerable:true,configurable:true};if(typeof userDef === 'function'){def.get = makeComputedGetter(userDef,this);def.set = noop;}else {def.get = userDef.get?userDef.cache !== false?makeComputedGetter(userDef.get,this):bind(userDef.get,this):noop;def.set = userDef.set?bind(userDef.set,this):noop;}Object.defineProperty(this,key,def);}}};function makeComputedGetter(getter,owner){var watcher=new Watcher(owner,getter,null,{lazy:true});return function computedGetter(){if(watcher.dirty){watcher.evaluate();}if(Dep.target){watcher.depend();}return watcher.value;};} /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */Vue.prototype._initMethods = function(){var methods=this.$options.methods;if(methods){for(var key in methods) {this[key] = bind(methods[key],this);}}}; /**
	   * Initialize meta information like $index, $key & $value.
	   */Vue.prototype._initMeta = function(){var metas=this.$options._meta;if(metas){for(var key in metas) {defineReactive(this,key,metas[key]);}}};}var eventRE=/^v-on:|^@/;function eventsMixin(Vue){ /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */Vue.prototype._initEvents = function(){var options=this.$options;if(options._asComponent){registerComponentEvents(this,options.el);}registerCallbacks(this,'$on',options.events);registerCallbacks(this,'$watch',options.watch);}; /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */function registerComponentEvents(vm,el){var attrs=el.attributes;var name,value,handler;for(var i=0,l=attrs.length;i < l;i++) {name = attrs[i].name;if(eventRE.test(name)){name = name.replace(eventRE,''); // force the expression into a statement so that
	// it always dynamically resolves the method to call (#2670)
	// kinda ugly hack, but does the job.
	value = attrs[i].value;if(isSimplePath(value)){value += '.apply(this, $arguments)';}handler = (vm._scope || vm._context).$eval(value,true);handler._fromParent = true;vm.$on(name.replace(eventRE),handler);}}} /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */function registerCallbacks(vm,action,hash){if(!hash)return;var handlers,key,i,j;for(key in hash) {handlers = hash[key];if(isArray(handlers)){for(i = 0,j = handlers.length;i < j;i++) {register(vm,action,key,handlers[i]);}}else {register(vm,action,key,handlers);}}} /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */function register(vm,action,key,handler,options){var type=typeof handler;if(type === 'function'){vm[action](key,handler,options);}else if(type === 'string'){var methods=vm.$options.methods;var method=methods && methods[handler];if(method){vm[action](key,method,options);}else {process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".',vm);}}else if(handler && type === 'object'){register(vm,action,key,handler.handler,handler);}} /**
	   * Setup recursive attached/detached calls
	   */Vue.prototype._initDOMHooks = function(){this.$on('hook:attached',onAttached);this.$on('hook:detached',onDetached);}; /**
	   * Callback to recursively call attached hook on children
	   */function onAttached(){if(!this._isAttached){this._isAttached = true;this.$children.forEach(callAttach);}} /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */function callAttach(child){if(!child._isAttached && inDoc(child.$el)){child._callHook('attached');}} /**
	   * Callback to recursively call detached hook on children
	   */function onDetached(){if(this._isAttached){this._isAttached = false;this.$children.forEach(callDetach);}} /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */function callDetach(child){if(child._isAttached && !inDoc(child.$el)){child._callHook('detached');}} /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */Vue.prototype._callHook = function(hook){this.$emit('pre-hook:' + hook);var handlers=this.$options[hook];if(handlers){for(var i=0,j=handlers.length;i < j;i++) {handlers[i].call(this);}}this.$emit('hook:' + hook);};}function noop(){} /**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Object} [modifiers]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} arg
	 *                 - {String} raw
	 *                 - {String} [ref]
	 *                 - {Array<Object>} [interp]
	 *                 - {Boolean} [hasOneTime]
	 * @param {Vue} vm
	 * @param {Node} el
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */function Directive(descriptor,vm,el,host,scope,frag){this.vm = vm;this.el = el; // copy descriptor properties
	this.descriptor = descriptor;this.name = descriptor.name;this.expression = descriptor.expression;this.arg = descriptor.arg;this.modifiers = descriptor.modifiers;this.filters = descriptor.filters;this.literal = this.modifiers && this.modifiers.literal; // private
	this._locked = false;this._bound = false;this._listeners = null; // link context
	this._host = host;this._scope = scope;this._frag = frag; // store directives on node in dev mode
	if(process.env.NODE_ENV !== 'production' && this.el){this.el._vue_directives = this.el._vue_directives || [];this.el._vue_directives.push(this);}} /**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 */Directive.prototype._bind = function(){var name=this.name;var descriptor=this.descriptor; // remove attribute
	if((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute){var attr=descriptor.attr || 'v-' + name;this.el.removeAttribute(attr);} // copy def properties
	var def=descriptor.def;if(typeof def === 'function'){this.update = def;}else {extend(this,def);} // setup directive params
	this._setupParams(); // initial bind
	if(this.bind){this.bind();}this._bound = true;if(this.literal){this.update && this.update(descriptor.raw);}else if((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()){ // wrapped updater for context
	var dir=this;if(this.update){this._update = function(val,oldVal){if(!dir._locked){dir.update(val,oldVal);}};}else {this._update = noop;}var preProcess=this._preProcess?bind(this._preProcess,this):null;var postProcess=this._postProcess?bind(this._postProcess,this):null;var watcher=this._watcher = new Watcher(this.vm,this.expression,this._update, // callback
	{filters:this.filters,twoWay:this.twoWay,deep:this.deep,preProcess:preProcess,postProcess:postProcess,scope:this._scope}); // v-model with inital inline value need to sync back to
	// model instead of update to DOM on init. They would
	// set the afterBind hook to indicate that.
	if(this.afterBind){this.afterBind();}else if(this.update){this.update(watcher.value);}}}; /**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */Directive.prototype._setupParams = function(){if(!this.params){return;}var params=this.params; // swap the params array with a fresh object.
	this.params = Object.create(null);var i=params.length;var key,val,mappedKey;while(i--) {key = hyphenate(params[i]);mappedKey = camelize(key);val = getBindAttr(this.el,key);if(val != null){ // dynamic
	this._setupParamWatcher(mappedKey,val);}else { // static
	val = getAttr(this.el,key);if(val != null){this.params[mappedKey] = val === ''?true:val;}}}}; /**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */Directive.prototype._setupParamWatcher = function(key,expression){var self=this;var called=false;var unwatch=(this._scope || this.vm).$watch(expression,function(val,oldVal){self.params[key] = val; // since we are in immediate mode,
	// only call the param change callbacks if this is not the first update.
	if(called){var cb=self.paramWatchers && self.paramWatchers[key];if(cb){cb.call(self,val,oldVal);}}else {called = true;}},{immediate:true,user:false});(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);}; /**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */Directive.prototype._checkStatement = function(){var expression=this.expression;if(expression && this.acceptStatement && !isSimplePath(expression)){var fn=parseExpression(expression).get;var scope=this._scope || this.vm;var handler=function handler(e){scope.$event = e;fn.call(scope,scope);scope.$event = null;};if(this.filters){handler = scope._applyFilters(handler,null,this.filters);}this.update(handler);return true;}}; /**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */Directive.prototype.set = function(value){ /* istanbul ignore else */if(this.twoWay){this._withLock(function(){this._watcher.set(value);});}else if(process.env.NODE_ENV !== 'production'){warn('Directive.set() can only be used inside twoWay' + 'directives.');}}; /**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */Directive.prototype._withLock = function(fn){var self=this;self._locked = true;fn.call(self);nextTick(function(){self._locked = false;});}; /**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */Directive.prototype.on = function(event,handler,useCapture){on(this.el,event,handler,useCapture);(this._listeners || (this._listeners = [])).push([event,handler]);}; /**
	 * Teardown the watcher and call unbind.
	 */Directive.prototype._teardown = function(){if(this._bound){this._bound = false;if(this.unbind){this.unbind();}if(this._watcher){this._watcher.teardown();}var listeners=this._listeners;var i;if(listeners){i = listeners.length;while(i--) {off(this.el,listeners[i][0],listeners[i][1]);}}var unwatchFns=this._paramUnwatchFns;if(unwatchFns){i = unwatchFns.length;while(i--) {unwatchFns[i]();}}if(process.env.NODE_ENV !== 'production' && this.el){this.el._vue_directives.$remove(this);}this.vm = this.el = this._watcher = this._listeners = null;}};function lifecycleMixin(Vue){ /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */Vue.prototype._updateRef = function(remove){var ref=this.$options._ref;if(ref){var refs=(this._scope || this._context).$refs;if(remove){if(refs[ref] === this){refs[ref] = null;}}else {refs[ref] = this;}}}; /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */Vue.prototype._compile = function(el){var options=this.$options; // transclude and init element
	// transclude can potentially replace original
	// so we need to keep reference; this step also injects
	// the template and caches the original attributes
	// on the container node and replacer node.
	var original=el;el = transclude(el,options);this._initElement(el); // handle v-pre on root node (#2026)
	if(el.nodeType === 1 && getAttr(el,'v-pre') !== null){return;} // root is always compiled per-instance, because
	// container attrs and props can be different every time.
	var contextOptions=this._context && this._context.$options;var rootLinker=compileRoot(el,options,contextOptions); // resolve slot distribution
	resolveSlots(this,options._content); // compile and link the rest
	var contentLinkFn;var ctor=this.constructor; // component compilation can be cached
	// as long as it's not using inline-template
	if(options._linkerCachable){contentLinkFn = ctor.linker;if(!contentLinkFn){contentLinkFn = ctor.linker = compile(el,options);}} // link phase
	// make sure to link root with prop scope!
	var rootUnlinkFn=rootLinker(this,el,this._scope);var contentUnlinkFn=contentLinkFn?contentLinkFn(this,el):compile(el,options)(this,el); // register composite unlink function
	// to be called during instance destruction
	this._unlinkFn = function(){rootUnlinkFn(); // passing destroying: true to avoid searching and
	// splicing the directives
	contentUnlinkFn(true);}; // finally replace original
	if(options.replace){replace(original,el);}this._isCompiled = true;this._callHook('compiled');}; /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */Vue.prototype._initElement = function(el){if(isFragment(el)){this._isFragment = true;this.$el = this._fragmentStart = el.firstChild;this._fragmentEnd = el.lastChild; // set persisted text anchors to empty
	if(this._fragmentStart.nodeType === 3){this._fragmentStart.data = this._fragmentEnd.data = '';}this._fragment = el;}else {this.$el = el;}this.$el.__vue__ = this;this._callHook('beforeCompile');}; /**
	   * Create and bind a directive to an element.
	   *
	   * @param {Object} descriptor - parsed directive descriptor
	   * @param {Node} node   - target node
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */Vue.prototype._bindDir = function(descriptor,node,host,scope,frag){this._directives.push(new Directive(descriptor,this,node,host,scope,frag));}; /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */Vue.prototype._destroy = function(remove,deferCleanup){if(this._isBeingDestroyed){if(!deferCleanup){this._cleanup();}return;}var destroyReady;var pendingRemoval;var self=this; // Cleanup should be called either synchronously or asynchronoysly as
	// callback of this.$remove(), or if remove and deferCleanup are false.
	// In any case it should be called after all other removing, unbinding and
	// turning of is done
	var cleanupIfPossible=function cleanupIfPossible(){if(destroyReady && !pendingRemoval && !deferCleanup){self._cleanup();}}; // remove DOM element
	if(remove && this.$el){pendingRemoval = true;this.$remove(function(){pendingRemoval = false;cleanupIfPossible();});}this._callHook('beforeDestroy');this._isBeingDestroyed = true;var i; // remove self from parent. only necessary
	// if parent is not being destroyed as well.
	var parent=this.$parent;if(parent && !parent._isBeingDestroyed){parent.$children.$remove(this); // unregister ref (remove: true)
	this._updateRef(true);} // destroy all children.
	i = this.$children.length;while(i--) {this.$children[i].$destroy();} // teardown props
	if(this._propsUnlinkFn){this._propsUnlinkFn();} // teardown all directives. this also tearsdown all
	// directive-owned watchers.
	if(this._unlinkFn){this._unlinkFn();}i = this._watchers.length;while(i--) {this._watchers[i].teardown();} // remove reference to self on $el
	if(this.$el){this.$el.__vue__ = null;}destroyReady = true;cleanupIfPossible();}; /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */Vue.prototype._cleanup = function(){if(this._isDestroyed){return;} // remove self from owner fragment
	// do it in cleanup so that we can call $destroy with
	// defer right when a fragment is about to be removed.
	if(this._frag){this._frag.children.$remove(this);} // remove reference from data ob
	// frozen object may not have observer.
	if(this._data && this._data.__ob__){this._data.__ob__.removeVm(this);} // Clean up references to private properties and other
	// instances. preserve reference to _data so that proxy
	// accessors still work. The only potential side effect
	// here is that mutating the instance after it's destroyed
	// may affect the state of other components that are still
	// observing the same object, but that seems to be a
	// reasonable responsibility for the user rather than
	// always throwing an error on them.
	this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null; // call the last hook...
	this._isDestroyed = true;this._callHook('destroyed'); // turn off all instance listeners.
	this.$off();};}function miscMixin(Vue){ /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */Vue.prototype._applyFilters = function(value,oldValue,filters,write){var filter,fn,args,arg,offset,i,l,j,k;for(i = 0,l = filters.length;i < l;i++) {filter = filters[write?l - i - 1:i];fn = resolveAsset(this.$options,'filters',filter.name,true);if(!fn)continue;fn = write?fn.write:fn.read || fn;if(typeof fn !== 'function')continue;args = write?[value,oldValue]:[value];offset = write?2:1;if(filter.args){for(j = 0,k = filter.args.length;j < k;j++) {arg = filter.args[j];args[j + offset] = arg.dynamic?this.$get(arg.value):arg.value;}}value = fn.apply(this,args);}return value;}; /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */Vue.prototype._resolveComponent = function(value,cb){var factory;if(typeof value === 'function'){factory = value;}else {factory = resolveAsset(this.$options,'components',value,true);} /* istanbul ignore if */if(!factory){return;} // async component factory
	if(!factory.options){if(factory.resolved){ // cached
	cb(factory.resolved);}else if(factory.requested){ // pool callbacks
	factory.pendingCallbacks.push(cb);}else {factory.requested = true;var cbs=factory.pendingCallbacks = [cb];factory.call(this,function resolve(res){if(isPlainObject(res)){res = Vue.extend(res);} // cache resolved
	factory.resolved = res; // invoke callbacks
	for(var i=0,l=cbs.length;i < l;i++) {cbs[i](res);}},function reject(reason){process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string'?': ' + value:'') + '. ' + (reason?'\nReason: ' + reason:''));});}}else { // normal component
	cb(factory);}};}var filterRE$1=/[^|]\|[^|]/;function dataAPI(Vue){ /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */Vue.prototype.$get = function(exp,asStatement){var res=parseExpression(exp);if(res){if(asStatement){var self=this;return function statementHandler(){self.$arguments = toArray(arguments);var result=res.get.call(self,self);self.$arguments = null;return result;};}else {try{return res.get.call(this,this);}catch(e) {}}}}; /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */Vue.prototype.$set = function(exp,val){var res=parseExpression(exp,true);if(res && res.set){res.set.call(this,this,val);}}; /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */Vue.prototype.$delete = function(key){del(this._data,key);}; /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */Vue.prototype.$watch = function(expOrFn,cb,options){var vm=this;var parsed;if(typeof expOrFn === 'string'){parsed = parseDirective(expOrFn);expOrFn = parsed.expression;}var watcher=new Watcher(vm,expOrFn,cb,{deep:options && options.deep,sync:options && options.sync,filters:parsed && parsed.filters,user:!options || options.user !== false});if(options && options.immediate){cb.call(vm,watcher.value);}return function unwatchFn(){watcher.teardown();};}; /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */Vue.prototype.$eval = function(text,asStatement){ // check for filters.
	if(filterRE$1.test(text)){var dir=parseDirective(text); // the filter regex check might give false positive
	// for pipes inside strings, so it's possible that
	// we don't get any filters here
	var val=this.$get(dir.expression,asStatement);return dir.filters?this._applyFilters(val,null,dir.filters):val;}else { // no filter
	return this.$get(text,asStatement);}}; /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */Vue.prototype.$interpolate = function(text){var tokens=parseText(text);var vm=this;if(tokens){if(tokens.length === 1){return vm.$eval(tokens[0].value) + '';}else {return tokens.map(function(token){return token.tag?vm.$eval(token.value):token.value;}).join('');}}else {return text;}}; /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */Vue.prototype.$log = function(path){var data=path?getPath(this._data,path):this._data;if(data){data = clean(data);} // include computed fields
	if(!path){var key;for(key in this.$options.computed) {data[key] = clean(this[key]);}if(this._props){for(key in this._props) {data[key] = clean(this[key]);}}}console.log(data);}; /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */function clean(obj){return JSON.parse(JSON.stringify(obj));}}function domAPI(Vue){ /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */Vue.prototype.$nextTick = function(fn){nextTick(fn,this);}; /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */Vue.prototype.$appendTo = function(target,cb,withTransition){return insert(this,target,cb,withTransition,append,appendWithTransition);}; /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */Vue.prototype.$prependTo = function(target,cb,withTransition){target = query(target);if(target.hasChildNodes()){this.$before(target.firstChild,cb,withTransition);}else {this.$appendTo(target,cb,withTransition);}return this;}; /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */Vue.prototype.$before = function(target,cb,withTransition){return insert(this,target,cb,withTransition,beforeWithCb,beforeWithTransition);}; /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */Vue.prototype.$after = function(target,cb,withTransition){target = query(target);if(target.nextSibling){this.$before(target.nextSibling,cb,withTransition);}else {this.$appendTo(target.parentNode,cb,withTransition);}return this;}; /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */Vue.prototype.$remove = function(cb,withTransition){if(!this.$el.parentNode){return cb && cb();}var inDocument=this._isAttached && inDoc(this.$el); // if we are not in document, no need to check
	// for transitions
	if(!inDocument)withTransition = false;var self=this;var realCb=function realCb(){if(inDocument)self._callHook('detached');if(cb)cb();};if(this._isFragment){removeNodeRange(this._fragmentStart,this._fragmentEnd,this,this._fragment,realCb);}else {var op=withTransition === false?removeWithCb:removeWithTransition;op(this.$el,this,realCb);}return this;}; /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */function insert(vm,target,cb,withTransition,op1,op2){target = query(target);var targetIsDetached=!inDoc(target);var op=withTransition === false || targetIsDetached?op1:op2;var shouldCallHook=!targetIsDetached && !vm._isAttached && !inDoc(vm.$el);if(vm._isFragment){mapNodeRange(vm._fragmentStart,vm._fragmentEnd,function(node){op(node,target,vm);});cb && cb();}else {op(vm.$el,target,vm,cb);}if(shouldCallHook){vm._callHook('attached');}return vm;} /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */function query(el){return typeof el === 'string'?document.querySelector(el):el;} /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */function append(el,target,vm,cb){target.appendChild(el);if(cb)cb();} /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */function beforeWithCb(el,target,vm,cb){before(el,target);if(cb)cb();} /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */function removeWithCb(el,vm,cb){remove(el);if(cb)cb();}}function eventsAPI(Vue){ /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */Vue.prototype.$on = function(event,fn){(this._events[event] || (this._events[event] = [])).push(fn);modifyListenerCount(this,event,1);return this;}; /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */Vue.prototype.$once = function(event,fn){var self=this;function on(){self.$off(event,on);fn.apply(this,arguments);}on.fn = fn;this.$on(event,on);return this;}; /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */Vue.prototype.$off = function(event,fn){var cbs; // all
	if(!arguments.length){if(this.$parent){for(event in this._events) {cbs = this._events[event];if(cbs){modifyListenerCount(this,event,-cbs.length);}}}this._events = {};return this;} // specific event
	cbs = this._events[event];if(!cbs){return this;}if(arguments.length === 1){modifyListenerCount(this,event,-cbs.length);this._events[event] = null;return this;} // specific handler
	var cb;var i=cbs.length;while(i--) {cb = cbs[i];if(cb === fn || cb.fn === fn){modifyListenerCount(this,event,-1);cbs.splice(i,1);break;}}return this;}; /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */Vue.prototype.$emit = function(event){var isSource=typeof event === 'string';event = isSource?event:event.name;var cbs=this._events[event];var shouldPropagate=isSource || !cbs;if(cbs){cbs = cbs.length > 1?toArray(cbs):cbs; // this is a somewhat hacky solution to the question raised
	// in #2102: for an inline component listener like <comp @test="doThis">,
	// the propagation handling is somewhat broken. Therefore we
	// need to treat these inline callbacks differently.
	var hasParentCbs=isSource && cbs.some(function(cb){return cb._fromParent;});if(hasParentCbs){shouldPropagate = false;}var args=toArray(arguments,1);for(var i=0,l=cbs.length;i < l;i++) {var cb=cbs[i];var res=cb.apply(this,args);if(res === true && (!hasParentCbs || cb._fromParent)){shouldPropagate = true;}}}return shouldPropagate;}; /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */Vue.prototype.$broadcast = function(event){var isSource=typeof event === 'string';event = isSource?event:event.name; // if no child has registered for this event,
	// then there's no need to broadcast.
	if(!this._eventsCount[event])return;var children=this.$children;var args=toArray(arguments);if(isSource){ // use object event to indicate non-source emit
	// on children
	args[0] = {name:event,source:this};}for(var i=0,l=children.length;i < l;i++) {var child=children[i];var shouldPropagate=child.$emit.apply(child,args);if(shouldPropagate){child.$broadcast.apply(child,args);}}return this;}; /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */Vue.prototype.$dispatch = function(event){var shouldPropagate=this.$emit.apply(this,arguments);if(!shouldPropagate)return;var parent=this.$parent;var args=toArray(arguments); // use object event to indicate non-source emit
	// on parents
	args[0] = {name:event,source:this};while(parent) {shouldPropagate = parent.$emit.apply(parent,args);parent = shouldPropagate?parent.$parent:null;}return this;}; /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */var hookRE=/^hook:/;function modifyListenerCount(vm,event,count){var parent=vm.$parent; // hooks do not get broadcasted so no need
	// to do bookkeeping for them
	if(!parent || !count || hookRE.test(event))return;while(parent) {parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;parent = parent.$parent;}}}function lifecycleAPI(Vue){ /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */Vue.prototype.$mount = function(el){if(this._isCompiled){process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.',this);return;}el = query(el);if(!el){el = document.createElement('div');}this._compile(el);this._initDOMHooks();if(inDoc(this.$el)){this._callHook('attached');ready.call(this);}else {this.$once('hook:attached',ready);}return this;}; /**
	   * Mark an instance as ready.
	   */function ready(){this._isAttached = true;this._isReady = true;this._callHook('ready');} /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   *
	   * @param {Boolean} remove
	   * @param {Boolean} deferCleanup
	   */Vue.prototype.$destroy = function(remove,deferCleanup){this._destroy(remove,deferCleanup);}; /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @param {Object} [scope]
	   * @param {Fragment} [frag]
	   * @return {Function}
	   */Vue.prototype.$compile = function(el,host,scope,frag){return compile(el,this.$options,true)(this,el,host,scope,frag);};} /**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */function Vue(options){this._init(options);} // install internals
	initMixin(Vue);stateMixin(Vue);eventsMixin(Vue);lifecycleMixin(Vue);miscMixin(Vue); // install instance APIs
	dataAPI(Vue);domAPI(Vue);eventsAPI(Vue);lifecycleAPI(Vue);var slot={priority:SLOT,params:['name'],bind:function bind(){ // this was resolved during component transclusion
	var name=this.params.name || 'default';var content=this.vm._slotContents && this.vm._slotContents[name];if(!content || !content.hasChildNodes()){this.fallback();}else {this.compile(content.cloneNode(true),this.vm._context,this.vm);}},compile:function compile(content,context,host){if(content && context){if(this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')){ // if the inserted slot has v-if
	// inject fallback content as the v-else
	var elseBlock=document.createElement('template');elseBlock.setAttribute('v-else','');elseBlock.innerHTML = this.el.innerHTML; // the else block should be compiled in child scope
	elseBlock._context = this.vm;content.appendChild(elseBlock);}var scope=host?host._scope:this._scope;this.unlink = context.$compile(content,host,scope,this._frag);}if(content){replace(this.el,content);}else {remove(this.el);}},fallback:function fallback(){this.compile(extractContent(this.el,true),this.vm);},unbind:function unbind(){if(this.unlink){this.unlink();}}};var partial={priority:PARTIAL,params:['name'], // watch changes to name for dynamic partials
	paramWatchers:{name:function name(value){vIf.remove.call(this);if(value){this.insert(value);}}},bind:function bind(){this.anchor = createAnchor('v-partial');replace(this.el,this.anchor);this.insert(this.params.name);},insert:function insert(id){var partial=resolveAsset(this.vm.$options,'partials',id,true);if(partial){this.factory = new FragmentFactory(this.vm,partial);vIf.insert.call(this);}},unbind:function unbind(){if(this.frag){this.frag.destroy();}}};var elementDirectives={slot:slot,partial:partial};var convertArray=vFor._postProcess; /**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */function limitBy(arr,n,offset){offset = offset?parseInt(offset,10):0;n = toNumber(n);return typeof n === 'number'?arr.slice(offset,offset + n):arr;} /**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */function filterBy(arr,search,delimiter){arr = convertArray(arr);if(search == null){return arr;}if(typeof search === 'function'){return arr.filter(search);} // cast to lowercase string
	search = ('' + search).toLowerCase(); // allow optional `in` delimiter
	// because why not
	var n=delimiter === 'in'?3:2; // extract and flatten keys
	var keys=Array.prototype.concat.apply([],toArray(arguments,n));var res=[];var item,key,val,j;for(var i=0,l=arr.length;i < l;i++) {item = arr[i];val = item && item.$value || item;j = keys.length;if(j){while(j--) {key = keys[j];if(key === '$key' && contains(item.$key,search) || contains(getPath(val,key),search)){res.push(item);break;}}}else if(contains(item,search)){res.push(item);}}return res;} /**
	 * Filter filter for arrays
	 *
	 * @param {String|Array<String>|Function} ...sortKeys
	 * @param {Number} [order]
	 */function orderBy(arr){var comparator=null;var sortKeys=undefined;arr = convertArray(arr); // determine order (last argument)
	var args=toArray(arguments,1);var order=args[args.length - 1];if(typeof order === 'number'){order = order < 0?-1:1;args = args.length > 1?args.slice(0,-1):args;}else {order = 1;} // determine sortKeys & comparator
	var firstArg=args[0];if(!firstArg){return arr;}else if(typeof firstArg === 'function'){ // custom comparator
	comparator = function(a,b){return firstArg(a,b) * order;};}else { // string keys. flatten first
	sortKeys = Array.prototype.concat.apply([],args);comparator = function(a,b,i){i = i || 0;return i >= sortKeys.length - 1?baseCompare(a,b,i):baseCompare(a,b,i) || comparator(a,b,i + 1);};}function baseCompare(a,b,sortKeyIndex){var sortKey=sortKeys[sortKeyIndex];if(sortKey){if(sortKey !== '$key'){if(isObject(a) && '$value' in a)a = a.$value;if(isObject(b) && '$value' in b)b = b.$value;}a = isObject(a)?getPath(a,sortKey):a;b = isObject(b)?getPath(b,sortKey):b;}return a === b?0:a > b?order:-order;} // sort on a copy to avoid mutating original array
	return arr.slice().sort(comparator);} /**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */function contains(val,search){var i;if(isPlainObject(val)){var keys=Object.keys(val);i = keys.length;while(i--) {if(contains(val[keys[i]],search)){return true;}}}else if(isArray(val)){i = val.length;while(i--) {if(contains(val[i],search)){return true;}}}else if(val != null){return val.toString().toLowerCase().indexOf(search) > -1;}}var digitsRE=/(\d{3})(?=\d)/g; // asset collections must be a plain object.
	var filters={orderBy:orderBy,filterBy:filterBy,limitBy:limitBy, /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */json:{read:function read(value,indent){return typeof value === 'string'?value:JSON.stringify(value,null,Number(indent) || 2);},write:function write(value){try{return JSON.parse(value);}catch(e) {return value;}}}, /**
	   * 'abc' => 'Abc'
	   */capitalize:function capitalize(value){if(!value && value !== 0)return '';value = value.toString();return value.charAt(0).toUpperCase() + value.slice(1);}, /**
	   * 'abc' => 'ABC'
	   */uppercase:function uppercase(value){return value || value === 0?value.toString().toUpperCase():'';}, /**
	   * 'AbC' => 'abc'
	   */lowercase:function lowercase(value){return value || value === 0?value.toString().toLowerCase():'';}, /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   * @param {Number} decimals Decimal places
	   */currency:function currency(value,_currency,decimals){value = parseFloat(value);if(!isFinite(value) || !value && value !== 0)return '';_currency = _currency != null?_currency:'$';decimals = decimals != null?decimals:2;var stringified=Math.abs(value).toFixed(decimals);var _int=decimals?stringified.slice(0,-1 - decimals):stringified;var i=_int.length % 3;var head=i > 0?_int.slice(0,i) + (_int.length > 3?',':''):'';var _float=decimals?stringified.slice(-1 - decimals):'';var sign=value < 0?'-':'';return sign + _currency + head + _int.slice(i).replace(digitsRE,'$1,') + _float;}, /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */pluralize:function pluralize(value){var args=toArray(arguments,1);return args.length > 1?args[value % 10 - 1] || args[args.length - 1]:args[0] + (value === 1?'':'s');}, /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */debounce:function debounce(handler,delay){if(!handler)return;if(!delay){delay = 300;}return _debounce(handler,delay);}};function installGlobalAPI(Vue){ /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */Vue.options = {directives:directives,elementDirectives:elementDirectives,filters:filters,transitions:{},components:{},partials:{},replace:true}; /**
	   * Expose useful internals
	   */Vue.util = util;Vue.config = config;Vue.set = set;Vue['delete'] = del;Vue.nextTick = nextTick; /**
	   * The following are exposed for advanced usage / plugins
	   */Vue.compiler = compiler;Vue.FragmentFactory = FragmentFactory;Vue.internalDirectives = internalDirectives;Vue.parsers = {path:path,text:text,template:template,directive:directive,expression:expression}; /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */Vue.cid = 0;var cid=1; /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */Vue.extend = function(extendOptions){extendOptions = extendOptions || {};var Super=this;var isFirstExtend=Super.cid === 0;if(isFirstExtend && extendOptions._Ctor){return extendOptions._Ctor;}var name=extendOptions.name || Super.options.name;if(process.env.NODE_ENV !== 'production'){if(!/^[a-zA-Z][\w-]*$/.test(name)){warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');name = null;}}var Sub=createClass(name || 'VueComponent');Sub.prototype = Object.create(Super.prototype);Sub.prototype.constructor = Sub;Sub.cid = cid++;Sub.options = mergeOptions(Super.options,extendOptions);Sub['super'] = Super; // allow further extension
	Sub.extend = Super.extend; // create asset registers, so extended classes
	// can have their private assets too.
	config._assetTypes.forEach(function(type){Sub[type] = Super[type];}); // enable recursive self-lookup
	if(name){Sub.options.components[name] = Sub;} // cache constructor
	if(isFirstExtend){extendOptions._Ctor = Sub;}return Sub;}; /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */function createClass(name){ /* eslint-disable no-new-func */return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')(); /* eslint-enable no-new-func */} /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */Vue.use = function(plugin){ /* istanbul ignore if */if(plugin.installed){return;} // additional parameters
	var args=toArray(arguments,1);args.unshift(this);if(typeof plugin.install === 'function'){plugin.install.apply(plugin,args);}else {plugin.apply(null,args);}plugin.installed = true;return this;}; /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */Vue.mixin = function(mixin){Vue.options = mergeOptions(Vue.options,mixin);}; /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */config._assetTypes.forEach(function(type){Vue[type] = function(id,definition){if(!definition){return this.options[type + 's'][id];}else { /* istanbul ignore if */if(process.env.NODE_ENV !== 'production'){if(type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))){warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);}}if(type === 'component' && isPlainObject(definition)){definition.name = id;definition = Vue.extend(definition);}this.options[type + 's'][id] = definition;return definition;}};}); // expose internal transition API
	extend(Vue.transition,transition);}installGlobalAPI(Vue);Vue.version = '1.0.24'; // devtools global hook
	/* istanbul ignore next */setTimeout(function(){if(config.devtools){if(devtools){devtools.emit('init',Vue);}else if(process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)){console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');}}},0);module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(4)))

/***/ },
/* 4 */
/***/ function(module, exports) {

	// shim for using process in browser

	'use strict';

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6)
	module.exports = __webpack_require__(10)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(51)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel-loader?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./app.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel-loader?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./app.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./app.vue"], function () {
	var newOptions = require("-!babel-loader?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./app.vue")
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./app.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-7398b2fa&file=app.vue!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./app.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-7398b2fa&file=app.vue!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./app.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".flex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.flex-1 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.flex-2 {\n  -webkit-box-flex: 2;\n      -ms-flex: 2;\n          flex: 2; }\n\n.flex-3 {\n  -webkit-box-flex: 3;\n      -ms-flex: 3;\n          flex: 3; }\n\n.flex-4 {\n  -webkit-box-flex: 4;\n      -ms-flex: 4;\n          flex: 4; }\n\n.flex-5 {\n  -webkit-box-flex: 5;\n      -ms-flex: 5;\n          flex: 5; }\n\n.flex-6 {\n  -webkit-box-flex: 6;\n      -ms-flex: 6;\n          flex: 6; }\n\n.flex-7 {\n  -webkit-box-flex: 7;\n      -ms-flex: 7;\n          flex: 7; }\n\n.flex-8 {\n  -webkit-box-flex: 8;\n      -ms-flex: 8;\n          flex: 8; }\n\n.flex-9 {\n  -webkit-box-flex: 9;\n      -ms-flex: 9;\n          flex: 9; }\n\n.flex-10 {\n  -webkit-box-flex: 10;\n      -ms-flex: 10;\n          flex: 10; }\n\n.flex-11 {\n  -webkit-box-flex: 11;\n      -ms-flex: 11;\n          flex: 11; }\n\n.flex-12 {\n  -webkit-box-flex: 12;\n      -ms-flex: 12;\n          flex: 12; }\n", ""]);

	// exports


/***/ },
/* 8 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	"use strict";

	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = __webpack_require__(11)["default"];

	exports.__esModule = true;

	var _markerVue = __webpack_require__(12);

	var _markerVue2 = _interopRequireDefault(_markerVue);

	exports["default"] = {
	  components: {
	    marker: _markerVue2["default"]
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(13)
	module.exports = __webpack_require__(15)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(50)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel-loader?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./marker.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel-loader?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./marker.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-05678b48&file=marker.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./marker.vue"], function () {
	var newOptions = require("-!babel-loader?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./marker.vue")
	var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-05678b48&file=marker.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./marker.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-05678b48&file=marker.vue&scoped=true!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./marker.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-05678b48&file=marker.vue&scoped=true!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./marker.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "header[_v-05678b48] {\n  display: block; }\n\nh1[_v-05678b48] {\n  position: absolute;\n  width: 100%;\n  font-size: 100px;\n  font-weight: 100;\n  text-align: center;\n  color: rgba(175, 47, 47, 0.15);\n  -webkit-text-rendering: optimizeLegibility;\n  -moz-text-rendering: optimizeLegibility;\n  text-rendering: optimizeLegibility; }\n\n.new-matter[_v-05678b48],\n.edit[_v-05678b48] {\n  position: relative;\n  margin: 0;\n  font-size: 24px;\n  font-family: inherit;\n  font-weight: inherit;\n  line-height: 1.4em;\n  border: 0;\n  outline: none;\n  color: inherit;\n  padding: 6px;\n  border: 1px solid #999;\n  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.new-matter[_v-05678b48] {\n  margin-top: 130px;\n  padding: 16px 16px 16px 40px;\n  border: none;\n  background: rgba(0, 0, 0, 0.003);\n  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03); }\n\ninput[type=range][_v-05678b48] {\n  -webkit-appearance: slider-vertical;\n  height: 300px; }\n\n.marker-btn[_v-05678b48] {\n  margin: 20px; }\n\n.center-block[_v-05678b48] {\n  float: none; }\n\n.thumbnail[_v-05678b48] {\n  white-space: nowrap; }\n\nli[_v-05678b48] {\n  white-space: nowrap;\n  line-height: 35px; }\n  li input[_v-05678b48] {\n    margin-right: 10px; }\n  li .remove-btn[_v-05678b48] {\n    margin-left: 10px; }\n    li .remove-btn[_v-05678b48]:hover {\n      cursor: pointer; }\n", ""]);

	// exports


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _cache = __webpack_require__(16);

	var ms = new _cache.storage();
	exports['default'] = {
	  data: function data() {
	    return {
	      matters: ms.fetchall(),
	      new_matter: '',
	      edit_matter: null
	    };
	  },
	  methods: {
	    addmatter: function addmatter() {
	      var value = this.new_matter && this.new_matter.trim();
	      if (!value) {
	        return;
	      }
	      var new_matter = ms.set_title(value);
	      console.dir(new_matter);
	      this.matters.push({ title: new_matter.get('title'), answer: new_matter.get('answer'), id: new_matter.id });
	      this.new_matter = '';
	    },
	    editmatter: function editmatter(matter) {
	      this.beforeEditCache = matter.answer;
	      this.edit_matter = matter;
	    },
	    doneEdit: function doneEdit(matter) {
	      if (!this.edit_matter) {
	        return;
	      }
	      this.edit_matter = null;
	      matter.answer = matter.answer.trim();
	      ms.update_answer(matter);
	      if (!matter.answer) {
	        this.removeTodo(matter.answer);
	      }
	    },
	    cancelEdit: function cancelEdit(matter) {
	      this.edit_matter = null;
	      matter.answer = this.beforeEditCache;
	    },
	    removeTodo: function removeTodo(matter) {
	      this.matters.$remove(matter);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/*jshint unused:false */
	// (function (exports) {
	//   'use strict';
	//
	//    // var STORAGE_KEY = 'matter-vuejs';
	//    var AV = require('avoscloud-sdk');
	//    AV.initialize('SaPcnO4U2rC7vqgFdbRiRNls-gzGzoHsz', 'e4zha3v6Xgp394QKezUYHhYn');
	//    var storage = AV.Object.extend('storage');
	//    exports.matterStorage = {
	// 	 fetch: function () {
	// 	   return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
	// 	 },
	// 	 save: function (todos) {
	// 	   localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
	// 	 }
	//    };
	//
	// })(window);
	//

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var AV = __webpack_require__(17);
	AV.initialize('SaPcnO4U2rC7vqgFdbRiRNls-gzGzoHsz', 'e4zha3v6Xgp394QKezUYHhYn');
	var storage = AV.Object.extend('storage', {
	  title: function title() {
	    return this.get('title');
	  },
	  answer: function answer() {
	    return this.get('answer');
	  },
	  set_title: function set_title(tl) {
	    var ms = new storage();
	    ms.set({ title: tl, answer: '' });
	    ms.save().then(function (obj) {
	      return obj;
	    }, function (error) {
	      console.dir(4);
	    });
	    return ms;
	  },
	  update_answer: function update_answer(st) {
	    var query = new AV.Query('storage');
	    query.equalTo('title', st.title);
	    query.first().then(function (data) {
	      data.set('answer', st.answer);
	      data.save();
	    }, function (err) {
	      console.log('Failed to create new object, with error message: ' + err.message);
	    });
	  },
	  fetchall: function fetchall() {
	    var results = [];
	    var query = new AV.Query('storage');
	    query.find().then(function (object) {
	      for (var i = 0; i < object.length; i++) {
	        results.push({ title: object[i].get('title'), answer: object[i].get('answer'), id: object[i].id });
	      }
	    });
	    return results;
	  }
	});
	exports.storage = storage;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * AVOSCloud JavaScript SDK
	 * Built: Mon Jun 03 2013 13:45:00
	 * https://leancloud.cn
	 *
	 * Copyright 2015 LeanCloud.cn, Inc.
	 * The AVOS Cloud JavaScript SDK is freely distributable under the MIT license.
	 */

	'use strict';

	var AV = module.exports = {};

	AV._ = __webpack_require__(18);
	AV.VERSION = __webpack_require__(19);
	AV.Promise = __webpack_require__(20);
	AV.XMLHttpRequest = __webpack_require__(21).XMLHttpRequest;
	AV.localStorage = __webpack_require__(22);

	// 以下模块为了兼容原有代码，使用这种加载方式。
	// The module order is important.
	__webpack_require__(24)(AV);
	__webpack_require__(25)(AV);
	__webpack_require__(26)(AV);
	__webpack_require__(27)(AV);
	__webpack_require__(28)(AV);
	__webpack_require__(29)(AV);
	__webpack_require__(30)(AV);
	__webpack_require__(31)(AV);
	__webpack_require__(35)(AV);
	__webpack_require__(36)(AV);
	__webpack_require__(37)(AV);
	__webpack_require__(38)(AV);
	__webpack_require__(39)(AV);
	__webpack_require__(40)(AV);
	__webpack_require__(41)(AV);
	__webpack_require__(42)(AV);
	__webpack_require__(43)(AV);
	__webpack_require__(44)(AV);
	__webpack_require__(45)(AV);
	__webpack_require__(46)(AV);
	__webpack_require__(47)(AV);
	__webpack_require__(48)(AV);
	__webpack_require__(49)(AV);

	AV.AV = AV; // Backward compatibility

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.

	'use strict';

	(function () {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;

	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;

	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype,
	      ObjProto = Object.prototype,
	      FuncProto = Function.prototype;

	  // Create quick reference variables for speed access to core prototypes.
	  var push = ArrayProto.push,
	      slice = ArrayProto.slice,
	      toString = ObjProto.toString,
	      hasOwnProperty = ObjProto.hasOwnProperty;

	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var nativeIsArray = Array.isArray,
	      nativeKeys = Object.keys,
	      nativeBind = FuncProto.bind,
	      nativeCreate = Object.create;

	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function Ctor() {};

	  // Create a safe reference to the Underscore object for use below.
	  var _ = function _(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };

	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }

	  // Current version.
	  _.VERSION = '1.8.3';

	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function optimizeCb(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1:
	        return function (value) {
	          return func.call(context, value);
	        };
	      case 2:
	        return function (value, other) {
	          return func.call(context, value, other);
	        };
	      case 3:
	        return function (value, index, collection) {
	          return func.call(context, value, index, collection);
	        };
	      case 4:
	        return function (accumulator, value, index, collection) {
	          return func.call(context, accumulator, value, index, collection);
	        };
	    }
	    return function () {
	      return func.apply(context, arguments);
	    };
	  };

	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function cb(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value)) return _.matcher(value);
	    return _.property(value);
	  };
	  _.iteratee = function (value, context) {
	    return cb(value, context, Infinity);
	  };

	  // An internal function for creating assigner functions.
	  var createAssigner = function createAssigner(keysFunc, undefinedOnly) {
	    return function (obj) {
	      var length = arguments.length;
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };

	  // An internal function for creating a new object that inherits from another.
	  var baseCreate = function baseCreate(prototype) {
	    if (!_.isObject(prototype)) return {};
	    if (nativeCreate) return nativeCreate(prototype);
	    Ctor.prototype = prototype;
	    var result = new Ctor();
	    Ctor.prototype = null;
	    return result;
	  };

	  var property = function property(key) {
	    return function (obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };

	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = property('length');
	  var isArrayLike = function isArrayLike(collection) {
	    var length = getLength(collection);
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };

	  // Collection Functions
	  // --------------------

	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function (obj, iteratee, context) {
	    iteratee = optimizeCb(iteratee, context);
	    var i, length;
	    if (isArrayLike(obj)) {
	      for (i = 0, length = obj.length; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };

	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function (obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length);
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };

	  // Create a reducing function iterating left or right.
	  function createReduce(dir) {
	    // Optimized iterator function as using arguments.length
	    // in the main function will deoptimize the, see #1991.
	    function iterator(obj, iteratee, memo, keys, index, length) {
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    }

	    return function (obj, iteratee, memo, context) {
	      iteratee = optimizeCb(iteratee, context, 4);
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      // Determine the initial value if none is provided.
	      if (arguments.length < 3) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      return iterator(obj, iteratee, memo, keys, index, length);
	    };
	  }

	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);

	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);

	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function (obj, predicate, context) {
	    var key;
	    if (isArrayLike(obj)) {
	      key = _.findIndex(obj, predicate, context);
	    } else {
	      key = _.findKey(obj, predicate, context);
	    }
	    if (key !== void 0 && key !== -1) return obj[key];
	  };

	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function (obj, predicate, context) {
	    var results = [];
	    predicate = cb(predicate, context);
	    _.each(obj, function (value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };

	  // Return all the elements for which a truth test fails.
	  _.reject = function (obj, predicate, context) {
	    return _.filter(obj, _.negate(cb(predicate)), context);
	  };

	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function (obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };

	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function (obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };

	  // Determine if the array or object contains a given item (using `===`).
	  // Aliased as `includes` and `include`.
	  _.contains = _.includes = _.include = function (obj, item, fromIndex, guard) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
	    return _.indexOf(obj, item, fromIndex) >= 0;
	  };

	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function (obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function (value) {
	      var func = isFunc ? method : value[method];
	      return func == null ? func : func.apply(value, args);
	    });
	  };

	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function (obj, key) {
	    return _.map(obj, _.property(key));
	  };

	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function (obj, attrs) {
	    return _.filter(obj, _.matcher(attrs));
	  };

	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function (obj, attrs) {
	    return _.find(obj, _.matcher(attrs));
	  };

	  // Return the maximum element (or element-based computation).
	  _.max = function (obj, iteratee, context) {
	    var result = -Infinity,
	        lastComputed = -Infinity,
	        value,
	        computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function (value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Return the minimum element (or element-based computation).
	  _.min = function (obj, iteratee, context) {
	    var result = Infinity,
	        lastComputed = Infinity,
	        value,
	        computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function (value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function (obj) {
	    var set = isArrayLike(obj) ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };

	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function (obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };

	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function (obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function (value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function (left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };

	  // An internal function used for aggregate "group by" operations.
	  var group = function group(behavior) {
	    return function (obj, iteratee, context) {
	      var result = {};
	      iteratee = cb(iteratee, context);
	      _.each(obj, function (value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };

	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function (result, value, key) {
	    if (_.has(result, key)) result[key].push(value);else result[key] = [value];
	  });

	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function (result, value, key) {
	    result[key] = value;
	  });

	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function (result, value, key) {
	    if (_.has(result, key)) result[key]++;else result[key] = 1;
	  });

	  // Safely create a real, live array from anything iterable.
	  _.toArray = function (obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (isArrayLike(obj)) return _.map(obj, _.identity);
	    return _.values(obj);
	  };

	  // Return the number of elements in an object.
	  _.size = function (obj) {
	    if (obj == null) return 0;
	    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	  };

	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function (obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var pass = [],
	        fail = [];
	    _.each(obj, function (value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };

	  // Array Functions
	  // ---------------

	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function (array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    return _.initial(array, array.length - n);
	  };

	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N.
	  _.initial = function (array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };

	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array.
	  _.last = function (array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return _.rest(array, Math.max(0, array.length - n));
	  };

	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array.
	  _.rest = _.tail = _.drop = function (array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };

	  // Trim out all falsy values from an array.
	  _.compact = function (array) {
	    return _.filter(array, _.identity);
	  };

	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function flatten(input, shallow, strict, startIndex) {
	    var output = [],
	        idx = 0;
	    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        //flatten current level of array or arguments object
	        if (!shallow) value = flatten(value, shallow, strict);
	        var j = 0,
	            len = value.length;
	        output.length += len;
	        while (j < len) {
	          output[idx++] = value[j++];
	        }
	      } else if (!strict) {
	        output[idx++] = value;
	      }
	    }
	    return output;
	  };

	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function (array, shallow) {
	    return flatten(array, shallow, false);
	  };

	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function (array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };

	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function (array, isSorted, iteratee, context) {
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = cb(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var value = array[i],
	          computed = iteratee ? iteratee(value, i, array) : value;
	      if (isSorted) {
	        if (!i || seen !== computed) result.push(value);
	        seen = computed;
	      } else if (iteratee) {
	        if (!_.contains(seen, computed)) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (!_.contains(result, value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  };

	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function () {
	    return _.uniq(flatten(arguments, true, true));
	  };

	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function (array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };

	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function (array) {
	    var rest = flatten(arguments, true, true, 1);
	    return _.filter(array, function (value) {
	      return !_.contains(rest, value);
	    });
	  };

	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function () {
	    return _.unzip(arguments);
	  };

	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices
	  _.unzip = function (array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);

	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };

	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function (list, values) {
	    var result = {};
	    for (var i = 0, length = getLength(list); i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };

	  // Generator function to create the findIndex and findLastIndex functions
	  function createPredicateIndexFinder(dir) {
	    return function (array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  }

	  // Returns the first index on an array-like that passes a predicate test
	  _.findIndex = createPredicateIndexFinder(1);
	  _.findLastIndex = createPredicateIndexFinder(-1);

	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function (array, obj, iteratee, context) {
	    iteratee = cb(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0,
	        high = getLength(array);
	    while (low < high) {
	      var mid = Math.floor((low + high) / 2);
	      if (iteratee(array[mid]) < value) low = mid + 1;else high = mid;
	    }
	    return low;
	  };

	  // Generator function to create the indexOf and lastIndexOf functions
	  function createIndexFinder(dir, predicateFind, sortedIndex) {
	    return function (array, item, idx) {
	      var i = 0,
	          length = getLength(array);
	      if (typeof idx == 'number') {
	        if (dir > 0) {
	          i = idx >= 0 ? idx : Math.max(idx + length, i);
	        } else {
	          length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
	        }
	      } else if (sortedIndex && idx && length) {
	        idx = sortedIndex(array, item);
	        return array[idx] === item ? idx : -1;
	      }
	      if (item !== item) {
	        idx = predicateFind(slice.call(array, i, length), _.isNaN);
	        return idx >= 0 ? idx + i : -1;
	      }
	      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
	        if (array[idx] === item) return idx;
	      }
	      return -1;
	    };
	  }

	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
	  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function (start, stop, step) {
	    if (stop == null) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;

	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);

	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }

	    return range;
	  };

	  // Function (ahem) Functions
	  // ------------------

	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments
	  var executeBound = function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
	    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	    var self = baseCreate(sourceFunc.prototype);
	    var result = sourceFunc.apply(self, args);
	    if (_.isObject(result)) return result;
	    return self;
	  };

	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function (func, context) {
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var args = slice.call(arguments, 2);
	    var bound = function bound() {
	      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	    };
	    return bound;
	  };

	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function (func) {
	    var boundArgs = slice.call(arguments, 1);
	    var bound = function bound() {
	      var position = 0,
	          length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  };

	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function (obj) {
	    var i,
	        length = arguments.length,
	        key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };

	  // Memoize an expensive function by storing its results.
	  _.memoize = function (func, hasher) {
	    var memoize = function memoize(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };

	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function (func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function () {
	      return func.apply(null, args);
	    }, wait);
	  };

	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);

	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function (func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function later() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function () {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };

	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function (func, wait, immediate) {
	    var timeout, args, context, timestamp, result;

	    var later = function later() {
	      var last = _.now() - timestamp;

	      if (last < wait && last >= 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };

	    return function () {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }

	      return result;
	    };
	  };

	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function (func, wrapper) {
	    return _.partial(wrapper, func);
	  };

	  // Returns a negated version of the passed-in predicate.
	  _.negate = function (predicate) {
	    return function () {
	      return !predicate.apply(this, arguments);
	    };
	  };

	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function () {
	    var args = arguments;
	    var start = args.length - 1;
	    return function () {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };

	  // Returns a function that will only be executed on and after the Nth call.
	  _.after = function (times, func) {
	    return function () {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };

	  // Returns a function that will only be executed up to (but not including) the Nth call.
	  _.before = function (times, func) {
	    var memo;
	    return function () {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      }
	      if (times <= 1) func = null;
	      return memo;
	    };
	  };

	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);

	  // Object Functions
	  // ----------------

	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !({ toString: null }).propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

	  function collectNonEnumProps(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = _.isFunction(constructor) && constructor.prototype || ObjProto;

	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  }

	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function (obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };

	  // Retrieve all the property names of an object.
	  _.allKeys = function (obj) {
	    if (!_.isObject(obj)) return [];
	    var keys = [];
	    for (var key in obj) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };

	  // Retrieve the values of an object's properties.
	  _.values = function (obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };

	  // Returns the results of applying the iteratee to each element of the object
	  // In contrast to _.map it returns an object
	  _.mapObject = function (obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = _.keys(obj),
	        length = keys.length,
	        results = {},
	        currentKey;
	    for (var index = 0; index < length; index++) {
	      currentKey = keys[index];
	      results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };

	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function (obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };

	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function (obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };

	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function (obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };

	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);

	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);

	  // Returns the first key on an object that passes a predicate test
	  _.findKey = function (obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj),
	        key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };

	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function (object, oiteratee, context) {
	    var result = {},
	        obj = object,
	        iteratee,
	        keys;
	    if (obj == null) return result;
	    if (_.isFunction(oiteratee)) {
	      keys = _.allKeys(obj);
	      iteratee = optimizeCb(oiteratee, context);
	    } else {
	      keys = flatten(arguments, false, false, 1);
	      iteratee = function (value, key, obj) {
	        return key in obj;
	      };
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  };

	  // Return a copy of the object without the blacklisted properties.
	  _.omit = function (obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(flatten(arguments, false, false, 1), String);
	      iteratee = function (value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };

	  // Fill in a given object with default properties.
	  _.defaults = createAssigner(_.allKeys, true);

	  // Creates an object that inherits from the given prototype object.
	  // If additional properties are provided then they will be added to the
	  // created object.
	  _.create = function (prototype, props) {
	    var result = baseCreate(prototype);
	    if (props) _.extendOwn(result, props);
	    return result;
	  };

	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function (obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };

	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function (obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };

	  // Returns whether an object has a given set of `key:value` pairs.
	  _.isMatch = function (object, attrs) {
	    var keys = _.keys(attrs),
	        length = keys.length;
	    if (object == null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };

	  // Internal recursive comparison function for `isEqual`.
	  var eq = function eq(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }

	    var areArrays = className === '[object Array]';
	    if (!areArrays) {
	      if (typeof a != 'object' || typeof b != 'object') return false;

	      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	      // from different frames are.
	      var aCtor = a.constructor,
	          bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor && _.isFunction(bCtor) && bCtor instanceof bCtor) && 'constructor' in a && 'constructor' in b) {
	        return false;
	      }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }

	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);

	    // Recursively compare objects and arrays.
	    if (areArrays) {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      length = a.length;
	      if (length !== b.length) return false;
	      // Deep compare the contents, ignoring non-numeric properties.
	      while (length--) {
	        if (!eq(a[length], b[length], aStack, bStack)) return false;
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a),
	          key;
	      length = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      if (_.keys(b).length !== length) return false;
	      while (length--) {
	        // Deep compare each member
	        key = keys[length];
	        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	  };

	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function (a, b) {
	    return eq(a, b);
	  };

	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function (obj) {
	    if (obj == null) return true;
	    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	    return _.keys(obj).length === 0;
	  };

	  // Is a given value a DOM element?
	  _.isElement = function (obj) {
	    return !!(obj && obj.nodeType === 1);
	  };

	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function (obj) {
	    return toString.call(obj) === '[object Array]';
	  };

	  // Is a given variable an object?
	  _.isObject = function (obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };

	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function (name) {
	    _['is' + name] = function (obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });

	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function (obj) {
	      return _.has(obj, 'callee');
	    };
	  }

	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), and in Safari 8 (#1929).
	  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
	    _.isFunction = function (obj) {
	      return typeof obj == 'function' || false;
	    };
	  }

	  // Is a given object a finite number?
	  _.isFinite = function (obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };

	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function (obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };

	  // Is a given value a boolean?
	  _.isBoolean = function (obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };

	  // Is a given value equal to null?
	  _.isNull = function (obj) {
	    return obj === null;
	  };

	  // Is a given variable undefined?
	  _.isUndefined = function (obj) {
	    return obj === void 0;
	  };

	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function (obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };

	  // Utility Functions
	  // -----------------

	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function () {
	    root._ = previousUnderscore;
	    return this;
	  };

	  // Keep the identity function around for default iteratees.
	  _.identity = function (value) {
	    return value;
	  };

	  // Predicate-generating functions. Often useful outside of Underscore.
	  _.constant = function (value) {
	    return function () {
	      return value;
	    };
	  };

	  _.noop = function () {};

	  _.property = property;

	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function (obj) {
	    return obj == null ? function () {} : function (key) {
	      return obj[key];
	    };
	  };

	  // Returns a predicate for checking whether an object has a given set of
	  // `key:value` pairs.
	  _.matcher = _.matches = function (attrs) {
	    attrs = _.extendOwn({}, attrs);
	    return function (obj) {
	      return _.isMatch(obj, attrs);
	    };
	  };

	  // Run a function **n** times.
	  _.times = function (n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = optimizeCb(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };

	  // Return a random integer between min and max (inclusive).
	  _.random = function (min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };

	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function () {
	    return new Date().getTime();
	  };

	  // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);

	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function createEscaper(map) {
	    var escaper = function escaper(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function (string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);

	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function (object, property, fallback) {
	    var value = object == null ? void 0 : object[property];
	    if (value === void 0) {
	      value = fallback;
	    }
	    return _.isFunction(value) ? value.call(object) : value;
	  };

	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function (prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };

	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate: /<%([\s\S]+?)%>/g,
	    interpolate: /<%=([\s\S]+?)%>/g,
	    escape: /<%-([\s\S]+?)%>/g
	  };

	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;

	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'": "'",
	    '\\': '\\',
	    '\r': 'r',
	    '\n': 'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

	  var escapeChar = function escapeChar(match) {
	    return '\\' + escapes[match];
	  };

	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function (text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);

	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join('|') + '|$', 'g');

	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;

	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }

	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";

	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

	    source = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + source + 'return __p;\n';

	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }

	    var template = function template(data) {
	      return render.call(this, data, _);
	    };

	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';

	    return template;
	  };

	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function (obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };

	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.

	  // Helper function to continue chaining intermediate results.
	  var result = function result(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };

	  // Add your own custom functions to the Underscore object.
	  _.mixin = function (obj) {
	    _.each(_.functions(obj), function (name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function () {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result(this, func.apply(_, args));
	      };
	    });
	  };

	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);

	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function (name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function () {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result(this, obj);
	    };
	  });

	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function (name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function () {
	      return result(this, method.apply(this._wrapped, arguments));
	    };
	  });

	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function () {
	    return this._wrapped;
	  };

	  // Provide unwrapping proxy for some methods used in engine operations
	  // such as arithmetic and JSON stringification.
	  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

	  _.prototype.toString = function () {
	    return '' + this._wrapped;
	  };

	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}).call(undefined);

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	module.exports = "js0.6.10";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	var _ = __webpack_require__(18);

	var Promise = module.exports = function Promise(fn) {
	  /**
	   * A Promise is returned by async methods as a hook to provide callbacks to be
	   * called when the async task is fulfilled.
	   *
	   * <p>Typical usage would be like:<pre>
	   *    query.find().then(function(results) {
	   *      results[0].set("foo", "bar");
	   *      return results[0].saveAsync();
	   *    }).then(function(result) {
	   *      console.log("Updated " + result.id);
	   *    });
	   * </pre></p>
	   * <p>Another example:<pre>
	   *    var promise = new AV.Promise(function(resolve, reject) {
	   *      resolve(42);
	   *    });
	   *    promise.then(function(value){
	   *      console.log(value);
	   *    }).catch(function(error){
	   *      console.error(error);
	   *    });
	   * </pre></p>
	   * @param {Function} fn An optional function with two arguments resolve
	   *                   and reject.The first argument fulfills the promise,
	   *                   the second argument rejects it. We can call these
	    *                  functions, once our operation is completed.
	   * @see AV.Promise.prototype.then
	   * @class
	   */
	  this._resolved = false;
	  this._rejected = false;
	  this._resolvedCallbacks = [];
	  this._rejectedCallbacks = [];

	  this.doResolve(fn);
	};

	var _isNullOrUndefined = function _isNullOrUndefined(x) {
	  return _.isNull(x) || _.isUndefined(x);
	};

	var _isNode = false;

	if (typeof process !== "undefined" && process.versions && process.versions.node) {
	  _isNode = true;
	}

	_.extend(Promise, /** @lends AV.Promise */{

	  _isPromisesAPlusCompliant: !_isNode,
	  _debugError: false,

	  setPromisesAPlusCompliant: function setPromisesAPlusCompliant(isCompliant) {
	    Promise._isPromisesAPlusCompliant = isCompliant;
	  },

	  setDebugError: function setDebugError(enable) {
	    Promise._debugError = enable;
	  },

	  /**
	   * Returns true iff the given object fulfils the Promise interface.
	   * @return {Boolean}
	   */
	  is: function is(promise) {
	    return promise && promise.then && _.isFunction(promise.then);
	  },

	  /**
	   * Returns a new promise that is resolved with a given value.
	   * @return {AV.Promise} the new promise.
	   */
	  as: function as() {
	    var promise = new Promise();
	    promise.resolve.apply(promise, arguments);
	    return promise;
	  },

	  /**
	   * Returns a new promise that is rejected with a given error.
	   * @return {AV.Promise} the new promise.
	   */
	  error: function error() {
	    var promise = new Promise();
	    promise.reject.apply(promise, arguments);
	    return promise;
	  },

	  /**
	   * Returns a new promise that is fulfilled when all of the input promises
	   * are resolved. If any promise in the list fails, then the returned promise
	   * will fail with the last error. If they all succeed, then the returned
	   * promise will succeed, with the results being the results of all the input
	   * promises. For example: <pre>
	   *   var p1 = AV.Promise.as(1);
	   *   var p2 = AV.Promise.as(2);
	   *   var p3 = AV.Promise.as(3);
	   *
	   *   AV.Promise.when(p1, p2, p3).then(function(r1, r2, r3) {
	   *     console.log(r1);  // prints 1
	   *     console.log(r2);  // prints 2
	   *     console.log(r3);  // prints 3
	   *   });</pre>
	   *
	   * The input promises can also be specified as an array: <pre>
	   *   var promises = [p1, p2, p3];
	   *   AV.Promise.when(promises).then(function(r1, r2, r3) {
	   *     console.log(r1);  // prints 1
	   *     console.log(r2);  // prints 2
	   *     console.log(r3);  // prints 3
	   *   });
	   * </pre>
	   * @param {Array} promises a list of promises to wait for.
	   * @return {AV.Promise} the new promise.
	   */
	  when: function when(promises) {
	    // Allow passing in Promises as separate arguments instead of an Array.
	    var objects;
	    if (promises && _isNullOrUndefined(promises.length)) {
	      objects = arguments;
	    } else {
	      objects = promises;
	    }
	    var isAll = _.last(arguments);
	    isAll = _.isBoolean(isAll) ? isAll : false;

	    var total = objects.length;
	    var hadError = false;
	    var results = [];
	    var errors = [];
	    results.length = objects.length;
	    errors.length = objects.length;

	    if (total === 0) {
	      if (isAll) {
	        return Promise.as.call(this, results);
	      } else {
	        return Promise.as.apply(this, results);
	      }
	    }

	    var promise = new Promise();

	    var resolveOne = function resolveOne(i) {
	      total = total - 1;
	      if (hadError && !promise._rejected && isAll) {
	        promise.reject.call(promise, errors[i]);
	        return;
	      }

	      if (total === 0) {
	        if (hadError && !promise._rejected) {
	          promise.reject.call(promise, errors);
	        } else {
	          if (isAll) {
	            if (!promise._rejected) {
	              promise.resolve.call(promise, results);
	            } else {
	              //It's rejected already, so we ignore it.
	            }
	          } else {
	              promise.resolve.apply(promise, results);
	            }
	        }
	      }
	    };

	    _.each(objects, function (object, i) {
	      if (Promise.is(object)) {
	        object.then(function (result) {
	          results[i] = result;
	          resolveOne(i);
	        }, function (error) {
	          errors[i] = error;
	          hadError = true;
	          resolveOne(i);
	        });
	      } else {
	        results[i] = object;
	        resolveOne(i);
	      }
	    });

	    return promise;
	  },

	  /**
	   * Returns a promise that resolves or rejects as soon as one
	   * of the promises in the iterable resolves or rejects, with
	   * the value or reason from that promise.Returns a new promise
	   * that is fulfilled when one of the input promises.
	   * For example: <pre>
	   *   var p1 = AV.Promise.as(1);
	   *   var p2 = AV.Promise.as(2);
	   *   var p3 = AV.Promise.as(3);
	   *
	   *   AV.Promise.race(p1, p2, p3).then(function(result) {
	   *     console.log(result);  // prints 1
	   *   });</pre>
	   *
	   * The input promises can also be specified as an array: <pre>
	   *   var promises = [p1, p2, p3];
	   *   AV.Promise.when(promises).then(function(result) {
	   *     console.log(result);  // prints 1
	   *   });
	   * </pre>
	   * @param {Array} promises a list of promises to wait for.
	   * @return {AV.Promise} the new promise.
	   */
	  race: function race(promises) {
	    // Allow passing in Promises as separate arguments instead of an Array.
	    var objects;
	    if (promises && _isNullOrUndefined(promises.length)) {
	      objects = arguments;
	    } else {
	      objects = promises;
	    }

	    var total = objects.length;
	    var hadError = false;
	    var results = [];
	    var errors = [];

	    results.length = errors.length = objects.length;

	    if (total === 0) {
	      return Promise.as.call(this);
	    }

	    var promise = new Promise();

	    var resolveOne = function resolveOne(i) {
	      if (!promise._resolved && !promise._rejected) {
	        if (hadError) {
	          promise.reject.call(promise, errors[i]);
	        } else {
	          promise.resolve.call(promise, results[i]);
	        }
	      }
	    };

	    _.each(objects, function (object, i) {
	      if (Promise.is(object)) {
	        object.then(function (result) {
	          results[i] = result;
	          resolveOne(i);
	        }, function (error) {
	          errors[i] = error;
	          hadError = true;
	          resolveOne(i);
	        });
	      } else {
	        results[i] = object;
	        resolveOne(i);
	      }
	    });

	    return promise;
	  },

	  /**
	   * Runs the given asyncFunction repeatedly, as long as the predicate
	   * function returns a truthy value. Stops repeating if asyncFunction returns
	   * a rejected promise.
	   * @param {Function} predicate should return false when ready to stop.
	   * @param {Function} asyncFunction should return a Promise.
	   */
	  _continueWhile: function _continueWhile(predicate, asyncFunction) {
	    if (predicate()) {
	      return asyncFunction().then(function () {
	        return Promise._continueWhile(predicate, asyncFunction);
	      });
	    }
	    return Promise.as();
	  }
	});

	/**
	 * Just like AV.Promise.when, but it calls resolveCallbck function
	 * with one results array and calls rejectCallback function as soon as any one
	 * of the input promises rejects.
	 * @see AV.Promise.when
	 */
	Promise.all = function (promises) {
	  return Promise.when(promises, true);
	};

	_.extend(Promise.prototype, /** @lends AV.Promise.prototype */{

	  /**
	   * Marks this promise as fulfilled, firing any callbacks waiting on it.
	   * @param {Object} result the result to pass to the callbacks.
	   */
	  resolve: function resolve(result) {
	    if (this._resolved || this._rejected) {
	      throw "A promise was resolved even though it had already been " + (this._resolved ? "resolved" : "rejected") + ".";
	    }
	    this._resolved = true;
	    this._result = arguments;
	    var results = arguments;
	    _.each(this._resolvedCallbacks, function (resolvedCallback) {
	      resolvedCallback.apply(this, results);
	    });
	    this._resolvedCallbacks = [];
	    this._rejectedCallbacks = [];
	  },

	  doResolve: function doResolve(fn) {
	    if (!fn) return;
	    var done = false;
	    var self = this;
	    try {
	      fn(function (value) {
	        if (done) return;
	        done = true;
	        self.resolve.call(self, value);
	      }, function (reason) {
	        if (done) return;
	        done = true;
	        self.reject.call(self, reason);
	      });
	    } catch (ex) {
	      if (done) return;
	      done = true;
	      self.reject.call(self, ex);
	    }
	  },

	  /**
	   * Marks this promise as fulfilled, firing any callbacks waiting on it.
	   * @param {Object} error the error to pass to the callbacks.
	   */
	  reject: function reject(error) {
	    if (this._resolved || this._rejected) {
	      throw "A promise was rejected even though it had already been " + (this._resolved ? "resolved" : "rejected") + ".";
	    }
	    this._rejected = true;
	    this._error = error;
	    _.each(this._rejectedCallbacks, function (rejectedCallback) {
	      rejectedCallback(error);
	    });
	    this._resolvedCallbacks = [];
	    this._rejectedCallbacks = [];
	  },

	  /**
	   * Adds callbacks to be called when this promise is fulfilled. Returns a new
	   * Promise that will be fulfilled when the callback is complete. It allows
	   * chaining. If the callback itself returns a Promise, then the one returned
	   * by "then" will not be fulfilled until that one returned by the callback
	   * is fulfilled.
	   * @param {Function} resolvedCallback Function that is called when this
	   * Promise is resolved. Once the callback is complete, then the Promise
	   * returned by "then" will also be fulfilled.
	   * @param {Function} rejectedCallback Function that is called when this
	   * Promise is rejected with an error. Once the callback is complete, then
	   * the promise returned by "then" with be resolved successfully. If
	   * rejectedCallback is null, or it returns a rejected Promise, then the
	   * Promise returned by "then" will be rejected with that error.
	   * @return {AV.Promise} A new Promise that will be fulfilled after this
	   * Promise is fulfilled and either callback has completed. If the callback
	   * returned a Promise, then this Promise will not be fulfilled until that
	   * one is.
	   */
	  then: function then(resolvedCallback, rejectedCallback) {
	    var promise = new Promise();

	    var wrappedResolvedCallback = function wrappedResolvedCallback() {
	      var result = arguments;
	      if (resolvedCallback) {
	        if (Promise._isPromisesAPlusCompliant) {
	          try {
	            result = [resolvedCallback.apply(this, result)];
	          } catch (e) {
	            if (Promise._debugError && e) {
	              console.error('Error occurred in promise resolve callback.', e.stack || e);
	            }
	            result = [Promise.error(e)];
	          }
	        } else {
	          result = [resolvedCallback.apply(this, result)];
	        }
	      }
	      if (result.length === 1 && Promise.is(result[0])) {
	        result[0].then(function () {
	          promise.resolve.apply(promise, arguments);
	        }, function (error) {
	          promise.reject(error);
	        });
	      } else {
	        promise.resolve.apply(promise, result);
	      }
	    };

	    var wrappedRejectedCallback = function wrappedRejectedCallback(error) {
	      var result = [];
	      if (rejectedCallback) {
	        if (Promise._isPromisesAPlusCompliant) {
	          try {
	            result = [rejectedCallback(error)];
	          } catch (e) {
	            if (Promise._debugError && e) {
	              console.error('Error occurred in promise reject callback.', e.stack || e);
	            }
	            result = [Promise.error(e)];
	          }
	        } else {
	          result = [rejectedCallback(error)];
	        }
	        if (result.length === 1 && Promise.is(result[0])) {
	          result[0].then(function () {
	            promise.resolve.apply(promise, arguments);
	          }, function (error) {
	            promise.reject(error);
	          });
	        } else {
	          if (Promise._isPromisesAPlusCompliant) {
	            promise.resolve.apply(promise, result);
	          } else {
	            promise.reject(result[0]);
	          }
	        }
	      } else {
	        promise.reject(error);
	      }
	    };

	    var runLater = function runLater(func) {
	      func.call();
	    };
	    if (Promise._isPromisesAPlusCompliant) {
	      if (typeof window !== 'undefined' && _.isFunction(window.setImmediate)) {
	        runLater = function (func) {
	          window.setImmediate(func);
	        };
	      } else if (typeof process !== 'undefined' && process.nextTick) {
	        runLater = function (func) {
	          process.nextTick(func);
	        };
	      } else if (typeof setTimeout !== 'undefined' && _.isFunction(setTimeout)) {
	        runLater = function (func) {
	          setTimeout(func, 0);
	        };
	      }
	    }

	    var self = this;
	    if (this._resolved) {
	      runLater(function () {
	        wrappedResolvedCallback.apply(self, self._result);
	      });
	    } else if (this._rejected) {
	      runLater(function () {
	        wrappedRejectedCallback.apply(self, [self._error]);
	      });
	    } else {
	      this._resolvedCallbacks.push(wrappedResolvedCallback);
	      this._rejectedCallbacks.push(wrappedRejectedCallback);
	    }

	    return promise;
	  },

	  /**
	   * Add handlers to be called when the Promise object is rejected.
	   *
	   * @param {Function} rejectedCallback Function that is called when this
	   *                   Promise is rejected with an error.
	   * @return {AV.Promise} A new Promise that will be fulfilled after this
	   *                   Promise is fulfilled and either callback has completed. If the callback
	   * returned a Promise, then this Promise will not be fulfilled until that
	   *                   one is.
	   * @function
	   */
	  'catch': function _catch(onRejected) {
	    return this.then(undefined, onRejected);
	  },

	  /**
	   * Add handlers to be called when the promise
	   * is either resolved or rejected
	   */
	  always: function always(callback) {
	    return this.then(callback, callback);
	  },

	  /**
	   * Add handlers to be called when the Promise object is resolved
	   */
	  done: function done(callback) {
	    return this.then(callback);
	  },

	  /**
	   * Add handlers to be called when the Promise object is rejected
	   */
	  fail: function fail(callback) {
	    return this.then(null, callback);
	  },

	  /**
	   * Run the given callbacks after this promise is fulfilled.
	   * @param optionsOrCallback {} A Backbone-style options callback, or a
	   * callback function. If this is an options object and contains a "model"
	   * attributes, that will be passed to error callbacks as the first argument.
	   * @param model {} If truthy, this will be passed as the first result of
	   * error callbacks. This is for Backbone-compatability.
	   * @return {AV.Promise} A promise that will be resolved after the
	   * callbacks are run, with the same result as this.
	   */
	  _thenRunCallbacks: function _thenRunCallbacks(optionsOrCallback, model) {
	    var options;
	    if (_.isFunction(optionsOrCallback)) {
	      var callback = optionsOrCallback;
	      options = {
	        success: function success(result) {
	          callback(result, null);
	        },
	        error: function error(_error) {
	          callback(null, _error);
	        }
	      };
	    } else {
	      options = _.clone(optionsOrCallback);
	    }
	    options = options || {};

	    return this.then(function (result) {
	      if (options.success) {
	        options.success.apply(this, arguments);
	      } else if (model) {
	        // When there's no callback, a sync event should be triggered.
	        model.trigger('sync', model, result, options);
	      }
	      return Promise.as.apply(Promise, arguments);
	    }, function (error) {
	      if (options.error) {
	        if (!_.isUndefined(model)) {
	          options.error(model, error);
	        } else {
	          options.error(error);
	        }
	      } else if (model) {
	        // When there's no error callback, an error event should be triggered.
	        model.trigger('error', model, error, options);
	      }
	      // By explicitly returning a rejected Promise, this will work with
	      // either jQuery or Promises/A semantics.
	      return Promise.error(error);
	    });
	  },

	  /**
	   * Adds a callback function that should be called regardless of whether
	   * this promise failed or succeeded. The callback will be given either the
	   * array of results for its first argument, or the error as its second,
	   * depending on whether this Promise was rejected or resolved. Returns a
	   * new Promise, like "then" would.
	   * @param {Function} continuation the callback.
	   */
	  _continueWith: function _continueWith(continuation) {
	    return this.then(function () {
	      return continuation(arguments, null);
	    }, function (error) {
	      return continuation(null, error);
	    });
	  }

	});

	/**
	 * Alias of AV.Promise.prototype.always
	 * @function
	 * @see AV.Promise#always
	 */
	Promise.prototype['finally'] = Promise.prototype.always;

	/**
	 * Alias of AV.Promise.prototype.done
	 * @function
	 * @see AV.Promise#done
	 */
	Promise.prototype['try'] = Promise.prototype.done;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 21 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	exports.XMLHttpRequest = global.XMLHttpRequest;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var localStorage = global.localStorage;

	try {
	  var testKey = '__storejs__';
	  localStorage.setItem(testKey, testKey);
	  if (localStorage.getItem(testKey) != testKey) {
	    throw new Error();
	  }
	  localStorage.removeItem(testKey);
	} catch (e) {
	  localStorage = __webpack_require__(23);
	}

	module.exports = localStorage;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	(function (root) {
	  var localStorageMemory = {};
	  var cache = {};

	  /**
	   * number of stored items.
	   */
	  localStorageMemory.length = 0;

	  /**
	   * returns item for passed key, or null
	   *
	   * @para {String} key
	   *       name of item to be returned
	   * @returns {String|null}
	   */
	  localStorageMemory.getItem = function (key) {
	    return cache[key] || null;
	  };

	  /**
	   * sets item for key to passed value, as String
	   *
	   * @para {String} key
	   *       name of item to be set
	   * @para {String} value
	   *       value, will always be turned into a String
	   * @returns {undefined}
	   */
	  localStorageMemory.setItem = function (key, value) {
	    if (typeof value === 'undefined') {
	      localStorageMemory.removeItem(key);
	    } else {
	      if (!cache.hasOwnProperty(key)) {
	        localStorageMemory.length++;
	      }

	      cache[key] = '' + value;
	    }
	  };

	  /**
	   * removes item for passed key
	   *
	   * @para {String} key
	   *       name of item to be removed
	   * @returns {undefined}
	   */
	  localStorageMemory.removeItem = function (key) {
	    if (cache.hasOwnProperty(key)) {
	      delete cache[key];
	      localStorageMemory.length--;
	    }
	  };

	  /**
	   * returns name of key at passed index
	   *
	   * @para {Number} index
	   *       Position for key to be returned (starts at 0)
	   * @returns {String|null}
	   */
	  localStorageMemory.key = function (index) {
	    return Object.keys(cache)[index] || null;
	  };

	  /**
	   * removes all stored items and sets length to 0
	   *
	   * @returns {undefined}
	   */
	  localStorageMemory.clear = function () {
	    cache = {};
	    localStorageMemory.length = 0;
	  };

	  if (true) {
	    module.exports = localStorageMemory;
	  } else {
	    root.localStorageMemory = localStorageMemory;
	  }
	})(undefined);

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _ = __webpack_require__(18);

	/*global _: false, $: false, localStorage: false, process: true,
	  XMLHttpRequest: false, XDomainRequest: false, exports: false,
	  require: false */
	module.exports = function (AV) {

	  // 挂载一些配置
	  AV._config = AV._config || {};
	  _.extend(AV._config, {
	    cnApiUrl: 'https://api.leancloud.cn',
	    usApiUrl: 'https://us-api.leancloud.cn'
	  });
	  /**
	   * Contains all AV API classes and functions.
	   * @name AV
	   * @namespace
	   *
	   * Contains all AV API classes and functions.
	   */

	  // If jQuery or Zepto has been included, grab a reference to it.
	  if (typeof $ !== "undefined") {
	    AV.$ = $;
	  }

	  // Helpers
	  // -------

	  // Shared empty constructor function to aid in prototype-chain creation.
	  var EmptyConstructor = function EmptyConstructor() {};

	  // Helper function to correctly set up the prototype chain, for subclasses.
	  // Similar to `goog.inherits`, but uses a hash of prototype properties and
	  // class properties to be extended.
	  var inherits = function inherits(parent, protoProps, staticProps) {
	    var child;

	    // The constructor function for the new subclass is either defined by you
	    // (the "constructor" property in your `extend` definition), or defaulted
	    // by us to simply call the parent's constructor.
	    if (protoProps && protoProps.hasOwnProperty('constructor')) {
	      child = protoProps.constructor;
	    } else {
	      /** @ignore */
	      child = function () {
	        parent.apply(this, arguments);
	      };
	    }

	    // Inherit class (static) properties from parent.
	    AV._.extend(child, parent);

	    // Set the prototype chain to inherit from `parent`, without calling
	    // `parent`'s constructor function.
	    EmptyConstructor.prototype = parent.prototype;
	    child.prototype = new EmptyConstructor();

	    // Add prototype properties (instance properties) to the subclass,
	    // if supplied.
	    if (protoProps) {
	      AV._.extend(child.prototype, protoProps);
	    }

	    // Add static properties to the constructor function, if supplied.
	    if (staticProps) {
	      AV._.extend(child, staticProps);
	    }

	    // Correctly set child's `prototype.constructor`.
	    child.prototype.constructor = child;

	    // Set a convenience property in case the parent's prototype is
	    // needed later.
	    child.__super__ = parent.prototype;

	    return child;
	  };

	  // Set the server for AV to talk to.
	  AV.serverURL = "https://api.leancloud.cn";

	  // Check whether we are running in Node.js.
	  if (typeof process !== "undefined" && process.versions && process.versions.node) {
	    AV._isNode = true;
	  }

	  /**
	   * Call this method first to set up your authentication tokens for AV.
	   * You can get your keys from the Data Browser on avoscloud.com.
	   * @param {String} applicationId Your AV Application ID.
	   * @param {String} applicationKey Your AV JavaScript Key.
	   * @param {String} masterKey (optional) Your AVOSCloud Master Key. (Node.js only!).
	   */
	  AV.initialize = function (applicationId, applicationKey, masterKey) {
	    if (masterKey) {
	      throw new Error("AV.initialize() was passed a Master Key, which is only " + "allowed from within Node.js.");
	    }
	    AV._initialize(applicationId, applicationKey, masterKey);
	  };

	  /**
	   * Call this method first to set up authentication tokens for AV.
	   * This method is for AV's own private use.
	   * @param {String} applicationId Your AV Application ID.
	   * @param {String} applicationKey Your AV Application Key
	   */
	  AV._initialize = function (applicationId, applicationKey, masterKey) {
	    if (AV.applicationId !== undefined && applicationId !== AV.applicationId && applicationKey !== AV.applicationKey && masterKey !== AV.masterKey) {
	      console.warn('AVOSCloud SDK is already initialized, please don\'t reinitialize it.');
	    }
	    AV.applicationId = applicationId;
	    AV.applicationKey = applicationKey;
	    AV.masterKey = masterKey;
	    AV._useMasterKey = false;
	  };

	  /**
	   * Call this method to set production environment variable.
	   * @param {Boolean} production True is production environment,and
	   *  it's true by default.
	   */
	  AV.setProduction = function (production) {
	    if (!AV._isNullOrUndefined(production)) {
	      //make sure it's a number
	      production = production ? 1 : 0;
	    }
	    //default is 1
	    AV.applicationProduction = AV._isNullOrUndefined(production) ? 1 : production;
	  };

	  // If we're running in node.js, allow using the master key.
	  if (AV._isNode) {
	    AV.initialize = AV._initialize;

	    AV.Cloud = AV.Cloud || {};
	    /**
	     * Switches the AVOSCloud SDK to using the Master key.  The Master key grants
	     * priveleged access to the data in AVOSCloud and can be used to bypass ACLs and
	     * other restrictions that are applied to the client SDKs.
	     * <p><strong><em>Available in Cloud Code and Node.js only.</em></strong>
	     * </p>
	     */
	    AV.Cloud.useMasterKey = function () {
	      AV._useMasterKey = true;
	    };
	  }

	  /**
	   *Use china avoscloud API service:https://cn.avoscloud.com
	   */
	  AV.useAVCloudCN = function () {
	    AV.serverURL = AV._config.cnApiUrl;
	  };

	  /**
	   *Use USA avoscloud API service:https://us.avoscloud.com
	   */
	  AV.useAVCloudUS = function () {
	    AV.serverURL = AV._config.usApiUrl;
	  };

	  /**
	   * Returns prefix for localStorage keys used by this instance of AV.
	   * @param {String} path The relative suffix to append to it.
	   *     null or undefined is treated as the empty string.
	   * @return {String} The full key name.
	   */
	  AV._getAVPath = function (path) {
	    if (!AV.applicationId) {
	      throw "You need to call AV.initialize before using AV.";
	    }
	    if (!path) {
	      path = "";
	    }
	    if (!AV._.isString(path)) {
	      throw "Tried to get a localStorage path that wasn't a String.";
	    }
	    if (path[0] === "/") {
	      path = path.substring(1);
	    }
	    return "AV/" + AV.applicationId + "/" + path;
	  };

	  /**
	   * Returns the unique string for this app on this machine.
	   * Gets reset when localStorage is cleared.
	   */
	  AV._installationId = null;
	  AV._getInstallationId = function () {
	    // See if it's cached in RAM.
	    if (AV._installationId) {
	      return AV._installationId;
	    }

	    // Try to get it from localStorage.
	    var path = AV._getAVPath("installationId");
	    AV._installationId = AV.localStorage.getItem(path);

	    if (!AV._installationId || AV._installationId === "") {
	      // It wasn't in localStorage, so create a new one.
	      var hexOctet = function hexOctet() {
	        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	      };
	      AV._installationId = hexOctet() + hexOctet() + "-" + hexOctet() + "-" + hexOctet() + "-" + hexOctet() + "-" + hexOctet() + hexOctet() + hexOctet();
	      AV.localStorage.setItem(path, AV._installationId);
	    }

	    return AV._installationId;
	  };

	  AV._parseDate = function (iso8601) {
	    var regexp = new RegExp("^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})" + "T" + "([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})" + "(.([0-9]+))?" + "Z$");
	    var match = regexp.exec(iso8601);
	    if (!match) {
	      return null;
	    }

	    var year = match[1] || 0;
	    var month = (match[2] || 1) - 1;
	    var day = match[3] || 0;
	    var hour = match[4] || 0;
	    var minute = match[5] || 0;
	    var second = match[6] || 0;
	    var milli = match[8] || 0;

	    return new Date(Date.UTC(year, month, day, hour, minute, second, milli));
	  };

	  AV._ajaxIE8 = function (method, url, data) {
	    var promise = new AV.Promise();
	    var xdr = new XDomainRequest();
	    xdr.onload = function () {
	      var response;
	      try {
	        response = JSON.parse(xdr.responseText);
	      } catch (e) {
	        promise.reject(e);
	      }
	      if (response) {
	        promise.resolve(response);
	      }
	    };
	    xdr.onerror = xdr.ontimeout = function () {
	      // Let's fake a real error message.
	      var fakeResponse = {
	        responseText: JSON.stringify({
	          code: AV.Error.X_DOMAIN_REQUEST,
	          error: "IE's XDomainRequest does not supply error info."
	        })
	      };
	      promise.reject(xdr);
	    };
	    xdr.onprogress = function () {};
	    xdr.open(method, url);
	    xdr.send(data);
	    return promise;
	  };

	  AV._useXDomainRequest = function () {
	    if (typeof XDomainRequest !== "undefined") {
	      // We're in IE 8+.
	      if ('withCredentials' in new XMLHttpRequest()) {
	        // We're in IE 10+.
	        return false;
	      }
	      return true;
	    }
	    return false;
	  };

	  AV._ajax = function (method, url, data, success, error) {
	    var options = {
	      success: success,
	      error: error
	    };

	    if (AV._useXDomainRequest()) {
	      return AV._ajaxIE8(method, url, data)._thenRunCallbacks(options);
	    }

	    var promise = new AV.Promise();
	    var handled = false;

	    var xhr = new AV.XMLHttpRequest();
	    xhr.onreadystatechange = function () {
	      if (xhr.readyState === 4) {
	        if (handled) {
	          return;
	        }
	        handled = true;

	        if (xhr.status >= 200 && xhr.status < 300) {
	          var response;
	          try {
	            response = JSON.parse(xhr.responseText);
	          } catch (e) {
	            promise.reject(e);
	          }
	          if (response) {
	            promise.resolve(response, xhr.status, xhr);
	          }
	        } else {
	          promise.reject(xhr);
	        }
	      }
	    };
	    xhr.open(method, url, true);
	    xhr.setRequestHeader("Content-Type", "text/plain"); // avoid pre-flight.
	    if (AV._isNode) {
	      // Add a special user agent just for request from node.js.
	      xhr.setRequestHeader("User-Agent", "AV/" + AV.VERSION + " (NodeJS " + process.versions.node + ")");
	    }
	    xhr.send(data);
	    return promise._thenRunCallbacks(options);
	  };

	  // A self-propagating extend function.
	  AV._extend = function (protoProps, classProps) {
	    var child = inherits(this, protoProps, classProps);
	    child.extend = this.extend;
	    return child;
	  };

	  /**
	   * route is classes, users, login, etc.
	   * objectId is null if there is no associated objectId.
	   * method is the http method for the REST API.
	   * dataObject is the payload as an object, or null if there is none.
	   * @ignore
	   */
	  AV._request = function (route, className, objectId, method, dataObject) {
	    if (!AV.applicationId) {
	      throw "You must specify your applicationId using AV.initialize";
	    }

	    if (!AV.applicationKey && !AV.masterKey) {
	      throw "You must specify a key using AV.initialize";
	    }

	    if (route !== "batch" && route !== "classes" && route !== "files" && route !== "date" && route !== "functions" && route !== "login" && route !== "push" && route !== "search/select" && route !== "requestPasswordReset" && route !== "requestEmailVerify" && route !== "requestPasswordResetBySmsCode" && route !== "resetPasswordBySmsCode" && route !== "requestMobilePhoneVerify" && route !== "requestLoginSmsCode" && route !== "verifyMobilePhone" && route !== "requestSmsCode" && route !== "verifySmsCode" && route !== "users" && route !== "usersByMobilePhone" && route !== "cloudQuery" && route !== "qiniu" && route !== "statuses" && route !== "bigquery" && route !== 'search/select' && route !== 'subscribe/statuses/count' && route !== 'subscribe/statuses' && !/users\/[^\/]+\/updatePassword/.test(route) && !/users\/[^\/]+\/friendship\/[^\/]+/.test(route)) {
	      throw "Bad route: '" + route + "'.";
	    }

	    var url = AV.serverURL;
	    if (url.charAt(url.length - 1) !== "/") {
	      url += "/";
	    }
	    url += "1.1/" + route;
	    if (className) {
	      url += "/" + className;
	    }
	    if (objectId) {
	      url += "/" + objectId;
	    }
	    if ((route === 'users' || route === 'classes') && dataObject) {
	      url += '?';
	      if (dataObject._fetchWhenSave) {
	        delete dataObject._fetchWhenSave;
	        url += '&new=true';
	      }
	      if (dataObject._where) {
	        url += '&where=' + encodeURIComponent(JSON.stringify(dataObject._where));
	        delete dataObject._where;
	      }
	    }

	    dataObject = AV._.clone(dataObject || {});
	    if (method !== "POST") {
	      dataObject._method = method;
	      method = "POST";
	    }

	    dataObject._ApplicationId = AV.applicationId;
	    dataObject._ApplicationKey = AV.applicationKey;
	    if (!AV._isNullOrUndefined(AV.applicationProduction)) {
	      dataObject._ApplicationProduction = AV.applicationProduction;
	    }
	    if (AV._useMasterKey) dataObject._MasterKey = AV.masterKey;
	    dataObject._ClientVersion = AV.VERSION;
	    dataObject._InstallationId = AV._getInstallationId();
	    // Pass the session token on every request.
	    var currentUser = AV.User.current();
	    if (currentUser && currentUser._sessionToken) {
	      dataObject._SessionToken = currentUser._sessionToken;
	    }
	    var data = JSON.stringify(dataObject);

	    return AV._ajax(method, url, data).then(null, function (response) {
	      // Transform the error into an instance of AV.Error by trying to parse
	      // the error string as JSON.
	      var error;
	      if (response && response.responseText) {
	        try {
	          var errorJSON = JSON.parse(response.responseText);
	          if (errorJSON) {
	            error = new AV.Error(errorJSON.code, errorJSON.error);
	          }
	        } catch (e) {
	          // If we fail to parse the error text, that's okay.
	        }
	      }
	      error = error || new AV.Error(-1, response.responseText);
	      // By explicitly returning a rejected Promise, this will work with
	      // either jQuery or Promises/A semantics.
	      return AV.Promise.error(error);
	    });
	  };

	  // Helper function to get a value from a Backbone object as a property
	  // or as a function.
	  AV._getValue = function (object, prop) {
	    if (!(object && object[prop])) {
	      return null;
	    }
	    return AV._.isFunction(object[prop]) ? object[prop]() : object[prop];
	  };

	  /**
	   * Converts a value in a AV Object into the appropriate representation.
	   * This is the JS equivalent of Java's AV.maybeReferenceAndEncode(Object)
	   * if seenObjects is falsey. Otherwise any AV.Objects not in
	   * seenObjects will be fully embedded rather than encoded
	   * as a pointer.  This array will be used to prevent going into an infinite
	   * loop because we have circular references.  If <seenObjects>
	   * is set, then none of the AV Objects that are serialized can be dirty.
	   */
	  AV._encode = function (value, seenObjects, disallowObjects) {
	    var _ = AV._;
	    if (value instanceof AV.Object) {
	      if (disallowObjects) {
	        throw "AV.Objects not allowed here";
	      }
	      if (!seenObjects || _.include(seenObjects, value) || !value._hasData) {
	        return value._toPointer();
	      }
	      if (!value.dirty()) {
	        seenObjects = seenObjects.concat(value);
	        return AV._encode(value._toFullJSON(seenObjects), seenObjects, disallowObjects);
	      }
	      throw "Tried to save an object with a pointer to a new, unsaved object.";
	    }
	    if (value instanceof AV.ACL) {
	      return value.toJSON();
	    }
	    if (_.isDate(value)) {
	      return { "__type": "Date", "iso": value.toJSON() };
	    }
	    if (value instanceof AV.GeoPoint) {
	      return value.toJSON();
	    }
	    if (_.isArray(value)) {
	      return _.map(value, function (x) {
	        return AV._encode(x, seenObjects, disallowObjects);
	      });
	    }
	    if (_.isRegExp(value)) {
	      return value.source;
	    }
	    if (value instanceof AV.Relation) {
	      return value.toJSON();
	    }
	    if (value instanceof AV.Op) {
	      return value.toJSON();
	    }
	    if (value instanceof AV.File) {
	      if (!value.url() && !value.id) {
	        throw "Tried to save an object containing an unsaved file.";
	      }
	      return {
	        __type: "File",
	        id: value.id,
	        name: value.name(),
	        url: value.url()
	      };
	    }
	    if (_.isObject(value)) {
	      var output = {};
	      AV._objectEach(value, function (v, k) {
	        output[k] = AV._encode(v, seenObjects, disallowObjects);
	      });
	      return output;
	    }
	    return value;
	  };

	  /**
	   * The inverse function of AV._encode.
	   * TODO: make decode not mutate value.
	   */
	  AV._decode = function (key, value) {
	    var _ = AV._;
	    if (!_.isObject(value)) {
	      return value;
	    }
	    if (_.isArray(value)) {
	      AV._arrayEach(value, function (v, k) {
	        value[k] = AV._decode(k, v);
	      });
	      return value;
	    }
	    if (value instanceof AV.Object) {
	      return value;
	    }
	    if (value instanceof AV.File) {
	      return value;
	    }
	    if (value instanceof AV.Op) {
	      return value;
	    }
	    if (value.__op) {
	      return AV.Op._decode(value);
	    }
	    if (value.__type === "Pointer") {
	      var className = value.className;
	      var pointer = AV.Object._create(className);
	      if (Object.keys(value).length > 3) {
	        delete value.__type;
	        delete value.className;
	        pointer._finishFetch(value, true);
	      } else {
	        pointer._finishFetch({ objectId: value.objectId }, false);
	      }
	      return pointer;
	    }
	    if (value.__type === "Object") {
	      // It's an Object included in a query result.
	      var className = value.className;
	      delete value.__type;
	      delete value.className;
	      var object = AV.Object._create(className);
	      object._finishFetch(value, true);
	      return object;
	    }
	    if (value.__type === "Date") {
	      return AV._parseDate(value.iso);
	    }
	    if (value.__type === "GeoPoint") {
	      return new AV.GeoPoint({
	        latitude: value.latitude,
	        longitude: value.longitude
	      });
	    }
	    if (key === "ACL") {
	      if (value instanceof AV.ACL) {
	        return value;
	      }
	      return new AV.ACL(value);
	    }
	    if (value.__type === "Relation") {
	      var relation = new AV.Relation(null, key);
	      relation.targetClassName = value.className;
	      return relation;
	    }
	    if (value.__type === "File") {
	      var file = new AV.File(value.name);
	      file._metaData = value.metaData || {};
	      file._url = value.url;
	      file.id = value.objectId;
	      return file;
	    }
	    AV._objectEach(value, function (v, k) {
	      value[k] = AV._decode(k, v);
	    });
	    return value;
	  };

	  AV._arrayEach = AV._.each;

	  /**
	   * Does a deep traversal of every item in object, calling func on every one.
	   * @param {Object} object The object or array to traverse deeply.
	   * @param {Function} func The function to call for every item. It will
	   *     be passed the item as an argument. If it returns a truthy value, that
	   *     value will replace the item in its parent container.
	   * @returns {} the result of calling func on the top-level object itself.
	   */
	  AV._traverse = function (object, func, seen) {
	    if (object instanceof AV.Object) {
	      seen = seen || [];
	      if (AV._.indexOf(seen, object) >= 0) {
	        // We've already visited this object in this call.
	        return;
	      }
	      seen.push(object);
	      AV._traverse(object.attributes, func, seen);
	      return func(object);
	    }
	    if (object instanceof AV.Relation || object instanceof AV.File) {
	      // Nothing needs to be done, but we don't want to recurse into the
	      // object's parent infinitely, so we catch this case.
	      return func(object);
	    }
	    if (AV._.isArray(object)) {
	      AV._.each(object, function (child, index) {
	        var newChild = AV._traverse(child, func, seen);
	        if (newChild) {
	          object[index] = newChild;
	        }
	      });
	      return func(object);
	    }
	    if (AV._.isObject(object)) {
	      AV._each(object, function (child, key) {
	        var newChild = AV._traverse(child, func, seen);
	        if (newChild) {
	          object[key] = newChild;
	        }
	      });
	      return func(object);
	    }
	    return func(object);
	  };

	  /**
	   * This is like _.each, except:
	   * * it doesn't work for so-called array-like objects,
	   * * it does work for dictionaries with a "length" attribute.
	   */
	  AV._objectEach = AV._each = function (obj, callback) {
	    var _ = AV._;
	    if (_.isObject(obj)) {
	      _.each(_.keys(obj), function (key) {
	        callback(obj[key], key);
	      });
	    } else {
	      _.each(obj, callback);
	    }
	  };

	  // Helper function to check null or undefined.
	  AV._isNullOrUndefined = function (x) {
	    return AV._.isNull(x) || AV._.isUndefined(x);
	  };
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(18);

	module.exports = function (AV) {

	  /**
	   * Constructs a new AV.Error object with the given code and message.
	   * @param {Number} code An error code constant from <code>AV.Error</code>.
	   * @param {String} message A detailed description of the error.
	   * @class
	   *
	   * <p>Class used for all objects passed to error callbacks.</p>
	   */
	  AV.Error = function (code, message) {
	    this.code = code;
	    this.message = message;
	  };

	  _.extend(AV.Error, /** @lends AV.Error */{
	    /**
	     * Error code indicating some error other than those enumerated here.
	     * @constant
	     */
	    OTHER_CAUSE: -1,

	    /**
	     * Error code indicating that something has gone wrong with the server.
	     * If you get this error code, it is AV's fault. Contact us at
	     * https://avoscloud.com/help
	     * @constant
	     */
	    INTERNAL_SERVER_ERROR: 1,

	    /**
	     * Error code indicating the connection to the AV servers failed.
	     * @constant
	     */
	    CONNECTION_FAILED: 100,

	    /**
	     * Error code indicating the specified object doesn't exist.
	     * @constant
	     */
	    OBJECT_NOT_FOUND: 101,

	    /**
	     * Error code indicating you tried to query with a datatype that doesn't
	     * support it, like exact matching an array or object.
	     * @constant
	     */
	    INVALID_QUERY: 102,

	    /**
	     * Error code indicating a missing or invalid classname. Classnames are
	     * case-sensitive. They must start with a letter, and a-zA-Z0-9_ are the
	     * only valid characters.
	     * @constant
	     */
	    INVALID_CLASS_NAME: 103,

	    /**
	     * Error code indicating an unspecified object id.
	     * @constant
	     */
	    MISSING_OBJECT_ID: 104,

	    /**
	     * Error code indicating an invalid key name. Keys are case-sensitive. They
	     * must start with a letter, and a-zA-Z0-9_ are the only valid characters.
	     * @constant
	     */
	    INVALID_KEY_NAME: 105,

	    /**
	     * Error code indicating a malformed pointer. You should not see this unless
	     * you have been mucking about changing internal AV code.
	     * @constant
	     */
	    INVALID_POINTER: 106,

	    /**
	     * Error code indicating that badly formed JSON was received upstream. This
	     * either indicates you have done something unusual with modifying how
	     * things encode to JSON, or the network is failing badly.
	     * @constant
	     */
	    INVALID_JSON: 107,

	    /**
	     * Error code indicating that the feature you tried to access is only
	     * available internally for testing purposes.
	     * @constant
	     */
	    COMMAND_UNAVAILABLE: 108,

	    /**
	     * You must call AV.initialize before using the AV library.
	     * @constant
	     */
	    NOT_INITIALIZED: 109,

	    /**
	     * Error code indicating that a field was set to an inconsistent type.
	     * @constant
	     */
	    INCORRECT_TYPE: 111,

	    /**
	     * Error code indicating an invalid channel name. A channel name is either
	     * an empty string (the broadcast channel) or contains only a-zA-Z0-9_
	     * characters and starts with a letter.
	     * @constant
	     */
	    INVALID_CHANNEL_NAME: 112,

	    /**
	     * Error code indicating that push is misconfigured.
	     * @constant
	     */
	    PUSH_MISCONFIGURED: 115,

	    /**
	     * Error code indicating that the object is too large.
	     * @constant
	     */
	    OBJECT_TOO_LARGE: 116,

	    /**
	     * Error code indicating that the operation isn't allowed for clients.
	     * @constant
	     */
	    OPERATION_FORBIDDEN: 119,

	    /**
	     * Error code indicating the result was not found in the cache.
	     * @constant
	     */
	    CACHE_MISS: 120,

	    /**
	     * Error code indicating that an invalid key was used in a nested
	     * JSONObject.
	     * @constant
	     */
	    INVALID_NESTED_KEY: 121,

	    /**
	     * Error code indicating that an invalid filename was used for AVFile.
	     * A valid file name contains only a-zA-Z0-9_. characters and is between 1
	     * and 128 characters.
	     * @constant
	     */
	    INVALID_FILE_NAME: 122,

	    /**
	     * Error code indicating an invalid ACL was provided.
	     * @constant
	     */
	    INVALID_ACL: 123,

	    /**
	     * Error code indicating that the request timed out on the server. Typically
	     * this indicates that the request is too expensive to run.
	     * @constant
	     */
	    TIMEOUT: 124,

	    /**
	     * Error code indicating that the email address was invalid.
	     * @constant
	     */
	    INVALID_EMAIL_ADDRESS: 125,

	    /**
	     * Error code indicating a missing content type.
	     * @constant
	     */
	    MISSING_CONTENT_TYPE: 126,

	    /**
	     * Error code indicating a missing content length.
	     * @constant
	     */
	    MISSING_CONTENT_LENGTH: 127,

	    /**
	     * Error code indicating an invalid content length.
	     * @constant
	     */
	    INVALID_CONTENT_LENGTH: 128,

	    /**
	     * Error code indicating a file that was too large.
	     * @constant
	     */
	    FILE_TOO_LARGE: 129,

	    /**
	     * Error code indicating an error saving a file.
	     * @constant
	     */
	    FILE_SAVE_ERROR: 130,

	    /**
	     * Error code indicating an error deleting a file.
	     * @constant
	     */
	    FILE_DELETE_ERROR: 153,

	    /**
	     * Error code indicating that a unique field was given a value that is
	     * already taken.
	     * @constant
	     */
	    DUPLICATE_VALUE: 137,

	    /**
	     * Error code indicating that a role's name is invalid.
	     * @constant
	     */
	    INVALID_ROLE_NAME: 139,

	    /**
	     * Error code indicating that an application quota was exceeded.  Upgrade to
	     * resolve.
	     * @constant
	     */
	    EXCEEDED_QUOTA: 140,

	    /**
	     * Error code indicating that a Cloud Code script failed.
	     * @constant
	     */
	    SCRIPT_FAILED: 141,

	    /**
	     * Error code indicating that a Cloud Code validation failed.
	     * @constant
	     */
	    VALIDATION_ERROR: 142,

	    /**
	     * Error code indicating that invalid image data was provided.
	     * @constant
	     */
	    INVALID_IMAGE_DATA: 150,

	    /**
	     * Error code indicating an unsaved file.
	     * @constant
	     */
	    UNSAVED_FILE_ERROR: 151,

	    /**
	     * Error code indicating an invalid push time.
	     */
	    INVALID_PUSH_TIME_ERROR: 152,

	    /**
	     * Error code indicating that the username is missing or empty.
	     * @constant
	     */
	    USERNAME_MISSING: 200,

	    /**
	     * Error code indicating that the password is missing or empty.
	     * @constant
	     */
	    PASSWORD_MISSING: 201,

	    /**
	     * Error code indicating that the username has already been taken.
	     * @constant
	     */
	    USERNAME_TAKEN: 202,

	    /**
	     * Error code indicating that the email has already been taken.
	     * @constant
	     */
	    EMAIL_TAKEN: 203,

	    /**
	     * Error code indicating that the email is missing, but must be specified.
	     * @constant
	     */
	    EMAIL_MISSING: 204,

	    /**
	     * Error code indicating that a user with the specified email was not found.
	     * @constant
	     */
	    EMAIL_NOT_FOUND: 205,

	    /**
	     * Error code indicating that a user object without a valid session could
	     * not be altered.
	     * @constant
	     */
	    SESSION_MISSING: 206,

	    /**
	     * Error code indicating that a user can only be created through signup.
	     * @constant
	     */
	    MUST_CREATE_USER_THROUGH_SIGNUP: 207,

	    /**
	     * Error code indicating that an an account being linked is already linked
	     * to another user.
	     * @constant
	     */
	    ACCOUNT_ALREADY_LINKED: 208,

	    /**
	     * Error code indicating that a user cannot be linked to an account because
	     * that account's id could not be found.
	     * @constant
	     */
	    LINKED_ID_MISSING: 250,

	    /**
	     * Error code indicating that a user with a linked (e.g. Facebook) account
	     * has an invalid session.
	     * @constant
	     */
	    INVALID_LINKED_SESSION: 251,

	    /**
	     * Error code indicating that a service being linked (e.g. Facebook or
	     * Twitter) is unsupported.
	     * @constant
	     */
	    UNSUPPORTED_SERVICE: 252,
	    /**
	     * Error code indicating a real error code is unavailable because
	     * we had to use an XDomainRequest object to allow CORS requests in
	     * Internet Explorer, which strips the body from HTTP responses that have
	     * a non-2XX status code.
	     * @constant
	     */
	    X_DOMAIN_REQUEST: 602
	  });
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	/*global _: false */
	"use strict";

	module.exports = function (AV) {
	  var eventSplitter = /\s+/;
	  var slice = Array.prototype.slice;

	  /**
	   * @class
	   *
	   * <p>AV.Events is a fork of Backbone's Events module, provided for your
	   * convenience.</p>
	   *
	   * <p>A module that can be mixed in to any object in order to provide
	   * it with custom events. You may bind callback functions to an event
	   * with `on`, or remove these functions with `off`.
	   * Triggering an event fires all callbacks in the order that `on` was
	   * called.
	   *
	   * <pre>
	   *     var object = {};
	   *     _.extend(object, AV.Events);
	   *     object.on('expand', function(){ alert('expanded'); });
	   *     object.trigger('expand');</pre></p>
	   *
	   * <p>For more information, see the
	   * <a href="http://documentcloud.github.com/backbone/#Events">Backbone
	   * documentation</a>.</p>
	   */
	  AV.Events = {
	    /**
	     * Bind one or more space separated events, `events`, to a `callback`
	     * function. Passing `"all"` will bind the callback to all events fired.
	     */
	    on: function on(events, callback, context) {

	      var calls, event, node, tail, list;
	      if (!callback) {
	        return this;
	      }
	      events = events.split(eventSplitter);
	      calls = this._callbacks || (this._callbacks = {});

	      // Create an immutable callback list, allowing traversal during
	      // modification.  The tail is an empty object that will always be used
	      // as the next node.
	      event = events.shift();
	      while (event) {
	        list = calls[event];
	        node = list ? list.tail : {};
	        node.next = tail = {};
	        node.context = context;
	        node.callback = callback;
	        calls[event] = { tail: tail, next: list ? list.next : node };
	        event = events.shift();
	      }

	      return this;
	    },

	    /**
	     * Remove one or many callbacks. If `context` is null, removes all callbacks
	     * with that function. If `callback` is null, removes all callbacks for the
	     * event. If `events` is null, removes all bound callbacks for all events.
	     */
	    off: function off(events, callback, context) {
	      var event, calls, node, tail, cb, ctx;

	      // No events, or removing *all* events.
	      if (!(calls = this._callbacks)) {
	        return;
	      }
	      if (!(events || callback || context)) {
	        delete this._callbacks;
	        return this;
	      }

	      // Loop through the listed events and contexts, splicing them out of the
	      // linked list of callbacks if appropriate.
	      events = events ? events.split(eventSplitter) : _.keys(calls);
	      event = events.shift();
	      while (event) {
	        node = calls[event];
	        delete calls[event];
	        if (!node || !(callback || context)) {
	          continue;
	        }
	        // Create a new list, omitting the indicated callbacks.
	        tail = node.tail;
	        node = node.next;
	        while (node !== tail) {
	          cb = node.callback;
	          ctx = node.context;
	          if (callback && cb !== callback || context && ctx !== context) {
	            this.on(event, cb, ctx);
	          }
	          node = node.next;
	        }
	        event = events.shift();
	      }

	      return this;
	    },

	    /**
	     * Trigger one or many events, firing all bound callbacks. Callbacks are
	     * passed the same arguments as `trigger` is, apart from the event name
	     * (unless you're listening on `"all"`, which will cause your callback to
	     * receive the true name of the event as the first argument).
	     */
	    trigger: function trigger(events) {
	      var event, node, calls, tail, args, all, rest;
	      if (!(calls = this._callbacks)) {
	        return this;
	      }
	      all = calls.all;
	      events = events.split(eventSplitter);
	      rest = slice.call(arguments, 1);

	      // For each event, walk through the linked list of callbacks twice,
	      // first to trigger the event, then to trigger any `"all"` callbacks.
	      event = events.shift();
	      while (event) {
	        node = calls[event];
	        if (node) {
	          tail = node.tail;
	          while ((node = node.next) !== tail) {
	            node.callback.apply(node.context || this, rest);
	          }
	        }
	        node = all;
	        if (node) {
	          tail = node.tail;
	          args = [event].concat(rest);
	          while ((node = node.next) !== tail) {
	            node.callback.apply(node.context || this, args);
	          }
	        }
	        event = events.shift();
	      }

	      return this;
	    }
	  };

	  /**
	   * @function
	   */
	  AV.Events.bind = AV.Events.on;

	  /**
	   * @function
	   */
	  AV.Events.unbind = AV.Events.off;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _ = __webpack_require__(18);

	/*global navigator: false */
	module.exports = function (AV) {
	  /**
	   * Creates a new GeoPoint with any of the following forms:<br>
	   *   <pre>
	   *   new GeoPoint(otherGeoPoint)
	   *   new GeoPoint(30, 30)
	   *   new GeoPoint([30, 30])
	   *   new GeoPoint({latitude: 30, longitude: 30})
	   *   new GeoPoint()  // defaults to (0, 0)
	   *   </pre>
	   * @class
	   *
	   * <p>Represents a latitude / longitude point that may be associated
	   * with a key in a AVObject or used as a reference point for geo queries.
	   * This allows proximity-based queries on the key.</p>
	   *
	   * <p>Only one key in a class may contain a GeoPoint.</p>
	   *
	   * <p>Example:<pre>
	   *   var point = new AV.GeoPoint(30.0, -20.0);
	   *   var object = new AV.Object("PlaceObject");
	   *   object.set("location", point);
	   *   object.save();</pre></p>
	   */
	  AV.GeoPoint = function (arg1, arg2) {
	    if (_.isArray(arg1)) {
	      AV.GeoPoint._validate(arg1[0], arg1[1]);
	      this.latitude = arg1[0];
	      this.longitude = arg1[1];
	    } else if (_.isObject(arg1)) {
	      AV.GeoPoint._validate(arg1.latitude, arg1.longitude);
	      this.latitude = arg1.latitude;
	      this.longitude = arg1.longitude;
	    } else if (_.isNumber(arg1) && _.isNumber(arg2)) {
	      AV.GeoPoint._validate(arg1, arg2);
	      this.latitude = arg1;
	      this.longitude = arg2;
	    } else {
	      this.latitude = 0;
	      this.longitude = 0;
	    }

	    // Add properties so that anyone using Webkit or Mozilla will get an error
	    // if they try to set values that are out of bounds.
	    var self = this;
	    if (this.__defineGetter__ && this.__defineSetter__) {
	      // Use _latitude and _longitude to actually store the values, and add
	      // getters and setters for latitude and longitude.
	      this._latitude = this.latitude;
	      this._longitude = this.longitude;
	      this.__defineGetter__("latitude", function () {
	        return self._latitude;
	      });
	      this.__defineGetter__("longitude", function () {
	        return self._longitude;
	      });
	      this.__defineSetter__("latitude", function (val) {
	        AV.GeoPoint._validate(val, self.longitude);
	        self._latitude = val;
	      });
	      this.__defineSetter__("longitude", function (val) {
	        AV.GeoPoint._validate(self.latitude, val);
	        self._longitude = val;
	      });
	    }
	  };

	  /**
	   * @lends AV.GeoPoint.prototype
	   * @property {float} latitude North-south portion of the coordinate, in range
	   *   [-90, 90].  Throws an exception if set out of range in a modern browser.
	   * @property {float} longitude East-west portion of the coordinate, in range
	   *   [-180, 180].  Throws if set out of range in a modern browser.
	   */

	  /**
	   * Throws an exception if the given lat-long is out of bounds.
	   */
	  AV.GeoPoint._validate = function (latitude, longitude) {
	    if (latitude < -90.0) {
	      throw "AV.GeoPoint latitude " + latitude + " < -90.0.";
	    }
	    if (latitude > 90.0) {
	      throw "AV.GeoPoint latitude " + latitude + " > 90.0.";
	    }
	    if (longitude < -180.0) {
	      throw "AV.GeoPoint longitude " + longitude + " < -180.0.";
	    }
	    if (longitude > 180.0) {
	      throw "AV.GeoPoint longitude " + longitude + " > 180.0.";
	    }
	  };

	  /**
	   * Creates a GeoPoint with the user's current location, if available.
	   * Calls options.success with a new GeoPoint instance or calls options.error.
	   * @param {Object} options An object with success and error callbacks.
	   */
	  AV.GeoPoint.current = function (options) {
	    var promise = new AV.Promise();
	    navigator.geolocation.getCurrentPosition(function (location) {
	      promise.resolve(new AV.GeoPoint({
	        latitude: location.coords.latitude,
	        longitude: location.coords.longitude
	      }));
	    }, function (error) {
	      promise.reject(error);
	    });

	    return promise._thenRunCallbacks(options);
	  };

	  AV.GeoPoint.prototype = {
	    /**
	     * Returns a JSON representation of the GeoPoint, suitable for AV.
	     * @return {Object}
	     */
	    toJSON: function toJSON() {
	      AV.GeoPoint._validate(this.latitude, this.longitude);
	      return {
	        "__type": "GeoPoint",
	        latitude: this.latitude,
	        longitude: this.longitude
	      };
	    },

	    /**
	     * Returns the distance from this GeoPoint to another in radians.
	     * @param {AV.GeoPoint} point the other AV.GeoPoint.
	     * @return {Number}
	     */
	    radiansTo: function radiansTo(point) {
	      var d2r = Math.PI / 180.0;
	      var lat1rad = this.latitude * d2r;
	      var long1rad = this.longitude * d2r;
	      var lat2rad = point.latitude * d2r;
	      var long2rad = point.longitude * d2r;
	      var deltaLat = lat1rad - lat2rad;
	      var deltaLong = long1rad - long2rad;
	      var sinDeltaLatDiv2 = Math.sin(deltaLat / 2);
	      var sinDeltaLongDiv2 = Math.sin(deltaLong / 2);
	      // Square of half the straight line chord distance between both points.
	      var a = sinDeltaLatDiv2 * sinDeltaLatDiv2 + Math.cos(lat1rad) * Math.cos(lat2rad) * sinDeltaLongDiv2 * sinDeltaLongDiv2;
	      a = Math.min(1.0, a);
	      return 2 * Math.asin(Math.sqrt(a));
	    },

	    /**
	     * Returns the distance from this GeoPoint to another in kilometers.
	     * @param {AV.GeoPoint} point the other AV.GeoPoint.
	     * @return {Number}
	     */
	    kilometersTo: function kilometersTo(point) {
	      return this.radiansTo(point) * 6371.0;
	    },

	    /**
	     * Returns the distance from this GeoPoint to another in miles.
	     * @param {AV.GeoPoint} point the other AV.GeoPoint.
	     * @return {Number}
	     */
	    milesTo: function milesTo(point) {
	      return this.radiansTo(point) * 3958.8;
	    }
	  };
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var _ = __webpack_require__(18);

	/*global navigator: false */
	module.exports = function (AV) {
	  var PUBLIC_KEY = "*";

	  /**
	   * Creates a new ACL.
	   * If no argument is given, the ACL has no permissions for anyone.
	   * If the argument is a AV.User, the ACL will have read and write
	   *   permission for only that user.
	   * If the argument is any other JSON object, that object will be interpretted
	   *   as a serialized ACL created with toJSON().
	   * @see AV.Object#setACL
	   * @class
	   *
	   * <p>An ACL, or Access Control List can be added to any
	   * <code>AV.Object</code> to restrict access to only a subset of users
	   * of your application.</p>
	   */
	  AV.ACL = function (arg1) {
	    var self = this;
	    self.permissionsById = {};
	    if (_.isObject(arg1)) {
	      if (arg1 instanceof AV.User) {
	        self.setReadAccess(arg1, true);
	        self.setWriteAccess(arg1, true);
	      } else {
	        if (_.isFunction(arg1)) {
	          throw "AV.ACL() called with a function.  Did you forget ()?";
	        }
	        AV._objectEach(arg1, function (accessList, userId) {
	          if (!_.isString(userId)) {
	            throw "Tried to create an ACL with an invalid userId.";
	          }
	          self.permissionsById[userId] = {};
	          AV._objectEach(accessList, function (allowed, permission) {
	            if (permission !== "read" && permission !== "write") {
	              throw "Tried to create an ACL with an invalid permission type.";
	            }
	            if (!_.isBoolean(allowed)) {
	              throw "Tried to create an ACL with an invalid permission value.";
	            }
	            self.permissionsById[userId][permission] = allowed;
	          });
	        });
	      }
	    }
	  };

	  /**
	   * Returns a JSON-encoded version of the ACL.
	   * @return {Object}
	   */
	  AV.ACL.prototype.toJSON = function () {
	    return _.clone(this.permissionsById);
	  };

	  AV.ACL.prototype._setAccess = function (accessType, userId, allowed) {
	    if (userId instanceof AV.User) {
	      userId = userId.id;
	    } else if (userId instanceof AV.Role) {
	      userId = "role:" + userId.getName();
	    }
	    if (!_.isString(userId)) {
	      throw "userId must be a string.";
	    }
	    if (!_.isBoolean(allowed)) {
	      throw "allowed must be either true or false.";
	    }
	    var permissions = this.permissionsById[userId];
	    if (!permissions) {
	      if (!allowed) {
	        // The user already doesn't have this permission, so no action needed.
	        return;
	      } else {
	        permissions = {};
	        this.permissionsById[userId] = permissions;
	      }
	    }

	    if (allowed) {
	      this.permissionsById[userId][accessType] = true;
	    } else {
	      delete permissions[accessType];
	      if (_.isEmpty(permissions)) {
	        delete permissions[userId];
	      }
	    }
	  };

	  AV.ACL.prototype._getAccess = function (accessType, userId) {
	    if (userId instanceof AV.User) {
	      userId = userId.id;
	    } else if (userId instanceof AV.Role) {
	      userId = "role:" + userId.getName();
	    }
	    var permissions = this.permissionsById[userId];
	    if (!permissions) {
	      return false;
	    }
	    return permissions[accessType] ? true : false;
	  };

	  /**
	   * Set whether the given user is allowed to read this object.
	   * @param userId An instance of AV.User or its objectId.
	   * @param {Boolean} allowed Whether that user should have read access.
	   */
	  AV.ACL.prototype.setReadAccess = function (userId, allowed) {
	    this._setAccess("read", userId, allowed);
	  };

	  /**
	   * Get whether the given user id is *explicitly* allowed to read this object.
	   * Even if this returns false, the user may still be able to access it if
	   * getPublicReadAccess returns true or a role that the user belongs to has
	   * write access.
	   * @param userId An instance of AV.User or its objectId, or a AV.Role.
	   * @return {Boolean}
	   */
	  AV.ACL.prototype.getReadAccess = function (userId) {
	    return this._getAccess("read", userId);
	  };

	  /**
	   * Set whether the given user id is allowed to write this object.
	   * @param userId An instance of AV.User or its objectId, or a AV.Role..
	   * @param {Boolean} allowed Whether that user should have write access.
	   */
	  AV.ACL.prototype.setWriteAccess = function (userId, allowed) {
	    this._setAccess("write", userId, allowed);
	  };

	  /**
	   * Get whether the given user id is *explicitly* allowed to write this object.
	   * Even if this returns false, the user may still be able to write it if
	   * getPublicWriteAccess returns true or a role that the user belongs to has
	   * write access.
	   * @param userId An instance of AV.User or its objectId, or a AV.Role.
	   * @return {Boolean}
	   */
	  AV.ACL.prototype.getWriteAccess = function (userId) {
	    return this._getAccess("write", userId);
	  };

	  /**
	   * Set whether the public is allowed to read this object.
	   * @param {Boolean} allowed
	   */
	  AV.ACL.prototype.setPublicReadAccess = function (allowed) {
	    this.setReadAccess(PUBLIC_KEY, allowed);
	  };

	  /**
	   * Get whether the public is allowed to read this object.
	   * @return {Boolean}
	   */
	  AV.ACL.prototype.getPublicReadAccess = function () {
	    return this.getReadAccess(PUBLIC_KEY);
	  };

	  /**
	   * Set whether the public is allowed to write this object.
	   * @param {Boolean} allowed
	   */
	  AV.ACL.prototype.setPublicWriteAccess = function (allowed) {
	    this.setWriteAccess(PUBLIC_KEY, allowed);
	  };

	  /**
	   * Get whether the public is allowed to write this object.
	   * @return {Boolean}
	   */
	  AV.ACL.prototype.getPublicWriteAccess = function () {
	    return this.getWriteAccess(PUBLIC_KEY);
	  };

	  /**
	   * Get whether users belonging to the given role are allowed
	   * to read this object. Even if this returns false, the role may
	   * still be able to write it if a parent role has read access.
	   *
	   * @param role The name of the role, or a AV.Role object.
	   * @return {Boolean} true if the role has read access. false otherwise.
	   * @throws {String} If role is neither a AV.Role nor a String.
	   */
	  AV.ACL.prototype.getRoleReadAccess = function (role) {
	    if (role instanceof AV.Role) {
	      // Normalize to the String name
	      role = role.getName();
	    }
	    if (_.isString(role)) {
	      return this.getReadAccess("role:" + role);
	    }
	    throw "role must be a AV.Role or a String";
	  };

	  /**
	   * Get whether users belonging to the given role are allowed
	   * to write this object. Even if this returns false, the role may
	   * still be able to write it if a parent role has write access.
	   *
	   * @param role The name of the role, or a AV.Role object.
	   * @return {Boolean} true if the role has write access. false otherwise.
	   * @throws {String} If role is neither a AV.Role nor a String.
	   */
	  AV.ACL.prototype.getRoleWriteAccess = function (role) {
	    if (role instanceof AV.Role) {
	      // Normalize to the String name
	      role = role.getName();
	    }
	    if (_.isString(role)) {
	      return this.getWriteAccess("role:" + role);
	    }
	    throw "role must be a AV.Role or a String";
	  };

	  /**
	   * Set whether users belonging to the given role are allowed
	   * to read this object.
	   *
	   * @param role The name of the role, or a AV.Role object.
	   * @param {Boolean} allowed Whether the given role can read this object.
	   * @throws {String} If role is neither a AV.Role nor a String.
	   */
	  AV.ACL.prototype.setRoleReadAccess = function (role, allowed) {
	    if (role instanceof AV.Role) {
	      // Normalize to the String name
	      role = role.getName();
	    }
	    if (_.isString(role)) {
	      this.setReadAccess("role:" + role, allowed);
	      return;
	    }
	    throw "role must be a AV.Role or a String";
	  };

	  /**
	   * Set whether users belonging to the given role are allowed
	   * to write this object.
	   *
	   * @param role The name of the role, or a AV.Role object.
	   * @param {Boolean} allowed Whether the given role can write this object.
	   * @throws {String} If role is neither a AV.Role nor a String.
	   */
	  AV.ACL.prototype.setRoleWriteAccess = function (role, allowed) {
	    if (role instanceof AV.Role) {
	      // Normalize to the String name
	      role = role.getName();
	    }
	    if (_.isString(role)) {
	      this.setWriteAccess("role:" + role, allowed);
	      return;
	    }
	    throw "role must be a AV.Role or a String";
	  };
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var _ = __webpack_require__(18);

	module.exports = function (AV) {

	  /**
	   * @class
	   * A AV.Op is an atomic operation that can be applied to a field in a
	   * AV.Object. For example, calling <code>object.set("foo", "bar")</code>
	   * is an example of a AV.Op.Set. Calling <code>object.unset("foo")</code>
	   * is a AV.Op.Unset. These operations are stored in a AV.Object and
	   * sent to the server as part of <code>object.save()</code> operations.
	   * Instances of AV.Op should be immutable.
	   *
	   * You should not create subclasses of AV.Op or instantiate AV.Op
	   * directly.
	   */
	  AV.Op = function () {
	    this._initialize.apply(this, arguments);
	  };

	  AV.Op.prototype = {
	    _initialize: function _initialize() {}
	  };

	  _.extend(AV.Op, {
	    /**
	     * To create a new Op, call AV.Op._extend();
	     */
	    _extend: AV._extend,

	    // A map of __op string to decoder function.
	    _opDecoderMap: {},

	    /**
	     * Registers a function to convert a json object with an __op field into an
	     * instance of a subclass of AV.Op.
	     */
	    _registerDecoder: function _registerDecoder(opName, decoder) {
	      AV.Op._opDecoderMap[opName] = decoder;
	    },

	    /**
	     * Converts a json object into an instance of a subclass of AV.Op.
	     */
	    _decode: function _decode(json) {
	      var decoder = AV.Op._opDecoderMap[json.__op];
	      if (decoder) {
	        return decoder(json);
	      } else {
	        return undefined;
	      }
	    }
	  });

	  /*
	   * Add a handler for Batch ops.
	   */
	  AV.Op._registerDecoder("Batch", function (json) {
	    var op = null;
	    AV._arrayEach(json.ops, function (nextOp) {
	      nextOp = AV.Op._decode(nextOp);
	      op = nextOp._mergeWithPrevious(op);
	    });
	    return op;
	  });

	  /**
	   * @class
	   * A Set operation indicates that either the field was changed using
	   * AV.Object.set, or it is a mutable container that was detected as being
	   * changed.
	   */
	  AV.Op.Set = AV.Op._extend( /** @lends AV.Op.Set.prototype */{
	    _initialize: function _initialize(value) {
	      this._value = value;
	    },

	    /**
	     * Returns the new value of this field after the set.
	     */
	    value: function value() {
	      return this._value;
	    },

	    /**
	     * Returns a JSON version of the operation suitable for sending to AV.
	     * @return {Object}
	     */
	    toJSON: function toJSON() {
	      return AV._encode(this.value());
	    },

	    _mergeWithPrevious: function _mergeWithPrevious(previous) {
	      return this;
	    },

	    _estimate: function _estimate(oldValue) {
	      return this.value();
	    }
	  });

	  /**
	   * A sentinel value that is returned by AV.Op.Unset._estimate to
	   * indicate the field should be deleted. Basically, if you find _UNSET as a
	   * value in your object, you should remove that key.
	   */
	  AV.Op._UNSET = {};

	  /**
	   * @class
	   * An Unset operation indicates that this field has been deleted from the
	   * object.
	   */
	  AV.Op.Unset = AV.Op._extend( /** @lends AV.Op.Unset.prototype */{
	    /**
	     * Returns a JSON version of the operation suitable for sending to AV.
	     * @return {Object}
	     */
	    toJSON: function toJSON() {
	      return { __op: "Delete" };
	    },

	    _mergeWithPrevious: function _mergeWithPrevious(previous) {
	      return this;
	    },

	    _estimate: function _estimate(oldValue) {
	      return AV.Op._UNSET;
	    }
	  });

	  AV.Op._registerDecoder("Delete", function (json) {
	    return new AV.Op.Unset();
	  });

	  /**
	   * @class
	   * An Increment is an atomic operation where the numeric value for the field
	   * will be increased by a given amount.
	   */
	  AV.Op.Increment = AV.Op._extend(
	  /** @lends AV.Op.Increment.prototype */{

	    _initialize: function _initialize(amount) {
	      this._amount = amount;
	    },

	    /**
	     * Returns the amount to increment by.
	     * @return {Number} the amount to increment by.
	     */
	    amount: function amount() {
	      return this._amount;
	    },

	    /**
	     * Returns a JSON version of the operation suitable for sending to AV.
	     * @return {Object}
	     */
	    toJSON: function toJSON() {
	      return { __op: "Increment", amount: this._amount };
	    },

	    _mergeWithPrevious: function _mergeWithPrevious(previous) {
	      if (!previous) {
	        return this;
	      } else if (previous instanceof AV.Op.Unset) {
	        return new AV.Op.Set(this.amount());
	      } else if (previous instanceof AV.Op.Set) {
	        return new AV.Op.Set(previous.value() + this.amount());
	      } else if (previous instanceof AV.Op.Increment) {
	        return new AV.Op.Increment(this.amount() + previous.amount());
	      } else {
	        throw "Op is invalid after previous op.";
	      }
	    },

	    _estimate: function _estimate(oldValue) {
	      if (!oldValue) {
	        return this.amount();
	      }
	      return oldValue + this.amount();
	    }
	  });

	  AV.Op._registerDecoder("Increment", function (json) {
	    return new AV.Op.Increment(json.amount);
	  });

	  /**
	   * @class
	   * Add is an atomic operation where the given objects will be appended to the
	   * array that is stored in this field.
	   */
	  AV.Op.Add = AV.Op._extend( /** @lends AV.Op.Add.prototype */{
	    _initialize: function _initialize(objects) {
	      this._objects = objects;
	    },

	    /**
	     * Returns the objects to be added to the array.
	     * @return {Array} The objects to be added to the array.
	     */
	    objects: function objects() {
	      return this._objects;
	    },

	    /**
	     * Returns a JSON version of the operation suitable for sending to AV.
	     * @return {Object}
	     */
	    toJSON: function toJSON() {
	      return { __op: "Add", objects: AV._encode(this.objects()) };
	    },

	    _mergeWithPrevious: function _mergeWithPrevious(previous) {
	      if (!previous) {
	        return this;
	      } else if (previous instanceof AV.Op.Unset) {
	        return new AV.Op.Set(this.objects());
	      } else if (previous instanceof AV.Op.Set) {
	        return new AV.Op.Set(this._estimate(previous.value()));
	      } else if (previous instanceof AV.Op.Add) {
	        return new AV.Op.Add(previous.objects().concat(this.objects()));
	      } else {
	        throw "Op is invalid after previous op.";
	      }
	    },

	    _estimate: function _estimate(oldValue) {
	      if (!oldValue) {
	        return _.clone(this.objects());
	      } else {
	        return oldValue.concat(this.objects());
	      }
	    }
	  });

	  AV.Op._registerDecoder("Add", function (json) {
	    return new AV.Op.Add(AV._decode(undefined, json.objects));
	  });

	  /**
	   * @class
	   * AddUnique is an atomic operation where the given items will be appended to
	   * the array that is stored in this field only if they were not already
	   * present in the array.
	   */
	  AV.Op.AddUnique = AV.Op._extend(
	  /** @lends AV.Op.AddUnique.prototype */{

	    _initialize: function _initialize(objects) {
	      this._objects = _.uniq(objects);
	    },

	    /**
	     * Returns the objects to be added to the array.
	     * @return {Array} The objects to be added to the array.
	     */
	    objects: function objects() {
	      return this._objects;
	    },

	    /**
	     * Returns a JSON version of the operation suitable for sending to AV.
	     * @return {Object}
	     */
	    toJSON: function toJSON() {
	      return { __op: "AddUnique", objects: AV._encode(this.objects()) };
	    },

	    _mergeWithPrevious: function _mergeWithPrevious(previous) {
	      if (!previous) {
	        return this;
	      } else if (previous instanceof AV.Op.Unset) {
	        return new AV.Op.Set(this.objects());
	      } else if (previous instanceof AV.Op.Set) {
	        return new AV.Op.Set(this._estimate(previous.value()));
	      } else if (previous instanceof AV.Op.AddUnique) {
	        return new AV.Op.AddUnique(this._estimate(previous.objects()));
	      } else {
	        throw "Op is invalid after previous op.";
	      }
	    },

	    _estimate: function _estimate(oldValue) {
	      if (!oldValue) {
	        return _.clone(this.objects());
	      } else {
	        // We can't just take the _.uniq(_.union(...)) of oldValue and
	        // this.objects, because the uniqueness may not apply to oldValue
	        // (especially if the oldValue was set via .set())
	        var newValue = _.clone(oldValue);
	        AV._arrayEach(this.objects(), function (obj) {
	          if (obj instanceof AV.Object && obj.id) {
	            var matchingObj = _.find(newValue, function (anObj) {
	              return anObj instanceof AV.Object && anObj.id === obj.id;
	            });
	            if (!matchingObj) {
	              newValue.push(obj);
	            } else {
	              var index = _.indexOf(newValue, matchingObj);
	              newValue[index] = obj;
	            }
	          } else if (!_.contains(newValue, obj)) {
	            newValue.push(obj);
	          }
	        });
	        return newValue;
	      }
	    }
	  });

	  AV.Op._registerDecoder("AddUnique", function (json) {
	    return new AV.Op.AddUnique(AV._decode(undefined, json.objects));
	  });

	  /**
	   * @class
	   * Remove is an atomic operation where the given objects will be removed from
	   * the array that is stored in this field.
	   */
	  AV.Op.Remove = AV.Op._extend( /** @lends AV.Op.Remove.prototype */{
	    _initialize: function _initialize(objects) {
	      this._objects = _.uniq(objects);
	    },

	    /**
	     * Returns the objects to be removed from the array.
	     * @return {Array} The objects to be removed from the array.
	     */
	    objects: function objects() {
	      return this._objects;
	    },

	    /**
	     * Returns a JSON version of the operation suitable for sending to AV.
	     * @return {Object}
	     */
	    toJSON: function toJSON() {
	      return { __op: "Remove", objects: AV._encode(this.objects()) };
	    },

	    _mergeWithPrevious: function _mergeWithPrevious(previous) {
	      if (!previous) {
	        return this;
	      } else if (previous instanceof AV.Op.Unset) {
	        return previous;
	      } else if (previous instanceof AV.Op.Set) {
	        return new AV.Op.Set(this._estimate(previous.value()));
	      } else if (previous instanceof AV.Op.Remove) {
	        return new AV.Op.Remove(_.union(previous.objects(), this.objects()));
	      } else {
	        throw "Op is invalid after previous op.";
	      }
	    },

	    _estimate: function _estimate(oldValue) {
	      if (!oldValue) {
	        return [];
	      } else {
	        var newValue = _.difference(oldValue, this.objects());
	        // If there are saved AV Objects being removed, also remove them.
	        AV._arrayEach(this.objects(), function (obj) {
	          if (obj instanceof AV.Object && obj.id) {
	            newValue = _.reject(newValue, function (other) {
	              return other instanceof AV.Object && other.id === obj.id;
	            });
	          }
	        });
	        return newValue;
	      }
	    }
	  });

	  AV.Op._registerDecoder("Remove", function (json) {
	    return new AV.Op.Remove(AV._decode(undefined, json.objects));
	  });

	  /**
	   * @class
	   * A Relation operation indicates that the field is an instance of
	   * AV.Relation, and objects are being added to, or removed from, that
	   * relation.
	   */
	  AV.Op.Relation = AV.Op._extend(
	  /** @lends AV.Op.Relation.prototype */{

	    _initialize: function _initialize(adds, removes) {
	      this._targetClassName = null;

	      var self = this;

	      var pointerToId = function pointerToId(object) {
	        if (object instanceof AV.Object) {
	          if (!object.id) {
	            throw "You can't add an unsaved AV.Object to a relation.";
	          }
	          if (!self._targetClassName) {
	            self._targetClassName = object.className;
	          }
	          if (self._targetClassName !== object.className) {
	            throw "Tried to create a AV.Relation with 2 different types: " + self._targetClassName + " and " + object.className + ".";
	          }
	          return object.id;
	        }
	        return object;
	      };

	      this.relationsToAdd = _.uniq(_.map(adds, pointerToId));
	      this.relationsToRemove = _.uniq(_.map(removes, pointerToId));
	    },

	    /**
	     * Returns an array of unfetched AV.Object that are being added to the
	     * relation.
	     * @return {Array}
	     */
	    added: function added() {
	      var self = this;
	      return _.map(this.relationsToAdd, function (objectId) {
	        var object = AV.Object._create(self._targetClassName);
	        object.id = objectId;
	        return object;
	      });
	    },

	    /**
	     * Returns an array of unfetched AV.Object that are being removed from
	     * the relation.
	     * @return {Array}
	     */
	    removed: function removed() {
	      var self = this;
	      return _.map(this.relationsToRemove, function (objectId) {
	        var object = AV.Object._create(self._targetClassName);
	        object.id = objectId;
	        return object;
	      });
	    },

	    /**
	     * Returns a JSON version of the operation suitable for sending to AV.
	     * @return {Object}
	     */
	    toJSON: function toJSON() {
	      var adds = null;
	      var removes = null;
	      var self = this;
	      var idToPointer = function idToPointer(id) {
	        return { __type: 'Pointer',
	          className: self._targetClassName,
	          objectId: id };
	      };
	      var pointers = null;
	      if (this.relationsToAdd.length > 0) {
	        pointers = _.map(this.relationsToAdd, idToPointer);
	        adds = { "__op": "AddRelation", "objects": pointers };
	      }

	      if (this.relationsToRemove.length > 0) {
	        pointers = _.map(this.relationsToRemove, idToPointer);
	        removes = { "__op": "RemoveRelation", "objects": pointers };
	      }

	      if (adds && removes) {
	        return { "__op": "Batch", "ops": [adds, removes] };
	      }

	      return adds || removes || {};
	    },

	    _mergeWithPrevious: function _mergeWithPrevious(previous) {
	      if (!previous) {
	        return this;
	      } else if (previous instanceof AV.Op.Unset) {
	        throw "You can't modify a relation after deleting it.";
	      } else if (previous instanceof AV.Op.Relation) {
	        if (previous._targetClassName && previous._targetClassName !== this._targetClassName) {
	          throw "Related object must be of class " + previous._targetClassName + ", but " + this._targetClassName + " was passed in.";
	        }
	        var newAdd = _.union(_.difference(previous.relationsToAdd, this.relationsToRemove), this.relationsToAdd);
	        var newRemove = _.union(_.difference(previous.relationsToRemove, this.relationsToAdd), this.relationsToRemove);

	        var newRelation = new AV.Op.Relation(newAdd, newRemove);
	        newRelation._targetClassName = this._targetClassName;
	        return newRelation;
	      } else {
	        throw "Op is invalid after previous op.";
	      }
	    },

	    _estimate: function _estimate(oldValue, object, key) {
	      if (!oldValue) {
	        var relation = new AV.Relation(object, key);
	        relation.targetClassName = this._targetClassName;
	      } else if (oldValue instanceof AV.Relation) {
	        if (this._targetClassName) {
	          if (oldValue.targetClassName) {
	            if (oldValue.targetClassName !== this._targetClassName) {
	              throw "Related object must be a " + oldValue.targetClassName + ", but a " + this._targetClassName + " was passed in.";
	            }
	          } else {
	            oldValue.targetClassName = this._targetClassName;
	          }
	        }
	        return oldValue;
	      } else {
	        throw "Op is invalid after previous op.";
	      }
	    }
	  });

	  AV.Op._registerDecoder("AddRelation", function (json) {
	    return new AV.Op.Relation(AV._decode(undefined, json.objects), []);
	  });
	  AV.Op._registerDecoder("RemoveRelation", function (json) {
	    return new AV.Op.Relation([], AV._decode(undefined, json.objects));
	  });
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var _ = __webpack_require__(18);

	module.exports = function (AV) {
	  /**
	   * Creates a new Relation for the given parent object and key. This
	   * constructor should rarely be used directly, but rather created by
	   * AV.Object.relation.
	   * @param {AV.Object} parent The parent of this relation.
	   * @param {String} key The key for this relation on the parent.
	   * @see AV.Object#relation
	   * @class
	   *
	   * <p>
	   * A class that is used to access all of the children of a many-to-many
	   * relationship.  Each instance of AV.Relation is associated with a
	   * particular parent object and key.
	   * </p>
	   */
	  AV.Relation = function (parent, key) {
	    if (!_.isString(key)) {
	      throw new TypeError('key must be a string');
	    }
	    this.parent = parent;
	    this.key = key;
	    this.targetClassName = null;
	  };

	  /**
	   * Creates a query that can be used to query the parent objects in this relation.
	   * @param {String} parentClass The parent class or name.
	   * @param {String} relationKey The relation field key in parent.
	   * @param {AV.Object} child The child object.
	   * @return {AV.Query}
	   */
	  AV.Relation.reverseQuery = function (parentClass, relationKey, child) {
	    var query = new AV.Query(parentClass);
	    query.equalTo(relationKey, child._toPointer());
	    return query;
	  };

	  AV.Relation.prototype = {
	    /**
	     * Makes sure that this relation has the right parent and key.
	     */
	    _ensureParentAndKey: function _ensureParentAndKey(parent, key) {
	      this.parent = this.parent || parent;
	      this.key = this.key || key;
	      if (this.parent !== parent) {
	        throw "Internal Error. Relation retrieved from two different Objects.";
	      }
	      if (this.key !== key) {
	        throw "Internal Error. Relation retrieved from two different keys.";
	      }
	    },

	    /**
	     * Adds a AV.Object or an array of AV.Objects to the relation.
	     * @param {} objects The item or items to add.
	     */
	    add: function add(objects) {
	      if (!_.isArray(objects)) {
	        objects = [objects];
	      }

	      var change = new AV.Op.Relation(objects, []);
	      this.parent.set(this.key, change);
	      this.targetClassName = change._targetClassName;
	    },

	    /**
	     * Removes a AV.Object or an array of AV.Objects from this relation.
	     * @param {} objects The item or items to remove.
	     */
	    remove: function remove(objects) {
	      if (!_.isArray(objects)) {
	        objects = [objects];
	      }

	      var change = new AV.Op.Relation([], objects);
	      this.parent.set(this.key, change);
	      this.targetClassName = change._targetClassName;
	    },

	    /**
	     * Returns a JSON version of the object suitable for saving to disk.
	     * @return {Object}
	     */
	    toJSON: function toJSON() {
	      return { "__type": "Relation", "className": this.targetClassName };
	    },

	    /**
	     * Returns a AV.Query that is limited to objects in this
	     * relation.
	     * @return {AV.Query}
	     */
	    query: function query() {
	      var targetClass;
	      var query;
	      if (!this.targetClassName) {
	        targetClass = AV.Object._getSubclass(this.parent.className);
	        query = new AV.Query(targetClass);
	        query._extraOptions.redirectClassNameForKey = this.key;
	      } else {
	        targetClass = AV.Object._getSubclass(this.targetClassName);
	        query = new AV.Query(targetClass);
	      }
	      query._addCondition("$relatedTo", "object", this.parent._toPointer());
	      query._addCondition("$relatedTo", "key", this.key);

	      return query;
	    }
	  };
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var path = __webpack_require__(32);
	var _ = __webpack_require__(18);

	/*jshint bitwise:false */ /*global FileReader: true, File: true */
	module.exports = function (AV) {
	  var b64Digit = function b64Digit(number) {
	    if (number < 26) {
	      return String.fromCharCode(65 + number);
	    }
	    if (number < 52) {
	      return String.fromCharCode(97 + (number - 26));
	    }
	    if (number < 62) {
	      return String.fromCharCode(48 + (number - 52));
	    }
	    if (number === 62) {
	      return "+";
	    }
	    if (number === 63) {
	      return "/";
	    }
	    throw "Tried to encode large digit " + number + " in base64.";
	  };

	  var encodeBase64 = function encodeBase64(array) {
	    var chunks = [];
	    chunks.length = Math.ceil(array.length / 3);
	    _.times(chunks.length, function (i) {
	      var b1 = array[i * 3];
	      var b2 = array[i * 3 + 1] || 0;
	      var b3 = array[i * 3 + 2] || 0;

	      var has2 = i * 3 + 1 < array.length;
	      var has3 = i * 3 + 2 < array.length;

	      chunks[i] = [b64Digit(b1 >> 2 & 0x3F), b64Digit(b1 << 4 & 0x30 | b2 >> 4 & 0x0F), has2 ? b64Digit(b2 << 2 & 0x3C | b3 >> 6 & 0x03) : "=", has3 ? b64Digit(b3 & 0x3F) : "="].join("");
	    });
	    return chunks.join("");
	  };

	  // 取出 dataURL 中 base64 的部分
	  var dataURLToBase64 = function dataURLToBase64(base64) {
	    if (base64.split(',')[0] && base64.split(',')[0].indexOf('base64') >= 0) {
	      base64 = base64.split(',')[1];
	    }
	    return base64;
	  };

	  // 判断是否是国内节点
	  var isCnNode = function isCnNode() {
	    var serverHost = AV.serverURL.match(/\/\/(.*)/, 'g')[1];
	    var cnApiHost = AV._config.cnApiUrl.match(/\/\/(.*)/, 'g')[1];
	    return serverHost === cnApiHost;
	  };

	  // A list of file extensions to mime types as found here:
	  // http://stackoverflow.com/questions/58510/using-net-how-can-you-find-the-
	  //     mime-type-of-a-file-based-on-the-file-signature
	  var mimeTypes = {
	    ai: "application/postscript",
	    aif: "audio/x-aiff",
	    aifc: "audio/x-aiff",
	    aiff: "audio/x-aiff",
	    asc: "text/plain",
	    atom: "application/atom+xml",
	    au: "audio/basic",
	    avi: "video/x-msvideo",
	    bcpio: "application/x-bcpio",
	    bin: "application/octet-stream",
	    bmp: "image/bmp",
	    cdf: "application/x-netcdf",
	    cgm: "image/cgm",
	    "class": "application/octet-stream",
	    cpio: "application/x-cpio",
	    cpt: "application/mac-compactpro",
	    csh: "application/x-csh",
	    css: "text/css",
	    dcr: "application/x-director",
	    dif: "video/x-dv",
	    dir: "application/x-director",
	    djv: "image/vnd.djvu",
	    djvu: "image/vnd.djvu",
	    dll: "application/octet-stream",
	    dmg: "application/octet-stream",
	    dms: "application/octet-stream",
	    doc: "application/msword",
	    docx: "application/vnd.openxmlformats-officedocument.wordprocessingml." + "document",
	    dotx: "application/vnd.openxmlformats-officedocument.wordprocessingml." + "template",
	    docm: "application/vnd.ms-word.document.macroEnabled.12",
	    dotm: "application/vnd.ms-word.template.macroEnabled.12",
	    dtd: "application/xml-dtd",
	    dv: "video/x-dv",
	    dvi: "application/x-dvi",
	    dxr: "application/x-director",
	    eps: "application/postscript",
	    etx: "text/x-setext",
	    exe: "application/octet-stream",
	    ez: "application/andrew-inset",
	    gif: "image/gif",
	    gram: "application/srgs",
	    grxml: "application/srgs+xml",
	    gtar: "application/x-gtar",
	    hdf: "application/x-hdf",
	    hqx: "application/mac-binhex40",
	    htm: "text/html",
	    html: "text/html",
	    ice: "x-conference/x-cooltalk",
	    ico: "image/x-icon",
	    ics: "text/calendar",
	    ief: "image/ief",
	    ifb: "text/calendar",
	    iges: "model/iges",
	    igs: "model/iges",
	    jnlp: "application/x-java-jnlp-file",
	    jp2: "image/jp2",
	    jpe: "image/jpeg",
	    jpeg: "image/jpeg",
	    jpg: "image/jpeg",
	    js: "application/x-javascript",
	    kar: "audio/midi",
	    latex: "application/x-latex",
	    lha: "application/octet-stream",
	    lzh: "application/octet-stream",
	    m3u: "audio/x-mpegurl",
	    m4a: "audio/mp4a-latm",
	    m4b: "audio/mp4a-latm",
	    m4p: "audio/mp4a-latm",
	    m4u: "video/vnd.mpegurl",
	    m4v: "video/x-m4v",
	    mac: "image/x-macpaint",
	    man: "application/x-troff-man",
	    mathml: "application/mathml+xml",
	    me: "application/x-troff-me",
	    mesh: "model/mesh",
	    mid: "audio/midi",
	    midi: "audio/midi",
	    mif: "application/vnd.mif",
	    mov: "video/quicktime",
	    movie: "video/x-sgi-movie",
	    mp2: "audio/mpeg",
	    mp3: "audio/mpeg",
	    mp4: "video/mp4",
	    mpe: "video/mpeg",
	    mpeg: "video/mpeg",
	    mpg: "video/mpeg",
	    mpga: "audio/mpeg",
	    ms: "application/x-troff-ms",
	    msh: "model/mesh",
	    mxu: "video/vnd.mpegurl",
	    nc: "application/x-netcdf",
	    oda: "application/oda",
	    ogg: "application/ogg",
	    pbm: "image/x-portable-bitmap",
	    pct: "image/pict",
	    pdb: "chemical/x-pdb",
	    pdf: "application/pdf",
	    pgm: "image/x-portable-graymap",
	    pgn: "application/x-chess-pgn",
	    pic: "image/pict",
	    pict: "image/pict",
	    png: "image/png",
	    pnm: "image/x-portable-anymap",
	    pnt: "image/x-macpaint",
	    pntg: "image/x-macpaint",
	    ppm: "image/x-portable-pixmap",
	    ppt: "application/vnd.ms-powerpoint",
	    pptx: "application/vnd.openxmlformats-officedocument.presentationml." + "presentation",
	    potx: "application/vnd.openxmlformats-officedocument.presentationml." + "template",
	    ppsx: "application/vnd.openxmlformats-officedocument.presentationml." + "slideshow",
	    ppam: "application/vnd.ms-powerpoint.addin.macroEnabled.12",
	    pptm: "application/vnd.ms-powerpoint.presentation.macroEnabled.12",
	    potm: "application/vnd.ms-powerpoint.template.macroEnabled.12",
	    ppsm: "application/vnd.ms-powerpoint.slideshow.macroEnabled.12",
	    ps: "application/postscript",
	    qt: "video/quicktime",
	    qti: "image/x-quicktime",
	    qtif: "image/x-quicktime",
	    ra: "audio/x-pn-realaudio",
	    ram: "audio/x-pn-realaudio",
	    ras: "image/x-cmu-raster",
	    rdf: "application/rdf+xml",
	    rgb: "image/x-rgb",
	    rm: "application/vnd.rn-realmedia",
	    roff: "application/x-troff",
	    rtf: "text/rtf",
	    rtx: "text/richtext",
	    sgm: "text/sgml",
	    sgml: "text/sgml",
	    sh: "application/x-sh",
	    shar: "application/x-shar",
	    silo: "model/mesh",
	    sit: "application/x-stuffit",
	    skd: "application/x-koan",
	    skm: "application/x-koan",
	    skp: "application/x-koan",
	    skt: "application/x-koan",
	    smi: "application/smil",
	    smil: "application/smil",
	    snd: "audio/basic",
	    so: "application/octet-stream",
	    spl: "application/x-futuresplash",
	    src: "application/x-wais-source",
	    sv4cpio: "application/x-sv4cpio",
	    sv4crc: "application/x-sv4crc",
	    svg: "image/svg+xml",
	    swf: "application/x-shockwave-flash",
	    t: "application/x-troff",
	    tar: "application/x-tar",
	    tcl: "application/x-tcl",
	    tex: "application/x-tex",
	    texi: "application/x-texinfo",
	    texinfo: "application/x-texinfo",
	    tif: "image/tiff",
	    tiff: "image/tiff",
	    tr: "application/x-troff",
	    tsv: "text/tab-separated-values",
	    txt: "text/plain",
	    ustar: "application/x-ustar",
	    vcd: "application/x-cdlink",
	    vrml: "model/vrml",
	    vxml: "application/voicexml+xml",
	    wav: "audio/x-wav",
	    wbmp: "image/vnd.wap.wbmp",
	    wbmxl: "application/vnd.wap.wbxml",
	    wml: "text/vnd.wap.wml",
	    wmlc: "application/vnd.wap.wmlc",
	    wmls: "text/vnd.wap.wmlscript",
	    wmlsc: "application/vnd.wap.wmlscriptc",
	    wrl: "model/vrml",
	    xbm: "image/x-xbitmap",
	    xht: "application/xhtml+xml",
	    xhtml: "application/xhtml+xml",
	    xls: "application/vnd.ms-excel",
	    xml: "application/xml",
	    xpm: "image/x-xpixmap",
	    xsl: "application/xml",
	    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
	    xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml." + "template",
	    xlsm: "application/vnd.ms-excel.sheet.macroEnabled.12",
	    xltm: "application/vnd.ms-excel.template.macroEnabled.12",
	    xlam: "application/vnd.ms-excel.addin.macroEnabled.12",
	    xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.12",
	    xslt: "application/xslt+xml",
	    xul: "application/vnd.mozilla.xul+xml",
	    xwd: "image/x-xwindowdump",
	    xyz: "chemical/x-xyz",
	    zip: "application/zip"
	  };

	  /**
	   * Reads a File using a FileReader.
	   * @param file {File} the File to read.
	   * @param type {String} (optional) the mimetype to override with.
	   * @return {AV.Promise} A Promise that will be fulfilled with a
	   *     base64-encoded string of the data and its mime type.
	   */
	  var readAsync = function readAsync(file, type) {
	    var promise = new AV.Promise();

	    if (typeof FileReader === "undefined") {
	      return AV.Promise.error(new AV.Error(-1, "Attempted to use a FileReader on an unsupported browser."));
	    }

	    var reader = new FileReader();
	    reader.onloadend = function () {
	      if (reader.readyState !== 2) {
	        promise.reject(new AV.Error(-1, "Error reading file."));
	        return;
	      }

	      var dataURL = reader.result;
	      var matches = /^data:([^;]*);base64,(.*)$/.exec(dataURL);
	      if (!matches) {
	        promise.reject(new AV.Error(-1, "Unable to interpret data URL: " + dataURL));
	        return;
	      }

	      promise.resolve(matches[2], type || matches[1]);
	    };
	    reader.readAsDataURL(file);
	    return promise;
	  };

	  /**
	   * A AV.File is a local representation of a file that is saved to the AV
	   * cloud.
	   * @param name {String} The file's name. This will change to a unique value
	   *     once the file has finished saving.
	   * @param data {Array} The data for the file, as either:
	   *     1. an Array of byte value Numbers, or
	   *     2. an Object like { base64: "..." } with a base64-encoded String.
	   *     3. a File object selected with a file upload control. (3) only works
	   *        in Firefox 3.6+, Safari 6.0.2+, Chrome 7+, and IE 10+.
	   *        For example:<pre>
	   *     4.a Buffer object in Node.js runtime.
	   * var fileUploadControl = $("#profilePhotoFileUpload")[0];
	   * if (fileUploadControl.files.length > 0) {
	   *   var file = fileUploadControl.files[0];
	   *   var name = "photo.jpg";
	   *   var parseFile = new AV.File(name, file);
	   *   parseFile.save().then(function() {
	   *     // The file has been saved to AV.
	   *   }, function(error) {
	   *     // The file either could not be read, or could not be saved to AV.
	   *   });
	   * }</pre>
	   *
	   * @class
	   * @param type {String} Optional Content-Type header to use for the file. If
	   *     this is omitted, the content type will be inferred from the name's
	   *     extension.
	   */
	  AV.File = function (name, data, type) {
	    this._name = name;
	    var currentUser = AV.User.current();
	    this._metaData = {
	      owner: currentUser != null ? currentUser.id : 'unknown'
	    };

	    // Guess the content type from the extension if we need to.
	    var extension = /\.([^.]*)$/.exec(name);
	    if (extension) {
	      extension = extension[1].toLowerCase();
	    }
	    var guessedType = type || mimeTypes[extension] || "text/plain";
	    this._guessedType = guessedType;

	    if (_.isArray(data)) {
	      this._base64 = encodeBase64(data);
	      this._source = AV.Promise.as(this._base64, guessedType);
	      this._metaData.size = data.length;
	    } else if (data && data.base64) {
	      var parseBase64 = __webpack_require__(33);
	      var dataBase64 = parseBase64(data.base64, guessedType);
	      this._base64 = dataURLToBase64(data.base64);
	      this._source = AV.Promise.as(dataBase64, guessedType);
	    } else if (data && data.blob) {
	      this._source = AV.Promise.as(data.blob, guessedType);
	    } else if (typeof File !== "undefined" && data instanceof File) {
	      this._source = AV.Promise.as(data, guessedType);
	    } else if (AV._isNode && global.Buffer.isBuffer(data)) {
	      // use global.Buffer to prevent browserify pack Buffer module
	      this._base64 = data.toString('base64');
	      this._source = AV.Promise.as(this._base64, guessedType);
	      this._metaData.size = data.length;
	    } else if (_.isString(data)) {
	      throw "Creating a AV.File from a String is not yet supported.";
	    }
	  };

	  /**
	   * Creates a fresh AV.File object with exists url for saving to AVOS Cloud.
	   * @param {String} name the file name
	   * @param {String} url the file url.
	   * @param {Object} metaData the file metadata object,it's optional.
	   * @param {String} Optional Content-Type header to use for the file. If
	   *     this is omitted, the content type will be inferred from the name's
	   *     extension.
	   * @return {AV.File} the file object
	   */
	  AV.File.withURL = function (name, url, metaData, type) {
	    if (!name || !url) {
	      throw "Please provide file name and url";
	    }
	    var file = new AV.File(name, null, type);
	    //copy metaData properties to file.
	    if (metaData) {
	      for (var prop in metaData) {
	        if (!file._metaData[prop]) file._metaData[prop] = metaData[prop];
	      }
	    }
	    file._url = url;
	    //Mark the file is from external source.
	    file._metaData['__source'] = 'external';
	    return file;
	  };

	  /**
	   * Creates a file object with exists objectId.
	   * @param {String} objectId The objectId string
	   * @return {AV.File} the file object
	   */
	  AV.File.createWithoutData = function (objectId) {
	    var file = new AV.File();
	    file.id = objectId;
	    return file;
	  };

	  AV.File.prototype = {

	    toJSON: function toJSON() {
	      return AV._encode(this);
	    },

	    /**
	     * Returns the ACL for this file.
	     * @returns {AV.ACL} An instance of AV.ACL.
	     */
	    getACL: function getACL() {
	      return this._acl;
	    },

	    /**
	     * Sets the ACL to be used for this file.
	     * @param {AV.ACL} acl An instance of AV.ACL.
	     */
	    setACL: function setACL(acl) {
	      if (!(acl instanceof AV.ACL)) {
	        return new AV.Error(AV.Error.OTHER_CAUSE, "ACL must be a AV.ACL.");
	      }
	      this._acl = acl;
	    },

	    /**
	     * Gets the name of the file. Before save is called, this is the filename
	     * given by the user. After save is called, that name gets prefixed with a
	     * unique identifier.
	     */
	    name: function name() {
	      return this._name;
	    },

	    /**
	     * Gets the url of the file. It is only available after you save the file or
	     * after you get the file from a AV.Object.
	     * @return {String}
	     */
	    url: function url() {
	      return this._url;
	    },

	    /**
	    * <p>Returns the file's metadata JSON object if no arguments is given.Returns the
	    * metadata value if a key is given.Set metadata value if key and value are both given.</p>
	    * <p><pre>
	    *  var metadata = file.metaData(); //Get metadata JSON object.
	    *  var size = file.metaData('size');  // Get the size metadata value.
	    *  file.metaData('format', 'jpeg'); //set metadata attribute and value.
	    *</pre></p>
	    * @return {Object} The file's metadata JSON object.
	    * @param {String} attr an optional metadata key.
	    * @param {Object} value an optional metadata value.
	    **/
	    metaData: function metaData(attr, value) {
	      if (attr != null && value != null) {
	        this._metaData[attr] = value;
	        return this;
	      } else if (attr != null) {
	        return this._metaData[attr];
	      } else {
	        return this._metaData;
	      }
	    },

	    /**
	     * 如果文件是图片，获取图片的缩略图URL。可以传入宽度、高度、质量、格式等参数。
	     * @return {String} 缩略图URL
	     * @param {Number} width 宽度，单位：像素
	     * @param {Number} heigth 高度，单位：像素
	     * @param {Number} quality 质量，1-100的数字，默认100
	     * @param {Number} scaleToFit 是否将图片自适应大小。默认为true。
	     * @param {String} fmt 格式，默认为png，也可以为jpeg,gif等格式。
	     */
	    thumbnailURL: function thumbnailURL(width, height, quality, scaleToFit, fmt) {
	      if (!this.url()) {
	        throw "Invalid url.";
	      }
	      if (!width || !height || width <= 0 || height <= 0) {
	        throw "Invalid width or height value.";
	      }
	      quality = quality || 100;
	      scaleToFit = scaleToFit == null ? true : scaleToFit;
	      if (quality <= 0 || quality > 100) {
	        throw "Invalid quality value.";
	      }
	      fmt = fmt || 'png';
	      var mode = scaleToFit ? 2 : 1;
	      return this.url() + '?imageView/' + mode + '/w/' + width + '/h/' + height + '/q/' + quality + '/format/' + fmt;
	    },

	    /**
	    * Returns the file's size.
	    * @return {Number} The file's size in bytes.
	    **/
	    size: function size() {
	      return this.metaData().size;
	    },

	    /**
	     * Returns the file's owner.
	     * @return {String} The file's owner id.
	     */
	    ownerId: function ownerId() {
	      return this.metaData().owner;
	    },
	    /**
	    * Destroy the file.
	    * @return {AV.Promise} A promise that is fulfilled when the destroy
	    *     completes.
	    */
	    destroy: function destroy(options) {
	      if (!this.id) return AV.Promise.error('The file id is not eixsts.')._thenRunCallbacks(options);
	      var request = AV._request("files", null, this.id, 'DELETE');
	      return request._thenRunCallbacks(options);
	    },

	    /**
	     * Request Qiniu upload token
	     * @param {string} type
	     * @return {AV.Promise} Resolved with the response
	     * @private
	     */
	    _qiniuToken: function _qiniuToken(type) {
	      var self = this;
	      //Create 16-bits uuid as qiniu key.
	      var extName = path.extname(self._name);
	      var hexOctet = function hexOctet() {
	        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	      };
	      var key = hexOctet() + hexOctet() + hexOctet() + hexOctet() + hexOctet() + extName;

	      var data = {
	        key: key,
	        ACL: self._acl,
	        name: self._name,
	        mime_type: type,
	        metaData: self._metaData
	      };
	      if (type && self._metaData.mime_type == null) self._metaData.mime_type = type;
	      self._qiniu_key = key;
	      return AV._request("qiniu", null, null, 'POST', data);
	    },

	    /**
	     * @callback UploadProgressCallback
	     * @param {XMLHttpRequestProgressEvent} event - The progress event with 'loaded' and 'total' attributes
	     */
	    /**
	     * Saves the file to the AV cloud.
	     * @param {Object} saveOptions
	     * @param {UploadProgressCallback} [saveOptions.onProgress]
	     * @param {Object} options A Backbone-style options object.
	     * @return {AV.Promise} Promise that is resolved when the save finishes.
	     */
	    save: function save() {
	      var options = null;
	      var saveOptions = {};
	      if (arguments.length === 1) {
	        options = arguments[0];
	      } else if (arguments.length === 2) {
	        saveOptions = arguments[0];
	        options = arguments[1];
	      }
	      var self = this;
	      if (!self._previousSave) {
	        // 如果是国内节点
	        var isCnNodeFlag = isCnNode();
	        if (self._source && isCnNodeFlag) {
	          // 通过国内 CDN 服务商上传
	          var upload = __webpack_require__(34);
	          upload(self, AV, saveOptions);
	        } else if (self._url && self._metaData['__source'] == 'external') {
	          //external link file.
	          var data = {
	            name: self._name,
	            ACL: self._acl,
	            metaData: self._metaData,
	            mime_type: self._guessedType,
	            url: self._url
	          };
	          self._previousSave = AV._request('files', self._name, null, 'POST', data).then(function (response) {
	            self._name = response.name;
	            self._url = response.url;
	            self.id = response.objectId;
	            if (response.size) {
	              self._metaData.size = response.size;
	            }
	            return self;
	          });
	        } else if (!isCnNodeFlag) {
	          // 海外节点，通过 LeanCloud 服务器中转
	          self._previousSave = self._source.then(function (file, type) {
	            var data = {
	              base64: '',
	              _ContentType: type,
	              ACL: self._acl,
	              mime_type: type,
	              metaData: self._metaData
	            };
	            // 判断是否数据已经是 base64
	            if (self._base64) {
	              data.base64 = self._base64;
	              return AV._request('files', self._name, null, 'POST', data);
	            } else {
	              return readAsync(file).then(function (base64) {
	                data.base64 = base64;
	                return AV._request('files', self._name, null, 'POST', data);
	              });
	            }
	          }).then(function (response) {
	            self._name = response.name;
	            self._url = response.url;
	            self.id = response.objectId;
	            if (response.size) self._metaData.size = response.size;
	            return self;
	          });
	        }
	      }
	      return self._previousSave._thenRunCallbacks(options);
	    }
	  };
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// resolves . and .. elements in a path array with directory names there
	// must be no slashes, empty elements, or device names (c:\) in the array
	// (so also no leading and trailing slashes - it does not distinguish
	// relative and absolute paths)
	'use strict';

	function normalizeArray(parts, allowAboveRoot) {
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = parts.length - 1; i >= 0; i--) {
	    var last = parts[i];
	    if (last === '.') {
	      parts.splice(i, 1);
	    } else if (last === '..') {
	      parts.splice(i, 1);
	      up++;
	    } else if (up) {
	      parts.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (allowAboveRoot) {
	    for (; up--; up) {
	      parts.unshift('..');
	    }
	  }

	  return parts;
	}

	// Split a filename into [root, dir, basename, ext], unix version
	// 'root' is just a slash, or nothing.
	var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
	var splitPath = function splitPath(filename) {
	  return splitPathRe.exec(filename).slice(1);
	};

	// path.resolve([from ...], to)
	// posix version
	exports.resolve = function () {
	  var resolvedPath = '',
	      resolvedAbsolute = false;

	  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
	    var path = i >= 0 ? arguments[i] : process.cwd();

	    // Skip empty and invalid entries
	    if (typeof path !== 'string') {
	      throw new TypeError('Arguments to path.resolve must be strings');
	    } else if (!path) {
	      continue;
	    }

	    resolvedPath = path + '/' + resolvedPath;
	    resolvedAbsolute = path.charAt(0) === '/';
	  }

	  // At this point the path should be resolved to a full absolute path, but
	  // handle relative paths to be safe (might happen when process.cwd() fails)

	  // Normalize the path
	  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function (p) {
	    return !!p;
	  }), !resolvedAbsolute).join('/');

	  return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
	};

	// path.normalize(path)
	// posix version
	exports.normalize = function (path) {
	  var isAbsolute = exports.isAbsolute(path),
	      trailingSlash = substr(path, -1) === '/';

	  // Normalize the path
	  path = normalizeArray(filter(path.split('/'), function (p) {
	    return !!p;
	  }), !isAbsolute).join('/');

	  if (!path && !isAbsolute) {
	    path = '.';
	  }
	  if (path && trailingSlash) {
	    path += '/';
	  }

	  return (isAbsolute ? '/' : '') + path;
	};

	// posix version
	exports.isAbsolute = function (path) {
	  return path.charAt(0) === '/';
	};

	// posix version
	exports.join = function () {
	  var paths = Array.prototype.slice.call(arguments, 0);
	  return exports.normalize(filter(paths, function (p, index) {
	    if (typeof p !== 'string') {
	      throw new TypeError('Arguments to path.join must be strings');
	    }
	    return p;
	  }).join('/'));
	};

	// path.relative(from, to)
	// posix version
	exports.relative = function (from, to) {
	  from = exports.resolve(from).substr(1);
	  to = exports.resolve(to).substr(1);

	  function trim(arr) {
	    var start = 0;
	    for (; start < arr.length; start++) {
	      if (arr[start] !== '') break;
	    }

	    var end = arr.length - 1;
	    for (; end >= 0; end--) {
	      if (arr[end] !== '') break;
	    }

	    if (start > end) return [];
	    return arr.slice(start, end - start + 1);
	  }

	  var fromParts = trim(from.split('/'));
	  var toParts = trim(to.split('/'));

	  var length = Math.min(fromParts.length, toParts.length);
	  var samePartsLength = length;
	  for (var i = 0; i < length; i++) {
	    if (fromParts[i] !== toParts[i]) {
	      samePartsLength = i;
	      break;
	    }
	  }

	  var outputParts = [];
	  for (var i = samePartsLength; i < fromParts.length; i++) {
	    outputParts.push('..');
	  }

	  outputParts = outputParts.concat(toParts.slice(samePartsLength));

	  return outputParts.join('/');
	};

	exports.sep = '/';
	exports.delimiter = ':';

	exports.dirname = function (path) {
	  var result = splitPath(path),
	      root = result[0],
	      dir = result[1];

	  if (!root && !dir) {
	    // No dirname whatsoever
	    return '.';
	  }

	  if (dir) {
	    // It has a dirname, strip trailing slash
	    dir = dir.substr(0, dir.length - 1);
	  }

	  return root + dir;
	};

	exports.basename = function (path, ext) {
	  var f = splitPath(path)[2];
	  // TODO: make this comparison case-insensitive on windows?
	  if (ext && f.substr(-1 * ext.length) === ext) {
	    f = f.substr(0, f.length - ext.length);
	  }
	  return f;
	};

	exports.extname = function (path) {
	  return splitPath(path)[3];
	};

	function filter(xs, f) {
	  if (xs.filter) return xs.filter(f);
	  var res = [];
	  for (var i = 0; i < xs.length; i++) {
	    if (f(xs[i], i, xs)) res.push(xs[i]);
	  }
	  return res;
	}

	// String.prototype.substr - negative index don't work in IE8
	var substr = 'ab'.substr(-1) === 'b' ? function (str, start, len) {
	  return str.substr(start, len);
	} : function (str, start, len) {
	  if (start < 0) start = str.length + start;
	  return str.substr(start, len);
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	var dataURItoBlob = function dataURItoBlob(dataURI, type) {
	  var byteString;

	  // 传入的 base64，不是 dataURL
	  if (dataURI.indexOf('base64') < 0) {
	    byteString = atob(dataURI);
	  } else if (dataURI.split(',')[0].indexOf('base64') >= 0) {
	    byteString = atob(dataURI.split(',')[1]);
	  } else {
	    byteString = unescape(dataURI.split(',')[1]);
	  }
	  // separate out the mime component
	  var mimeString = type || dataURI.split(',')[0].split(':')[1].split(';')[0];
	  var ia = new Uint8Array(byteString.length);
	  for (var i = 0; i < byteString.length; i++) {
	    ia[i] = byteString.charCodeAt(i);
	  }
	  return new Blob([ia], { type: mimeString });
	};

	module.exports = dataURItoBlob;

/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function upload(file, AV, saveOptions) {
	  //use /files endpoint.
	  var self = file;
	  var dataFormat;
	  self._previousSave = self._source.then(function (data, type) {
	    dataFormat = data;
	    return self._qiniuToken(type);
	  }).then(function (response) {
	    self._url = response.url;
	    self._bucket = response.bucket;
	    self.id = response.objectId;
	    //Get the uptoken to upload files to qiniu.
	    var uptoken = response.token;

	    var data = new FormData();
	    data.append("file", dataFormat, self._name);
	    data.append("key", self._qiniu_key);
	    data.append("token", uptoken);

	    var promise = new AV.Promise();
	    var handled = false;

	    var xhr = new AV.XMLHttpRequest();

	    xhr.upload.addEventListener('progress', function (e) {
	      if (e.lengthComputable) {
	        saveOptions.onProgress && saveOptions.onProgress(e);
	      }
	    }, false);

	    xhr.onreadystatechange = function () {
	      if (xhr.readyState === 4) {
	        if (handled) {
	          return;
	        }
	        handled = true;

	        delete self._qiniu_key;
	        if (xhr.status >= 200 && xhr.status < 300) {
	          var response;
	          try {
	            response = JSON.parse(xhr.responseText);
	          } catch (e) {
	            promise.reject(e);
	            self.destroy();
	          }
	          if (response) {
	            promise.resolve(self);
	          } else {
	            promise.reject(response);
	          }
	        } else {
	          promise.reject(xhr);
	          self.destroy();
	        }
	      }
	    };
	    xhr.open('POST', 'http://upload.qiniu.com', true);
	    xhr.send(data);

	    return promise;
	  });
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(18);

	// AV.Object is analogous to the Java AVObject.
	// It also implements the same interface as a Backbone model.

	module.exports = function (AV) {
	  /**
	   * Creates a new model with defined attributes. A client id (cid) is
	   * automatically generated and assigned for you.
	   *
	   * <p>You won't normally call this method directly.  It is recommended that
	   * you use a subclass of <code>AV.Object</code> instead, created by calling
	   * <code>extend</code>.</p>
	   *
	   * <p>However, if you don't want to use a subclass, or aren't sure which
	   * subclass is appropriate, you can use this form:<pre>
	   *     var object = new AV.Object("ClassName");
	   * </pre>
	   * That is basically equivalent to:<pre>
	   *     var MyClass = AV.Object.extend("ClassName");
	   *     var object = new MyClass();
	   * </pre></p>
	   *
	   * @param {Object} attributes The initial set of data to store in the object.
	   * @param {Object} options A set of Backbone-like options for creating the
	   *     object.  The only option currently supported is "collection".
	   * @see AV.Object.extend
	   *
	   * @class
	   *
	   * <p>The fundamental unit of AV data, which implements the Backbone Model
	   * interface.</p>
	   */
	  AV.Object = function (attributes, options) {
	    // Allow new AV.Object("ClassName") as a shortcut to _create.
	    if (_.isString(attributes)) {
	      return AV.Object._create.apply(this, arguments);
	    }

	    attributes = attributes || {};
	    if (options && options.parse) {
	      attributes = this.parse(attributes);
	    }
	    var defaults = AV._getValue(this, 'defaults');
	    if (defaults) {
	      attributes = _.extend({}, defaults, attributes);
	    }
	    if (options && options.collection) {
	      this.collection = options.collection;
	    }

	    this._serverData = {}; // The last known data for this object from cloud.
	    this._opSetQueue = [{}]; // List of sets of changes to the data.
	    this.attributes = {}; // The best estimate of this's current data.

	    this._hashedJSON = {}; // Hash of values of containers at last save.
	    this._escapedAttributes = {};
	    this.cid = _.uniqueId('c');
	    this.changed = {};
	    this._silent = {};
	    this._pending = {};
	    if (!this.set(attributes, { silent: true })) {
	      throw new Error("Can't create an invalid AV.Object");
	    }
	    this.changed = {};
	    this._silent = {};
	    this._pending = {};
	    this._hasData = true;
	    this._previousAttributes = _.clone(this.attributes);
	    this.initialize.apply(this, arguments);
	  };

	  /**
	   * @lends AV.Object.prototype
	   * @property {String} id The objectId of the AV Object.
	   */

	  /**
	   * Saves the given list of AV.Object.
	   * If any error is encountered, stops and calls the error handler.
	   * There are two ways you can call this function.
	   *
	   * The Backbone way:<pre>
	   *   AV.Object.saveAll([object1, object2, ...], {
	   *     success: function(list) {
	   *       // All the objects were saved.
	   *     },
	   *     error: function(error) {
	   *       // An error occurred while saving one of the objects.
	   *     },
	   *   });
	   * </pre>
	   * A simplified syntax:<pre>
	   *   AV.Object.saveAll([object1, object2, ...], function(list, error) {
	   *     if (list) {
	   *       // All the objects were saved.
	   *     } else {
	   *       // An error occurred.
	   *     }
	   *   });
	   * </pre>
	   *
	   * @param {Array} list A list of <code>AV.Object</code>.
	   * @param {Object} options A Backbone-style callback object.
	   */
	  AV.Object.saveAll = function (list, options) {
	    return AV.Object._deepSaveAsync(list)._thenRunCallbacks(options);
	  };

	  // Attach all inheritable methods to the AV.Object prototype.
	  _.extend(AV.Object.prototype, AV.Events,
	  /** @lends AV.Object.prototype */{
	    _existed: false,
	    _fetchWhenSave: false,

	    /**
	     * Initialize is an empty function by default. Override it with your own
	     * initialization logic.
	     */
	    initialize: function initialize() {},

	    /**
	      * Set whether to enable fetchWhenSave option when updating object.
	      * When set true, SDK would fetch the latest object after saving.
	      * Default is false.
	      * @param {boolean} enable  true to enable fetchWhenSave option.
	      */
	    fetchWhenSave: function fetchWhenSave(enable) {
	      if (!_.isBoolean(enable)) {
	        throw "Expect boolean value for fetchWhenSave";
	      }
	      this._fetchWhenSave = enable;
	    },

	    /**
	     * Returns the object's objectId.
	     * @return {String} the objectId.
	     */
	    getObjectId: function getObjectId() {
	      return this.id;
	    },

	    /**
	     * Returns the object's createdAt attribute.
	     * @return {Date}
	     */
	    getCreatedAt: function getCreatedAt() {
	      return this.createdAt || this.get('createdAt');
	    },

	    /**
	     * Returns the object's updatedAt attribute.
	     * @return {Date}
	     */
	    getUpdatedAt: function getUpdatedAt() {
	      return this.updatedAt || this.get('updatedAt');
	    },

	    /**
	     * Returns a JSON version of the object suitable for saving to AV.
	     * @return {Object}
	     */
	    toJSON: function toJSON() {
	      var json = this._toFullJSON();
	      AV._arrayEach(["__type", "className"], function (key) {
	        delete json[key];
	      });
	      return json;
	    },

	    _toFullJSON: function _toFullJSON(seenObjects) {
	      var json = _.clone(this.attributes);
	      AV._objectEach(json, function (val, key) {
	        json[key] = AV._encode(val, seenObjects);
	      });
	      AV._objectEach(this._operations, function (val, key) {
	        json[key] = val;
	      });

	      if (_.has(this, "id")) {
	        json.objectId = this.id;
	      }
	      if (_.has(this, "createdAt")) {
	        if (_.isDate(this.createdAt)) {
	          json.createdAt = this.createdAt.toJSON();
	        } else {
	          json.createdAt = this.createdAt;
	        }
	      }

	      if (_.has(this, "updatedAt")) {
	        if (_.isDate(this.updatedAt)) {
	          json.updatedAt = this.updatedAt.toJSON();
	        } else {
	          json.updatedAt = this.updatedAt;
	        }
	      }
	      json.__type = "Object";
	      json.className = this.className;
	      return json;
	    },

	    /**
	     * Updates _hashedJSON to reflect the current state of this object.
	     * Adds any changed hash values to the set of pending changes.
	     */
	    _refreshCache: function _refreshCache() {
	      var self = this;
	      if (self._refreshingCache) {
	        return;
	      }
	      self._refreshingCache = true;
	      AV._objectEach(this.attributes, function (value, key) {
	        if (value instanceof AV.Object) {
	          value._refreshCache();
	        } else if (_.isObject(value)) {
	          if (self._resetCacheForKey(key)) {
	            self.set(key, new AV.Op.Set(value), { silent: true });
	          }
	        }
	      });
	      delete self._refreshingCache;
	    },

	    /**
	     * Returns true if this object has been modified since its last
	     * save/refresh.  If an attribute is specified, it returns true only if that
	     * particular attribute has been modified since the last save/refresh.
	     * @param {String} attr An attribute name (optional).
	     * @return {Boolean}
	     */
	    dirty: function dirty(attr) {
	      this._refreshCache();

	      var currentChanges = _.last(this._opSetQueue);

	      if (attr) {
	        return currentChanges[attr] ? true : false;
	      }
	      if (!this.id) {
	        return true;
	      }
	      if (_.keys(currentChanges).length > 0) {
	        return true;
	      }
	      return false;
	    },

	    /**
	     * Gets a Pointer referencing this Object.
	     */
	    _toPointer: function _toPointer() {
	      // if (!this.id) {
	      //   throw new Error("Can't serialize an unsaved AV.Object");
	      // }
	      return { __type: "Pointer",
	        className: this.className,
	        objectId: this.id };
	    },

	    /**
	     * Gets the value of an attribute.
	     * @param {String} attr The string name of an attribute.
	     */
	    get: function get(attr) {
	      return this.attributes[attr];
	    },

	    /**
	     * Gets a relation on the given class for the attribute.
	     * @param String attr The attribute to get the relation for.
	     */
	    relation: function relation(attr) {
	      var value = this.get(attr);
	      if (value) {
	        if (!(value instanceof AV.Relation)) {
	          throw "Called relation() on non-relation field " + attr;
	        }
	        value._ensureParentAndKey(this, attr);
	        return value;
	      } else {
	        return new AV.Relation(this, attr);
	      }
	    },

	    /**
	     * Gets the HTML-escaped value of an attribute.
	     */
	    escape: function escape(attr) {
	      var html = this._escapedAttributes[attr];
	      if (html) {
	        return html;
	      }
	      var val = this.attributes[attr];
	      var escaped;
	      if (AV._isNullOrUndefined(val)) {
	        escaped = '';
	      } else {
	        escaped = _.escape(val.toString());
	      }
	      this._escapedAttributes[attr] = escaped;
	      return escaped;
	    },

	    /**
	     * Returns <code>true</code> if the attribute contains a value that is not
	     * null or undefined.
	     * @param {String} attr The string name of the attribute.
	     * @return {Boolean}
	     */
	    has: function has(attr) {
	      return !AV._isNullOrUndefined(this.attributes[attr]);
	    },

	    /**
	     * Pulls "special" fields like objectId, createdAt, etc. out of attrs
	     * and puts them on "this" directly.  Removes them from attrs.
	     * @param attrs - A dictionary with the data for this AV.Object.
	     */
	    _mergeMagicFields: function _mergeMagicFields(attrs) {
	      // Check for changes of magic fields.
	      var model = this;
	      var specialFields = ["id", "objectId", "createdAt", "updatedAt"];
	      AV._arrayEach(specialFields, function (attr) {
	        if (attrs[attr]) {
	          if (attr === "objectId") {
	            model.id = attrs[attr];
	          } else if ((attr === "createdAt" || attr === "updatedAt") && !_.isDate(attrs[attr])) {
	            model[attr] = AV._parseDate(attrs[attr]);
	          } else {
	            model[attr] = attrs[attr];
	          }
	          delete attrs[attr];
	        }
	      });
	    },

	    /**
	     * Returns the json to be sent to the server.
	     */
	    _startSave: function _startSave() {
	      this._opSetQueue.push({});
	    },

	    /**
	     * Called when a save fails because of an error. Any changes that were part
	     * of the save need to be merged with changes made after the save. This
	     * might throw an exception is you do conflicting operations. For example,
	     * if you do:
	     *   object.set("foo", "bar");
	     *   object.set("invalid field name", "baz");
	     *   object.save();
	     *   object.increment("foo");
	     * then this will throw when the save fails and the client tries to merge
	     * "bar" with the +1.
	     */
	    _cancelSave: function _cancelSave() {
	      var self = this;
	      var failedChanges = _.first(this._opSetQueue);
	      this._opSetQueue = _.rest(this._opSetQueue);
	      var nextChanges = _.first(this._opSetQueue);
	      AV._objectEach(failedChanges, function (op, key) {
	        var op1 = failedChanges[key];
	        var op2 = nextChanges[key];
	        if (op1 && op2) {
	          nextChanges[key] = op2._mergeWithPrevious(op1);
	        } else if (op1) {
	          nextChanges[key] = op1;
	        }
	      });
	      this._saving = this._saving - 1;
	    },

	    /**
	     * Called when a save completes successfully. This merges the changes that
	     * were saved into the known server data, and overrides it with any data
	     * sent directly from the server.
	     */
	    _finishSave: function _finishSave(serverData) {
	      // Grab a copy of any object referenced by this object. These instances
	      // may have already been fetched, and we don't want to lose their data.
	      // Note that doing it like this means we will unify separate copies of the
	      // same object, but that's a risk we have to take.
	      var fetchedObjects = {};
	      AV._traverse(this.attributes, function (object) {
	        if (object instanceof AV.Object && object.id && object._hasData) {
	          fetchedObjects[object.id] = object;
	        }
	      });

	      var savedChanges = _.first(this._opSetQueue);
	      this._opSetQueue = _.rest(this._opSetQueue);
	      this._applyOpSet(savedChanges, this._serverData);
	      this._mergeMagicFields(serverData);
	      var self = this;
	      AV._objectEach(serverData, function (value, key) {
	        self._serverData[key] = AV._decode(key, value);

	        // Look for any objects that might have become unfetched and fix them
	        // by replacing their values with the previously observed values.
	        var fetched = AV._traverse(self._serverData[key], function (object) {
	          if (object instanceof AV.Object && fetchedObjects[object.id]) {
	            return fetchedObjects[object.id];
	          }
	        });
	        if (fetched) {
	          self._serverData[key] = fetched;
	        }
	      });
	      this._rebuildAllEstimatedData();
	      this._saving = this._saving - 1;
	    },

	    /**
	     * Called when a fetch or login is complete to set the known server data to
	     * the given object.
	     */
	    _finishFetch: function _finishFetch(serverData, hasData) {
	      // Clear out any changes the user might have made previously.
	      this._opSetQueue = [{}];

	      // Bring in all the new server data.
	      this._mergeMagicFields(serverData);
	      var self = this;
	      AV._objectEach(serverData, function (value, key) {
	        self._serverData[key] = AV._decode(key, value);
	      });

	      // Refresh the attributes.
	      this._rebuildAllEstimatedData();

	      // Clear out the cache of mutable containers.
	      this._refreshCache();
	      this._opSetQueue = [{}];

	      this._hasData = hasData;
	    },

	    /**
	     * Applies the set of AV.Op in opSet to the object target.
	     */
	    _applyOpSet: function _applyOpSet(opSet, target) {
	      var self = this;
	      AV._objectEach(opSet, function (change, key) {
	        target[key] = change._estimate(target[key], self, key);
	        if (target[key] === AV.Op._UNSET) {
	          delete target[key];
	        }
	      });
	    },

	    /**
	     * Replaces the cached value for key with the current value.
	     * Returns true if the new value is different than the old value.
	     */
	    _resetCacheForKey: function _resetCacheForKey(key) {
	      var value = this.attributes[key];
	      if (_.isObject(value) && !(value instanceof AV.Object) && !(value instanceof AV.File)) {

	        value = value.toJSON ? value.toJSON() : value;
	        var json = JSON.stringify(value);
	        if (this._hashedJSON[key] !== json) {
	          var wasSet = !!this._hashedJSON[key];
	          this._hashedJSON[key] = json;
	          return wasSet;
	        }
	      }
	      return false;
	    },

	    /**
	     * Populates attributes[key] by starting with the last known data from the
	     * server, and applying all of the local changes that have been made to that
	     * key since then.
	     */
	    _rebuildEstimatedDataForKey: function _rebuildEstimatedDataForKey(key) {
	      var self = this;
	      delete this.attributes[key];
	      if (this._serverData[key]) {
	        this.attributes[key] = this._serverData[key];
	      }
	      AV._arrayEach(this._opSetQueue, function (opSet) {
	        var op = opSet[key];
	        if (op) {
	          self.attributes[key] = op._estimate(self.attributes[key], self, key);
	          if (self.attributes[key] === AV.Op._UNSET) {
	            delete self.attributes[key];
	          } else {
	            self._resetCacheForKey(key);
	          }
	        }
	      });
	    },

	    /**
	     * Populates attributes by starting with the last known data from the
	     * server, and applying all of the local changes that have been made since
	     * then.
	     */
	    _rebuildAllEstimatedData: function _rebuildAllEstimatedData() {
	      var self = this;

	      var previousAttributes = _.clone(this.attributes);

	      this.attributes = _.clone(this._serverData);
	      AV._arrayEach(this._opSetQueue, function (opSet) {
	        self._applyOpSet(opSet, self.attributes);
	        AV._objectEach(opSet, function (op, key) {
	          self._resetCacheForKey(key);
	        });
	      });

	      // Trigger change events for anything that changed because of the fetch.
	      AV._objectEach(previousAttributes, function (oldValue, key) {
	        if (self.attributes[key] !== oldValue) {
	          self.trigger('change:' + key, self, self.attributes[key], {});
	        }
	      });
	      AV._objectEach(this.attributes, function (newValue, key) {
	        if (!_.has(previousAttributes, key)) {
	          self.trigger('change:' + key, self, newValue, {});
	        }
	      });
	    },

	    /**
	     * Sets a hash of model attributes on the object, firing
	     * <code>"change"</code> unless you choose to silence it.
	     *
	     * <p>You can call it with an object containing keys and values, or with one
	     * key and value.  For example:<pre>
	     *   gameTurn.set({
	     *     player: player1,
	     *     diceRoll: 2
	     *   }, {
	     *     error: function(gameTurnAgain, error) {
	     *       // The set failed validation.
	     *     }
	     *   });
	     *
	     *   game.set("currentPlayer", player2, {
	     *     error: function(gameTurnAgain, error) {
	     *       // The set failed validation.
	     *     }
	     *   });
	     *
	     *   game.set("finished", true);</pre></p>
	     *
	     * @param {String} key The key to set.
	     * @param {} value The value to give it.
	     * @param {Object} options A set of Backbone-like options for the set.
	     *     The only supported options are <code>silent</code>,
	     *     <code>error</code>, and <code>promise</code>.
	     * @return {Boolean} true if the set succeeded.
	     * @see AV.Object#validate
	     * @see AV.Error
	     */
	    set: function set(key, value, options) {
	      var attrs, attr;
	      if (_.isObject(key) || AV._isNullOrUndefined(key)) {
	        attrs = key;
	        AV._objectEach(attrs, function (v, k) {
	          attrs[k] = AV._decode(k, v);
	        });
	        options = value;
	      } else {
	        attrs = {};
	        attrs[key] = AV._decode(key, value);
	      }

	      // Extract attributes and options.
	      options = options || {};
	      if (!attrs) {
	        return this;
	      }
	      if (attrs instanceof AV.Object) {
	        attrs = attrs.attributes;
	      }

	      // If the unset option is used, every attribute should be a Unset.
	      if (options.unset) {
	        AV._objectEach(attrs, function (unused_value, key) {
	          attrs[key] = new AV.Op.Unset();
	        });
	      }

	      // Apply all the attributes to get the estimated values.
	      var dataToValidate = _.clone(attrs);
	      var self = this;
	      AV._objectEach(dataToValidate, function (value, key) {
	        if (value instanceof AV.Op) {
	          dataToValidate[key] = value._estimate(self.attributes[key], self, key);
	          if (dataToValidate[key] === AV.Op._UNSET) {
	            delete dataToValidate[key];
	          }
	        }
	      });

	      // Run validation.
	      if (!this._validate(attrs, options)) {
	        return false;
	      }

	      this._mergeMagicFields(attrs);

	      options.changes = {};
	      var escaped = this._escapedAttributes;
	      var prev = this._previousAttributes || {};

	      // Update attributes.
	      AV._arrayEach(_.keys(attrs), function (attr) {
	        var val = attrs[attr];

	        // If this is a relation object we need to set the parent correctly,
	        // since the location where it was parsed does not have access to
	        // this object.
	        if (val instanceof AV.Relation) {
	          val.parent = self;
	        }

	        if (!(val instanceof AV.Op)) {
	          val = new AV.Op.Set(val);
	        }

	        // See if this change will actually have any effect.
	        var isRealChange = true;
	        if (val instanceof AV.Op.Set && _.isEqual(self.attributes[attr], val.value)) {
	          isRealChange = false;
	        }

	        if (isRealChange) {
	          delete escaped[attr];
	          if (options.silent) {
	            self._silent[attr] = true;
	          } else {
	            options.changes[attr] = true;
	          }
	        }

	        var currentChanges = _.last(self._opSetQueue);
	        currentChanges[attr] = val._mergeWithPrevious(currentChanges[attr]);
	        self._rebuildEstimatedDataForKey(attr);

	        if (isRealChange) {
	          self.changed[attr] = self.attributes[attr];
	          if (!options.silent) {
	            self._pending[attr] = true;
	          }
	        } else {
	          delete self.changed[attr];
	          delete self._pending[attr];
	        }
	      });

	      if (!options.silent) {
	        this.change(options);
	      }
	      return this;
	    },

	    /**
	     * Remove an attribute from the model, firing <code>"change"</code> unless
	     * you choose to silence it. This is a noop if the attribute doesn't
	     * exist.
	     */
	    unset: function unset(attr, options) {
	      options = options || {};
	      options.unset = true;
	      return this.set(attr, null, options);
	    },

	    /**
	     * Atomically increments the value of the given attribute the next time the
	     * object is saved. If no amount is specified, 1 is used by default.
	     *
	     * @param attr {String} The key.
	     * @param amount {Number} The amount to increment by.
	     */
	    increment: function increment(attr, amount) {
	      if (_.isUndefined(amount) || _.isNull(amount)) {
	        amount = 1;
	      }
	      return this.set(attr, new AV.Op.Increment(amount));
	    },

	    /**
	     * Atomically add an object to the end of the array associated with a given
	     * key.
	     * @param attr {String} The key.
	     * @param item {} The item to add.
	     */
	    add: function add(attr, item) {
	      return this.set(attr, new AV.Op.Add([item]));
	    },

	    /**
	     * Atomically add an object to the array associated with a given key, only
	     * if it is not already present in the array. The position of the insert is
	     * not guaranteed.
	     *
	     * @param attr {String} The key.
	     * @param item {} The object to add.
	     */
	    addUnique: function addUnique(attr, item) {
	      return this.set(attr, new AV.Op.AddUnique([item]));
	    },

	    /**
	     * Atomically remove all instances of an object from the array associated
	     * with a given key.
	     *
	     * @param attr {String} The key.
	     * @param item {} The object to remove.
	     */
	    remove: function remove(attr, item) {
	      return this.set(attr, new AV.Op.Remove([item]));
	    },

	    /**
	     * Returns an instance of a subclass of AV.Op describing what kind of
	     * modification has been performed on this field since the last time it was
	     * saved. For example, after calling object.increment("x"), calling
	     * object.op("x") would return an instance of AV.Op.Increment.
	     *
	     * @param attr {String} The key.
	     * @returns {AV.Op} The operation, or undefined if none.
	     */
	    op: function op(attr) {
	      return _.last(this._opSetQueue)[attr];
	    },

	    /**
	     * Clear all attributes on the model, firing <code>"change"</code> unless
	     * you choose to silence it.
	     */
	    clear: function clear(options) {
	      options = options || {};
	      options.unset = true;
	      var keysToClear = _.extend(this.attributes, this._operations);
	      return this.set(keysToClear, options);
	    },

	    /**
	     * Returns a JSON-encoded set of operations to be sent with the next save
	     * request.
	     */
	    _getSaveJSON: function _getSaveJSON() {
	      var json = _.clone(_.first(this._opSetQueue));
	      AV._objectEach(json, function (op, key) {
	        json[key] = op.toJSON();
	      });
	      return json;
	    },

	    /**
	     * Returns true if this object can be serialized for saving.
	     */
	    _canBeSerialized: function _canBeSerialized() {
	      return AV.Object._canBeSerializedAsValue(this.attributes);
	    },

	    /**
	     * Fetch the model from the server. If the server's representation of the
	     * model differs from its current attributes, they will be overriden,
	     * triggering a <code>"change"</code> event.
	     * @param {Object} fetchOptions Optional options to set 'keys' and
	     *      'include' option.
	     * @param {Object} options Optional Backbone-like options object to be
	     *     passed in to set.
	     * @return {AV.Promise} A promise that is fulfilled when the fetch
	     *     completes.
	     */
	    fetch: function fetch() {
	      var options = null;
	      var fetchOptions = {};
	      if (arguments.length === 1) {
	        options = arguments[0];
	      } else if (arguments.length === 2) {
	        fetchOptions = arguments[0];
	        options = arguments[1];
	      }

	      var self = this;
	      var request = AV._request("classes", this.className, this.id, 'GET', fetchOptions);
	      return request.then(function (response, status, xhr) {
	        self._finishFetch(self.parse(response, status, xhr), true);
	        return self;
	      })._thenRunCallbacks(options, this);
	    },

	    /**
	     * Set a hash of model attributes, and save the model to the server.
	     * updatedAt will be updated when the request returns.
	     * You can either call it as:<pre>
	     *   object.save();</pre>
	     * or<pre>
	     *   object.save(null, options);</pre>
	     * or<pre>
	     *   object.save(attrs, options);</pre>
	     * or<pre>
	     *   object.save(key, value, options);</pre>
	     *
	     * For example, <pre>
	     *   gameTurn.save({
	     *     player: "Jake Cutter",
	     *     diceRoll: 2
	     *   }, {
	     *     success: function(gameTurnAgain) {
	     *       // The save was successful.
	     *     },
	     *     error: function(gameTurnAgain, error) {
	     *       // The save failed.  Error is an instance of AV.Error.
	     *     }
	     *   });</pre>
	     * or with promises:<pre>
	     *   gameTurn.save({
	     *     player: "Jake Cutter",
	     *     diceRoll: 2
	     *   }).then(function(gameTurnAgain) {
	     *     // The save was successful.
	     *   }, function(error) {
	     *     // The save failed.  Error is an instance of AV.Error.
	     *   });</pre>
	     *
	     * @param {Object} options Optional Backbone-like options object to be passed in to set.
	     * @param {Boolean} options.fetchWhenSave fetch and update object after save succeeded
	     * @param {AV.Query} options.query Save object only when it matches the query
	     * @return {AV.Promise} A promise that is fulfilled when the save
	     *     completes.
	     * @see AV.Error
	     */
	    save: function save(arg1, arg2, arg3) {
	      var i, attrs, current, options, saved;
	      if (_.isObject(arg1) || AV._isNullOrUndefined(arg1)) {
	        attrs = arg1;
	        options = arg2;
	      } else {
	        attrs = {};
	        attrs[arg1] = arg2;
	        options = arg3;
	      }

	      // Make save({ success: function() {} }) work.
	      if (!options && attrs) {
	        var extra_keys = _.reject(attrs, function (value, key) {
	          return _.include(["success", "error", "wait"], key);
	        });
	        if (extra_keys.length === 0) {
	          var all_functions = true;
	          if (_.has(attrs, "success") && !_.isFunction(attrs.success)) {
	            all_functions = false;
	          }
	          if (_.has(attrs, "error") && !_.isFunction(attrs.error)) {
	            all_functions = false;
	          }
	          if (all_functions) {
	            // This attrs object looks like it's really an options object,
	            // and there's no other options object, so let's just use it.
	            return this.save(null, attrs);
	          }
	        }
	      }

	      options = _.clone(options) || {};
	      if (options.wait) {
	        current = _.clone(this.attributes);
	      }

	      var setOptions = _.clone(options) || {};
	      if (setOptions.wait) {
	        setOptions.silent = true;
	      }
	      var setError;
	      setOptions.error = function (model, error) {
	        setError = error;
	      };
	      if (attrs && !this.set(attrs, setOptions)) {
	        return AV.Promise.error(setError)._thenRunCallbacks(options, this);
	      }

	      var model = this;

	      // If there is any unsaved child, save it first.
	      model._refreshCache();

	      var unsavedChildren = [];
	      var unsavedFiles = [];
	      AV.Object._findUnsavedChildren(model.attributes, unsavedChildren, unsavedFiles);
	      if (unsavedChildren.length + unsavedFiles.length > 0) {
	        return AV.Object._deepSaveAsync(this.attributes, model).then(function () {
	          return model.save(null, options);
	        }, function (error) {
	          return AV.Promise.error(error)._thenRunCallbacks(options, model);
	        });
	      }

	      this._startSave();
	      this._saving = (this._saving || 0) + 1;

	      this._allPreviousSaves = this._allPreviousSaves || AV.Promise.as();
	      this._allPreviousSaves = this._allPreviousSaves._continueWith(function () {
	        var method = model.id ? 'PUT' : 'POST';

	        var json = model._getSaveJSON();

	        if (model._fetchWhenSave) {
	          //Sepcial-case fetchWhenSave when updating object.
	          json._fetchWhenSave = true;
	        }

	        if (options.fetchWhenSave) {
	          json._fetchWhenSave = true;
	        }
	        if (options.query) {
	          var queryJSON;
	          if (typeof options.query.toJSON === 'function') {
	            queryJSON = options.query.toJSON();
	            if (queryJSON) {
	              json._where = queryJSON.where;
	            }
	          }
	          if (!json._where) {
	            var error = new Error('options.query is not an AV.Query');
	            return AV.Promise.error(error)._thenRunCallbacks(options, model);
	          }
	        }

	        var route = "classes";
	        var className = model.className;
	        if (model.className === "_User" && !model.id) {
	          // Special-case user sign-up.
	          route = "users";
	          className = null;
	        }
	        //hook makeRequest in options.
	        var makeRequest = options._makeRequest || AV._request;
	        var request = makeRequest(route, className, model.id, method, json);

	        request = request.then(function (resp, status, xhr) {
	          var serverAttrs = model.parse(resp, status, xhr);
	          if (options.wait) {
	            serverAttrs = _.extend(attrs || {}, serverAttrs);
	          }
	          model._finishSave(serverAttrs);
	          if (options.wait) {
	            model.set(current, setOptions);
	          }
	          return model;
	        }, function (error) {
	          model._cancelSave();
	          return AV.Promise.error(error);
	        })._thenRunCallbacks(options, model);

	        return request;
	      });
	      return this._allPreviousSaves;
	    },

	    /**
	     * Destroy this model on the server if it was already persisted.
	     * Optimistically removes the model from its collection, if it has one.
	     * If `wait: true` is passed, waits for the server to respond
	     * before removal.
	     *
	     * @return {AV.Promise} A promise that is fulfilled when the destroy
	     *     completes.
	     */
	    destroy: function destroy(options) {
	      options = options || {};
	      var model = this;

	      var triggerDestroy = function triggerDestroy() {
	        model.trigger('destroy', model, model.collection, options);
	      };

	      if (!this.id) {
	        return triggerDestroy();
	      }

	      if (!options.wait) {
	        triggerDestroy();
	      }

	      var request = AV._request("classes", this.className, this.id, 'DELETE');
	      return request.then(function () {
	        if (options.wait) {
	          triggerDestroy();
	        }
	        return model;
	      })._thenRunCallbacks(options, this);
	    },

	    /**
	     * Converts a response into the hash of attributes to be set on the model.
	     * @ignore
	     */
	    parse: function parse(resp, status, xhr) {
	      var output = _.clone(resp);
	      _(["createdAt", "updatedAt"]).each(function (key) {
	        if (output[key]) {
	          output[key] = AV._parseDate(output[key]);
	        }
	      });
	      if (!output.updatedAt) {
	        output.updatedAt = output.createdAt;
	      }
	      if (status) {
	        this._existed = status !== 201;
	      }
	      return output;
	    },

	    /**
	     * Creates a new model with identical attributes to this one.
	     * @return {AV.Object}
	     */
	    clone: function clone() {
	      return new this.constructor(this.attributes);
	    },

	    /**
	     * Returns true if this object has never been saved to AV.
	     * @return {Boolean}
	     */
	    isNew: function isNew() {
	      return !this.id;
	    },

	    /**
	     * Call this method to manually fire a `"change"` event for this model and
	     * a `"change:attribute"` event for each changed attribute.
	     * Calling this will cause all objects observing the model to update.
	     */
	    change: function change(options) {
	      options = options || {};
	      var changing = this._changing;
	      this._changing = true;

	      // Silent changes become pending changes.
	      var self = this;
	      AV._objectEach(this._silent, function (attr) {
	        self._pending[attr] = true;
	      });

	      // Silent changes are triggered.
	      var changes = _.extend({}, options.changes, this._silent);
	      this._silent = {};
	      AV._objectEach(changes, function (unused_value, attr) {
	        self.trigger('change:' + attr, self, self.get(attr), options);
	      });
	      if (changing) {
	        return this;
	      }

	      // This is to get around lint not letting us make a function in a loop.
	      var deleteChanged = function deleteChanged(value, attr) {
	        if (!self._pending[attr] && !self._silent[attr]) {
	          delete self.changed[attr];
	        }
	      };

	      // Continue firing `"change"` events while there are pending changes.
	      while (!_.isEmpty(this._pending)) {
	        this._pending = {};
	        this.trigger('change', this, options);
	        // Pending and silent changes still remain.
	        AV._objectEach(this.changed, deleteChanged);
	        self._previousAttributes = _.clone(this.attributes);
	      }

	      this._changing = false;
	      return this;
	    },

	    /**
	     * Returns true if this object was created by the AV server when the
	     * object might have already been there (e.g. in the case of a Facebook
	     * login)
	     */
	    existed: function existed() {
	      return this._existed;
	    },

	    /**
	     * Determine if the model has changed since the last <code>"change"</code>
	     * event.  If you specify an attribute name, determine if that attribute
	     * has changed.
	     * @param {String} attr Optional attribute name
	     * @return {Boolean}
	     */
	    hasChanged: function hasChanged(attr) {
	      if (!arguments.length) {
	        return !_.isEmpty(this.changed);
	      }
	      return this.changed && _.has(this.changed, attr);
	    },

	    /**
	     * Returns an object containing all the attributes that have changed, or
	     * false if there are no changed attributes. Useful for determining what
	     * parts of a view need to be updated and/or what attributes need to be
	     * persisted to the server. Unset attributes will be set to undefined.
	     * You can also pass an attributes object to diff against the model,
	     * determining if there *would be* a change.
	     */
	    changedAttributes: function changedAttributes(diff) {
	      if (!diff) {
	        return this.hasChanged() ? _.clone(this.changed) : false;
	      }
	      var changed = {};
	      var old = this._previousAttributes;
	      AV._objectEach(diff, function (diffVal, attr) {
	        if (!_.isEqual(old[attr], diffVal)) {
	          changed[attr] = diffVal;
	        }
	      });
	      return changed;
	    },

	    /**
	     * Gets the previous value of an attribute, recorded at the time the last
	     * <code>"change"</code> event was fired.
	     * @param {String} attr Name of the attribute to get.
	     */
	    previous: function previous(attr) {
	      if (!arguments.length || !this._previousAttributes) {
	        return null;
	      }
	      return this._previousAttributes[attr];
	    },

	    /**
	     * Gets all of the attributes of the model at the time of the previous
	     * <code>"change"</code> event.
	     * @return {Object}
	     */
	    previousAttributes: function previousAttributes() {
	      return _.clone(this._previousAttributes);
	    },

	    /**
	     * Checks if the model is currently in a valid state. It's only possible to
	     * get into an *invalid* state if you're using silent changes.
	     * @return {Boolean}
	     */
	    isValid: function isValid() {
	      return !this.validate(this.attributes);
	    },

	    /**
	     * You should not call this function directly unless you subclass
	     * <code>AV.Object</code>, in which case you can override this method
	     * to provide additional validation on <code>set</code> and
	     * <code>save</code>.  Your implementation should return
	     *
	     * @param {Object} attrs The current data to validate.
	     * @param {Object} options A Backbone-like options object.
	     * @return {} False if the data is valid.  An error object otherwise.
	     * @see AV.Object#set
	     */
	    validate: function validate(attrs, options) {
	      if (_.has(attrs, "ACL") && !(attrs.ACL instanceof AV.ACL)) {
	        return new AV.Error(AV.Error.OTHER_CAUSE, "ACL must be a AV.ACL.");
	      }
	      return false;
	    },

	    /**
	     * Run validation against a set of incoming attributes, returning `true`
	     * if all is well. If a specific `error` callback has been passed,
	     * call that instead of firing the general `"error"` event.
	     */
	    _validate: function _validate(attrs, options) {
	      if (options.silent || !this.validate) {
	        return true;
	      }
	      attrs = _.extend({}, this.attributes, attrs);
	      var error = this.validate(attrs, options);
	      if (!error) {
	        return true;
	      }
	      if (options && options.error) {
	        options.error(this, error, options);
	      } else {
	        this.trigger('error', this, error, options);
	      }
	      return false;
	    },

	    /**
	     * Returns the ACL for this object.
	     * @returns {AV.ACL} An instance of AV.ACL.
	     * @see AV.Object#get
	     */
	    getACL: function getACL() {
	      return this.get("ACL");
	    },

	    /**
	     * Sets the ACL to be used for this object.
	     * @param {AV.ACL} acl An instance of AV.ACL.
	     * @param {Object} options Optional Backbone-like options object to be
	     *     passed in to set.
	     * @return {Boolean} Whether the set passed validation.
	     * @see AV.Object#set
	     */
	    setACL: function setACL(acl, options) {
	      return this.set("ACL", acl, options);
	    }

	  });

	  /**
	   * Creates an instance of a subclass of AV.Object for the give classname
	   * and id.
	   * @param  {String} className The name of the AV class backing this model.
	   * @param {String} id The object id of this model.
	   * @return {AV.Object} A new subclass instance of AV.Object.
	   */
	  AV.Object.createWithoutData = function (className, id, hasData) {
	    var result = new AV.Object(className);
	    result.id = id;
	    result._hasData = hasData;
	    return result;
	  };
	  /**
	   * Delete objects in batch.The objects className must be the same.
	   * @param {Array} The ParseObject array to be deleted.
	   * @param {Object} options Standard options object with success and error
	   *     callbacks.
	   * @return {AV.Promise} A promise that is fulfilled when the save
	   *     completes.
	   */
	  AV.Object.destroyAll = function (objects, options) {
	    if (objects == null || objects.length == 0) {
	      return AV.Promise.as()._thenRunCallbacks(options);
	    }
	    var className = objects[0].className;
	    var id = "";
	    var wasFirst = true;
	    objects.forEach(function (obj) {
	      if (obj.className != className) throw "AV.Object.destroyAll requires the argument object array's classNames must be the same";
	      if (!obj.id) throw "Could not delete unsaved object";
	      if (wasFirst) {
	        id = obj.id;
	        wasFirst = false;
	      } else {
	        id = id + ',' + obj.id;
	      }
	    });
	    var request = AV._request("classes", className, id, 'DELETE');
	    return request._thenRunCallbacks(options);
	  };

	  /**
	   * Returns the appropriate subclass for making new instances of the given
	   * className string.
	   */
	  AV.Object._getSubclass = function (className) {
	    if (!_.isString(className)) {
	      throw "AV.Object._getSubclass requires a string argument.";
	    }
	    var ObjectClass = AV.Object._classMap[className];
	    if (!ObjectClass) {
	      ObjectClass = AV.Object.extend(className);
	      AV.Object._classMap[className] = ObjectClass;
	    }
	    return ObjectClass;
	  };

	  /**
	   * Creates an instance of a subclass of AV.Object for the given classname.
	   */
	  AV.Object._create = function (className, attributes, options) {
	    var ObjectClass = AV.Object._getSubclass(className);
	    return new ObjectClass(attributes, options);
	  };

	  // Set up a map of className to class so that we can create new instances of
	  // AV Objects from JSON automatically.
	  AV.Object._classMap = {};

	  AV.Object._extend = AV._extend;

	  /**
	   * Creates a new model with defined attributes,
	   * It's the same with
	   * <pre>
	   *   new AV.Object(attributes, options);
	   *  </pre>
	   * @param {Object} attributes The initial set of data to store in the object.
	   * @param {Object} options A set of Backbone-like options for creating the
	   *     object.  The only option currently supported is "collection".
	   * @return {AV.Object}
	   * @since v0.4.4
	   * @see AV.Object
	   * @see AV.Object.extend
	   */
	  AV.Object['new'] = function (attributes, options) {
	    return new AV.Object(attributes, options);
	  };

	  /**
	   * Creates a new subclass of AV.Object for the given AV class name.
	   *
	   * <p>Every extension of a AV class will inherit from the most recent
	   * previous extension of that class. When a AV.Object is automatically
	   * created by parsing JSON, it will use the most recent extension of that
	   * class.</p>
	   *
	   * <p>You should call either:<pre>
	   *     var MyClass = AV.Object.extend("MyClass", {
	   *         <i>Instance properties</i>
	   *     }, {
	   *         <i>Class properties</i>
	   *     });</pre>
	   * or, for Backbone compatibility:<pre>
	   *     var MyClass = AV.Object.extend({
	   *         className: "MyClass",
	   *         <i>Other instance properties</i>
	   *     }, {
	   *         <i>Class properties</i>
	   *     });</pre></p>
	   *
	   * @param {String} className The name of the AV class backing this model.
	   * @param {Object} protoProps Instance properties to add to instances of the
	   *     class returned from this method.
	   * @param {Object} classProps Class properties to add the class returned from
	   *     this method.
	   * @return {Class} A new subclass of AV.Object.
	   */
	  AV.Object.extend = function (className, protoProps, classProps) {
	    // Handle the case with only two args.
	    if (!_.isString(className)) {
	      if (className && _.has(className, "className")) {
	        return AV.Object.extend(className.className, className, protoProps);
	      } else {
	        throw new Error("AV.Object.extend's first argument should be the className.");
	      }
	    }

	    // If someone tries to subclass "User", coerce it to the right type.
	    if (className === "User") {
	      className = "_User";
	    }

	    var NewClassObject = null;
	    if (_.has(AV.Object._classMap, className)) {
	      var OldClassObject = AV.Object._classMap[className];
	      // This new subclass has been told to extend both from "this" and from
	      // OldClassObject. This is multiple inheritance, which isn't supported.
	      // For now, let's just pick one.
	      NewClassObject = OldClassObject._extend(protoProps, classProps);
	    } else {
	      protoProps = protoProps || {};
	      protoProps.className = className;
	      NewClassObject = this._extend(protoProps, classProps);
	    }
	    // Extending a subclass should reuse the classname automatically.
	    NewClassObject.extend = function (arg0) {
	      if (_.isString(arg0) || arg0 && _.has(arg0, "className")) {
	        return AV.Object.extend.apply(NewClassObject, arguments);
	      }
	      var newArguments = [className].concat(AV._.toArray(arguments));
	      return AV.Object.extend.apply(NewClassObject, newArguments);
	    };
	    NewClassObject['new'] = function (attributes, options) {
	      return new NewClassObject(attributes, options);
	    };
	    AV.Object._classMap[className] = NewClassObject;
	    return NewClassObject;
	  };

	  AV.Object._findUnsavedChildren = function (object, children, files) {
	    AV._traverse(object, function (object) {
	      if (object instanceof AV.Object) {
	        object._refreshCache();
	        if (object.dirty()) {
	          children.push(object);
	        }
	        return;
	      }

	      if (object instanceof AV.File) {
	        if (!object.url() && !object.id) {
	          files.push(object);
	        }
	        return;
	      }
	    });
	  };

	  AV.Object._canBeSerializedAsValue = function (object) {
	    var canBeSerializedAsValue = true;

	    if (object instanceof AV.Object || object instanceof AV.File) {
	      canBeSerializedAsValue = !!object.id;
	    } else if (_.isArray(object)) {
	      AV._arrayEach(object, function (child) {
	        if (!AV.Object._canBeSerializedAsValue(child)) {
	          canBeSerializedAsValue = false;
	        }
	      });
	    } else if (_.isObject(object)) {
	      AV._objectEach(object, function (child) {
	        if (!AV.Object._canBeSerializedAsValue(child)) {
	          canBeSerializedAsValue = false;
	        }
	      });
	    }

	    return canBeSerializedAsValue;
	  };

	  AV.Object._deepSaveAsync = function (object, model) {
	    var unsavedChildren = [];
	    var unsavedFiles = [];
	    AV.Object._findUnsavedChildren(object, unsavedChildren, unsavedFiles);
	    if (model) {
	      unsavedChildren = _.filter(unsavedChildren, function (object) {
	        return object != model;
	      });
	    }

	    var promise = AV.Promise.as();
	    _.each(unsavedFiles, function (file) {
	      promise = promise.then(function () {
	        return file.save();
	      });
	    });

	    var objects = _.uniq(unsavedChildren);
	    var remaining = _.uniq(objects);

	    return promise.then(function () {
	      return AV.Promise._continueWhile(function () {
	        return remaining.length > 0;
	      }, function () {

	        // Gather up all the objects that can be saved in this batch.
	        var batch = [];
	        var newRemaining = [];
	        AV._arrayEach(remaining, function (object) {
	          // Limit batches to 20 objects.
	          if (batch.length > 20) {
	            newRemaining.push(object);
	            return;
	          }

	          if (object._canBeSerialized()) {
	            batch.push(object);
	          } else {
	            newRemaining.push(object);
	          }
	        });
	        remaining = newRemaining;

	        // If we can't save any objects, there must be a circular reference.
	        if (batch.length === 0) {
	          return AV.Promise.error(new AV.Error(AV.Error.OTHER_CAUSE, "Tried to save a batch with a cycle."));
	        }

	        // Reserve a spot in every object's save queue.
	        var readyToStart = AV.Promise.when(_.map(batch, function (object) {
	          return object._allPreviousSaves || AV.Promise.as();
	        }));
	        var batchFinished = new AV.Promise();
	        AV._arrayEach(batch, function (object) {
	          object._allPreviousSaves = batchFinished;
	        });

	        // Save a single batch, whether previous saves succeeded or failed.
	        return readyToStart._continueWith(function () {
	          return AV._request("batch", null, null, "POST", {
	            requests: _.map(batch, function (object) {
	              var json = object._getSaveJSON();
	              var method = "POST";

	              var path = "/1.1/classes/" + object.className;
	              if (object.id) {
	                path = path + "/" + object.id;
	                method = "PUT";
	              }

	              object._startSave();

	              return {
	                method: method,
	                path: path,
	                body: json
	              };
	            })

	          }).then(function (response, status, xhr) {
	            var error;
	            AV._arrayEach(batch, function (object, i) {
	              if (response[i].success) {
	                object._finishSave(object.parse(response[i].success, status, xhr));
	              } else {
	                error = error || response[i].error;
	                object._cancelSave();
	              }
	            });
	            if (error) {
	              return AV.Promise.error(new AV.Error(error.code, error.error));
	            }
	          }).then(function (results) {
	            batchFinished.resolve(results);
	            return results;
	          }, function (error) {
	            batchFinished.reject(error);
	            return AV.Promise.error(error);
	          });
	        });
	      });
	    }).then(function () {
	      return object;
	    });
	  };
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(18);

	module.exports = function (AV) {
	  /**
	   * Represents a Role on the AV server. Roles represent groupings of
	   * Users for the purposes of granting permissions (e.g. specifying an ACL
	   * for an Object). Roles are specified by their sets of child users and
	   * child roles, all of which are granted any permissions that the parent
	   * role has.
	   *
	   * <p>Roles must have a name (which cannot be changed after creation of the
	   * role), and must specify an ACL.</p>
	   * @class
	   * A AV.Role is a local representation of a role persisted to the AV
	   * cloud.
	   */
	  AV.Role = AV.Object.extend("_Role", /** @lends AV.Role.prototype */{
	    // Instance Methods

	    /**
	     * Constructs a new AVRole with the given name and ACL.
	     *
	     * @param {String} name The name of the Role to create.
	     * @param {AV.ACL} [acl] The ACL for this role. if absent, the default ACL
	     *    `{'*': { read: true }}` will be used.
	     */
	    constructor: function constructor(name, acl) {
	      if (_.isString(name)) {
	        AV.Object.prototype.constructor.call(this, null, null);
	        this.setName(name);
	      } else {
	        AV.Object.prototype.constructor.call(this, name, acl);
	      }
	      if (acl === undefined) {
	        var defaultAcl = new AV.ACL();
	        defaultAcl.setPublicReadAccess(true);
	        if (!this.getACL()) {
	          this.setACL(defaultAcl);
	        }
	      } else if (!(acl instanceof AV.ACL)) {
	        throw new TypeError('acl must be an instance of AV.ACL');
	      } else {
	        this.setACL(acl);
	      }
	    },

	    /**
	     * Gets the name of the role.  You can alternatively call role.get("name")
	     *
	     * @return {String} the name of the role.
	     */
	    getName: function getName() {
	      return this.get("name");
	    },

	    /**
	     * Sets the name for a role. This value must be set before the role has
	     * been saved to the server, and cannot be set once the role has been
	     * saved.
	     *
	     * <p>
	     *   A role's name can only contain alphanumeric characters, _, -, and
	     *   spaces.
	     * </p>
	     *
	     * <p>This is equivalent to calling role.set("name", name)</p>
	     *
	     * @param {String} name The name of the role.
	     * @param {Object} options Standard options object with success and error
	     *     callbacks.
	     */
	    setName: function setName(name, options) {
	      return this.set("name", name, options);
	    },

	    /**
	     * Gets the AV.Relation for the AV.Users that are direct
	     * children of this role. These users are granted any privileges that this
	     * role has been granted (e.g. read or write access through ACLs). You can
	     * add or remove users from the role through this relation.
	     *
	     * <p>This is equivalent to calling role.relation("users")</p>
	     *
	     * @return {AV.Relation} the relation for the users belonging to this
	     *     role.
	     */
	    getUsers: function getUsers() {
	      return this.relation("users");
	    },

	    /**
	     * Gets the AV.Relation for the AV.Roles that are direct
	     * children of this role. These roles' users are granted any privileges that
	     * this role has been granted (e.g. read or write access through ACLs). You
	     * can add or remove child roles from this role through this relation.
	     *
	     * <p>This is equivalent to calling role.relation("roles")</p>
	     *
	     * @return {AV.Relation} the relation for the roles belonging to this
	     *     role.
	     */
	    getRoles: function getRoles() {
	      return this.relation("roles");
	    },

	    /**
	     * @ignore
	     */
	    validate: function validate(attrs, options) {
	      if ("name" in attrs && attrs.name !== this.getName()) {
	        var newName = attrs.name;
	        if (this.id && this.id !== attrs.objectId) {
	          // Check to see if the objectId being set matches this.id.
	          // This happens during a fetch -- the id is set before calling fetch.
	          // Let the name be set in this case.
	          return new AV.Error(AV.Error.OTHER_CAUSE, "A role's name can only be set before it has been saved.");
	        }
	        if (!_.isString(newName)) {
	          return new AV.Error(AV.Error.OTHER_CAUSE, "A role's name must be a String.");
	        }
	        if (!/^[0-9a-zA-Z\-_ ]+$/.test(newName)) {
	          return new AV.Error(AV.Error.OTHER_CAUSE, "A role's name can only contain alphanumeric characters, _," + " -, and spaces.");
	        }
	      }
	      if (AV.Object.prototype.validate) {
	        return AV.Object.prototype.validate.call(this, attrs, options);
	      }
	      return false;
	    }
	  });
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(18);

	module.exports = function (AV) {
	  /**
	   * Creates a new instance with the given models and options.  Typically, you
	   * will not call this method directly, but will instead make a subclass using
	   * <code>AV.Collection.extend</code>.
	   *
	   * @param {Array} models An array of instances of <code>AV.Object</code>.
	   *
	   * @param {Object} options An optional object with Backbone-style options.
	   * Valid options are:<ul>
	   *   <li>model: The AV.Object subclass that this collection contains.
	   *   <li>query: An instance of AV.Query to use when fetching items.
	   *   <li>comparator: A string property name or function to sort by.
	   * </ul>
	   *
	   * @see AV.Collection.extend
	   *
	   * @class
	   *
	   * <p>Provides a standard collection class for our sets of models, ordered
	   * or unordered.  For more information, see the
	   * <a href="http://documentcloud.github.com/backbone/#Collection">Backbone
	   * documentation</a>.</p>
	   */
	  AV.Collection = function (models, options) {
	    console.warn("AV.Collection is deprecated, please don't use it anymore.");
	    options = options || {};
	    if (options.comparator) {
	      this.comparator = options.comparator;
	    }
	    if (options.model) {
	      this.model = options.model;
	    }
	    if (options.query) {
	      this.query = options.query;
	    }
	    this._reset();
	    this.initialize.apply(this, arguments);
	    if (models) {
	      this.reset(models, { silent: true, parse: options.parse });
	    }
	  };

	  // Define the Collection's inheritable methods.
	  _.extend(AV.Collection.prototype, AV.Events,
	  /** @lends AV.Collection.prototype */{

	    // The default model for a collection is just a AV.Object.
	    // This should be overridden in most cases.

	    model: AV.Object,

	    /**
	     * Initialize is an empty function by default. Override it with your own
	     * initialization logic.
	     */
	    initialize: function initialize() {},

	    /**
	     * The JSON representation of a Collection is an array of the
	     * models' attributes.
	     */
	    toJSON: function toJSON() {
	      return this.map(function (model) {
	        return model.toJSON();
	      });
	    },

	    /**
	     * Add a model, or list of models to the set. Pass **silent** to avoid
	     * firing the `add` event for every new model.
	     */
	    add: function add(models, options) {
	      var i,
	          index,
	          length,
	          model,
	          cid,
	          id,
	          cids = {},
	          ids = {};
	      options = options || {};
	      models = _.isArray(models) ? models.slice() : [models];

	      // Begin by turning bare objects into model references, and preventing
	      // invalid models or duplicate models from being added.
	      for (i = 0, length = models.length; i < length; i++) {
	        models[i] = this._prepareModel(models[i], options);
	        model = models[i];
	        if (!model) {
	          throw new Error("Can't add an invalid model to a collection");
	        }
	        cid = model.cid;
	        if (cids[cid] || this._byCid[cid]) {
	          throw new Error("Duplicate cid: can't add the same model " + "to a collection twice");
	        }
	        id = model.id;
	        if (!AV._isNullOrUndefined(id) && (ids[id] || this._byId[id])) {
	          throw new Error("Duplicate id: can't add the same model " + "to a collection twice");
	        }
	        ids[id] = model;
	        cids[cid] = model;
	      }

	      // Listen to added models' events, and index models for lookup by
	      // `id` and by `cid`.
	      for (i = 0; i < length; i++) {
	        (model = models[i]).on('all', this._onModelEvent, this);
	        this._byCid[model.cid] = model;
	        if (model.id) {
	          this._byId[model.id] = model;
	        }
	      }

	      // Insert models into the collection, re-sorting if needed, and triggering
	      // `add` events unless silenced.
	      this.length += length;
	      index = AV._isNullOrUndefined(options.at) ? this.models.length : options.at;
	      this.models.splice.apply(this.models, [index, 0].concat(models));
	      if (this.comparator) {
	        this.sort({ silent: true });
	      }
	      if (options.silent) {
	        return this;
	      }
	      for (i = 0, length = this.models.length; i < length; i++) {
	        model = this.models[i];
	        if (cids[model.cid]) {
	          options.index = i;
	          model.trigger('add', model, this, options);
	        }
	      }
	      return this;
	    },

	    /**
	     * Remove a model, or a list of models from the set. Pass silent to avoid
	     * firing the <code>remove</code> event for every model removed.
	     */
	    remove: function remove(models, options) {
	      var i, l, index, model;
	      options = options || {};
	      models = _.isArray(models) ? models.slice() : [models];
	      for (i = 0, l = models.length; i < l; i++) {
	        model = this.getByCid(models[i]) || this.get(models[i]);
	        if (!model) {
	          continue;
	        }
	        delete this._byId[model.id];
	        delete this._byCid[model.cid];
	        index = this.indexOf(model);
	        this.models.splice(index, 1);
	        this.length--;
	        if (!options.silent) {
	          options.index = index;
	          model.trigger('remove', model, this, options);
	        }
	        this._removeReference(model);
	      }
	      return this;
	    },

	    /**
	     * Gets a model from the set by id.
	     */
	    get: function get(id) {
	      return id && this._byId[id.id || id];
	    },

	    /**
	     * Gets a model from the set by client id.
	     */
	    getByCid: function getByCid(cid) {
	      return cid && this._byCid[cid.cid || cid];
	    },

	    /**
	     * Gets the model at the given index.
	     */
	    at: function at(index) {
	      return this.models[index];
	    },

	    /**
	     * Forces the collection to re-sort itself. You don't need to call this
	     * under normal circumstances, as the set will maintain sort order as each
	     * item is added.
	     */
	    sort: function sort(options) {
	      options = options || {};
	      if (!this.comparator) {
	        throw new Error('Cannot sort a set without a comparator');
	      }
	      var boundComparator = _.bind(this.comparator, this);
	      if (this.comparator.length === 1) {
	        this.models = this.sortBy(boundComparator);
	      } else {
	        this.models.sort(boundComparator);
	      }
	      if (!options.silent) {
	        this.trigger('reset', this, options);
	      }
	      return this;
	    },

	    /**
	     * Plucks an attribute from each model in the collection.
	     */
	    pluck: function pluck(attr) {
	      return _.map(this.models, function (model) {
	        return model.get(attr);
	      });
	    },

	    /**
	     * When you have more items than you want to add or remove individually,
	     * you can reset the entire set with a new list of models, without firing
	     * any `add` or `remove` events. Fires `reset` when finished.
	     */
	    reset: function reset(models, options) {
	      var self = this;
	      models = models || [];
	      options = options || {};
	      AV._arrayEach(this.models, function (model) {
	        self._removeReference(model);
	      });
	      this._reset();
	      this.add(models, { silent: true, parse: options.parse });
	      if (!options.silent) {
	        this.trigger('reset', this, options);
	      }
	      return this;
	    },

	    /**
	     * Fetches the default set of models for this collection, resetting the
	     * collection when they arrive. If `add: true` is passed, appends the
	     * models to the collection instead of resetting.
	     */
	    fetch: function fetch(options) {
	      options = _.clone(options) || {};
	      if (options.parse === undefined) {
	        options.parse = true;
	      }
	      var collection = this;
	      var query = this.query || new AV.Query(this.model);
	      return query.find().then(function (results) {
	        if (options.add) {
	          collection.add(results, options);
	        } else {
	          collection.reset(results, options);
	        }
	        return collection;
	      })._thenRunCallbacks(options, this);
	    },

	    /**
	     * Creates a new instance of a model in this collection. Add the model to
	     * the collection immediately, unless `wait: true` is passed, in which case
	     * we wait for the server to agree.
	     */
	    create: function create(model, options) {
	      var coll = this;
	      options = options ? _.clone(options) : {};
	      model = this._prepareModel(model, options);
	      if (!model) {
	        return false;
	      }
	      if (!options.wait) {
	        coll.add(model, options);
	      }
	      var success = options.success;
	      options.success = function (nextModel, resp, xhr) {
	        if (options.wait) {
	          coll.add(nextModel, options);
	        }
	        if (success) {
	          success(nextModel, resp);
	        } else {
	          nextModel.trigger('sync', model, resp, options);
	        }
	      };
	      model.save(null, options);
	      return model;
	    },

	    /**
	     * Converts a response into a list of models to be added to the collection.
	     * The default implementation is just to pass it through.
	     * @ignore
	     */
	    parse: function parse(resp, xhr) {
	      return resp;
	    },

	    /**
	     * Proxy to _'s chain. Can't be proxied the same way the rest of the
	     * underscore methods are proxied because it relies on the underscore
	     * constructor.
	     */
	    chain: function chain() {
	      return _(this.models).chain();
	    },

	    /**
	     * Reset all internal state. Called when the collection is reset.
	     */
	    _reset: function _reset(options) {
	      this.length = 0;
	      this.models = [];
	      this._byId = {};
	      this._byCid = {};
	    },

	    /**
	     * Prepare a model or hash of attributes to be added to this collection.
	     */
	    _prepareModel: function _prepareModel(model, options) {
	      if (!(model instanceof AV.Object)) {
	        var attrs = model;
	        options.collection = this;
	        model = new this.model(attrs, options);
	        if (!model._validate(model.attributes, options)) {
	          model = false;
	        }
	      } else if (!model.collection) {
	        model.collection = this;
	      }
	      return model;
	    },

	    /**
	     * Internal method to remove a model's ties to a collection.
	     */
	    _removeReference: function _removeReference(model) {
	      if (this === model.collection) {
	        delete model.collection;
	      }
	      model.off('all', this._onModelEvent, this);
	    },

	    /**
	     * Internal method called every time a model in the set fires an event.
	     * Sets need to update their indexes when models change ids. All other
	     * events simply proxy through. "add" and "remove" events that originate
	     * in other collections are ignored.
	     */
	    _onModelEvent: function _onModelEvent(ev, model, collection, options) {
	      if ((ev === 'add' || ev === 'remove') && collection !== this) {
	        return;
	      }
	      if (ev === 'destroy') {
	        this.remove(model, options);
	      }
	      if (model && ev === 'change:objectId') {
	        delete this._byId[model.previous("objectId")];
	        this._byId[model.id] = model;
	      }
	      this.trigger.apply(this, arguments);
	    }

	  });

	  // Underscore methods that we want to implement on the Collection.
	  var methods = ['forEach', 'each', 'map', 'reduce', 'reduceRight', 'find', 'detect', 'filter', 'select', 'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke', 'max', 'min', 'sortBy', 'sortedIndex', 'toArray', 'size', 'first', 'initial', 'rest', 'last', 'without', 'indexOf', 'shuffle', 'lastIndexOf', 'isEmpty', 'groupBy'];

	  // Mix in each Underscore method as a proxy to `Collection#models`.
	  AV._arrayEach(methods, function (method) {
	    AV.Collection.prototype[method] = function () {
	      return _[method].apply(_, [this.models].concat(_.toArray(arguments)));
	    };
	  });

	  /**
	   * Creates a new subclass of <code>AV.Collection</code>.  For example,<pre>
	   *   var MyCollection = AV.Collection.extend({
	   *     // Instance properties
	   *
	   *     model: MyClass,
	   *     query: MyQuery,
	   *
	   *     getFirst: function() {
	   *       return this.at(0);
	   *     }
	   *   }, {
	   *     // Class properties
	   *
	   *     makeOne: function() {
	   *       return new MyCollection();
	   *     }
	   *   });
	   *
	   *   var collection = new MyCollection();
	   * </pre>
	   *
	   * @function
	   * @param {Object} instanceProps Instance properties for the collection.
	   * @param {Object} classProps Class properies for the collection.
	   * @return {Class} A new subclass of <code>AV.Collection</code>.
	   */
	  AV.Collection.extend = AV._extend;
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(18);

	/*global _: false, document: false */
	module.exports = function (AV) {
	  /**
	   * Creating a AV.View creates its initial element outside of the DOM,
	   * if an existing element is not provided...
	   * @class
	   *
	   * <p>A fork of Backbone.View, provided for your convenience.  If you use this
	   * class, you must also include jQuery, or another library that provides a
	   * jQuery-compatible $ function.  For more information, see the
	   * <a href="http://documentcloud.github.com/backbone/#View">Backbone
	   * documentation</a>.</p>
	   * <p><strong><em>Available in the client SDK only.</em></strong></p>
	   */
	  AV.View = function (options) {
	    console.warn("AV.View is deprecated, please don't use it anymore.");
	    this.cid = _.uniqueId('view');
	    this._configure(options || {});
	    this._ensureElement();
	    this.initialize.apply(this, arguments);
	    this.delegateEvents();
	  };

	  // Cached regex to split keys for `delegate`.
	  var eventSplitter = /^(\S+)\s*(.*)$/;

	  // List of view options to be merged as properties.

	  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName'];

	  // Set up all inheritable **AV.View** properties and methods.
	  _.extend(AV.View.prototype, AV.Events,
	  /** @lends AV.View.prototype */{

	    // The default `tagName` of a View's element is `"div"`.
	    tagName: 'div',

	    /**
	     * jQuery delegate for element lookup, scoped to DOM elements within the
	     * current view. This should be prefered to global lookups where possible.
	     */
	    $: function $(selector) {
	      return this.$el.find(selector);
	    },

	    /**
	     * Initialize is an empty function by default. Override it with your own
	     * initialization logic.
	     */
	    initialize: function initialize() {},

	    /**
	     * The core function that your view should override, in order
	     * to populate its element (`this.el`), with the appropriate HTML. The
	     * convention is for **render** to always return `this`.
	     */
	    render: function render() {
	      return this;
	    },

	    /**
	     * Remove this view from the DOM. Note that the view isn't present in the
	     * DOM by default, so calling this method may be a no-op.
	     */
	    remove: function remove() {
	      this.$el.remove();
	      return this;
	    },

	    /**
	     * For small amounts of DOM Elements, where a full-blown template isn't
	     * needed, use **make** to manufacture elements, one at a time.
	     * <pre>
	     *     var el = this.make('li', {'class': 'row'},
	     *                        this.model.escape('title'));</pre>
	     */
	    make: function make(tagName, attributes, content) {
	      var el = document.createElement(tagName);
	      if (attributes) {
	        AV.$(el).attr(attributes);
	      }
	      if (content) {
	        AV.$(el).html(content);
	      }
	      return el;
	    },

	    /**
	     * Changes the view's element (`this.el` property), including event
	     * re-delegation.
	     */
	    setElement: function setElement(element, delegate) {
	      this.$el = AV.$(element);
	      this.el = this.$el[0];
	      if (delegate !== false) {
	        this.delegateEvents();
	      }
	      return this;
	    },

	    /**
	     * Set callbacks.  <code>this.events</code> is a hash of
	     * <pre>
	     * *{"event selector": "callback"}*
	     *
	     *     {
	     *       'mousedown .title':  'edit',
	     *       'click .button':     'save'
	     *       'click .open':       function(e) { ... }
	     *     }
	     * </pre>
	     * pairs. Callbacks will be bound to the view, with `this` set properly.
	     * Uses event delegation for efficiency.
	     * Omitting the selector binds the event to `this.el`.
	     * This only works for delegate-able events: not `focus`, `blur`, and
	     * not `change`, `submit`, and `reset` in Internet Explorer.
	     */
	    delegateEvents: function delegateEvents(events) {
	      events = events || AV._getValue(this, 'events');
	      if (!events) {
	        return;
	      }
	      this.undelegateEvents();
	      var self = this;
	      AV._objectEach(events, function (method, key) {
	        if (!_.isFunction(method)) {
	          method = self[events[key]];
	        }
	        if (!method) {
	          throw new Error('Event "' + events[key] + '" does not exist');
	        }
	        var match = key.match(eventSplitter);
	        var eventName = match[1],
	            selector = match[2];
	        method = _.bind(method, self);
	        eventName += '.delegateEvents' + self.cid;
	        if (selector === '') {
	          self.$el.bind(eventName, method);
	        } else {
	          self.$el.delegate(selector, eventName, method);
	        }
	      });
	    },

	    /**
	     * Clears all callbacks previously bound to the view with `delegateEvents`.
	     * You usually don't need to use this, but may wish to if you have multiple
	     * Backbone views attached to the same DOM element.
	     */
	    undelegateEvents: function undelegateEvents() {
	      this.$el.unbind('.delegateEvents' + this.cid);
	    },

	    /**
	     * Performs the initial configuration of a View with a set of options.
	     * Keys with special meaning *(model, collection, id, className)*, are
	     * attached directly to the view.
	     */
	    _configure: function _configure(options) {
	      if (this.options) {
	        options = _.extend({}, this.options, options);
	      }
	      var self = this;
	      _.each(viewOptions, function (attr) {
	        if (options[attr]) {
	          self[attr] = options[attr];
	        }
	      });
	      this.options = options;
	    },

	    /**
	     * Ensure that the View has a DOM element to render into.
	     * If `this.el` is a string, pass it through `$()`, take the first
	     * matching element, and re-assign it to `el`. Otherwise, create
	     * an element from the `id`, `className` and `tagName` properties.
	     */
	    _ensureElement: function _ensureElement() {
	      if (!this.el) {
	        var attrs = AV._getValue(this, 'attributes') || {};
	        if (this.id) {
	          attrs.id = this.id;
	        }
	        if (this.className) {
	          attrs['class'] = this.className;
	        }
	        this.setElement(this.make(this.tagName, attrs), false);
	      } else {
	        this.setElement(this.el, false);
	      }
	    }

	  });

	  /**
	   * @function
	   * @param {Object} instanceProps Instance properties for the view.
	   * @param {Object} classProps Class properies for the view.
	   * @return {Class} A new subclass of <code>AV.View</code>.
	   */
	  AV.View.extend = AV._extend;
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(18);

	module.exports = function (AV) {
	  /**
	   * @class
	   *
	   * <p>A AV.User object is a local representation of a user persisted to the
	   * AV cloud. This class is a subclass of a AV.Object, and retains the
	   * same functionality of a AV.Object, but also extends it with various
	   * user specific methods, like authentication, signing up, and validation of
	   * uniqueness.</p>
	   */
	  AV.User = AV.Object.extend("_User", /** @lends AV.User.prototype */{
	    // Instance Variables
	    _isCurrentUser: false,

	    // Instance Methods

	    /**
	     * Internal method to handle special fields in a _User response.
	     */
	    _mergeMagicFields: function _mergeMagicFields(attrs) {
	      if (attrs.sessionToken) {
	        this._sessionToken = attrs.sessionToken;
	        delete attrs.sessionToken;
	      }
	      AV.User.__super__._mergeMagicFields.call(this, attrs);
	    },

	    /**
	     * Removes null values from authData (which exist temporarily for
	     * unlinking)
	     */
	    _cleanupAuthData: function _cleanupAuthData() {
	      if (!this.isCurrent()) {
	        return;
	      }
	      var authData = this.get('authData');
	      if (!authData) {
	        return;
	      }
	      AV._objectEach(this.get('authData'), function (value, key) {
	        if (!authData[key]) {
	          delete authData[key];
	        }
	      });
	    },

	    /**
	     * Synchronizes authData for all providers.
	     */
	    _synchronizeAllAuthData: function _synchronizeAllAuthData() {
	      var authData = this.get('authData');
	      if (!authData) {
	        return;
	      }

	      var self = this;
	      AV._objectEach(this.get('authData'), function (value, key) {
	        self._synchronizeAuthData(key);
	      });
	    },

	    /**
	     * Synchronizes auth data for a provider (e.g. puts the access token in the
	     * right place to be used by the Facebook SDK).
	     */
	    _synchronizeAuthData: function _synchronizeAuthData(provider) {
	      if (!this.isCurrent()) {
	        return;
	      }
	      var authType;
	      if (_.isString(provider)) {
	        authType = provider;
	        provider = AV.User._authProviders[authType];
	      } else {
	        authType = provider.getAuthType();
	      }
	      var authData = this.get('authData');
	      if (!authData || !provider) {
	        return;
	      }
	      var success = provider.restoreAuthentication(authData[authType]);
	      if (!success) {
	        this._unlinkFrom(provider);
	      }
	    },

	    _handleSaveResult: function _handleSaveResult(makeCurrent) {
	      // Clean up and synchronize the authData object, removing any unset values
	      if (makeCurrent) {
	        this._isCurrentUser = true;
	      }
	      this._cleanupAuthData();
	      this._synchronizeAllAuthData();
	      // Don't keep the password around.
	      delete this._serverData.password;
	      this._rebuildEstimatedDataForKey("password");
	      this._refreshCache();
	      if (makeCurrent || this.isCurrent()) {
	        AV.User._saveCurrentUser(this);
	      }
	    },

	    /**
	     * Unlike in the Android/iOS SDKs, logInWith is unnecessary, since you can
	     * call linkWith on the user (even if it doesn't exist yet on the server).
	     */
	    _linkWith: function _linkWith(provider, options) {
	      var authType;
	      if (_.isString(provider)) {
	        authType = provider;
	        provider = AV.User._authProviders[provider];
	      } else {
	        authType = provider.getAuthType();
	      }
	      if (_.has(options, 'authData')) {
	        var authData = this.get('authData') || {};
	        authData[authType] = options.authData;
	        this.set('authData', authData);

	        // Overridden so that the user can be made the current user.
	        var newOptions = _.clone(options) || {};
	        newOptions.success = function (model) {
	          model._handleSaveResult(true);
	          if (options.success) {
	            options.success.apply(this, arguments);
	          }
	        };
	        return this.save({ 'authData': authData }, newOptions);
	      } else {
	        var self = this;
	        var promise = new AV.Promise();
	        provider.authenticate({
	          success: function success(provider, result) {
	            self._linkWith(provider, {
	              authData: result,
	              success: options.success,
	              error: options.error
	            }).then(function () {
	              promise.resolve(self);
	            });
	          },
	          error: function error(provider, _error) {
	            if (options.error) {
	              options.error(self, _error);
	            }
	            promise.reject(_error);
	          }
	        });
	        return promise;
	      }
	    },

	    /**
	     * Unlinks a user from a service.
	     */
	    _unlinkFrom: function _unlinkFrom(provider, options) {
	      var authType;
	      if (_.isString(provider)) {
	        authType = provider;
	        provider = AV.User._authProviders[provider];
	      } else {
	        authType = provider.getAuthType();
	      }
	      var newOptions = _.clone(options);
	      var self = this;
	      newOptions.authData = null;
	      newOptions.success = function (model) {
	        self._synchronizeAuthData(provider);
	        if (options.success) {
	          options.success.apply(this, arguments);
	        }
	      };
	      return this._linkWith(provider, newOptions);
	    },

	    /**
	     * Checks whether a user is linked to a service.
	     */
	    _isLinked: function _isLinked(provider) {
	      var authType;
	      if (_.isString(provider)) {
	        authType = provider;
	      } else {
	        authType = provider.getAuthType();
	      }
	      var authData = this.get('authData') || {};
	      return !!authData[authType];
	    },

	    /**
	     * Deauthenticates all providers.
	     */
	    _logOutWithAll: function _logOutWithAll() {
	      var authData = this.get('authData');
	      if (!authData) {
	        return;
	      }
	      var self = this;
	      AV._objectEach(this.get('authData'), function (value, key) {
	        self._logOutWith(key);
	      });
	    },

	    /**
	     * Deauthenticates a single provider (e.g. removing access tokens from the
	     * Facebook SDK).
	     */
	    _logOutWith: function _logOutWith(provider) {
	      if (!this.isCurrent()) {
	        return;
	      }
	      if (_.isString(provider)) {
	        provider = AV.User._authProviders[provider];
	      }
	      if (provider && provider.deauthenticate) {
	        provider.deauthenticate();
	      }
	    },

	    /**
	     * Signs up a new user. You should call this instead of save for
	     * new AV.Users. This will create a new AV.User on the server, and
	     * also persist the session on disk so that you can access the user using
	     * <code>current</code>.
	     *
	     * <p>A username and password must be set before calling signUp.</p>
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @param {Object} attrs Extra fields to set on the new user, or null.
	     * @param {Object} options A Backbone-style options object.
	     * @return {AV.Promise} A promise that is fulfilled when the signup
	     *     finishes.
	     * @see AV.User.signUp
	     */
	    signUp: function signUp(attrs, options) {
	      var error;
	      options = options || {};

	      var username = attrs && attrs.username || this.get("username");
	      if (!username || username === "") {
	        error = new AV.Error(AV.Error.OTHER_CAUSE, "Cannot sign up user with an empty name.");
	        if (options && options.error) {
	          options.error(this, error);
	        }
	        return AV.Promise.error(error);
	      }

	      var password = attrs && attrs.password || this.get("password");
	      if (!password || password === "") {
	        error = new AV.Error(AV.Error.OTHER_CAUSE, "Cannot sign up user with an empty password.");
	        if (options && options.error) {
	          options.error(this, error);
	        }
	        return AV.Promise.error(error);
	      }

	      // Overridden so that the user can be made the current user.
	      var newOptions = _.clone(options);
	      newOptions.success = function (model) {
	        model._handleSaveResult(true);
	        if (options.success) {
	          options.success.apply(this, arguments);
	        }
	      };
	      return this.save(attrs, newOptions);
	    },

	    /**
	     * Signs up a new user with mobile phone and sms code.
	     * You should call this instead of save for
	     * new AV.Users. This will create a new AV.User on the server, and
	     * also persist the session on disk so that you can access the user using
	     * <code>current</code>.
	     *
	     * <p>A username and password must be set before calling signUp.</p>
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @param {Object} attrs Extra fields to set on the new user, or null.
	     * @param {Object} options A Backbone-style options object.
	     * @return {AV.Promise} A promise that is fulfilled when the signup
	     *     finishes.
	     * @see AV.User.signUpOrlogInWithMobilePhone
	     * @see AV.Cloud.requestSmsCode
	     */
	    signUpOrlogInWithMobilePhone: function signUpOrlogInWithMobilePhone(attrs, options) {
	      var error;
	      options = options || {};

	      var mobilePhoneNumber = attrs && attrs.mobilePhoneNumber || this.get("mobilePhoneNumber");
	      if (!mobilePhoneNumber || mobilePhoneNumber === "") {
	        error = new AV.Error(AV.Error.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber " + "with an empty mobilePhoneNumber.");
	        if (options && options.error) {
	          options.error(this, error);
	        }
	        return AV.Promise.error(error);
	      }

	      var smsCode = attrs && attrs.smsCode || this.get("smsCode");
	      if (!smsCode || smsCode === "") {
	        error = new AV.Error(AV.Error.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber  " + "with an empty smsCode.");
	        if (options && options.error) {
	          options.error(this, error);
	        }
	        return AV.Promise.error(error);
	      }

	      // Overridden so that the user can be made the current user.
	      var newOptions = _.clone(options);
	      newOptions._makeRequest = function (route, className, id, method, json) {
	        return AV._request('usersByMobilePhone', null, null, "POST", json);
	      };
	      newOptions.success = function (model) {
	        model._handleSaveResult(true);
	        delete model.attributes.smsCode;
	        delete model._serverData.smsCode;
	        if (options.success) {
	          options.success.apply(this, arguments);
	        }
	      };
	      return this.save(attrs, newOptions);
	    },

	    /**
	     * Logs in a AV.User. On success, this saves the session to localStorage,
	     * so you can retrieve the currently logged in user using
	     * <code>current</code>.
	     *
	     * <p>A username and password must be set before calling logIn.</p>
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @param {Object} options A Backbone-style options object.
	     * @see AV.User.logIn
	     * @return {AV.Promise} A promise that is fulfilled with the user when
	     *     the login is complete.
	     */
	    logIn: function logIn(options) {
	      var model = this;
	      var request = AV._request("login", null, null, "GET", this.toJSON());
	      return request.then(function (resp, status, xhr) {
	        var serverAttrs = model.parse(resp, status, xhr);
	        model._finishFetch(serverAttrs);
	        model._handleSaveResult(true);
	        if (!serverAttrs.smsCode) delete model.attributes['smsCode'];
	        return model;
	      })._thenRunCallbacks(options, this);
	    },

	    /**
	     * @see AV.Object#save
	     */
	    save: function save(arg1, arg2, arg3) {
	      var i, attrs, current, options, saved;
	      if (_.isObject(arg1) || _.isNull(arg1) || _.isUndefined(arg1)) {
	        attrs = arg1;
	        options = arg2;
	      } else {
	        attrs = {};
	        attrs[arg1] = arg2;
	        options = arg3;
	      }
	      options = options || {};

	      var newOptions = _.clone(options);
	      newOptions.success = function (model) {
	        model._handleSaveResult(false);
	        if (options.success) {
	          options.success.apply(this, arguments);
	        }
	      };
	      return AV.Object.prototype.save.call(this, attrs, newOptions);
	    },

	    /**
	     * Follow a user
	     * @since 0.3.0
	     * @param {} target The target user or user's objectId to follow.
	     * @param {Object} options An optional Backbone-like options object with
	     *     success and error callbacks that will be invoked once the iteration
	     *     has finished.
	     */
	    follow: function follow(target, options) {
	      if (!this.id) {
	        throw "Please signin.";
	      }
	      if (!target) {
	        throw "Invalid target user.";
	      }
	      var userObjectId = _.isString(target) ? target : target.id;
	      if (!userObjectId) {
	        throw "Invalid target user.";
	      }
	      var route = 'users/' + this.id + '/friendship/' + userObjectId;
	      var request = AV._request(route, null, null, 'POST', null);
	      return request._thenRunCallbacks(options);
	    },

	    /**
	     * Unfollow a user.
	     * @since 0.3.0
	     * @param {} target The target user or user's objectId to unfollow.
	     * @param options {Object} An optional Backbone-like options object with
	     *     success and error callbacks that will be invoked once the iteration
	     *     has finished.
	     */
	    unfollow: function unfollow(target, options) {
	      if (!this.id) {
	        throw "Please signin.";
	      }
	      if (!target) {
	        throw "Invalid target user.";
	      }
	      var userObjectId = _.isString(target) ? target : target.id;
	      if (!userObjectId) {
	        throw "Invalid target user.";
	      }
	      var route = 'users/' + this.id + '/friendship/' + userObjectId;
	      var request = AV._request(route, null, null, 'DELETE', null);
	      return request._thenRunCallbacks(options);
	    },

	    /**
	     *Create a follower query to query the user's followers.
	     * @since 0.3.0
	     * @see AV.User#followerQuery
	     */
	    followerQuery: function followerQuery() {
	      return AV.User.followerQuery(this.id);
	    },

	    /**
	     *Create a followee query to query the user's followees.
	     * @since 0.3.0
	     * @see AV.User#followeeQuery
	     */
	    followeeQuery: function followeeQuery() {
	      return AV.User.followeeQuery(this.id);
	    },

	    /**
	     * @see AV.Object#fetch
	     */
	    fetch: function fetch() {
	      var options = null;
	      var fetchOptions = {};
	      if (arguments.length === 1) {
	        options = arguments[0];
	      } else if (arguments.length === 2) {
	        fetchOptions = arguments[0];
	        options = arguments[1];
	      }
	      var newOptions = options ? _.clone(options) : {};
	      newOptions.success = function (model) {
	        model._handleSaveResult(false);
	        if (options && options.success) {
	          options.success.apply(this, arguments);
	        }
	      };
	      return AV.Object.prototype.fetch.call(this, fetchOptions, newOptions);
	    },

	    /**
	     * Update user's new password safely based on old password.
	     * @param {String} oldPassword, the old password.
	     * @param {String} newPassword, the new password.
	     * @param {Object} An optional Backbone-like options object with
	     *     success and error callbacks that will be invoked once the iteration
	     *     has finished.
	     */
	    updatePassword: function updatePassword(oldPassword, newPassword, options) {
	      var route = 'users/' + this.id + '/updatePassword';
	      var params = {
	        old_password: oldPassword,
	        new_password: newPassword
	      };
	      var request = AV._request(route, null, null, 'PUT', params);
	      return request._thenRunCallbacks(options, this);
	    },

	    /**
	     * Returns true if <code>current</code> would return this user.
	     * @see AV.User#current
	     */
	    isCurrent: function isCurrent() {
	      return this._isCurrentUser;
	    },

	    /**
	     * Returns get("username").
	     * @return {String}
	     * @see AV.Object#get
	     */
	    getUsername: function getUsername() {
	      return this.get("username");
	    },

	    /**
	     * Returns get("mobilePhoneNumber").
	     * @return {String}
	     * @see AV.Object#get
	     */
	    getMobilePhoneNumber: function getMobilePhoneNumber() {
	      return this.get("mobilePhoneNumber");
	    },

	    /**
	     * Calls set("mobilePhoneNumber", phoneNumber, options) and returns the result.
	     * @param {String} mobilePhoneNumber
	     * @param {Object} options A Backbone-style options object.
	     * @return {Boolean}
	     * @see AV.Object.set
	     */
	    setMobilePhoneNumber: function setMobilePhoneNumber(phone, options) {
	      return this.set("mobilePhoneNumber", phone, options);
	    },

	    /**
	     * Calls set("username", username, options) and returns the result.
	     * @param {String} username
	     * @param {Object} options A Backbone-style options object.
	     * @return {Boolean}
	     * @see AV.Object.set
	     */
	    setUsername: function setUsername(username, options) {
	      return this.set("username", username, options);
	    },

	    /**
	     * Calls set("password", password, options) and returns the result.
	     * @param {String} password
	     * @param {Object} options A Backbone-style options object.
	     * @return {Boolean}
	     * @see AV.Object.set
	     */
	    setPassword: function setPassword(password, options) {
	      return this.set("password", password, options);
	    },

	    /**
	     * Returns get("email").
	     * @return {String}
	     * @see AV.Object#get
	     */
	    getEmail: function getEmail() {
	      return this.get("email");
	    },

	    /**
	     * Calls set("email", email, options) and returns the result.
	     * @param {String} email
	     * @param {Object} options A Backbone-style options object.
	     * @return {Boolean}
	     * @see AV.Object.set
	     */
	    setEmail: function setEmail(email, options) {
	      return this.set("email", email, options);
	    },

	    /**
	     * Checks whether this user is the current user and has been authenticated.
	     * @return (Boolean) whether this user is the current user and is logged in.
	     */
	    authenticated: function authenticated() {
	      return !!this._sessionToken && AV.User.current() && AV.User.current().id === this.id;
	    }

	  }, /** @lends AV.User */{
	    // Class Variables

	    // The currently logged-in user.
	    _currentUser: null,

	    // Whether currentUser is known to match the serialized version on disk.
	    // This is useful for saving a localstorage check if you try to load
	    // _currentUser frequently while there is none stored.
	    _currentUserMatchesDisk: false,

	    // The localStorage key suffix that the current user is stored under.
	    _CURRENT_USER_KEY: "currentUser",

	    // The mapping of auth provider names to actual providers
	    _authProviders: {},

	    // Class Methods

	    /**
	     * Signs up a new user with a username (or email) and password.
	     * This will create a new AV.User on the server, and also persist the
	     * session in localStorage so that you can access the user using
	     * {@link #current}.
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @param {String} username The username (or email) to sign up with.
	     * @param {String} password The password to sign up with.
	     * @param {Object} attrs Extra fields to set on the new user.
	     * @param {Object} options A Backbone-style options object.
	     * @return {AV.Promise} A promise that is fulfilled with the user when
	     *     the signup completes.
	     * @see AV.User#signUp
	     */
	    signUp: function signUp(username, password, attrs, options) {
	      attrs = attrs || {};
	      attrs.username = username;
	      attrs.password = password;
	      var user = AV.Object._create("_User");
	      return user.signUp(attrs, options);
	    },

	    /**
	     * Logs in a user with a username (or email) and password. On success, this
	     * saves the session to disk, so you can retrieve the currently logged in
	     * user using <code>current</code>.
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @param {String} username The username (or email) to log in with.
	     * @param {String} password The password to log in with.
	     * @param {Object} options A Backbone-style options object.
	     * @return {AV.Promise} A promise that is fulfilled with the user when
	     *     the login completes.
	     * @see AV.User#logIn
	     */
	    logIn: function logIn(username, password, options) {
	      var user = AV.Object._create("_User");
	      user._finishFetch({ username: username, password: password });
	      return user.logIn(options);
	    },

	    /**
	     * Logs in a user with a session token. On success, this saves the session
	     * to disk, so you can retrieve the currently logged in user using
	     * <code>current</code>.
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @param {String} sessionToken The sessionToken to log in with.
	     * @param {Object} options A Backbone-style options object.
	     * @return {AV.Promise} A promise that is fulfilled with the user when
	     *     the login completes.
	     */
	    become: function become(sessionToken, options) {
	      options = options || {};

	      var user = AV.Object._create("_User");
	      return AV._request("users", "me", null, "GET", {
	        useMasterKey: options.useMasterKey,
	        session_token: sessionToken
	      }).then(function (resp, status, xhr) {
	        var serverAttrs = user.parse(resp, status, xhr);
	        user._finishFetch(serverAttrs);
	        user._handleSaveResult(true);
	        return user;
	      })._thenRunCallbacks(options, user);
	    },

	    /**
	     * Logs in a user with a mobile phone number and sms code sent by
	     * AV.User.requestLoginSmsCode.On success, this
	     * saves the session to disk, so you can retrieve the currently logged in
	     * user using <code>current</code>.
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @param {String} mobilePhone The user's mobilePhoneNumber
	     * @param {String} smsCode The sms code sent by AV.User.requestLoginSmsCode
	     * @param {Object} options A Backbone-style options object.
	     * @return {AV.Promise} A promise that is fulfilled with the user when
	     *     the login completes.
	     * @see AV.User#logIn
	     */
	    logInWithMobilePhoneSmsCode: function logInWithMobilePhoneSmsCode(mobilePhone, smsCode, options) {
	      var user = AV.Object._create("_User");
	      user._finishFetch({ mobilePhoneNumber: mobilePhone, smsCode: smsCode });
	      return user.logIn(options);
	    },

	    /**
	     * Sign up or logs in a user with a mobilePhoneNumber and smsCode.
	     * On success, this saves the session to disk, so you can retrieve the currently
	     * logged in user using <code>current</code>.
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @param {String} mobilePhoneNumber The user's mobilePhoneNumber.
	     * @param {String} smsCode The sms code sent by AV.Cloud.requestSmsCode
	     * @param {Object} attributes  The user's other attributes such as username etc.
	     * @param {Object} options A Backbone-style options object.
	     * @return {AV.Promise} A promise that is fulfilled with the user when
	     *     the login completes.
	     * @see AV.User#signUpOrlogInWithMobilePhone
	     * @see AV.Cloud.requestSmsCode
	     */
	    signUpOrlogInWithMobilePhone: function signUpOrlogInWithMobilePhone(mobilePhoneNumber, smsCode, attrs, options) {
	      attrs = attrs || {};
	      attrs.mobilePhoneNumber = mobilePhoneNumber;
	      attrs.smsCode = smsCode;
	      var user = AV.Object._create("_User");
	      return user.signUpOrlogInWithMobilePhone(attrs, options);
	    },

	    /**
	     * Logs in a user with a mobile phone number and password. On success, this
	     * saves the session to disk, so you can retrieve the currently logged in
	     * user using <code>current</code>.
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @param {String} mobilePhone The user's mobilePhoneNumber
	     * @param {String} password The password to log in with.
	     * @param {Object} options A Backbone-style options object.
	     * @return {AV.Promise} A promise that is fulfilled with the user when
	     *     the login completes.
	     * @see AV.User#logIn
	     */
	    logInWithMobilePhone: function logInWithMobilePhone(mobilePhone, password, options) {
	      var user = AV.Object._create("_User");
	      user._finishFetch({ mobilePhoneNumber: mobilePhone, password: password });
	      return user.logIn(options);
	    },

	    /**
	     * Logs out the currently logged in user session. This will remove the
	     * session from disk, log out of linked services, and future calls to
	     * <code>current</code> will return <code>null</code>.
	     */
	    logOut: function logOut() {
	      if (AV.User._currentUser !== null) {
	        AV.User._currentUser._logOutWithAll();
	        AV.User._currentUser._isCurrentUser = false;
	      }
	      AV.User._currentUserMatchesDisk = true;
	      AV.User._currentUser = null;
	      AV.localStorage.removeItem(AV._getAVPath(AV.User._CURRENT_USER_KEY));
	    },

	    /**
	     *Create a follower query for special user to query the user's followers.
	     * @param userObjectId {String} The user object id.
	     * @since 0.3.0
	     */
	    followerQuery: function followerQuery(userObjectId) {
	      if (!userObjectId || !_.isString(userObjectId)) {
	        throw "Invalid user object id.";
	      }
	      var query = new AV.FriendShipQuery('_Follower');
	      query._friendshipTag = 'follower';
	      query.equalTo('user', AV.Object.createWithoutData('_User', userObjectId));
	      return query;
	    },

	    /**
	     *Create a followee query for special user to query the user's followees.
	     * @param userObjectId {String} The user object id.
	     * @since 0.3.0
	     */
	    followeeQuery: function followeeQuery(userObjectId) {
	      if (!userObjectId || !_.isString(userObjectId)) {
	        throw "Invalid user object id.";
	      }
	      var query = new AV.FriendShipQuery('_Followee');
	      query._friendshipTag = 'followee';
	      query.equalTo('user', AV.Object.createWithoutData('_User', userObjectId));
	      return query;
	    },

	    /**
	     * Requests a password reset email to be sent to the specified email address
	     * associated with the user account. This email allows the user to securely
	     * reset their password on the AV site.
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @param {String} email The email address associated with the user that
	     *     forgot their password.
	     * @param {Object} options A Backbone-style options object.
	     */
	    requestPasswordReset: function requestPasswordReset(email, options) {
	      var json = { email: email };
	      var request = AV._request("requestPasswordReset", null, null, "POST", json);
	      return request._thenRunCallbacks(options);
	    },

	    /**
	     * Requests a verify email to be sent to the specified email address
	     * associated with the user account. This email allows the user to securely
	     * verify their email address on the AV site.
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @param {String} email The email address associated with the user that
	     *     doesn't verify their email address.
	     * @param {Object} options A Backbone-style options object.
	     */
	    requestEmailVerify: function requestEmailVerify(email, options) {
	      var json = { email: email };
	      var request = AV._request("requestEmailVerify", null, null, "POST", json);
	      return request._thenRunCallbacks(options);
	    },

	    /**
	     * @Deprecated typo error, please use requestEmailVerify
	     */
	    requestEmailVerfiy: function requestEmailVerfiy(email, options) {
	      var json = { email: email };
	      var request = AV._request("requestEmailVerify", null, null, "POST", json);
	      return request._thenRunCallbacks(options);
	    },

	    /**
	     * Requests a verify sms code to be sent to the specified mobile phone
	     * number associated with the user account. This sms code allows the user to
	     * verify their mobile phone number by calling AV.User.verifyMobilePhone
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @param {String} mobilePhone The mobile phone number  associated with the
	     *                  user that doesn't verify their mobile phone number.
	     * @param {Object} options A Backbone-style options object.
	     */
	    requestMobilePhoneVerify: function requestMobilePhoneVerify(mobilePhone, options) {
	      var json = { mobilePhoneNumber: mobilePhone };
	      var request = AV._request("requestMobilePhoneVerify", null, null, "POST", json);
	      return request._thenRunCallbacks(options);
	    },

	    /**
	     * Requests a reset password sms code to be sent to the specified mobile phone
	     * number associated with the user account. This sms code allows the user to
	     * reset their account's password by calling AV.User.resetPasswordBySmsCode
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @param {String} mobilePhone The mobile phone number  associated with the
	     *                  user that doesn't verify their mobile phone number.
	     * @param {Object} options A Backbone-style options object.
	     */
	    requestPasswordResetBySmsCode: function requestPasswordResetBySmsCode(mobilePhone, options) {
	      var json = { mobilePhoneNumber: mobilePhone };
	      var request = AV._request("requestPasswordResetBySmsCode", null, null, "POST", json);
	      return request._thenRunCallbacks(options);
	    },

	    /**
	     * Makes a call to reset user's account password by sms code and new password.
	    * The sms code is sent by AV.User.requestPasswordResetBySmsCode.
	     * @param {String} code The sms code sent by AV.User.Cloud.requestSmsCode
	     * @param {String} password The new password.
	     * @param {Object} options A Backbone-style options object
	     * @return {AV.Promise} A promise that will be resolved with the result
	     * of the function.
	     */
	    resetPasswordBySmsCode: function resetPasswordBySmsCode(code, password, options) {
	      var json = { password: password };
	      var request = AV._request("resetPasswordBySmsCode", null, code, "PUT", json);
	      return request._thenRunCallbacks(options);
	    },

	    /**
	     * Makes a call to verify sms code that sent by AV.User.Cloud.requestSmsCode
	     * If verify successfully,the user mobilePhoneVerified attribute will be true.
	     * @param {String} code The sms code sent by AV.User.Cloud.requestSmsCode
	     * @param {Object} options A Backbone-style options object
	     * @return {AV.Promise} A promise that will be resolved with the result
	     * of the function.
	     */
	    verifyMobilePhone: function verifyMobilePhone(code, options) {
	      var request = AV._request("verifyMobilePhone", null, code, "POST", null);
	      return request._thenRunCallbacks(options);
	    },

	    /**
	     * Requests a logIn sms code to be sent to the specified mobile phone
	     * number associated with the user account. This sms code allows the user to
	     * login by AV.User.logInWithMobilePhoneSmsCode function.
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @param {String} mobilePhone The mobile phone number  associated with the
	     *           user that want to login by AV.User.logInWithMobilePhoneSmsCode
	     * @param {Object} options A Backbone-style options object.
	     */
	    requestLoginSmsCode: function requestLoginSmsCode(mobilePhone, options) {
	      var json = { mobilePhoneNumber: mobilePhone };
	      var request = AV._request("requestLoginSmsCode", null, null, "POST", json);
	      return request._thenRunCallbacks(options);
	    },

	    /**
	     * Retrieves the currently logged in AVUser with a valid session,
	     * either from memory or localStorage, if necessary.
	     * @return {AV.Object} The currently logged in AV.User.
	     */
	    current: function current() {
	      if (AV.User._currentUser) {
	        return AV.User._currentUser;
	      }

	      if (AV.User._currentUserMatchesDisk) {

	        return AV.User._currentUser;
	      }

	      // Load the user from local storage.
	      AV.User._currentUserMatchesDisk = true;

	      var userData = AV.localStorage.getItem(AV._getAVPath(AV.User._CURRENT_USER_KEY));
	      if (!userData) {

	        return null;
	      }
	      AV.User._currentUser = AV.Object._create("_User");
	      AV.User._currentUser._isCurrentUser = true;

	      var json = JSON.parse(userData);
	      AV.User._currentUser.id = json._id;
	      delete json._id;
	      AV.User._currentUser._sessionToken = json._sessionToken;
	      delete json._sessionToken;
	      AV.User._currentUser._finishFetch(json);
	      //AV.User._currentUser.set(json);

	      AV.User._currentUser._synchronizeAllAuthData();
	      AV.User._currentUser._refreshCache();
	      AV.User._currentUser._opSetQueue = [{}];
	      return AV.User._currentUser;
	    },

	    /**
	     * Persists a user as currentUser to localStorage, and into the singleton.
	     */
	    _saveCurrentUser: function _saveCurrentUser(user) {
	      if (AV.User._currentUser !== user) {
	        AV.User.logOut();
	      }
	      user._isCurrentUser = true;
	      AV.User._currentUser = user;
	      AV.User._currentUserMatchesDisk = true;

	      var json = user.toJSON();
	      json._id = user.id;
	      json._sessionToken = user._sessionToken;
	      AV.localStorage.setItem(AV._getAVPath(AV.User._CURRENT_USER_KEY), JSON.stringify(json));
	    },

	    _registerAuthenticationProvider: function _registerAuthenticationProvider(provider) {
	      AV.User._authProviders[provider.getAuthType()] = provider;
	      // Synchronize the current user with the auth provider.
	      if (AV.User.current()) {
	        AV.User.current()._synchronizeAuthData(provider.getAuthType());
	      }
	    },

	    _logInWith: function _logInWith(provider, options) {
	      var user = AV.Object._create("_User");
	      return user._linkWith(provider, options);
	    }

	  });
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(18);

	// AV.Query is a way to create a list of AV.Objects.
	module.exports = function (AV) {
	  /**
	   * Creates a new avoscloud AV.Query for the given AV.Object subclass.
	   * @param objectClass -
	   *   An instance of a subclass of AV.Object, or a AV className string.
	   * @class
	   *
	   * <p>AV.Query defines a query that is used to fetch AV.Objects. The
	   * most common use case is finding all objects that match a query through the
	   * <code>find</code> method. For example, this sample code fetches all objects
	   * of class <code>MyClass</code>. It calls a different function depending on
	   * whether the fetch succeeded or not.
	   *
	   * <pre>
	   * var query = new AV.Query(MyClass);
	   * query.find({
	   *   success: function(results) {
	   *     // results is an array of AV.Object.
	   *   },
	   *
	   *   error: function(error) {
	   *     // error is an instance of AV.Error.
	   *   }
	   * });</pre></p>
	   *
	   * <p>A AV.Query can also be used to retrieve a single object whose id is
	   * known, through the get method. For example, this sample code fetches an
	   * object of class <code>MyClass</code> and id <code>myId</code>. It calls a
	   * different function depending on whether the fetch succeeded or not.
	   *
	   * <pre>
	   * var query = new AV.Query(MyClass);
	   * query.get(myId, {
	   *   success: function(object) {
	   *     // object is an instance of AV.Object.
	   *   },
	   *
	   *   error: function(object, error) {
	   *     // error is an instance of AV.Error.
	   *   }
	   * });</pre></p>
	   *
	   * <p>A AV.Query can also be used to count the number of objects that match
	   * the query without retrieving all of those objects. For example, this
	   * sample code counts the number of objects of the class <code>MyClass</code>
	   * <pre>
	   * var query = new AV.Query(MyClass);
	   * query.count({
	   *   success: function(number) {
	   *     // There are number instances of MyClass.
	   *   },
	   *
	   *   error: function(error) {
	   *     // error is an instance of AV.Error.
	   *   }
	   * });</pre></p>
	   */
	  AV.Query = function (objectClass) {
	    if (_.isString(objectClass)) {
	      objectClass = AV.Object._getSubclass(objectClass);
	    }

	    this.objectClass = objectClass;

	    this.className = objectClass.prototype.className;

	    this._where = {};
	    this._include = [];
	    this._limit = -1; // negative limit means, do not send a limit
	    this._skip = 0;
	    this._extraOptions = {};
	  };

	  /**
	   * Constructs a AV.Query that is the OR of the passed in queries.  For
	   * example:
	   * <pre>var compoundQuery = AV.Query.or(query1, query2, query3);</pre>
	   *
	   * will create a compoundQuery that is an or of the query1, query2, and
	   * query3.
	   * @param {...AV.Query} var_args The list of queries to OR.
	   * @return {AV.Query} The query that is the OR of the passed in queries.
	   */
	  AV.Query.or = function () {
	    var queries = _.toArray(arguments);
	    var className = null;
	    AV._arrayEach(queries, function (q) {
	      if (_.isNull(className)) {
	        className = q.className;
	      }

	      if (className !== q.className) {
	        throw "All queries must be for the same class";
	      }
	    });
	    var query = new AV.Query(className);
	    query._orQuery(queries);
	    return query;
	  };

	  /**
	   * Constructs a AV.Query that is the AND of the passed in queries.  For
	   * example:
	   * <pre>var compoundQuery = AV.Query.and(query1, query2, query3);</pre>
	   *
	   * will create a compoundQuery that is an 'and' of the query1, query2, and
	   * query3.
	   * @param {...AV.Query} var_args The list of queries to AND.
	   * @return {AV.Query} The query that is the AND of the passed in queries.
	   */
	  AV.Query.and = function () {
	    var queries = _.toArray(arguments);
	    var className = null;
	    AV._arrayEach(queries, function (q) {
	      if (_.isNull(className)) {
	        className = q.className;
	      }

	      if (className !== q.className) {
	        throw "All queries must be for the same class";
	      }
	    });
	    var query = new AV.Query(className);
	    query._andQuery(queries);
	    return query;
	  };

	  /**
	   * Retrieves a list of AVObjects that satisfy the CQL.
	   * CQL syntax please see <a href='https://cn.avoscloud.com/docs/cql_guide.html'>CQL Guide.</a>
	   * Either options.success or options.error is called when the find
	   * completes.
	   *
	   * @param {String} cql,  A CQL string, see <a href='https://cn.avoscloud.com/docs/cql_guide.html'>CQL Guide.</a>
	   * @param {Array} pvalues, An array contains placeholder values.
	   * @param {Object} options A Backbone-style options object,it's optional.
	   * @return {AV.Promise} A promise that is resolved with the results when
	   * the query completes,it's optional.
	   */
	  AV.Query.doCloudQuery = function (cql, pvalues, options) {
	    var params = { cql: cql };
	    if (_.isArray(pvalues)) {
	      params.pvalues = pvalues;
	    } else {
	      options = pvalues;
	    }

	    var request = AV._request("cloudQuery", null, null, 'GET', params);
	    return request.then(function (response) {
	      //query to process results.
	      var query = new AV.Query(response.className);
	      var results = _.map(response.results, function (json) {
	        var obj = query._newObject(response);
	        obj._finishFetch(query._processResult(json), true);
	        return obj;
	      });
	      return {
	        results: results,
	        count: response.count,
	        className: response.className
	      };
	    })._thenRunCallbacks(options);
	  };

	  AV.Query._extend = AV._extend;

	  AV.Query.prototype = {
	    //hook to iterate result. Added by dennis<xzhuang@avoscloud.com>.
	    _processResult: function _processResult(obj) {
	      return obj;
	    },

	    /**
	     * Constructs a AV.Object whose id is already known by fetching data from
	     * the server.  Either options.success or options.error is called when the
	     * find completes.
	     *
	     * @param {} objectId The id of the object to be fetched.
	     * @param {Object} options A Backbone-style options object.
	     */
	    get: function get(objectId, options) {
	      if (!objectId) {
	        var errorObject = new AV.Error(AV.Error.OBJECT_NOT_FOUND, "Object not found.");
	        return AV.Promise.error(errorObject);
	      }

	      var self = this;
	      self.equalTo('objectId', objectId);

	      return self.first().then(function (response) {
	        if (!AV._.isEmpty(response)) {
	          return response;
	        }

	        var errorObject = new AV.Error(AV.Error.OBJECT_NOT_FOUND, "Object not found.");
	        return AV.Promise.error(errorObject);
	      })._thenRunCallbacks(options, null);
	    },

	    /**
	     * Returns a JSON representation of this query.
	     * @return {Object}
	     */
	    toJSON: function toJSON() {
	      var params = {
	        where: this._where
	      };

	      if (this._include.length > 0) {
	        params.include = this._include.join(",");
	      }
	      if (this._select) {
	        params.keys = this._select.join(",");
	      }
	      if (this._limit >= 0) {
	        params.limit = this._limit;
	      }
	      if (this._skip > 0) {
	        params.skip = this._skip;
	      }
	      if (this._order !== undefined) {
	        params.order = this._order;
	      }

	      AV._objectEach(this._extraOptions, function (v, k) {
	        params[k] = v;
	      });

	      return params;
	    },

	    _newObject: function _newObject(response) {
	      var obj;
	      if (response && response.className) {
	        obj = new AV.Object(response.className);
	      } else {
	        obj = new this.objectClass();
	      }
	      return obj;
	    },
	    _createRequest: function _createRequest(params) {
	      return AV._request("classes", this.className, null, "GET", params || this.toJSON());
	    },

	    /**
	     * Retrieves a list of AVObjects that satisfy this query.
	     * Either options.success or options.error is called when the find
	     * completes.
	     *
	     * @param {Object} options A Backbone-style options object.
	     * @return {AV.Promise} A promise that is resolved with the results when
	     * the query completes.
	     */
	    find: function find(options) {
	      var self = this;

	      var request = this._createRequest();

	      return request.then(function (response) {
	        return _.map(response.results, function (json) {
	          var obj = self._newObject(response);
	          obj._finishFetch(self._processResult(json), true);
	          return obj;
	        });
	      })._thenRunCallbacks(options);
	    },

	    /**
	     * Delete objects retrieved by this query.
	     * @param {Object} options Standard options object with success and error
	     *     callbacks.
	     * @return {AV.Promise} A promise that is fulfilled when the save
	     *     completes.
	     */
	    destroyAll: function destroyAll(options) {
	      var self = this;
	      return self.find().then(function (objects) {
	        return AV.Object.destroyAll(objects);
	      })._thenRunCallbacks(options);
	    },

	    /**
	     * Counts the number of objects that match this query.
	     * Either options.success or options.error is called when the count
	     * completes.
	     *
	     * @param {Object} options A Backbone-style options object.
	     * @return {AV.Promise} A promise that is resolved with the count when
	     * the query completes.
	     */
	    count: function count(options) {
	      var params = this.toJSON();
	      params.limit = 0;
	      params.count = 1;
	      var request = this._createRequest(params);

	      return request.then(function (response) {
	        return response.count;
	      })._thenRunCallbacks(options);
	    },

	    /**
	     * Retrieves at most one AV.Object that satisfies this query.
	     *
	     * Either options.success or options.error is called when it completes.
	     * success is passed the object if there is one. otherwise, undefined.
	     *
	     * @param {Object} options A Backbone-style options object.
	     * @return {AV.Promise} A promise that is resolved with the object when
	     * the query completes.
	     */
	    first: function first(options) {
	      var self = this;

	      var params = this.toJSON();
	      params.limit = 1;
	      var request = this._createRequest(params);

	      return request.then(function (response) {
	        return _.map(response.results, function (json) {
	          var obj = self._newObject();
	          obj._finishFetch(self._processResult(json), true);
	          return obj;
	        })[0];
	      })._thenRunCallbacks(options);
	    },

	    /**
	     * Returns a new instance of AV.Collection backed by this query.
	     * @return {AV.Collection}
	     */
	    collection: function collection(items, options) {
	      options = options || {};
	      return new AV.Collection(items, _.extend(options, {
	        model: this._objectClass || this.objectClass,
	        query: this
	      }));
	    },

	    /**
	     * Sets the number of results to skip before returning any results.
	     * This is useful for pagination.
	     * Default is to skip zero results.
	     * @param {Number} n the number of results to skip.
	     * @return {AV.Query} Returns the query, so you can chain this call.
	     */
	    skip: function skip(n) {
	      this._skip = n;
	      return this;
	    },

	    /**
	     * Sets the limit of the number of results to return. The default limit is
	     * 100, with a maximum of 1000 results being returned at a time.
	     * @param {Number} n the number of results to limit to.
	     * @return {AV.Query} Returns the query, so you can chain this call.
	     */
	    limit: function limit(n) {
	      this._limit = n;
	      return this;
	    },

	    /**
	     * Add a constraint to the query that requires a particular key's value to
	     * be equal to the provided value.
	     * @param {String} key The key to check.
	     * @param value The value that the AV.Object must contain.
	     * @return {AV.Query} Returns the query, so you can chain this call.
	     */
	    equalTo: function equalTo(key, value) {
	      this._where[key] = AV._encode(value);
	      return this;
	    },

	    /**
	     * Helper for condition queries
	     */
	    _addCondition: function _addCondition(key, condition, value) {
	      // Check if we already have a condition
	      if (!this._where[key]) {
	        this._where[key] = {};
	      }
	      this._where[key][condition] = AV._encode(value);
	      return this;
	    },

	    /**
	     * Add a constraint to the query that requires a particular
	     * <strong>array</strong> key's length to be equal to the provided value.
	     * @param {String} key The array key to check.
	     * @param value The length value.
	     * @return {AV.Query} Returns the query, so you can chain this call.
	     */
	    sizeEqualTo: function sizeEqualTo(key, value) {
	      this._addCondition(key, "$size", value);
	    },

	    /**
	     * Add a constraint to the query that requires a particular key's value to
	     * be not equal to the provided value.
	     * @param {String} key The key to check.
	     * @param value The value that must not be equalled.
	     * @return {AV.Query} Returns the query, so you can chain this call.
	     */
	    notEqualTo: function notEqualTo(key, value) {
	      this._addCondition(key, "$ne", value);
	      return this;
	    },

	    /**
	     * Add a constraint to the query that requires a particular key's value to
	     * be less than the provided value.
	     * @param {String} key The key to check.
	     * @param value The value that provides an upper bound.
	     * @return {AV.Query} Returns the query, so you can chain this call.
	     */
	    lessThan: function lessThan(key, value) {
	      this._addCondition(key, "$lt", value);
	      return this;
	    },

	    /**
	     * Add a constraint to the query that requires a particular key's value to
	     * be greater than the provided value.
	     * @param {String} key The key to check.
	     * @param value The value that provides an lower bound.
	     * @return {AV.Query} Returns the query, so you can chain this call.
	     */
	    greaterThan: function greaterThan(key, value) {
	      this._addCondition(key, "$gt", value);
	      return this;
	    },

	    /**
	     * Add a constraint to the query that requires a particular key's value to
	     * be less than or equal to the provided value.
	     * @param {String} key The key to check.
	     * @param value The value that provides an upper bound.
	     * @return {AV.Query} Returns the query, so you can chain this call.
	     */
	    lessThanOrEqualTo: function lessThanOrEqualTo(key, value) {
	      this._addCondition(key, "$lte", value);
	      return this;
	    },

	    /**
	     * Add a constraint to the query that requires a particular key's value to
	     * be greater than or equal to the provided value.
	     * @param {String} key The key to check.
	     * @param value The value that provides an lower bound.
	     * @return {AV.Query} Returns the query, so you can chain this call.
	     */
	    greaterThanOrEqualTo: function greaterThanOrEqualTo(key, value) {
	      this._addCondition(key, "$gte", value);
	      return this;
	    },

	    /**
	     * Add a constraint to the query that requires a particular key's value to
	     * be contained in the provided list of values.
	     * @param {String} key The key to check.
	     * @param {Array} values The values that will match.
	     * @return {AV.Query} Returns the query, so you can chain this call.
	     */
	    containedIn: function containedIn(key, values) {
	      this._addCondition(key, "$in", values);
	      return this;
	    },

	    /**
	     * Add a constraint to the query that requires a particular key's value to
	     * not be contained in the provided list of values.
	     * @param {String} key The key to check.
	     * @param {Array} values The values that will not match.
	     * @return {AV.Query} Returns the query, so you can chain this call.
	     */
	    notContainedIn: function notContainedIn(key, values) {
	      this._addCondition(key, "$nin", values);
	      return this;
	    },

	    /**
	     * Add a constraint to the query that requires a particular key's value to
	     * contain each one of the provided list of values.
	     * @param {String} key The key to check.  This key's value must be an array.
	     * @param {Array} values The values that will match.
	     * @return {AV.Query} Returns the query, so you can chain this call.
	     */
	    containsAll: function containsAll(key, values) {
	      this._addCondition(key, "$all", values);
	      return this;
	    },

	    /**
	     * Add a constraint for finding objects that contain the given key.
	     * @param {String} key The key that should exist.
	     * @return {AV.Query} Returns the query, so you can chain this call.
	     */
	    exists: function exists(key) {
	      this._addCondition(key, "$exists", true);
	      return this;
	    },

	    /**
	     * Add a constraint for finding objects that do not contain a given key.
	     * @param {String} key The key that should not exist
	     * @return {AV.Query} Returns the query, so you can chain this call.
	     */
	    doesNotExist: function doesNotExist(key) {
	      this._addCondition(key, "$exists", false);
	      return this;
	    },

	    /**
	     * Add a regular expression constraint for finding string values that match
	     * the provided regular expression.
	     * This may be slow for large datasets.
	     * @param {String} key The key that the string to match is stored in.
	     * @param {RegExp} regex The regular expression pattern to match.
	     * @return {AV.Query} Returns the query, so you can chain this call.
	     */
	    matches: function matches(key, regex, modifiers) {
	      this._addCondition(key, "$regex", regex);
	      if (!modifiers) {
	        modifiers = "";
	      }
	      // Javascript regex options support mig as inline options but store them
	      // as properties of the object. We support mi & should migrate them to
	      // modifiers
	      if (regex.ignoreCase) {
	        modifiers += 'i';
	      }
	      if (regex.multiline) {
	        modifiers += 'm';
	      }

	      if (modifiers && modifiers.length) {
	        this._addCondition(key, "$options", modifiers);
	      }
	      return this;
	    },

	    /**
	     * Add a constraint that requires that a key's value matches a AV.Query
	     * constraint.
	     * @param {String} key The key that the contains the object to match the
	     *                     query.
	     * @param {AV.Query} query The query that should match.
	     * @return {AV.Query} Returns the query, so you can chain this call.
	     */
	    matchesQuery: function matchesQuery(key, query) {
	      var queryJSON = query.toJSON();
	      queryJSON.className = query.className;
	      this._addCondition(key, "$inQuery", queryJSON);
	      return this;
	    },

	    /**
	      * Add a constraint that requires that a key's value not matches a
	      * AV.Query constraint.
	      * @param {String} key The key that the contains the object to match the
	      *                     query.
	      * @param {AV.Query} query The query that should not match.
	      * @return {AV.Query} Returns the query, so you can chain this call.
	      */
	    doesNotMatchQuery: function doesNotMatchQuery(key, query) {
	      var queryJSON = query.toJSON();
	      queryJSON.className = query.className;
	      this._addCondition(key, "$notInQuery", queryJSON);
	      return this;
	    },

	    /**
	     * Add a constraint that requires that a key's value matches a value in
	     * an object returned by a different AV.Query.
	     * @param {String} key The key that contains the value that is being
	     *                     matched.
	     * @param {String} queryKey The key in the objects returned by the query to
	     *                          match against.
	     * @param {AV.Query} query The query to run.
	     * @return {AV.Query} Returns the query, so you can chain this call.
	     */
	    matchesKeyInQuery: function matchesKeyInQuery(key, queryKey, query) {
	      var queryJSON = query.toJSON();
	      queryJSON.className = query.className;
	      this._addCondition(key, "$select", { key: queryKey, query: queryJSON });
	      return this;
	    },

	    /**
	     * Add a constraint that requires that a key's value not match a value in
	     * an object returned by a different AV.Query.
	     * @param {String} key The key that contains the value that is being
	     *                     excluded.
	     * @param {String} queryKey The key in the objects returned by the query to
	     *                          match against.
	     * @param {AV.Query} query The query to run.
	     * @return {AV.Query} Returns the query, so you can chain this call.
	     */
	    doesNotMatchKeyInQuery: function doesNotMatchKeyInQuery(key, queryKey, query) {
	      var queryJSON = query.toJSON();
	      queryJSON.className = query.className;
	      this._addCondition(key, "$dontSelect", { key: queryKey, query: queryJSON });
	      return this;
	    },

	    /**
	     * Add constraint that at least one of the passed in queries matches.
	     * @param {Array} queries
	     * @return {AV.Query} Returns the query, so you can chain this call.
	     */
	    _orQuery: function _orQuery(queries) {
	      var queryJSON = _.map(queries, function (q) {
	        return q.toJSON().where;
	      });

	      this._where.$or = queryJSON;
	      return this;
	    },

	    /**
	     * Add constraint that both of the passed in queries matches.
	     * @param {Array} queries
	     * @return {AV.Query} Returns the query, so you can chain this call.
	     */
	    _andQuery: function _andQuery(queries) {
	      var queryJSON = _.map(queries, function (q) {
	        return q.toJSON().where;
	      });

	      this._where.$and = queryJSON;
	      return this;
	    },

	    /**
	     * Converts a string into a regex that matches it.
	     * Surrounding with \Q .. \E does this, we just need to escape \E's in
	     * the text separately.
	     */
	    _quote: function _quote(s) {
	      return "\\Q" + s.replace("\\E", "\\E\\\\E\\Q") + "\\E";
	    },

	    /**
	     * Add a constraint for finding string values that contain a provided
	     * string.  This may be slow for large datasets.
	     * @param {String} key The key that the string to match is stored in.
	     * @param {String} substring The substring that the value must contain.
	     * @return {AV.Query} Returns the query, so you can chain this call.
	     */
	    contains: function contains(key, value) {
	      this._addCondition(key, "$regex", this._quote(value));
	      return this;
	    },

	    /**
	     * Add a constraint for finding string values that start with a provided
	     * string.  This query will use the backend index, so it will be fast even
	     * for large datasets.
	     * @param {String} key The key that the string to match is stored in.
	     * @param {String} prefix The substring that the value must start with.
	     * @return {AV.Query} Returns the query, so you can chain this call.
	     */
	    startsWith: function startsWith(key, value) {
	      this._addCondition(key, "$regex", "^" + this._quote(value));
	      return this;
	    },

	    /**
	     * Add a constraint for finding string values that end with a provided
	     * string.  This will be slow for large datasets.
	     * @param {String} key The key that the string to match is stored in.
	     * @param {String} suffix The substring that the value must end with.
	     * @return {AV.Query} Returns the query, so you can chain this call.
	     */
	    endsWith: function endsWith(key, value) {
	      this._addCondition(key, "$regex", this._quote(value) + "$");
	      return this;
	    },

	    /**
	     * Sorts the results in ascending order by the given key.
	     *
	     * @param {String} key The key to order by.
	     * @return {AV.Query} Returns the query, so you can chain this call.
	     */
	    ascending: function ascending(key) {
	      this._order = key;
	      return this;
	    },

	    /**
	     * Also sorts the results in ascending order by the given key. The previous sort keys have
	     * precedence over this key.
	     *
	     * @param {String} key The key to order by
	     * @return {AV.Query} Returns the query so you can chain this call.
	     */
	    addAscending: function addAscending(key) {
	      if (this._order) this._order += ',' + key;else this._order = key;
	      return this;
	    },

	    /**
	     * Sorts the results in descending order by the given key.
	     *
	     * @param {String} key The key to order by.
	     * @return {AV.Query} Returns the query, so you can chain this call.
	     */
	    descending: function descending(key) {
	      this._order = "-" + key;
	      return this;
	    },

	    /**
	    * Also sorts the results in descending order by the given key. The previous sort keys have
	    * precedence over this key.
	    *
	    * @param {String} key The key to order by
	    * @return {AV.Query} Returns the query so you can chain this call.
	    */
	    addDescending: function addDescending(key) {
	      if (this._order) this._order += ',-' + key;else this._order = '-' + key;
	      return key;
	    },

	    /**
	     * Add a proximity based constraint for finding objects with key point
	     * values near the point given.
	     * @param {String} key The key that the AV.GeoPoint is stored in.
	     * @param {AV.GeoPoint} point The reference AV.GeoPoint that is used.
	     * @return {AV.Query} Returns the query, so you can chain this call.
	     */
	    near: function near(key, point) {
	      if (!(point instanceof AV.GeoPoint)) {
	        // Try to cast it to a GeoPoint, so that near("loc", [20,30]) works.
	        point = new AV.GeoPoint(point);
	      }
	      this._addCondition(key, "$nearSphere", point);
	      return this;
	    },

	    /**
	     * Add a proximity based constraint for finding objects with key point
	     * values near the point given and within the maximum distance given.
	     * @param {String} key The key that the AV.GeoPoint is stored in.
	     * @param {AV.GeoPoint} point The reference AV.GeoPoint that is used.
	     * @param maxDistance Maximum distance (in radians) of results to return.
	     * @return {AV.Query} Returns the query, so you can chain this call.
	     */
	    withinRadians: function withinRadians(key, point, distance) {
	      this.near(key, point);
	      this._addCondition(key, "$maxDistance", distance);
	      return this;
	    },

	    /**
	     * Add a proximity based constraint for finding objects with key point
	     * values near the point given and within the maximum distance given.
	     * Radius of earth used is 3958.8 miles.
	     * @param {String} key The key that the AV.GeoPoint is stored in.
	     * @param {AV.GeoPoint} point The reference AV.GeoPoint that is used.
	     * @param {Number} maxDistance Maximum distance (in miles) of results to
	     *     return.
	     * @return {AV.Query} Returns the query, so you can chain this call.
	     */
	    withinMiles: function withinMiles(key, point, distance) {
	      return this.withinRadians(key, point, distance / 3958.8);
	    },

	    /**
	     * Add a proximity based constraint for finding objects with key point
	     * values near the point given and within the maximum distance given.
	     * Radius of earth used is 6371.0 kilometers.
	     * @param {String} key The key that the AV.GeoPoint is stored in.
	     * @param {AV.GeoPoint} point The reference AV.GeoPoint that is used.
	     * @param {Number} maxDistance Maximum distance (in kilometers) of results
	     *     to return.
	     * @return {AV.Query} Returns the query, so you can chain this call.
	     */
	    withinKilometers: function withinKilometers(key, point, distance) {
	      return this.withinRadians(key, point, distance / 6371.0);
	    },

	    /**
	     * Add a constraint to the query that requires a particular key's
	     * coordinates be contained within a given rectangular geographic bounding
	     * box.
	     * @param {String} key The key to be constrained.
	     * @param {AV.GeoPoint} southwest
	     *     The lower-left inclusive corner of the box.
	     * @param {AV.GeoPoint} northeast
	     *     The upper-right inclusive corner of the box.
	     * @return {AV.Query} Returns the query, so you can chain this call.
	     */
	    withinGeoBox: function withinGeoBox(key, southwest, northeast) {
	      if (!(southwest instanceof AV.GeoPoint)) {
	        southwest = new AV.GeoPoint(southwest);
	      }
	      if (!(northeast instanceof AV.GeoPoint)) {
	        northeast = new AV.GeoPoint(northeast);
	      }
	      this._addCondition(key, '$within', { '$box': [southwest, northeast] });
	      return this;
	    },

	    /**
	     * Include nested AV.Objects for the provided key.  You can use dot
	     * notation to specify which fields in the included object are also fetch.
	     * @param {String} key The name of the key to include.
	     * @return {AV.Query} Returns the query, so you can chain this call.
	     */
	    include: function include() {
	      var self = this;
	      AV._arrayEach(arguments, function (key) {
	        if (_.isArray(key)) {
	          self._include = self._include.concat(key);
	        } else {
	          self._include.push(key);
	        }
	      });
	      return this;
	    },

	    /**
	     * Restrict the fields of the returned AV.Objects to include only the
	     * provided keys.  If this is called multiple times, then all of the keys
	     * specified in each of the calls will be included.
	     * @param {Array} keys The names of the keys to include.
	     * @return {AV.Query} Returns the query, so you can chain this call.
	     */
	    select: function select() {
	      var self = this;
	      this._select = this._select || [];
	      AV._arrayEach(arguments, function (key) {
	        if (_.isArray(key)) {
	          self._select = self._select.concat(key);
	        } else {
	          self._select.push(key);
	        }
	      });
	      return this;
	    },

	    /**
	     * Iterates over each result of a query, calling a callback for each one. If
	     * the callback returns a promise, the iteration will not continue until
	     * that promise has been fulfilled. If the callback returns a rejected
	     * promise, then iteration will stop with that error. The items are
	     * processed in an unspecified order. The query may not have any sort order,
	     * and may not use limit or skip.
	     * @param callback {Function} Callback that will be called with each result
	     *     of the query.
	     * @param options {Object} An optional Backbone-like options object with
	     *     success and error callbacks that will be invoked once the iteration
	     *     has finished.
	     * @return {AV.Promise} A promise that will be fulfilled once the
	     *     iteration has completed.
	     */
	    each: function each(callback, options) {
	      options = options || {};

	      if (this._order || this._skip || this._limit >= 0) {
	        var error = "Cannot iterate on a query with sort, skip, or limit.";
	        return AV.Promise.error(error)._thenRunCallbacks(options);
	      }

	      var promise = new AV.Promise();

	      var query = new AV.Query(this.objectClass);
	      // We can override the batch size from the options.
	      // This is undocumented, but useful for testing.
	      query._limit = options.batchSize || 100;
	      query._where = _.clone(this._where);
	      query._include = _.clone(this._include);

	      query.ascending('objectId');

	      var finished = false;
	      return AV.Promise._continueWhile(function () {
	        return !finished;
	      }, function () {
	        return query.find().then(function (results) {
	          var callbacksDone = AV.Promise.as();
	          AV._.each(results, function (result) {
	            callbacksDone = callbacksDone.then(function () {
	              return callback(result);
	            });
	          });

	          return callbacksDone.then(function () {
	            if (results.length >= query._limit) {
	              query.greaterThan("objectId", results[results.length - 1].id);
	            } else {
	              finished = true;
	            }
	          });
	        });
	      })._thenRunCallbacks(options);
	    }
	  };

	  AV.FriendShipQuery = AV.Query._extend({
	    _objectClass: AV.User,
	    _newObject: function _newObject() {
	      return new AV.User();
	    },
	    _processResult: function _processResult(json) {
	      if (json && json[this._friendshipTag]) {
	        var user = json[this._friendshipTag];
	        if (user.__type === 'Pointer' && user.className === '_User') {
	          delete user.__type;
	          delete user.className;
	        }
	        return user;
	      } else {
	        return null;
	      }
	    }
	  });
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(18);

	/*global FB: false , console: false*/
	module.exports = function (AV) {
	  var PUBLIC_KEY = "*";

	  var initialized = false;
	  var requestedPermissions;
	  var initOptions;
	  var provider = {
	    authenticate: function authenticate(options) {
	      var self = this;
	      FB.login(function (response) {
	        if (response.authResponse) {
	          if (options.success) {
	            options.success(self, {
	              id: response.authResponse.userID,
	              access_token: response.authResponse.accessToken,
	              expiration_date: new Date(response.authResponse.expiresIn * 1000 + new Date().getTime()).toJSON()
	            });
	          }
	        } else {
	          if (options.error) {
	            options.error(self, response);
	          }
	        }
	      }, {
	        scope: requestedPermissions
	      });
	    },
	    restoreAuthentication: function restoreAuthentication(authData) {
	      if (authData) {
	        var authResponse = {
	          userID: authData.id,
	          accessToken: authData.access_token,
	          expiresIn: (AV._parseDate(authData.expiration_date).getTime() - new Date().getTime()) / 1000
	        };
	        var newOptions = _.clone(initOptions);
	        newOptions.authResponse = authResponse;

	        // Suppress checks for login status from the browser.
	        newOptions.status = false;
	        FB.init(newOptions);
	      }
	      return true;
	    },
	    getAuthType: function getAuthType() {
	      return "facebook";
	    },
	    deauthenticate: function deauthenticate() {
	      this.restoreAuthentication(null);
	      FB.logout();
	    }
	  };

	  /**
	   * Provides a set of utilities for using AV with Facebook.
	   * @namespace
	   * Provides a set of utilities for using AV with Facebook.
	   */
	  AV.FacebookUtils = {
	    /**
	     * Initializes AV Facebook integration.  Call this function after you
	     * have loaded the Facebook Javascript SDK with the same parameters
	     * as you would pass to<code>
	     * <a href=
	     * "https://developers.facebook.com/docs/reference/javascript/FB.init/">
	     * FB.init()</a></code>.  AV.FacebookUtils will invoke FB.init() for you
	     * with these arguments.
	     *
	     * @param {Object} options Facebook options argument as described here:
	     *   <a href=
	     *   "https://developers.facebook.com/docs/reference/javascript/FB.init/">
	     *   FB.init()</a>. The status flag will be coerced to 'false' because it
	     *   interferes with AV Facebook integration. Call FB.getLoginStatus()
	     *   explicitly if this behavior is required by your application.
	     */
	    init: function init(options) {
	      console.warn("AV.FacebookUtils is deprecated, please don't use it anymore.");
	      if (typeof FB === 'undefined') {
	        throw "The Facebook JavaScript SDK must be loaded before calling init.";
	      }
	      initOptions = _.clone(options) || {};
	      if (initOptions.status && typeof console !== "undefined") {
	        var warn = console.warn || console.log || function () {};
	        warn.call(console, "The 'status' flag passed into" + " FB.init, when set to true, can interfere with AV Facebook" + " integration, so it has been suppressed. Please call" + " FB.getLoginStatus() explicitly if you require this behavior.");
	      }
	      initOptions.status = false;
	      FB.init(initOptions);
	      AV.User._registerAuthenticationProvider(provider);
	      initialized = true;
	    },

	    /**
	     * Gets whether the user has their account linked to Facebook.
	     *
	     * @param {AV.User} user User to check for a facebook link.
	     *     The user must be logged in on this device.
	     * @return {Boolean} <code>true</code> if the user has their account
	     *     linked to Facebook.
	     */
	    isLinked: function isLinked(user) {
	      return user._isLinked("facebook");
	    },

	    /**
	     * Logs in a user using Facebook. This method delegates to the Facebook
	     * SDK to authenticate the user, and then automatically logs in (or
	     * creates, in the case where it is a new user) a AV.User.
	     *
	     * @param {String, Object} permissions The permissions required for Facebook
	     *    log in.  This is a comma-separated string of permissions.
	     *    Alternatively, supply a Facebook authData object as described in our
	     *    REST API docs if you want to handle getting facebook auth tokens
	     *    yourself.
	     * @param {Object} options Standard options object with success and error
	     *    callbacks.
	     */
	    logIn: function logIn(permissions, options) {
	      if (!permissions || _.isString(permissions)) {
	        if (!initialized) {
	          throw "You must initialize FacebookUtils before calling logIn.";
	        }
	        requestedPermissions = permissions;
	        return AV.User._logInWith("facebook", options);
	      } else {
	        var newOptions = _.clone(options) || {};
	        newOptions.authData = permissions;
	        return AV.User._logInWith("facebook", newOptions);
	      }
	    },

	    /**
	     * Links Facebook to an existing PFUser. This method delegates to the
	     * Facebook SDK to authenticate the user, and then automatically links
	     * the account to the AV.User.
	     *
	     * @param {AV.User} user User to link to Facebook. This must be the
	     *     current user.
	     * @param {String, Object} permissions The permissions required for Facebook
	     *    log in.  This is a comma-separated string of permissions.
	     *    Alternatively, supply a Facebook authData object as described in our
	     *    REST API docs if you want to handle getting facebook auth tokens
	     *    yourself.
	     * @param {Object} options Standard options object with success and error
	     *    callbacks.
	     */
	    link: function link(user, permissions, options) {
	      if (!permissions || _.isString(permissions)) {
	        if (!initialized) {
	          throw "You must initialize FacebookUtils before calling link.";
	        }
	        requestedPermissions = permissions;
	        return user._linkWith("facebook", options);
	      } else {
	        var newOptions = _.clone(options) || {};
	        newOptions.authData = permissions;
	        return user._linkWith("facebook", newOptions);
	      }
	    },

	    /**
	     * Unlinks the AV.User from a Facebook account.
	     *
	     * @param {AV.User} user User to unlink from Facebook. This must be the
	     *     current user.
	     * @param {Object} options Standard options object with success and error
	     *    callbacks.
	     */
	    unlink: function unlink(user, options) {
	      if (!initialized) {
	        throw "You must initialize FacebookUtils before calling unlink.";
	      }
	      return user._unlinkFrom("facebook", options);
	    }
	  };
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(18);

	/*global _: false, document: false, window: false, navigator: false */
	module.exports = function (AV) {
	  /**
	   * History serves as a global router (per frame) to handle hashchange
	   * events or pushState, match the appropriate route, and trigger
	   * callbacks. You shouldn't ever have to create one of these yourself
	   * — you should use the reference to <code>AV.history</code>
	   * that will be created for you automatically if you make use of
	   * Routers with routes.
	   * @class
	   *
	   * <p>A fork of Backbone.History, provided for your convenience.  If you
	   * use this class, you must also include jQuery, or another library
	   * that provides a jQuery-compatible $ function.  For more information,
	   * see the <a href="http://documentcloud.github.com/backbone/#History">
	   * Backbone documentation</a>.</p>
	   * <p><strong><em>Available in the client SDK only.</em></strong></p>
	   */
	  AV.History = function () {
	    console.warn("AV.History is deprecated, please don't use it anymore.");
	    this.handlers = [];
	    _.bindAll(this, 'checkUrl');
	  };

	  // Cached regex for cleaning leading hashes and slashes .
	  var routeStripper = /^[#\/]/;

	  // Cached regex for detecting MSIE.
	  var isExplorer = /msie [\w.]+/;

	  // Has the history handling already been started?
	  AV.History.started = false;

	  // Set up all inheritable **AV.History** properties and methods.
	  _.extend(AV.History.prototype, AV.Events,
	  /** @lends AV.History.prototype */{

	    // The default interval to poll for hash changes, if necessary, is
	    // twenty times a second.
	    interval: 50,

	    // Gets the true hash value. Cannot use location.hash directly due to bug
	    // in Firefox where location.hash will always be decoded.
	    getHash: function getHash(windowOverride) {
	      var loc = windowOverride ? windowOverride.location : window.location;
	      var match = loc.href.match(/#(.*)$/);
	      return match ? match[1] : '';
	    },

	    // Get the cross-browser normalized URL fragment, either from the URL,
	    // the hash, or the override.
	    getFragment: function getFragment(fragment, forcePushState) {
	      if (AV._isNullOrUndefined(fragment)) {
	        if (this._hasPushState || forcePushState) {
	          fragment = window.location.pathname;
	          var search = window.location.search;
	          if (search) {
	            fragment += search;
	          }
	        } else {
	          fragment = this.getHash();
	        }
	      }
	      if (!fragment.indexOf(this.options.root)) {
	        fragment = fragment.substr(this.options.root.length);
	      }
	      return fragment.replace(routeStripper, '');
	    },

	    /**
	     * Start the hash change handling, returning `true` if the current
	     * URL matches an existing route, and `false` otherwise.
	     */
	    start: function start(options) {
	      if (AV.History.started) {
	        throw new Error("AV.history has already been started");
	      }
	      AV.History.started = true;

	      // Figure out the initial configuration. Do we need an iframe?
	      // Is pushState desired ... is it available?
	      this.options = _.extend({}, { root: '/' }, this.options, options);
	      this._wantsHashChange = this.options.hashChange !== false;
	      this._wantsPushState = !!this.options.pushState;
	      this._hasPushState = !!(this.options.pushState && window.history && window.history.pushState);
	      var fragment = this.getFragment();
	      var docMode = document.documentMode;
	      var oldIE = isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7);

	      if (oldIE) {
	        this.iframe = AV.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo('body')[0].contentWindow;
	        this.navigate(fragment);
	      }

	      // Depending on whether we're using pushState or hashes, and whether
	      // 'onhashchange' is supported, determine how we check the URL state.
	      if (this._hasPushState) {
	        AV.$(window).bind('popstate', this.checkUrl);
	      } else if (this._wantsHashChange && 'onhashchange' in window && !oldIE) {
	        AV.$(window).bind('hashchange', this.checkUrl);
	      } else if (this._wantsHashChange) {
	        this._checkUrlInterval = window.setInterval(this.checkUrl, this.interval);
	      }

	      // Determine if we need to change the base url, for a pushState link
	      // opened by a non-pushState browser.
	      this.fragment = fragment;
	      var loc = window.location;
	      var atRoot = loc.pathname === this.options.root;

	      // If we've started off with a route from a `pushState`-enabled browser,
	      // but we're currently in a browser that doesn't support it...
	      if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !atRoot) {
	        this.fragment = this.getFragment(null, true);
	        window.location.replace(this.options.root + '#' + this.fragment);
	        // Return immediately as browser will do redirect to new url
	        return true;

	        // Or if we've started out with a hash-based route, but we're currently
	        // in a browser where it could be `pushState`-based instead...
	      } else if (this._wantsPushState && this._hasPushState && atRoot && loc.hash) {
	          this.fragment = this.getHash().replace(routeStripper, '');
	          window.history.replaceState({}, document.title, loc.protocol + '//' + loc.host + this.options.root + this.fragment);
	        }

	      if (!this.options.silent) {
	        return this.loadUrl();
	      }
	    },

	    // Disable AV.history, perhaps temporarily. Not useful in a real app,
	    // but possibly useful for unit testing Routers.
	    stop: function stop() {
	      AV.$(window).unbind('popstate', this.checkUrl).unbind('hashchange', this.checkUrl);
	      window.clearInterval(this._checkUrlInterval);
	      AV.History.started = false;
	    },

	    // Add a route to be tested when the fragment changes. Routes added later
	    // may override previous routes.
	    route: function route(_route, callback) {
	      this.handlers.unshift({ route: _route, callback: callback });
	    },

	    // Checks the current URL to see if it has changed, and if it has,
	    // calls `loadUrl`, normalizing across the hidden iframe.
	    checkUrl: function checkUrl(e) {
	      var current = this.getFragment();
	      if (current === this.fragment && this.iframe) {
	        current = this.getFragment(this.getHash(this.iframe));
	      }
	      if (current === this.fragment) {
	        return false;
	      }
	      if (this.iframe) {
	        this.navigate(current);
	      }
	      if (!this.loadUrl()) {
	        this.loadUrl(this.getHash());
	      }
	    },

	    // Attempt to load the current URL fragment. If a route succeeds with a
	    // match, returns `true`. If no defined routes matches the fragment,
	    // returns `false`.
	    loadUrl: function loadUrl(fragmentOverride) {
	      var fragment = this.fragment = this.getFragment(fragmentOverride);
	      var matched = _.any(this.handlers, function (handler) {
	        if (handler.route.test(fragment)) {
	          handler.callback(fragment);
	          return true;
	        }
	      });
	      return matched;
	    },

	    // Save a fragment into the hash history, or replace the URL state if the
	    // 'replace' option is passed. You are responsible for properly URL-encoding
	    // the fragment in advance.
	    //
	    // The options object can contain `trigger: true` if you wish to have the
	    // route callback be fired (not usually desirable), or `replace: true`, if
	    // you wish to modify the current URL without adding an entry to the
	    // history.
	    navigate: function navigate(fragment, options) {
	      if (!AV.History.started) {
	        return false;
	      }
	      if (!options || options === true) {
	        options = { trigger: options };
	      }
	      var frag = (fragment || '').replace(routeStripper, '');
	      if (this.fragment === frag) {
	        return;
	      }

	      // If pushState is available, we use it to set the fragment as a real URL.
	      if (this._hasPushState) {
	        if (frag.indexOf(this.options.root) !== 0) {
	          frag = this.options.root + frag;
	        }
	        this.fragment = frag;
	        var replaceOrPush = options.replace ? 'replaceState' : 'pushState';
	        window.history[replaceOrPush]({}, document.title, frag);

	        // If hash changes haven't been explicitly disabled, update the hash
	        // fragment to store history.
	      } else if (this._wantsHashChange) {
	          this.fragment = frag;
	          this._updateHash(window.location, frag, options.replace);
	          if (this.iframe && frag !== this.getFragment(this.getHash(this.iframe))) {
	            // Opening and closing the iframe tricks IE7 and earlier
	            // to push a history entry on hash-tag change.
	            // When replace is true, we don't want this.
	            if (!options.replace) {
	              this.iframe.document.open().close();
	            }
	            this._updateHash(this.iframe.location, frag, options.replace);
	          }

	          // If you've told us that you explicitly don't want fallback hashchange-
	          // based history, then `navigate` becomes a page refresh.
	        } else {
	            window.location.assign(this.options.root + fragment);
	          }
	      if (options.trigger) {
	        this.loadUrl(fragment);
	      }
	    },

	    // Update the hash location, either replacing the current entry, or adding
	    // a new one to the browser history.
	    _updateHash: function _updateHash(location, fragment, replace) {
	      if (replace) {
	        var s = location.toString().replace(/(javascript:|#).*$/, '');
	        location.replace(s + '#' + fragment);
	      } else {
	        location.hash = fragment;
	      }
	    }
	  });
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(18);

	/*global _: false*/
	module.exports = function (AV) {
	  /**
	   * Routers map faux-URLs to actions, and fire events when routes are
	   * matched. Creating a new one sets its `routes` hash, if not set statically.
	   * @class
	   *
	   * <p>A fork of Backbone.Router, provided for your convenience.
	   * For more information, see the
	   * <a href="http://documentcloud.github.com/backbone/#Router">Backbone
	   * documentation</a>.</p>
	   * <p><strong><em>Available in the client SDK only.</em></strong></p>
	   */
	  AV.Router = function (options) {
	    console.warn("AV.Router is deprecated, please don't use it anymore.");
	    options = options || {};
	    if (options.routes) {
	      this.routes = options.routes;
	    }
	    this._bindRoutes();
	    this.initialize.apply(this, arguments);
	  };

	  // Cached regular expressions for matching named param parts and splatted
	  // parts of route strings.
	  var namedParam = /:\w+/g;
	  var splatParam = /\*\w+/g;
	  var escapeRegExp = /[\-\[\]{}()+?.,\\\^\$\|#\s]/g;

	  // Set up all inheritable **AV.Router** properties and methods.
	  _.extend(AV.Router.prototype, AV.Events,
	  /** @lends AV.Router.prototype */{

	    /**
	     * Initialize is an empty function by default. Override it with your own
	     * initialization logic.
	     */
	    initialize: function initialize() {},

	    /**
	     * Manually bind a single named route to a callback. For example:
	     *
	     * <pre>this.route('search/:query/p:num', 'search', function(query, num) {
	     *       ...
	     *     });</pre>
	     */
	    route: function route(_route, name, callback) {
	      AV.history = AV.history || new AV.History();
	      if (!_.isRegExp(_route)) {
	        _route = this._routeToRegExp(_route);
	      }
	      if (!callback) {
	        callback = this[name];
	      }
	      AV.history.route(_route, _.bind(function (fragment) {
	        var args = this._extractParameters(_route, fragment);
	        if (callback) {
	          callback.apply(this, args);
	        }
	        this.trigger.apply(this, ['route:' + name].concat(args));
	        AV.history.trigger('route', this, name, args);
	      }, this));
	      return this;
	    },

	    /**
	     * Whenever you reach a point in your application that you'd
	     * like to save as a URL, call navigate in order to update the
	     * URL. If you wish to also call the route function, set the
	     * trigger option to true. To update the URL without creating
	     * an entry in the browser's history, set the replace option
	     * to true.
	     */
	    navigate: function navigate(fragment, options) {
	      AV.history.navigate(fragment, options);
	    },

	    // Bind all defined routes to `AV.history`. We have to reverse the
	    // order of the routes here to support behavior where the most general
	    // routes can be defined at the bottom of the route map.
	    _bindRoutes: function _bindRoutes() {
	      if (!this.routes) {
	        return;
	      }
	      var routes = [];
	      for (var route in this.routes) {
	        if (this.routes.hasOwnProperty(route)) {
	          routes.unshift([route, this.routes[route]]);
	        }
	      }
	      for (var i = 0, l = routes.length; i < l; i++) {
	        this.route(routes[i][0], routes[i][1], this[routes[i][1]]);
	      }
	    },

	    // Convert a route string into a regular expression, suitable for matching
	    // against the current location hash.
	    _routeToRegExp: function _routeToRegExp(route) {
	      route = route.replace(escapeRegExp, '\\$&').replace(namedParam, '([^\/]+)').replace(splatParam, '(.*?)');
	      return new RegExp('^' + route + '$');
	    },

	    // Given a route, and a URL fragment that it matches, return the array of
	    // extracted parameters.
	    _extractParameters: function _extractParameters(route, fragment) {
	      return route.exec(fragment).slice(1);
	    }
	  });

	  /**
	   * @function
	   * @param {Object} instanceProps Instance properties for the router.
	   * @param {Object} classProps Class properies for the router.
	   * @return {Class} A new subclass of <code>AV.Router</code>.
	   */
	  AV.Router.extend = AV._extend;
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(18);

	module.exports = function (AV) {
	  /**
	   * @namespace Contains functions for calling and declaring
	   * <a href="/docs/cloud_code_guide#functions">cloud functions</a>.
	   * <p><strong><em>
	   *   Some functions are only available from Cloud Code.
	   * </em></strong></p>
	   */
	  AV.Cloud = AV.Cloud || {};

	  _.extend(AV.Cloud, /** @lends AV.Cloud */{
	    /**
	     * Makes a call to a cloud function.
	     * @param {String} name The function name.
	     * @param {Object} data The parameters to send to the cloud function.
	     * @param {Object} options A Backbone-style options object
	     * options.success, if set, should be a function to handle a successful
	     * call to a cloud function.  options.error should be a function that
	     * handles an error running the cloud function.  Both functions are
	     * optional.  Both functions take a single argument.
	     * @return {AV.Promise} A promise that will be resolved with the result
	     * of the function.
	     */
	    run: function run(name, data, options) {
	      var request = AV._request("functions", name, null, 'POST', AV._encode(data, null, true));

	      return request.then(function (resp) {
	        return AV._decode(null, resp).result;
	      })._thenRunCallbacks(options);
	    },

	    /**
	     * Make a call to request server date time.
	     * @param {Object} options A Backbone-style options object
	     * options.success, if set, should be a function to handle a successful
	     * call to a cloud function.  options.error should be a function that
	     * handles an error running the cloud function.  Both functions are
	     * optional.  Both functions take a single argument.
	     * @return {AV.Promise} A promise that will be resolved with the result
	     * of the function.
	     * @since 0.5.9
	     */
	    getServerDate: function getServerDate(options) {
	      var request = AV._request("date", null, null, 'GET');

	      return request.then(function (resp) {
	        return AV._decode(null, resp);
	      })._thenRunCallbacks(options);
	    },

	    /**
	     * Makes a call to request a sms code for operation verification.
	     * @param {Object} data The mobile phone number string or a JSON
	     *    object that contains mobilePhoneNumber,template,op,ttl,name etc.
	     * @param {Object} options A Backbone-style options object
	     * @return {AV.Promise} A promise that will be resolved with the result
	     * of the function.
	     */
	    requestSmsCode: function requestSmsCode(data, options) {
	      if (_.isString(data)) {
	        data = { mobilePhoneNumber: data };
	      }
	      if (!data.mobilePhoneNumber) {
	        throw "Missing mobilePhoneNumber.";
	      }
	      var request = AV._request("requestSmsCode", null, null, 'POST', data);
	      return request._thenRunCallbacks(options);
	    },

	    /**
	     * Makes a call to verify sms code that sent by AV.Cloud.requestSmsCode
	     * @param {String} code The sms code sent by AV.Cloud.requestSmsCode
	     * @param {phone} phone The mobile phoner number(optional).
	     * @param {Object} options A Backbone-style options object
	     * @return {AV.Promise} A promise that will be resolved with the result
	     * of the function.
	     */
	    verifySmsCode: function verifySmsCode(code, phone, options) {
	      if (!code) throw "Missing sms code.";
	      var params = {};
	      if (AV._.isString(phone)) {
	        params['mobilePhoneNumber'] = phone;
	      } else {
	        // To be compatible with old versions.
	        options = phone;
	      }

	      var request = AV._request("verifySmsCode", code, null, 'POST', params);
	      return request._thenRunCallbacks(options);
	    }
	  });
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (AV) {
	  AV.Installation = AV.Object.extend("_Installation");

	  /**
	   * Contains functions to deal with Push in AV
	   * @name AV.Push
	   * @namespace
	   */
	  AV.Push = AV.Push || {};

	  /**
	   * Sends a push notification.
	   * @param {Object} data -  The data of the push notification.  Valid fields
	   * are:
	   *   <ol>
	   *     <li>channels - An Array of channels to push to.</li>
	   *     <li>push_time - A Date object for when to send the push.</li>
	   *     <li>expiration_time -  A Date object for when to expire
	   *         the push.</li>
	   *     <li>expiration_interval - The seconds from now to expire the push.</li>
	   *     <li>where - A AV.Query over AV.Installation that is used to match
	   *         a set of installations to push to.</li>
	   *     <li>cql - A CQL statement over AV.Installation that is used to match
	   *         a set of installations to push to.</li>
	   *     <li>data - The data to send as part of the push</li>
	   *   <ol>
	   * @param {Object} options An object that has an optional success function,
	   * that takes no arguments and will be called on a successful push, and
	   * an error function that takes a AV.Error and will be called if the push
	   * failed.
	   */
	  AV.Push.send = function (data, options) {
	    if (data.where) {
	      data.where = data.where.toJSON().where;
	    }

	    if (data.where && data.cql) {
	      throw "Both where and cql can't be set";
	    }

	    if (data.push_time) {
	      data.push_time = data.push_time.toJSON();
	    }

	    if (data.expiration_time) {
	      data.expiration_time = data.expiration_time.toJSON();
	    }

	    if (data.expiration_time && data.expiration_time_interval) {
	      throw "Both expiration_time and expiration_time_interval can't be set";
	    }

	    var request = AV._request('push', null, null, 'POST', data);
	    return request._thenRunCallbacks(options);
	  };
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(18);

	module.exports = function (AV) {
	  /**
	   * Contains functions to deal with Status in AVOS Cloud.
	   * @name AV.Status
	   * @namespace
	   */
	  AV.Status = function (imageUrl, message) {
	    this.data = {};
	    this.inboxType = 'default';
	    this.query = null;
	    if (imageUrl && typeof imageUrl === 'object') {
	      this.data = imageUrl;
	    } else {
	      if (imageUrl) {
	        this.data.image = imageUrl;
	      }
	      if (message) {
	        this.data.message = message;
	      }
	    }
	    return this;
	  };

	  AV.Status.prototype = {
	    /**
	     * Gets the value of an attribute in status data.
	     * @param {String} attr The string name of an attribute.
	     */
	    get: function get(attr) {
	      return this.data[attr];
	    },
	    /**
	     * Sets a hash of model attributes on the status data.
	     * @param {String} key The key to set.
	     * @param {} value The value to give it.
	     */
	    set: function set(key, value) {
	      this.data[key] = value;
	      return this;
	    },
	    /**
	     * Destroy this status,then it will not be avaiable in other user's inboxes.
	     * @param {Object} options An optional Backbone-like options object with
	     *     success and error callbacks that will be invoked once the iteration
	     *     has finished.
	     * @return {AV.Promise} A promise that is fulfilled when the destroy
	     *     completes.
	     */
	    destroy: function destroy(options) {
	      if (!this.id) return AV.Promise.error('The status id is not exists.')._thenRunCallbacks(options);
	      var request = AV._request("statuses", null, this.id, 'DELETE');
	      return request._thenRunCallbacks(options);
	    },
	    /**
	      * Cast the AV.Status object to an AV.Object pointer.
	      * @return {AV.Object} A AV.Object pointer.
	      */
	    toObject: function toObject() {
	      if (!this.id) return null;
	      return AV.Object.createWithoutData('_Status', this.id);
	    },
	    _getDataJSON: function _getDataJSON() {
	      var json = AV._.clone(this.data);
	      return AV._encode(json);
	    },
	    /**
	     * Send  a status by a AV.Query object.
	     * <p>For example,send a status to male users:<br/><pre>
	     *     var status = new AVStatus('image url', 'a message');
	     *     status.query = new AV.Query('_User');
	     *     status.query.equalTo('gender', 'male');
	     *     status.send().then(function(){
	     *              //send status successfully.
	     *      }, function(err){
	     *             //an error threw.
	     *             console.dir(err);
	     *      });
	     * </pre></p>
	     * @since 0.3.0
	     * @param {Object} options An optional Backbone-like options object with
	     *     success and error callbacks that will be invoked once the iteration
	     *     has finished.
	     * @return {AV.Promise} A promise that is fulfilled when the send
	     *     completes.
	     */
	    send: function send(options) {
	      if (!AV.User.current()) {
	        throw 'Please signin an user.';
	      }
	      if (!this.query) {
	        return AV.Status.sendStatusToFollowers(this, options);
	      }

	      var query = this.query.toJSON();
	      query.className = this.query.className;
	      var data = {};
	      data.query = query;
	      this.data = this.data || {};
	      var currUser = AV.Object.createWithoutData('_User', AV.User.current().id)._toPointer();
	      this.data.source = this.data.source || currUser;
	      data.data = this._getDataJSON();
	      data.inboxType = this.inboxType || 'default';

	      var request = AV._request('statuses', null, null, 'POST', data);
	      var self = this;
	      return request.then(function (response) {
	        self.id = response.objectId;
	        self.createdAt = AV._parseDate(response.createdAt);
	        return self;
	      })._thenRunCallbacks(options);
	    },

	    _finishFetch: function _finishFetch(serverData) {
	      this.id = serverData.objectId;
	      this.createdAt = AV._parseDate(serverData.createdAt);
	      this.updatedAt = AV._parseDate(serverData.updatedAt);
	      this.messageId = serverData.messageId;
	      delete serverData.messageId;
	      delete serverData.objectId;
	      delete serverData.createdAt;
	      delete serverData.updatedAt;
	      this.data = AV._decode(undefined, serverData);
	    }
	  };

	  /**
	   * Send  a status to current signined user's followers.For example:
	   * <p><pre>
	   *     var status = new AVStatus('image url', 'a message');
	   *     AV.Status.sendStatusToFollowers(status).then(function(){
	   *              //send status successfully.
	   *      }, function(err){
	   *             //an error threw.
	   *             console.dir(err);
	   *      });
	   * </pre></p>
	   * @since 0.3.0
	   * @param {AV.Status} status  A status object to be send to followers.
	   * @param {Object} options An optional Backbone-like options object with
	   *     success and error callbacks that will be invoked once the iteration
	   *     has finished.
	   * @return {AV.Promise} A promise that is fulfilled when the send
	   *     completes.
	   */
	  AV.Status.sendStatusToFollowers = function (status, options) {
	    if (!AV.User.current()) {
	      throw 'Please signin an user.';
	    }
	    var query = {};
	    query.className = '_Follower';
	    query.keys = 'follower';
	    var currUser = AV.Object.createWithoutData('_User', AV.User.current().id)._toPointer();
	    query.where = { user: currUser };
	    var data = {};
	    data.query = query;
	    status.data = status.data || {};
	    status.data.source = status.data.source || currUser;
	    data.data = status._getDataJSON();
	    data.inboxType = status.inboxType || 'default';

	    var request = AV._request('statuses', null, null, 'POST', data);
	    return request.then(function (response) {
	      status.id = response.objectId;
	      status.createdAt = AV._parseDate(response.createdAt);
	      return status;
	    })._thenRunCallbacks(options);
	  };

	  /**
	   * <p>Send  a status from current signined user to other user's private status inbox.</p>
	   * <p>For example,send a private status to user '52e84e47e4b0f8de283b079b':<br/>
	   * <pre>
	   *    var status = new AVStatus('image url', 'a message');
	   *     AV.Status.sendPrivateStatus(status, '52e84e47e4b0f8de283b079b').then(function(){
	   *              //send status successfully.
	   *      }, function(err){
	   *             //an error threw.
	   *             console.dir(err);
	   *      });
	   * </pre></p>
	   * @since 0.3.0
	   * @param {AV.Status} status  A status object to be send to followers.
	   * @param {} target The target user or user's objectId.
	   * @param {Object} options An optional Backbone-like options object with
	   *     success and error callbacks that will be invoked once the iteration
	   *     has finished.
	   * @return {AV.Promise} A promise that is fulfilled when the send
	   *     completes.
	   */
	  AV.Status.sendPrivateStatus = function (status, target, options) {
	    if (!AV.User.current()) {
	      throw 'Please signin an user.';
	    }
	    if (!target) {
	      throw "Invalid target user.";
	    }
	    var userObjectId = _.isString(target) ? target : target.id;
	    if (!userObjectId) {
	      throw "Invalid target user.";
	    }

	    var query = {};
	    query.className = '_User';
	    var currUser = AV.Object.createWithoutData('_User', AV.User.current().id)._toPointer();
	    query.where = { objectId: userObjectId };
	    var data = {};
	    data.query = query;
	    status.data = status.data || {};
	    status.data.source = status.data.source || currUser;
	    data.data = status._getDataJSON();
	    data.inboxType = 'private';
	    status.inboxType = 'private';

	    var request = AV._request('statuses', null, null, 'POST', data);
	    return request.then(function (response) {
	      status.id = response.objectId;
	      status.createdAt = AV._parseDate(response.createdAt);
	      return status;
	    })._thenRunCallbacks(options);
	  };

	  /**
	   * Count unread statuses in someone's inbox.For example:<br/>
	   * <p><pre>
	   *  AV.Status.countUnreadStatuses(AV.User.current()).then(function(response){
	   *    console.log(response.unread); //unread statuses number.
	   *    console.log(response.total);  //total statuses number.
	   *  });
	   * </pre></p>
	   * @since 0.3.0
	   * @param {Object} source The status source.
	   * @return {AV.Query} The query object for status.
	   * @return {AV.Promise} A promise that is fulfilled when the count
	   *     completes.
	   */
	  AV.Status.countUnreadStatuses = function (owner) {
	    if (!AV.User.current() && owner == null) {
	      throw 'Please signin an user or pass the owner objectId.';
	    }
	    owner = owner || AV.User.current();
	    var options = !_.isString(arguments[1]) ? arguments[1] : arguments[2];
	    var inboxType = !_.isString(arguments[1]) ? 'default' : arguments[1];
	    var params = {};
	    params.inboxType = AV._encode(inboxType);
	    params.owner = AV._encode(owner);
	    var request = AV._request('subscribe/statuses/count', null, null, 'GET', params);
	    return request._thenRunCallbacks(options);
	  };

	  /**
	   * Create a status query to find someone's published statuses.For example:<br/>
	   * <p><pre>
	   *   //Find current user's published statuses.
	   *   var query = AV.Status.statusQuery(AV.User.current());
	   *   query.find().then(function(statuses){
	   *      //process statuses
	   *   });
	   * </pre></p>
	   * @since 0.3.0
	   * @param {Object} source The status source.
	   * @return {AV.Query} The query object for status.
	   */
	  AV.Status.statusQuery = function (source) {
	    var query = new AV.Query('_Status');
	    if (source) {
	      query.equalTo('source', source);
	    }
	    return query;
	  };

	  /**
	   * <p>AV.InboxQuery defines a query that is used to fetch somebody's inbox statuses.</p>
	   * @see AV.Status#inboxQuery
	   * @class
	   */
	  AV.InboxQuery = AV.Query._extend( /** @lends AV.InboxQuery.prototype */{
	    _objectClass: AV.Status,
	    _sinceId: 0,
	    _maxId: 0,
	    _inboxType: 'default',
	    _owner: null,
	    _newObject: function _newObject() {
	      return new AV.Status();
	    },
	    _createRequest: function _createRequest(params) {
	      return AV._request("subscribe/statuses", null, null, "GET", params || this.toJSON());
	    },

	    /**
	     * Sets the messageId of results to skip before returning any results.
	     * This is useful for pagination.
	     * Default is zero.
	     * @param {Number} n the mesage id.
	     * @return {AV.InboxQuery} Returns the query, so you can chain this call.
	     */
	    sinceId: function sinceId(id) {
	      this._sinceId = id;
	      return this;
	    },
	    /**
	     * Sets the maximal messageId of results。
	     * This is useful for pagination.
	     * Default is zero that is no limition.
	     * @param {Number} n the mesage id.
	     * @return {AV.InboxQuery} Returns the query, so you can chain this call.
	     */
	    maxId: function maxId(id) {
	      this._maxId = id;
	      return this;
	    },
	    /**
	     * Sets the owner of the querying inbox.
	     * @param {Object} owner The inbox owner.
	     * @return {AV.InboxQuery} Returns the query, so you can chain this call.
	     */
	    owner: function owner(_owner) {
	      this._owner = _owner;
	      return this;
	    },
	    /**
	     * Sets the querying inbox type.default is 'default'.
	     * @param {Object} owner The inbox type.
	     * @return {AV.InboxQuery} Returns the query, so you can chain this call.
	     */
	    inboxType: function inboxType(type) {
	      this._inboxType = type;
	      return this;
	    },
	    toJSON: function toJSON() {
	      var params = AV.InboxQuery.__super__.toJSON.call(this);
	      params.owner = AV._encode(this._owner);
	      params.inboxType = AV._encode(this._inboxType);
	      params.sinceId = AV._encode(this._sinceId);
	      params.maxId = AV._encode(this._maxId);
	      return params;
	    }
	  });

	  /**
	   * Create a inbox status query to find someone's inbox statuses.For example:<br/>
	   * <p><pre>
	   *   //Find current user's default inbox statuses.
	   *   var query = AV.Status.inboxQuery(AV.User.current());
	   *   //find the statuses after the last message id
	   *   query.sinceId(lastMessageId);
	   *   query.find().then(function(statuses){
	   *      //process statuses
	   *   });
	   * </pre></p>
	   * @since 0.3.0
	   * @param {Object} owner The inbox's owner
	   * @param {String} inboxType The inbox type,'default' by default.
	   * @return {AV.InboxQuery} The inbox query object.
	   * @see AV.InboxQuery
	   */
	  AV.Status.inboxQuery = function (owner, inboxType) {
	    var query = new AV.InboxQuery(AV.Status);
	    if (owner) {
	      query._owner = owner;
	    }
	    if (inboxType) {
	      query._inboxType = inboxType;
	    }
	    return query;
	  };
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(18);

	module.exports = function (AV) {
	  /**
	   * A builder to generate sort string for app searching.For example:
	   * <pre><code>
	   *   var builder = new AV.SearchSortBuilder();
	   *   builder.ascending('key1').descending('key2','max');
	   *   var query = new AV.SearchQuery('Player');
	   *   query.sortBy(builder);
	   *   query.find().then ...
	   * </code></pre>
	   * @class
	   * @since 0.5.1
	   */
	  AV.SearchSortBuilder = function () {
	    this._sortFields = [];
	  };

	  AV.SearchSortBuilder.prototype = {
	    _addField: function _addField(key, order, mode, missing) {
	      var field = {};
	      field[key] = {
	        order: order || 'asc',
	        mode: mode || 'avg',
	        missing: '_' + (missing || 'last')
	      };
	      this._sortFields.push(field);
	      return this;
	    },

	    /**
	     * Sorts the results in ascending order by the given key and options.
	     *
	     * @param {String} key The key to order by.
	     * @param {String} mode The sort mode, default is 'avg', you can choose
	     *                  'max' or 'min' too.
	     * @param {String} missing The missing key behaviour, default is 'last',
	     *                  you can choose 'first' too.
	     * @return {AV.SearchSortBuilder} Returns the builder, so you can chain this call.
	     */
	    ascending: function ascending(key, mode, missing) {
	      return this._addField(key, 'asc', mode, missing);
	    },

	    /**
	     * Sorts the results in descending order by the given key and options.
	     *
	     * @param {String} key The key to order by.
	     * @param {String} mode The sort mode, default is 'avg', you can choose
	     *                  'max' or 'min' too.
	     * @param {String} missing The missing key behaviour, default is 'last',
	     *                  you can choose 'first' too.
	     * @return {AV.SearchSortBuilder} Returns the builder, so you can chain this call.
	     */
	    descending: function descending(key, mode, missing) {
	      return this._addField(key, 'desc', mode, missing);
	    },

	    /**
	     * Add a proximity based constraint for finding objects with key point
	     * values near the point given.
	     * @param {String} key The key that the AV.GeoPoint is stored in.
	     * @param {AV.GeoPoint} point The reference AV.GeoPoint that is used.
	     * @param {Object} options The other options such as mode,order, unit etc.
	     * @return {AV.SearchSortBuilder} Returns the builder, so you can chain this call.
	     */
	    whereNear: function whereNear(key, point, options) {
	      options = options || {};
	      var field = {};
	      var geo = {
	        lat: point.latitude,
	        lon: point.longitude
	      };
	      var m = {
	        order: options.order || 'asc',
	        mode: options.mode || 'avg',
	        unit: options.unit || 'km'
	      };
	      m[key] = geo;
	      field['_geo_distance'] = m;

	      this._sortFields.push(field);
	      return this;
	    },

	    /**
	     * Build a sort string by configuration.
	     * @return {String} the sort string.
	     */
	    build: function build() {
	      return JSON.stringify(AV._encode(this._sortFields));
	    }
	  };

	  /**
	   * App searching query.Use just like AV.Query:
	   * <pre><code>
	   *   var query = new AV.SearchQuery('Player');
	   *   query.queryString('*');
	   *   query.find().then(function(results) {
	   *     console.log('Found %d objects', query.hits());
	   *     //Process results
	   *   });
	   *
	   * </code></pre>
	   * Visite <a href='https://leancloud.cn/docs/app_search_guide.html'>App Searching Guide</a>
	   * for more details.
	   * @class
	   * @since 0.5.1
	   *
	   */
	  AV.SearchQuery = AV.Query._extend( /** @lends AV.SearchQuery.prototype */{
	    _sid: null,
	    _hits: 0,
	    _queryString: null,
	    _highlights: null,
	    _sortBuilder: null,
	    _createRequest: function _createRequest(params) {
	      return AV._request("search/select", null, null, "GET", params || this.toJSON());
	    },

	    /**
	     * Sets the sid of app searching query.Default is null.
	     * @param {String} sid  Scroll id for searching.
	     * @return {AV.SearchQuery} Returns the query, so you can chain this call.
	     */
	    sid: function sid(_sid) {
	      this._sid = _sid;
	      return this;
	    },

	    /**
	     * Sets the query string of app searching.
	     * @param {String} q  The query string.
	     * @return {AV.SearchQuery} Returns the query, so you can chain this call.
	     */
	    queryString: function queryString(q) {
	      this._queryString = q;
	      return this;
	    },

	    /**
	     * Sets the highlight fields. Such as
	     * <pre><code>
	     *   query.highlights('title');
	     *   //or pass an array.
	     *   query.highlights(['title', 'content'])
	     * </code></pre>
	     * @param {Array} highlights a list of fields.
	     * @return {AV.SearchQuery} Returns the query, so you can chain this call.
	     */
	    highlights: function highlights(_highlights) {
	      var objects;
	      if (_highlights && _.isString(_highlights)) {
	        objects = arguments;
	      } else {
	        objects = _highlights;
	      }
	      this._highlights = objects;
	      return this;
	    },

	    /**
	     * Sets the sort builder for this query.
	     * @see AV.SearchSortBuilder
	     * @param { AV.SearchSortBuilder} builder The sort builder.
	     * @return {AV.SearchQuery} Returns the query, so you can chain this call.
	     *
	     */
	    sortBy: function sortBy(builder) {
	      this._sortBuilder = builder;
	      return this;
	    },

	    /**
	     * Returns the number of objects that match this query.
	     * @return {Number}
	     */
	    hits: function hits() {
	      if (!this._hits) {
	        this._hits = 0;
	      }
	      return this._hits;
	    },

	    _processResult: function _processResult(json) {
	      delete json['className'];
	      delete json['_app_url'];
	      delete json['_deeplink'];
	      return json;
	    },

	    /**
	     * Returns true when there are more documents can be retrieved by this
	     * query instance, you can call find function to get more results.
	     * @see AV.SearchQuery#find
	     * @return {Boolean}
	     */
	    hasMore: function hasMore() {
	      return !this._hitEnd;
	    },

	    /**
	     * Reset current query instance state(such as sid, hits etc) except params
	     * for a new searching. After resetting, hasMore() will return true.
	     */
	    reset: function reset() {
	      this._hitEnd = false;
	      this._sid = null;
	      this._hits = 0;
	    },

	    /**
	     * Retrieves a list of AVObjects that satisfy this query.
	     * Either options.success or options.error is called when the find
	     * completes.
	     *
	     * @see AV.Query#find
	     * @param {Object} options A Backbone-style options object.
	     * @return {AV.Promise} A promise that is resolved with the results when
	     * the query completes.
	     */
	    find: function find(options) {
	      var self = this;

	      var request = this._createRequest();

	      return request.then(function (response) {
	        //update sid for next querying.
	        if (response.sid) {
	          self._oldSid = self._sid;
	          self._sid = response.sid;
	        } else {
	          self._sid = null;
	          self._hitEnd = true;
	        }
	        self._hits = response.hits || 0;

	        return _.map(response.results, function (json) {
	          if (json.className) {
	            response.className = json.className;
	          }
	          var obj = self._newObject(response);
	          obj.appURL = json['_app_url'];
	          obj._finishFetch(self._processResult(json), true);
	          return obj;
	        });
	      })._thenRunCallbacks(options);
	    },

	    toJSON: function toJSON() {
	      var params = AV.SearchQuery.__super__.toJSON.call(this);
	      delete params.where;
	      if (this.className) {
	        params.clazz = this.className;
	      }
	      if (this._sid) {
	        params.sid = this._sid;
	      }
	      if (!this._queryString) {
	        throw 'Please set query string.';
	      } else {
	        params.q = this._queryString;
	      }
	      if (this._highlights) {
	        params.highlights = this._highlights.join(',');
	      }
	      if (this._sortBuilder && params.order) {
	        throw 'sort and order can not be set at same time.';
	      }
	      if (this._sortBuilder) {
	        params.sort = this._sortBuilder.build();
	      }

	      return params;
	    }
	  });
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ = __webpack_require__(18);

	module.exports = function (AV) {
	  /**
	   * @namespace 包含了使用了 LeanCloud
	   *  <a href='/docs/leaninsight_guide.html'>离线数据分析功能</a>的函数。
	   * <p><strong><em>
	   *   部分函数仅在云引擎运行环境下有效。
	   * </em></strong></p>
	   */
	  AV.Insight = AV.Insight || {};

	  _.extend(AV.Insight, /** @lends AV.Insight */{

	    /**
	     * 开始一个 Insight 任务。结果里将返回 Job id，你可以拿得到的 id 使用
	     * AV.Insight.JobQuery 查询任务状态和结果。
	     * @param {Object} jobConfig 任务配置的 JSON 对象，例如：<code><pre>
	     *                   { "sql" : "select count(*) as c,gender from _User group by gender",
	     *                     "saveAs": {
	     *                         "className" : "UserGender",
	     *                         "limit": 1
	     *                      }
	     *                   }
	     *                  </pre></code>
	     *               sql 指定任务执行的 SQL 语句， saveAs（可选） 指定将结果保存在哪张表里，limit 最大 1000。
	     * @param {Object} options A Backbone-style options object
	     * options.success, if set, should be a function to handle a successful
	     * call to a cloud function.  options.error should be a function that
	     * handles an error running the cloud function.  Both functions are
	     * optional.  Both functions take a single argument.
	     * @return {AV.Promise} A promise that will be resolved with the result
	     * of the function.
	     */
	    startJob: function startJob(jobConfig, options) {
	      if (!jobConfig || !jobConfig.sql) {
	        throw new Error('Please provide the sql to run the job.');
	      }
	      var data = {
	        jobConfig: jobConfig,
	        appId: AV.applicationId
	      };
	      var request = AV._request("bigquery", 'jobs', null, 'POST', AV._encode(data, null, true));

	      return request.then(function (resp) {
	        return AV._decode(null, resp).id;
	      })._thenRunCallbacks(options);
	    },

	    /**
	     * 监听 Insight 任务事件，目前仅支持 end 事件，表示任务完成。
	     *  <p><strong><em>
	     *     仅在云引擎运行环境下有效。
	     *  </em></strong></p>
	     * @param {String} event 监听的事件，目前仅支持 'end' ，表示任务完成
	     * @param {Function} 监听回调函数，接收 (err, id) 两个参数，err 表示错误信息，
	     *                   id 表示任务 id。接下来你可以拿这个 id 使用AV.Insight.JobQuery 查询任务状态和结果。
	     *
	     */
	    on: function on(event, cb) {}
	  });

	  /**
	   * 创建一个对象，用于查询 Insight 任务状态和结果。
	   * @class
	   * @param {String} id 任务 id
	   * @since 0.5.5
	   */
	  AV.Insight.JobQuery = function (id, className) {
	    if (!id) {
	      throw new Error('Please provide the job id.');
	    }
	    this.id = id;
	    this.className = className;
	    this._skip = 0;
	    this._limit = 100;
	  };

	  AV.Insight.JobQuery.prototype = {

	    /**
	     * Sets the number of results to skip before returning any results.
	     * This is useful for pagination.
	     * Default is to skip zero results.
	     * @param {Number} n the number of results to skip.
	     * @return {AV.Query} Returns the query, so you can chain this call.
	     */
	    skip: function skip(n) {
	      this._skip = n;
	      return this;
	    },

	    /**
	     * Sets the limit of the number of results to return. The default limit is
	     * 100, with a maximum of 1000 results being returned at a time.
	     * @param {Number} n the number of results to limit to.
	     * @return {AV.Query} Returns the query, so you can chain this call.
	     */
	    limit: function limit(n) {
	      this._limit = n;
	      return this;
	    },

	    /**
	     * 查询任务状态和结果，任务结果为一个 JSON 对象，包括 status 表示任务状态， totalCount 表示总数，
	     * results 数组表示任务结果数组，previewCount 表示可以返回的结果总数，任务的开始和截止时间
	     * startTime、endTime 等信息。
	     *
	     * @param {Object} options A Backbone-style options object
	     * options.success, if set, should be a function to handle a successful
	     * call to a cloud function.  options.error should be a function that
	     * handles an error running the cloud function.  Both functions are
	     * optional.  Both functions take a single argument.
	     * @return {AV.Promise} A promise that will be resolved with the result
	     * of the function.
	     *
	     */
	    find: function find(options) {
	      var params = {
	        skip: this._skip,
	        limit: this._limit
	      };

	      var request = AV._request("bigquery", 'jobs', this.id, "GET", params);
	      var self = this;
	      return request.then(function (response) {
	        if (response.error) {
	          return AV.Promise.error(new AV.Error(response.code, response.error));
	        }
	        return AV.Promise.as(response);
	      })._thenRunCallbacks(options);
	    }

	  };
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (AV) {
	  /**
	   * @namespace 包含了使用了 LeanCloud
	   *  <a href='/docs/leaninsight_guide.html'>离线数据分析功能</a>的函数，本模块已经废弃，
	   * 请使用 AV.Insight 。
	   * <p><strong><em>
	   *   部分函数仅在云引擎运行环境下有效。
	   * </em></strong></p>
	   */
	  Object.defineProperty(AV, "BigQuery", {
	    get: function get() {
	      console.warn("AV.BigQuery is deprecated, please use AV.Insight instead.");
	      return AV.Insight;
	    }
	  });
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = "<div class=\"center-block col-sm-12 text-center\" _v-05678b48=\"\">\n        <header class=\"header\" _v-05678b48=\"\">\n            <h1 _v-05678b48=\"\">matter</h1>\n            <input class=\"new-matter felx-1\" autofocus=\"\" autocomplete=\"off\" placeholder=\"What needs to be done?\" v-model=\"new_matter\" @keyup.enter=\"addmatter\" _v-05678b48=\"\">\n        </header>\n        <div class=\"row\" style=\"margin-top:20px\" _v-05678b48=\"\">\n            <div class=\"col-xs-6 col-sm-6\" v-for=\"matter in matters\" _v-05678b48=\"\">\n                <div class=\"panel panel-default\" _v-05678b48=\"\">\n                    <div class=\"panel-heading\" _v-05678b48=\"\">\n                        <h3 class=\"panel-title\" _v-05678b48=\"\">{{ matter.title }}</h3>\n                    </div>\n                    <textarea class=\"form-control\" rows=\"3\" v-model=\"matter.answer\" @focus=\"editmatter(matter)\" @keyup.enter=\"doneEdit(matter)\" @keyup.esc=\"cancelEdit(matter)\" @blur=\"doneEdit(matter)\" _v-05678b48=\"\">{{ matter.answer }}</textarea>\n                </div>\n            </div>\n        </div>\n    </div>";

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">\n    <marker></marker>\n  </div>";

/***/ }
/******/ ]);