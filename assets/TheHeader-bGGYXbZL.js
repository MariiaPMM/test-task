import I from"./TheSlider-6qBHJVjM.js";import{_ as c,o as i,c as m,b as A,n,t as T,a as g,r as l}from"./index-CrpJtEdS.js";import U from"./TheNavigation-B3LzF0ZS.js";const p="/assets/logo-BgLNAF9Y.png",D={name:"ThemeToggleCard",props:{isDarkMode:{type:Boolean,default:!1}},data(){return{dayIcon:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIBSURBVHgBtVU7csIwEJU/9K6pfIN4+NQxN+AGcU4AOYHtLmXaVJAbkBNgemB8BCpq0qUAnPdAeGxGMiiTvBnZsrS7T9qfhTBAr9ebc5jouCbCRVH4tm2bqJgRAIvj8ViYKFjVj263O7Qs63G/36d5nu+EAYIg8FzXjXHLxWq1ml3Wr+8bYowdx0mEIaTOWNooUXPR4XBIIMhpdm0AwQ3hHh9TD3HIl8vltUyG059sVBctcQP9fn8ERSp5NUXL2sBYul6vp036TtMmTh3j9QqCb7zf8eb4xPwLIwTJsN1ui+12u9DZ0N6g0+lEcMUEBnnSAYK+qe4jqD7cOQeJj88XuOxNZUeb1FDm6YXKOME17mHKbIt1dpQEDCiLCmOqMl4lgcwHph51VDIuS5/GMM+Qv89yPeCDOS1uADI53CRkhp2AxJjgmzHa2EytvwDiVWYZjJexdXHqgUI+5wMnCMQNsPKrOgRsRiWxSgmtgsI7KD8xW4QG3INMxExTFJ6egH0I10wx9Vqt1lxFwjXucQ6CVGjQWMlIgEScU3AHI7NL0OHvB7wica7uFKdPfkVAsODghlgWVAmQ0YWprsCUBLqWK2/DZhfIG+SMU7Wl61p9rZvKljuSxDUCGcRM6BFSFzaoO1YSCE3LvQdNrf5usELhiomJjtE/meX/rz999hbT1vIDNRoSByqUE1YAAAAASUVORK5CYII=",import.meta.url).href,nightIcon:new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAYCAYAAAARfGZ1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAITSURBVHgBrVU7csIwEJVsoHbFtzFlOvObSWnKdKFLFzhByAlIbsANIDfIDSANMxk+cbp0OB2l04UZPnlLbEZ4sCVCdgYsW6u3q7dvJc5CZlmWmUgkepxzczweF9kZpoWBk8nkAEN7u92aKgCVSuVaCh4AC6AeUzDssFOtVu1jc4n9AFSI2WJRJDglommaHbxi3W25XKZv7mQyGR6AY6KJhy0CyGgB0B0B+4nQeqKnIfpw+qvVavNjYKlUyhyNRp9RAUDHmxCgBAE4BwkQX1FZLpfLUhQwqDHYLyVDPL31em2FfTRMRlabhagKmYnf/XQ6ra9WqxJoMsMOHJkPYkA8LCw6jqOkHDKSJgI+05gKasX4GlBRE88uk5jffCaGHQjEIOWQzg3Juo7Pb6xhd65PsUXax449jcmNsu8wNRsigEs9gmAOgavw2UZt2jInKMYF30VkvdM7F7WqYA/owEdFX6bncrkLbONS0d/O5/NGOp1+XSwW31LwQqFATk2mbpe6rt9ks9mvTCbjxgXZtT+0Oafzm/3NSNPvm83GFT/OZrP+DpwOLuiyx/7RoJoGD14knXoqsAvl1Pc6h3xaTPGCkBmAG9RUe3B6Ae/1cwMAo0UNtBuHJ+mMgBoGpxYYVHhY0xBvIj3sBGl5kNgTCrxkijUAcB9UXEEhH+J3HrcouCvxu6ULJdiNf364GL6gVt2oI/kHwL3mg+ooWAEAAAAASUVORK5CYII=",import.meta.url).href}},methods:{toggleTheme(){this.$emit("toggle-theme")}}},N={class:"card"},u={class:"card-content"},v=["src"];function C(r,o,e,d,s,t){return i(),m("div",N,[A("div",u,[o[1]||(o[1]=A("img",{class:"logo",src:p,alt:"logo"},null,-1)),A("p",{class:n({"dark-text":e.isDarkMode})},"Taking Learning to the Next Level",2),A("div",{class:"theme-toggle",onClick:o[0]||(o[0]=(...a)=>t.toggleTheme&&t.toggleTheme(...a))},[A("div",{class:n(["mode-label",{left:e.isDarkMode,right:!e.isDarkMode}])},T(e.isDarkMode?"NIGHTMODE":"DAYMODE"),3),A("div",{class:n(["toggle-circle",{active:!e.isDarkMode}])},[A("img",{src:e.isDarkMode?s.nightIcon:s.dayIcon,alt:"icon",class:"circle-icon"},null,8,v)],2)])])])}const k=c(D,[["render",C],["__scopeId","data-v-7e48d684"]]),M={name:"TheHeader",components:{TheSlider:I,ThemeToggle:k,TheNavigation:U},props:{isDarkMode:{type:Boolean,default:!1}},data(){return{}}},x={id:"home"},f={class:"header_top"};function w(r,o,e,d,s,t){const a=l("ThemeToggle"),h=l("TheSlider"),B=l("TheNavigation");return i(),m("header",x,[A("div",f,[g(a,{isDarkMode:e.isDarkMode,onToggleTheme:o[0]||(o[0]=E=>r.$emit("toggle-theme"))},null,8,["isDarkMode"]),g(h)]),g(B)])}const S=c(M,[["render",w],["__scopeId","data-v-c5d410e8"]]);export{S as default};
