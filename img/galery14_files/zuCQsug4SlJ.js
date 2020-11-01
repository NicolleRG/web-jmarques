if (self.CavalryLogger) { CavalryLogger.start_js(["v1FBw"]); }

__d('FBChecklistItem.react',['cx','invariant','React','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k,l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;m.prototype.render=function(){'use strict';Array.isArray(this.props.children)&&(this.props.children.length===2||this.props.children.length===3)||i(0);var n,o,p;if(this.props.children.length===3){n=this.props.children[0];o=this.props.children[1];p=this.props.children[2];}else{n=null;o=this.props.children[0];p=this.props.children[1];}var q=this.props.context==='block'?'div':'span',r=null;if(n)r=c('React').createElement(q,{className:"_pur _pus"},n);var s=this.props.paddingLeft,t=this.props.paddingRight,u="_put"+(s==='none'?' '+"_puu":'')+(s==='small'?' '+"_puv":'')+(t==='none'?' '+"_puw":'')+(t==='small'?' '+"_pux":'');return (c('React').createElement(q,babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,u)}),r,c('React').createElement(q,{className:"_puy"+(!n?' '+"_pus":'')},o),c('React').createElement(q,{className:"_puz"},p)));};function m(){'use strict';j.apply(this,arguments);}m.propTypes={context:l.oneOf(['block','inline']),paddingLeft:l.oneOf(['none','small','normal']),paddingRight:l.oneOf(['none','small','normal'])};m.defaultProps={context:'block',paddingLeft:'normal',paddingRight:'normal'};f.exports=m;}),null);
__d('FBChecklistPagerMixin',['React'],(function a(b,c,d,e,f,g){var h=c('React').PropTypes,i={propTypes:{endpoint:h.string.isRequired,onExhaustion:h.func.isRequired,onFetch:h.func,placeholder:h.string.isRequired},getInitialState:function j(){return {endpoint:this.props.endpoint,loading:false};},_shouldFetchMore:function j(){if(this.state.loading||!this.state.endpoint)return false;this.setState({loading:true});return true;},_onFetch:function j(k){this.setState({endpoint:k.endpoint,loading:false});this.props.onFetch&&this.props.onFetch(k);!k.endpoint&&this.props.onExhaustion();}};f.exports=i;}),null);
__d('FBChecklistPager.react',['cx','AsyncRequest','Keys','FBChecklistPagerMixin','React','XUIText.react'],(function a(b,c,d,e,f,g,h){var i=c('React').createClass({displayName:'FBChecklistPager',mixins:[c('FBChecklistPagerMixin')],fetchMore:function j(){if(!this._shouldFetchMore())return;new (c('AsyncRequest'))().setURI(this.state.endpoint).setHandler(this._fetchHandler).send();},render:function j(){var k="_4j3_"+(this.state.loading?' '+"_4j40":'');return (c('React').createElement('div',{className:k,onClick:this._clickHandler,onKeyPress:this._keyPressHandler,role:'button',tabIndex:0},c('React').createElement(c('XUIText.react'),{size:'small',weight:'bold'},this.props.placeholder),c('React').createElement('span',{className:"_4j41"})));},_clickHandler:function j(event){event.preventDefault();this.fetchMore();},_fetchHandler:function j(k){var l=k.getPayload();this._onFetch(l);},_keyPressHandler:function j(event){switch(event.charCode){case c('Keys').SPACE:case c('Keys').RETURN:this.fetchMore();}}});f.exports=i;}),null);
__d('requiredIfPropIsTruthy',['sprintf'],(function a(b,c,d,e,f,g){function h(i,j){return function(k,l,m,n){if(!k[i])return;if(k[l]===undefined)return new Error(c('sprintf')('Must supply %s to %s if property %s is truthy.',l,m,i));return j(k,l,m,n);};}f.exports=h;}),null);
__d('FBChecklistProps',['React','requiredIfPropIsTruthy'],(function a(b,c,d,e,f,g){var h=c('React').PropTypes,i=h.shape({checked:h.bool,id:h.oneOfType([h.string,h.number]).isRequired,image:h.oneOfType([h.string,h.object]),name:h.string,subtitle:h.string,title:h.oneOfType([h.string,h.object]).isRequired}),j={baseName:h.string.isRequired,fetchOnScroll:h.bool,imageSize:h.number,maxHeight:h.number,multiSelect:h.bool,onBlur:h.func,onChange:h.func,onExhaust:h.func,onFetch:h.func,onFocus:h.func,options:h.arrayOf(i).isRequired,overflow:h.oneOf(['scroll','show']),pagerEndpoint:c('requiredIfPropIsTruthy')('showPager',h.string),pagerPlaceholder:c('requiredIfPropIsTruthy')('showPager',h.string),requireSelect:h.bool,scrollOnFetch:h.bool,showPager:h.bool};f.exports=j;}),null);
__d('highlight',['Animation','Style'],(function a(b,c,d,e,f,g){function h(i,j,k,l){new (c('Animation'))(i).from('background',l||'#fff9d7').to('background',k||'#fff').ease(c('Animation').ease.both).duration(2000).ondone(function(){c('Style').set(i,'background','');j&&j();}).go();}f.exports=h;}),null);
__d('FBChecklistScrollMixin',['Animation','ReactDOM','Scroll','Style','highlight','throttle'],(function a(b,c,d,e,f,g){var h=400,i=100,j=300,k=250,l={componentWillUnmount:function n(){this.throttled=null;},scrollToBottom:function n(){this._scrollTo(this._getScrollArea().scrollHeight);},scrollOptionToTop:function n(o){if(!this.state.options.has(o))return;var p=c('ReactDOM').findDOMNode(this.refs[o]);this._scrollTo(p.offsetTop-1,null,j);},scrollToOption:function n(o){if(!this.state.options.has(o))return;var p=this._getScrollArea(),q=c('ReactDOM').findDOMNode(this.refs[o]),r=q.offsetTop+q.offsetHeight,s=c('Scroll').getTop(p)+p.offsetHeight,t=function(){var u=this._getBackgroundColor();u&&c('highlight')(q,null,u);}.bind(this);if(q.offsetTop<c('Scroll').getTop(p)){this._scrollTo(q.offsetTop-1,t);}else if(r>s){this._scrollTo(r-p.offsetHeight,t);}else{t();return;}},_getScrollArea:function n(){return this.refs.container.getArea();},_getBackgroundColor:function n(){var o=this._getScrollArea();while(o){var p=c('Style').get(o,'backgroundColor');if(!m(p))return p;o=o.parentElement;}return null;},_maybeFetchMoreOptions:function n(){if(this.props.fetchOnScroll&&this.state.showPager&&this.refs.container.getScrollPosition().bottom<h)this.refs.pager.fetchMore();},_scrollHandler:function n(){if(!this.throttled)this.throttled=c('throttle')(this._maybeFetchMoreOptions,k,this);this.throttled();},_scrollTo:function n(o,p,q){new (c('Animation'))(this._getScrollArea()).to('scrollTop',o).ease(c('Animation').ease.end).duration(q||i).ondone(function(){p&&p();}).go();}};function m(n){if(!n.startsWith('rgba'))return false;var o=n.split(',');return o.length===4&&parseFloat(o[3])===0;}f.exports=l;}),null);
__d('ShadowedScrollableArea.react',['cx','React','ReactDOM','Scroll','Vector','throttle','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes,l=500;i=babelHelpers.inherits(m,c('React').Component);j=i&&i.prototype;function m(){var n,o;'use strict';for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=j.constructor).call.apply(n,[this].concat(q)),this.state={showBottom:false,showTop:false},this.getArea=function(){return c('ReactDOM').findDOMNode(this.refs.area);}.bind(this),this.getScrollPosition=function(){var s=c('ReactDOM').findDOMNode(this.refs.area),t=this.$ShadowedScrollableArea2().height;return {bottom:s.scrollHeight-c('Scroll').getTop(s)-t,top:c('Scroll').getTop(s)};}.bind(this),this.updateShadows=function(){if(this.$ShadowedScrollableArea3()){var s=this.getScrollPosition();this.setState({showBottom:s.bottom!==0,showTop:s.top!==0});}else if(this.state.showBottom||this.state.showTop)this.setState({showBottom:false,showTop:false});}.bind(this),this.$ShadowedScrollableArea2=function(){var s=c('ReactDOM').findDOMNode(this.refs.area);return {height:c('Vector').getElementDimensions(s).y,scrollHeight:s.scrollHeight};}.bind(this),this.$ShadowedScrollableArea3=function(){var s=this.$ShadowedScrollableArea2();return s.scrollHeight>s.height;}.bind(this),this.$ShadowedScrollableArea1=function(event){if(!this.throttled)this.throttled=c('throttle')(this.updateShadows,l,this);this.throttled();}.bind(this),o;}m.prototype.render=function(){'use strict';var n=c('React').createElement('div',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"scrollable"),ref:'area',style:babelHelpers['extends']({},this.props.style||{},{maxHeight:this.props.maxHeight})}),this.props.children),o="_2yy7"+(this.state.showBottom?' '+"_2yy8":'')+(this.state.showTop?' '+"_2yy9":'');return c('React').createElement('div',{className:o,onScroll:this.$ShadowedScrollableArea1},n);};m.prototype.componentWillUnmount=function(){'use strict';this.throttled=null;};m.propTypes={maxHeight:k.number.isRequired};f.exports=m;}),null);
__d('FBChecklist.react',['cx','FBChecklistProps','FBChecklistScrollMixin','React','Image.react','FBChecklistItem.react','FBChecklistPager.react','ShadowedScrollableArea.react','XUIGrayText.react','uniqueID'],(function a(b,c,d,e,f,g,h){var i=c('React').PropTypes,j=248,k=32,l=c('React').createClass({displayName:'FBChecklist',mixins:[c('FBChecklistScrollMixin')],propTypes:babelHelpers['extends']({titleFontShade:i.oneOf(['dark','light','medium'])},c('FBChecklistProps')),getDefaultProps:function m(){return {maxHeight:j,overflow:'show',imageSize:k,titleFontShade:'medium'};},getInitialState:function m(){return {instanceID:c('uniqueID')()};},render:function m(){var n=this.props.options.map(function(q){var r=null;if(q.image)r=c('React').createElement('span',null,c('React').createElement(c('Image.react'),{alt:q.title,height:this.props.imageSize,src:q.image,width:this.props.imageSize}));var s=null;if(q.subtitle)s=c('React').createElement(c('XUIGrayText.react'),{className:"_25_9",weight:'normal'},q.subtitle);var t="_25_a"+(q.checked?' '+"_25_b":'')+(q.focused?' '+"_25_c":''),u=null;if(q.iconSrc&&q.iconExplanation)u=c('React').createElement(c('Image.react'),{'aria-label':q.iconExplanation,className:"_25_e",'data-hover':'tooltip','data-tooltip-content':q.iconExplanation,'data-tooltip-position':'above',src:q.iconSrc});var v=[this.state.instanceID,q.id].join('_');return (c('React').createElement('label',{className:t,htmlFor:v,key:q.id,ref:q.id},c('React').createElement(c('FBChecklistItem.react'),{context:'inline',paddingLeft:this.props.paddingLeft,paddingRight:this.props.paddingRight},r,c('React').createElement('span',null,c('React').createElement(c('XUIGrayText.react'),{className:"_25_f",shade:this.props.titleFontShade,size:'small',weight:'bold'},q.title,u),s),c('React').createElement('span',{className:"_25_g"},c('React').createElement('span',{className:"_25_h"}),c('React').createElement('input',{checked:q.checked,className:"_25_i",id:v,name:this._getOptionNameOrFallback(q),onBlur:this.props.onBlur,onChange:this.props.onChange,onFocus:this.props.onFocus,type:'checkbox',value:q.id})))));}.bind(this)),o=null;if(this.props.showPager)o=c('React').createElement(c('FBChecklistPager.react'),{endpoint:this.props.pagerEndpoint,onExhaustion:this.props.onExhaust,onFetch:this.props.onFetch,placeholder:this.props.pagerPlaceholder,ref:'pager'});var p=c('React').createElement('fieldset',{className:"_25_j"},n,o);if(this.props.overflow==='scroll')return (c('React').createElement(c('ShadowedScrollableArea.react'),{maxHeight:this.props.maxHeight,onScroll:this._scrollHandler,ref:'container'},p));return p;},_getOptionNameOrFallback:function m(n){var o=n.name||this.props.baseName;if(this.props.multiSelect&&!o.endsWith('[]'))o+='['+n.id+']';return o;}});f.exports=l;}),null);
__d('OrderedMap',['invariant'],(function a(b,c,d,e,f,g,h){'use strict';var i='key:';function j(q,r){var s={};for(var t=0;t<q.length;t++){var u=q[t],v=r(u);l(v);var w=i+v;!(w in s)||h(0);s[w]=u;}return s;}function k(q,r){this._normalizedObj=q;this._computedPositions=null;this.length=r;}function l(q){q!==''&&(typeof q==='string'||typeof q==='number')||h(0);}function m(q,r,s){typeof q==='number'&&typeof r==='number'&&r>=0&&q>=0&&q+r<=s||h(0);}function n(q,r){q&&q.constructor===Object&&(!r||r.constructor===Object)||h(0);var s={},t=0,u;for(u in q)if(q.hasOwnProperty(u)){s[u]=q[u];t++;}for(u in r)if(r.hasOwnProperty(u)){if(!(u in s))t++;s[u]=r[u];}return new k(s,t);}var o={has:function q(r){l(r);var s=i+r;return s in this._normalizedObj;},get:function q(r){l(r);var s=i+r;return this.has(r)?this._normalizedObj[s]:undefined;},merge:function q(r){r instanceof k||h(0);return n(this._normalizedObj,r._normalizedObj);},map:function q(r,s){return this.mapRange(r,0,this.length,s);},mapRange:function q(r,s,t,u){var v=this._normalizedObj,w={},x=0;m(s,t,this.length);var y=s+t-1;for(var z in v)if(v.hasOwnProperty(z)){if(x>=s){if(x>y)break;var aa=v[z];w[z]=r.call(u,aa,z.substr(i.length),x);}x++;}return new k(w,t);},filter:function q(r,s){return this.filterRange(r,0,this.length,s);},filterRange:function q(r,s,t,u){var v={},w=0;this.forEachRange(function(x,y,z){if(r.call(u,x,y,z)){var aa=i+y;v[aa]=x;w++;}},s,t);return new k(v,w);},forEach:function q(r,s){this.forEachRange(r,0,this.length,s);},forEachRange:function q(r,s,t,u){m(s,t,this.length);var v=this._normalizedObj,w=0,x=s+t-1;for(var y in v)if(v.hasOwnProperty(y)){if(w>=s){if(w>x)break;var z=v[y];r.call(u,z,y.substr(i.length),w);}w++;}},mapKeyRange:function q(r,s,t,u){var v=this.indexOfKey(s),w=this.indexOfKey(t);v!==undefined&&w!==undefined||h(0);w>=v||h(0);return this.mapRange(r,v,w-v+1,u);},forEachKeyRange:function q(r,s,t,u){var v=this.indexOfKey(s),w=this.indexOfKey(t);v!==undefined&&w!==undefined||h(0);w>=v||h(0);this.forEachRange(r,v,w-v+1,u);},keyAtIndex:function q(r){var s=this._getOrComputePositions(),t=s.keyByIndex[r];return t?t.substr(i.length):undefined;},keyAfter:function q(r){return this.nthKeyAfter(r,1);},keyBefore:function q(r){return this.nthKeyBefore(r,1);},nthKeyAfter:function q(r,s){var t=this.indexOfKey(r);t!==undefined||h(0);return this.keyAtIndex(t+s);},nthKeyBefore:function q(r,s){return this.nthKeyAfter(r,-s);},indexOfKey:function q(r){l(r);var s=i+r,t=this._getOrComputePositions(),u=t.indexByKey[s];return u===undefined?undefined:u;},toArray:function q(){var r=[],s=this._normalizedObj;for(var t in s)if(s.hasOwnProperty(t))r.push(s[t]);return r;},_getOrComputePositions:function q(){var r=this._computedPositions;if(!r)this._computePositions();return this._computedPositions;},_computePositions:function q(){this._computedPositions={keyByIndex:{},indexByKey:{}};var r=this._computedPositions.keyByIndex,s=this._computedPositions.indexByKey,t=0,u=this._normalizedObj;for(var v in u)if(u.hasOwnProperty(v)){r[t]=v;s[v]=t;t++;}}};Object.assign(k.prototype,o);var p={from:function q(r){r instanceof k||h(0);return n(r._normalizedObj,null);},fromArray:function q(r,s){Array.isArray(r)||h(0);typeof s==='function'||h(0);return new k(j(r,s),r.length);}};f.exports=p;}),null);
__d('FBChecklistStateMixin',['OrderedMap','requestAnimationFrame'],(function a(b,c,d,e,f,g){var h={addOption:function i(j,k,l,m,n,o){this.props.multiSelect||this._uncheckAllOptions();this._insertSingleOption.apply(this,[false].concat(Array.prototype.slice.call(arguments)));},replaceWithSingleOption:function i(j,k,l,m,n,o){this._insertSingleOption.apply(this,[true].concat(Array.prototype.slice.call(arguments)));this._optionsWereReplaced&&this._optionsWereReplaced();},clearSelection:function i(){this._uncheckAllOptions();},getSelection:function i(){var j={};this.state.options.forEach(function(k,l){if(k.checked)j[l]=k;});return j;},getSelectionCount:function i(){return Object.keys(this.getSelection()).length;},hasSelection:function i(){return this.getSelectionCount()>0;},getInitialState:function i(){return {options:c('OrderedMap').fromArray(this.props.options,function(j){return j.id;}),showPager:this.props.showPager};},shouldComponentUpdate:function i(j,k){return (this.state.options!==k.options||this.state.showPager!==k.showPager);},_changeHandler:function i(event){var j=this._getEventTarget(event);if(this.props.requireSelect&&!j.checked&&this.getSelectionCount()===1)return;if(j.checked&&!this.props.multiSelect)this._uncheckAllOptions();this.setState({options:this.state.options.map(function(k,l){if(l===j.value)k.checked=j.checked;return k;})},function(){if(this.props.onChange)this.props.onChange(this.getSelection());}.bind(this));},_exhaustionHandler:function i(){this.setState({showPager:false});},_fetchHandler:function i(j){if(!j.options.length){this._exhaustionHandler();return;}this._insertOptions(c('OrderedMap').fromArray(j.options,function(k){return k.id;}),false,function(){if(this.props.scrollOnFetch&&this.scrollOptionToTop)this.scrollOptionToTop(j.options[0].id);}.bind(this));if(this.refs.container&&this.refs.container.updateShadows)c('requestAnimationFrame')(this.refs.container.updateShadows);},_insertSingleOption:function i(j,k,l,m,n,o,p){var q=c('OrderedMap').fromArray([{id:k,title:l,subtitle:m,image:n,checked:!!o,name:p}],function(r){return r.id;});this._insertOptions(q,j);if(this._optionWasAdded)c('requestAnimationFrame')(function(){return this._optionWasAdded(k);}.bind(this));},_insertOptions:function i(j,k,l){this.setState({options:k?j:this.state.options.merge(j)},l);},_uncheckAllOptions:function i(){this.setState({options:this.state.options.map(function(j){j.checked=false;return j;})});},_getEventTarget:function i(event){return event.target;}};f.exports=h;}),null);
__d('FBChecklistWrapper.react',['FBChecklistStateMixin','React','FBChecklist.react'],(function a(b,c,d,e,f,g){var h=c('React').createClass({displayName:'FBChecklistWrapper',mixins:[c('FBChecklistStateMixin')],propTypes:{},render:function i(){return (c('React').createElement(c('FBChecklist.react'),babelHelpers['extends']({},this.props,{onBlur:this._blurHandler,onChange:this._changeHandler,onExhaust:this._exhaustionHandler,onFetch:this._fetchHandler,onFocus:this._focusHandler,options:this.state.options.toArray(),ref:'checklist',showPager:this.state.showPager})));},scrollToBottom:function i(){this.refs.checklist.scrollToBottom();},scrollOptionToTop:function i(j){this.refs.checklist.scrollOptionToTop(j);},scrollToOption:function i(j){this.refs.checklist.scrollToOption(j);},_blurHandler:function i(event){var j=this._getEventTarget(event);this.setState({options:this.state.options.map(function(k,l){if(l===j.value)k.focused=false;return k;})});},_focusHandler:function i(event){var j=this._getEventTarget(event);this.setState({options:this.state.options.map(function(k,l){k.focused=l===j.value;return k;})});}});f.exports=h;}),null);
__d('SearchSourceWithMetrics',['AbstractSearchSource'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('AbstractSearchSource'));i=h&&h.prototype;function j(k,l){'use strict';i.constructor.call(this);this.searchSource=k;this.reporter=l;}j.prototype.searchImpl=function(k,l,m){'use strict';this.reporter.reportQueryBegin(k);if(m)this.reporter.reportStrategyName(m.strategyName);var n=Date.now();this.searchSource.search(k,function(o,p){this.reporter.reportQueryComplete(Date.now()-n,0);l(o,p);}.bind(this),m);};j.prototype.bootstrapImpl=function(k){'use strict';this.reporter.reportBootstrapBegin();return this.searchSource.bootstrap(function(){this.searchSource.getBootstrappedEntries(function(l){this.reporter.reportBootstrapComplete(l.map(function(m){return m.getType();}));k();}.bind(this));}.bind(this));};f.exports=j;}),null);
__d("QueriesHistory",[],(function a(b,c,d,e,f,g){function h(i){"use strict";this.$QueriesHistory1=i;this.reset();}h.prototype.getQueries=function(){"use strict";return this.$QueriesHistory2;};h.prototype.getCurrentLength=function(){"use strict";return this.$QueriesHistory3;};h.prototype.add=function(i){"use strict";this.$QueriesHistory2.push(i);this.$QueriesHistory3+=i.length;while(this.$QueriesHistory2.length!==0&&this.$QueriesHistory3>this.$QueriesHistory1){var j=this.$QueriesHistory2.shift();this.$QueriesHistory3-=j.length;}};h.prototype.reset=function(){"use strict";this.$QueriesHistory3=0;this.$QueriesHistory2=[];};f.exports=h;}),null);
__d("TypeaheadMetricCounter",[],(function a(b,c,d,e,f,g){function h(){"use strict";this.reset();}h.prototype.reset=function(){"use strict";this.stats={};this.avgStats={};};h.prototype.recordStat=function(i,j){"use strict";this.stats[i]=j;};h.prototype.recordCountStat=function(i){"use strict";var j=this.stats[i];this.stats[i]=j?j+1:1;};h.prototype.recordAvgStat=function(i,j){"use strict";if(this.avgStats[i]){this.avgStats[i][0]+=j;this.avgStats[i][1]+=1;}else this.avgStats[i]=[j,1];};h.prototype.hasStats=function(){"use strict";return !!Object.keys(this.stats).length;};h.prototype.getStats=function(){"use strict";var i=babelHelpers["extends"]({},this.stats);for(var j in this.avgStats){var k=this.avgStats[j];i[j]=k[0]/k[1];}return i;};f.exports=h;}),null);
__d('TypeaheadMetricReporter',['AsyncRequest','QueriesHistory','TypeaheadMetricCounter','mixInEventEmitter'],(function a(b,c,d,e,f,g){var h='/ajax/typeahead/record_basic_metrics.php',i=1000;function j(k){'use strict';this.counter=new (c('TypeaheadMetricCounter'))();this.extraData=Object.assign({},k);this.bootstrapped=false;this.bootstrapBegin=Date.now();this.queriesHistory=new (c('QueriesHistory'))(i);this.lastQuery=null;this.sessionActive=false;this.lastNotBackspacedQuery='';this.lastRequestID=null;this.requestIDHistory=[];this.$TypeaheadMetricReporter1();}j.prototype.getSID=function(){'use strict';return this.sid;};j.prototype.sessionStart=function(){'use strict';this.sessionActive=true;this.sessionStartTime=Date.now();};j.prototype.sessionEnd=function(){'use strict';if(this.sessionActive){this.$TypeaheadMetricReporter2();this.$TypeaheadMetricReporter1();this.sessionActive=false;}};j.prototype.setAdditionalStats=function(k){'use strict';if(k)Object.entries(k).forEach(function(l){var m=l[0],n=l[1];this.counter.recordStat(m,n);}.bind(this));};j.prototype.sessionPause=function(k){'use strict';if(this.sessionActive){this.setAdditionalStats(k);this.$TypeaheadMetricReporter2();this.sessionActive=false;}};j.prototype.sessionDeactivate=function(){'use strict';this.sessionActive=false;};j.prototype.reportSelect=function(k,l,m,n,o,p){'use strict';o=o==null?this.lastQuery:o;this.counter.recordStat('selected_id',k||'SELECT_NULL');this.counter.recordStat('selected_type',l);this.counter.recordStat('selected_position',m);this.counter.recordStat('selected_with_mouse',n?1:0);this.counter.recordStat('selected_query',o);for(var q in p)this.counter.recordStat(q,p[q]);};j.prototype.reportStrategyName=function(k){'use strict';this.counter.recordStat('strategy_name',k);};j.prototype.reportBootstrapBegin=function(){'use strict';this.bootstrapBegin=Date.now();};j.prototype.reportBootstrapDirty=function(){'use strict';this.bootstrapped=false;};j.prototype.reportBootstrapComplete=function(k){'use strict';this.counter.recordAvgStat('bootstrap_latency',Date.now()-this.bootstrapBegin);var l={};k.forEach(function(m){l[m]=(l[m]||0)+1;});this.counter.recordStat('bootstrap_response_types',l);this.bootstrapped=true;};j.prototype.reportQueryBegin=function(k){'use strict';this.counter.recordStat('query',k);this.counter.recordCountStat('num_queries');this.queriesHistory.add(k);if(this.lastNotBackspacedQuery.indexOf(k)!==0)this.lastNotBackspacedQuery=k;this.lastQuery=k;this.lastQueryTime=Date.now();};j.prototype.reportRequestID=function(k){'use strict';this.lastRequestID=k;this.requestIDHistory.push(k);};j.prototype.reportQueryComplete=function(k,l){'use strict';this.counter.recordAvgStat('avg_query_latency',k);if(l!==undefined)this.counter.recordStat('filtered_count',l);};j.prototype.reportResults=function(k,l){'use strict';this.results=k;if(l===this.lastQuery)this.counter.recordStat('last_query_latency',Date.now()-this.lastQueryTime);};j.prototype.reportResultsAds=function(k){'use strict';this.resultsAds=k;};j.prototype.$TypeaheadMetricReporter1=function(){'use strict';this.sid=Math.floor(Date.now()*Math.random());this.lastNotBackspacedQuery='';this.queriesHistory.reset();this.results=null;this.resultsAds=null;this.lastRequestID=null;this.requestIDHistory=[];this.counter.reset();this.emit&&this.emit('reset',{sid:this.sid});};j.prototype.$TypeaheadMetricReporter3=function(){'use strict';var k={};for(var l in this.extraData){var m=this.extraData[l];k[l]=typeof m==='function'?m():m;}return k;};j.prototype.$TypeaheadMetricReporter2=function(){'use strict';if(this.counter.hasStats()){this.counter.recordStat('session_time',Date.now()-this.sessionStartTime);if(this.results)this.counter.recordStat('candidate_results',JSON.stringify(this.results));if(this.resultsAds)this.counter.recordStat('candidate_results_ads',JSON.stringify(this.resultsAds));if(this.sid)this.counter.recordStat('sid',this.sid);if(this.lastNotBackspacedQuery)this.counter.recordStat('last_not_backspaced_query',this.lastNotBackspacedQuery);this.counter.recordStat('queries_history',JSON.stringify(this.queriesHistory.getQueries()));if(this.bootstrapped)this.counter.recordStat('bootstrapped',1);if(this.lastRequestID)this.counter.recordStat('request_id',this.lastRequestID);if(this.requestIDHistory.length)this.counter.recordStat('request_ids',this.requestIDHistory);var k=babelHelpers['extends']({},this.counter.getStats(),this.$TypeaheadMetricReporter3());new (c('AsyncRequest'))().setURI(h).setMethod('POST').setData({stats:k}).send();this.emit&&this.emit('submitted',k);}};c('mixInEventEmitter')(j,{reset:true,submitted:true});f.exports=j;}),null);
__d('update',['invariant'],(function a(b,c,d,e,f,g,h){'use strict';var i={}.hasOwnProperty;function j(u){if(Array.isArray(u)){return u.concat();}else if(u&&typeof u==='object'){return Object.assign(new u.constructor(),u);}else return u;}var k='$push',l='$unshift',m='$splice',n='$set',o='$merge',p='$apply',q=[k,l,m,n,o,p],r={};q.forEach(function(u){r[u]=true;});function s(u,v,w){Array.isArray(u)||h(0);var x=v[w];Array.isArray(x)||h(0);}function t(u,v){typeof v==='object'||h(0);if(i.call(v,n)){Object.keys(v).length===1||h(0);return v[n];}var w=j(u);if(i.call(v,o)){var x=v[o];x&&typeof x==='object'||h(0);w&&typeof w==='object'||h(0);Object.assign(w,v[o]);}if(i.call(v,k)){s(u,v,k);v[k].forEach(function(z){w.push(z);});}if(i.call(v,l)){s(u,v,l);v[l].forEach(function(z){w.unshift(z);});}if(i.call(v,m)){Array.isArray(u)||h(0);Array.isArray(v[m])||h(0);v[m].forEach(function(z){Array.isArray(z)||h(0);w.splice.apply(w,z);});}if(i.call(v,p)){typeof v[p]==='function'||h(0);w=v[p](w);}for(var y in v)if(!(r.hasOwnProperty(y)&&r[y]))w[y]=t(u[y],v[y]);return w;}f.exports=t;}),null);
__d('XUITypeahead.react',['cx','AbstractTypeahead.react','Image.react','React','SearchableEntry','XUICloseButton.react','XUIError.react','XUITypeaheadTextOnlyView.react','XUITypeaheadView.react','joinClasses','update'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes,l={ViewRenderer:c('XUITypeaheadView.react'),useLayer:true},m={ViewRenderer:c('XUITypeaheadView.react'),useLayer:false},n={ViewRenderer:c('XUITypeaheadTextOnlyView.react'),useLayer:true};i=babelHelpers.inherits(o,c('React').Component);j=i&&i.prototype;function o(){var p,q;'use strict';for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=j.constructor).call.apply(p,[this].concat(s)),this.focusInput=function(){this.refs.typeahead&&this.refs.typeahead.focusInput();}.bind(this),this.blurInput=function(){this.refs.typeahead&&this.refs.typeahead.blurInput();}.bind(this),this.hideView=function(){this.refs.typeahead.hideView();}.bind(this),this.getTextFieldDOM=function(){return this.refs.typeahead.getTextFieldDOM();}.bind(this),this.$XUITypeahead1=function(){this.props.onClear();setTimeout(function(){return this.focusInput();}.bind(this),0);}.bind(this),q;}o.prototype.componentWillMount=function(){'use strict';};o.prototype.render=function(){'use strict';var p="_55r1"+(!!this.props.tallInput?' '+"_55r2":''),q=null;if(this.props.presenter){q=this.props.presenter;}else if(this.props.viewStyle=='rich'){q=l;}else if(this.props.viewStyle=='richNoLayer'){q=m;}else q=n;if(!this.props.presenter&&this.props.maxEntries)q=c('update')(q,{maxEntries:{$set:this.props.maxEntries}});var r=this.props.showPhoto&&this.props.selectedEntry?c('React').createElement(c('Image.react'),{className:"_wrl",src:this.props.selectedEntry.getPhoto()}):null,s=this.props.clearable?c('React').createElement(c('XUICloseButton.react'),{className:"_wrm"+(this.props.disabled||!this.props.queryString?' '+"hidden_elem":''),size:this.props.tallInput?'medium':'small',type:'button',onClick:this.$XUITypeahead1}):null,t=this.props,u=t.className,v=babelHelpers.objectWithoutProperties(t,['className']);return (c('React').createElement(c('XUIError.react'),this.props,c('React').createElement('span',{className:c('joinClasses')("_wrn"+(!!this.props.tallInput?' '+"_213j":'')+(!!s?' '+"_4ehf":'')+(!!r?' '+"_4ehg":'')+(!!this.props.queryString?' '+"_4in7":'')+(this.props.highlightOnSelect&&this.props.selectedEntry?' '+"_wrr":''),u)},r,c('React').createElement(c('AbstractTypeahead.react'),babelHelpers['extends']({},v,{inputClassName:p,ref:'typeahead',presenter:q,textInputDataTestID:this.props.textInputDataTestID})),s)));};o.propTypes=babelHelpers['extends']({maxEntries:k.number,onChange:k.func.isRequired,onSelectAttempt:k.func.isRequired,onEnterWithoutSelection:k.func,onEntriesFound:k.func,onNoEntriesFound:k.func,selectedEntry:k.instanceOf(c('SearchableEntry')),tallInput:k.bool,viewStyle:k.oneOf(['textonly','rich','richNoLayer']),clearable:k.bool,onClear:k.func,showPhoto:k.bool,textInputDataTestID:k.string,highlightOnSelect:k.bool,presenter:k.object,inputID:k.string},c('XUIError.react').propTypes);o.defaultProps={viewStyle:'rich'};f.exports=o;}),null);
__d('ProfileMaskedTypeahead.react',['cx','AbstractSearchSource','React','SearchSourceWithMetrics','TypeaheadMetricReporter','XUITypeahead.react','joinClasses','requiredIfPropIsTruthy'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(m){'use strict';j.constructor.call(this,m);this.focusInput=function(){this.refs.typeahead.focusInput();}.bind(this);this.getTextFieldDOM=function(){return this.refs.typeahead.getTextFieldDOM();}.bind(this);this.$ProfileMaskedTypeahead1=function(){if(this.props.useMetrics)this.state.metricReporter.sessionEnd();if(this.props.requireSelection&&!this.props.selectedEntry&&this.props.onClear)this.props.onClear();if(this.props.onBlur)this.props.onBlur();}.bind(this);this.$ProfileMaskedTypeahead2=function(){if(this.props.useMetrics)this.state.metricReporter.sessionStart();if(this.props.onFocus)this.props.onFocus();}.bind(this);this.$ProfileMaskedTypeahead3=function(p,event){if(this.props.useMetrics&&p){this.state.metricReporter.reportSelect(p.getUniqueID(),p.getType(),p.getOrder(),!!event&&event.button>=0,this.props.queryString);this.state.metricReporter.sessionEnd();}if(this.props.onSelectAttempt)this.props.onSelectAttempt(p);}.bind(this);this.$ProfileMaskedTypeahead4=function(p,q){if(this.props.useMetrics){var r=q.filter(function(s){return !isNaN(parseInt(s.getUniqueID(),10));});this.state.metricReporter.reportResults(r.map(function(s){return s.getUniqueID();}));}}.bind(this);var n=null,o=m.searchSource;if(m.useMetrics){n=new (c('TypeaheadMetricReporter'))(m.metricsData);o=new (c('SearchSourceWithMetrics'))(o,n);}this.state={metricReporter:n,searchSource:o,useMask:false};}l.prototype.componentDidUpdate=function(){'use strict';var m=this.refs.typeahead.getTextFieldDOM(),n=m.scrollWidth>m.clientWidth;if(this.state.useMask!==n)this.setState({useMask:n});};l.prototype.render=function(){'use strict';var m=this.props.selectedEntry,n=m?m.getTitle():this.props.queryString,o=null;if(this.state.useMask)o=c('React').createElement('div',{className:"_4ejq"});var p=null,q=null;if(m)p=c('React').createElement('input',{name:this.props.selectionName,type:'hidden',value:m.getUniqueID()});if(n)q=c('React').createElement('input',{name:this.props.queryName,type:'hidden',value:n});var r=c('joinClasses')(this.props.className,"_4ejr"+(this.props.clearable?' '+"_4ejs":'')+(this.props.highlightOnSelect?' '+"_4ejt":'')+(!!m?' '+"_4eju":'')+(this.props.tallInput?' '+"_4ejv":''));return c('React').createElement('div',{className:r},c('React').createElement(c('XUITypeahead.react'),babelHelpers['extends']({},this.props,{className:"_4ejw",onBlur:this.$ProfileMaskedTypeahead1,onFocus:this.$ProfileMaskedTypeahead2,onSelectAttempt:this.$ProfileMaskedTypeahead3,onTypeaheadVisibilityChanged:this.$ProfileMaskedTypeahead4,queryString:n,ref:'typeahead',searchSource:this.state.searchSource})),o,q,p);};l.propTypes={metricsData:c('requiredIfPropIsTruthy')('useMetrics',k.object),queryName:k.string,requireSelection:k.bool,searchSource:k.instanceOf(c('AbstractSearchSource')).isRequired,selectionName:k.string,useMetrics:k.bool};l.defaultProps={clearable:true,highlightOnSelect:true,queryName:'query',requireSelection:false,selectionName:'selected_id'};f.exports=l;}),null);
__d('ProfileTypeaheadWrapperMixin',['React','SearchableEntry'],(function a(b,c,d,e,f,g){var h=c('React').PropTypes,i={propTypes:{initialEntry:h.instanceOf(c('SearchableEntry')),initialQuery:h.string},getDefaultProps:function j(){return {initialEntry:null,initialQuery:''};},getInitialState:function j(){return {queryString:this.props.initialQuery,selectedEntry:this.props.initialEntry};},clearSelection:function j(){this.setState({queryString:'',selectedEntry:null},this.props.onClear);},focusInput:function j(){this.refs.typeahead.focusInput();},getQueryString:function j(){return this.state.queryString;},getSelectedEntry:function j(){return this.state.selectedEntry;},_changeHandler:function j(event){this.setState({queryString:event.target.value,selectedEntry:null},function(){if(this.props.onChange)this.props.onChange(event);}.bind(this));},_selectHandler:function j(k,event){this.setState({selectedEntry:k},function(){if(this.props.onSelectAttempt)this.props.onSelectAttempt(k,event);}.bind(this));}};f.exports=i;}),null);
__d('ProfileMaskedTypeaheadWrapper.react',['ProfileTypeaheadWrapperMixin','React','ProfileMaskedTypeahead.react'],(function a(b,c,d,e,f,g){var h=c('React').createClass({displayName:'ProfileMaskedTypeaheadWrapper',mixins:[c('ProfileTypeaheadWrapperMixin')],propTypes:{},render:function i(){return (c('React').createElement(c('ProfileMaskedTypeahead.react'),babelHelpers['extends']({},this.props,{onChange:this._changeHandler,onClear:this.clearSelection,onSelectAttempt:this._selectHandler,queryString:this.state.queryString,ref:'typeahead',selectedEntry:this.state.selectedEntry})));}});f.exports=h;}),null);
__d('ProfileTypeaheadContainer.react',['cx','React'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return (c('React').createElement('div',{className:"_1ceo"},this.props.children));};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('FBTypeaheadChecklist.react',['React','FBChecklistWrapper.react','ProfileMaskedTypeaheadWrapper.react','ProfileTypeaheadContainer.react','XUITypeahead.react'],(function a(b,c,d,e,f,g){var h,i,j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;function k(){var l,m;'use strict';for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.state={queryString:''},this.clearSelection=function(){return this.refs.checklist.clearSelection();}.bind(this),this.getSelection=function(){return this.refs.checklist.getSelection();}.bind(this),this.$FBTypeaheadChecklist4=function(q){this.props.multiSelect||this.refs.typeahead.clearSelection();this.props.onChange&&this.props.onChange(q);}.bind(this),this.$FBTypeaheadChecklist1=function(q){if(!q)return;if(!this.props.multiSelect){this.refs.checklist.clearSelection();return;}this.refs.checklist.addOption(q.getUniqueID(),q.getTitle(),q.getSubtitle(),q.getPhoto(),true,this.props.typeaheadName);this.setState({queryString:''});setTimeout(function(){this.refs.checklist.scrollToOption(q.getUniqueID());}.bind(this),0);}.bind(this),this.$FBTypeaheadChecklist2=function(){this.props.requireSelection&&this.setState({queryString:''});}.bind(this),this.$FBTypeaheadChecklist3=function(event){this.setState({queryString:event.target.value});}.bind(this),m;}k.prototype.render=function(){'use strict';var l={onSelectAttempt:this.$FBTypeaheadChecklist1,placeholder:this.props.placeholder,searchSource:this.props.searchSource},m=null;if(this.props.multiSelect){m=c('React').createElement(c('XUITypeahead.react'),babelHelpers['extends']({},l,{excludedEntries:this.props.excludedEntries,onBlur:this.$FBTypeaheadChecklist2,onChange:this.$FBTypeaheadChecklist3,queryString:this.state.queryString,ref:'typeahead'}));}else m=c('React').createElement(c('ProfileMaskedTypeaheadWrapper.react'),babelHelpers['extends']({},l,{queryName:this.props.queryName,ref:'typeahead',requireSelection:this.props.requireSelection,selectionName:this.props.typeaheadName}));return c('React').createElement('div',{className:this.props.className},c('React').createElement(c('FBChecklistWrapper.react'),babelHelpers['extends']({},this.props,{onChange:this.$FBTypeaheadChecklist4,ref:'checklist'})),c('React').createElement(c('ProfileTypeaheadContainer.react'),null,m));};k.propTypes={excludedEntries:j.object,onChange:j.func,placeholder:j.string.isRequired,requireSelection:j.bool,searchSource:j.object.isRequired,typeaheadName:j.string,queryName:function l(m,n,o){if(!m.multiSelect&&!m[n])return new Error('Must supply a query name to '+o+' for '+'single-selection mode.');}};k.defaultProps={overflow:'scroll'};f.exports=k;}),null);
__d('ProfileQuestionsTypeaheadChecklist.react',['Arbiter','FBTypeaheadChecklist.react','React'],(function a(b,c,d,e,f,g){var h,i,j='402159529891743';h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;function k(){var l,m;'use strict';for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.$ProfileQuestionsTypeaheadChecklist1=function(q){var r=q[j];c('Arbiter').inform('no-valid-answer-select',{selected:r&&r.checked},c('Arbiter').BEHAVIOR_PERSISTENT);},m;}k.prototype.render=function(){'use strict';return c('React').createElement(c('FBTypeaheadChecklist.react'),babelHelpers['extends']({},this.props,{onChange:this.$ProfileQuestionsTypeaheadChecklist1}));};f.exports=k;}),null);