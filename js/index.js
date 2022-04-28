'use strict';
const documentReady=()=>{
    const heroTitle=document.querySelector('.hero__title');
    const heroButtonSi=document.getElementById('heroButtonSi');
    const heroButtonNo=document.querySelector('#heroButtonNo');

    const nowSomosNobios=()=>{
        alert('💞Now zomos ParTnEr💞');
        alert('😱Nuestra VoDa Is MañaNa😱');
        window.location.href= 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley';
    };
    
    const evitarKCRompaMyBobo=()=>{
        heroButtonNo.style.position='absolute';
        heroButtonNo.style.top=(Math.random() * window.innerHeight) + 'px';
        heroButtonNo.style.left=(Math.random() * window.innerWidth) + 'px';
    };

    const partner=prompt('🥰 Dyme 2 naMe 🥰');
    //heroTitle.innerHTML=heroTitle.innerHTML + partner + '❤';
    heroTitle.innerHTML+=partner + '❤';

    heroButtonNo.addEventListener('mouseover', evitarKCRompaMyBobo);
    heroButtonSi.addEventListener('click', nowSomosNobios);
};

document.addEventListener('DOMContentLoaded', documentReady);