const a=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}};a();var c="/sl-landingpage-2009/assets/salvo.min.9c87e8ad.svg",d="/sl-landingpage-2009/assets/fb.min.e88937b8.svg",u="/sl-landingpage-2009/assets/twitter.min.0cd040cc.svg",m="/sl-landingpage-2009/assets/email.min.c15c9ab7.svg";const f=1500,n=r=>document.querySelector(r),g=()=>{const r=n("#salvo"),o=30;r.style.top=Math.random()*o+"px",r.style.left=Math.random()*o+50+"px"};document.addEventListener("DOMContentLoaded",()=>{n("#salvo").src=c,n("#fb img").src=d,n("#twitter img").src=u,n("#email img").src=m,setInterval(g,f)});
