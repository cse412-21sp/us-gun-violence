(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[987],{987:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return fe}});var r=n(5944),a=n(9227),i=n(6265),o=n(8937),l=n(9444),s=n(537),c=n(3640),d=n(3064),u=n(5779);var p={config:{},init:function(e){e.tooltip((new d.RW).call)},view:{renderer:"canvas"}};s.z2l(l,c,p);var h=function(e){var t=e.dataSet,n=(e.options,t.p),r=s.Uk0().encodings("x"),a=s.x().yearmonth("date"),i=n.derive({month:function(e){return u.op.utcmonth(e.date)},is_male:function(e){return"Male"===e.gender},is_female:function(e){return"Female"===e.gender}}).groupby(["month","year"]).rollup({female_pctg:function(e){return 100*u.op.sum(e.is_female)/(u.op.sum(e.is_female)+u.op.sum(e.is_male))},male_pctg:function(e){return 100*u.op.sum(e.is_male)/(u.op.sum(e.is_female)+u.op.sum(e.is_male))},date:function(e){return u.op.min(u.op.utcdatetime(e.date))}}).derive({date:function(e){return u.op.datetime(e.year,e.month)}}).rename({male_pctg:"male",female_pctg:"female"}).fold(["female","male"]).rename({key:"gender"}),o=n.derive({month:function(e){return u.op.utcmonth(e.date)},is_male:function(e){return"Male"===e.gender},is_female:function(e){return"Female"===e.gender}}).groupby(["month","year"]).rollup({female_count:function(e){return u.op.sum(e.is_female)},male_count:function(e){return u.op.sum(e.is_male)},date:function(e){return u.op.min(u.op.utcdatetime(e.date))}}).derive({date:function(e){return u.op.datetime(e.year,e.month)}}).rename({male_count:"male",female_count:"female"}).fold(["female","male"]).rename({key:"gender"});return s.H7P(s.b59().data(o).encode(a,s.y().fieldQ("value").title("Number of perpetrators"),s.$_Y().fieldN("gender").scale({scheme:"set1"})).params(r).width(450).height(360),s.b59().data(i).encode(a,s.y().fieldQ("value").title("Percentage of perpetrators"),s.$_Y().fieldN("gender").scale({scheme:"set1"})).encode(a.scale({domain:r})).width(450).height(360)).config({mark:{opacity:.7},background:"#1f2937",axis:{tickColor:"white",labelColor:"white",titleColor:"white",gridColor:"white",gridOpacity:.6,domainColor:"white"},legend:{labelColor:"white",titleColor:"white"},scale:{maxSize:1500},view:{stroke:null}})};var g={config:{},init:function(e){e.tooltip((new d.RW).call)},view:{renderer:"canvas"}};s.z2l(l,c,g);var f=function(e){var t=e.dataSet,n=e.options;return s.H7P(function(e){var t=e.dataSet,n=e.options,r=t.pst,a=n.field,i=n.yearStart,o=n.yearEnd;return s.HG8().data(r).transform(s.hXT('datum["year"] >= '+i+' && datum["year"] <= '+o)).encode(s.y().fieldN("state").sort(s.J69(a).order("descending")).title("State"),s.$_Y().mean(a),s.MdO([s.tvR("state"),s.J69(a)]))}({dataSet:t,options:n}).height(500),function(e){var t=e.dataSet,n=e.options,r=n.field,a=n.yearStart,i=n.yearEnd,o=t.pst,l=t.usa;return s.aTG(o).layer(s._fs({fill:"#374151",stroke:"#fff",strokeWidth:1}).data(s.t_h(l).feature("states")).transform(s.P58("id").from(s.aTG(o).key("fip").fields("state"))).encode(s.MdO("state")),s.y$q({stroke:"#white"}).data(o).transform(s.hXT('datum["year"] >= '+a+' && datum["year"] <= '+i),s.tqE("state").aggregate(s.J69(r).as(r),s.J69("perpetrators_per_1M").as("perpetrators_per_1M"),s.J69("latitude").as("latitude"),s.J69("longitude").as("longitude"))).encode(s.pqJ().fieldQ("latitude"),s.MSO().fieldQ("longitude"),s.$_Y().mean(r).legend({titleLineHeight:10}).scale({scheme:{mean_age:"goldred",underages_ratio:"yellowgreenblue",male_pctg:"tealblues",female_pctg:"redpurple"}[r]}).title({mean_age:"Perpetrators mean age",underages_ratio:["Ratio of underage/total","perpetrators"],male_pctg:["Percentage of ","male perpetrators"],female_pctg:["Percentage of ","female perpetrators"]}[r]),s.dpJ().mean("perpetrators_per_1M").title(["Perpetrators/","1M population/year"]),s.MdO([s.tvR("state"),s.xiU(r),s.xiU("perpetrators_per_1M")]))).project(s.CJN("albersUsa"))}({dataSet:t,options:n}).height(500).width(720)).config({mark:{opacity:.9},background:"#1f2937",axis:{tickColor:"white",labelColor:"white",titleColor:"white",gridColor:"white",domainColor:"white"},legend:{labelColor:"white",titleColor:"white",symbolFillColor:"#6b7280",symbolStrokeColor:"white"},scale:{maxSize:1500},view:{stroke:null}})};var m={config:{},init:function(e){e.tooltip((new d.RW).call)},view:{renderer:"canvas"}};s.z2l(l,c,m);var y=function(e){var t=e.dataSet,n=e.options,r=t.p,a=n.yearStart,i=n.yearEnd,o=n.color;return s.ZtJ().data(r).transform(s.hXT('datum["year"] >= '+a+' && datum["year"] <= '+i)).encode(s.x().fieldQ("age").scale({domain:[0,100]}).bin({step:5}),s.y().count().title("Number of Perpetrators"),s.$_Y().value(o)).width(720).height(360).config({mark:{opacity:.8},background:"#1f2937",axis:{tickColor:"white",labelColor:"white",titleColor:"white",gridOpacity:.6,gridColor:"white",domainColor:"white"},legend:{labelColor:"white",titleColor:"white"},scale:{maxSize:1500},view:{stroke:null}})};var w={config:{},init:function(e){e.tooltip((new d.RW).call)},view:{renderer:"canvas"}};s.z2l(l,c,w);var v=function(e){var t=e.dataSet,n=(e.options,t.gstm);return s.b59({opacity:.8}).data(n).encode(s.x().yearmonth("date"),s.y().sum("count_guns").title("Number of guns"),s.$_Y().fieldN("gun").scale({scheme:"category20b"}).title("Gun type")).width(720).height(400).config({mark:{opacity:.9},background:"#1f2937",axis:{tickColor:"white",labelColor:"white",titleColor:"white",gridColor:"white",gridOpacity:.4,domainColor:"white"},legend:{labelColor:"white",titleColor:"white"},scale:{maxSize:1500},view:{stroke:null}})};var b={config:{},init:function(e){e.tooltip((new d.RW).call)},view:{renderer:"canvas"}};s.z2l(l,c,b);var x=function(e){var t=e.dataSet,n=e.options,r=n.yearStart,a=n.yearEnd,i=t.gsty;return s.ZtJ({opacity:.8}).data(i).transform(s.hXT("datum['gun'] != 'Unknown' && datum['year'] >= "+r+" && datum['year'] <= "+a)).encode(s.y().fieldN("gun").sort(s.QXW()),s.x().count().title("Number of guns"),s.$_Y().fieldN("gun").scale({scheme:"category20b"}).legend(!1).title("Gun type"))};var _={config:{},init:function(e){e.tooltip((new d.RW).call)},view:{renderer:"canvas"}};s.z2l(l,c,_);var C=function(e){var t=e.dataSet,n=e.options,r=n.yearStart,a=n.yearEnd,i=t.gsty;return s.ZtJ({opacity:.8}).data(i).transform(s.hXT("datum['gun'] != 'Unknown' && datum['year'] >= "+r+" && datum['year'] <= "+a)).encode(s.y().fieldN("gun").sort(s.J69("n_killed")),s.x().mean("n_killed").title("Mean kill counts in an incident"),s.$_Y().fieldN("gun").scale({scheme:"category20b"}).legend(!1).title("Gun type"))};var S={config:{},init:function(e){e.tooltip((new d.RW).call)},view:{renderer:"canvas"}};s.z2l(l,c,S);var k=function(e){var t=e.dataSet,n=e.options;return s.H7P(x({dataSet:t,options:n}).width(400),C({dataSet:t,options:n}).width(400)).config({mark:{opacity:.9},background:"#1f2937",axis:{tickColor:"white",labelColor:"white",titleColor:"white",gridColor:"white",gridOpacity:.4,domainColor:"white"},legend:{labelColor:"white",titleColor:"white"},scale:{maxSize:1500},view:{stroke:null}})};var Z={config:{},init:function(e){e.tooltip((new d.RW).call)},view:{renderer:"canvas"}};s.z2l(l,c,Z);var O=function(e){var t=e.dataSet,n=e.options,r=n.field,a=n.state_abbr,i=t.pst,o={mean_age:"Perpetrators mean age",underages_ratio:["Ratio of underage/total","perpetrators"],male_pctg:["Percentage of ","male perpetrators"],female_pctg:["Percentage of ","female perpetrators"]};return s.EY_(s.fpH().data(i.derive({state:function(e){return"all"}})).encode(s.x().fieldO("year"),s.y().mean(r).title(o[r]),s.$_Y().fieldN("state").title("State")),s.fpH().data(i).transform(s.hXT('datum["state_abbr"] == "'+a+'"')).encode(s.x().fieldO("year"),s.y().mean(r).title(o[r]),s.$_Y().fieldN("state_abbr").title("State"))).width(500).height(250).config({mark:{opacity:.9},background:"#1f2937",axis:{tickColor:"white",labelColor:"white",titleColor:"white",gridOpacity:.6,gridColor:"white",domainColor:"white"},legend:{labelColor:"white",titleColor:"white"},scale:{maxSize:1500},view:{stroke:null}})};var M={config:{},init:function(e){e.tooltip((new d.RW).call)},view:{renderer:"canvas"}};s.z2l(l,c,M);var B=function(e){var t=e.dataSet,n=e.options,r=t.gsty,a=t.usa,i=n.gun,o=n.yearStart,l=n.yearEnd;return s.H7P(function(e,t,n,r){return s.HG8().data(e).transform(s.hXT('datum["gun"] == "'+t+'" && datum["year"] >= '+n+' && datum["year"] <= '+r),s.tqE("state").aggregate(s.J69("latitude").as("latitude"),s.J69("longitude").as("longitude"),s.J69("gun_percentage").as("Percentage of "+t),s.J69("total_guns_per_1M").as("Total guns/1M population/year"))).encode(s.y().fieldN("state").sort(s.J69("Percentage of "+t).order("descending")).title("State"),s.$_Y().fieldQ("Percentage of "+t),s.MdO([s.tvR("state"),s.xiU("Percentage of "+t),s.xiU("Total guns/1M population/year")]))}(r,i,o,l).height(500),function(e,t,n,r,a){return s.EY_(s._fs({fill:"#374151",stroke:"#fff",strokeWidth:1}).data(s.t_h(a).feature("states")).transform(s.P58("id").from(s.aTG(e).key("fip").fields("state"))).encode(s.MdO("state")),s.y$q({stroke:"white",strokeWidth:2}).data(e).transform(s.hXT('datum["gun"] == "'+t+'" && datum["year"] >= '+n+' && datum["year"] <= '+r),s.tqE("state").aggregate(s.J69("latitude").as("latitude"),s.J69("longitude").as("longitude"),s.J69("gun_percentage").as("Percentage of "+t),s.J69("total_guns_per_1M").as("Total guns/1M population/year"))).encode(s.pqJ().fieldQ("latitude"),s.MSO().fieldQ("longitude"),s.$_Y().fieldQ("Percentage of "+t).scale({scheme:"redpurple",clamp:!0}),s.dpJ().fieldQ("Total guns/1M population/year"),s.MdO([s.tvR("state"),s.xiU("percentage of "+t),s.xiU("Total guns/1M population/year")]))).project(s.CJN("albersUsa"))}(r,i,o,l,a).height(500).width(720)).config({mark:{opacity:.9},background:"#1f2937",axis:{tickColor:"white",labelColor:"white",titleColor:"white",gridColor:"white",domainColor:"white"},legend:{labelColor:"white",titleColor:"white",symbolFillColor:"#6b7280",symbolStrokeColor:"white"},scale:{maxSize:1500},view:{stroke:null}})};var z={config:{},init:function(e){e.tooltip((new d.RW).call)},view:{renderer:"canvas"}};s.z2l(l,c,z);var T=function(e,t){var n=e.gsty,r=t.state_abbr,a=t.gun;return s.EY_(s.fpH().data(n.derive({state:function(e){return"all"}})).transform(s.hXT('datum["gun"] == "'+a+'"')).encode(s.x().fieldO("year"),s.y().mean("gun_percentage"),s.$_Y().fieldN("state").title("State")),s.fpH().data(n).transform(s.hXT('datum["state_abbr"] == "'+r+'" && datum["gun"] == "'+a+'"')).encode(s.x().fieldO("year"),s.y().mean("gun_percentage").title("Percentage of "+a),s.$_Y().fieldN("state_abbr").title("State")))},N=n(5152),P=n(3764),j=n(3829),A=n(7294),X=n(3280),J=["mean_age","underages_ratio","male_pctg","female_pctg"],E=["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"],H=n(131);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U=P.Z.Option,Y={name:"sj17uo",styles:"display:flex;flex-direction:column;justify-content:center;align-items:center;width:75%"},F=function(e){return(0,r.tZ)(X.E.section,{css:Y,animate:{x:0,visibility:!!e.inView},transition:{ease:"easeOut"},initial:{x:-4e3},children:e.children})},W=Array.from(Array(6).keys()).map((function(e){return 2013+e})).reduce((function(e,t){return R(R({},e),{},(0,i.Z)({},t,{style:{color:"#f9fafb"},label:(0,r.tZ)("strong",{children:t})}))}),{}),D=(0,N.default)((function(){return n.e(808).then(n.bind(n,4808))}),{ssr:!1,loadableGenerated:{webpack:function(){return[4808]},modules:["../components/Vis.js -> ./VegaComp"]}}),$=(0,o.Z)("div",{target:"e1coz5px3"})({name:"15hc2t1",styles:"display:flex;flex-direction:column;padding:1rem;justify-content:space-around;align-items:center;margin-top:1.5rem;margin-bottom:1.5rem"}),G=(0,o.Z)("h1",{target:"e1coz5px2"})({name:"16vgk09",styles:'font-weight:600;font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-size:1.5rem;line-height:2rem;--tw-text-opacity:1;color:rgba(249, 250, 251, var(--tw-text-opacity))'}),V=(0,o.Z)("p",{target:"e1coz5px1"})({name:"wutlv0",styles:"display:flex;font-size:1rem;line-height:1.5rem;--tw-text-opacity:1;color:rgba(249, 250, 251, var(--tw-text-opacity));width:100%;padding:1.5rem;text-align:justify"}),L=(0,o.Z)("div",{target:"e1coz5px0"})({name:"1jzwnv4",styles:"display:flex;flex-direction:row;align-items:center;justify-content:space-around;width:100%"}),q={name:"lu9zzf",styles:"display:flex;flex-direction:column;justify-content:center;align-items:center;row-gap:2rem;--tw-bg-opacity:1;background-color:rgba(31, 41, 55, var(--tw-bg-opacity))"},Q={name:"1vq5ps5",styles:"display:flex;justify-content:center;align-items:center;font-size:1.125rem;line-height:1.75rem;flex-direction:column;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));height:16rem;width:100vw"},K={name:"1qw7ncn",styles:"font-size:4.5rem;line-height:1"},ee={name:"nqx9k7",styles:"font-size:1rem;line-height:1.5rem"},te={name:"hcytgc",styles:"padding-top:3rem;padding-bottom:3rem;padding-left:5rem;padding-right:5rem;--tw-bg-opacity:1;background-color:rgba(55, 65, 81, var(--tw-bg-opacity))"},ne={name:"16wutu8",styles:'font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-size:1.5rem;line-height:2rem;font-weight:700;--tw-text-opacity:1;color:rgba(249, 250, 251, var(--tw-text-opacity))'},re={name:"1sh0k5y",styles:"font-size:1.125rem;line-height:1.75rem;--tw-text-opacity:1;color:rgba(249, 250, 251, var(--tw-text-opacity))"},ae={name:"j5up3g",styles:"display:flex;column-gap:0.5rem;align-items:center;width:100%"},ie={name:"1fgzr6u",styles:"--tw-text-opacity:1;color:rgba(249, 250, 251, var(--tw-text-opacity))"},oe={name:"xjt14x",styles:"width:60%"},le={name:"119lauv",styles:"width:66.666667%"},se={name:"1d3w5wq",styles:"width:100%"},ce={name:"j5up3g",styles:"display:flex;column-gap:0.5rem;align-items:center;width:100%"},de={name:"1fgzr6u",styles:"--tw-text-opacity:1;color:rgba(249, 250, 251, var(--tw-text-opacity))"},ue={name:"xjt14x",styles:"width:60%"},pe={name:"1o39zhp",styles:"display:flex;align-items:center;> :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.5rem * var(--tw-space-x-reverse));margin-left:calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));}"},he={name:"1d3w5wq",styles:"width:100%"},ge={name:"1o39zhp",styles:"display:flex;align-items:center;> :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.5rem * var(--tw-space-x-reverse));margin-left:calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));}"},fe=function(){var e=(0,A.useState)(2018),t=e[0],n=e[1],i=(0,A.useState)(2018),o=i[0],l=i[1],s=(0,A.useState)("WA"),c=s[0],d=s[1],u=(0,A.useState)("mean_age"),p=u[0],g=u[1],m=E,w=J,b=(0,H.YD)({threshold:2,triggerOnce:!0}),x=(0,a.Z)(b,3),_=(x[0],x[1]);x[2];return(0,r.BX)("main",{css:q,children:[(0,r.tZ)("section",{children:(0,r.BX)("p",{css:Q,children:[(0,r.tZ)("span",{css:K,children:"US Gun Violence"}),(0,r.tZ)("span",{}),(0,r.tZ)("span",{css:ee,children:"Interactive data visualizations about gun violence in US"})]})}),(0,r.BX)("section",{css:te,children:[(0,r.tZ)("h1",{css:ne,children:"Introduction"}),(0,r.tZ)("p",{css:re,children:"There are a very few countries in the word where citizens have the right to bear arms. US is one of them where their citizens own guns nearly half of all civilian guns in the world. As a result, gun incidents are alarming in US. This project aims to study the trends of gun violence in US and explore any potential concerns regarding civilian-owned guns in US. The dataset used in this project contains records of gun incidents in US from January 2013 to March 2018 provided by Gun Violence Archive. Besides the overall rate of gun violence over time, we aim to use geospatial mapping to see the distribution of gun incidents by states and counties. Using graphical distributions (regression and normal distribution), we will able to explore the demographics of gun perpetrators including age and gender and see any correlations they have with the damage caused. Finally, we will also explore which gun types are most used and most associated with a larger number of casualties."})]}),(0,r.BX)(F,{inView:_,children:[(0,r.tZ)(G,{children:"Male and Female perpetrators over time"}),(0,r.tZ)(L,{children:(0,r.tZ)($,{children:(0,r.tZ)(D,{func:h,name:"perpetratorsByGender"})})}),(0,r.tZ)(L,{children:(0,r.tZ)(V,{children:"Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush be sorry no sight. Sang lose of hour then he left find. For norland produce age wishing. To figure on it spring season up. Her provision acuteness had excellent two why intention. As called mr needed praise at. Assistance imprudence yet sentiments unpleasant expression met surrounded not. Be at talked ye though secure nearer."})})]}),(0,r.BX)(F,{inView:_,children:[(0,r.tZ)(G,{children:"Age distribution of perpetrators"}),(0,r.BX)(L,{children:[(0,r.tZ)(V,{children:"Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush be sorry no sight. Sang lose of hour then he left find. For norland produce age wishing. To figure on it spring season up. Her provision acuteness had excellent two why intention. As called mr needed praise at. Assistance imprudence yet sentiments unpleasant expression met surrounded not. Be at talked ye though secure nearer."}),(0,r.BX)($,{children:[(0,r.BX)("div",{css:ae,children:[(0,r.tZ)("span",{css:ie,children:"year range"}),(0,r.tZ)(j.Z,{value:t,max:2018,min:2013,css:oe,onChange:function(e){return n(e)},marks:W,style:{fill:"#374151"}})]}),(0,r.tZ)(D,{func:y,options:{yearStart:t,yearEnd:t,color:"teal"},name:"ageHistogram"})]})]})]}),(0,r.BX)(F,{css:le,inView:_,children:[(0,r.tZ)(G,{children:"Ratio of underages over total perpretrators across US"}),(0,r.BX)($,{css:se,children:[(0,r.BX)("div",{css:ce,children:[(0,r.tZ)(P.Z,{showSearch:!0,style:{width:200,fill:"#6b7280"},placeholder:"filter by feature",optionFilterProp:"children",onChange:function(e){return g(e)},filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:w.map((function(e){return(0,r.tZ)(U,{value:e,children:e.replaceAll("_"," ").replaceAll("pctg","percentage")},e)}))}),(0,r.tZ)("span",{css:de,children:"year range"}),(0,r.tZ)(j.Z,{value:o,max:2018,min:2013,marks:W,css:ue,onChange:function(e){return l(e)}})]}),(0,r.tZ)(D,{func:f,name:"perpetratorMapFull",options:{field:p,yearStart:o,yearEnd:o}})]}),(0,r.BX)(L,{children:[(0,r.BX)($,{children:[(0,r.tZ)("div",{css:pe,children:(0,r.tZ)(P.Z,{showSearch:!0,style:{width:200},placeholder:"Select states",optionFilterProp:"children",onChange:function(e){return d(e)},filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:m.map((function(e){return(0,r.tZ)(U,{value:e,children:e},e)}))})}),(0,r.tZ)(D,{func:O,name:"perpetratorsByTime",options:{field:p,state_abbr:c}})]}),(0,r.tZ)(V,{children:"Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush be sorry no sight. Sang lose of hour then he left find. For norland produce age wishing. To figure on it spring season up. Her provision acuteness had excellent two why intention. As called mr needed praise at. Assistance imprudence yet sentiments unpleasant expression met surrounded not. Be at talked ye though secure nearer."})]})]}),(0,r.BX)(F,{inView:_,children:[(0,r.tZ)(G,{children:"Number of guns used over time"}),(0,r.BX)(L,{children:[(0,r.tZ)($,{children:(0,r.tZ)(D,{func:v,name:"gunArea"})}),(0,r.tZ)(V,{children:"Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush be sorry no sight. Sang lose of hour then he left find. For norland produce age wishing. To figure on it spring season up. Her provision acuteness had excellent two why intention. As called mr needed praise at. Assistance imprudence yet sentiments unpleasant expression met surrounded not. Be at talked ye though secure nearer."})]})]}),(0,r.BX)(F,{inView:_,children:[(0,r.tZ)(G,{children:"Gun counts and kill counts by types"}),(0,r.tZ)($,{children:(0,r.tZ)(D,{func:k,name:"numGunByTypes",options:{yearStart:2013,yearEnd:2018}})}),(0,r.tZ)(V,{children:"Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush be sorry no sight. Sang lose of hour then he left find. For norland produce age wishing. To figure on it spring season up. Her provision acuteness had excellent two why intention. As called mr needed praise at. Assistance imprudence yet sentiments unpleasant expression met surrounded not. Be at talked ye though secure nearer."})]}),(0,r.BX)(F,{inView:_,children:[(0,r.tZ)(G,{children:"Percentage of gun across US"}),(0,r.tZ)($,{css:he,children:(0,r.tZ)(D,{func:B,name:"gunMapFull",options:{gun:"Handgun",yearStart:2013,yearEnd:2018}})}),(0,r.BX)(L,{children:[(0,r.BX)($,{children:[(0,r.tZ)("div",{css:ge,children:(0,r.tZ)(P.Z,{showSearch:!0,style:{width:200},placeholder:"Select states",optionFilterProp:"children",onChange:function(e){return d(e)},filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:m.map((function(e){return(0,r.tZ)(U,{value:e,children:e})}))})}),(0,r.tZ)(D,{func:T,name:"gunByTime",options:{state_abbr:c,gun:"Handgun"}})]}),(0,r.tZ)(V,{children:"Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush be sorry no sight. Sang lose of hour then he left find. For norland produce age wishing. To figure on it spring season up. Her provision acuteness had excellent two why intention. As called mr needed praise at. Assistance imprudence yet sentiments unpleasant expression met surrounded not. Be at talked ye though secure nearer."})]})]})]})}}}]);