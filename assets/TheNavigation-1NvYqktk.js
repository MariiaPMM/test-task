import{_ as i,c as o,b as e,n as a,o as r}from"./index-DuC_AzJv.js";const c="/test%20task/assets/logolight-B-yg0BS0.png",t={name:"TheNavigation",data(){return{isMenuOpen:!1}},methods:{toggleMenu(){this.isMenuOpen=!this.isMenuOpen},closeMenu(){this.isMenuOpen=!1}}},g={class:"burger"},M=["aria-expanded"];function p(f,n,m,k,u,l){return r(),o("nav",null,[e("div",{class:a(["container",{"column-layout":u.isMenuOpen}])},[e("div",g,[n[7]||(n[7]=e("a",{class:"image",href:"#home"},[e("img",{src:c,alt:"Logo",class:"logo"})],-1)),e("button",{class:"menu-toggle",onClick:n[0]||(n[0]=(...s)=>l.toggleMenu&&l.toggleMenu(...s)),"aria-expanded":u.isMenuOpen},[e("span",{class:a({open:u.isMenuOpen})},null,2),e("span",{class:a({open:u.isMenuOpen})},null,2),e("span",{class:a({open:u.isMenuOpen})},null,2)],8,M)]),e("ul",{class:a(["nav__menu",{"show-menu":u.isMenuOpen}])},[e("li",null,[e("a",{href:"/#home",onClick:n[1]||(n[1]=(...s)=>l.closeMenu&&l.closeMenu(...s)),replace:""},"Home")]),e("li",null,[e("a",{href:"#services",onClick:n[2]||(n[2]=(...s)=>l.closeMenu&&l.closeMenu(...s))},"Services")]),e("li",null,[e("a",{href:"/#instructionalDesign",onClick:n[3]||(n[3]=(...s)=>l.closeMenu&&l.closeMenu(...s)),replace:""},"Instructional Design")]),e("li",null,[e("a",{href:"/#eLearningPriceQuote",onClick:n[4]||(n[4]=(...s)=>l.closeMenu&&l.closeMenu(...s)),replace:""},"eLearning Price Quote")]),e("li",null,[e("a",{href:"/#eLearningPackages",onClick:n[5]||(n[5]=(...s)=>l.closeMenu&&l.closeMenu(...s)),replace:""},"eLearning Packages")]),e("li",null,[e("a",{href:"/#contact",onClick:n[6]||(n[6]=(...s)=>l.closeMenu&&l.closeMenu(...s)),replace:""},"Contact")])],2)],2)])}const O=i(t,[["render",p],["__scopeId","data-v-f3f841ba"]]);export{O as default};
