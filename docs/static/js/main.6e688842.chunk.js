(window.webpackJsonp=window.webpackJsonp||[]).push([[4],[,,,,,,,,,,,,,,,function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAMFBMVEUAAAAQEBAYSkoxc3M5lJRSYili1bRzrDGD7sWk1UGsADG9/3PNzc3uIDn/amL///87EAzGAAAAAXRSTlMAQObYZgAAAZ1JREFUWMPtlL9Lw0AUx9NUce1JwMGlLUfbrdAGcVAkl0fI5iSloxiOrg4hiJuWcP+AlPwLASm4lWzB0dG9/0HAunbwpbjfq6PcZ/5+8n5weZZlMBgMhv/F4b75KaOHj5L4ZppMWuT8Y1Gssge6gPmiSLKYINjtukBRvJ0kK5IQPrXHyGhwWxTZyz1BUGOlUjlQOyHRlwhDpSCUKq2FBWFqX6k5hKmU0Wkt6Hs6xwKgdsIqW8Q0IVQpoJBlSawdojmYKRz6+aMHXrYgCPZnqubh7HJZgtdPiALUwmYnTLTCxTpUoObrfAtCUISrZYAzRMtqCz7040S7pbM8kLjSvHoHANHXCx35C/Da0D8NfiyDO8yPGLjQhY7+dV/nUt512DdgiS4X+tfK/bzGBYEdcWhrhYbjv1aVC54D2BRBQAOnBeaAK7CKR/hHPYagwz0cgiAcyAg3KiQIhyZYrsQoD6I9BPAYh1oQQDlMgYw8K0Ch4bouRWhGtSCjll2WJeXqDYe8ZfUC7IYx0qlsMGbZm83Xfqee+HGDwWAwGP7KD5Vqm0oTWykbAAAAAElFTkSuQmCC"},,,,,,,function(e,t,a){e.exports=a(68)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){var n={"./async":[18,0],"./async.js":[18,0],"./microTasks":[19,1],"./microTasks.js":[19,1],"./setTimeoutDead":[20,2],"./setTimeoutDead.js":[20,2],"./simple":[21,3],"./simple.js":[21,3]};function r(e){var t=n[e];return t?a.e(t[1]).then(function(){var e=t[0];return a(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}r.keys=function(){return Object.keys(n)},r.id=41,e.exports=r},function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),s=a(70),o=(a(27),a(29),a(2)),u=a(3),i=a(5),m=a(4),p=a(6),h=a(72),d=a(71),f=a(69),E=(a(31),function(e){var t=e.items;return r.a.createElement("div",{className:"navbar clearfix"},t.map(function(e){var t=e.name,a=e.to;return r.a.createElement("div",{className:"navbar-item float-left",key:t},r.a.createElement(f.a,{to:a},t))}))}),v=function(e){var t=e.children;return r.a.createElement("div",{className:"row"},t)},b=function(e){var t=e.children,a=e.size;return r.a.createElement("div",{className:a?"column column-".concat(a):"column"},t)},k=function(e){var t=e.children,a=e.centered,n=void 0!==a&&a;return r.a.createElement("h3",{className:n?"center":""},t)},y=(a(35),function(e){var t=e.funcs,a=e.name,c=e.color,l=e.noBottom;return r.a.createElement(n.Fragment,null,r.a.createElement(k,{centered:!0},a," "),r.a.createElement("div",{className:"stack".concat(l?"-no-bottom":"")},t.map(function(e,t){return r.a.createElement("h3",{className:"stack-item center",key:"".concat(e,"-").concat(t),style:{backgroundColor:c}},e)})))}),w=(a(37),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleKeypress=function(e){var t=a.props,n=t.k,r=t.onPress;return e.key===n&&r()},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keypress",this.handleKeypress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keypress",this.handleKeypress)}},{key:"render",value:function(){var e=this.props.k,t=" "===e?"space":e;return r.a.createElement("div",{className:"keyboard"},"Keyboard feature is activated on this page. Press"," ",r.a.createElement("span",{className:"key ".concat(t)},t))}}]),t}(n.Component)),A=(a(39),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleSpacePress=function(e){var t=a.state,n=t.steps,r=t.currentStep;if(n){var c=r+1;if(n[c])return a.setState({currentStep:c}),a.props.onLineChange(n[c]);a.setState({currentStep:0})}},a.state={snippet:null,steps:{},currentStep:0,caption:null},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(){window.Prism.highlightAll()}},{key:"componentDidMount",value:function(){var e=this;a(41)("./".concat(this.props.snippet)).then(function(t){var a=t.snippet,n=t.steps,r=t.caption;return e.setState({snippet:a,steps:n,caption:r})})}},{key:"render",value:function(){var e=this.state,t=e.snippet,a=e.currentStep,c=e.steps,l=e.caption;return r.a.createElement(n.Fragment,null,r.a.createElement(k,null,"Code"),r.a.createElement("pre",{className:"line-numbers","data-line":a?c[a].line:0},r.a.createElement("code",{className:"language-javascript"},t)),l&&r.a.createElement("p",{className:"italic"},l),r.a.createElement(w,{k:" ",onPress:this.handleSpacePress}))}}]),t}(n.Component)),j=(a(42),function(e){var t=e.children,a=e.custom;return r.a.createElement("div",{className:"container".concat(a?"-custom":"")},t)}),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleChangeLine=function(e){if(null===e)return a.setState({funcs:[]});var t=a.state.funcs;return e.action&&t.pop(),e.funcName&&t.push(e.funcName),a.setState({funcs:t})},a.state={funcs:[]},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(j,null,r.a.createElement(v,null,r.a.createElement(b,null,r.a.createElement(A,{snippet:"simple",onLineChange:this.handleChangeLine})),r.a.createElement(b,null,r.a.createElement(y,{funcs:this.state.funcs,name:"Call stack",color:"#9b4dca"}))))}}]),t}(n.Component),O=(a(44),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.intervalId=setInterval(function(){var t=e.props.onHandle;return t&&t()},4e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){var e=this.props.little;return r.a.createElement("div",{className:"donut".concat(e?"-little":"")},r.a.createElement("div",{className:"donut-item".concat(e?"-little":"")}),r.a.createElement("div",{className:"donut-content"},this.props.children))}}]),t}(n.Component)),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleChangeLine=function(e){if(null===e)return a.setState({callstack:[],taskQueue:[],webApis:[],isLoopVisible:!1});var t=a.state,n=t.callstack,r=t.taskQueue,c=t.webApis,l=t.isLoopVisible;return"show-loop"===e.action?l=!0:"remove-apis"===e.action?c.shift():"add-apis"===e.action?c.push(e.funcName):"enqueue"===e.action?r.push(e.funcName):"dequeue"===e.action?(r.shift(),n.push(e.funcName)):("pop"===e.action&&n.pop(),e.funcName&&n.push(e.funcName)),a.setState({callstack:n,taskQueue:r,webApis:c,isLoopVisible:l})},a.state={callstack:[],taskQueue:[],webApis:[]},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.taskQueue,a=e.callstack,n=e.webApis,c=e.isLoopVisible;return r.a.createElement(j,null,r.a.createElement(v,null,r.a.createElement(b,{size:50},r.a.createElement(A,{snippet:"async",onLineChange:this.handleChangeLine})),r.a.createElement(b,null,r.a.createElement(y,{funcs:a,name:"Call stack",color:"#9b4dca"})),r.a.createElement(b,null,c&&r.a.createElement("div",{className:"task-queue-loop"},r.a.createElement(O,{little:!0},"Event loop")),r.a.createElement(y,{funcs:t,name:"Task queue",color:"#222222",noBottom:!0})),r.a.createElement(b,null,r.a.createElement(y,{funcs:n,name:"Web APIs",color:"#222222",noBottom:!0}))))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleChangeLine=function(e){if(null===e)return a.setState({callstack:[],taskQueue:[],webApis:[],microQueue:[]});var t=a.state,n=t.callstack,r=t.taskQueue,c=t.webApis,l=t.microQueue;return"remove-apis"===e.action?c.shift():"add-apis"===e.action?c.push(e.funcName):"enqueue"===e.action?r.push(e.funcName):"dequeue"===e.action?(r.shift(),n.push(e.funcName)):"enqueue-micro"===e.action?l.push(e.funcName):"dequeue-micro"===e.action?(l.shift(),n.push(e.funcName)):("pop"===e.action&&n.pop(),e.funcName&&n.push(e.funcName)),a.setState({callstack:n,taskQueue:r,webApis:c})},a.state={callstack:[],taskQueue:[],webApis:[],microQueue:[]},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.taskQueue,a=e.callstack,n=e.webApis,c=e.microQueue;return r.a.createElement(j,{custom:!0},r.a.createElement(v,null,r.a.createElement(b,null,r.a.createElement(A,{snippet:"microTasks",onLineChange:this.handleChangeLine})),r.a.createElement(b,null,r.a.createElement(y,{funcs:a,name:"Call stack",color:"#9b4dca"})),r.a.createElement(b,null,r.a.createElement(y,{funcs:c,name:"Micro tasks",color:"#222222",noBottom:!0})),r.a.createElement(b,null,r.a.createElement(y,{funcs:t,name:"Task queue",color:"#222222",noBottom:!0})),r.a.createElement(b,null,r.a.createElement(y,{funcs:n,name:"Web APIs",color:"#222222",noBottom:!0}))))}}]),t}(n.Component),S=(a(46),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(){window.Prism.highlightAll()}},{key:"render",value:function(){return r.a.createElement("div",{className:"queue"},this.props.items.map(function(e){return r.a.createElement("div",{className:"queue-item",key:e.funcName},r.a.createElement("pre",{"data-line":"2",className:"line-numbers"},r.a.createElement("code",{className:"language-javascript"},e.funcName)))}))}}]),t}(n.Component)),q=(a(48),function(e){var t=e.children;return r.a.createElement("div",{className:"browser"},r.a.createElement("div",{className:"browser-row"},r.a.createElement("div",{className:"browser-column"},r.a.createElement("span",{className:"browser-dot",style:{background:"#ED594A"}}),r.a.createElement("span",{className:"browser-dot",style:{background:"#FDD800"}}),r.a.createElement("span",{className:"browser-dot",style:{background:"#5AC05A"}})),r.a.createElement("div",{className:"browser-column browser-middle"},r.a.createElement("input",{type:"text",value:"https://mfrachet.github.io/event-loop",readOnly:!0,className:"browser-input"})),r.a.createElement("div",{className:"browser-column"},r.a.createElement("span",{className:"browser-bar"}),r.a.createElement("span",{className:"browser-bar"}),r.a.createElement("span",{className:"browser-bar"}))),r.a.createElement("div",{className:"browser-content"},t))}),D=(a(50),function(e){var t=e.width,a=void 0===t?"100%":t,n=e.hasAppeared,c=void 0!==n&&n;return r.a.createElement("div",{className:"line ".concat(c&&"line-appeared"),style:{width:a}})}),L=(a(52),function(){return r.a.createElement("div",{className:"arrow-wrapper"},r.a.createElement("div",{className:"arrow"}))}),I=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleSpacePress=function(){var e=a.state.queue;t.count++,e.push({funcName:"requestAnimationFrame(() => {\n  newLine.style.display = 'block';\n});",value:t.count}),a.setState({queue:e})},a.dequeue=function(){var e=a.state,t=e.queue,n=e.browserItems;if(t.length){var r=t.shift();a.setState({queue:t}),n.push(r),setTimeout(function(){return a.setState({browserItems:n})},1e3)}},a.state={queue:[],browserItems:[]},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.queue,a=e.browserItems;return r.a.createElement(j,{custom:!0},r.a.createElement(v,null,r.a.createElement(b,null,r.a.createElement(k,{centered:!0},"Browser"),r.a.createElement(q,null,r.a.createElement("button",{onClick:this.handleSpacePress},"Raf call"),r.a.createElement(D,{width:"50%"}),r.a.createElement(D,{width:"70%"}),r.a.createElement(D,{width:"20%"}),r.a.createElement("br",null),r.a.createElement(D,null),r.a.createElement(D,null),r.a.createElement(D,null),r.a.createElement("br",null),a.map(function(e,t){return r.a.createElement(D,{key:"".concat(e.funcName,"-").concat(t),hasAppeared:!0})}))),r.a.createElement(b,null,r.a.createElement("div",{className:"center"},r.a.createElement(O,{onHandle:this.dequeue},r.a.createElement(k,null,"Event loop")),r.a.createElement("div",{style:{marginTop:"-30px"}},r.a.createElement(L,null),r.a.createElement("h3",{className:"m-t"},"Rendering appears here")))),r.a.createElement(b,null,r.a.createElement(k,{centered:!0},"Render Queue"),r.a.createElement(S,{items:t}))))}}]),t}(n.Component);I.count=0;var Q=function(e){var t=e.delay,a=e.children;return r.a.createElement("div",{style:{animationDuration:"".concat(t,"ms")},className:"animate-move"},a)},B=(a(54),function(e){var t=e.children,a=e.color;return r.a.createElement("div",{className:"marble",style:{backgroundColor:a}},t)}),P=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.onFinish,a=e.name;setTimeout(function(){return t&&t(a)},this.props.delay-1)}},{key:"render",value:function(){var e=this.props,t=e.color,a=e.delay,n=e.name;return r.a.createElement("div",{className:"thread-marble"},r.a.createElement(Q,{delay:a},r.a.createElement(B,{color:t},n)))}}]),t}(n.Component),T=(a(56),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.calls,c=t.delay,l=t.name,s=t.color;return r.a.createElement(n.Fragment,null,r.a.createElement(k,{centered:!0},l),r.a.createElement("div",{className:"thread-wrapper"},r.a.createElement("div",{className:"thread"},a.map(function(t){return r.a.createElement(P,{key:t.id,color:s,delay:c,name:t.name,onFinish:e.props.dequeue})}))))}}]),t}(n.Component)),U=(a(58),a(15)),M=a.n(U),W=function(){return r.a.createElement("div",{className:"poke-detail"},r.a.createElement(v,null,r.a.createElement(b,{size:20},r.a.createElement("img",{src:M.a,alt:"Bulbasaur"})),r.a.createElement(b,null,r.a.createElement("p",null,"Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger."))))},F=a(16),x=a.n(F),G=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={time:null},a.intervalRef=null,a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"now",value:function(){return x()().format("LTS")}},{key:"componentDidMount",value:function(){var e=this;this.setState({time:this.now()}),this.intervalRef=setInterval(function(){var t=e.now();e.setState({time:t}),e.props.onChange(t)},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalRef)}},{key:"render",value:function(){var e=this.state.time;return r.a.createElement("strong",null,e)}}]),t}(n.Component),K=(a(61),function(e){var t=e.children;return r.a.createElement("div",{className:"box"},r.a.createElement("span",null,t))}),R=(a(63),function(e){var t=e.children;return r.a.createElement("div",{className:"pane"},t)}),Y="onClick",z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleTimeChange=function(e){return a.setState({timeCalls:[{name:e,id:e}]})},a.handleEvent=function(e){return function(){var n=a.state.buttonCalls;t.eventId++,n.push({name:e,id:t.eventId}),a.setState({buttonCalls:n})}},a.handleEventDequeue=function(e){var n=a.state,r=n.buttonCalls,c=n.networkCalls;r.pop(),e===Y&&(t.eventId++,c.push({name:"Fetch",id:t.eventId})),a.setState({buttonCalls:r,networkCalls:c})},a.handleNetworkDequeue=function(){var e=a.state.networkCalls;e.pop(),a.setState({networkCalls:e,hasLoaded:!0})},a.state={timeCalls:[],buttonCalls:[],networkCalls:[],hasLoaded:!1},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.buttonCalls,a=e.timeCalls,n=e.networkCalls,c=e.hasLoaded;return r.a.createElement(j,{custom:!0},r.a.createElement(v,null,r.a.createElement(b,{size:40},r.a.createElement(R,null,r.a.createElement(k,{centered:!0},"Web APIs"),r.a.createElement(v,null,r.a.createElement(b,null,r.a.createElement(T,{name:"Timer",calls:a,delay:1e3})),r.a.createElement(b,null,r.a.createElement(T,{name:"Network",calls:n,delay:3e3,dequeue:this.handleNetworkDequeue,color:"#9b4dca"})),r.a.createElement(b,null,r.a.createElement(T,{name:"Event",calls:t,delay:300,dequeue:this.handleEventDequeue,color:"#4CAF50"}))))),r.a.createElement(b,null,r.a.createElement(q,null,r.a.createElement("span",{className:"float-right"},r.a.createElement(G,{onChange:this.handleTimeChange})),r.a.createElement("h3",null,"An asynchronous world"),r.a.createElement("input",{type:"text",placeholder:"Fill something right there",onChange:this.handleEvent("keyPress")}),r.a.createElement("button",{onClick:this.handleEvent(Y)},"Show me Bulbasaur!"),c&&r.a.createElement(W,null)))),r.a.createElement("div",{className:"m-t"},r.a.createElement(v,null,r.a.createElement(b,{size:40},r.a.createElement(k,{centered:!0},"Enqueue tasks"),r.a.createElement(K,null,"Different task queues")),r.a.createElement(b,null,r.a.createElement(k,{centered:!0},"Handle transitions"),r.a.createElement(O,{little:!0},"Event loop")),r.a.createElement(b,{size:40},r.a.createElement(k,{centered:!0},"Execute code in the main thread"),r.a.createElement(K,null,"Call stack")))))}}]),t}(n.Component);z.eventId=0;a(65);var H=function(e){var t=e.children;return r.a.createElement("h1",{className:"main-title primary"},t)},Z=[{name:"Home",to:"/",Component:function(){return r.a.createElement("div",{className:"center"},r.a.createElement(H,null,r.a.createElement(O,null,"The event loop")))}},{name:"Callstack",to:"/callstack",Component:N},{name:"Task queue",to:"/task-queue",Component:C},{name:"Micro tasks",to:"/micro-tasks",Component:g},{name:"requestAnimationFrame",to:"/ref",Component:I},{name:"Async world",to:"/async-world",Component:z}],V=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(E,{items:Z}),r.a.createElement(h.a,null,Z.map(function(e){var t=e.name,a=e.to,n=e.Component;return r.a.createElement(d.a,{key:t,exact:!0,path:a,component:n})})))}}]),t}(n.Component);l.a.render(r.a.createElement(s.a,null,r.a.createElement(V,null)),document.getElementById("root"))}],[[22,6,5]]]);
//# sourceMappingURL=main.6e688842.chunk.js.map