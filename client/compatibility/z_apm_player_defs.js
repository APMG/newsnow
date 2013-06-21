
/*! jQuery UI - v1.9.2 - 2012-12-17
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.slider.js
* Copyright (c) 2012 jQuery Foundation and other contributors Licensed MIT */

(function(e,t){function i(t,n){var r,i,o,u=t.nodeName.toLowerCase();return"area"===u?(r=t.parentNode,i=r.name,!t.href||!i||r.nodeName.toLowerCase()!=="map"?!1:(o=e("img[usemap=#"+i+"]")[0],!!o&&s(o))):(/input|select|textarea|button|object/.test(u)?!t.disabled:"a"===u?t.href||n:n)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().andSelf().filter(function(){return e.css(this,"visibility")==="hidden"}).length}var n=0,r=/^ui-id-\d+$/;e.ui=e.ui||{};if(e.ui.version)return;e.extend(e.ui,{version:"1.9.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({_focus:e.fn.focus,focus:function(t,n){return typeof t=="number"?this.each(function(){var r=this;setTimeout(function(){e(r).focus(),n&&n.call(r)},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t;return e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?t=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):t=this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(n){if(n!==t)return this.css("zIndex",n);if(this.length){var r=e(this[0]),i,s;while(r.length&&r[0]!==document){i=r.css("position");if(i==="absolute"||i==="relative"||i==="fixed"){s=parseInt(r.css("zIndex"),10);if(!isNaN(s)&&s!==0)return s}r=r.parent()}}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){r.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,r){return!!e.data(t,r[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),r=isNaN(n);return(r||n>=0)&&i(t,!r)}}),e(function(){var t=document.body,n=t.appendChild(n=document.createElement("div"));n.offsetHeight,e.extend(n.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),e.support.minHeight=n.offsetHeight===100,e.support.selectstart="onselectstart"in n,t.removeChild(n).style.display="none"}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(n,r){function u(t,n,r,s){return e.each(i,function(){n-=parseFloat(e.css(t,"padding"+this))||0,r&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var i=r==="Width"?["Left","Right"]:["Top","Bottom"],s=r.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+r]=function(n){return n===t?o["inner"+r].call(this):this.each(function(){e(this).css(s,u(this,n)+"px")})},e.fn["outer"+r]=function(t,n){return typeof t!="number"?o["outer"+r].call(this,t):this.each(function(){e(this).css(s,u(this,t,!0,n)+"px")})}}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(n){return arguments.length?t.call(this,e.camelCase(n)):t.call(this)}}(e.fn.removeData)),function(){var t=/msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase())||[];e.ui.ie=t.length?!0:!1,e.ui.ie6=parseFloat(t[1],10)===6}(),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,n,r){var i,s=e.ui[t].prototype;for(i in r)s.plugins[i]=s.plugins[i]||[],s.plugins[i].push([n,r[i]])},call:function(e,t,n){var r,i=e.plugins[t];if(!i||!e.element[0].parentNode||e.element[0].parentNode.nodeType===11)return;for(r=0;r<i.length;r++)e.options[i[r][0]]&&i[r][1].apply(e.element,n)}},contains:e.contains,hasScroll:function(t,n){if(e(t).css("overflow")==="hidden")return!1;var r=n&&n==="left"?"scrollLeft":"scrollTop",i=!1;return t[r]>0?!0:(t[r]=1,i=t[r]>0,t[r]=0,i)},isOverAxis:function(e,t,n){return e>t&&e<t+n},isOver:function(t,n,r,i,s,o){return e.ui.isOverAxis(t,r,s)&&e.ui.isOverAxis(n,i,o)}})})(jQuery);(function(e,t){var n=0,r=Array.prototype.slice,i=e.cleanData;e.cleanData=function(t){for(var n=0,r;(r=t[n])!=null;n++)try{e(r).triggerHandler("remove")}catch(s){}i(t)},e.widget=function(t,n,r){var i,s,o,u,a=t.split(".")[0];t=t.split(".")[1],i=a+"-"+t,r||(r=n,n=e.Widget),e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)},e[a]=e[a]||{},s=e[a][t],o=e[a][t]=function(e,t){if(!this._createWidget)return new o(e,t);arguments.length&&this._createWidget(e,t)},e.extend(o,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),u=new n,u.options=e.widget.extend({},u.options),e.each(r,function(t,i){e.isFunction(i)&&(r[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},r=function(e){return n.prototype[t].apply(this,e)};return function(){var t=this._super,n=this._superApply,s;return this._super=e,this._superApply=r,s=i.apply(this,arguments),this._super=t,this._superApply=n,s}}())}),o.prototype=e.widget.extend(u,{widgetEventPrefix:s?u.widgetEventPrefix:t},r,{constructor:o,namespace:a,widgetName:t,widgetBaseClass:i,widgetFullName:i}),s?(e.each(s._childConstructors,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,o,n._proto)}),delete s._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o)},e.widget.extend=function(n){var i=r.call(arguments,1),s=0,o=i.length,u,a;for(;s<o;s++)for(u in i[s])a=i[s][u],i[s].hasOwnProperty(u)&&a!==t&&(e.isPlainObject(a)?n[u]=e.isPlainObject(n[u])?e.widget.extend({},n[u],a):e.widget.extend({},a):n[u]=a);return n},e.widget.bridge=function(n,i){var s=i.prototype.widgetFullName||n;e.fn[n]=function(o){var u=typeof o=="string",a=r.call(arguments,1),f=this;return o=!u&&a.length?e.widget.extend.apply(null,[o].concat(a)):o,u?this.each(function(){var r,i=e.data(this,s);if(!i)return e.error("cannot call methods on "+n+" prior to initialization; "+"attempted to call method '"+o+"'");if(!e.isFunction(i[o])||o.charAt(0)==="_")return e.error("no such method '"+o+"' for "+n+" widget instance");r=i[o].apply(i,a);if(r!==i&&r!==t)return f=r&&r.jquery?f.pushStack(r.get()):r,!1}):this.each(function(){var t=e.data(this,s);t?t.option(o||{})._init():e.data(this,s,new i(o,this))}),f}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=n++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r,this.widgetName,this),e.data(r,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===r&&this.destroy()}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(n,r){var i=n,s,o,u;if(arguments.length===0)return e.widget.extend({},this.options);if(typeof n=="string"){i={},s=n.split("."),n=s.shift();if(s.length){o=i[n]=e.widget.extend({},this.options[n]);for(u=0;u<s.length-1;u++)o[s[u]]=o[s[u]]||{},o=o[s[u]];n=s.pop();if(r===t)return o[n]===t?null:o[n];o[n]=r}else{if(r===t)return this.options[n]===t?null:this.options[n];i[n]=r}}return this._setOptions(i),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,e==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(t,n,r){var i,s=this;typeof t!="boolean"&&(r=n,n=t,t=!1),r?(n=i=e(n),this.bindings=this.bindings.add(n)):(r=n,n=this.element,i=this.widget()),e.each(r,function(r,o){function u(){if(!t&&(s.options.disabled===!0||e(this).hasClass("ui-state-disabled")))return;return(typeof o=="string"?s[o]:o).apply(s,arguments)}typeof o!="string"&&(u.guid=o.guid=o.guid||u.guid||e.guid++);var a=r.match(/^(\w+)\s*(.*)$/),f=a[1]+s.eventNamespace,l=a[2];l?i.delegate(l,f,u):n.bind(f,u)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function n(){return(typeof e=="string"?r[e]:e).apply(r,arguments)}var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options[t];r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){typeof i=="string"&&(i={effect:i});var o,u=i?i===!0||typeof i=="number"?n:i.effect||n:t;i=i||{},typeof i=="number"&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&(e.effects.effect[u]||e.uiBackCompat!==!1&&e.effects[u])?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})}}),e.uiBackCompat!==!1&&(e.Widget.prototype._getCreateOptions=function(){return e.metadata&&e.metadata.get(this.element[0])[this.widgetName]})})(jQuery);(function(e,t){var n=!1;e(document).mouseup(function(e){n=!1}),e.widget("ui.mouse",{version:"1.9.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(n){if(!0===e.data(n.target,t.widgetName+".preventClickEvent"))return e.removeData(n.target,t.widgetName+".preventClickEvent"),n.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(n)return;this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var r=this,i=t.which===1,s=typeof this.options.cancel=="string"&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;if(!i||s||!this._mouseCapture(t))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){r.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)){this._mouseStarted=this._mouseStart(t)!==!1;if(!this._mouseStarted)return t.preventDefault(),!0}return!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return r._mouseMove(e)},this._mouseUpDelegate=function(e){return r._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),n=!0,!0},_mouseMove:function(t){return!e.ui.ie||document.documentMode>=9||!!t.button?this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted):this._mouseUp(t)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(e){return this.mouseDelayMet},_mouseStart:function(e){},_mouseDrag:function(e){},_mouseStop:function(e){},_mouseCapture:function(e){return!0}})})(jQuery);(function(e,t){var n=5;e.widget("ui.slider",e.ui.mouse,{version:"1.9.2",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null},_create:function(){var t,r,i=this.options,s=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),o="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",u=[];this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"+(i.disabled?" ui-slider-disabled ui-disabled":"")),this.range=e([]),i.range&&(i.range===!0&&(i.values||(i.values=[this._valueMin(),this._valueMin()]),i.values.length&&i.values.length!==2&&(i.values=[i.values[0],i.values[0]])),this.range=e("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(i.range==="min"||i.range==="max"?" ui-slider-range-"+i.range:""))),r=i.values&&i.values.length||1;for(t=s.length;t<r;t++)u.push(o);this.handles=s.add(e(u.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.add(this.range).filter("a").click(function(e){e.preventDefault()}).mouseenter(function(){i.disabled||e(this).addClass("ui-state-hover")}).mouseleave(function(){e(this).removeClass("ui-state-hover")}).focus(function(){i.disabled?e(this).blur():(e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),e(this).addClass("ui-state-focus"))}).blur(function(){e(this).removeClass("ui-state-focus")}),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)}),this._on(this.handles,{keydown:function(t){var r,i,s,o,u=e(t.target).data("ui-slider-handle-index");switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:t.preventDefault();if(!this._keySliding){this._keySliding=!0,e(t.target).addClass("ui-state-active"),r=this._start(t,u);if(r===!1)return}}o=this.options.step,this.options.values&&this.options.values.length?i=s=this.values(u):i=s=this.value();switch(t.keyCode){case e.ui.keyCode.HOME:s=this._valueMin();break;case e.ui.keyCode.END:s=this._valueMax();break;case e.ui.keyCode.PAGE_UP:s=this._trimAlignValue(i+(this._valueMax()-this._valueMin())/n);break;case e.ui.keyCode.PAGE_DOWN:s=this._trimAlignValue(i-(this._valueMax()-this._valueMin())/n);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(i===this._valueMax())return;s=this._trimAlignValue(i+o);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(i===this._valueMin())return;s=this._trimAlignValue(i-o)}this._slide(t,u,s)},keyup:function(t){var n=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,n),this._change(t,n),e(t.target).removeClass("ui-state-active"))}}),this._refreshValue(),this._animateOff=!1},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var n,r,i,s,o,u,a,f,l=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),n={x:t.pageX,y:t.pageY},r=this._normValueFromMouse(n),i=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var n=Math.abs(r-l.values(t));i>n&&(i=n,s=e(this),o=t)}),c.range===!0&&this.values(1)===c.min&&(o+=1,s=e(this.handles[o])),u=this._start(t,o),u===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,s.addClass("ui-state-active").focus(),a=s.offset(),f=!e(t.target).parents().andSelf().is(".ui-slider-handle"),this._clickOffset=f?{left:0,top:0}:{left:t.pageX-a.left-s.width()/2,top:t.pageY-a.top-s.height()/2-(parseInt(s.css("borderTopWidth"),10)||0)-(parseInt(s.css("borderBottomWidth"),10)||0)+(parseInt(s.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,r),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},n=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,n),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,n,r,i,s;return this.orientation==="horizontal"?(t=this.elementSize.width,n=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,n=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),r=n/t,r>1&&(r=1),r<0&&(r=0),this.orientation==="vertical"&&(r=1-r),i=this._valueMax()-this._valueMin(),s=this._valueMin()+r*i,this._trimAlignValue(s)},_start:function(e,t){var n={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("start",e,n)},_slide:function(e,t,n){var r,i,s;this.options.values&&this.options.values.length?(r=this.values(t?0:1),this.options.values.length===2&&this.options.range===!0&&(t===0&&n>r||t===1&&n<r)&&(n=r),n!==this.values(t)&&(i=this.values(),i[t]=n,s=this._trigger("slide",e,{handle:this.handles[t],value:n,values:i}),r=this.values(t?0:1),s!==!1&&this.values(t,n,!0))):n!==this.value()&&(s=this._trigger("slide",e,{handle:this.handles[t],value:n}),s!==!1&&this.value(n))},_stop:function(e,t){var n={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("stop",e,n)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var n={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("change",e,n)}},value:function(e){if(arguments.length){this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0);return}return this._value()},values:function(t,n){var r,i,s;if(arguments.length>1){this.options.values[t]=this._trimAlignValue(n),this._refreshValue(),this._change(null,t);return}if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();r=this.options.values,i=arguments[0];for(s=0;s<r.length;s+=1)r[s]=this._trimAlignValue(i[s]),this._change(null,s);this._refreshValue()},_setOption:function(t,n){var r,i=0;e.isArray(this.options.values)&&(i=this.options.values.length),e.Widget.prototype._setOption.apply(this,arguments);switch(t){case"disabled":n?(this.handles.filter(".ui-state-focus").blur(),this.handles.removeClass("ui-state-hover"),this.handles.prop("disabled",!0),this.element.addClass("ui-disabled")):(this.handles.prop("disabled",!1),this.element.removeClass("ui-disabled"));break;case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":this._animateOff=!0,this._refreshValue();for(r=0;r<i;r+=1)this._change(null,r);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e),e},_values:function(e){var t,n,r;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t),t;n=this.options.values.slice();for(r=0;r<n.length;r+=1)n[r]=this._trimAlignValue(n[r]);return n},_trimAlignValue:function(e){if(e<=this._valueMin())return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,n=(e-this._valueMin())%t,r=e-n;return Math.abs(n)*2>=t&&(r+=n>0?t:-t),parseFloat(r.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var t,n,r,i,s,o=this.options.range,u=this.options,a=this,f=this._animateOff?!1:u.animate,l={};this.options.values&&this.options.values.length?this.handles.each(function(r){n=(a.values(r)-a._valueMin())/(a._valueMax()-a._valueMin())*100,l[a.orientation==="horizontal"?"left":"bottom"]=n+"%",e(this).stop(1,1)[f?"animate":"css"](l,u.animate),a.options.range===!0&&(a.orientation==="horizontal"?(r===0&&a.range.stop(1,1)[f?"animate":"css"]({left:n+"%"},u.animate),r===1&&a.range[f?"animate":"css"]({width:n-t+"%"},{queue:!1,duration:u.animate})):(r===0&&a.range.stop(1,1)[f?"animate":"css"]({bottom:n+"%"},u.animate),r===1&&a.range[f?"animate":"css"]({height:n-t+"%"},{queue:!1,duration:u.animate}))),t=n}):(r=this.value(),i=this._valueMin(),s=this._valueMax(),n=s!==i?(r-i)/(s-i)*100:0,l[this.orientation==="horizontal"?"left":"bottom"]=n+"%",this.handle.stop(1,1)[f?"animate":"css"](l,u.animate),o==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[f?"animate":"css"]({width:n+"%"},u.animate),o==="max"&&this.orientation==="horizontal"&&this.range[f?"animate":"css"]({width:100-n+"%"},{queue:!1,duration:u.animate}),o==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[f?"animate":"css"]({height:n+"%"},u.animate),o==="max"&&this.orientation==="vertical"&&this.range[f?"animate":"css"]({height:100-n+"%"},{queue:!1,duration:u.animate}))}})})(jQuery);




/**
 * @name apmplayer.js
 * @fileOverview
 * @description the file contains APMPlayerFactory, APMPlayer, Playlist, Playable etc.
 * All methods are revealed via API through the use of 'revealing' or 'module' js pattern.
 */
if (typeof APMPlayerFactory === 'undefined') {

    /**
     * @name APMPlayerFactory
     * @description factory pattern used to prohibit multiple copies of APMPlayer (singleton) + provides access to Playlist, Playable, and UnderwritingPlayable
     * @class
     */
    var APMPlayerFactory = (function () {

        'use strict';

        /**
         * @name MediaTypes
         * @description contains the names of all valid Media Types that APMPlayer handles -- also, see {@link Playable}.
         * @class
         * @ignore
         */
        var MediaTypes = {
            type : {
                AUDIO : 'audio',
                LIVE_AUDIO : 'live_audio'
                //VIDEO : 'video',
            },
            isValid : function (type) {
                var key;
                for (key in MediaTypes.type) {
                    if (MediaTypes.type[key] === type) {
                        return true;
                    }
                }
                return false;
            }
        };

        /**
         * @name Debug
         * @description static debugging utility.  To enable debug messages from browser session, simply add '?debug=1' or 'debug=true' to URL when loading any APMPlayer instance (enables console logging).  To disable Console + onScreen debug trace, use 'debug=all'.
         * @class
         */
        var Debug = function () {};
        /**
         * @name enabled
         * @description used to mark if debugging logs should output or not.  to enable, add ?debug=1 to URL when loading player.  by default, it logs to the console only; to enable a debug div, do debug=all
         * @default false
         * @fieldOf Debug
         */
        Debug.enabled = false;
        /**
         * @name consoleOnly
         * @description used to mark if debugging logs should output to console only; true by default.  use debug=all to log to both the console AND a helper div on screen.
         * @default true
         * @fieldOf Debug
         */
        Debug.consoleOnly = true;
        /**
         * @name log
         * @description writes to the log
         * @param {string} message the information to log
         * @param {string} type level of severity to log (see type)
         * @param {string} object_name optional object name to pass (if logging outside of APMPlayer -- APMPlayer_UI for instance)
         *
         * @methodOf Debug
         */
        Debug.log = function (message, type, object_name) {
            if (Debug.enabled === false) {
                return;
            }
            if (typeof soundManager !== 'undefined') {
                if (typeof object_name === 'undefined') {
                    object_name = 'APMPlayer';
                }
                soundManager._writeDebug(object_name + '::' + message, type.id, false);
            } else {
                console.log(object_name + '::' + message + '[' + type.name + ']');
            }
        };
        /**
         * @name type
         * @description object that holds the three different logging levels
         * @example
         * Debug.type.info
         * Debug.type.warn
         * Debug.type.error
         * @fieldOf Debug
         */
        Debug.type = {
            'info' : {'id' : 1, 'name' : 'info'},
            'warn' : {'id' : 2, 'name' : 'warning'},
            'error': {'id' : 3, 'name' : 'error'}
        };

        /**
         * @name Events
         * @description creates a new Events object.  Currently used within {@link APMPlayer}, internal and external version + {@link Playlist}
         * @constructor
         */
        var Events = function () {
            /**
             * @name type
             * @description holds all valid event types -- See Event Summary for details
             * @type Object
             * @fieldOf Events
             */
            this.type = {
                /**
                 * @name AUDIO_LIB_READY
                 * @event
                 * @description fires after Audio library has initialized (only used internally)
                 * @example Events.type.AUDIO_LIB_READY
                 *
                 * @memberOf Events
                 */
                AUDIO_LIB_READY : 'AUDIO_LIB_READY',
                /**
                 * @name MEDIA_READY
                 * @event
                 * @description fires when media has successfully loaded and is ready to be played
                 * @example Events.type.MEDIA_READY
                 *
                 * @memberOf Events
                 */
                MEDIA_READY : 'MEDIA_READY',
                /**
                 * @name PLAYER_READY
                 * @event
                 * @description  fires when player has completely initialized
                 * @example Events.type.PLAYER_READY
                 * @fieldOf Events
                 */
                PLAYER_READY : 'PLAYER_READY',
                /**
                 * @name PLAYER_FAILURE
                 * @event
                 * @description fires when no suitable playback mechanism can be determined (final failure)
                 * @example Events.type.PLAYER_FAILURE
                 * @fieldOf Events
                 */
                PLAYER_FAILURE : 'PLAYER_FAILURE',
                /**
                 * @name CONNECTION_LOST
                 * @event
                 * @description fires if the network connection is lost
                 * @example Events.type.CONNECTION_LOST
                 * @fieldOf Events
                 */
                CONNECTION_LOST : 'CONNECTION_LOST',
                /**
                 * @name PLAYLIST_CURRENT_CHANGE
                 * @event
                 * @description fires when current item in playlist has updated
                 * @example Events.type.PLAYLIST_CURRENT_CHANGE
                 * @fieldOf Events
                 */
                 MISSING_FILE : 'MISSING_FILE',
                /**
                 * @name MISSING_FILE
                 * @event
                 * @description fires if a file that was attempted to be played is missing
                 * @example Events.type.MISSING_FILE
                 * @fieldOf Events
                 */
                PLAYLIST_CURRENT_CHANGE : 'PLAYLIST_CURRENT_CHANGE',
                /**
                 * @name POSITION_UPDATE
                 * @event
                 * @description fires each time player head updates while playing-- a number in miliseconds usually accompanies the event to report current position in miliseconds.
                 * @example Events.type.POSITION_UPDATE
                 * @fieldOf Events
                 */
                POSITION_UPDATE : 'POSITION_UPDATE',
                /**
                 * @name PLAYING
                 * @event
                 * @description fires when playable begins playback
                 * @example Events.type.PLAYING
                 * @fieldOf Events
                 */
                PLAYING : 'PLAYING',
                /**
                 * @name PAUSED
                 * @event
                 * @description fires when playable is paused
                 * @example Events.type.PAUSED
                 * @fieldOf Events
                 */
                PAUSED : 'PAUSED',
                /**
                 * @name FINISHED
                 * @event
                 * @description fires when playable finishes playing
                 * @example Events.type.FINISHED
                 * @fieldOf Events
                 */
                FINISHED : 'FINISHED',
                /**
                 * @name UNLOADED
                 * @event
                 * @description fires when a playable is stopped or unloaded from player
                 * @example Events.type.UNLOADED
                 * @fieldOf Events
                 */
                UNLOADED : 'UNLOADED',
                /**
                 * @name BUFFER_START
                 * @event
                 * @description fires when player starts buffering
                 * @example Events.type.BUFFER_START
                 * @fieldOf Events
                 */
                BUFFER_START : 'BUFFER_START',
                /**
                 * @name BUFFER_END
                 * @event
                 * @description fires when player buffering ends
                 * @example Events.type.BUFFER_END
                 * @fieldOf Events
                 */
                BUFFER_END : 'BUFFER_END',
                /**
                 * @name METADATA
                 * @event
                 * @description important for statistic tracking (web trends) fires each time a new playable is encountered, or when a new item begins playing in a live stream
                 * A {@link Playable} is always the data for each METADATA event
                 * @example Events.type.METADATA
                 * @fieldOf Events
                 */
                METADATA : 'METADATA',
                /**
                 * @name VOLUME_UPDATED
                 * @event
                 * @description fires when volume is updated
                 * @example Events.type.VOLUME_UPDATED
                 * @fieldOf Events
                 */
                VOLUME_UPDATED : 'VOLUME_UPDATED'
            };
            /**
             * @name handlers
             * @description array of event handler objects in form of { 'handler_name', function() {} }.
             * @type Array[Object]
             * @fieldOf Events
             */
            this.handlers = [];
        };
        Events.prototype = {
            /**
             * @name trigger
             * @description fires all events handlers that match 'name' and passes eventArgs to each handler.
             * @param {string} name name of event to fire
             * @param {Object} eventArgs object literal to pass to all functon handlers
             *
             * @example APMPlayer.events.trigger(player.events.type.MEDIA_READY, { 'identifier' : this.ID });
             *
             * @methodOf Events
             */
            trigger : function (name, eventArgs) {
                var i;
                for (i = 0; i < this.handlers.length; i += 1) {
                    if (this.handlers[i].eventName === name) {
                        this.handlers[i].eventHandler.call(this, eventArgs);
                    }
                }
            },
            /**
             * @name addListener
             * @description adds an event listener
             * @param {string} name the name of the event to listen for
             * @param {Object} handler function to fire when event is called.
             *
             * @example APMPlayer.events.addListener(APMPlayer.events.type.PLAYER_READY, function() {});
             * @methodOf Events
             */
            addListener : function (name, handler) {
                if (typeof (name) !== 'string' || typeof (handler) !== 'function') {
                    Debug.log("Invalid parameters when creating listener with the following arguments: 'Name': " + name + ", 'Handler': " + handler, Debug.type.error);
                }
                this.handlers.push({ "eventName" : name, "eventHandler" : handler });
            },
            /**
             * @name removeListeners
             * @description clears out all listeners in this events objec
             *
             * @example APMPlayer.events.removeListeners();
             * @methodOf Events
             */
            removeListeners : function () {
                this.handlers = [];
            }
        };



        /**
         * @name PlaybackState
         * @constructor
         *
         * @description holds all PlaybackStates (PLAYING, STOPPED, PAUSED);
         *
         * @property {Object} type all possible PlaybackState types (PLAYING, STOPPED, PAUSED);
         */
        var PlaybackState = function () {
            this.type = {
                PLAYING : 'PLAYING',
                STOPPED : 'STOPPED',
                PAUSED : 'PAUSED'
            };
            this._current = this.type.STOPPED;  //default
        };
        PlaybackState.prototype = {
            /**
             * @name current
             * @description gets current state (PLAYING, STOPPED, or PAUSED)
             *
             * @returns {string} state (PLAYING, STOPPED, or PAUSED)
             * @public
             * @methodOf PlaybackState
             */
            current : function () {
                return this._current;
            },
            /**
             * @name set
             *
             * @description sets current state + sets state in playable, if playable is passed.
             * @param state the state to set
             * @param playable optional {@link Playable} to update copy of state.
             *
             * @public
             * @methodOf PlaybackState
             */
            set : function (state, playable) {
                this._current = state;

                if (typeof (playable) === 'object'
                        && playable.hasOwnProperty('state')) {
                    playable.state = this._current;
                }
            }
        };

        /**
         * @name PlaybackMechanism
         * @constructor
         *
         * @description holds an ordered-array of all possible playback mechanisms supported
         *
         * @property {Object} type all possible playback mechanism types (currently FLASH and HTML5)
         * @property {Array[Object]} solutions array of playback mechanisms, ordered by priority to use as a solution.  Currently FLASH is the primary playback mechanism.  If the primary solution is deemed unacceptable for given platform, that first solution is removed and the next solution becomes first and primary.
         */
        var PlaybackMechanism = function () {
            this.type = {
                FLASH : 'FLASH',
                HTML5 : 'HTML5'
            };
            this.solutions = [ this.type.FLASH, this.type.HTML5 ];  //defaults
        };
        PlaybackMechanism.prototype = {
            /**
             * @name getCurrentSolution
             * @description returns current primary playback mechanism
             *
             * @public
             * @returns {string|null} returns null of no playback mechanisms exist
             * @methodOf PlaybackMechanism
             */
            getCurrentSolution : function () {
                if (this.solutions.length > 0) {
                    return this.solutions[0];
                }
                return null;
            },
            /**
             * @name removeCurrentSolution
             * @description removes current primary playback solution
             *
             * @public
             * @returns {boolean} success returns true for successful removal, false if nothing left to remove (no more solutions exist)
             * @methodOf PlaybackMechanism
             */
            removeCurrentSolution : function () {
                if (this.solutions.length > 0) {
                    this.solutions.shift();
                    return true;
                }
                Debug.log('PlaybackMechanism.removeCurrentSolution() no playback solutions remain to remove!', Debug.type.error);
                return false;
            },
            /**
             * @name setSolutions
             * @description sets an array of playback solutions
             *
             * @public
             * @returns {boolean} success
             * @methodOf PlaybackMechanism
             */
            setSolutions : function (args) {
                if (args instanceof Array) {
                    var valid_mechanisms = [];
                    var mechanism;
                    while (args.length > 0) {
                        mechanism = args.shift();
                        if (this.isValid(mechanism)) {
                            valid_mechanisms.push(mechanism);
                        } else {
                            Debug.log('PlaybackMechanism.setSolutions() passed mechanism \'' + mechanism + '\' is invalid.', Debug.type.error);
                        }
                    }
                    this.solutions = valid_mechanisms;
                    return true;
                }

                Debug.log('PlaybackMechanism.setSolutions() argument passed is not an array!', Debug.type.error);
                return false;
            },
            /**
             * @name isValid
             * @description returns whether passed mechanism is a valid PlaybackMechanism
             * @param {string} mechanism the playback mechanism to validate
             *
             * @public
             * @returns {boolean}
             * @methodOf PlaybackMechanism
             */
            isValid : function (mechanism) {
                var key;
                for (key in this.type) {
                    if (this.type[key] === mechanism) {
                        return true;
                    }
                }
                return false;
            }
        };


        /**
         * @name CustomSchemes
         * @constructor
         *
         * @description allows the developer to create shortcuts or custom schemes for common patterns or common {@link Playable} objects in-use;
         * NOTE: The main thing to understand about CustomSchemes is that any value set in the scheme_map definition will override anything passed
         * in on {@link Playable} creation, if the identifier of the Playable happens to qualify as a registered CustomScheme.
         */
        var CustomSchemes = function () {
            this.schemes = [];
            this.scheme_map = {};
            this.playable_attrs = [];
        };
        CustomSchemes.prototype = {
            /**
             * @name init
             * @description initializes the map of custom schemes -- when a new {@link Playable} object is created, a look-up of the identifier on the CustomSchemes object will happen to determine if the Playable matches one of the CustomSchemes.  If so, all attributes defined in the scheme_map will override the {@link Playable}
             * @param {Object} scheme_map object literal holding configuration, map of schemes-- each scheme can hold any number attributes that exist in {@link Playable} .. PLUS, the two below:
             * @param {Object} scheme_map.flash_file_prefix prefix to be pre-pended to flash filepath when the {@link Playable} is instantiated.
             * @param {Object} scheme_map.http_file_prefix prefix to be pre-pended to http filepath when the {@link Playable} is instantiated.
             *
             * @example
             * var scheme_map = {
             *    apm_audio : {
             *      flash_server_url  : 'rtmp://flash.server.org/music',
             *      flash_file_prefix : 'mp3:flashprefix',
             *      http_file_prefix  : 'http://download.org',
             *      buffer_time : 3,
             *      type : 'audio'
             *    },
             *    live_audio : {
             *          mpr_news : {
             *              flash_server_url : 'rtmp://flash.server.org/news',
             *              flash_file_path : 'news.stream',
             *              http_file_path : 'http://newsstream1.publicradio.org:80/',
             *              buffer_time : 6,
             *              type : 'live_audio'
             *          },
             *          mpr_current : {
             *              flash_server_url : 'rtmp://flash.server.org/kcmp',
             *              flash_file_path : 'kcmp.stream',
             *              http_file_path : 'http://currentstream1.publicradio.org:80/',
             *              buffer_time : 6,
             *              type : 'live_audio'
             *          }
             *     }
             * };
             * custom_schemes.init(scheme_map);
             *
             * ** in this example above,
             * ** a Playable w/ identifer 'apm_audio:/marketplace/2012/04/18/morning_report.mp3'
             * ** would translate to:
             *
             * var playable = {
             *      identifier : 'apm_audio:/marketplace/2012/04/18/morning_report.mp3',
             *      flash_server_url  : 'rtmp://flash.server.org/music',
             *      flash_file_path : 'mp3:flashprefix/marketplace/2012/04/18/morning_report.mp3',
             *      http_file_path  : 'http://download.org/marketplace/2012/04/18/morning_report.mp3',
             *      buffer_time : 3,
             *      type : 'audio',
             *      // + all other attributes in a Playable, with defaults
             * };
             *
             * while a Playable w/ identifer 'live_audio:/mpr_current' would translate to:
             * var playable = {
             *      identifier : 'live_audio:/mpr_current',
             *      flash_server_url : 'rtmp://flash.server.org/kcmp',
             *      flash_file_path : 'kcmp.stream',
             *      http_file_path : 'http://currentstream1.publicradio.org:80/',
             *      buffer_time : 6,
             *      type : 'live_audio',
             *      // + all other attributes in a Playable, with defaults
             * };
             * @public
             * @methodOf CustomSchemes
             */
            init : function (scheme_map) {
                this.scheme_map = scheme_map;
                this.initSchemeTypes();
                this.initPlayableAttrs();
            },
            initSchemeTypes : function () {
                this.schemes = [];
                for (var type in this.scheme_map) {
                    this.schemes.push(type);
                }
            },
            initPlayableAttrs : function () {
                this.playable_attrs = [];
                var playable = new Playable({});
                for(var propertyName in playable) {
                    if(typeof playable[propertyName] !== 'function') {
                        this.playable_attrs.push(propertyName);
                    }
                }
            },
            hasSchemes : function () {
                if (this.schemes.length > 0) {
                    return true;
                }
                return false;
            },
            isValid : function (scheme) {
                if (this.schemes.indexOf(scheme) !== -1) {
                    return true;
                }
                return false;
            },
            isScheme : function (identifier, scheme) {
                var result = this.parse(identifier);
                if (result !== null
                        && result.scheme === scheme) {
                    return true;
                }
                return false;
            },
            parse : function (identifier) {
                var pattern = '^(' + this.schemes.join('|') + '){1}(:/){1}([/\\w.-]+$)';
                var regex =  new RegExp(pattern);
                var result = identifier.match(regex);

                if (result !== null && result.length === 4) {
                    return {
                        scheme : result[1],
                        path  : result[3]
                    };
                }
                return null;
            },
            getValues : function (identifier) {
                var values = {};

                var result = this.parse(identifier);
                if (result !== null
                        && this.isValid(result.scheme)) {
                    var type_map = this.scheme_map[result.scheme];

                    //check for aliases (next level down)
                    if (type_map.hasOwnProperty(result.path)) {
                        type_map = type_map[result.path];
                    }

                    for (var prop in type_map) {
                        if (this.playable_attrs.indexOf(prop) !== -1) {
                            values[prop] = type_map[prop];
                        } else if (prop === 'flash_file_prefix') {
                            values.flash_file_path = type_map[prop] + '/' + result.path;
                        } else if (prop === 'http_file_prefix') {
                            values.http_file_path = type_map[prop] + '/' + result.path;
                        }
                    }
                }
                return values;
            }
        };
        var custom_schemes = new CustomSchemes();


        /**
         * @name Playable
         * @class
         *
         * @description holds all specific information about each media item to be played in APMPlayer -- To play audio/video in APMPlayer, the creation of a valid Playable is first required.
         * to create a playable, see {@link APMPlayerFactory.getPlayable}.  Also holds complete metadata for a single playable.
         * @param {Object} params object literal used to create a Playable object -- each of the passed object's attributes needs to match a particular item in Field Detail to be included w/ the Playable.
         * note that the indentifier is the only required field for APM-specific audio.. However for basic playables (non-APM), type is also required.
         * @property {string} identifier [REQUIRED] the ID for the playable (must be unique when creating a playlist).  Note that this is really the only required field when creating an APM-specific Playable.
         * @property {string} type [REQUIRED] either 'audio' or 'live_audio' -- Note that this is typically set automatically when using a {@link CustomScheme}
         * @property {string} flash_server_url server url to connect to to stream flash (eg  rtmp://archivemedia.publicradio.org/)
         * @property {string} flash_file_path file to play over flash_server_url (eg  'mp3:filename_64.mp3')
         * @property {string} http_file_path used for HTML5 audio playback (eg  http://ondemand.publicradio.org/filename.mp3) -OR- progressive download pseudo HTML5 playback via flash.
         * @property {string} title optional metadata field.
         * @property {string} description optional metadata field.
         * @property {string} detail optional metadata field.
         * @property {string} program optional metadata field.
         * @property {string} host optional metadata field.
         * @property {string} date optional metadata field.
         * @property {string} image_sm image associated w/ playable (eg used to display in info window when playable plays) -- a small and large were necessary to deal w/ re-sizing issues in IE 7,8
         * @property {string} image_lg image associated w/ playable (eg used to display in info window when playable plays)
         * @property {boolean} downloadable (default true) flag to permit the file to be downloaded.  Shows download option and/or presents the file for download if no suitable {@link PlaybackMechanism} is present.
         * @property {number} buffer_time amount of time (in seconds) the player should buffer -- default = 3.
         * @property {number} duration the length, in miliseconds of this Playable
         * @property {number} position the current position, in miliseconds for the Playable
         * @property {number} percent_played percentage of the playable that's been played (position/duration)
         * @property {number} percent_loaded percentage of the playable that's been loaded (percent of total duration)
         *
         */
        var Playable = function (params) {
            var playable_self = this;

            this.identifier = null;
            this.type = null;

            //playback config
            this.flash_file_path = '';
            this.flash_server_url = '';
            this.http_file_path = '';
            this.buffer_time = 3;
            this.downloadable = true;

            //metadata
            this.title = '';
            this.description = '';
            this.detail = '';
            this.date = '';
            this.program = '';
            this.host = '';
            this.url = '';

            //images
            this.image_sm = '';
            this.image_lg = '';

            //playback statii
            this.duration = 0;
            this.position = 0;
            this.percent_played = 0;
            this.percent_loaded = 0;

            //state
            this.state = 'STOPPED';   //provided as courtesy to webTrends tracking.

            //identifier is required.
            //return empty object if not passed
            if (typeof params.identifier === 'undefined'
                    || params.identifier === null
                    || params.identifier === '') {
                return playable_self;
            }

            (function () {  //set members

                //first, set any values passed in via the playable.
                playable_self.setMembers(params);

                //second, set everything that exists in custom scheme.
                //note that customScheme trumps all default data and strictly uses each scheme.
                if (custom_schemes.hasSchemes()) {
                    var configParams = custom_schemes.getValues(playable_self.identifier);
                    playable_self.setMembers(configParams);
                }

            }());
        };
        Playable.prototype = {
            /**
             * @name isValid
             *
             * @description a Playable isValid if it has an identifier and its type matches one of the valid MediaTypes (either 'audio' or 'live_audio')
             * @example playable.isValid()
             * @returns {boolean} true or false
             * @methodOf Playable
             */
            isValid : function () {
                if (this.identifier !== null
                        && this.type !== null
                        && MediaTypes.isValid(this.type)) {
                    return true;
                }
                return false;
            },
            /**
             * @name isCustomScheme
             *
             * @description a Playable isCustomScheme if it has an identifier that matches one of the custom schemes defined
             * @example playable.isCustomScheme('scheme_name')
             * @returns {boolean} true or false
             * @methodOf Playable
             */
            isCustomScheme : function (scheme) {
                if (custom_schemes.isScheme(this.identifier, scheme) === true) {
                    return true;
                }
                return false;
            },
            /**
             * @name isEOF
             *
             * @description a Playable is at the end of the file, return true.
             * @example playable.isEOF()
             * @returns {boolean} true or false
             * @methodOf Playable
             */
            isEOF : function () {
                if (this.percent_played > 0.99995) {
                    return true;
                }
                return false;
            },
            /**
             * @name reset
             *
             * @description resets playable's position, percent_played, and percent_loaded back to 0
             * @example playable.reset()
             * @methodOf Playable
             */
            reset : function () {
                this.position = 0;
                this.percent_played = 0;
                this.percent_loaded = 0;
            },
            /**
             * @name setEmptyMembers
             *
             * @description finds and sets any provided members that are either '', 0, or null -- nothing will be set if passed params are empty or null
             * @example playable.setEmptyMembers({object})
             * @methodOf Playable
             */
            setEmptyMembers : function (params) {
                var prop;
                for (prop in params) {
                    if(params.hasOwnProperty(prop)
                        && this.hasOwnProperty(prop)
                        && params[prop] !== null
                        && params[prop] !== ''
                        && (this[prop] === null
                            || this[prop] === ''
                            || this[prop] === 0)) {

                        this[prop] = params[prop];
                    }
                }
            },
            /**
             * @name setMembers
             *
             * @description finds and sets any valid key, value pair-- will override anything that currently exists in that field.
             * @example playable.setMembers({object})
             * @methodOf Playable
             */
            setMembers : function (params) {
                for (var prop in params) {
                    if (params.hasOwnProperty(prop)
                            && this.hasOwnProperty(prop)) {
                        this[prop] = params[prop];
                    }
                }
            },
            /**
             * @name clearFlashProperties
             *
             * @description removes the flash_server_url + flash_file_path
             * so that only the progressive http mechanism is possible.
             * @example playable.clearFlashProperties()
             * @methodOf Playable
             */
            clearFlashProperties : function () {
                this.flash_server_url = '';
                this.flash_file_path = '';
            },
            /**
             * @name isFlashStreamable
             *
             * @description returns whether or not flash_server_url + flash_file_path is avail.  used to allow/disallow seeking before item loads.
             * @returns {boolean} true or false
             * @example playable.isFlashStreamable()
             * @methodOf Playable
             */
            isFlashStreamable : function () {
                if (this.flash_server_url !== ''
                        && this.flash_file_path !== '') {
                    return true;
                }
                return false;
            }
        };

        /**
         * @name UnderwritingPlayable
         * @description contains all basic attributes for an underwriting campaign.  Extends {@link Playable}
         *
         * @augments Playable
         * @param {Object} params an object containing attributes matching those in the Field Summary.
         * @property {string} click_url OAS-type thing.  may not be necessary
         * @property {boolean} has_played basic indicator used to show if played or not.
         * @property {boolean} is_underwriting indicates playable type UnderwritingPlayable (needed because minification removes types)
         *
         * @class
         */
        var UnderwritingPlayable = function (params) {
            this.click_url = null;
            this.has_played = false;
            this.is_underwriting = true;

            Playable.apply(this, arguments);
        };
        UnderwritingPlayable.prototype = Playable.prototype;

        /**
         * @name APMPlayer
         * @description main container for Audio/Video playback.
         * @class
         */
        var APMPlayer = function () {
            var player = this;

            var Audio = function () {
                this.lib = soundManager;
                this.init_status = false;
            };
            Audio.prototype = {
                init : function () {
                    if (player.audio.init_status === false) {

                        //soundManager2 settings
                        this.lib.flashVersion = 9;
                        this.lib.preferFlash = true;
                        this.lib.useHTML5Audio = true;
                        this.lib.consoleOnly = Debug.consoleOnly;
                        this.lib.debugMode = Debug.enabled;
                        this.lib.flashPollingInterval = 150;  //helps improve seeker ui experience
                        //console.log(player.util.getLoadedScriptPathByFileName('soundmanager2'));
                        this.lib.url =  'http://localhost:3000/swf/';  // used to dynamically determine lib location for flash lib dependency

                        this.lib.onready(function () {
                            if (player.audio.lib.html5Only === true) {  //SM2 will know onready() if HTML5 is the only option avail.
                                player.mechanism.setSolutions([ player.mechanism.type.HTML5 ]);
                                Debug.log('Audio.init() -- setting to HTML5-only', Debug.type.info);
                            }
                            Debug.log('Audio.init() success', Debug.type.info);
                            player.audio.init_status = true;
                            player.internal_events.trigger(player.events.type.AUDIO_LIB_READY, {});
                        });
                        this.lib.ontimeout(function (status) {           //(note: ontimeout typically only happens w/ flash-block, or flash not installed)
                            if(!player.audio.lib.canPlayMIME('audio/mp3')
                                    && !player.audio.lib.canPlayMIME('audio/mpeg')) {
                                player.mechanism.setSolutions([]);       //no possible playback solutions if no support for mp3 in HTML5 (eg Firefox).
                            } else {
                                player.mechanism.setSolutions([ player.mechanism.type.HTML5 ]);
                            }
                            player.audio.reset();
                        });
                    } else {
                        player.audio.reset();
                        Debug.log('Audio.init() -- audio lib has already been initialized once, attempting reset', Debug.type.info);
                    }
                },
                reset : function () {
                    player.audio.init_status = false;

                    var current_solution = player.mechanism.getCurrentSolution();
                    switch (current_solution) {
                    case player.mechanism.type.FLASH:
                        player.audio.lib.preferFlash = true;
                        player.audio.lib.html5Only = false;
                        break;
                    case player.mechanism.type.HTML5:
                        player.audio.lib.preferFlash = false;
                        player.audio.lib.html5Only = true;
                        break;
                    default:
                        Debug.log('Audio.reset() no playback solution exists.', Debug.type.error);
                        player.events.trigger(player.events.type.PLAYER_FAILURE, null);
                        return false;
                    }

                    player.audio.lib.reboot();
                },
                load : function (playable) {
                    if (this.init_status === true) {
                        try {
                            var sound;
                            switch (player.mechanism.getCurrentSolution()) {
                            case player.mechanism.type.FLASH:

                                //1. create basic http-based sound first (http path, no serverURL)
                                sound = {
                                    id: playable.identifier,
                                    url: playable.http_file_path,
                                    bufferTime: playable.buffer_time,
                                    onconnect: function () {
                                        Debug.log('Audio.load.lib.createSound.onConnect() - successfully connected over RTMP (' + playable.flash_server_url + ')', Debug.type.info);
                                        player.internal_events.trigger(player.events.type.MEDIA_READY, playable);
                                    },
                                    onfailure : function (sound) {
                                        var playable = player.current_playable;
                                        if (playable.position > 0) {
                                            Debug.log('Audio.load.createSound.onfailure() -- network connection has been lost', Debug.type.info);
                                            player.state.set(player.state.type.STOPPED, playable);
                                            player.events.trigger(player.events.type.CONNECTION_LOST, playable);
                                        } else if (sound.connected === true) {
                                            Debug.log('Audio.load.createSound.onfailure() - requested file \'' + playable.flash_file_path + '\' w/ identifier \'' + playable.identifier + '\' could not be found in flash/RTMP mode.', Debug.type.error);
                                            player.state.set(player.state.type.STOPPED, playable);
                                            player.events.trigger(player.events.type.MISSING_FILE, playable);
                                            player.events.trigger(player.events.type.FINISHED, playable);
                                        } else {
                                            //in this case, there was an issue connecting to our flash wowza server. as a back-up, falls-back to using HTML5-mode
                                            Debug.log('Audio.load.createSound.onfailure() - could not connect to \'' + playable.flash_server_url + '\' ... falling back to HTML5-mode.', Debug.type.error);
                                            player.state.set(player.state.type.STOPPED, playable);
                                            player.mechanism.removeCurrentSolution();
                                            player.audio.reset();
                                        }
                                    },
                                    onload : function(success) {
                                        if(success === false) {   //progressive download file failed to be loaded..
                                            var playable = player.current_playable;
                                            player.events.trigger(player.events.type.MISSING_FILE, playable);
                                            Debug.log('Audio.load.createSound.onload() - could not load \'' + playable.http_file_path + '\' over progressive download', Debug.type.error);
                                        }
                                    }
                                };

                                //2. if flash server + file is present, stream it from flash server by
                                //overriding these settings before sound invocation
                                if (playable.flash_file_path !== null && playable.flash_file_path !== ''
                                        && playable.flash_server_url !== null && playable.flash_server_url !== '') {
                                    sound.serverURL = playable.flash_server_url;
                                    sound.url = playable.flash_file_path;
                                }

                                this.lib.createSound(sound);
                                break;

                            case player.mechanism.type.HTML5:

                                //1. html5: much simpler
                                sound = this.lib.createSound({
                                    id: playable.identifier,
                                    url: playable.http_file_path,
                                    onload : function (success) {
                                        var playable = player.current_playable;

                                        if (!success) {
                                            player.state.set(player.state.type.STOPPED, playable);
                                            player.events.trigger(player.events.type.MISSING_FILE, playable);
                                            player.events.trigger(player.events.type.FINISHED, playable);
                                            Debug.log('Audio.load.createSound.onload():  requested file \'' + playable.http_file_path + '\' w/ identifier \'' + playable.identifier + '\' could not be found in HTML5 mode.', Debug.type.error);
                                        } else {
                                            if (this.duration) {
                                                playable.duration = this.duration;
                                                Debug.log('Audio.load.createSound.onload(): duration found after start', Debug.type.info);
                                            } else {
                                                Debug.log('Audio.load.createSound.onload(): duration unknown', Debug.type.info);
                                            }
                                        }
                                    }
                                });

                                player.internal_events.trigger(player.events.type.MEDIA_READY, playable);
                                break;

                            default:
                                Debug.log('Audio.load() no playback solution exists.', Debug.type.error);
                                player.events.trigger(player.events.type.PLAYER_FAILURE, playable);
                                break;
                            }

                        } catch (e) {
                            Debug.log('Exception thrown in APMPlayer.Audio.load : ' + e.toString(), Debug.type.error);
                        }
                    } else {
                        if(player.mechanism.getCurrentSolution() === null) {
                            player.events.trigger(player.events.type.PLAYER_FAILURE, playable);
                        } else {
                            Debug.log('Audio.lib.load - audio lib not initialized.  load() will be called again when player is finally initialized.', Debug.type.info);
                        }
                    }
                },
                unload : function (playable) {
                    if (player.current_playable !== null) {
                        Debug.log('Audio.unload() about to stop, drop and roll current sound.', Debug.type.info);
                        this.lib.destroySound(playable.identifier);
                        playable.reset();
                        player.state.set(player.state.type.STOPPED, playable);
                        player.events.trigger(player.events.type.UNLOADED, playable);
                    }
                },
                play : function (playable) {
                    if (!this.lib.getSoundById(playable.identifier)) {
                        this.load(playable);
                    } else {
                        Debug.log('Audio.play() attempting to play from lib.', Debug.type.info);

                        this.lib.play(playable.identifier, {
                            volume : (player.settings.volume * 100),
                            position : playable.position,
                            onplay : function () {
                                player.state.set(player.state.type.PLAYING, playable);
                                player.events.trigger(player.events.type.PLAYING, playable);
                                player.events.trigger(player.events.type.METADATA, playable);
                                if (player.settings.muted) {
                                    this.mute();
                                }
                                Debug.log('Audio.play.onplay() PLAYING fired', Debug.type.info);
                            },
                            onpause: function () {
                                player.state.set(player.state.type.PAUSED, playable);
                                player.events.trigger(player.events.type.PAUSED, playable);
                                Debug.log('Audio.play.onpause() PAUSED fired', Debug.type.info);
                            },
                            onresume : function () {
                                player.state.set(player.state.type.PLAYING, playable);
                                player.events.trigger(player.events.type.PLAYING, playable);
                                Debug.log('Audio.play.onresume() PLAYING fired', Debug.type.info);
                            },
                            onfinish : function () {
                                player.current_playable.reset();
                                player.state.set(player.state.type.STOPPED, playable);
                                player.events.trigger(player.events.type.FINISHED, playable);
                                Debug.log('Audio.play.onfinish() FINISHED fired; playable reset.', Debug.type.info);
                            },
                            onbufferchange : function () {
                                if (this.isBuffering === true) {
                                    player.events.trigger(player.events.type.BUFFER_START, playable);
                                    Debug.log('Audio.play.onbufferchange() BUFFER_START fired ', Debug.type.info);
                                } else {
                                    player.events.trigger(player.events.type.BUFFER_END, playable);
                                    Debug.log('Audio.play.onbufferchange() BUFFER_END fired ', Debug.type.info);
                                }
                            },
                            whileplaying : function () {

                                var playable = player.current_playable;
                                if (playable.type === MediaTypes.type.LIVE_AUDIO) {
                                    playable.percent_played = 1;
                                    playable.duration = 0;
                                    playable.position = this.position;

                                    player.events.trigger(player.events.type.POSITION_UPDATE, playable);

                                } else {  //STATIC AUDIO
                                    if (this.position !== 0) {      //SM2 returns position 0 once after restarting a piece in middle, skip this if/when it happens.
                                        playable.position = this.position;
                                    }

                                    if (this.duration !== 0
                                            && this.duration > playable.duration) {  //helps w/ HTTP progressive download and duration display.
                                        playable.duration = this.duration;
                                    }

                                    if (this.duration !== 0 && this.duration == this.durationEstimate) { // Fix edge case on Android Mobile Chrome where the initial duration is 100000.
                                        playable.duration = this.duration;
                                    }

                                    if (this.durationEstimate > this.duration) {
                                        //loading over HTTP progressive download, add percent loaded.
                                        playable.percent_loaded = this.duration / this.durationEstimate;
                                    } else if (playable.percent_loaded > 0 && playable.percent_loaded < 1) {
                                        playable.percent_loaded = 1;
                                    }

                                    if (playable.duration > 0) {
                                        playable.percent_played = playable.position / playable.duration;
                                    }

                                    //SM2 'work-around'-- the onfinish() event does not always fire if scrubbing to end.
                                    //this catches that scenario
                                    if (playable.isEOF()) {
                                        playable.percent_played = 1;
                                        playable.position = playable.duration;
                                        //player.events.trigger(player.events.type.FINISHED, playable);  5/21/12 -- aml removed this due to double-advances in iOS.
                                                                                                       //onfinish() now appears to fire normally in all cases.
                                        //Debug.log('Audio.play.whileplaying() FINISHED fired. ' + playable.title, Debug.type.info);
                                    } else {
                                        //Debug.log('Audio.play.whileplaying() POSITION_UPDATE fired. ' + playable.percent_loaded + '% ' + playable.percent_played, Debug.type.info);
                                        player.events.trigger(player.events.type.POSITION_UPDATE, playable);
                                    }
                                }
                            },
                            onmetadata : function () {
                                if (this.hasOwnProperty('metadata')) {
                                    if (this.metadata.hasOwnProperty('adw_ad')  //ads wizz add
                                            && this.metadata.adw_ad === 'true'
                                            && this.metadata.hasOwnProperty('metadata')
                                            && this.metadata.metadata.indexOf("adswizzContext") !== -1) {

                                        Debug.log('onmetadata() received adw_ad of insertionType: \'' + this.metadata.insertionType + '\'', Debug.type.info);

                                        playable.title = 'adw_ad_' + this.metadata.insertionType;
                                        playable.adw_context = this.metadata.metadata.substr(15);  //hack via AdsWizz. need to request a better solution
                                        player.events.trigger(player.events.type.METADATA, playable);
                                    }
                                    else if (this.metadata.hasOwnProperty('StreamTitle')  //APM-specific
                                            && typeof this.metadata.StreamTitle !== 'undefined') {
                                        Debug.log('onmetadata() received metadata w/ title: \'' + this.metadata.StreamTitle + '\'', Debug.type.info);
                                        playable.title = this.metadata.StreamTitle;
                                        player.events.trigger(player.events.type.METADATA, playable);
                                    }
                                }
                            }
                        });
                    }
                },

                pause : function (playable) {
                    var sound = this.lib.getSoundById(playable.identifier);
                    if (sound) {
                        sound.pause();
                        return true;
                    }
                    Debug.log('Audio.pause() Error.  Could not pause.  \'' + playable.identifier + '\' is unknown.', Debug.type.warn);
                    return false;
                },

                unpause : function (playable) {
                    var sound = this.lib.getSoundById(playable.identifier);
                    if (sound && sound.paused === true) {
                        sound.resume();
                        return true;
                    }
                    Debug.log('Audio.unpause() Error.  Could not unpause.  \'' + playable.identifier + '\' is unknown.', Debug.type.warn);
                    return false;
                },

                seek : function (playable, percent_decimal) {
                    var sound = this.lib.getSoundById(playable.identifier);
                    if (sound) {
                        if (playable.duration) {
                            Debug.log('Audio.seek() seeking to \'' + percent_decimal + '\' of sound \'' + playable.identifier + '\'', Debug.type.info);
                            var msec = percent_decimal * playable.duration;
                            sound.setPosition(msec);
                            return true;
                        }
                        Debug.log('Audio.seek() Error.  Could not seek. duration of \'' + playable.identifier + '\' is unknown.', Debug.type.warn);
                        return false;
                    }

                    Debug.log('Audio.seek() sound \'' + playable.identifier + '\' is unknown.', Debug.type.warn);
                    return false;
                },

                mute : function (playable) {
                    var sound = this.lib.getSoundById(playable.identifier);
                    if (sound) {
                        sound.mute();
                    }
                },

                unmute : function (playable) {
                    var sound = this.lib.getSoundById(playable.identifier);
                    if (sound) {
                        sound.unmute();
                    }
                },

                setVolume :  function (playable, percent_decimal) {
                    var percent = percent_decimal * 100;
                    var sound = this.lib.getSoundById(playable.identifier);
                    if (sound) {
                        Debug.log('Audio.setVolume() setting volume to ' + percent + '% (out of 100)', Debug.type.info);
                        sound.setVolume(percent);
                    } else {
                        Debug.log('Audio.setVolume() sound is not loaded.  volume will be set to ' + percent + '% once audio begins playing', Debug.type.info);
                    }
                }

            }; //end Audio()

            //var Video = function () {};

            //default settings
            this.settings = {
                volume : 0.9,
                muted : false,
                debug : false
            };

            this.current_playable = null;       //only one single playable can be in use at a given time

            this.events = new Events();
            this.internal_events = new Events();
            this.mechanism = new PlaybackMechanism();
            this.state = new PlaybackState();
            this.audio = new Audio();
            this.internal_event_handlers = {
                checkReady : function () {
                    if (player.audio.init_status === true) {
                        Debug.log('checkReady() player ready.  all dependencies loaded.', Debug.type.info);
                        player.events.trigger(player.events.type.PLAYER_READY, {});
                    } else {
                        //will be useful when multiple dependencies are required on init
                        Debug.log('checkReady() not quite ready -- waiting for other dependencies to load...', Debug.type.info);
                    }
                },
                onMediaReady : function (playable) {
                    player.audio.play(playable);

                }
            };
            this.internal_events.addListener(player.events.type.AUDIO_LIB_READY, player.internal_event_handlers.checkReady);
            this.internal_events.addListener(player.events.type.MEDIA_READY, player.internal_event_handlers.onMediaReady);

            this.util = {
                getParameterByName : function (name) {
                    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                    var regexS = "[\\?&]" + name + "=([^&#]*)";
                    var regex = new RegExp(regexS);
                    var results = regex.exec(window.location.href);

                    if (results === null) {
                        return "";
                    }

                    return decodeURIComponent(results[1].replace(/\+/g, " "));
                },
                getLoadedScriptPathByFileName : function (name) {
                    var scripts = document.getElementsByTagName("script");
                    var numScripts = scripts.length;
                    var index;
                    for (index = 0; index < numScripts; index += 1) {
                        var match = scripts[index].src.indexOf(name, 0);
                        if (match !== -1) {
                            return scripts[index].src.slice(0, match);
                        }
                    }
                },
                getProjectBasePath : function () {
                    var path = player.util.getLoadedScriptPathByFileName('script/apmplayer-all.min.js');
                    if (typeof path === 'undefined') {
                        path = player.util.getLoadedScriptPathByFileName('script/apmplayer.js');
                    }
                    return path;
                },
                mergeSettings : function (settings) {
                    var prop;
                    for (prop in settings) {
                        if (settings.hasOwnProperty(prop)
                                && player.settings.hasOwnProperty(prop)) {
                            player.settings[prop] = settings[prop];
                        }
                    }
                },
                checkDebug : function () {
                    if (player.util.getParameterByName('debug')) {
                        Debug.enabled = true;
                    }

                    if (player.util.getParameterByName('debug') === 'all') {
                        Debug.consoleOnly = false;
                    }
                },
                addIEFixes : function () {
                    if (!Array.prototype.indexOf) {
                        Array.prototype.indexOf = function(elt /*, from*/) {
                            var len = this.length >>> 0;

                            var from = Number(arguments[1]) || 0;
                            from = (from < 0)
                                 ? Math.ceil(from)
                                 : Math.floor(from);
                            if (from < 0)
                              from += len;

                            for (; from < len; from++) {
                              if (from in this &&
                                  this[from] === elt)
                                return from;
                            }
                            return -1;
                            };
                     }
                }
            };

            return {  //APMPlayer public methods
                /**
                 * @name init
                 * @description initializes APMPlayer library;  NOTE: init() must be called immediately after instantiation to ensure SoundManager2 init doesn't timeout
                 * @methodOf APMPlayer
                 */
                init : function () {
                    player.util.addIEFixes();
                    player.util.checkDebug();
                    player.audio.init();
                },
                /**
                 * @name reset
                 * @description resets APMPlayer -- sets {@link PlaybackMechanism} solutions + resets Audio playback library
                 *
                 * @param {string[]} playback_solutions array of accepted playback mechanisms to use (ie FLASH, HTML5)
                 *
                 * @methodOf APMPlayer
                 */
                reset : function (playback_solutions) {
                    if (playback_solutions instanceof Array) {
                        player.mechanism.setSolutions(playback_solutions);
                    }
                    player.audio.reset();
                },
                /**
                 * @name play
                 * @description loads item (if not loaded), then plays it--  automatically unloads any previous {@link Playable} that was loaded/playing
                 * @fires Events.type.PLAYING will fire when audio successfully starts playing. (see {@link Events}).
                 * @methodOf APMPlayer
                 */
                play : function (playable, settings) {
                    if (playable instanceof Playable) {
                        if (playable === player.current_playable
                                && player.state.current() !== player.state.type.PLAYING) {
                            switch (playable.type) {
                            case MediaTypes.type.AUDIO:
                            case MediaTypes.type.LIVE_AUDIO:
                                player.audio.play(playable);
                                break;
                            case MediaTypes.type.VIDEO:
                                break;
                            default:
                                Debug.log('play() unsupported type: \'' + playable.type + '\'', Debug.type.error);
                            }
                        } else if (playable !== player.current_playable) {

                            //1. check if playback solutions exist.
                            if(player.mechanism.getCurrentSolution() === null) {
                                Debug.log('play()  insufficient playback mechanism for platform.  Triggered PLAYER_FAILURE', Debug.type.error);
                                player.events.trigger(player.events.type.PLAYER_FAILURE, playable);
                                return false;
                            }

                            //2. unload item if a current one exists.
                            if (player.current_playable !== null) {
                                player.audio.unload(player.current_playable);
                            }

                            player.util.mergeSettings(settings);
                            player.current_playable = playable;

                            switch (playable.type) {
                            case MediaTypes.type.AUDIO:
                            case MediaTypes.type.LIVE_AUDIO:
                                player.audio.load(playable);
                                break;
                            case MediaTypes.type.VIDEO:
                                break;
                            default:
                                Debug.log('load() unsupported type: \'' + playable.type + '\'', Debug.type.error);
                                break;
                            }
                        }
                    } else {
                        Debug.log('play() invalid playable passed.  must of of type Playable.  did nothing.', Debug.type.error);
                        return false;
                    }
                },
                /**
                 * @name pause
                 * @description if static audio, pauses currently loaded {@link Playable}; However, if type LIVE_AUDIO, the playable is automatically unloaded.
                 * @fires Events.type.PAUSED, or Events.type.UNLOADED will fire depending on type, on success. (see {@link Events}).
                 * @methodOf APMPlayer
                 */
                pause : function () {
                    var playable = player.current_playable;
                    if (playable !== null) {
                        switch (playable.type) {
                        case MediaTypes.type.AUDIO:
                            player.audio.pause(playable);
                            break;
                        case MediaTypes.type.LIVE_AUDIO:
                            player.audio.unload(playable);
                            break;
                        case MediaTypes.type.VIDEO:
                            break;
                        default:
                            Debug.log('pause() unsupported type: \'' + playable.type + '\'', Debug.type.error);
                        }
                    } else {
                        Debug.log('pause() no current playable loaded.  nothing to pause.', Debug.type.warn);
                    }
                },
                /**
                 * @name unload
                 * @description stops, unloads, and destroys the current {@link Playable}
                 * @fires Events.type.UNLOADED will be fired if audio successfully unloads (see {@link Events}).
                 * @methodOf APMPlayer
                 */
                unload : function () {
                    var playable = player.current_playable;
                    if (playable !== null) {
                        switch (playable.type) {
                        case MediaTypes.type.AUDIO:
                        case MediaTypes.type.LIVE_AUDIO:
                            player.audio.unload(playable);
                            break;
                        case MediaTypes.type.VIDEO:
                            break;
                        default:
                            Debug.log('unload() unsupported type: \'' + playable.type + '\'', Debug.type.error);
                        }
                    } else {
                        Debug.log('unload() no current playable loaded.  nothing to stop/unload.', Debug.type.info);
                    }
                },
                /**
                 * @name seek
                 * @description moves play head to current percentage of media {@link Playable}.
                 * @fires Events.type.POSITION_UPDATE will continue to fire after position is updated by seek() (see {@link Events}).
                 * @param {number} percent_decimal the point in the media file to seek to.  (eg, 0 is beginning / .50 is half-way / 1 is end)
                 * @methodOf APMPlayer
                 */
                seek : function (percent_decimal) {
                    var playable = player.current_playable;
                    if (playable !== null) {
                        switch (playable.type) {
                        case MediaTypes.type.AUDIO:
                            player.audio.seek(playable, percent_decimal);
                            break;
                        case MediaTypes.type.LIVE_AUDIO:
                            Debug.log('seek() sorry, this item is not seekable \'' + playable.identifier + '\', type: \'' + playable.type + '\'', Debug.type.info);
                            break;
                        case MediaTypes.type.VIDEO:
                            break;
                        default:
                            Debug.log('seek() unsupported type: \'' + playable.type + '\'', Debug.type.error);
                        }
                    } else {
                        Debug.log('seek() no current playable loaded.  nothing to seek.', Debug.type.info);
                    }
                },
                /**
                 * @name mute
                 * @description mutes sound; returns nothing, triggers nothing.
                 * @methodOf APMPlayer
                 */
                mute : function () {
                    player.settings.muted = true;

                    var playable = player.current_playable;
                    if (playable !== null) {
                        switch (playable.type) {
                        case MediaTypes.type.AUDIO:
                        case MediaTypes.type.LIVE_AUDIO:
                            player.audio.mute(playable);
                            break;
                        case MediaTypes.type.VIDEO:
                            break;
                        default:
                            Debug.log('mute() unsupported type: \'' + playable.type + '\'', Debug.type.error);
                            break;
                        }
                    }
                    Debug.log('mute() -- player is now muted.', Debug.type.info);
                },
               /**
                 * @name unmute
                 * @description unmutes sound;  returns nothing, triggers nothing.
                 * @methodOf APMPlayer
                 */
                unmute : function () {
                    player.settings.muted = false;

                    var playable = player.current_playable;
                    if (playable !== null) {
                        switch (playable.type) {
                        case MediaTypes.type.AUDIO:
                        case MediaTypes.type.LIVE_AUDIO:
                            player.audio.unmute(playable);
                            break;
                        case MediaTypes.type.VIDEO:
                            break;
                        default:
                            Debug.log('unmute() unsupported type: \'' + playable.type + '\'', Debug.type.error);
                            break;
                        }
                    }
                    Debug.log('unmute() -- player is now unmuted.', Debug.type.info);
                },
                /**
                 * @name setVolume
                 * @description sets volume.
                 * @fires Events.type.VOLUME_UPDATED fires event after sucessfully setting volume (see {@link Events}).
                 * @param {number} percent_decimal the percentage to set the volume to 0 to 1
                 * @methodOf APMPlayer
                 */
                setVolume : function (percent_decimal) {
                    if (percent_decimal < 0) {
                        percent_decimal = 0;
                        Debug.log('setVolume() invalid percent_decimal passed: \'' + percent_decimal + '\' is less than 0.  percent_decimal set to 0.  percentages must be represented as a decimal from 0 to 1 (eg .45)', Debug.type.warn);
                    } else if (percent_decimal > 1) {
                        percent_decimal = 1;
                        Debug.log('setVolume() invalid percent_decimal passed: \'' + percent_decimal + '\' is greater than 1.  percent_decimal set to 1.00 by default.  percentages must be represented as a decimal from 0.00 to 1.00 (eg .45)', Debug.type.warn);
                    }

                    var playable = player.current_playable;
                    if (playable !== null) {
                        switch (playable.type) {
                        case MediaTypes.type.AUDIO:
                        case MediaTypes.type.LIVE_AUDIO:
                            player.audio.setVolume(playable, percent_decimal);
                            break;
                        case MediaTypes.type.VIDEO:
                            break;
                        default:
                            Debug.log('setVolume() unsupported type: \'' + playable.type + '\'', Debug.type.error);
                        }
                    } else {
                        Debug.log('setVolume() no playable loaded.  VOLUME_UPDATED event still fired. new vox : \'' + percent_decimal + '\'', Debug.type.info);
                    }
                    player.settings.volume = percent_decimal;
                    player.events.trigger(player.events.type.VOLUME_UPDATED, { 'percent_decimal' : percent_decimal });
                },
                /**
                 * @name debug
                 * @description reference to APMPlayer {@link Debug} logger
                 *
                 * @example APMPlayer.debug.log('debug message', APMPlayer.debug.type.info, 'ObjectName');
                 *
                 * Debug types:
                 * APMPlayer.debug.type.info
                 * APMPlayer.debug.type.warn
                 * APMPlayer.debug.type.error
                 *
                 * @static
                 * @fieldOf APMPlayer
                 */
                debug : Debug,
                /**
                 * @name events
                 * @description reference to the main {@link Events} object for APMPlayer
                 * @example APMPlayer.events.addListener(APMPlayer.events.type.PLAYER_READY, function() {} );
                 * @fieldOf APMPlayer
                 */
                events : player.events,
                /**
                 * @name mechanism
                 * @description reference to internal {@link PlaybackMechanism} object.
                 * @example APMPlayer.mechanism.getCurrentSolution();
                 * @fieldOf APMPlayer
                 */
                mechanism : player.mechanism,
                 /**
                 * @name mediaTypes
                 * @description reference to supported MediaTypes (currently AUDIO, LIVE_AUDIO)
                 * @example player_ui.playlist.current().type == APMPlayer.mediaTypes.LIVE_AUDIO
                 * @fieldOf APMPlayer
                 */
                 mediaTypes : MediaTypes.type,
                /**
                 * @name state
                 * @description reference to current {@link PlaybackState} object
                 * @example APMPlayer.state.getCurrent() === APMPlayer.state.type.PLAYING;
                 * @fieldOf APMPlayer
                 */
                 state : player.state,
                /**
                 * @name base_path
                 * @description returns the base_path of the project, relative to this file.
                 * checks for both apmplayer-all.min.js and apmplayer.js
                 * @example http://localhost/apmplayer/1.2/
                 * @fieldOf APMPlayer
                 */
                 base_path : player.util.getProjectBasePath()
            };
        };  //end APMPlayer()

        /**
         * @name Playlist
         * @description structured, organized playlist made-up of {@link Playable} objects.
         * @constructor
         * */
        var Playlist = function () {
            /**
             * @name events
             * @description object reference to specific {@link Events} object for Playlist
             * @example Playlist.events.addListener(APMPlayer.events.type.PLAYLIST_CURRENT_CHANGE, function() {} );
             * @fieldOf Playlist
             */
            this.events = new Events();
            this._items = [];
            this._current_index = null;
        };
        Playlist.prototype = {
            /**
             * @name add
             * @description adds a valid {@link Playable} to the playlist.
             * @param {Playable} playable the playable to add.
             * @example Playlist.add(playable);
             * @returns {boolean} success or failure.
             * @methodOf Playlist
             */
            add : function (playable) {
                if (playable instanceof Playable
                        && playable.isValid()) {

                    if (this.item(playable.identifier) !== null) {
                        Debug.log('add() could not add \'' + playable.identifier + '\' to playlist because it already exists!', Debug.type.warn, 'Playlist');
                        return false;
                    }

                    this._items.push(playable);
                    if (this._current_index === null) {
                        this._current_index = 0;
                        this.events.trigger(this.events.type.PLAYLIST_CURRENT_CHANGE, null);
                    }
                    Debug.log('add() new playable successfully added to playlist: \'' + playable.identifier + '\'',  Debug.type.info, 'Playlist');
                    return true;
                }

                Debug.log('add() -- error: nothing added to playlist.  either object passed was not of type Playable or identifier \'' + playable.identifier + '\' is invalid.', Debug.type.warn, 'Playlist');
                return false;
            },
            /**
             * @name _count
             * @description returns number of items in playlist
             * @private
             * @ignore
             */
            _count : function () {
                return this._items.length;
            },
            /**
             * @name current
             * @description returns the current {@link Playable} in the playlist.
             * @returns {Playable} returns a valid playable, or null if nothing in playlist.
             * @example Playlist.current();
             * @methodOf Playlist
             */
            current : function () {
                if (this._current_index !== null) {
                    return this._items[this._current_index];
                }
                return null;
            },
            /**
             * @name item
             * @description returns specific {@link Playable} by identifier, if it exists in playlist
             * @param {string} identifier of a specific {@link Playable}.
             * @returns {Playable} if found, returns a valid playable, or null if non-existant.
             * @example Playlist.item('kick_ass_rock_song');
             * @methodOf Playlist
             */
            item : function (identifier) {
                var j, total_items = this._count();
                for (j = 0; j < total_items; j += 1) {
                    if (this._items[j].identifier === identifier) {
                        return this._items[j];
                    }
                }
                return null;
            },
            /**
             * @name goto
             * @description finds appropriate {@link Playable} in playlist and switches current pointer to that playable, if it exists in the playlist.
             * @param {string} identifier of a specific {@link Playable}.
             * @returns {boolean} success or failure.
             * @example Playlist.goto('boring_bluegrass_song');
             * @fires Events.type.PLAYLIST_CURRENT_CHANGE fires upon successful update of current playlist item (see {@link Events}).
             * @methodOf Playlist
             */
            goto : function (identifier) {
                var j, total_items = this._count();
                for (j = 0; j < total_items; j += 1) {
                    if (this._items[j].identifier === identifier) {
                        var previous_playable = this.current();
                        this._current_index = j;
                        this.events.trigger(this.events.type.PLAYLIST_CURRENT_CHANGE, previous_playable);
                        return true;
                    }
                }
                Debug.log('goto() - invalid identifier passed \'' + identifier + '\'.  This was not found in the current playlist!', Debug.type.warn, 'Playlist');
                return false;
            },
            /**
             * @name hasNext
             * @description returns whether or not there is at least one more item before end of playlist
             * @returns {boolean} true if playlist has another item, false if at end of playlist
             * @example Playlist.hasNext();
             * @methodOf Playlist
             */
            hasNext : function () {
                if (this._current_index + 1 < this._count()) {
                    return true;
                }
                return false;
            },
            /**
             * @name remove
             * @description finds and removes a specifc {@link Playable} in playlist by identifier.  The current playlist item may not be removed.
             * @param {string} identifier of a specific {@link Playable}.
             * @returns {boolean} success or failure.
             * @example Playlist.remove('brittany_spears_theft_of_the_dial');
             * @methodOf Playlist
             */
            remove : function (identifier) {
                var j, num_items_before_remove = this._count();
                for (j = 0; j < num_items_before_remove; j += 1) {

                    if (this._items[j].identifier === identifier) {

                        if (this.current().identifier === identifier) {
                            Debug.log('remove() -- sorry, you may not remove the current item in the playlist. returning false.)', Debug.type.warn, 'Playlist');
                            return false;
                        }

                        this._items.splice(j, 1);              //remove from array, while resetting array indexes

                        if (this._current_index > 0
                                && j <= this._current_index) {
                            this._current_index -= 1;          //move current index back by 1, if we purged something before current item
                        }

                        return true;
                    }
                }
                return false;
            },
            /**
             * @name next
             * @description advances current() point to next {@link Playable} in playlist.  Also moves current to beginning if at end of playlist.
             * @returns {boolean} false if no items exist in playlist.
             * @example Playlist.next();
             * @fires Events.type.PLAYLIST_CURRENT_CHANGE fires upon successful change of current playlist item (see {@link Events}).  Also passes previous_playable back with the Event.
             * @methodOf Playlist
             */
            next : function () {
                if (this._current_index !== null) {
                    Debug.log('next() advancing to next position in playlist (or to beginning if at last)', Debug.type.info, 'Playlist');
                    var previous_playable = this.current();
                    this._current_index = (this._current_index + 1 < this._count()) ? this._current_index + 1 : 0;
                    this.events.trigger(this.events.type.PLAYLIST_CURRENT_CHANGE, previous_playable);
                } else {
                    return false;
                }
            },
            /**
             * @name previous
             * @description sets current() point to back one {@link Playable} in playlist.  Also moves current to end if at beginning of playlist.
             * @returns {boolean} false if no items exist in playlist.
             * @example Playlist.previous();
             * @fires Events.type.PLAYLIST_CURRENT_CHANGE fires upon successful change of current playlist item (see {@link Events}).  Also passes previous_playable back with the Event.
             * @methodOf Playlist
             */
            previous : function () {
                if (this._current_index !== null) {
                    Debug.log('previous() moving to previous position in playlist (or to last if at beginning)', Debug.type.info, 'Playlist');
                    var previous_playable = this.current();
                    this._current_index = (this._current_index - 1 >= 0) ? this._current_index - 1 : this._count() - 1;
                    this.events.trigger(this.events.type.PLAYLIST_CURRENT_CHANGE, previous_playable);
                } else {
                    return false;
                }
            }
        };  //end Playlist


        var apmplayer_instance;  //singleton
        return {
            /**
             * @name getPlayer
             * @description returns singleton instance of {@link APMPlayer}.
             * @returns {APMPlayer}
             * @methodOf APMPlayerFactory
             */
            getPlayer: function () {
                if (typeof apmplayer_instance === 'undefined') {
                    apmplayer_instance = new APMPlayer();
                    apmplayer_instance.constructor = null;  //prohibit new's
                }
                return apmplayer_instance;
            },
            /**
             * @name getPlayable
             * @description validates params argument and constructs a new {@link Playable} object upon each call, if valid.  Returns an empty {@link Playable} if passed arguments are invalid.  see also {@link Playable.isValid}
             * @param {Object} params object literal used to build Playable.
             * @returns {Playable}
             *
             * @example regular example:
             * APMPlayerFactory.getPlayable(
             * {
             *   type: 'audio',
             *   identifier: 'my_audio',
             *   flash_server_url: 'rtmp://server/',
             *   flash_file_path: 'mp3:path/file.mp3',
             *   http_file_path: 'http://server/file.mp3',
             *   buffer_time: 5
             * });
             *
             * @example CustomScheme example:
             * APMPlayerFactory.getPlayable(
             * {
             *   identifier: 'apm_audio:/being/programs/2011/12/15/20111222_prophetic_imagination_128.mp3'
             * });
             *
             * (note that in this example, the CustomScheme provides attributes that are pre-defined
             * (eg, flash_server_url, flash_file_path, http_file_path, type, buffer_time)
             *
             *
             * @methodOf APMPlayerFactory
             */
            getPlayable : function (params) {
                return new Playable(params);
            },
            /**
             * @name getPlaylist
             * @description constructs and returns a new {@link Playlist}.
             * @returns {Playlist}
             * @methodOf APMPlayerFactory
             */
            getPlaylist : function () {
                return new Playlist();
            },
            /**
             * @name getUnderwritingPlayable
             * @description constructs and returns a new {@link UnderwritingPlayable} object
             * @returns {UnderwritingPlayable}
             * @methodOf APMPlayerFactory
             */
            getUnderwritingPlayable : function (params) {
                return new UnderwritingPlayable(params);
            },
            /**
             * @name getCustomSchemes
             * @description returns a CustomSchemes object to initialize the map of {@link CustomSchemes}, used as a short-cut for constructing {@link Playable} objects -- see {@link CustomSchemes} for more detail.
             * @param {Object} params object literal used to initialize {@link CustomSchemes} -- the object can contain any number of attributes already defined for {@link Playable} objects.
             * @returns {CustomSchemes}
             *
             * @methodOf APMPlayerFactory
             */
            getCustomSchemes : function () {
                return custom_schemes;
            }
        };
    }()); //end APMPlayerFactory
}

//initialization w/ custom configuration short-cuts (not required)
var scheme_map = {
    apm_audio : {
        flash_server_url  : 'rtmp://archivemedia.publicradio.org/music',
        flash_file_prefix : 'mp3:ondemand',
        http_file_prefix  : 'http://ondemand.publicradio.org',
        buffer_time : 3,
        type : 'audio'
    },
    apm_live_audio : {
        mpr_news : {
            flash_server_url : 'rtmp://archivemedia.publicradio.org/news',
            flash_file_path : 'news.stream',
            http_file_path : 'http://newsstream1.publicradio.org:80/',
            buffer_time : 6,
            type : 'live_audio'
        },
        mpr_current : {
            flash_server_url : 'rtmp://archivemedia.publicradio.org/kcmp',
            flash_file_path : 'kcmp.stream',
            http_file_path : 'http://currentstream1.publicradio.org:80/',
            buffer_time : 6,
            type : 'live_audio'
        },
        csf : {
            flash_server_url : 'rtmp://archivemedia.publicradio.org/csf',
            flash_file_path : 'csf.stream',
            http_file_path : 'http://204.93.222.85:80/csf-nopreroll',
            buffer_time : 6,
            type : 'live_audio'
        },
        wpbi : {
            flash_server_url : 'rtmp://archivemedia.publicradio.org/wpbistream',
            flash_file_path : 'wpbi.stream',
            http_file_path : 'http://wpbistream1.lbdns-streamguys.com:80/wpbistream',
            buffer_time : 6,
            type : 'live_audio'
        },
        mpr_local_current : {
            flash_server_url : 'rtmp://archivemedia.publicradio.org/localstream',
            flash_file_path : 'local.stream',
            http_file_path : 'http://localstream1.lbdns-streamguys.com:80/localstream',
            buffer_time : 6,
            type : 'live_audio'
        },
        mpr_wonderground : {
            flash_server_url : 'rtmp://archivemedia.publicradio.org/wonderground',
            flash_file_path : 'wonderground.stream',
            http_file_path : 'http://204.93.222.93:80/wonderground',
            buffer_time : 6,
            type : 'live_audio'
        },
        mpr_radio_heartland : {
            flash_server_url : 'rtmp://archivemedia.publicradio.org/radioheartland',
            flash_file_path : 'radioheartland.stream',
            http_file_path : 'http://radioheartlandstream1.publicradio.org/',
            buffer_time : 6,
            type : 'live_audio'
        },
        mpr_classical : {
            flash_server_url : 'rtmp://archivemedia.publicradio.org/ksjn',
            flash_file_path : 'ksjn.stream',
            http_file_path : 'http://classicalstream1.lbdns-streamguys.com:80/classicalstream',
            buffer_time : 6,
            type : 'live_audio'
        },
        mpr_classical_choral : {
            flash_server_url : 'rtmp://choralstream3.publicradio.org/choral',
            flash_file_path : 'choral.stream',
            http_file_path : 'http://choralstream1.lbdns-streamguys.com:80/choralstream',
            buffer_time : 6,
            type : 'live_audio'
        },
        utility : {
            flash_server_url : 'rtmp://archivemedia.publicradio.org/utility',
            flash_file_path : 'utility.stream',
            http_file_path : 'http://utilitystream1.publicradio.org/utility',
            buffer_time : 6,
            type : 'live_audio'
        },
        utility4 : {
            flash_server_url : 'rtmp://util4stream3.publicradio.org/utility4',
            flash_file_path : 'utility4.stream',
            http_file_path : 'http://util4stream1.publicradio.org/utility4',
            buffer_time : 6,
            type : 'live_audio'
        }
    }
};
var custom_schemes = APMPlayerFactory.getCustomSchemes();
custom_schemes.init(scheme_map);

//initialize player lib
var APMPlayer = APMPlayerFactory.getPlayer();
APMPlayer.init();


/**
 * @name apmplayer_ui.jquery.js
 * @fileOverview
 * @description main user-interface integration between jQuery and APMPlayer.
 * contains first the main object supporting integration w/ APMPlayers
 * and second the $.fn.apmplayer_ui definition
 */
(function ($) {

    'use strict';

    /**
     * APMPlayerUI
     * User-interface integration w/ APMPlayer that supports $.fn.apmplayer_ui
     * Current version of $.fn.apmplayer_ui only allows a single instance of the UI at a time
     */
    var APMPlayerUI = function (jq_element, jq_args) {

        var player_ui = this;

        this.parent_id = '#' + jq_element.attr('id');
        this.args = jq_args;

        this.init = function () {
            player_ui.main.init();
            player_ui.controls.init();
            player_ui.events.init();
            player_ui.underwriting.init();
            player_ui.playlist.init();
        };

        this.main = {
            settings : {
                autoplay      : false,   //defaults, can be overridden on player init()
                muted         : false,
                fetchMetadata : true,
                volume        : 0.9,
                autoAdvance   : true // Automatically advances the playlist on song end.
            },
            isReady : false,
            init : function () {
                if (player_ui.args.hasOwnProperty('settings')) {
                    player_ui.main.mergeSettings(player_ui.args.settings);
                }
                if (player_ui.main.settings.autoplay === true
                        && player_ui.main.settings.fetchMetadata === true) {
                    player_ui.main.settings.autoplay = 'wait';  //this resolves the race-condition to make sure fetchMetadata call completes before autoplay occurs.
                }
            },
            mergeSettings : function (settings) {
                var prop;
                for (prop in settings) {
                    if (settings.hasOwnProperty(prop)
                            && player_ui.main.settings.hasOwnProperty(prop)) {
                        player_ui.main.settings[prop] = settings[prop];
                    }
                }
            },
            canAutoPlay : function () {
                if (player_ui.main.settings.autoplay === true
                        && APMPlayer.mechanism.getCurrentSolution() !== APMPlayer.mechanism.type.HTML5
                        && player_ui.main.isReady === true) {
                    return true;
                }
                return false;
            },
            updateAutoPlay : function (playable) {
                var current_playable = player_ui.playlist.current();
                if (current_playable.identifier === playable.identifier
                        && player_ui.main.settings.autoplay === 'wait') {
                    player_ui.main.settings.autoplay = true;
                }
            },
            play : function () {
                if (player_ui.underwriting.needsRender()) {
                    player_ui.underwriting.renderAd();
                } else {
                    APMPlayer.play(player_ui.playlist.current(), player_ui.main.settings);
                }
            },
            fetchMetadata : function (playable) {
                $.getJSON('http://www.publicradio.org/tools/api/audio/metadata/?callback=?', 'id=' + playable.identifier, player_ui.events.onFetchMetadata);
            }
        };

        this.skin = {
            /**
             * holds map of css
             * (potentially overridable down the road if differing id's/class names are desired)
             */
            css : {
                play: "apm_player_play",
                pause: "apm_player_pause",
                seeker: "apm_player_bar",
                seekerBufferingCls: "buffering",
                seekerLoading: "apm_player_loading",
                liveStreamingCls: "streaming",
                volumeWrapper: "apm_player_volume_wrapper",
                volumeMutedCls: "muted",
                volumeBar: "apm_volume_bar",
                volumeBarWrapper: "apm_player_volume_slider_wrapper",
                volumeStatus: "apm_player_volume_status",
                info: "apm_player_info",
                status: "apm_player_status",
                statusWarningCls: "warning",
                statusAlertCls: "alert",
                playtime: "apm_player_playtime",
                playlist: "apm_playlist",
                playlistNowPlayingCls: "nowplaying",
                sponsorOverlayActiveCls: "preroll-active",
                sponsorOverlayInactiveCls: "preroll-inactive",
                sponsorTimer: "apm_sponsor_overlay_time",
                sharingTools: "apm_sharing_tools",
                sharingTabControls: "apm_sharing_tab_controls",
                sharingTabCls: "apm_sharing_tab",
                sharingTabSharing: "apm_sharing_share",
                sharingTabDownload: "apm_sharing_download",
                sharingTabEmbed: "apm_sharing_embed",
                sharingTabLink: "apm_sharing_link"
            }
        };

        this.controls = {
            /**
             * registers jQuery events, listens for interactions w/ skin + inits jQuery sliders, etc
             */
            init : function () {
                player_ui.controls.seeker.init();
                player_ui.controls.info.init();
                player_ui.controls.volume.init();
                player_ui.controls.volumeStatus.init();
                player_ui.controls.pause.init();
                player_ui.controls.play.init();
                player_ui.controls.tools.init();
            },
            play : {
                init : function () {
                    $(player_ui.parent_id + ' #' + player_ui.skin.css.play).click(function () {
                        player_ui.main.play();
                    });
                }
            },
            pause : {
                init : function () {
                    $(player_ui.parent_id + ' #' + player_ui.skin.css.pause).click(function () {
                        APMPlayer.pause();   // note, this will force an unload of playable in APMPlayer internally
                    });                      // if it's type === LIVE_AUDIO (conserves BW)
                }
            },
            seeker : {
                status : 'NORMAL',  //or USER_SLIDING
                init : function () {
                    $(player_ui.parent_id + ' #' + player_ui.skin.css.seeker).slider({
                        disabled: true,
                        range: "min",
                        start: function (event, ui) {
                            player_ui.controls.seeker.status = 'USER_SLIDING';
                        },
                        stop: function (event, ui) {
                            player_ui.events.onSeek(ui.value / 100);
                            player_ui.controls.seeker.status = 'NORMAL';
                        },
                        slide: function (event, ui) {
                            player_ui.controls.seeker.status = 'USER_SLIDING';
                            var current_playable = player_ui.playlist.current();
                            current_playable.position = (ui.value / 100) * current_playable.duration;
                            player_ui.controls.playtime.render(current_playable);
                        }
                    });
                },
                update : function (playable) {
                    if (player_ui.controls.seeker.status === 'NORMAL') {   //don't slide if user_sliding
                        var percent = 100 * playable.percent_played;
                        $(player_ui.parent_id + ' #' + player_ui.skin.css.seeker).slider('value', percent);
                    }
                    if(playable.percent_loaded <= 1) {
                        var percent_num = 100 * (playable.percent_loaded);
                        $(player_ui.parent_id + ' #' + player_ui.skin.css.seekerLoading).width(percent_num + '%');
                    }
                },
                enable : function () {
                    if (player_ui.playlist.current().type !== APMPlayer.mediaTypes.LIVE_AUDIO) {
                        $(player_ui.parent_id + ' #' + player_ui.skin.css.seeker).slider('enable');
                    }
                },
                disable : function () {
                    if (player_ui.playlist.current().type === APMPlayer.mediaTypes.LIVE_AUDIO) {
                        $(player_ui.parent_id + ' #' + player_ui.skin.css.seeker).slider('disable');
                    }
                },
                reset : function () {
                    $(player_ui.parent_id + ' #' + player_ui.skin.css.seeker).slider('value', 0);
                },
                configure : function (playable) {
                    player_ui.controls.seeker.reset();
                    if(playable.type === APMPlayer.mediaTypes.LIVE_AUDIO) {
                        player_ui.controls.seeker.disable();
                        $(player_ui.parent_id + ' #' + player_ui.skin.css.seeker).addClass(player_ui.skin.css.liveStreamingCls);
                    } else {
                        if(playable.duration > 0) {
                            player_ui.controls.seeker.enable();
                        }
                        $(player_ui.parent_id + ' #' + player_ui.skin.css.seeker).removeClass(player_ui.skin.css.liveStreamingCls);
                    }
                }
            },
            playtime : {
                convertToTime : function (miliseconds) {
                    var myTime = new Date(miliseconds),
                        hour = myTime.getUTCHours(),
                        min = myTime.getUTCMinutes(),
                        sec = myTime.getUTCSeconds(),
                        strHour = hour,
                        strMin = (strHour > 0 && min < 10) ? '0' + min : min,
                        strSec = (sec < 10) ? '0' + sec : sec;

                    return ((strHour > 0) ? strHour + ':' : '') + (strMin + ':') + (strSec);
                },
                render : function (playable) {
                    if (typeof playable.is_underwriting !== 'undefined') {
                        player_ui.underwriting.renderTime(playable);
                    } else {
                        var time_display;
                        if (playable.duration > 0) {
                            time_display = player_ui.controls.playtime.convertToTime(playable.position) + ' / ' + player_ui.controls.playtime.convertToTime(playable.duration);
                        } else {
                            time_display = player_ui.controls.playtime.convertToTime(playable.position);
                        }
                        $(player_ui.parent_id + ' #' + player_ui.skin.css.playtime).text(time_display);
                    }
                }
            },
            volume : {
                init : function () {
                    $(player_ui.parent_id + ' #' + player_ui.skin.css.volumeBar).slider({
                        range: 'min',
                        orientation: 'vertical',
                        value : player_ui.main.settings.volume * 100,
                        stop : function (event, ui) {
                            APMPlayer.setVolume(ui.value / 100);
                            if (ui.value > 0) {
                                if (player_ui.main.settings.muted) {
                                    APMPlayer.unmute();
                                    player_ui.controls.volumeStatus.renderUnmuted();
                                    player_ui.main.settings.muted = false;
                                }
                            }
                        }
                    });

                    $(player_ui.parent_id + ' #' + player_ui.skin.css.volumeWrapper).hover(function(){
                        $(player_ui.parent_id + ' #' + player_ui.skin.css.volumeBarWrapper).show();
                    },
                    function(){
                        $(player_ui.parent_id + ' #' + player_ui.skin.css.volumeBarWrapper).fadeOut(500);
                    });

                },
                renderMuted : function () {
                    $(player_ui.parent_id + ' #' + player_ui.skin.css.volumeBar).slider('value', 0);
                },
                renderUnmuted : function () {
                    $(player_ui.parent_id + ' #' + player_ui.skin.css.volumeBar).slider('value', player_ui.main.settings.volume * 100);
                }
            },
            volumeStatus : {
                init : function () {
                    $(player_ui.parent_id + ' #' + player_ui.skin.css.volumeStatus).click(function () {
                        if (player_ui.main.settings.muted) {
                            APMPlayer.unmute();
                            player_ui.main.settings.muted = false;
                            player_ui.controls.volume.renderUnmuted();
                            player_ui.controls.volumeStatus.renderUnmuted();
                        } else {
                            APMPlayer.mute();
                            player_ui.main.settings.muted = true;
                            player_ui.controls.volume.renderMuted();
                            player_ui.controls.volumeStatus.renderMuted();
                        }
                    });
                },
                renderMuted : function () {
                    $(player_ui.parent_id + ' #' + player_ui.skin.css.volumeStatus).addClass(player_ui.skin.css.volumeMutedCls);
                },
                renderUnmuted : function () {
                    $(player_ui.parent_id + ' #' + player_ui.skin.css.volumeStatus).removeClass(player_ui.skin.css.volumeMutedCls);
                }
            },
            info : {
                init : function () {
                    if (player_ui.args.hasOwnProperty('onMetadata')) {   //bind custom event handler, if passed through $.args
                        player_ui.events.onMetadata = player_ui.args.onMetadata;
                    }
                }
            },
            status : {
                displayWarning : function (html_snippet) {
                    $(player_ui.parent_id + ' #' + player_ui.skin.css.status).html(html_snippet);
                    $(player_ui.parent_id + ' #' + player_ui.skin.css.status).addClass(player_ui.skin.css.statusWarningCls);
                },
                displayAlert : function (html_snippet) {
                    $(player_ui.parent_id + ' #' + player_ui.skin.css.status).html(html_snippet);
                    $(player_ui.parent_id + ' #' + player_ui.skin.css.status).addClass(player_ui.skin.css.statusAlertCls);
                },
                clearAll : function () {
                    $(player_ui.parent_id + ' #' + player_ui.skin.css.status).removeClass(player_ui.skin.css.statusAlertCls);
                    $(player_ui.parent_id + ' #' + player_ui.skin.css.status).removeClass(player_ui.skin.css.statusWarningCls);
                    $(player_ui.parent_id + ' #' + player_ui.skin.css.status).html('');
                }
            },
            tools : {
                init : function () {
                    if (player_ui.args.hasOwnProperty('tools')
                            && player_ui.args.tools.hasOwnProperty('config')) {
                        player_ui.controls.tools.config = player_ui.args.tools.config;
                    }

                    player_ui.controls.tools.config();
                },
                config : function () {
                    $(player_ui.parent_id + ' #' + player_ui.skin.css.sharingTools + ' .' + player_ui.skin.css.sharingTabCls).hide();
                    $(player_ui.parent_id + ' #' + player_ui.skin.css.sharingTools + ' .' + player_ui.skin.css.sharingTabCls + ':first').show();
                    $(player_ui.parent_id + ' #' + player_ui.skin.css.sharingTools + ' ul#' + player_ui.skin.css.sharingTabControls + ' li:first').addClass('active');
                    $(player_ui.parent_id + ' #' + player_ui.skin.css.sharingTools + ' ul#' + player_ui.skin.css.sharingTabControls + ' li a').click(function() {
                        $(player_ui.parent_id + ' #' + player_ui.skin.css.sharingTools + ' ul#' + player_ui.skin.css.sharingTabControls + ' li').removeClass('active');
                        $(this).parent().addClass('active');
                        var currentTab = $(this).attr('href');
                        $(player_ui.parent_id + ' #' + player_ui.skin.css.sharingTools + ' .' + player_ui.skin.css.sharingTabCls).hide();
                        $(currentTab).show();

                        return false;
                    });
                },
                renderDownload : function (playable) {
                    var snippet = '';
                    if(playable.downloadable === true
                            && player_ui.playlist.current().type === APMPlayer.mediaTypes.AUDIO) {
                        snippet = '<a href="' + APMPlayer.base_path + 'util/download.php?uri=' + playable.http_file_path +'">file download</a>';
                    } else {
                        snippet = 'sorry, this item is not downloadable.';
                    }

                    $(player_ui.parent_id + ' #' + player_ui.skin.css.sharingTools + ' #' + player_ui.skin.css.sharingTabDownload).html(snippet);
                }
            }
        };

        /**
         * player_ui.events
         * contains all handlers + registers listeners for UI and back-end library
         * essentially the brokers communication as a controller between display and playback mechanism
         */
        this.events = {
            init : function () {
                APMPlayer.events.addListener(APMPlayer.events.type.PLAYER_READY, player_ui.events.onPlayerReady);
                APMPlayer.events.addListener(APMPlayer.events.type.PLAYING, player_ui.events.onPlaying);
                APMPlayer.events.addListener(APMPlayer.events.type.PAUSED, player_ui.events.onPaused);
                APMPlayer.events.addListener(APMPlayer.events.type.METADATA, player_ui.events.onMetadata);
                APMPlayer.events.addListener(APMPlayer.events.type.BUFFER_START, player_ui.events.onBufferStart);
                APMPlayer.events.addListener(APMPlayer.events.type.BUFFER_END, player_ui.events.onBufferEnd);
                APMPlayer.events.addListener(APMPlayer.events.type.POSITION_UPDATE, player_ui.events.onPositionUpdate);
                APMPlayer.events.addListener(APMPlayer.events.type.FINISHED, player_ui.events.onFinished);
                APMPlayer.events.addListener(APMPlayer.events.type.UNLOADED, player_ui.events.onUnloaded);
                APMPlayer.events.addListener(APMPlayer.events.type.VOLUME_UPDATED, player_ui.events.onVolumeUpdated);
                APMPlayer.events.addListener(APMPlayer.events.type.CONNECTION_LOST, player_ui.events.onConnectionLost);
                APMPlayer.events.addListener(APMPlayer.events.type.PLAYER_FAILURE, player_ui.events.onFailure);
                APMPlayer.events.addListener(APMPlayer.events.type.MISSING_FILE, player_ui.events.onMissingFile);
            },
            onPlayerReady : function () {
                player_ui.main.isReady = true;
                if (player_ui.main.canAutoPlay()) {
                    player_ui.main.play();
                } else {
                    var current_playable = player_ui.playlist.current();
                    if(current_playable !== null) {
                        player_ui.events.onMetadata(current_playable);
                    }
                }
            },
            onPlaying : function (playable) {
                player_ui.controls.seeker.enable();
                player_ui.controls.status.clearAll();
                $(player_ui.parent_id + ' #' + player_ui.skin.css.play).hide();
                $(player_ui.parent_id + ' #' + player_ui.skin.css.pause).show();

                player_ui.playlist.addNowPlaying(playable);
            },
            onPaused : function (playable) {
                $(player_ui.parent_id + ' #' + player_ui.skin.css.play).show();
                $(player_ui.parent_id + ' #' + player_ui.skin.css.pause).hide();

                if (playable.type === APMPlayer.mediaTypes.LIVE_AUDIO) {
                    player_ui.controls.seeker.reset();
                }
            },
            onFinished : function () {
                player_ui.controls.seeker.disable();
                if (player_ui.underwriting.active === true) {
                    player_ui.controls.seeker.reset();
                    player_ui.underwriting.onFinished();
                    player_ui.main.play();
                } else if (player_ui.playlist.hasNext() && player_ui.main.settings.autoAdvance) {
                    player_ui.playlist.next();
                } else {
                    APMPlayer.unload();
                }
            },
            onPositionUpdate : function (playable) {
                player_ui.controls.seeker.update(playable);

                if(player_ui.controls.seeker.status !== 'USER_SLIDING') {
                    player_ui.controls.playtime.render(playable);
                }
            },
            onSeek : function (percent_decimal) {
                if (APMPlayer.state.current() !== APMPlayer.state.type.STOPPED) {
                    APMPlayer.seek(percent_decimal);
                } else {
                    var current_playable = player_ui.playlist.current();  //manually set if stopped
                    if (current_playable.duration > 0) {
                        current_playable.percent_played = percent_decimal;
                        current_playable.position = current_playable.duration * percent_decimal;
                        player_ui.controls.playtime.render(current_playable);
                    }
                }
            },
            onUnloaded : function (playable) {
                player_ui.controls.seeker.reset();
                player_ui.controls.playtime.render(playable);
                $(player_ui.parent_id + ' #' + player_ui.skin.css.play).show();
                $(player_ui.parent_id + ' #' + player_ui.skin.css.pause).hide();
            },
            onBufferStart : function () {
                if(APMPlayer.state.current() === APMPlayer.state.type.PLAYING) {
                    $(player_ui.parent_id + ' #' + player_ui.skin.css.seeker).addClass(player_ui.skin.css.seekerBufferingCls);
                }
            },
            onBufferEnd : function () {
                $(player_ui.parent_id + ' #' + player_ui.skin.css.seeker).removeClass(player_ui.skin.css.seekerBufferingCls);
            },
            onFetchMetadata : function (response) {
                if (response.hasOwnProperty('error')) {
                    switch (response.error.code) {
                    case '1':  //invalid id passed
                        APMPlayer.debug.log('events.onFetchMetadata() Error: \'' + response.error.description + '\'  id: \'' + response.error.id + '\'', APMPlayer.debug.type.error, 'APMPlayerUI');
                        break;
                    case '2':   //no instances found (this case is the potential old file that doesn't have a record in AudioQ.
                                //to whom it may concern, this is going down in your permanent record.
                        var playable = player_ui.playlist.item(response.error.identifier);
                        playable.clearFlashProperties();
                        playable.http_file_path = 'http://download.publicradio.org/podcast' + response.error.path;
                        APMPlayer.debug.log('events.onFetchMetadata() No podcast or streaming record found in AudioQ for a valid identifier: \'' + playable.identifier + '\' ... let\'s try to wing it anyway!  (this is going down in your permanent record)', APMPlayer.debug.type.warn, 'APMPlayerUI');
                        break;
                    }
                } else {
                    $.each(response, function (identifier, audio_instances) {
                        var playable = player_ui.playlist.item(identifier);

                        //first deal w/ streaming flash version or not.
                        if (audio_instances.hasOwnProperty('stream')) {
                            playable.setEmptyMembers(audio_instances.stream);
                            APMPlayer.debug.log('events.onFetchMetadata() Successfully loaded metadata for valid stream instance: \'' + playable.identifier + '\'', APMPlayer.debug.type.info, 'APMPlayerUI');
                        } else {
                            playable.clearFlashProperties();
                            APMPlayer.debug.log('events.onFetchMetadata() No flash streaming version found! \'' + playable.identifier + '\'', APMPlayer.debug.type.warn, 'APMPlayerUI');
                        }

                        //next deal with podcast location if it exists.
                        //by default, this will set the download/http location to be the podcast location by default (if it exists)
                        if (audio_instances.hasOwnProperty('podcast')) {
                            playable.setEmptyMembers(audio_instances.podcast);
                            playable.http_file_path = audio_instances.podcast.http_file_path;   //also force http_file_path
                            APMPlayer.debug.log('events.onFetchMetadata() Podcast version found, setting http_file_path for download location for \'' + playable.identifier + '\'', APMPlayer.debug.type.info, 'APMPlayerUI');
                        }
                        player_ui.playlist.onUpdate(playable);   //refreshes each playlist playable w/ new data

                        var current_playable = player_ui.playlist.current();
                        if (playable.identifier === current_playable.identifier) {
                            player_ui.events.onMetadata(current_playable);               //set common display window
                            player_ui.controls.tools.renderDownload(current_playable);   //make sure download link is correct

                            if (current_playable.duration > 0) {
                                player_ui.controls.playtime.render(current_playable);    //set time

                                if(current_playable.isFlashStreamable()) {               //make scrubbable (but only if not prog-download)
                                    player_ui.controls.seeker.enable();

                                    if(current_playable.position > 0) {                  //in this situation, the current position was defaulted to start somewhere mid-track.  be sure percent_played is set appropriately.
                                        current_playable.percent_played = current_playable.position / current_playable.duration;
                                    }
                                    player_ui.controls.seeker.update(current_playable);
                                }
                            }

                            player_ui.main.updateAutoPlay(playable);
                            if (player_ui.main.canAutoPlay()) {
                                player_ui.main.play();
                            }
                        }
                    });
                }
            },
            onMetadata : function () {},
            onFailure : function () {
                var playable = player_ui.playlist.current();
                var snippet = '<p>We\'re sorry, but your browser is not able to play the stream.  Please try one of these options:  <br /><br />1) Install or enable <a href="http://get.adobe.com/flashplayer/" target="_blank">Adobe Flash Player</a> <br />2) Use a browser that supports HTML5 and MP3 audio, such as <a href="http://www.google.com/chrome/" target="_blank">Chrome</a>, <a href="http://www.apple.com/safari/download/" target="_blank">Safari</a>, or <a href="http://www.microsoft.com/ie9" target="_blank">Internet Explorer 9</a>';

                //strange-case.  if we're dealing with Safari on Windows7, quicktime is required for HTML5  (yuck!)  this catches that condition.
                if (/Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)) {
                    snippet = '<p>We\'re sorry, but your browser is not able to play the stream.  Please try one of these options:  <br /><br />1) Install or enable <a href="http://get.adobe.com/flashplayer/" target="_blank">Adobe Flash Player</a> <br />2) Install <a href="http://www.apple.com/quicktime/download/" target="_blank">Quicktime</a> for HTML5 support for Safari on Windows (requires reboot) <br />2b) Use a different browser that natively supports HTML5 and MP3 audio, such as <a href="http://www.google.com/chrome/" target="_blank">Chrome</a> or <a href="http://www.microsoft.com/ie9" target="_blank">Internet Explorer 9</a>';
                }

                if (playable.downloadable === true
                        && playable.http_file_path !== '') {

                    if (playable.type === APMPlayer.mediaTypes.AUDIO) {
                        snippet += '<br />3) <a href="' + APMPlayer.base_path + 'util/download.php?uri=' + playable.http_file_path + '">download the audio</a>';
                    } else if (playable.type === APMPlayer.mediaTypes.LIVE_AUDIO) {
                        snippet += '<br />3) <a href="' + playable.http_file_path + '">Stream the audio using a third-party player (eg. iTunes)</a>';
                    }
                }
                snippet += "</p>";

                player_ui.controls.status.displayWarning(snippet);
                player_ui.underwriting.removeOverlay();
            },
            onVolumeUpdated : function (eventData) {
                player_ui.main.settings.volume = eventData.percent_decimal;
            },
            onConnectionLost : function () {
                APMPlayer.unload();
                var snippet = "<p>Your network connection has changed or has been lost.<br /><br />Please check your internet connection, then click play to resume.";
                player_ui.controls.status.displayAlert(snippet);
                player_ui.underwriting.removeOverlay();
            },
            onMissingFile : function (playable) {
                //display error message for missing file.
                //unfortunately, most missing file errors are actually a problem w/ a network connection and rarely are actual missing files.
                //the error output has been adjusted to reflect and offer better feedback.
                var snippet = '<p>We\'re sorry, an error has occurred and your audio cannot be played at this time. <br /><br />Often, this error is a result of a poor or missing internet connection.  Please check your internet connection, then click play to resume.';
                player_ui.controls.status.displayWarning(snippet);
                player_ui.underwriting.removeOverlay();
            }
        };

        /**
         * playlist
         * note, UI will always maintain an internal playist, regardless of appearance of playlist.
         * used internally, even if only one playable.
         */
        this.playlist = APMPlayerFactory.getPlaylist();
        player_ui.playlist.onUpdate = function (playable) {};
        player_ui.playlist.init = function () {
            if (player_ui.args.hasOwnProperty('onPlaylistUpdate')) {
                player_ui.playlist.onUpdate = player_ui.args.onPlaylistUpdate;
            }
            if (player_ui.args.hasOwnProperty('playables')) {
                $.each(player_ui.args.playables, function (index, item) {
                    player_ui.playlist.addPlayable(item);
                });
            }
        };
        player_ui.playlist.addPlayable = function (item) {
            var playable = APMPlayerFactory.getPlayable(item);
            if (playable.isValid()) {
                player_ui.playlist.add(playable);
                player_ui.playlist.onUpdate(playable);

                if (player_ui.main.settings.fetchMetadata === true) {
                    if (playable.isCustomScheme('apm_audio')) {               //only look-up custom APM media items
                        player_ui.main.fetchMetadata(playable);
                    } else {
                        player_ui.main.updateAutoPlay(playable);
                    }
                }

            } else {
                APMPlayer.debug.log('sorry, there was a problem with the parameters passed and a valid playable could not be created.', APMPlayer.debug.type.warn, 'APMPlayerUI');
            }
        };
        player_ui.playlist.gotoItem = function (identifer) {
            if(APMPlayer.state.current() === APMPlayer.state.type.STOPPED
                    || player_ui.playlist.current().identifier !== identifer) {
                player_ui.controls.seeker.disable();
                player_ui.playlist.goto(identifer);
            }
        };
        player_ui.playlist.addNowPlaying = function (playable) {
            $('li[ id = \'' + playable.identifier + '\']').addClass(player_ui.skin.css.playlistNowPlayingCls);
        };
        player_ui.playlist.removeNowPlaying = function (playable) {
            // We use [id=''] instead of # because this avoids issues with special chars in the ID such as : and .
            $(player_ui.parent_id + ' #' + player_ui.skin.css.playlist + ' li[id=\'' + playable.identifier + '\']').removeClass(player_ui.skin.css.playlistNowPlayingCls);
        };
        player_ui.playlist.onCurrentChange = function (previous_playable) {
            if (previous_playable !== null) {   //only null on first item added to playlist.
                player_ui.playlist.removeNowPlaying(previous_playable);
                player_ui.main.play();
            }
            var current_playable = player_ui.playlist.current();
            player_ui.controls.seeker.configure(current_playable);
            player_ui.controls.tools.renderDownload(current_playable);
        };
        player_ui.playlist.events.addListener(APMPlayer.events.type.PLAYLIST_CURRENT_CHANGE, player_ui.playlist.onCurrentChange);


        /**
         * underwriting
         * currently only handles one UnderwritingPlayable per session.
         * subject to change based ad vendor selection.
         */
        this.underwriting = {
            playable : null,
            active : false,
            init : function () {
                if (player_ui.args.hasOwnProperty('underwriting')) {
                    $.each(player_ui.args.underwriting, function (index, params) {
                        if (player_ui.underwriting.playable === null) {
                            player_ui.underwriting.playable = APMPlayerFactory.getUnderwritingPlayable(params);
                            APMPlayer.debug.log('player_ui.underwriting.init() - created underwriting object', APMPlayer.debug.type.info, 'APMPlayerUI');
                        } else {
                            APMPlayer.debug.log('sorry, only one underwriting creative is currently allowed.', APMPlayer.debug.type.error, 'APMPlayerUI');
                        }
                    });
                }
            },
            needsRender : function () {
                if (player_ui.underwriting.active) {
                    return true;
                }
                if (player_ui.underwriting.playable !== null
                        && player_ui.underwriting.playable.has_played === false
                        && player_ui.underwriting.playable.isValid() === true) {
                    return true;
                } else {
                    return false;
                }
            },
            renderAd : function () {
                player_ui.underwriting.active = true;
                player_ui.underwriting.playable.has_played = true;
                player_ui.underwriting.addOverlay();
                APMPlayer.play(player_ui.underwriting.playable, player_ui.main.settings);
            },
            renderTime : function (playable) {
                var remainingText;
                if (playable.duration > 0) {
                    remainingText =  player_ui.controls.playtime.convertToTime(playable.duration - (playable.duration * playable.percent_played)) + ' remaining';
                } else {
                    remainingText = 'a few seconds remaining';
                }
                $(player_ui.parent_id + ' #' + player_ui.skin.css.sponsorTimer).text(remainingText);
            },
            addOverlay : function () {
                $(player_ui.parent_id).addClass(player_ui.skin.css.sponsorOverlayActiveCls);
                $(player_ui.parent_id).removeClass(player_ui.skin.css.sponsorOverlayInactiveCls);
            },
            removeOverlay : function () {
                $(player_ui.parent_id).addClass(player_ui.skin.css.sponsorOverlayInactiveCls);
                $(player_ui.parent_id).removeClass(player_ui.skin.css.sponsorOverlayActiveCls);
            },
            onFinished : function () {
                player_ui.underwriting.active = false;
                player_ui.underwriting.removeOverlay();
            }
        };


        player_ui.init();    //always init on construct

    };  //end APMPlayerUI


    /**
     * @name $.fn.apmplayer_ui
     * @class
     *
     * @description main integration point between jQuery, APMPlayerUI, and {@link APMPlayer}.
     * The $.fn.apmplayer_ui is tested and compliant with all versions of jQuery >= v1.4
     *
     * @param {Object} args object literal used to instantiate APMPlayerUI
     * @param {Object} args.settings object literal containing initial values to set on APMPlayer initialization.
     * @param {Number} args.settings.volume sets volume on initialization.  (eg. volume : 0.5)
     * @param {Boolean} args.settings.autoplay autoplays current {@link Playable} in {@link Playlist} after library init completes. (default : false)
     * @param {Boolean} args.settings.fetchMetadata retrieves and sets additional metadata for each {@link Playable}.  Note that this will only override a value in {@link Playable} if it is currently not set.  Values passed in when adding a {@link Playable} will take precedence.  (default : true)
     * @param {Array} args.playables an array of {@link Playable} objects.
     * @param {Array} args.underwriting an array of {@link UnderwritingPlayable} objects.
     * @param {Function} args.onPlaylistUpdate() a method that will fire when Events.type.PLAYLIST_CURRENT_CHANGE is fired, or the playlist is updated. (see {@link Events}).
     * @param {Function} args.onMetadata() a method that will fire when Events.type.METADATA is fired. (see {@link Events}).
     *
     * @example
     * //note: see CustomSchemes for this example
     * $('#apm_media_wrapper').apmplayer_ui({
     *    playables : [
     *        {
     *            identifier: 'apm_audio:/performance_today/2012/04/24/pt2_20120424_128.mp3'
     *        }
     *    ]
     * });
     *
     * @example
     * $('#apm_media_wrapper').apmplayer_ui({
     *    playables : [
     *        {
     *           identifier: 'my audio',
     *           type: 'audio',
     *           description: 'more info about my audio',
     *           flash_server_url: 'rtmp://server/',
     *           flash_file_path: 'mp3:path/file.mp3',
     *           http_file_path: 'http://server/file.mp3'
     *        }
     *    ]
     * });
     *
     *
     * @example
     * $('#apm_media_wrapper').apmplayer_ui({
     *    settings : {
     *        volume : 0.8,
     *        autoplay : true
     *    },
     *    playables : [
     *       {
     *          identifier: 'apm_live_audio:/mpr_current',
     *          description: 'live streaming from 89.3',
     *          program: '89.3 the Current',
     *          host: 'Mark Wheat',
     *          date: 'March 24, 2012',
     *          detail: 'during this hour...',
     *          image_sm: 'http://mpr.org/images/current.gif'
     *       },
     *       {
     *           identifier: 'apm_audio:/performance_today/2012/04/24/pt2_20120424_128.mp3',
     *           program: 'on Being',
     *           downloadable: false
     *       }
     *    ],
     *    onPlaylistUpdate : function (playable) {
     *       // implement
     *    },
     *    onMetadata : function (playable) {
     *       // implement
     *    }
     * });
     */
    $.fn.apmplayer_ui = function (args) {

        //check dependencies
        if (typeof APMPlayer === 'undefined'
                || typeof soundManager === 'undefined') {
            $.error('apmplayer_ui ERROR.  1 or more dependent libraries missing.  exiting.');
            return null;
        }

        var jq_element = this,  //hold reference to jQuery $(this)
            methods = {
                /**
                 * @name addPlayable
                 *
                 * @description adds a {@link Playable}, if valid, to {@link Playlist}.
                 * @example $('#player_container_div').apmplayer_ui('addPlayable', playable);
                 * @methodOf $.fn.apmplayer_ui
                 */
                addPlayable : function (item) {
                    if (typeof window.apmplayer_ui !== 'undefined') {
                        window.apmplayer_ui.playlist.addPlayable(item);
                    } else {
                        APMPlayer.debug.log('you must first initialize apmplayer_ui before calling methods on it.', APMPlayer.debug.type.error, 'APMPlayerUI');
                    }
                },
                /**
                 * @name gotoPlaylistItem
                 *
                 * @description changes position in {@link Playlist} to the {@link Playable} that matches the passed identifier, and begins playing the item.
                 * @example $('#player_container_div').apmplayer_ui('gotoPlaylistItem', identifier);
                 * @methodOf $.fn.apmplayer_ui
                 */
                gotoPlaylistItem : function (identifier) {
                    if (typeof window.apmplayer_ui !== 'undefined') {
                        window.apmplayer_ui.playlist.gotoItem(identifier);
                    } else {
                        APMPlayer.debug.log('you must first initialize apmplayer_ui before calling methods on it.', APMPlayer.debug.type.error, 'APMPlayerUI');
                    }
                }
            };

        if (methods[args]) {
            return methods[args].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof args === 'object' || !args) {
            if (typeof window.apmplayer_ui === 'undefined') {
                window.apmplayer_ui = new APMPlayerUI(jq_element, args);
                APMPlayer.debug.log('instantiated apmplayer_ui', APMPlayer.debug.type.info, 'APMPlayerUI');
            } else {
                APMPlayer.debug.log('sorry, only one player UI instance is currently supported.', APMPlayer.debug.type.error, 'APMPlayerUI');
            }
        } else {
            APMPlayer.debug.log('Method ' +  args + ' does not exist on jQuery.apmplayer_ui', APMPlayer.debug.type.error, 'APMPlayerUI');
        }
    };
}(jQuery));


/**
 * APMPlayer support script for AdsWizz.
 *
 * Requires the following scripts:
 * <script type='text/javascript' src='http://cdn.adswizz.com/adswizz/js/SynchroClient2.js'></script>
 * <script type='text/javascript' src='http://synchrobox.adswizz.com/register2.php'></script>
 *
 * @author William Johnston <wjohnston@mpr.org>
 */

/**
 * Quick helper to determine whether an object is actually set to something.
 * @param  {object}  obj Any object
 * @return {boolean}        Whether the object is set.
 */
function isset (obj) {
    if (typeof(obj) != "undefined" && obj !== null) {
        return true;
    } else {
        return false;
    }
}

(function ($) {
    /**
     * Decorate the stream for AdsWizz if an adblocker isn't loaded.
     * Keeps the stream from breaking if you do.
     * 
     * @param  {string} mp3_stream The MP3 stream to be decorated.
     * @return {string}            A decorated MP3 stream.
     */
    $.fn.safe_decorate = function (mp3_stream) {
        //be sure adswizz script loads... adblock prevents the load
        //and function will break player if undefined.
        if (typeof com_adswizz_synchro_decorateUrl !== 'undefined') {
            mp3_stream = com_adswizz_synchro_decorateUrl(mp3_stream);
        }
        return mp3_stream;
    }

    $.fn.adswizz_handle_metadata = function (options) {
        // Validate options.
        if (typeof options.playable === 'undefined') {
            throw 'adswizz_handle_metadata: Requires playable.';
        }
        playable = options.playable;

        if (!options.hasOwnProperty('triggers')) {
            throw 'adswizz_handle_metadata: Requires triggers.';
        }
        triggers = options.triggers;

        if (!options.hasOwnProperty('zones')) {
            throw 'adswizz_handle_metadata: Requires zones.';
        }
        zones = options.zones;

        // Execute options.
        if (triggers.hasOwnProperty(playable.title)) {
            
            trigger = triggers[playable.title];
            
            for (var zoneName in zones) {
                
                if (isset(trigger[zoneName])) {
                    
                    var zoneId = trigger[zoneName];
                    var zone = zones[zoneName];

                    // Validate that the dom element is a jquery object or string and handle the latter case.
                    if (typeof zone.dom === 'string') {
                        var element = $(zone.dom);
                    } else {
                        var element = zone.dom;
                    }

                    zoneWidth = 300;
                    if (zone.hasOwnProperty('width')) {
                        zoneWidth = zone.width;
                    }
                    element.width(zoneWidth);


                    zoneHeight = 100;
                    if (zone.hasOwnProperty('height')) {
                        zoneHeight = zone.height;
                    }
                    element.height(zoneHeight);
                    
                    var sourceLink = 'http://streamguys.adswizz.com/www/delivery/afr.php'
                                        + '?zoneid=' + zoneId
                                        + '&context=' + playable.adw_context
                                        + '&cb=' + Math.random();
                    
                    var content = $('<iframe />', {
                        width: zoneWidth,
                        height: zoneHeight,
                        src: sourceLink,
                        framespacing: 0,
                        frameborder: 'no',
                        scrolling: 'no',
                        allowTransparency: 'true'
                    });

                    element.html(content);

                    if (zone.hasOwnProperty('done')) {
                        zone.done();
                    }
                }
            };
        } else {
            zones.fallback.done();
        }
    }

    // Default zones for APMPlayer
    $.fn.apmplayer_zones = {
        banner : {
            dom: '#adswizzBanner',
            width: 300,
            height: 100
        },
        overlay : {
            dom: '#adswizzOverlay',
            width: 300,
            height: 250,
            done: function() {
                $('#apm_media_wrapper').addClass('preroll-active');
                $('#apm_media_wrapper').removeClass('preroll-inactive');
            }
        },
        fallback : {
            // Special zone which fires if none of the others apply.
            done: function() {
                $('#apm_media_wrapper').removeClass('preroll-active');
                $('#apm_media_wrapper').addClass('preroll-inactive');
            }
        }
    }

})(jQuery);



var media_player_playables = {"identifier":"adswizz_mpr_news",
    "title":"MPR News",
    "description":"live stream",
    "flash_server_url":"rtmp://archivemedia.publicradio.org/news/",
    "flash_file_path":"news.stream",
    "http_file_path":"http://nis.stream.publicradio.org/nis.mp3",
    "buffer_time":6,
    "type":"live_audio"};
