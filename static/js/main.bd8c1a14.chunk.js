(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{180:function(n,e,i){"use strict";i.r(e);var s=i(0),t=i.n(s),h=i(28),a=i.n(h),r=(i(81),i(16)),o=i(17),c=i(19),l=i(18),g=i(20),p=i(44),y=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["chapter1"],e=p,i=[];return n.forEach(function(n){return i=i.concat(e[n])}),u(i.slice())},u=function(n){for(var e,i,s=n.length;0!==s;)i=Math.floor(Math.random()*s),e=n[s-=1],n[s]=n[i],n[i]=e;return n},d=function(n){if(!n)return[];for(var e=[],i=m().filter(function(e){return e.chinese.length===n.chinese.length});e.length<4&&i.length>4;){var s=i[Math.floor(Math.random()*i.length)];s===n||e.includes(s)||s.pinyin===n.pinyin||e.push(s)}return e[Math.floor(4*Math.random())]=n,e},m=function(){var n=[];return Object.values(p).forEach(function(e){return e.forEach(function(e){return n.push(e)})}),n},f=(i(46),i(6)),w=i.n(f),b=function(n){function e(){return Object(r.a)(this,e),Object(c.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(g.a)(e,n),Object(o.a)(e,[{key:"render",value:function(){var n=this.props,e=n.optionPress,i=n.scrambledOptions;return t.a.createElement("div",{className:"optionsDiv"},t.a.createElement("div",{className:"optionButton"},t.a.createElement(k,{optionPress:function(){return e(i[0])},gameWord:i[0]?i[0].pinyin:"..."})),t.a.createElement("div",{className:"optionButton"},t.a.createElement(k,{optionPress:function(){return e(i[1])},gameWord:i[1]?i[1].pinyin:"..."})),t.a.createElement("div",{className:"optionButton"},t.a.createElement(k,{optionPress:function(){return e(i[2])},gameWord:i[2]?i[2].pinyin:"..."})),t.a.createElement("div",{className:"optionButton"},t.a.createElement(k,{optionPress:function(){return e(i[3])},gameWord:i[3]?i[3].pinyin:"..."})))}}]),e}(s.Component),v={textTransform:"none",fontSize:"1.5rem"},k=function(n){return t.a.createElement("span",{className:"optionButton"},t.a.createElement(w.a,{style:v,className:"optionButton",variant:"contained",size:"large",color:"primary",onClick:n.optionPress},n.gameWord))},j=b,W=function(n){return t.a.createElement("div",{className:"theWordDiv",onClick:function(){return n.setShowTranslation(!n.showTranslation)}},t.a.createElement("h1",{className:n.currentWord&&n.currentWord.chinese.length>3?"theWordSmall":"theWord"},n.currentWord&&n.currentWord.chinese),t.a.createElement("span",{className:"wrong-pinyin"},n.answeredWrong&&n.currentWord&&n.currentWord.pinyin),t.a.createElement("span",{className:"wrong-eng"},n.answeredWrong&&n.currentWord&&n.currentWord.english,n.showTranslation&&!n.answeredWrong&&!n.showTranslation&&n.currentWord.english),t.a.createElement("span",null,n.showTranslation&&!n.answeredWrong&&n.currentWord.english))},E=i(24),z=i(68),C=i.n(z),x=function(n){function e(){return Object(r.a)(this,e),Object(c.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(g.a)(e,n),Object(o.a)(e,[{key:"render",value:function(){var n=this.props,e=n.classes,i=n.progress;return t.a.createElement("div",{className:"quizPageWrapper"},t.a.createElement(W,{currentWord:this.props.getCurrentWord(),answeredWrong:this.props.answeredWrong,setShowTranslation:this.props.setShowTranslation,showTranslation:this.props.showTranslation}),t.a.createElement(j,{gameWords:this.props.gameWords,optionPress:this.props.optionPress,scrambledOptions:this.props.scrambledOptions}),t.a.createElement(C.a,{variant:"determinate",value:i,classes:{root:e.linearProgressDeterminate,bar:e.linearProgressDeterminateBar}}))}}]),e}(s.Component),O=Object(E.withStyles)(function(n){return{linearProgressDeterminate:{backgroundColor:"#8f9bee",width:"100%"},linearProgressDeterminateBar:{backgroundColor:"#3f51b5"}}})(x),N=i(75),q=i.n(N),B=i(21),T=i.n(B),S=i(29),P=i.n(S),A=i(69),I=i.n(A),M=i(70),D=i.n(M),G=i(71),U=i.n(G),Q=i(72),F=i.n(Q),L=i(73),_=i.n(L),J=i(74),K=i.n(J),V=function(n){function e(){var n,i;Object(r.a)(this,e);for(var s=arguments.length,h=new Array(s),a=0;a<s;a++)h[a]=arguments[a];return(i=Object(c.a)(this,(n=Object(l.a)(e)).call.apply(n,[this].concat(h)))).getWordItems=function(){var n=i.props.wrongAnswers;return n&&n.map(function(n){return t.a.createElement(R,{word:n})})},i}return Object(g.a)(e,n),Object(o.a)(e,[{key:"render",value:function(){return t.a.createElement(I.a,{className:"expansionPanel"},t.a.createElement(D.a,{expandIcon:t.a.createElement(P.a,null,"keyboard_arrow_down"),"aria-controls":"panel1a-content",id:"panel1a-header"},t.a.createElement(T.a,null,"Show all wrong answers")),t.a.createElement(U.a,null,t.a.createElement(F.a,null,this.getWordItems())))}}]),e}(s.Component),R=function(n){return t.a.createElement(_.a,null,t.a.createElement(K.a,{primary:t.a.createElement(T.a,{variant:"h4",style:{color:"#00000"}},n.word.pinyin," - ",n.word.chinese)}))},Y=V,$=function(n){function e(){return Object(r.a)(this,e),Object(c.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(g.a)(e,n),Object(o.a)(e,[{key:"render",value:function(){var n={primaryColor:{color:"white"}},e=this.props,i=e.gameWords,s=e.wrongAnswers,h=e.replay,a=e.replayIncorrectWords,r=i?i.length:0,o=s?s.length:0,c=r-o;return t.a.createElement("div",{className:"resultPageWrapper"},t.a.createElement(T.a,{style:n.primaryColor,variant:"display4",gutterBottom:!0},"\u5f88\u597d!"),t.a.createElement(T.a,{style:n.primaryColor,variant:"display4",gutterBottom:!0},c," / ",r),t.a.createElement(T.a,{style:n.primaryColor,variant:"subheading",gutterBottom:!0},"You got ",c," correct answers out of"," ",r),t.a.createElement("br",null),t.a.createElement(H,{replay:h,replayIncorrectWords:a,numberOfWrongAnswers:o}),o>0?t.a.createElement(Y,{wrongAnswers:s}):"")}}]),e}(s.Component),H=function(n){return t.a.createElement(s.Fragment,null,n.numberOfWrongAnswers>0?t.a.createElement(q.a,{variant:"extended","aria-label":"replay",onClick:function(){return n.replayIncorrectWords()}},t.a.createElement(P.a,null,"replay"),t.a.createElement("p",null,"Incorrect words (",n.numberOfWrongAnswers,")")):"",t.a.createElement(w.a,{size:"medium",color:"inherit","aria-label":"replay",onClick:function(){return n.replay()}},t.a.createElement(P.a,null,"arrow_back"),t.a.createElement("p",null," Back ")))},X=(Object(E.withTheme)()($),function(){return t.a.createElement("div",{className:"betaTag"},t.a.createElement("span",{className:"beta"},"BETA"),t.a.createElement("span",{className:"versionNr"}," v.0.2.8"))}),Z={primaryColor:{color:"white"},button:{marginBottom:"4px",height:"56px"}},nn=Object(E.withStyles)(Z)(function(n){var e=n.classes,i=n.startChapter;return t.a.createElement("div",{className:"chooseChapterWrapper"},t.a.createElement("div",{className:"pickChapterTitle"},t.a.createElement(T.a,{style:Z.primaryColor,variant:"display1",gutterBottom:!0},"Level A Chinese Quize")),t.a.createElement("div",{className:"chooseChapter"},t.a.createElement(w.a,{variant:"contained",size:"large",color:"primary",className:e.button,onClick:function(){return i("chapter1")}},"Book 1 Chapter 1"),t.a.createElement(w.a,{variant:"contained",size:"large",color:"primary",className:e.button,onClick:function(){return i("chapter12")}},"Book 1 Chapter 12"),t.a.createElement(w.a,{variant:"contained",size:"large",color:"primary",className:e.button,onClick:function(){return i("chapter13")}},"Book 1 Chapter 13"),t.a.createElement(w.a,{variant:"contained",size:"large",color:"primary",className:e.button,onClick:function(){return i("chapter14")}},"Book 1 Chapter 14"),t.a.createElement(w.a,{variant:"contained",size:"large",color:"primary",className:e.button,onClick:function(){return i("chapter15")}},"Book 1 Chapter 15"),t.a.createElement(w.a,{variant:"contained",size:"large",color:"primary",className:e.button,onClick:function(){return i("chapter16")}},"Book 1 Chapter 16"),t.a.createElement(w.a,{variant:"contained",size:"large",color:"primary",className:e.button,onClick:function(){return i("chapter2.1")}},"Book 2 Chapter 1"),t.a.createElement(w.a,{variant:"contained",size:"large",color:"primary",className:e.button,onClick:function(){return i("chapter2.2")}},"Book 2 Chapter 2"),t.a.createElement(w.a,{variant:"contained",size:"large",color:"primary",className:e.button,onClick:function(){return i("chapter2.3")}},"Book 2 Chapter 3"),t.a.createElement(w.a,{variant:"contained",size:"large",color:"primary",className:e.button,onClick:function(){return i("chapter2.4")}},"Book 2 Chapter 4"),t.a.createElement(w.a,{variant:"contained",size:"large",color:"primary",className:e.button,onClick:function(){return i("chapter2.5")}},"Book 2 Chapter 5"),t.a.createElement(w.a,{variant:"contained",size:"large",color:"primary",className:e.button,onClick:function(){return i("chapter2.6")}},"Book 2 Chapter 6"),t.a.createElement(w.a,{variant:"contained",size:"large",color:"primary",className:e.button,onClick:function(){return i("chapter2.7")}},"Book 2 Chapter 7"),t.a.createElement(w.a,{variant:"contained",size:"large",color:"primary",className:e.button,onClick:function(){return i("chapter2.8")}},"Book 2 Chapter 8")))}),en=function(n){function e(){var n,i;Object(r.a)(this,e);for(var s=arguments.length,t=new Array(s),h=0;h<s;h++)t[h]=arguments[h];return(i=Object(c.a)(this,(n=Object(l.a)(e)).call.apply(n,[this].concat(t)))).state={gameWords:[],wrongAnswers:[],answerOptions:[],scrambledOptions:[],questionIndex:0,answeredWrong:!1,showStartPage:!0,showTranslation:!1},i.replay=function(){var n=y();i.setState({gameWords:n,scrambledOptions:d(n[0]),wrongAnswers:[],answerOptions:[],questionIndex:0,answeredWrong:!1,showStartPage:!0,showTranslation:!1})},i.replayIncorrectWords=function(){var n=i.state.wrongAnswers;i.setState({gameWords:n,scrambledOptions:d(n[0]),wrongAnswers:[],answerOptions:[],questionIndex:0,answeredWrong:!1,showTranslation:!1})},i.setNextQuestion=function(){var n=i.state,e=n.gameWords,s=n.questionIndex,t=e[s],h=s+1;i.setState({questionIndex:h,currentWord:t,answeredWrong:!1,scrambledOptions:d(e[h]),showTranslation:!1})},i.setShowTranslation=function(n){i.setState({showTranslation:n})},i.optionPress=function(n){if(n===i.getCurrentWord())i.setNextQuestion();else if(!i.state.answeredWrong){var e=i.state.wrongAnswers;e.push(i.getCurrentWord()),i.setState({answeredWrong:!0,wrongAnswers:e})}},i.getCurrentWord=function(){var n=i.state;return n.gameWords[n.questionIndex]},i.isGameFinished=function(){return i.state.gameWords&&i.state.questionIndex>=i.state.gameWords.length},i.getGameProgress=function(){return i.state.gameWords&&i.state.questionIndex?i.state.questionIndex/i.state.gameWords.length*100:0},i.startChapter=function(n){var e=y([n]);i.setState({gameWords:e,scrambledOptions:d(e[0]),showStartPage:!1})},i}return Object(g.a)(e,n),Object(o.a)(e,[{key:"render",value:function(){return t.a.createElement("div",{className:"App"},t.a.createElement(X,null),this.state.showStartPage?t.a.createElement(nn,{startChapter:this.startChapter}):this.isGameFinished()?t.a.createElement($,{wrongAnswers:this.state.wrongAnswers,gameWords:this.state.gameWords,replay:this.replay,replayIncorrectWords:this.replayIncorrectWords}):t.a.createElement(O,{getCurrentWord:this.getCurrentWord,answeredWrong:this.state.answeredWrong,gameWords:this.state.gameWords,optionPress:this.optionPress,scrambledOptions:this.state.scrambledOptions,progress:this.getGameProgress(),setShowTranslation:this.setShowTranslation,showTranslation:this.state.showTranslation}))}}]),e}(s.Component),sn=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function tn(n,e){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var i=n.installing;i.onstatechange=function(){"installed"===i.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e.onSuccess&&e.onSuccess(n)))}}}).catch(function(n){console.error("Error during service worker registration:",n)})}a.a.render(t.a.createElement(en,null),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/mandarin",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/mandarin","/service-worker.js");sn?(function(n,e){fetch(n).then(function(i){404===i.status||-1===i.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):tn(n,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):tn(e,n)})}}()},44:function(n){n.exports={chapter1:[{chinese:"\u60a8",pinyin:"n\xedn",english:"you"},{chinese:"\u4f60",pinyin:"n\u01d0",english:"you"},{chinese:"\u4ed6",pinyin:"t\u0101",english:"he, him"},{chinese:"\u5979",pinyin:"t\u0101",english:"she, her"},{chinese:"\u4ed6\u4eec",pinyin:"t\u0101men",english:"they"},{chinese:"\u6211\u4eec",pinyin:"w\u01d2men",english:"we"},{chinese:"\u4f60\u4eec",pinyin:"n\u01d0men",english:"you"},{chinese:"\u8001\u5e08",pinyin:"l\u01ceosh\u012b",english:"teacher"},{chinese:"\u8d35\u59d3",pinyin:"gu\xecx\xecng",english:"may i know your surname?"},{chinese:"\u53eb",pinyin:"ji\xe0o",english:"call"},{chinese:"\u4ec0\u4e48",pinyin:"sh\xe9nme",english:"what"},{chinese:"\u540d\u5b57",pinyin:"m\xedngzi",english:"name"},{chinese:"\u662f",pinyin:"sh\xec",english:"be"},{chinese:"\u54ea\u56fd\u4eba",pinyin:"n\u01ce gu\xf3 r\xe9n",english:"what's your nationality?"},{chinese:"\u54ea",pinyin:"n\u01ce",english:"wich"},{chinese:"\u56fd",pinyin:"gu\xf3",english:"country"},{chinese:"\u4eba",pinyin:"r\xe9n",english:"people, person"},{chinese:"\u5b66\u4e60",pinyin:"xu\xe9x\xed",english:"learn,study"},{chinese:"\u6c49\u8bed",pinyin:"h\xe0ny\u01d4",english:"chinese"},{chinese:"\u6cd5\u8bed",pinyin:"f\u01cey\u01d4",english:"french"},{chinese:"\u597d",pinyin:"h\u01ceo",english:"good, fine"},{chinese:"\u4e5f",pinyin:"y\u011b",english:"also"},{chinese:"\u90fd",pinyin:"d\u014du",english:"all, both"},{chinese:"\u4e0d",pinyin:"b\xf9",english:"no, not"},{chinese:"\u4f60\u5462",pinyin:"n\u01d0ne",english:"how about you?"},{chinese:"\u5417",pinyin:"ma",english:"question particle"},{chinese:"\u82f1\u56fd",pinyin:"y\u012bnggu\xf3",english:"U.K"},{chinese:"\u6cd5\u56fd",pinyin:"f\u01cegu\xf3",english:"france"}],chapter12:[{chinese:"\u4e0a",pinyin:"sh\xe0ng",english:"last"},{chinese:"\u4e0b",pinyin:"xi\xe0",english:"next"},{chinese:"\u544a\u8bc9",pinyin:"g\xe0osu",english:"tell"},{chinese:"\u5fd8",pinyin:"w\xe0ng",english:"forget"},{chinese:"\u542c\u8bf4",pinyin:"t\u012bngshu\u014d",english:"it is said"},{chinese:"\u9a6c\u8def",pinyin:"m\u01cel\xf9",english:"road"},{chinese:"\u5bbe\u9986",pinyin:"b\u012bngu\u01cen",english:"hotel"},{chinese:"\u5929\u6c14",pinyin:"ti\u0101nq\xec",english:"weather"},{chinese:"\u4ea4\u901a",pinyin:"ji\u0101ot\u014dng",english:"traffic, transportation"},{chinese:"\u6709\u610f\u601d",pinyin:"y\u01d2uy\xecsi",english:"interesting"},{chinese:"\u65b0",pinyin:"x\u012bn",english:"new"},{chinese:"\u51b7",pinyin:"l\u011bng",english:"cold"},{chinese:"\u70ed",pinyin:"r\xe8",english:"hot"},{chinese:"\u7d2f",pinyin:"l\xe8i",english:"tired"},{chinese:"\u5e72\u51c0",pinyin:"g\u0101nj\xecng",english:"clean"},{chinese:"\u65b9\u4fbf",pinyin:"f\u0101ngbi\xe0n",english:"convenient"},{chinese:"\u9ad8\u5174",pinyin:"g\u0101ox\xecng",english:"glad"},{chinese:"\u8ba4\u8bc6",pinyin:"r\xe8nshi",english:"know, get to know (a person)"},{chinese:"\u51e0",pinyin:"j\u01d0",english:"several (in statements)"},{chinese:"\u4f46\u662f",pinyin:"d\xe0nsh\xec",english:"but"},{chinese:"\u5982\u679c",pinyin:"r\xfagu\u01d2",english:"if"},{chinese:"\u957f\u57ce",pinyin:"ch\xe1ngch\xe9ng",english:"the Great Wall"}],chapter13:[{chinese:"\u521a\u624d",pinyin:"g\u0101ngc\xe1i",english:"just now"},{chinese:"\u94a5\u5319",pinyin:"y\xe0oshi",english:"key"},{chinese:"\u4e66\u5e97",pinyin:"sh\u016bdi\xe0n",english:"bookstore"},{chinese:"\u94f6\u884c",pinyin:"y\xednh\xe1ng",english:"bank"},{chinese:"\u6559\u5ba4",pinyin:"ji\xe0osh\xec",english:"classroom"},{chinese:"\u684c\u5b50",pinyin:"zhu\u014dzi",english:"desk, table"},{chinese:"\u53e3\u888b",pinyin:"k\u01d2udai",english:"pocket"},{chinese:"\u5305",pinyin:"b\u0101o",english:"bag"},{chinese:"\u5916\u6587",pinyin:"w\xe0iw\xe9n",english:"foreign language"},{chinese:"\u81ea\u5df1",pinyin:"z\xecj\u01d0",english:"self"},{chinese:"\u4e0a",pinyin:"sh\xe0ng",english:"on (the table)"},{chinese:"\u4e0b",pinyin:"xi\xe0",english:"under (the table)"},{chinese:"\u65c1\u8fb9",pinyin:"p\xe1ngbi\u0101n",english:"beside"},{chinese:"\u5bf9\u9762",pinyin:"du\xecmi\xe0n",english:"opposite"},{chinese:"\u8bf4",pinyin:"shu\u014d",english:"say"},{chinese:"\u4e22",pinyin:"di\u016b",english:"lose, be lost"},{chinese:"\u9501",pinyin:"su\u01d2",english:"lock"},{chinese:"\u627e\u5230",pinyin:"zh\u01ceod\xe0o",english:"find"},{chinese:"\u7cca\u6d82",pinyin:"h\xfatu",english:"confused, muddled"},{chinese:"\u7cdf\u7cd5",pinyin:"z\u0101og\u0101o",english:"bad, terrible"},{chinese:"\u5c31",pinyin:"ji\xf9",english:"just"},{chinese:"\u5feb",pinyin:"ku\xe0i",english:"urge sb to do sth as soon as possible"},{chinese:"\u771f",pinyin:"zh\u0113n",english:"really, truly"},{chinese:"\u90a3",pinyin:"n\xe0",english:"then; in that case"},{chinese:"\u554a",pinyin:"a",english:"used to tone up what is being said"}],chapter14:[{chinese:"\u535a\u7269\u9986",pinyin:"b\xf3w\xf9gu\u01cen",english:"museum"},{chinese:"\u5e02\u4e2d\u5fc3",pinyin:"sh\xec zh\u014dngx\u012bn",english:"downtown"},{chinese:"\u633a",pinyin:"t\u01d0ng",english:"very"},{chinese:"\u8fdc",pinyin:"yu\u01cen",english:"far"},{chinese:"\u8fd1",pinyin:"j\xecn",english:"near"},{chinese:"\u8def",pinyin:"l\xf9",english:"route"},{chinese:"\u516c\u5171\u6c7d\u8f66",pinyin:"g\u014dngg\xf2ng q\xecch\u0113",english:"bus"},{chinese:"\u5730\u94c1",pinyin:"d\xecti\u011b",english:"subway, metro"},{chinese:"\u5148",pinyin:"xi\u0101n",english:"first"},{chinese:"\u7136\u540e",pinyin:"r\xe1nh\xf2u",english:"then"},{chinese:"\u6362",pinyin:"hu\xe0n",english:"change"},{chinese:"\u7968",pinyin:"pi\xe0o",english:"ticket"},{chinese:"\u7ad9",pinyin:"zh\xe0n",english:"railway station, bus stop"},{chinese:"\u8f66\u7ad9",pinyin:"ch\u0113zh\xe0n",english:"railway station, bus stop"},{chinese:"\u5e08\u5085",pinyin:"sh\u012bfu",english:"adress a worker, a driver etc."},{chinese:"\u552e\u7968\u5458",pinyin:"sh\xf2upi\xe0oyu\xe1n",english:"conductor"},{chinese:"\u884c\u4eba",pinyin:"x\xedngr\xe9n",english:"pedestrian"},{chinese:"\u524d\u8fb9",pinyin:"qi\xe1nbian",english:"front"},{chinese:"\u540e\u8fb9",pinyin:"h\xf2ubian",english:"back"},{chinese:"\u53f3\u9762",pinyin:"y\xf2umi\xe0n",english:"right side"},{chinese:"\u5de6\u9762",pinyin:"zu\u01d2mi\xe0n",english:"left side"},{chinese:"\u5f80",pinyin:"w\u01ceng",english:"towards"},{chinese:"\u8d70",pinyin:"z\u01d2u",english:"walk, go"},{chinese:"\u62d0",pinyin:"gu\u01cei",english:"turn"},{chinese:"\u5230",pinyin:"d\xe0o",english:"arrive"},{chinese:"\u8def\u53e3",pinyin:"l\xf9k\u01d2u",english:"intersection"},{chinese:"\u904d",pinyin:"bi\xe0n",english:"M.W \u4e00\u904d once"},{chinese:"\u4e0d\u597d\u610f\u601d",pinyin:"b\xf9 h\u01ceoy\xecsi",english:"sorry, feel shy, be embarrassed"},{chinese:"\u9519",pinyin:"cu\xf2",english:"wrong"},{chinese:"\u6211\u4eec\u5230\u4e86",pinyin:"w\u01d2men d\xe0ole",english:"we have arrived"}],chapter15:[{chinese:"\u4e00\u822c",pinyin:"y\xecb\u0101n",english:"generally"},{chinese:"\u603b\u662f",pinyin:"z\u01d2ngsh\xec",english:"always"},{chinese:"\u5e38\u5e38",pinyin:"ch\xe0ngch\xe0ng",english:"often"},{chinese:"\u6709\u65f6\u5019",pinyin:"y\u01d2u sh\xedhou",english:"sometimes"},{chinese:"\u5f88\u5c11",pinyin:"h\u011bnsh\u01ceo",english:"seldom"},{chinese:"\u4ece\u6765\u6ca1",pinyin:"c\xf3ngl\xe1i m\xe9i",english:"never"},{chinese:"\u4ece\u6765\u4e0d",pinyin:"c\xf3ngl\xe1i b\xf9",english:"never"},{chinese:"\u901b\u8857",pinyin:"gu\xe0ng ji\u0113",english:"stroll around the streets"},{chinese:"\u542c\u97f3\u4e50",pinyin:"t\u012bng y\u012bnyu\xe8",english:"listen to music"},{chinese:"\u542c",pinyin:"t\u012bng",english:"listen (to)"},{chinese:"\u97f3\u4e50",pinyin:"y\u012bnyu\xe8",english:"music"},{chinese:"\u804a\u5929\u513f",pinyin:"li\xe1o ti\u0101nr",english:"chat"},{chinese:"\u8df3\u821e",pinyin:"ti\xe0o w\u01d4",english:"dance"},{chinese:"\u8df3",pinyin:"ti\xe0o",english:"jump"},{chinese:"\u5531\u6b4c",pinyin:"ch\xe0ng g\u0113",english:"sing (a song)"},{chinese:"\u6253\u8f66",pinyin:"d\u01ce ch\u0113",english:"take taxi"},{chinese:"\u9a91",pinyin:"q\xed",english:"ride"},{chinese:"\u8d70\u7740\u53bb",pinyin:"z\u01d2uzhe q\xf9",english:"go on foot"},{chinese:"\u5f00",pinyin:"k\u0101i",english:"open"},{chinese:"\u9644\u8fd1",pinyin:"f\xf9j\xecn",english:"neighborhood"},{chinese:"\u6b4c\u5385",pinyin:"g\u0113t\u012bng",english:"KTV"},{chinese:"\u821e\u5385",pinyin:"w\u01d4t\u012bng",english:"ballroom, dance hall"},{chinese:"\u9152\u5427",pinyin:"ji\u01d4b\u0101",english:"bar"},{chinese:"\u4ee5\u524d",pinyin:"y\u01d0qi\xe1n",english:"before"},{chinese:"\u4ee5\u540e",pinyin:"y\u01d0h\xf2u",english:"late, in the future, after"},{chinese:"\u8fc7",pinyin:"guo",english:"used after a word to indicate past action or experience"}],chapter16:[{chinese:"\u8003\u8bd5",pinyin:"k\u01ceosh\xec",english:"test"},{chinese:"\u8003",pinyin:"k\u01ceo",english:"test"},{chinese:"\u8bfb\u5199",pinyin:"d\xfaxi\u011b",english:"reading and writing"},{chinese:"\u6c49\u5b57",pinyin:"h\xe0nz\xec",english:"chinese character"},{chinese:"\u53d1\u97f3",pinyin:"f\u0101y\u012bn",english:"pronunciation"},{chinese:"\u8bed\u6cd5",pinyin:"y\u01d4f\u01ce",english:"grammar"},{chinese:"\u8bcd\u8bed",pinyin:"c\xedy\u01d4",english:"words and expressions"},{chinese:"\u96be",pinyin:"n\xe1n",english:"difficult"},{chinese:"\u5bb9\u6613",pinyin:"r\xf3ngy\xec",english:"easy"},{chinese:"\u52aa\u529b",pinyin:"n\u01d4l\xec",english:"hard"},{chinese:"\u89c9\u5f97",pinyin:"ju\xe9de",english:"think"},{chinese:"\u80fd",pinyin:"n\xe9ng",english:"can"},{chinese:"\u5199\u4e0d\u597d",pinyin:"xi\u011b bu h\u01ceo",english:"cannot write well"},{chinese:"\u5199",pinyin:"xi\u011b",english:"write"},{chinese:"\u8bb0\u4e0d\u4f4f",pinyin:"j\xec bu zh\xf9",english:"cannot memorize"},{chinese:"\u8bb0",pinyin:"j\xec",english:"to memorize"},{chinese:"\u8fdb\u6b65",pinyin:"j\xecnb\xf9",english:"make progress"},{chinese:"\u901a\u8fc7",pinyin:"t\u014dnggu\xf2",english:"pass"},{chinese:"\u5f00\u59cb",pinyin:"k\u0101ish\u01d0",english:"begin"},{chinese:"\u7ed3\u675f",pinyin:"ji\xe9sh\xf9",english:"end, finish"},{chinese:"\u8fdf\u5230",pinyin:"ch\xedd\xe0o",english:"to be late"},{chinese:"\u6bcf",pinyin:"m\u011bi",english:"every"},{chinese:"\u522b",pinyin:"bi\xe9",english:"don't"},{chinese:"\u56e0\u4e3a",pinyin:"y\u012bnw\xe8i",english:"because"}],"chapter2.1":[{chinese:"\u597d\u4e45\u4e0d\u89c1",pinyin:"h\u01ceoji\u01d4 b\xfa ji\xe0n",english:"long time no see"},{chinese:"\u8981 \u4e86",pinyin:"y\xe0o le",english:"soon, about too"},{chinese:"\u6bd5\u4e1a",pinyin:"b\xecy\xe8",english:"to graduate"},{chinese:"\u7814\u7a76\u751f",pinyin:"y\xe1nji\u016bsh\u0113ng",english:"graduate student"},{chinese:"\u4e13\u4e1a",pinyin:"zhu\u0101ny\xe8",english:"major"},{chinese:"\u56fd\u9645",pinyin:"gu\xf3j\xec",english:"international"},{chinese:"\u7ecf\u6d4e",pinyin:"j\u012bngj\xec",english:"economy"},{chinese:"\u8d38\u6613",pinyin:"m\xe0oy\xec",english:"trade"},{chinese:"\u627e",pinyin:"zh\u01ceo",english:"to look for"},{chinese:"\u5e94\u8be5",pinyin:"y\u012bngg\u0101i",english:"should, ought to"},{chinese:"\u6700\u8fd1",pinyin:"zu\xecj\xecn",english:"recently"},{chinese:"\u8001\u6837\u5b50",pinyin:"l\u01ceo y\xe0ngzi",english:"same as usual"},{chinese:"\u7279\u522b",pinyin:"t\xe8bi\xe9",english:"especially"},{chinese:"\u5b8c",pinyin:"w\xe1n",english:"finish"},{chinese:"\u8bba\u6587",pinyin:"l\xf9nw\xe9n",english:"thesis, paper"},{chinese:"\u6ee1\u610f",pinyin:"m\u01ceny\xec",english:"be satisfied"},{chinese:"\u7740\u6025",pinyin:"zh\xe1oj\xed",english:"worried, anxious"},{chinese:"\u795d",pinyin:"zh\xf9",english:"to wish"},{chinese:"\u597d\u8fd0",pinyin:"h\u01ceoy\xf9n",english:"good luck"},{chinese:"\u767d\u5929",pinyin:"b\xe1iti\u0101n",english:"daytime"},{chinese:"\u591c\u91cc",pinyin:"y\xe8li",english:"night"},{chinese:"\u6bd4\u8d5b",pinyin:"b\u01d0s\xe0i",english:"match; to compete"},{chinese:"\u52a0\u73ed",pinyin:"ji\u0101b\u0101n",english:"work overtime"},{chinese:"\u4e16\u754c\u676f",pinyin:"sh\xecji\xe8 b\u0113i",english:"World Cup"}],"chapter2.2":[{chinese:"\u6253\u7403",pinyin:"d\xe0 qi\xfa",english:"play a ball game"},{chinese:"\u7cfb",pinyin:"x\xec",english:"department"},{chinese:"\u4e52\u4e53\u7403",pinyin:"p\u012bngp\u0101ngqi\xfa",english:"pingpong"},{chinese:"\u8f93",pinyin:"sh\u016b",english:"to lose"},{chinese:"\u7bee\u7403",pinyin:"l\xe1nqi\xfa",english:"basketball"},{chinese:"\u8d62",pinyin:"y\xedng",english:"to win"},{chinese:"\u8e22\u8db3\u7403",pinyin:"t\u012b z\xfaqi\xfa",english:"play soccer"},{chinese:"\u53c2\u52a0",pinyin:"c\u0101nji\u0101",english:"to attend, to take part in"},{chinese:"\u8bdd",pinyin:"hu\xe0",english:"words, speech"},{chinese:"\u4eac\u5267",pinyin:"j\u012bngj\xf9",english:"Beijing opera"},{chinese:"\u6f14\u51fa",pinyin:"y\u01cench\u016b",english:"performance, to perform"},{chinese:"\u4f1a",pinyin:"hu\xec",english:"can, to know how to"},{chinese:"\u5b66\u751f\u4f1a",pinyin:"xu\xe9sh\u0113nghu\xec",english:"student union"},{chinese:"\u56e2",pinyin:"tu\xe1n",english:"group"},{chinese:"\u6d3b\u52a8",pinyin:"hu\xf3d\xf2ng",english:"activity; move about"},{chinese:"\u5356",pinyin:"m\xe0i",english:"to sell"},{chinese:"\u9001",pinyin:"s\xf2ng",english:"to give"},{chinese:"\u7ed9",pinyin:"g\u011bi",english:"to"},{chinese:"\u505a",pinyin:"zu\xf2",english:"to do"},{chinese:"\u751f\u610f",pinyin:"sh\u0113ngyi",english:"business"},{chinese:"\u5f97",pinyin:"d\u011bi",english:"have to, must"},{chinese:"\u56fe\u4e66\u9986",pinyin:"t\xfash\u016bgu\u01cen",english:"library"},{chinese:"\u8fc7\u671f",pinyin:"gu\xf2q\u012b",english:"overdue"},{chinese:"\u7f5a\u6b3e",pinyin:"f\xe1 ku\u01cen",english:"to impose a fine, to fine"},{chinese:"\u7f8e\u56fd",pinyin:"m\u011bigu\xf3",english:"U.S.A"}],"chapter2.3":[{chinese:"\u559d\u9152",pinyin:"h\u0113 ji\u01d4",english:"drink alcohol"},{chinese:"\u62bd\u70df",pinyin:"ch\u014du y\u0101n",english:"smoke"},{chinese:"\u5e74\u8f7b",pinyin:"ni\xe1nq\u012bng",english:"young"},{chinese:"\u540e\u6765",pinyin:"h\xf2ul\xe1i",english:"after that, later"},{chinese:"\u533b\u751f",pinyin:"y\u012bsh\u0113ng",english:"doctor"},{chinese:"\u5bf9\u6709\u597d\u5904",pinyin:"du\xec y\u01d2u h\u01ceoch\xf9",english:"be good to"},{chinese:"\u6240\u4ee5",pinyin:"su\u01d2y\u01d0",english:"so"},{chinese:"\u5e73\u65f6",pinyin:"p\xedngsh\xed",english:"at ordinary times"},{chinese:"\u8fd0\u52a8",pinyin:"y\xf9nd\xf2ng",english:"sports; to have sports"},{chinese:"\u6e38\u6cf3",pinyin:"y\xf3u y\u01d2ng",english:"swim"},{chinese:"\u53e6\u5916",pinyin:"l\xecngw\xe0i",english:"in addition, moreover"},{chinese:"\u7f51\u7403",pinyin:"w\u01cengqi\xfa",english:"tennis"},{chinese:"\u7fbd\u6bdb\u7403",pinyin:"y\u01d4m\xe1oqi\xfa",english:"badminton"},{chinese:"\u82b1\u513f",pinyin:"hu\u0101r",english:"flower"},{chinese:"\u517b",pinyin:"y\u01ceng",english:"to raise/keep"},{chinese:"\u4e0d\u8fc7",pinyin:"b\xfagu\xf2",english:"but"},{chinese:"\u642c",pinyin:"b\u0101n",english:"to move"},{chinese:"\u9662\u5b50",pinyin:"yu\xe0nzi",english:"yard"},{chinese:"\u72d7",pinyin:"g\u01d2u",english:"dog \ud83d\udc36"},{chinese:"\u732b",pinyin:"m\u0101o",english:"\ud83d\udc31 cat"},{chinese:"\u5e26",pinyin:"d\xe0i",english:"to bring, to take"},{chinese:"\u6563\u6b65",pinyin:"s\xe0n b\xf9",english:"to take a walk"},{chinese:"\u7535\u89c6",pinyin:"di\xe0nsh\xec",english:"TV"},{chinese:"\u4e0a\u7f51",pinyin:"sh\xe0ng w\u01ceng",english:"to surf the internet"}],"chapter2.4":[{chinese:"\u4e2a\u5b50",pinyin:"g\xe8zi",english:"height"},{chinese:"\u9ad8",pinyin:"g\u0101o",english:"tall,high"},{chinese:"\u5934\u53d1",pinyin:"t\xf3ufa",english:"thin"},{chinese:"\u75e9",pinyin:"sh\xf2u",english:"thin"},{chinese:"\u665a",pinyin:"w\u01cen",english:"late"},{chinese:"\u8ddf\u6709\u5173\u7cfb",pinyin:"g\u0113n y\u01d2u gu\u0101nxi",english:"to have sth. to do with"},{chinese:"\u773c\u775b",pinyin:"y\u01cenjing",english:"eye"},{chinese:"\u76ae\u80a4",pinyin:"p\xedf\u016b",english:"skin"},{chinese:"\u767d",pinyin:"b\xe1i",english:"white"},{chinese:"\u821e\u4f1a",pinyin:"w\u01d4hu\xed",english:"dance party, ball"},{chinese:"\u4ecb\u7ecd",pinyin:"ji\xe8sh\xe0o",english:"to introduce"},{chinese:"\u80d6",pinyin:"p\xe0ng",english:"fat"},{chinese:"\u65e9",pinyin:"z\u01ceo",english:"early"},{chinese:"\u77ee",pinyin:"\u01cei",english:"short (in height)"},{chinese:"\u9ed1",pinyin:"h\u0113i",english:"black"},{chinese:"\u7a7f",pinyin:"chu\u0101n",english:"to wear"},{chinese:"\u968f\u4fbf",pinyin:"su\xedbi\xe0n",english:"casual, random,informal"},{chinese:"T\u6064",pinyin:"T x\xf9",english:"T-shirt"},{chinese:"\u6761",pinyin:"ti\xe1o",english:"M.W"},{chinese:"\u77ed",pinyin:"du\u01cen",english:"short"},{chinese:"\u77ed\u88e4",pinyin:"du\u01cenk\xf9",english:"shorts"},{chinese:"\u7231",pinyin:"\xe0i",english:"to love"},{chinese:"\u8ba9",pinyin:"r\xe0ng",english:"to let"},{chinese:"\u5bb3\u6015",pinyin:"h\xe0ip\xe0",english:"to be afraid of, to be scared"},{chinese:"\u7cca\u91cc\u7cca\u6d82",pinyin:"h\xfalih\xfat\xfa",english:"muddled, confused, bewildered"},{chinese:"\u4fe9",pinyin:"li\u01ce",english:"two"},{chinese:"\u771f\u5b9e",pinyin:"zh\u0113nsh\xed",english:"true"}],"chapter2.5":[{chinese:"\u5317\u65b9",pinyin:"b\u011bif\u0101ng",english:"northern area"},{chinese:"\u5357\u65b9",pinyin:"n\xe1nf\u0101ng",english:"southern area"},{chinese:"\u8001\u5bb6",pinyin:"l\u01ceoji\u0101",english:"hometown"},{chinese:"\u4e1c\u5317",pinyin:"d\u014dngb\u011bi",english:"northeast"},{chinese:"\u57ce\u5e02",pinyin:"ch\xe9ngsh\xec",english:"city"},{chinese:"\u519c\u6751",pinyin:"n\xf3ngc\u016bn",english:"countryside"},{chinese:"\u73af\u5883",pinyin:"hu\xe1nj\xecng",english:"environment"},{chinese:"\u5317\u8fb9",pinyin:"b\u011bibian",english:"north"},{chinese:"\u5c71",pinyin:"sh\u0101n",english:"mountain, hill"},{chinese:"\u5357\u8fb9",pinyin:"n\xe1nbian",english:"south"},{chinese:"\u6cb3",pinyin:"h\xe9",english:"river"},{chinese:"\u4e1c\u8fb9",pinyin:"d\u014dngbian",english:"east"},{chinese:"\u897f\u8fb9",pinyin:"x\u012bbian",english:"west"},{chinese:"\u7530\u91ce",pinyin:"ti\xe1ny\u011b",english:"field"},{chinese:"\u7a7a\u6c14",pinyin:"k\u014dngq\xec",english:"air"},{chinese:"\u65b0\u9c9c",pinyin:"x\u012bnxi\u0101n",english:"fresh"},{chinese:"\u4f18\u7f8e",pinyin:"y\u014dum\u011bi",english:"beautiful, graceful"},{chinese:"\u70ed\u95f9",pinyin:"r\xe8nao",english:"(of a place) lively"},{chinese:"\u79bb",pinyin:"l\xed",english:"away from"},{chinese:"\u751f\u6d3b",pinyin:"sh\u0113nghu\xf3",english:"life; to live"},{chinese:"\u8f66\u6c34\u9a6c\u9f99",pinyin:"ch\u0113 shu\u01d0 m\u01ce l\xf3ng",english:"heavy traffic"},{chinese:"\u9a6c",pinyin:"m\u01ce",english:"horse"},{chinese:"\u9f99",pinyin:"l\xf3ng",english:"dragon \ud83d\udc09"},{chinese:"\u5435",pinyin:"ch\u01ceo",english:"noisy"},{chinese:"\u4e1c\u90e8",pinyin:"d\u014dngb\xf9",english:"eastern area"},{chinese:"\u897f\u90e8",pinyin:"x\u012bb\xf9",english:"western area"},{chinese:"\u6811",pinyin:"sh\xf9",english:"tree"},{chinese:"\u6d77",pinyin:"h\u01cei",english:"sea"},{chinese:"\u6b22\u8fce",pinyin:"hu\u0101ny\xedng",english:"to welcome"}],"chapter2.6":[{chinese:"\u673a\u573a",pinyin:"j\u012bch\u01ceng",english:"airport"},{chinese:"\u63a5",pinyin:"ji\u0113",english:"to pick up (somebody)"},{chinese:"\u624d",pinyin:"c\xe1i",english:"used to indicate that something takes place later than expected"},{chinese:"\u8fdb\u6765",pinyin:"j\xecnl\xe1i",english:"to come in"},{chinese:"\u8fdb\u53bb",pinyin:"j\xecnq\xf9",english:"to go into"},{chinese:"\u8fc7\u6765",pinyin:"gu\xf2l\xe1i",english:"to come over"},{chinese:"\u7236\u6bcd",pinyin:"f\xf9m\u01d4",english:"father and mother\uff0c parents"},{chinese:"\u7236\u4eb2",pinyin:"f\xf9q\u012bn",english:"father"},{chinese:"\u6bcd\u4eb2",pinyin:"m\u01d4q\u012bn",english:"mother"},{chinese:"\u9001",pinyin:"s\xf2ng",english:"to see (somebody) off"},{chinese:"\u600e\u4e48\u56de\u4e8b",pinyin:"z\u011bnme hu\xed sh\xec",english:"what's the matter?"},{chinese:"\u966a",pinyin:"p\xe9i",english:"to accompany"},{chinese:"\u7ec4\u7ec7",pinyin:"z\u01d4zh\u012b",english:"to organize"},{chinese:"\u53c2\u89c2",pinyin:"c\u0101ngu\u0101n",english:"to visit, to look around"},{chinese:"\u8981\u662f\u7684\u8bdd",pinyin:"y\xe0oshi dehu\xe0",english:"if"},{chinese:"\u62a5\u540d",pinyin:"b\xe0o m\xedng",english:"enter one's name, sign up"},{chinese:"\u514d\u8d39",pinyin:"mi\u01cenf\xe8i",english:"to be free of charge"},{chinese:"\u5177\u4f53",pinyin:"j\xf9t\u01d0",english:"in detail"},{chinese:"\u60c5\u51b5",pinyin:"q\xedngku\xe0ng",english:"condition, situation"},{chinese:"\u901a\u77e5",pinyin:"t\u014dngzh\u012b",english:"notice; to notify, to inform"},{chinese:"\u6e05\u695a",pinyin:"q\u012bngchu",english:"clear"},{chinese:"\u529e\u516c\u5ba4",pinyin:"b\xe0ng\u014dngsh\xec",english:"office"},{chinese:"\u624b\u673a",pinyin:"sh\u01d2uj\u012b",english:"cell phone"}],"chapter2.7":[{chinese:"\u5c1d",pinyin:"ch\xe1ng",english:"to taste, to try the flavor of"},{chinese:"\u897f\u7ea2\u67ff",pinyin:"xh\u012bh\xf3ngsh\xec",english:"tomato"},{chinese:"\u7092",pinyin:"ch\u01ceo",english:"to fry"},{chinese:"\u9e21\u86cb",pinyin:"j\u012bd\xe0n",english:"(hen's) egg \ud83e\udd5a"},{chinese:"\u54b8",pinyin:"xi\xe1n",english:"salty"},{chinese:"\u76d0",pinyin:"y\xe1n",english:"salt"},{chinese:"\u53c8\u9ad8\u53c8\u5927",pinyin:"y\xf2u g\u0101o y\xf2u d\xe0",english:"tall and big"},{chinese:"\u918b",pinyin:"c\xf9",english:"vinegar"},{chinese:"\u9c7c",pinyin:"y\xfa",english:"fish"},{chinese:"\u82e6",pinyin:"k\u01d4",english:"bitter, suffering, having a hard life"},{chinese:"\u82e6\u74dc",pinyin:"k\u01d4gu\u0101",english:"balsam pear"},{chinese:"\u8fa3",pinyin:"l\xe0",english:"(of taste) hot, peppery"},{chinese:"\u5e72\u5417",pinyin:"g\xe0n m\xe1",english:"do what, why"},{chinese:"\u6781\u4e86",pinyin:"j\xed le",english:"very.."},{chinese:"\u4e3b\u98df",pinyin:"zh\u01d4sh\xed",english:"main food, staple food"},{chinese:"\u997a\u5b50",pinyin:"ji\u01ceozi",english:"dumpling"},{chinese:"\u53ea\u542c\u4e0d\u8bf4",pinyin:"zh\u01d0 t\u012bng b\xf9 shu\u014d",english:"just listening without talking"},{chinese:"\u56fd\u5bb6",pinyin:"gu\xf3ji\u0101",english:"country"},{chinese:"\u89c4\u5b9a",pinyin:"gu\u012bd\xecng",english:"regulation, rule; to prescribe"},{chinese:"\u6ee1",pinyin:"m\u01cen",english:"full; to reach the limit"},{chinese:"\u9971",pinyin:"b\u01ceo",english:"(of stomach) full"},{chinese:"\u8be5",pinyin:"g\u0101i",english:"should, ought to"},{chinese:"\u6d17",pinyin:"x\u01d0",english:"to wash"},{chinese:"\u76d8\u5b50",pinyin:"p\xe1nzi",english:"plate"},{chinese:"\u7ea6\u4f1a",pinyin:"yu\u0113hu\xec",english:"appointment, date"}],"chapter2.8":[{chinese:"\u9884\u62a5",pinyin:"y\xf9b\xe0o",english:"forecast"},{chinese:"\u6674\u5929",pinyin:"q\xedngti\u0101n",english:"sunny day"},{chinese:"\u6700",pinyin:"zu\xec",english:"most"},{chinese:"\u6e29\u5ea6",pinyin:"w\u0113nd\xf9",english:"temperature"},{chinese:"\u5ea6",pinyin:"d\xf9",english:"degree"},{chinese:"\u4f4e",pinyin:"d\u012b",english:"low"},{chinese:"\u6696\u548c",pinyin:"nu\u01cenhuo",english:"warm"},{chinese:"\u6625\u5929",pinyin:"ch\u016bnti\u0101n",english:"spring"},{chinese:"\u5b63\u8282",pinyin:"j\xecji\xe9",english:"season"},{chinese:"\u590f\u5929",pinyin:"xi\xe0ti\u0101n",english:"summer"},{chinese:"\u90a3\u4e48",pinyin:"n\xe0me",english:"so, like that"},{chinese:"\u751f\u65e5",pinyin:"sh\u0113ngr\xec",english:"birthday"},{chinese:"\u5bb6\u4e61",pinyin:"ji\u0101xi\u0101ng",english:"hometown"},{chinese:"\u8fd9\u4e48",pinyin:"zh\xe8me",english:"so, like this"},{chinese:"\u79cb\u5929",pinyin:"qi\u016bti\u0101n",english:"autumn"},{chinese:"\u5dee\u4e0d\u591a",pinyin:"ch\xe0budu\u014d",english:"almost, nearly, about the same"},{chinese:"\u51ac\u5929",pinyin:"d\u014dngti\u0101n",english:"winter"},{chinese:"\u6bd4",pinyin:"b\u01d0",english:"than"},{chinese:"\u51c9\u5feb",pinyin:"li\xe1ngkuai",english:"cool"},{chinese:"\u5de6\u53f3",pinyin:"zu\u01d2y\xf2u",english:"about, around"},{chinese:"\u4e0b\u96e8",pinyin:"xi\xe0 y\u01d4",english:"to rain"},{chinese:"\u548c",pinyin:"h\xe9",english:"and"},{chinese:"\u592a\u9633",pinyin:"t\xe0iy\xe0ng",english:"sun"},{chinese:"\u522e\u98ce",pinyin:"gu\u0101 f\u0113ng",english:"(wind) blow"},{chinese:"\u98ce",pinyin:"f\u0113ng",english:"wind"},{chinese:"\u6c14\u6e29",pinyin:"q\xecw\u0113n",english:"weather temperature"},{chinese:"\u96f6\u4e0b",pinyin:"l\xedngxi\xe0",english:"below zero"},{chinese:"\u66f4",pinyin:"g\xe8ng",english:"more"},{chinese:"\u4e0b\u96ea",pinyin:"xi\xe0 xu\u011b",english:"to snow"}]}},46:function(n,e,i){},76:function(n,e,i){n.exports=i(180)},81:function(n,e,i){}},[[76,2,1]]]);
//# sourceMappingURL=main.bd8c1a14.chunk.js.map