// تأثير ظهور كرة الماتريكس الذهبية عند الضغط في أي مكان
document.addEventListener('click', (e) => {
    const particle = document.createElement('div');
    particle.className = 'click-particle';
    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;
    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 600);
});

// رسالة ترحيبية بالهكرز في الكونسول
console.log('%c [!] أهلاً بك في نظام إدمان المافيا السيبراني ', 'background: #ffd700; color: #000; font-size: 16px; font-weight: bold;');
