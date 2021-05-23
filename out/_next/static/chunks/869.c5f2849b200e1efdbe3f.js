(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[869],{5869:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var a=n(5944),r=n(5366),o=n(9444),i=n(537),s=n(3640),l=n(3064),d=n(5779);var c={config:{},init:function(e){e.tooltip((new l.RW).call)},view:{renderer:"canvas"}};i.z2l(o,s,c);var u=function(e){var t=e.dataSet,n=(e.options,t.p),a=i.Uk0().encodings("x"),r=i.x().yearmonth("date"),o=n.filter((function(e){return"Subject-Suspect"===e.type})).derive({month:function(e){return d.op.utcmonth(e.date)},is_male:function(e){return"Male"===e.gender},is_female:function(e){return"Female"===e.gender}}).groupby(["month","year"]).rollup({female_pctg:function(e){return 100*d.op.sum(e.is_female)/(d.op.sum(e.is_female)+d.op.sum(e.is_male))},male_pctg:function(e){return 100*d.op.sum(e.is_male)/(d.op.sum(e.is_female)+d.op.sum(e.is_male))},date:function(e){return d.op.min(d.op.utcdatetime(e.date))}}).derive({date:function(e){return d.op.datetime(e.year,e.month)}}).rename({male_pctg:"male",female_pctg:"female"}).fold(["female","male"]).rename({key:"gender"}),s=n.filter((function(e){return"Subject-Suspect"===e.type})).derive({month:function(e){return d.op.utcmonth(e.date)},is_male:function(e){return"Male"===e.gender},is_female:function(e){return"Female"===e.gender}}).groupby(["month","year"]).rollup({female_count:function(e){return d.op.sum(e.is_female)},male_count:function(e){return d.op.sum(e.is_male)},date:function(e){return d.op.min(d.op.utcdatetime(e.date))}}).derive({date:function(e){return d.op.datetime(e.year,e.month)}}).rename({male_count:"male",female_count:"female"}).fold(["female","male"]).rename({key:"gender"});return i.H7P(i.b59({opacity:.5}).data(s).encode(r,i.y().fieldQ("value").title("Number of perpetrators"),i.$_Y().fieldN("gender").scale({scheme:"set1"})).params(a),i.b59({opacity:.5}).data(o).encode(r,i.y().fieldQ("value").title("Percentage of perpetrators"),i.$_Y().fieldN("gender").scale({scheme:"set1"})).encode(r.scale({domain:a})))};var p={config:{},init:function(e){e.tooltip((new l.RW).call)},view:{renderer:"canvas"}};i.z2l(o,s,p);var m=function(e){var t=e.dataSet,n=e.options,a=t.pst,r=n.field,o=n.yearStart,s=n.yearEnd,l=n.scheme;return i.HG8().data(a).transform(i.hXT('datum["year"] >= '+o+' && datum["year"] <= '+s)).encode(i.y().fieldN("state").sort(i.J69(r).order("descending")).title("State"),i.$_Y().mean(r).scale({scheme:l}),i.MdO([i.tvR("state"),i.J69(r)]))};var f={config:{},init:function(e){e.tooltip((new l.RW).call)},view:{renderer:"canvas"}};i.z2l(o,s,f);var g=function(e){var t=e.dataSet,n=e.options,a=n.field,r=n.yearStart,o=n.yearEnd,s=n.scheme,l=t.pst,d=t.usa,c=t.ppst;return i.aTG(l).layer(i._fs({fill:"#ddd",stroke:"#fff",strokeWidth:1}).data(i.t_h(d).feature("states")).transform(i.P58("id").from(i.aTG(c).key("fip").fields("state"))).encode(i.MdO("state")),i.y$q({stroke:"#5e5e5e"}).data(l).transform(i.hXT('datum["year"] >= '+r+' && datum["year"] <= '+o),i.tqE("state").aggregate(i.J69("mean_age").as("mean_age"),i.J69("underages_ratio").as("underages_ratio"),i.J69("perpetrators_per_1M").as("perpetrators_per_1M"),i.J69("latitude").as("latitude"),i.J69("longitude").as("longitude"))).encode(i.pqJ().fieldQ("latitude"),i.MSO().fieldQ("longitude"),i.$_Y().mean(a).legend({titleLineHeight:10}).scale({scheme:s}).title({mean_age:"Perpetrators mean age",underages_ratio:["Ratio of underage/total","perpetrators"]}[a]),i.dpJ().mean("perpetrators_per_1M").title(["Perpetrators per","1M population"]),i.MdO([i.tvR("state"),i.xiU(a),i.xiU("perpetrators_per_1M")]))).project(i.CJN("albersUsa"))};var h={config:{},init:function(e){e.tooltip((new l.RW).call)},view:{renderer:"canvas"}};i.z2l(o,s,h);var y=function(e){var t=e.dataSet,n=e.options;return i.H7P(m({dataSet:t,options:n}).height(500),g({dataSet:t,options:n}).height(500).width(720)).config({scale:{maxSize:1500},view:{stroke:null}})};var v={config:{},init:function(e){e.tooltip((new l.RW).call)},view:{renderer:"canvas"}};i.z2l(o,s,v);var w=function(e){var t=e.dataSet,n=e.options,a=t.p,r=n.yearStart,o=n.yearEnd,s=n.color;return i.ZtJ({opacity:.5}).data(a.params({yearStart:r,yearEnd:o}).filter((function(e){return"Subject-Suspect"===e.type})).filter((function(e){return op.year(e.date)>=r&&op.year(e.date)<=o}))).encode(i.x().fieldQ("age").scale({domain:[0,100]}).bin({step:5}),i.y().count().title("Number of Perpetrators"),i.$_Y().value(s))};var b={config:{},init:function(e){e.tooltip((new l.RW).call)},view:{renderer:"canvas"}};i.z2l(o,s,b);var _={config:{},init:function(e){e.tooltip((new l.RW).call)},view:{renderer:"canvas"}};i.z2l(o,s,_);var x={config:{},init:function(e){e.tooltip((new l.RW).call)},view:{renderer:"canvas"}};i.z2l(o,s,x);var S={config:{},init:function(e){e.tooltip((new l.RW).call)},view:{renderer:"canvas"}};i.z2l(o,s,S);var Z={config:{},init:function(e){e.tooltip((new l.RW).call)},view:{renderer:"canvas"}};i.z2l(o,s,Z);var B=function(e){var t=e.dataSet,n=e.options,a=n.field,r=n.state_abbr,o=n.color,s=t.pst,l={mean_age:"Perpetrators mean age",underages_ratio:["Ratio of underage/total","perpetrators"]};return i.EY_(i.fpH().data(s).encode(i.x().fieldO("year"),i.y().mean(a).title(l[a]),i.$_Y().value("orange")),i.fpH().data(s).transform(i.hXT('datum["state_abbr"] == "'+r+'"')).encode(i.x().fieldO("year"),i.y().mean(a).title(l[a]),i.$_Y().value(o))).width(500)},k=n(5152),M=n(2064),z=n(7294);var R={name:"1yxf6qu",styles:"display:flex;flex-direction:column;justify-content:center;align-items:center"},A=function(e){return(0,a.tZ)("section",{css:R,children:e.children})},j=(0,k.default)((function(){return n.e(808).then(n.bind(n,4808))}),{ssr:!1,loadableGenerated:{webpack:function(){return[4808]},modules:["../components/Vis.js -> ./VegaComp"]}}),X=(0,r.Z)("div",{target:"e1coz5px2"})({name:"r5wz0a",styles:"padding:1rem;--tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);border-radius:0.5rem;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));margin-top:1.5rem;margin-bottom:1.5rem"}),T=(0,r.Z)("h1",{target:"e1coz5px1"})({name:"1xumcok",styles:'font-weight:600;font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-size:1.125rem;line-height:1.75rem'}),U=(0,r.Z)("p",{target:"e1coz5px0"})({name:"10i9bt3",styles:"padding-left:9rem;padding-right:9rem"}),J={name:"1198p6x",styles:"width:100vw;display:flex;flex-direction:column;justify-content:center;align-items:center;row-gap:2rem;--tw-bg-opacity:1;background-color:rgba(243, 244, 246, var(--tw-bg-opacity))"},W={name:"0",styles:""},F={name:"q0pix8",styles:"display:flex;justify-content:center;align-items:center;flex-direction:column;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));--tw-bg-opacity:1;background-color:rgba(180, 83, 9, var(--tw-bg-opacity));height:16rem;width:100vw"},H={name:"19xagyr",styles:"font-size:2.25rem;line-height:2.5rem"},C={name:"1mbvc0",styles:"padding-top:3rem;padding-bottom:3rem;padding-left:5rem;padding-right:5rem"},E={name:"4dhfq",styles:'font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-size:1.25rem;line-height:1.75rem;font-weight:700'},I={name:"18ag5c9",styles:"grid-template-columns:repeat(4, minmax(0, 1fr));display:grid"},N={name:"g70b67",styles:"grid-column:span 1 / span 1"},P={name:"1ar8ask",styles:"grid-column:span 3 / span 3"},Y={name:"18ag5c9",styles:"grid-template-columns:repeat(4, minmax(0, 1fr));display:grid"},$={name:"g70b67",styles:"grid-column:span 1 / span 1"},G={name:"1ar8ask",styles:"grid-column:span 3 / span 3"},O=function(){var e=(0,z.useState)([2013,2018]),t=e[0],n=e[1],r=(0,z.useState)([2013,2018]),o=r[0],i=r[1];return(0,a.BX)("main",{css:J,children:[(0,a.tZ)(A,{css:W,children:(0,a.BX)("p",{css:F,children:[(0,a.tZ)("span",{css:H,children:"US Gun Violence"}),(0,a.tZ)("span",{children:"Interactive data visualizations about gun violence in US"})]})}),(0,a.BX)("section",{css:C,children:[(0,a.tZ)("h1",{css:E,children:"Introduction"}),(0,a.tZ)("p",{children:"There are a very few countries in the word where citizens have the right to bear arms. US is one of them where their citizens own guns nearly half of all civilian guns in the world. As a result, gun incidents are alarming in US. This project aims to study the trends of gun violence in US and explore any potential concerns regarding civilian-owned guns in US. The dataset used in this project contains records of gun incidents in US from January 2013 to March 2018 provided by Gun Violence Archive. Besides the overall rate of gun violence over time, we aim to use geospatial mapping to see the distribution of gun incidents by states and counties. Using graphical distributions (regression and normal distribution), we will able to explore the demographics of gun perpetrators including age and gender and see any correlations they have with the damage caused. Finally, we will also explore which gun types are most used and most associated with a larger number of casualties. abstract"})]}),(0,a.BX)(A,{children:[(0,a.tZ)(T,{children:"Male and Femal perpetrators over time"}),(0,a.tZ)(X,{children:(0,a.tZ)(j,{func:u,name:"perpetratorsByGender"})}),(0,a.tZ)(U,{children:"Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush be sorry no sight. Sang lose of hour then he left find. For norland produce age wishing. To figure on it spring season up. Her provision acuteness had excellent two why intention. As called mr needed praise at. Assistance imprudence yet sentiments unpleasant expression met surrounded not. Be at talked ye though secure nearer."})]}),(0,a.BX)(A,{children:[(0,a.tZ)(T,{children:"Age distributions of perpetrators"}),(0,a.BX)(X,{children:[(0,a.BX)("div",{css:I,children:[(0,a.tZ)("span",{css:N,children:"year range"}),(0,a.tZ)(M.Z,{range:!0,defaultValue:t,max:2018,min:2013,css:P,onAfterChange:function(e){return n(e)}})]}),(0,a.tZ)(j,{func:w,options:{yearStart:t[0],yearEnd:t[1],color:"teal"},name:"ageHistogram"})]}),(0,a.tZ)(U,{children:"Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush be sorry no sight. Sang lose of hour then he left find. For norland produce age wishing. To figure on it spring season up. Her provision acuteness had excellent two why intention. As called mr needed praise at. Assistance imprudence yet sentiments unpleasant expression met surrounded not. Be at talked ye though secure nearer."})]}),(0,a.BX)(A,{children:[(0,a.tZ)(T,{children:"Ratio of underage over total perpretrators across US"}),(0,a.BX)(X,{children:[(0,a.BX)("div",{css:Y,children:[(0,a.tZ)("span",{css:$,children:"year range"}),(0,a.tZ)(M.Z,{range:!0,defaultValue:o,max:2018,min:2013,css:G,onAfterChange:function(e){return i(e)}})]}),(0,a.tZ)(j,{func:y,name:"mapMeanAgeOfPerpetrators",options:{field:"mean_age",yearStart:o[0],yearEnd:o[1],schema:"goldred"}})]}),(0,a.tZ)(U,{children:"Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush be sorry no sight. Sang lose of hour then he left find. For norland produce age wishing. To figure on it spring season up. Her provision acuteness had excellent two why intention. As called mr needed praise at. Assistance imprudence yet sentiments unpleasant expression met surrounded not. Be at talked ye though secure nearer."})]}),(0,a.BX)(A,{children:[(0,a.tZ)(T,{children:"Male and Femal perpetrators over time"}),(0,a.tZ)(X,{children:(0,a.tZ)(j,{func:B,name:"perpetratorsByTime",options:{field:"underages_ratio",state_abbr:"WA",color:"red"}})}),(0,a.tZ)(U,{children:"Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush be sorry no sight. Sang lose of hour then he left find. For norland produce age wishing. To figure on it spring season up. Her provision acuteness had excellent two why intention. As called mr needed praise at. Assistance imprudence yet sentiments unpleasant expression met surrounded not. Be at talked ye though secure nearer."})]})]})}}}]);