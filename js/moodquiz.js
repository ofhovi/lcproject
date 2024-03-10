const moodworry = document.getElementById('moodworry');
const moodconcl = document.getElementById('moodconcl')
const moodblock = document.getElementById('moodblock');
const moodblock1 = document.getElementById('moodblock1');
const moodblock2 = document.getElementById('moodblock2');
function yesquiz() {
    moodblock.style.opacity = "0";
    setTimeout(function () {
        moodblock.style.scale = "0";
        moodblock.style.position = "absolute";
        moodblock.style.top = "0";
    },200) 
    moodblock1.style.scale = "1";
    setTimeout(function () {
            moodblock1.style.opacity = "1";
    },200)
}

function noquiz() {
    moodblock.style.opacity = "0";
    setTimeout(function () {
        moodblock.style.scale = "0";
        moodblock.style.position = "absolute";
        moodblock.style.top = "0";
    },200) 
}

function quiz1() {
    moodconcl.innerText = 'It might be just a couple of days that you need to challenge';
    moodblock1.style.opacity = "0";
    setTimeout(function () {
        moodblock1.style.scale = "0";
        moodblock1.style.position = "absolute";
        moodblock1.style.top = "0";
    },200) 
    moodblock2.style.scale = "1";
    setTimeout(function () {
            moodblock2.style.opacity = "1";
    },200)
}

function quiz2() {
    moodconcl.innerText = 'It is not good... You may need to see a psychologist';
    moodblock1.style.opacity = "0";
    setTimeout(function () {
        moodblock1.style.scale = "0";
        moodblock1.style.position = "absolute";
        moodblock1.style.top = "0";
    },200) 
    moodblock2.style.scale = "1";
    setTimeout(function () {
            moodblock2.style.opacity = "1";
    },200)
}

function quiz3() {
    moodconcl.innerText = 'You should see a psychologist in order to get better quickly!';
    moodblock1.style.opacity = "0";
    setTimeout(function () {
        moodblock1.style.scale = "0";
        moodblock1.style.position = "absolute";
        moodblock1.style.top = "0";
    },200) 
    moodblock2.style.scale = "1";
    setTimeout(function () {
            moodblock2.style.opacity = "1";
    },200)
}