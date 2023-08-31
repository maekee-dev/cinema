let cursor = document.querySelector('.cursor');
        let cursorScale = document.querySelectorAll('.cursor-scale'); 
        let mouseX = 0;
        let mouseY = 0;
        gsap.to({}, 0.016, {repeat:-1, onRepeat:function(){gsap.set(cursor, {css:{left:mouseX, top:mouseY}})}});
        window.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; })
        cursorScale.forEach(link => {
            link.addEventListener('mousemove', () => {
                    gsap.to('.cursor-inner-square', {rotate: 45, width: '20px', height: '20px', duration: .2})
                    gsap.to('.cursor', {rotate: 45, width: '20px', height: '20px', marginLeft: '-10px', marginTop: '-10px', duration: .2})
            });
            link.addEventListener('mouseleave', () => {
                gsap.to('.cursor-inner-square', {rotate: 0, width: '5px', height: '2.5px', duration: .2})
                gsap.to('.cursor', {rotate: 0, width: '30px', height: '30px', marginLeft: '-15px', marginTop: '-15px', duration: .2})
            });
        })