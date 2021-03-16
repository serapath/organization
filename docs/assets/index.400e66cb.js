var e=Object.assign;import{e as t,c as s,d as l,q as r,o,a,b as n,t as i,f as u,r as c,w as y,v as d,g as p,u as b,V as m,F as v,h,i as f,j as g,k}from"./vendor.ed2a223e.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(s){const l=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((s,o)=>{const a=new URL(e,l);if(self[t].moduleMap[a])return s(self[t].moduleMap[a]);const n=new Blob([`import * as m from '${a}';`,`${t}.moduleMap['${a}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(n),onerror(){o(new Error(`Failed to import: ${e}`)),r(i)},onload(){s(self[t].moduleMap[a]),r(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/organization/assets/");async function w(e){return await crypto.subtle.exportKey("jwk",e)}const x={name:"RSA-OAEP",hash:"SHA-256",publicExponent:new Uint8Array([1,0,1]),modulusLength:4096};async function K(e){return{keyPair:{publicKey:await crypto.subtle.importKey("jwk",e,x,!0,["encrypt"]),privateKey:null},publicKey:e,privateKey:null}}const P=new TextEncoder,j=new TextDecoder;async function A(e,t){return new Uint8Array(await window.crypto.subtle.encrypt(x,e,t))}async function R(e,l,r){const o=P.encode(r);return t(s.encode(e.publicKey,await A(l.keyPair.publicKey,o),await A(e.keyPair.publicKey,o))).match(/.{0,80}/g).join("\n")}async function C(e,t,o){const a=l(o),n=await s.decodeAll(a),[i,u,c]=n;return e&&r(i,e.publicKey)?{decrypted:await _(e.keyPair.privateKey,c)}:t&&r(i,t.publicKey)?{decrypted:await _(t.keyPair.privateKey,c)}:{decrypted:await _(t.keyPair.privateKey,u),sender:await K(i)}}const E=/(?:[A-Z0-9+/]{4})*(?:[A-Z0-9+/]{2}==|[A-Z0-9+/]{3}=)?/gim;function I(e,t,s){const l=function(e,t=0){E.lastIndex=0;const s=[];let l,r=0;const o=[];for(e=e.replace(/\r/g,"").replace(/\n|\r\n?/gm,((e,t)=>(o.push(t),"")));null!==(l=E.exec(e));){const{length:o}=l[0];0!==o?o<t||(r!==l.index&&s.push({text:e.substring(r,l.index)}),s.push({b64:l[0]}),r=E.lastIndex):E.lastIndex+=1}if(r!==e.length&&s.push({text:e.substr(r)}),0===o.length)return s;let a=0,n=0,i=s[0],u=i.b64||i.text;for(;o.length>0;){let e=o.shift()-a;for(;e>u.length;)a+=u.length,e-=u.length,i=s[++n],u=i.b64||i.text;u=u.substr(0,e)+"\n"+u.substr(e),i.b64?i.b64=u:i.text=u}return s}(s,1e3);for(const r of l)r.b64&&(r.process=C(e,t,r.b64).then((e=>({success:e})),(e=>({error:e}))));return l}async function _(e,t){return j.decode(new Uint8Array(await window.crypto.subtle.decrypt(x,e,t)))}function M(e){e().catch((e=>console.error(e)))}const O={key:0,class:"pl-5"},S=n("h2",{class:"text-xl mt-3 mb-2"},"Get Started",-1),U=u(" Before we can get started please "),z=u(". "),D=n("p",{class:"text-gray-500 mb2"},' If you have been here before and remember your private key you should click on "New Message". ',-1),L={key:1,class:"pl-5"},B=n("h2",{class:"text-xl mt-3 mb-2"},"Hello Again!",-1),J=u(" Before we can get started, please "),G=u(". "),T=n("p",{class:"text-gray-500 mb2"},' If you don\'t have one yet or lost your previous private key, you should click on "First Message". ',-1),Y={key:2},$=n("summary",{class:"text-lg mt-3 mb-2 focus:outline-none cursor-pointer select-none"},"Your Private Key",-1),q=n("p",null,[n("strong",null,"This is important!"),u(". Store this somewhere safe! It allows you to read replies and send new messages! ")],-1),F={class:"border-solid border-gray-300 border p-2 w-full h-40 text-sm select-all overflow-scroll"},W={expose:[],props:{first:{type:Boolean,required:!0},keys:{type:Object}},setup(t){const s=t;function l(){M((async()=>{s.keys.mine=await async function(){const e=await crypto.subtle.generateKey(x,!0,["decrypt","encrypt"]);return{keyPair:e,privateKey:await w(e.privateKey),publicKey:await w(e.publicKey)}}()}))}function r(){const t=function(e){const t=prompt(e);try{return JSON.parse(t)}catch(s){return console.error(s),null}}("Insert your private key below!");null!==t&&M((async()=>{s.keys.mine=await async function(t){const s={privateKey:await crypto.subtle.importKey("jwk",t,x,!0,["decrypt"])},l=e({},t);return delete l.d,delete l.dp,delete l.dq,delete l.q,delete l.qi,delete l.p,l.key_ops=["encrypt"],s.publicKey=(await K(l)).keyPair.publicKey,{keyPair:s,publicKey:l,privateKey:t}}(t)}))}return(e,s)=>t.keys.mine&&t.keys.mine.keyPair||!t.first?t.keys.mine&&t.keys.mine.keyPair||t.first?(o(),a("div",Y,[n("details",{open:t.first,class:"pl-5"},[$,q,n("pre",F,i(JSON.stringify(t.keys.mine.privateKey,null,2)),1)],8,["open"])])):(o(),a("div",L,[B,n("p",{class:"text-gray-500 mb-2"},[J,n("button",{tabindex:"0",onClick:r,class:"focus:outline-none mr-2 bg-yellow-200 rounded-md px-2 py-1 hover:bg-yellow-400 focus:bg-yellow-300"}," import your private key "),G]),T])):(o(),a("div",O,[S,n("p",{class:"text-gray-500 mb2"},[U,n("button",{tabindex:"0",onClick:l,class:"focus:outline-none mr-2 bg-yellow-200 rounded-md px-2 py-1 hover:bg-yellow-400 focus:bg-yellow-300"}," create a private key "),z]),D]))}},N={key:0},V=n("h3",{class:"mb-2 mt-3 font-semibold"},"Enter your message to us below ↓",-1),X={key:0},H=n("h3",{class:"mb-2 mt-3 font-semibold"},"Your Encrypted Message",-1),Z=n("p",null," You can also manually copy the message below to our issue form, or send it to us by any other means. ",-1),Q={readonly:"",class:"border-solid border-gray-300 border p-2 w-full h-40 text-sm select-all overflow-scroll wrap"},ee={expose:[],props:{keys:{type:Object}},setup(e){const t=e,s=c(""),l=c("");function r(){M((async()=>{l.value=await R(t.keys.mine,t.keys.theirs,s.value)}))}return(t,u)=>e.keys.mine&&e.keys.theirs?(o(),a("div",N,[V,y(n("textarea",{onInput:r,"onUpdate:modelValue":u[1]||(u[1]=e=>s.value=e),class:"border-solid border-black border p-2 w-full h-40 text-sm mb-3"},null,544),[[d,s.value]]),""!==l.value?(o(),a("div",X,[n("p",null,[n("a",{class:"focus:outline-none mr-2 bg-yellow-200 rounded-md px-2 py-1 hover:bg-yellow-400 focus:bg-yellow-300",href:`https://github.com/dat-ecosystem/organization/issues/new?title=${encodeURIComponent("Message to the consortium")}&body=${encodeURIComponent(`Private Message:\n\n\n${l.value}\n`)}`,target:"_blank"}," Open github issue form with encrypted text prefilled ",8,["href"])]),H,Z,n("pre",Q,i(l.value),1)])):p("",!0)])):p("",!0)}},te={key:0},se=n("h3",{class:"mb-2 mt-3 bold font-semibold"},"Enter an encrypted message ↓",-1),le={key:0},re=n("h3",{class:"mb-2 mt-3 bold font-semibold"},"Decrypted Message",-1),oe={readonly:"",class:"border-solid border-gray-300 border p-2 w-full h-40 text-sm"},ae={key:1},ne={key:2},ie=n("h2",{class:"mb-2 mt-3 text-lg"},"Reply to sender",-1),ue={expose:[],props:{keys:{type:Object}},setup(e){const t=e,s=c(""),l=c(""),r=c(null),u=c(void 0);function b(){let e=0;M((async()=>{const o=++e;l.value="",u.value=void 0,r.value=null;try{const r=await C(t.keys.theirs,t.keys.mine,s.value.replace(/\n/gm,"").trim());o===e&&(l.value=r.decrypted,u.value=r.sender)}catch(a){r.value=a,console.error(a)}}))}return(c,m)=>e.keys.mine?(o(),a("div",te,[se,y(n("textarea",{onInput:b,"onUpdate:modelValue":m[1]||(m[1]=e=>s.value=e),class:"border-solid border-black border p-2 w-full h-40 text-sm"},null,544),[[d,s.value]]),""!==l.value?(o(),a("div",le,[re,n("textarea",oe,i(l.value),1)])):p("",!0),r.value?(o(),a("div",ae," Error occured while decryption. ")):p("",!0),u.value?(o(),a("div",ne,[ie,n(ee,{keys:{mine:t.keys.mine,theirs:u.value}},null,8,["keys"])])):p("",!0)])):p("",!0)}},ce={expose:[],props:{parts:{type:Array,default:[]}},setup(e){const t=e,s=c(Date.now());for(const l of t.parts)l.process&&l.process.then((({success:e,error:t})=>{l.success=e,l.error=t,console.log(t.stack),s.value=Date.now()}));return(e,s)=>(o(),a(b(m),{class:"markdown-body",source:t.parts.map((e=>e.text?e.text:e.success?e.success.decrypted:e.error?`<span title="Error: Couldn't decrypt.">${e.b64}</span>`:`_(Decrypting: ${e.b64.substr(0,6)}...)_`)).join(""),html:!0,linkify:!0},null,8,["source"]))}},ye={key:0},de={class:"bg-gray-100 p-3"},pe=n("label",{for:"issue",class:"font-semibold"},"Github Issue:",-1),be={key:0},me=u("["),ve=u("]"),he={key:0,class:"color-gray"},fe={key:1},ge={key:2,class:"mt-5"},ke={class:"border-solid border-l-2 pl-2 border-gray-300 mb-5"},we={class:"font-semibold"},xe={class:"font-semibold"},Ke=n("h2",null,"Reply",-1),Pe={key:0},je=n("h3",{class:"mb-2 mt-3 font-semibold"},"Your Encrypted Reply",-1),Ae=u(" Unfortunately we can not prefill this for you. You need to copy-paste this "),Re=u(". "),Ce={readonly:"",class:"border-solid border-gray-300 border p-2 w-full h-40 text-sm select-all overflow-scroll wrap"},Ee={expose:[],props:{repo:{type:String,required:!0},keys:{type:Object}},setup(t){const s=t,l=c([]),r=c(null),b=c(null),m=c(!1),g=c(null),k=c(null),w=c(null);let x=null,K=0;function P(){M((async()=>{w.value=await R(s.keys.mine,s.keys.theirs,k.value)}))}function j(){K+=1;const t=K;null!==x&&(x(),x=null),b.value=null,l.value=null,m.value=!0,g.value=null,(async()=>{const t=new f.CancelToken((e=>{x=e})),o=parseInt(r.value.value);if(isNaN(o)||o===1/0||o===-1/0)throw new Error("The issue needs to be a valid number");if(o<1)throw new Error("We need positive numbers");try{const r=`https://api.github.com/repos/${s.repo}/issues/${o}`,a=await f.get(r,{cancelToken:t}),n=await f.get(a.data.comments_url,{cancelToken:t});b.value=e(e({},a.data),{parts:I(s.keys.theirs,s.keys.mine,a.data.body)}),l.value=n.data.map(((t,l)=>e(e({},t),{parts:I(s.keys.theirs,s.keys.mine,t.body)})))}catch(a){g.value=a,console.log(a)}finally{m.value=!1}})().catch((e=>{t===K&&(m.value=!1,g.value=e),console.warn(e)}))}return(e,s)=>t.keys.mine&&t.keys.mine.privateKey?(o(),a("div",ye,[n("div",de,[pe,u(" "+i(`https://github.com/${t.repo}/issue/`),1),n("input",{ref:r,name:"issue",onChange:j,class:"border m"},null,544),!m.value&&b.value?(o(),a("span",be,[me,n("a",{href:`${b.value.html_url}`,target:"_blank",class:"text-blue-800 hover:underline"},"Link",8,["href"]),ve])):p("",!0)]),m.value?(o(),a("div",he," ... loading ... ")):p("",!0),!m.value&&g.value?(o(),a("div",fe,i(g.value.message),1)):p("",!0),!m.value&&b.value?(o(),a("div",ge,[n("div",ke,[n("div",we,i(`@${b.value.user.login}`),1),n(ce,{parts:b.value.parts},null,8,["parts"])]),(o(!0),a(v,null,h(l.value,(e=>(o(),a("div",{key:`${e.id}`,class:"border-solid border-l pl-4 border-gray-300 mb-5"},[n("div",xe,i(`@${e.user.login}`),1),n(ce,{parts:e.parts},null,8,["parts"])])))),128)),n("div",null,[Ke,y(n("textarea",{onInput:P,"onUpdate:modelValue":s[1]||(s[1]=e=>k.value=e),class:"border-solid border-black border p-2 w-full h-40 text-sm"},null,544),[[d,k.value]]),w.value?(o(),a("div",Pe,[je,n("p",null,[Ae,n("a",{href:`${b.value.html_url}`,target:"_blank",class:"text-blue-800 hover:underline"},"here",8,["href"]),Re]),n("pre",Ce,i(w.value),1)])):p("",!0)])])):p("",!0)])):p("",!0)}};const Ie={class:"container mx-auto lg px-4 min-h-screen bg-white pb-10"},_e=n("h1",{class:"text-4xl pt-3 mb-1"},[n("img",{src:"/organization/key.svg",title:"key icon",style:{width:"1em",height:"1em",display:"inline-block"}}),u(" Dat Ecosystem")],-1),Me=n("sub",{class:"text-lg mb-4 block pl-11 text-gray-600"},"Private messaging with the Consortium.",-1),Oe=n("hr",null,null,-1),Se=n("div",{class:"bg-gray-100 p-2"},[n("p",{class:"mb-2"},[u(" The Consortium of the "),n("a",{href:"https://github.com/dat-ecosystem/organization",target:"_blank",class:"text-blue-800 hover:underline"},"Dat Ecosystem"),u(" can be contacted through "),n("a",{href:"https://github.com/dat-ecosystem/organization/issues"},"issues on the github"),u(". ")]),n("p",{class:"mb-2"},[u(" Sadly, github "),n("a",{href:"https://github.com/isaacs/github/issues/37#issuecomment-787800884",target:"_blank",class:"text-blue-800 hover:underline"},"doesn't support private messages"),u(", but with the help this website you can encrypt message to us! ")]),n("p",null,[u(" This webpage uses "),n("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto",target:"_blank",class:"text-blue-800 hover:underline"},"browser provided crypto"),u(" and nothing you enter here gets sent to a server! ")])],-1),Ue={class:"opacity-50 select-none"},ze=n("summary",null,"(Public Key of the Consortium)",-1),De={key:0,class:"border p-2 overflow-scroll text-sm select-all"},Le={key:0,class:"flex justify-right"},Be={class:"flex mt-4"},Je=n("div",{class:"flex-grow border-b-2"},null,-1);k({expose:[],setup(e){const t=c(Date.now()),s=c();function l(){confirm("Are you sure you want to reset this session? Did you copy your private key?")&&(t.value=Date.now(),r.mine=null)}s.value="first-issue";const r=g({mine:null,theirs:null});return function(e,t){try{K(e).then(t,(e=>{console.warn(e),t(null)}))}catch(s){console.warn(s),t(null)}}({alg:"RSA-OAEP-256",e:"AQAB",ext:!0,key_ops:["encrypt"],kty:"RSA",n:"rFjnlx9MtwsTE7TLOUaIDzLzZ8ESCDKhmUYxX6PVBsBbCG3ArwRCm191Yl8weBnoUUjIYO_xbHzxuWKwd4pkJzLjFe7sHat2-LtDKl6X5Cg84gxqwzXyRXC7LEC4ki8gb1Z0Gn733gfl5GKUjhIh_umJ2JtG6-FAAB79gKpI6M4jIFRvWTvVWtdPBmR_MDd7jrvPtg5IjPmo0YjVI3a7hy2RSuSEdUc9mKHBo9kCDRKjS5lP0rkciTLbehFTYd-y5qvIVFUAJG4bSewfBSsmf9gQzBdyLA5Oi8NfzyXnB6I7iCJ4VP_xiBL4oavsOc4SpHPo8EmpKyGDanyWNuPMJzHzSei5JjKnMqQGNiEwIamxzZLjnOKOyK4ctzfzHpWjXm-GZCWNMfqJf9hhXRkIh_pevWbR3c4g4ZcmrB_9JtTuoQ6YdGc3sZtR272i731L5waWHzngRwMq33QQDpoAKZgJ-yIMcB4oKowCHbzFfGIHOQqvO5SmP6cBWP_GSlEevIk8eJuCuGPCJkA9MTMRAi4kh738vFvYvFCEWfl7ov0oK9XXcAqYt_XoTEVhcEgbX4PkwLuVXWAC3VafMfLJH9tu19cvEN5cYq7k7DLJ5GtcN_YpaqGenY9JYq6cmpXuAlyRRPMED7pM4w__f3QRa9BhRciGV755W-Fgj3bD1O0"},(e=>r.theirs=e)),(e,u)=>(o(),a("div",Ie,[_e,Me,Oe,Se,n("details",Ue,[ze,b(r).theirs?(o(),a("pre",De,i(JSON.stringify(b(r).theirs.publicKey,null,2)),1)):p("",!0)]),b(r).mine?(o(),a("div",Le,[n("button",{tabindex:"0",onClick:l,class:"mt-2 focus:outline-none mr-2 bg-red-200 rounded-md px-2 py-1 hover:bg-red-400 focus:bg-red-300"}," Reset Everything ")])):p("",!0),(o(),a("div",{key:t.value},[n("div",Be,[(o(),a(v,null,h([{code:"first-issue",name:"First message"},{code:"second-issue",name:"New message"},{code:"follow-up",name:"Follow up"},{code:"decrypt",name:"Decrypt message"}],(e=>n("button",{key:e.code,tabindex:"0",onClick:()=>{s.value=e.code},class:"focus:outline-none p-2 border-b-2 "+(s.value===e.code?"border-yellow-400":"focus:border-grey-300 hover:border-yellow-200")},i(e.name),11,["onClick"]))),64)),Je]),n(W,{keys:b(r),first:"first-issue"===s.value},null,8,["keys","first"]),n("div",{class:["block",{hidden:"first-issue"!==s.value}]},[n(ee,{keys:b(r)},null,8,["keys"])],2),n("div",{class:["block",{hidden:"second-issue"!==s.value}]},[n(ee,{keys:b(r)},null,8,["keys"])],2),n("div",{class:["block",{hidden:"follow-up"!==s.value}]},[n(Ee,{repo:"dat-ecosystem/organization",keys:b(r)},null,8,["keys"])],2),n("div",{class:["block",{hidden:"decrypt"!==s.value}]},[n(ue,{keys:b(r)},null,8,["keys"])],2)]))]))}}).mount("#app");