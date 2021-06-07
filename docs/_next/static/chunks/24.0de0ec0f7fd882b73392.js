(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[24],{2380:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Se}});var n=a(5944),i=a(6265),r=a(9227),o=a(8937),l=a(9444),s=a(537),d=a(3640),c=a(3064);var u={config:{},init:function(e){e.tooltip((new c.RW).call)},view:{renderer:"canvas"}};s.z2l(l,d,u);var h=function(e){var t=e.dataSet,a=(e.options,t.gdc),n=t.gdp,i=s.Uk0().encodings("x"),r=s.x().yearmonth("date");return s.H7P(s.b59().data(a).encode(r,s.y().fieldQ("count").title("Number of perpetrators"),s.$_Y().fieldN("gender").scale({scheme:"set1"})).params(i).width(450).height(360),s.b59().data(n).encode(r,s.y().fieldQ("pctg").title("Percentage of perpetrators"),s.$_Y().fieldN("gender").scale({scheme:"set1"})).encode(r.scale({domain:i})).width(450).height(360)).config({mark:{opacity:.7},background:"#1f2937",axis:{titleFontSize:13,tickColor:"white",labelColor:"white",titleColor:"white",gridColor:"white",gridOpacity:.6,domainColor:"white"},legend:{titleFontSize:16,labelFontSize:14,labelColor:"white",titleColor:"white"},scale:{maxSize:1500},view:{stroke:null}})},g=s.dD$().fields("state");var p={config:{},init:function(e){e.tooltip((new c.RW).call)},view:{renderer:"canvas"}};s.z2l(l,d,p);var f=function(e){var t=e.dataSet,a=e.options;return s.H7P(function(e){var t=e.dataSet,a=e.options,n=t.pst,i=a.field,r=a.yearStart,o=a.yearEnd;return s.HG8().data(n).params(g).transform(s.hXT('datum["year"] >= '+r+' && datum["year"] <= '+o),s.KfZ('datum["underages_ratio"] * 100').as("underages_ratio")).encode(s.y().fieldN("state").sort(s.J69(i).order("descending")).title("State"),s.$_Y().mean(i),s.MdO([s.tvR("state"),s.J69(i)]),s.Ohi().if(g,s.S3k(1)).value(.2))}({dataSet:t,options:a}).height(500),function(e){var t=e.dataSet,a=e.options,n=a.field,i=a.yearStart,r=a.yearEnd,o=t.pst,l=t.usa;return s.aTG(o).layer(s._fs({fill:"#374151",stroke:"#fff",strokeWidth:1}).data(s.t_h(l).feature("states")).transform(s.P58("id").from(s.aTG(o).key("fip").fields("state"))).encode(s.MdO("state")),s.y$q({stroke:"#white"}).data(o).params(g).transform(s.hXT('datum["year"] >= '+i+' && datum["year"] <= '+r),s.tqE("state").aggregate(s.J69(n).as(n),s.J69("perpetrators_per_1M").as("perpetrators_per_1M"),s.J69("latitude").as("latitude"),s.J69("longitude").as("longitude")),s.KfZ('datum["underages_ratio"] * 100').as("underages_ratio")).encode(s.pqJ().fieldQ("latitude"),s.MSO().fieldQ("longitude"),s.$_Y().mean(n).legend({titleLineHeight:10}).scale({scheme:{mean_age:"goldred",underages_ratio:"yellowgreenblue",male_pctg:"tealblues",female_pctg:"redpurple"}[n]}).title({mean_age:"Perpetrators mean age",underages_ratio:["Percentage of underage/total","perpetrators"],male_pctg:["Percentage of ","male perpetrators"],female_pctg:["Percentage of ","female perpetrators"]}[n]),s.dpJ().mean("perpetrators_per_1M").title(["Perpetrators/","1M population/year"]),s.MdO([s.tvR("state"),s.xiU(n),s.xiU("perpetrators_per_1M")]),s.Ohi().if(g,s.S3k(1)).value(.2))).project(s.CJN("albersUsa"))}({dataSet:t,options:a}).height(500).width(720)).config({mark:{opacity:.9},background:"#1f2937",axis:{titleFontSize:16,tickColor:"white",labelColor:"white",titleColor:"white",gridColor:"white",domainColor:"white"},legend:{titleFontSize:14,labelFontSize:12,labelColor:"white",titleColor:"white",symbolFillColor:"#6b7280",symbolStrokeColor:"white"},scale:{maxSize:1500},view:{stroke:null}})};var m={config:{},init:function(e){e.tooltip((new c.RW).call)},view:{renderer:"canvas"}};s.z2l(l,d,m);var y=function(e){var t=e.dataSet,a=e.options,n=t.p,i=(a.yearStart,a.yearEnd,a.color),r=s.lg9().encodings(["x","y"]),o=s.rmI({color:"white"}).data(n).transform(s.hXT('datum["year"] >= 2014 && datum["age"] <= 100')).encode(s.x().fieldO("year"),s.y().mean("age"),s.$_Y().value("#91faef"),s.Ohi().if(r,s.S3k(.6)).value(.2)).params(r),l=s.fpH({opacity:.9}).data(n.derive({label:function(e){return"Mean Age"}})).transform(s.hXT('datum["year"] >= 2014 && datum["age"] <= 100')).encode(s.x().fieldO("year"),s.y().mean("age"),s.$_Y().fieldN("label").scale({scheme:"set3"})).params(r),d=s.fpH().data(n.derive({label:function(e){return"Median Age"}})).transform(s.hXT('datum["year"] >= 2014 && datum["age"] <= 100')).encode(s.x().fieldO("year"),s.y().median("age"),s.$_Y().fieldN("label").scale({scheme:"set3"})),c=s.EY_(o,d,l).width(480).height(480),u=s.ZtJ().data(n.filter((function(e){return e.age<=100}))).transform(s.hXT(r)).encode(s.x().fieldQ("age").scale({domain:[0,100]}).bin({step:5}).title("Age"),s.y().count().scale({domain:[0,28e3]}).title("Number of Perpetrators"),s.$_Y().value(i)).width(480).height(480);return s.H7P(c,u).config({mark:{opacity:.8},background:"#1f2937",axis:{titleFontSize:13,tickColor:"white",labelColor:"white",titleColor:"white",gridOpacity:.6,gridColor:"white",domainColor:"white"},legend:{titleFontSize:16,labelFontSize:14,labelColor:"white",titleColor:"white"},scale:{maxSize:1500},view:{stroke:null}})};var w={config:{},init:function(e){e.tooltip((new c.RW).call)},view:{renderer:"canvas"}};s.z2l(l,d,w);var v=function(e){var t=e.dataSet,a=(e.options,t.gstm),n=s.dD$().fields("gun").bind("legend"),i=s.Uk0().encodings("x");return s.H7P(s.b59({opacity:.7}).data(a).params(n,i).transform(s.hXT('datum["year"] >= 2014')).encode(s.x().yearmonth("date"),s.y().sum("count_guns").title("Number of guns"),s.$_Y().fieldN("gun").scale({scheme:"tableau20"}).title("Gun type"),s.Ohi().if(n,s.S3k(.9)).value(.2)).width(600).height(400),s.fpH({opacity:.8}).data(a).params(n).transform(s.hXT('datum["year"] >= 2014')).encode(s.x().yearmonth("date").scale({domain:i}),s.y().fieldQ("gun_percentage"),s.$_Y().fieldN("gun"),s.Ohi().if(n,s.S3k(.9)).value(.05)).width(600).height(400)).config({mark:{opacity:.9},background:"#1f2937",axis:{titleFontSize:13,tickColor:"white",labelColor:"white",titleColor:"white",gridColor:"white",gridOpacity:.4,domainColor:"white"},legend:{titleFontSize:16,labelFontSize:14,labelColor:"white",titleColor:"white"},scale:{maxSize:1500},view:{stroke:null}})},b=s.dD$().fields("gun");var S={config:{},init:function(e){e.tooltip((new c.RW).call)},view:{renderer:"canvas"}};s.z2l(l,d,S);var k=function(e){var t=e.dataSet,a=e.options;return s.H7P(function(e){var t=e.dataSet,a=e.options,n=a.yearStart,i=a.yearEnd,r=t.gstm;return s.EY_(s.ZtJ({opacity:.8}).params(b).data(r).transform(s.hXT("datum['gun'] != 'Unknown' && datum['year'] >= "+n+" && datum['year'] <= "+i)).encode(s.y().fieldN("gun").sort(s.J69("gun_percentage")),s.x().mean("gun_percentage").title("Percentage over total guns"),s.$_Y().fieldN("gun").scale({scheme:"category20b"}).legend(!1).title("Gun type"),s.Ohi().if(b,s.S3k(1)).value(.2)),s.PdE({opacity:.75,color:"white",dx:20}).data(r).transform(s.hXT("datum['gun'] != 'Unknown' && datum['year'] >= "+n+" && datum['year'] <= "+i)).encode(s.fLW().mean("gun_percentage").format(".2f"),s.y().fieldN("gun").sort(s.J69("gun_percentage")),s.x().mean("gun_percentage").title("Percentage over total guns")))}({dataSet:t,options:a}).width(400),function(e){var t=e.dataSet,a=e.options,n=a.yearStart,i=a.yearEnd,r=t.gstm;return s.EY_(s.ZtJ({opacity:.8}).data(r).params(b).transform(s.hXT("datum['gun'] != 'Unknown' && datum['year'] >= "+n+" && datum['year'] <= "+i),s.KfZ('datum["n_killed"]/ (datum["n_injured"] + datum["n_killed"])').as("kill_rate")).encode(s.y().fieldN("gun").sort(s.J69("kill_rate")),s.x().mean("kill_rate").title("Lethality (kills/total victims)"),s.$_Y().fieldN("gun").scale({scheme:"category20b"}).legend(!1).title("Gun type"),s.Ohi().if(b,s.S3k(1)).value(.2)),s.PdE({opacity:.75,color:"white",dx:20}).data(r).transform(s.hXT("datum['gun'] != 'Unknown' && datum['year'] >= "+n+" && datum['year'] <= "+i),s.KfZ('datum["n_killed"]/ (datum["n_injured"] + datum["n_killed"])').as("kill_rate")).encode(s.fLW().mean("kill_rate").format(".2f"),s.y().fieldN("gun").sort(s.J69("kill_rate")),s.x().mean("kill_rate")))}({dataSet:t,options:a}).width(400)).config({mark:{opacity:.9},background:"#1f2937",axis:{titleFontSize:13,tickColor:"white",labelColor:"white",titleColor:"white",gridColor:"white",gridOpacity:.4,domainColor:"white"},legend:{titleFontSize:16,labelFontSize:14,labelColor:"white",titleColor:"white"},scale:{maxSize:1500},view:{stroke:null}})},x=s.dD$().fields("state");var Z={config:{},init:function(e){e.tooltip((new c.RW).call)},view:{renderer:"canvas"}};s.z2l(l,d,Z);var _=function(e){var t=e.dataSet,a=e.options,n=t.gsty,i=t.usa,r=a.gun,o=a.yearStart,l=a.yearEnd;return s.H7P(function(e,t,a,n){return s.HG8().data(e).params(x).transform(s.hXT('datum["gun"] == "'+t+'" && datum["year"] >= '+a+' && datum["year"] <= '+n),s.tqE("state").aggregate(s.J69("latitude").as("latitude"),s.J69("longitude").as("longitude"),s.J69("gun_percentage").as("Percentage of "+t),s.J69("total_guns_per_1M").as("Total guns/1M population/year"))).encode(s.y().fieldN("state").sort(s.J69("Percentage of "+t).order("descending")).title("State"),s.$_Y().fieldQ("Percentage of "+t),s.MdO([s.tvR("state"),s.xiU("Percentage of "+t),s.xiU("Total guns/1M population/year")]),s.Ohi().if(x,s.S3k(1)).value(.2))}(n,r,o,l).height(500),function(e,t,a,n,i){return s.EY_(s._fs({fill:"#374151",stroke:"#fff",strokeWidth:1}).data(s.t_h(i).feature("states")).transform(s.P58("id").from(s.aTG(e).key("fip").fields("state"))).encode(s.MdO("state")),s.y$q({stroke:"white",strokeWidth:2}).data(e).params(x).transform(s.hXT('datum["gun"] == "'+t+'" && datum["year"] >= '+a+' && datum["year"] <= '+n),s.tqE("state").aggregate(s.J69("latitude").as("latitude"),s.J69("longitude").as("longitude"),s.J69("gun_percentage").as("Percentage of "+t),s.J69("total_guns_per_1M").as("Total guns/1M population/year"))).encode(s.pqJ().fieldQ("latitude"),s.MSO().fieldQ("longitude"),s.$_Y().fieldQ("Percentage of "+t).scale({scheme:"redpurple",clamp:!0}),s.dpJ().fieldQ("Total guns/1M population/year").title(["Total guns/","1M population/year"]),s.MdO([s.tvR("state"),s.xiU("Percentage of "+t),s.xiU("Total guns/1M population/year")]),s.Ohi().if(x,s.S3k(1)).value(.2))).project(s.CJN("albersUsa"))}(n,r,o,l,i).height(500).width(720)).config({mark:{opacity:.9},background:"#1f2937",axis:{titleFontSize:16,tickColor:"white",labelColor:"white",titleColor:"white",gridColor:"white",domainColor:"white"},legend:{titleFontSize:14,labelFontSize:12,labelColor:"white",titleColor:"white",symbolFillColor:"#6b7280",symbolStrokeColor:"white"},scale:{maxSize:1500},view:{stroke:null}})},C=function(e){e.dataSet;return{$schema:"https://vega.github.io/schema/vega/v5.json",description:"A word cloud visualization depicting Vega research paper abstracts.",width:1280,height:720,padding:0,data:[{name:"table",values:e.options.dataWord}],scales:[{name:"color",type:"ordinal",domain:{data:"table",field:"text"},range:["red","orange","blue"]}],marks:[{type:"text",from:{data:"table"},encode:{enter:{text:{field:"text"},align:{value:"center"},baseline:{value:"alphabetic"},fill:{scale:"color",field:"text"}},update:{fillOpacity:{value:1}},hover:{fillOpacity:{value:.5}}},transform:[{type:"wordcloud",size:[1280,720],text:{field:"text"},rotate:{field:"datum.angle"},font:"Helvetica Neue, Arial",fontSize:{field:"datum.count"},fontWeight:{field:"datum.weight"},fontSizeRange:[28,102],padding:2}]}]}},z=s.dD$().fields("incident_id");var O={config:{},init:function(e){e.tooltip((new c.RW).call)},view:{renderer:"canvas"}};s.z2l(l,d,O);var M=function(e){var t=e.dataSet,a=e.options;return s.hPv(function(e){var t=e.dataSet,a=(e.options,t.wa),n=t.polarWA;return s.EY_(s._fs({fill:"#374151",stroke:"#fff",strokeWidth:1}).data(s.t_h(a).feature("counties")),s.y$q({stroke:null}).data(n).params(z).transform(s.hXT("datum['latitude'] != 0 && datum['longitude'] != 0"),s.KfZ("datum['n_killed'] + datum['n_injured']").as("num_victims"),s.KfZ("datum['comp']").as("sentimentality value")).encode(s.pqJ().fieldQ("latitude"),s.MSO().fieldQ("longitude"),s.$_Y().fieldQ("sentimentality value").title("Sentimentality value").legend({titleLineHeight:10}).scale({scheme:"redblue"}),s.dpJ().fieldQ("num_victims").title(["Number of Victims"]),s.MdO([s.tvR("city_or_county"),s.xiU("sentimentality value"),s.xiU("latitude"),s.xiU("longitude")]),s.Ohi().if(z,s.S3k(1)).value(.1))).project(s.CJN())}({dataSet:t,options:a}).height(720).width(1200)).config({mark:{opacity:.9},background:"#1f2937",axis:{titleFontSize:16,tickColor:"white",labelColor:"white",titleColor:"white",gridColor:"white",domainColor:"white"},legend:{titleFontSize:14,labelFontSize:12,labelColor:"white",titleColor:"white",symbolFillColor:"#6b7280",symbolStrokeColor:"white"},scale:{maxSize:300},view:{stroke:null}})};var T={config:{},init:function(e){e.tooltip((new c.RW).call)},view:{renderer:"canvas"}};s.z2l(l,d,T);var F=function(e){var t=e.dataSet,a=e.options;return s.H7P(function(e){var t=e.dataSet,a=(e.options,t.ny),n=t.polarNY;return s.EY_(s._fs({fill:"#374151",stroke:"#fff",strokeWidth:1}).data(s.t_h(a).feature("counties")),s.y$q({stroke:null}).data(n).transform(s.hXT("datum['latitude'] != '0' && datum['longitude'] != '0'"),s.KfZ("datum['n_killed'] + datum['n_injured']").as("num_victims"),s.KfZ("datum['comp']").as("sentimentality value")).encode(s.pqJ().fieldQ("latitude"),s.MSO().fieldQ("longitude"),s.$_Y().fieldQ("sentimentality value").title("Sentimentality value").legend({titleLineHeight:10}).scale({scheme:"redblue"}),s.dpJ().fieldQ("num_victims").title(["Number of Victims"]),s.MdO([s.tvR("city_or_county"),s.xiU("sentimentality value"),s.xiU("latitude"),s.xiU("longitude")]))).project(s.CJN())}({dataSet:t,options:a}).height(720).width(1200)).config({mark:{opacity:.9},background:"#1f2937",axis:{titleFontSize:16,tickColor:"white",labelColor:"white",titleColor:"white",gridColor:"white",domainColor:"white"},legend:{titleFontSize:14,labelFontSize:12,labelColor:"white",titleColor:"white",symbolFillColor:"#6b7280",symbolStrokeColor:"white"},scale:{maxSize:300},view:{stroke:null}})},P=a(5152),j=a(8769),N=a(8418),U=a(7294),W=a(3280),J=["mean_age","underages_ratio"],X=["16 gauge","44 Mag","25 Auto","Handgun","32 Auto","40 SW","10mm","Shotgun","12 gauge","38 Spl","20 gauge","380 Auto","357 Mag","308 Win","28 gauge","30-06 Spr","22 LR","410 gauge","45 Auto","30-30 Win","Rifle","300 Win","Other","9mm"],E=a(131),Y=a(3525),A=a(1950),q=function(e){var t=e.func,a=(e.name,e.width,e.height,e.options),i=(0,U.useRef)(),r=(0,A.Z)((function(e){return e.dataset})),o={config:{},init:function(e){e.tooltip((new c.RW).call)},view:{renderer:"canvas"}};return s.z2l(l,d,o),(0,U.useEffect)((function(){try{var e=t({dataSet:r,options:a});(0,Y.ZP)(i.current,e)}catch(n){console.log(n)}return function(){i.current&&(i.current.innerHTML="")}}),[i.current,a]),(0,n.tZ)("div",{ref:i,tw:"rounded-2xl"})};function $(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?$(Object(a),!0).forEach((function(t){(0,i.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):$(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var H=j.Z.Option,R=N.Z.Search,L={visible:{opacity:1,scale:1},hidden:{opacity:0}},Q={name:"sj17uo",styles:"display:flex;flex-direction:column;justify-content:center;align-items:center;width:75%"},G=function(e){var t=(0,E.YD)({threshold:.4,triggerOnce:!1}),a=(0,r.Z)(t,3),i=a[0],o=a[1];a[2];return(0,n.tZ)(W.E.section,{css:Q,animate:o?"visible":"hidden",variants:L,ref:i,transition:{duration:.2,ease:"easeIn"},children:e.children})},D=(Array.from(Array(6).keys()).map((function(e){return 2013+e})).reduce((function(e,t){return B(B({},e),{},(0,i.Z)({},t,{style:{color:"#f9fafb"},label:(0,n.tZ)("strong",{children:t})}))}),{}),(0,P.default)((function(){return a.e(808).then(a.bind(a,4808))}),{ssr:!1,loadableGenerated:{webpack:function(){return[4808]},modules:["../components/Vis.js -> ./VegaComp"]}})),V=(0,o.Z)("div",{target:"e1coz5px4"})({name:"15hc2t1",styles:"display:flex;flex-direction:column;padding:1rem;justify-content:space-around;align-items:center;margin-top:1.5rem;margin-bottom:1.5rem"}),K=(0,o.Z)("h1",{target:"e1coz5px3"})({name:"16vgk09",styles:'font-weight:600;font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-size:1.5rem;line-height:2rem;--tw-text-opacity:1;color:rgba(249, 250, 251, var(--tw-text-opacity))'}),I=(0,o.Z)("p",{target:"e1coz5px2"})({name:"xrmfwl",styles:"font-size:1rem;line-height:1.5rem;--tw-text-opacity:1;color:rgba(249, 250, 251, var(--tw-text-opacity));width:100%;padding:1.5rem;text-align:justify"}),ee=(0,o.Z)("p",{target:"e1coz5px1"})({name:"91r1nw",styles:"display:flex;font-size:1rem;line-height:1.5rem;font-style:italic;--tw-text-opacity:1;color:rgba(253, 230, 138, var(--tw-text-opacity));width:100%;padding:1.5rem;text-align:justify"}),te=(0,o.Z)("div",{target:"e1coz5px0"})({name:"1jzwnv4",styles:"display:flex;flex-direction:row;align-items:center;justify-content:space-around;width:100%"}),ae={name:"penxpt",styles:"display:flex;flex-direction:column;justify-content:center;align-items:center;row-gap:2rem;--tw-bg-opacity:1;background-color:rgba(31, 41, 55, var(--tw-bg-opacity));width:100vw"},ne={name:"1wtq0is",styles:"row-gap:1rem"},ie={name:"1vq5ps5",styles:"display:flex;justify-content:center;align-items:center;font-size:1.125rem;line-height:1.75rem;flex-direction:column;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));height:16rem;width:100vw"},re={name:"1qw7ncn",styles:"font-size:4.5rem;line-height:1"},oe={name:"18b9jja",styles:"font-size:1.125rem;line-height:1.75rem"},le={name:"nqx9k7",styles:"font-size:1rem;line-height:1.5rem"},se={name:"xeeael",styles:"padding-top:8rem;padding-bottom:8rem;padding-left:5rem;padding-right:5rem;--tw-bg-opacity:1;background-color:rgba(55, 65, 81, var(--tw-bg-opacity))"},de={name:"16wutu8",styles:'font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-size:1.5rem;line-height:2rem;font-weight:700;--tw-text-opacity:1;color:rgba(249, 250, 251, var(--tw-text-opacity))'},ce={name:"1sh0k5y",styles:"font-size:1.125rem;line-height:1.75rem;--tw-text-opacity:1;color:rgba(249, 250, 251, var(--tw-text-opacity))"},ue={name:"1d3w5wq",styles:"width:100%"},he={name:"1rxqwkn",styles:"display:flex;column-gap:0.5rem;justify-content:space-around;align-items:center;width:100%"},ge={name:"1d3w5wq",styles:"width:100%"},pe={name:"1rxqwkn",styles:"display:flex;column-gap:0.5rem;justify-content:space-around;align-items:center;width:100%"},fe={name:"1wbll7q",styles:"text-decoration:underline"},me={name:"1wbll7q",styles:"text-decoration:underline"},ye={name:"1wbll7q",styles:"text-decoration:underline"},we={name:"1aaz120",styles:"padding-top:3rem;padding-bottom:3rem;padding-left:5rem;padding-right:5rem;--tw-bg-opacity:1;background-color:rgba(55, 65, 81, var(--tw-bg-opacity));width:100%"},ve={name:"16wutu8",styles:'font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-size:1.5rem;line-height:2rem;font-weight:700;--tw-text-opacity:1;color:rgba(249, 250, 251, var(--tw-text-opacity))'},be={name:"jph64n",styles:"font-size:1.125rem;line-height:1.75rem;--tw-text-opacity:1;color:rgba(249, 250, 251, var(--tw-text-opacity));text-decoration:underline"},Se=function(){var e=(0,U.useState)(2018),t=e[0],a=(e[1],(0,U.useState)(2018)),i=a[0],r=(a[1],(0,U.useState)(2018)),o=r[0],l=(r[1],(0,U.useState)("WA")),s=(l[0],l[1],(0,U.useState)("WA")),d=(s[0],s[1],(0,U.useState)("gun")),c=d[0],u=d[1],g=(0,U.useState)(!0),p=g[0],m=g[1],w=(0,U.useState)("underages_ratio"),b=w[0],S=w[1],x=(0,U.useState)("Handgun"),Z=x[0],z=x[1],O=X,T=J,P=(0,U.useState)([{text:"loading",value:100,weight:200}]),N=P[0],W=P[1];return(0,U.useEffect)((function(){m(!0),fetch("https://advise-pressing-dolls-suit.trycloudflare.com/api/getWordCloud",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:c})}).then((function(e){return e.json()})).then((function(e){m(!1),console.log("response: ",e),W(e)})).catch((function(e){console.error(e)}))}),[c]),(0,n.BX)("main",{css:ae,children:[(0,n.tZ)("section",{css:ne,children:(0,n.BX)("p",{css:ie,children:[(0,n.tZ)("span",{css:re,children:"US Gun Violence"}),(0,n.tZ)("span",{}),(0,n.tZ)("span",{css:oe,children:"Interactive data visualizations about gun violence in US"}),(0,n.tZ)("span",{css:le,children:"By Varich Boonsanong, Laphon Premcharoen, Phoenix Yi"})]})}),(0,n.BX)("section",{css:se,children:[(0,n.tZ)("h1",{css:de,children:"Introduction"}),(0,n.tZ)("p",{css:ce,children:"There are a very few countries in the word where citizens have the right to bear arms. US is one of them where their citizens own guns nearly half of all civilian guns in the world. As a result, gun incidents are alarming in US. This project aims to study the trends of gun violence in US and explore any potential concerns regarding civilian-owned guns in US. The dataset used in this project contains records of gun incidents in US from January 2013 to March 2018 provided by Gun Violence Archive. We aim to explore the patterns lie in the demographics of gun perpetrators including age and gender. Moreover, we also want to use a geospatial map to address gun control problems by states. Finally, we will also explore which gun types are most used and most associated with hihger lethality."})]}),(0,n.BX)(G,{children:[(0,n.tZ)(K,{children:"Male and Female perpetrators over time"}),(0,n.tZ)(te,{children:(0,n.tZ)(I,{children:"To understand the characteristics and patterns of gun perpetrators across the years, we first plotted a stacked area plot of the number and proportion of perpetrators of the two genders from 2014 to 2018."})}),(0,n.tZ)(te,{children:(0,n.tZ)(D,{func:h,name:"perpetratorsByGender"})}),(0,n.tZ)(ee,{children:"Drag over the area chart to select a smaller time frame."}),(0,n.tZ)(te,{children:(0,n.tZ)(I,{children:"Overall, the total number of gun violence incidents did not change very much in 5 years. The number of perpetrators from April 2014 to October 2014 was relatively higher. From the percentage graph, we can see that male perpetrators are accounted for a much greater portion compared to female perpetrators at about 10 times higher."})})]}),(0,n.BX)(G,{children:[(0,n.tZ)(K,{children:"Age distribution of perpetrators"}),(0,n.tZ)(te,{children:(0,n.tZ)(V,{children:(0,n.tZ)(D,{func:y,options:(0,U.useMemo)((function(){return{yearStart:2014,yearEnd:2018,color:"teal"}}),[t]),name:"ageDistribution"})})}),(0,n.tZ)(ee,{children:"Click on a boxplot to display the distribution accordingly."}),(0,n.tZ)(te,{children:(0,n.tZ)(I,{children:"Besides the genders, the next important feature of perpetrators to observe is age. The boxplots show how the ages of perpetrators were distributed in each year. The distribution of ages stayed mostly the same throughout the years as mean and median ages of perpetrators did not vary much. The higher mean than the median indicates that the distribution skews left towards younger ages. The number of perpetrators is highest between the ages of 20 - 25. The distribution of each looked pretty much the same except for 2018, because the data is only available for the early months."})})]}),(0,n.BX)(G,{children:[(0,n.tZ)(K,{children:"Underage ratio and mean age of perpetrators across US"}),(0,n.tZ)(te,{children:(0,n.tZ)(I,{children:"Young perpetrators, especially underage ones, are a big concern considering guns falling into young people\u2019s hands. Here, we want to see the number of underage perpetrators in different states and see which states in particular have gun control problems to address. As a result, we plotted a geospatial map showing the number of underage perpetrators in each US state."})}),(0,n.BX)(V,{css:ue,children:[(0,n.tZ)("div",{css:he,children:(0,n.tZ)(j.Z,{showSearch:!0,style:{width:200,fill:"#6b7280"},placeholder:"select feature",optionFilterProp:"children",onChange:function(e){return S(e)},filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:T.map((function(e){return(0,n.tZ)(H,{value:e,children:e.replaceAll("_"," ").replaceAll("pctg","percentage")},e)}))})}),(0,n.tZ)(D,{func:f,name:"perpetratorMapFull",options:(0,U.useMemo)((function(){return{field:b,yearStart:i,yearEnd:i}}),[b,i])})]}),(0,n.tZ)(ee,{children:"Click to highlight a state and select feature."}),(0,n.tZ)(te,{children:(0,n.tZ)(I,{children:"From the map, a pattern is recognizable: the south-eastern states tend to have higher percentages of underage perpetrators. South eastern states also had higher numbers of perpetrators per population."})}),(0,n.tZ)(te,{children:(0,n.tZ)(I,{children:"In the next section, we will explore the gun types used in gun violence incidents, to analyze their distributions and lethality."})})]}),(0,n.BX)(G,{children:[(0,n.tZ)(K,{children:"Number of guns used over time"}),(0,n.tZ)(te,{children:(0,n.tZ)(V,{children:(0,n.tZ)(D,{func:v,name:"gunArea"})})}),(0,n.tZ)(ee,{children:"Click on the legend to highlight specific gun types to compare or drag over the area chart to explore a smaller time frame."}),(0,n.tZ)(te,{children:(0,n.tZ)(I,{children:"Our next part includes finding insights from different gun types used in gun incidents. By plotting a number and percentage of each gun type over time, we could see which types of guns are most commonly used by the perpetrators. The stacked area plot on the left had a huge gap in November 2014, it was caused by missing data. From two graphs, we could see that handguns are used most often among all gun types and the percentage of handguns increased rapidly in 2015. Other frequently used gun types included 9mm, rifle and shotgun."})})]}),(0,n.BX)(G,{children:[(0,n.tZ)(K,{children:"Percentage of guns used and lethality"}),(0,n.tZ)(V,{children:(0,n.tZ)(D,{func:k,name:"numGunByTypes",options:(0,U.useMemo)((function(){return{yearStart:2014,yearEnd:2018}}))})}),(0,n.tZ)(ee,{children:"Click a bar to highlight a specific gun type and select gun type."}),(0,n.tZ)(I,{children:"This visualization has an all-year summary of how frequent each type of gun was used. The trend is similar to what we saw in the previous visualization. However, the lethality of each type of gun (specified by the ratio of total kill count over the total number of victims) varies differently. We can see how handguns as the most common ones are not that lethal compared to long rifles while shotguns tend to be the least lethal."})]}),(0,n.BX)(G,{children:[(0,n.tZ)(K,{children:"Percentage of each gun type across US"}),(0,n.BX)(V,{css:ge,children:[(0,n.tZ)("div",{css:pe,children:(0,n.tZ)(j.Z,{showSearch:!0,style:{width:200},placeholder:"Select guns",optionFilterProp:"children",onChange:function(e){return z(e)},filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:O.map((function(e){return(0,n.tZ)(H,{value:e,children:e})}))})}),(0,n.tZ)(D,{func:_,name:"gunMapFull",options:(0,U.useMemo)((function(){return{gun:Z,yearStart:o,yearEnd:o}}),[Z,o])})]}),(0,n.tZ)(ee,{children:"Click to highlight a state."}),(0,n.tZ)(te,{children:(0,n.tZ)(I,{children:"Next, we plotted a geospatial map of the US showing how frequent each type of gun is used in each state to see any patterns. Generally, west states had higher rates of guns used. Following the lethality plot in the previous visualization, we can point out states that have more highly lethal gun types. For example, we could see Alaska having the most frequent use of a 12 gauge gun which is gun with almost 0.5 lethality. Using the given information we could infer high risk states to a specific gun type and future trends of gun usage specific to areas."})}),(0,n.tZ)(te,{children:(0,n.tZ)(I,{children:"In conclusion, these visualizations will be useful for authorities of different states to figure out gun control problems that should be further investigated. This includes highly lethal guns and underage perpetrators. For instance, by knowing the gun types distributed geographically in the US we could know which gun types are commonly used by perpetrators in different areas so the authorities can investigate and enforce proper gun controls specific to a different area. We hope these visualizations will be useful for those who want to learn the overall picture of gun violence in US and those who want to do further research on gun violence."})})]}),(0,n.BX)(G,{children:[(0,n.tZ)(K,{children:"Extra: Sentimentality Analysis of Tweets about Gun Violence in US."}),(0,n.BX)(I,{children:["In addition to gun violence data retrieved from Gun Violence Archive, we have pulled data of tweets about gun incidents from Twitter API as an experiment. Next, we performed sentimentality analysis which evaluates negativity and positivity of language used in each tweet. For the sentimentality analysis we used the library"," ",(0,n.tZ)("span",{children:(0,n.tZ)("a",{css:fe,href:"https://nltk.org",children:"NLTK (Natural Language Toolkit)"})}),"with the model",(0,n.tZ)("span",{children:(0,n.tZ)("a",{css:me,href:"https://github.com/cjhutto/vaderSentiment",children:"Vader"})}),(0,n.tZ)("span",{children:(0,n.tZ)("a",{css:ye,href:"http://comp.social.gatech.edu/papers/icwsm14.vader.hutto.pdf",children:"(Link to the paper)"})}),"implemented. This part of visualizations is only intended to be an experiment. We want to see possibility of visualizations we can create out of the sentimentality analysis we have performed."]}),(0,n.tZ)(I,{children:"For the first visualization, we created a word cloud that dynamically pulls real-time tweets data according to the word input. The words displayed are the top words contained in the tweets that are associated with the input word. The blue, orange and red colors incicate a positive, neutral and negative word respectively according to the model. We also filter out stock words (articles, pronouns etc.) prior to this visualization."}),(0,n.tZ)(R,{placeholder:c,loading:p,onSearch:function(e){u(e)}}),(0,n.tZ)(q,{func:C,name:"wordCloud",options:(0,U.useMemo)((function(){return{dataWord:N}}),[N])}),(0,n.BX)(I,{children:["Here is the word cloud of 1000 most recent tweet from Twitter related to keyword: ",(0,n.tZ)("span",{children:c})]})]}),(0,n.BX)(G,{children:[(0,n.tZ)(I,{children:"With the position and time of each gun incident from the previous dataset we have, we were able to scope down and scrape tweets around the same location and time (7 days before and after the incident) as the gun incident. For this visualization, we scope down only to some major states in US: New York and Washington. We plot the location of each gun incident on each state map. The blue, orange and red colors indicate sentimentality of tweets around the same time and location of each gun incident."}),(0,n.tZ)(I,{children:"Washington State:"}),(0,n.tZ)(D,{func:M,name:"tweetmapWA"}),(0,n.tZ)(I,{children:"New York State:"}),(0,n.tZ)(D,{func:F,name:"tweetmapNY"})]}),(0,n.BX)("section",{css:we,children:[(0,n.tZ)("h1",{css:ve,children:"Data Used"}),(0,n.tZ)("ul",{css:be,children:(0,n.tZ)("li",{children:(0,n.tZ)("a",{href:"https://www.kaggle.com/jameslko/gun-violence-data",children:"Gun Violence Data from Kaggle"})})})]})]})}}}]);