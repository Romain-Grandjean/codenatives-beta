(this.webpackJsonpcodenatives=this.webpackJsonpcodenatives||[]).push([[0],{13:function(e){e.exports=JSON.parse('[{"id":0,"level":0,"question":"Thanks to hoisting:","solutionA":"Variables are set to undefined in the creation phase.","solutionB":"Variables are set to null in the execution phase phase.","solutionC":"Variables are set to their actual value in the in the creation phase.","solutionD":"Variables are not hoisted.","answer":1,"explanations":"This is an explanation"},{"id":1,"level":0,"question":"What is NOT true about anonymous functions?","solutionA":"They create a new scope.","solutionB":"Closures are not formed with anonymous functions.","solutionC":"They are usually not accessible after initial creation.","solutionD":"They are usually declared without any named identifier referring to them.","answer":2,"explanations":"This is an explanation"},{"id":2,"level":0,"question":"Function A declares variable X and function B. Can function B access variable X?","solutionA":"Yes, because of the scope chain","solutionB":"No, because of the prototype chain","solutionC":"Yes, because of closures.","solutionD":"No, because functions are not suppose to access outer variables.","answer":1,"explanations":"This is an explanation"},{"id":3,"level":0,"question":"In JavaScript, scopes are created by:","solutionA":"If/Else statements.","solutionB":"For loops and functions","solutionC":"Functions.","solutionD":"If/else statements and functions.","answer":3,"explanations":"This is an explanation"}]')},21:function(e,a,t){e.exports=t(32)},26:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(19),o=t.n(i),l=t(11),c=(t(26),t(6)),r=t(7),m=t(9),u=t(8),d=t(13),p=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"header"},s.a.createElement("img",{id:"logo-header",src:"/code-natives/img/logo_header.svg",alt:"logo"}),s.a.createElement("div",{className:"navigation"},s.a.createElement("div",{className:"nav1"},s.a.createElement("span",{className:"nav1-elements"},"Concept"),s.a.createElement("span",{className:"nav1-elements"},"Contribute"),s.a.createElement("span",{className:"nav1-elements"},"For Schools & Recruiters"),s.a.createElement("div",{className:"line-nav"})),s.a.createElement("div",{className:"nav2"},s.a.createElement("span",{className:"nav2-elements"},"Login"),s.a.createElement("div",{className:"button-signup"},"Sign Up"))),s.a.createElement("div",{className:"line-header"}))}}]),t}(s.a.Component),g=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"home-page"},s.a.createElement("img",{id:"arrow-left-home",src:"/code-natives/img/arrow-left-home.png",alt:""}),s.a.createElement("img",{id:"central-window",src:"/code-natives/img/central-window.png",alt:""}),s.a.createElement("div",{id:"central-catchphrase"},s.a.createElement("h1",null,"How well do you 'speak' code?"),s.a.createElement("h2",null,"30 questions, 300 seconds to find out !!"),s.a.createElement("div",{className:"central-language-selection"},s.a.createElement("span",{className:"language-selector"},"Choose your language"),s.a.createElement("div",{className:"btn-language"},s.a.createElement("img",{id:"arrow-left-home",src:"/code-natives/img/arrow-btn-selector.svg",alt:""}),s.a.createElement("span",null,"Javascript"))),s.a.createElement("div",{className:"central-buttons"},s.a.createElement(l.b,{to:"/practice",className:"button-practice"},s.a.createElement("div",null,"Practice")),s.a.createElement("div",{className:"button-test"},"Start test"))),s.a.createElement("img",{id:"arrow-right-home",src:"/code-natives/img/arrow-right-home.png",alt:""}),s.a.createElement("div",{className:"dots-selectors"},s.a.createElement("div",{id:"dot1"}),s.a.createElement("div",{id:"dot2"}),s.a.createElement("div",{id:"dot3"})))}}]),t}(s.a.Component),v=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=a.call.apply(a,[this].concat(s))).state={page:1,data:d},e}return Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"practice-page"},s.a.createElement("div",{className:"question-practice"},this.state.data[this.state.page].question),s.a.createElement("div",{className:"solutionA-practice"},s.a.createElement("img",{src:"/code-natives/img/icon-solutionA.svg",alt:"logo"}),s.a.createElement("span",null,this.state.data[this.state.page].solutionA)),s.a.createElement("div",{className:"solutionB-practice"},s.a.createElement("img",{src:"/code-natives/img/icon-solutionB.svg",alt:"logo"}),s.a.createElement("span",null,this.state.data[this.state.page].solutionB)),s.a.createElement("div",{className:"solutionC-practice"},s.a.createElement("img",{src:"/code-natives/img/icon-solutionC.svg",alt:"logo"}),s.a.createElement("span",null,this.state.data[this.state.page].solutionC)),s.a.createElement("div",{className:"solutionD-practice"},s.a.createElement("img",{src:"/code-natives/img/icon-solutionD.svg",alt:"logo"}),s.a.createElement("span",null,this.state.data[this.state.page].solutionD)),s.a.createElement("div",{className:"player-practice"},s.a.createElement("div",{className:"player-arrow"},s.a.createElement("img",{id:"arrow-left-page",src:"/code-natives/img/arrow-left-page.svg",alt:"arrow"}),s.a.createElement("span",{id:"practice-solution"},"Show solution"),s.a.createElement("img",{id:"arrow-right-page",src:"/code-natives/img/arrow-right-page.svg",alt:"arrow"})),s.a.createElement("div",{className:"stop-btn"},s.a.createElement("img",{id:"arrow-right-page",src:"/code-natives/img/icon-stop.svg",alt:"arrow"}),s.a.createElement("span",null,"Stop")))))}}]),t}(s.a.Component),h=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"footer"},s.a.createElement("div",{className:"line-footer"}),s.a.createElement("img",{id:"logo-footer",src:"/code-natives/img/logo_footer_white.png",alt:"logo"}),s.a.createElement("div",{className:"socialsNetwork-icons"},s.a.createElement("img",{id:"icon-facebook",src:"/code-natives/img/icon-facebook-white.png",alt:"logo"}),s.a.createElement("img",{id:"icon-linkedin",src:"/code-natives/img/icon-linkedin-white.png",alt:"logo"}),s.a.createElement("img",{id:"icon-twitter",src:"/code-natives/img/icon-twitter.png",alt:"logo"})))}}]),t}(s.a.Component),E=t(1),f=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={data:d},n}return Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(p,null),s.a.createElement(E.c,null,s.a.createElement(E.a,{path:"/",exact:!0,component:g}),s.a.createElement(E.a,{path:"/practice",exact:!0,component:v})),s.a.createElement(h,null))}}]),t}(s.a.Component);o.a.render(s.a.createElement(l.a,null,s.a.createElement(f,null)),document.getElementById("app"))}},[[21,1,2]]]);
//# sourceMappingURL=main.5b66fcd2.chunk.js.map