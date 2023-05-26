import{o as l,c as b,w as a,a as s,u as o,b as e,d as z,r as T,e as A,f as i,F as _,g,t as v,h as L,T as V}from"./index-8094fb71.js";import{S as c,a as w,N as x,P as y,b as $,A as k,c as C,u as f,d as E,e as F,L as N}from"./LoadingItem-6d81c6fa.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";const O=e("div",{class:"relative overflow-hidden bg-cover bg-[50%] bg-no-repeat"},[e("div",{class:"pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full overflow-hidden bg-black bg-fixed opacity-60"}),e("div",{class:"h-[150vh] w-full bg-[url('@/assets/images/house/homeCarouselFirst.jpeg')] bg-cover bg-center bg-no-repeat md:h-[135vh]"})],-1),B=e("div",{class:"relative overflow-hidden bg-cover bg-[50%] bg-no-repeat"},[e("div",{class:"pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full overflow-hidden bg-black bg-fixed opacity-60"}),e("div",{class:"h-[150vh] w-full bg-[url('@/assets/images/house/homeCarouselSecond.jpeg')] bg-cover bg-center bg-no-repeat md:h-[135vh]"})],-1),I=e("div",{class:"relative overflow-hidden bg-cover bg-[50%] bg-no-repeat"},[e("div",{class:"pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full overflow-hidden bg-black bg-fixed opacity-60"}),e("div",{class:"h-[150vh] w-full bg-[url('@/assets/images/house/homeCarouselThird.jpeg')] bg-cover bg-center bg-no-repeat md:h-[135vh]"})],-1),U=e("div",{class:"relative overflow-hidden bg-cover bg-[50%] bg-no-repeat"},[e("div",{class:"pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full overflow-hidden bg-black bg-fixed opacity-60"}),e("div",{class:"h-[150vh] w-full bg-[url('@/assets/images/house/homeCarouselFourth.jpeg')] bg-cover bg-center bg-no-repeat md:h-[135vh]"})],-1),R=e("div",{class:"swiper-pagination home-carousel"},null,-1),M={__name:"HomeCarousel",setup(d){const n=[x,y,$,k,C];return(u,p)=>(l(),b(o(w),{class:"swiper absolute -z-20 mx-auto h-[150vh] w-screen md:h-[135vh] lg:h-screen",modules:n,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},speed:1e3,loop:!0,autoplay:{delay:3e3},id:"homeCarousel"},{default:a(()=>[s(o(c),{class:"slide"},{default:a(()=>[O]),_:1}),s(o(c),{class:"slide"},{default:a(()=>[B]),_:1}),s(o(c),{class:"slide"},{default:a(()=>[I]),_:1}),s(o(c),{class:"slide"},{default:a(()=>[U]),_:1}),R]),_:1},8,["pagination"]))}};const P={class:"hidden max-w-[825px] grid-cols-1 md:grid md:grid-cols-3"},D=["onClick"],G={class:"flex h-full items-center justify-center bg-cover bg-center md:h-[275px]"},q=["src"],J={class:"group absolute top-0 flex h-full w-full items-center justify-center duration-300 hover:bg-primary hover:opacity-[0.6] md:h-[275px]"},K={class:"name invisible absolute my-auto font-sans text-white group-hover:visible"},Q={class:"relative h-[275px] cursor-pointer overflow-hidden"},W={class:"flex h-full items-center justify-center bg-cover bg-center md:h-[275px]"},X=["src"],Y={class:"group absolute top-0 flex h-full w-full items-center justify-center bg-gray-500 opacity-[0.6] duration-300 md:h-[275px]"},Z={class:"name absolute my-auto font-sans text-white group-hover:visible md:invisible"},ee=e("div",{class:"swiper-pagination roomcards-carousel"},null,-1),se={__name:"RoomCards",setup(d){const{changeStateTrue:n}=f(),{changeStateFalse:u}=f(),p=[x,y,$,k,C],m=z(),h=T([]),H=async()=>{try{const r=await E();r.status===200&&(h.value=r.data.items,u())}catch(r){F(r.message)}};return A(()=>{n(),H()}),(r,pe)=>(l(),i(_,null,[e("ul",P,[(l(!0),i(_,null,g(h.value,t=>(l(),i("li",{key:t.id,onClick:j=>o(m).push(`/reservation/${t.id}`),class:"relative h-[275px] cursor-pointer"},[e("div",G,[e("img",{src:`${t.imageUrl}`,class:"h-full w-full"},null,8,q)]),e("div",J,[e("p",K,v(t.name),1)])],8,D))),128))]),s(o(w),{class:"swiper z-10 max-w-[98%] md:hidden",modules:p,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},"slides-per-view":1,"space-between":10},{default:a(()=>[(l(!0),i(_,null,g(h.value,t=>(l(),b(o(c),{class:"slide",key:t.id,onClick:j=>o(m).push(`/reservation/${t.id}`)},{default:a(()=>[e("div",Q,[e("div",W,[e("img",{src:`${t.imageUrl}`,class:"h-full w-full object-cover"},null,8,X)]),e("div",Y,[e("p",Z,v(t.name),1)])])]),_:2},1032,["onClick"]))),128)),ee]),_:1},8,["pagination"])],64))}},te="/House-Hotel-Trio/assets/logo-c385328a.svg",oe={},le={class:"z-10 w-full pb-5 pt-5 text-center md:w-auto md:pb-0 md:pt-40 xl:pt-0"},ae=L('<img src="'+te+'" alt="logo" class="2xl:mb-[186px] mx-auto mb-10 md:mb-5"><div class="text-xs text-white"><h1 class="mb-4">好室旅店。HOUSE HOTEL</h1><p class="mb-2">花蓮縣花蓮市國聯一路1號</p><p class="mb-2">03-8321155</p><p class="mb-2">HOUSE@HOTEL.COM</p></div>',2),ie=[ae];function ne(d,n){return l(),i("div",le,ie)}const re=S(oe,[["render",ne]]);const ce={class:"container mx-auto flex h-screen items-center pl-2 pr-2 md:pl-32 md:pr-32"},de={class:"absolute bottom-0 left-0 right-0 top-0 h-[150vh] md:h-[135vh] lg:h-screen"},ue={class:"2xl:mt-0 z-10 mt-10 flex w-full flex-wrap justify-center md:justify-between"},he={class:"z-10 w-[80%] text-white xl:w-auto"},_e={__name:"HomeView",setup(d){return(n,u)=>(l(),i("main",null,[s(N),e("section",ce,[e("div",de,[s(M)]),s(V,{name:"fade"},{default:a(()=>[e("div",ue,[s(re),e("div",he,[s(se)])])]),_:1})])]))}},fe=S(_e,[["__scopeId","data-v-f13548e7"]]);export{fe as default};
