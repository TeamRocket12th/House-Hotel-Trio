import{S as r,a as f,N as w,P as x,b as y,A as $,c as k,u as _,d as z,e as H,L as A}from"./LoadingItem-3d148341.js";import{o as l,c as C,w as a,a as o,u as t,b as e,d as L,r as E,e as F,f as n,F as h,g as v,t as b,h as N}from"./index-0c1332d1.js";import"./_plugin-vue_export-helper-c27b6911.js";const O="/House-Hotel-Trio/assets/logo-c385328a.svg";const T=e("div",{class:"relative overflow-hidden bg-cover bg-[50%] bg-no-repeat"},[e("div",{class:"pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full overflow-hidden bg-black bg-fixed opacity-60"}),e("div",{class:"h-[150vh] w-full bg-[url('@/assets/images/house/homeCarouselFirst.jpeg')] bg-cover bg-center bg-no-repeat md:h-[135vh]"})],-1),B=e("div",{class:"relative overflow-hidden bg-cover bg-[50%] bg-no-repeat"},[e("div",{class:"pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full overflow-hidden bg-black bg-fixed opacity-60"}),e("div",{class:"h-[150vh] w-full bg-[url('@/assets/images/house/homeCarouselSecond.jpeg')] bg-cover bg-center bg-no-repeat md:h-[135vh]"})],-1),U=e("div",{class:"relative overflow-hidden bg-cover bg-[50%] bg-no-repeat"},[e("div",{class:"pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full overflow-hidden bg-black bg-fixed opacity-60"}),e("div",{class:"h-[150vh] w-full bg-[url('@/assets/images/house/homeCarouselThird.jpeg')] bg-cover bg-center bg-no-repeat md:h-[135vh]"})],-1),V=e("div",{class:"relative overflow-hidden bg-cover bg-[50%] bg-no-repeat"},[e("div",{class:"pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full overflow-hidden bg-black bg-fixed opacity-60"}),e("div",{class:"h-[150vh] w-full bg-[url('@/assets/images/house/homeCarouselFourth.jpeg')] bg-cover bg-center bg-no-repeat md:h-[135vh]"})],-1),R=e("div",{class:"swiper-pagination home-carousel"},null,-1),I={__name:"HomeCarousel",setup(p){const c=[w,x,y,$,k];return(d,g)=>(l(),C(t(f),{class:"swiper absolute -z-20 mx-auto h-[150vh] w-screen md:h-[135vh] lg:h-screen",modules:c,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},speed:1e3,loop:!0,autoplay:{delay:3e3},id:"homeCarousel"},{default:a(()=>[o(t(r),{class:"slide"},{default:a(()=>[T]),_:1}),o(t(r),{class:"slide"},{default:a(()=>[B]),_:1}),o(t(r),{class:"slide"},{default:a(()=>[U]),_:1}),o(t(r),{class:"slide"},{default:a(()=>[V]),_:1}),R]),_:1},8,["pagination"]))}};const M={class:"hidden max-w-[825px] grid-cols-1 md:grid md:grid-cols-3"},P=["onClick"],D={class:"flex h-full items-center justify-center bg-cover bg-center md:h-[275px]"},G=["src"],q={class:"group absolute top-0 flex h-full w-full items-center justify-center duration-300 hover:bg-primary hover:opacity-[0.6] md:h-[275px]"},J={class:"name invisible absolute my-auto font-sans text-white group-hover:visible"},K={class:"relative h-[275px] cursor-pointer overflow-hidden"},Q={class:"flex h-full items-center justify-center bg-cover bg-center md:h-[275px]"},W=["src"],X={class:"group absolute top-0 flex h-full w-full items-center justify-center bg-gray-500 opacity-[0.6] duration-300 md:h-[275px]"},Y={class:"name absolute my-auto font-sans text-white group-hover:visible md:invisible"},Z=e("div",{class:"swiper-pagination roomcards-carousel"},null,-1),ee={__name:"RoomCards",setup(p){const{changeStateTrue:c}=_(),{changeStateFalse:d}=_(),g=[w,x,y,$,k],m=L(),u=E([]),S=async()=>{try{const i=await z();i.status===200&&(u.value=i.data.items,d())}catch(i){H(i.message)}};return F(()=>{c(),S()}),(i,ie)=>(l(),n(h,null,[e("ul",M,[(l(!0),n(h,null,v(u.value,s=>(l(),n("li",{key:s.id,onClick:j=>t(m).push(`/reservation/${s.id}`),class:"relative h-[275px] cursor-pointer"},[e("div",D,[e("img",{src:`${s.imageUrl}`,class:"h-full w-full"},null,8,G)]),e("div",q,[e("p",J,b(s.name),1)])],8,P))),128))]),o(t(f),{class:"swiper z-10 max-w-[98%] md:hidden",modules:g,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},"slides-per-view":1,"space-between":10},{default:a(()=>[(l(!0),n(h,null,v(u.value,s=>(l(),C(t(r),{class:"slide",key:s.id,onClick:j=>t(m).push(`/reservation/${s.id}`)},{default:a(()=>[e("div",K,[e("div",Q,[e("img",{src:`${s.imageUrl}`,class:"h-full w-full object-cover"},null,8,W)]),e("div",X,[e("p",Y,b(s.name),1)])])]),_:2},1032,["onClick"]))),128)),Z]),_:1},8,["pagination"])],64))}},se={class:"container mx-auto flex h-screen items-center pl-2 pr-2 md:pl-32 md:pr-32"},te={class:"absolute bottom-0 left-0 right-0 top-0 h-[150vh] md:h-[135vh] lg:h-screen"},oe={class:"2xl:mt-0 z-10 mt-10 flex w-full flex-wrap justify-center md:justify-between"},le=N('<div class="z-10 w-full pb-5 pt-5 text-center md:w-auto md:pb-0 md:pt-40 xl:pt-0"><img src="'+O+'" alt="logo" class="2xl:mb-[186px] mx-auto mb-10 md:mb-5"><div class="text-xs text-white"><h1 class="mb-4">好室旅店。HOUSE HOTEL</h1><p class="mb-2">花蓮縣花蓮市國聯一路1號</p><p class="mb-2">03-8321155</p><p class="mb-2">HOUSE@HOTEL.COM</p></div></div>',1),ae={class:"z-10 w-[80%] text-white xl:w-auto"},de={__name:"HomeView",setup(p){return(c,d)=>(l(),n("main",null,[o(A),e("section",se,[e("div",te,[o(I)]),e("div",oe,[le,e("div",ae,[o(ee)])])])]))}};export{de as default};