const toggleMobileMenu = () => {
    document.getElementById('navmenu').classList.toggle('mobile-hide');
    document.getElementById('navmenu-bshow').classList.toggle('mobile-hide');
    document.getElementById('navmenu-bhide').classList.toggle('mobile-hide');
};

let hiddenCmd = {
    'gaming': 'gaming'.split(''),
    'rotate': 'rotate'.split(''),
};

let hiddenCmdProgress = {
    'gaming': Array(hiddenCmd['gaming'].length).fill(false),
    'rotate': Array(hiddenCmd['rotate'].length).fill(false),
};

const evalKeyCommand = (t, e, fn) => {
    var pnt = hiddenCmdProgress[t].lastIndexOf(true);
    if(hiddenCmd[t][pnt+1] === e.key){
        hiddenCmdProgress[t][pnt + 1] = true;
    }
    else{
        hiddenCmdProgress[t] = Array(hiddenCmd[t].length).fill(false);
    }
    if (hiddenCmdProgress[t].every(v => v === true))
    {
        fn();
    }
};

document.addEventListener('keypress', (e) => {
    evalKeyCommand('gaming', e, () => {
        const body = document.getElementsByTagName('body')[0];
            let a = 0;
            let vol = 0;
            let audio = document.createElement('audio');
            audio.src = '/media/nc282335.opus';
            audio.loop = true;
            audio.volume = 0;
            body.classList.add('bounce-all');
            setInterval(()=>{
                a += 30;
                if (a > 360) a = 0;
                body.setAttribute('style', `background-color:hsl(${a}deg 100% 50%);`);
                
                vol += 0.05;
                if (vol > 1.0) vol = 1.0;
                audio.volume = vol;
            }, 100);
            audio.play();
        });
    evalKeyCommand('rotate', e, () => {
        const body = document.getElementsByTagName('body')[0];
            body.classList.add('rotate-all');            
    });
});
