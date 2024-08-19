import{a as m,i as w,S as L}from"./assets/vendor-vRkA-ooE.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const o=document.getElementById("email"),a=document.querySelector(".comments"),g=document.querySelector(".work-together__form"),c=document.getElementById("emailSuccessMessage"),l=document.getElementById("charCount"),u=document.querySelector(".work-together__button"),f=document.querySelector(".modal-overlay"),p=document.querySelector(".modal"),E=document.querySelector(".close-btn"),S=document.querySelector(".modal-title"),x=document.querySelector(".modal-text");o.addEventListener("blur",b);a.addEventListener("input",()=>{const t=a.value.length;window.matchMedia("(min-width: 768px)").matches&&(l.style.display="block"),l.textContent=`${t}`,b()});g.addEventListener("submit",t=>{t.preventDefault(),l.style.display="none",p.classList.remove("is-hiden"),f.classList.remove("is-hiden"),m.defaults.baseURL="https://portfolio-js.b.goit.study/api",m.post("/requests",{email:o.value.trim(),comment:a.value.trim()}).then(s=>{S.textContent=s.data.title,x.textContent=s.data.message}).catch(s=>{var i,n;w.show({message:((n=(i=s.response)==null?void 0:i.data)==null?void 0:n.message)||s.message||"An error occurred",backgroundColor:"#ef4040",position:"topRight",messageSize:16,messageColor:"#fff",messageLineHeight:"150%",timeout:4e3})}).finally(()=>{g.reset(),l.textContent="0",o.classList.remove("error"),o.classList.remove("success"),c.textContent="",u.disabled=!0})});function b(){o.checkValidity()&&o.value.trim()!==""?(o.classList.remove("error"),o.classList.add("success"),c.textContent="Success!",c.style.color="#3cbc81"):(o.classList.remove("success"),o.classList.add("error"),c.textContent="Invalid email, try again",c.style.color="#e74a3b");const t=o.checkValidity()&&o.value.trim()!=="",s=a.value.trim()!=="";u.disabled=!(t&&s)}u.addEventListener("click",()=>{p.classList.remove(".is-hiden")});const v=()=>{p.classList.add("is-hiden"),f.classList.add("is-hiden")};E.addEventListener("click",v);f.addEventListener("click",v);document.addEventListener("keydown",t=>{t.key==="Escape"&&v()});new L(".swiper-container",{direction:"horizontal",loop:!1,effect:"flip",slidesPerView:1,navigation:{nextEl:".projects-button-next",prevEl:".projects-button-prev"}});const C={reviewsSection:document.querySelector(".reviews-section"),cardsUl:document.querySelector(".reviews-cards")},{cardsUl:h,reviewsSection:y}=C;async function q(){h.innerHTML="";try{const t=(await m.get("https://portfolio-js.b.goit.study/api/reviews")).data;if(t.length===0)y.innerHTML='<div class="not-found-div"><p class="not-found-message">No comments yet :(</p></div>';else{const s=t.map(i=>`<li class="swiper-slide reviews-cards-li"><svg class="icon" xmlns="http://www.w3.org/2000/svg">
          <image href="${i.avatar_url}" width="48" height="48" />
        </svg><h4>${i.author}</h4><p class="card-comment">${i.review}</p></li>`).join("");h.insertAdjacentHTML("afterbegin",s)}}catch(t){y.innerHTML='<div class="not-found-div"><p class="not-found-message">Not Found! :(</p></div>',w.error({title:"Reviews error",message:`${t}`})}}new L(".swiper",{slidesPerView:1,navigation:{nextEl:".right-arrow",prevEl:".left-arrow"},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}}});q();
//# sourceMappingURL=commonHelpers.js.map