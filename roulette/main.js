/*переменные для генерации*/ 
var min = 1;
var max = 1000000;
var chance = [0.005, 0.095, 0.2, 0.3, 0.4];
var range = [0];
/*переменные для движения*/ 
var f = Math.PI;
var s = 1.2 * Math.PI;
var radius = 200;
var speed = 20;
var radiusSmallCircle = 35;
var counter = 0;
/*переменные для выигрыша*/ 
var gainCircle;
var gainUser;
/*переменные для для изображений*/ 
var arrowObject;
var arrow = '<img class="icon icons8-Развернуть" width="64" height="64" src="data:image/png;base64,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">';
var sweetObject;
var knifeObject;
var pistoleteObject;
var avtomateObject;
var pulemetObject;
var textField;
/*переменная для запуска, круг, кружки*/ 
var startButton;
var round;
var circles;

window.onload = function () {
    initChance();
    getElements();
    for (var i = 0; i < 5; i++) {
        var newCircle = document.createElement("div");
        createNewCircle(newCircle, i);
        round.appendChild(newCircle);
    }
}

function getElements() {
    startButton = document.getElementById("start");
    round = document.getElementById("round");
    circles = round.getElementsByClassName("css");
    startButton.addEventListener('click', startClick);

    arrowObject = document.createElement('div');
    arrowObject.classList.add('arrow');
    arrowObject.innerHTML = arrow;

    round.appendChild(arrowObject);
    arrowObject.style.visibility = 'hidden';

    textField = document.createElement('text');
    textField.classList.add('text');
    textField.innerText = 'Ваш выигрыш: ';
    round.appendChild(textField);
    textField.style.visibility = 'hidden';

    sweetObject = document.createElement('div');
    sweetObject.classList.add('sweet');

    round.appendChild(sweetObject);
    sweetObject.style.visibility = 'hidden';

    knifeObject = document.createElement('div');
    knifeObject.classList.add('knife');

    round.appendChild(knifeObject);
    knifeObject.style.visibility = 'hidden';

    pistoleteObject = document.createElement('div');
    pistoleteObject.classList.add('pistolete');

    round.appendChild(pistoleteObject);
    pistoleteObject.style.visibility = 'hidden';

    pulemetObject = document.createElement('div');
    pulemetObject.classList.add('pulemet');

    round.appendChild(pulemetObject);
    pulemetObject.style.visibility = 'hidden';

    avtomateObject = document.createElement('div');
    avtomateObject.classList.add('avtomate');

    round.appendChild(avtomateObject);
    avtomateObject.style.visibility = 'hidden';
}

function startClick() {
    continuance = 48;
    startButton.removeEventListener("click", startClick);
    animation();
}

function createNewCircle(newCircle, i) {
    newCircle.classList.add("css");
    newCircle.angle = f + s * i;
    newCircle.style.left = radius + radius * Math.sin(newCircle.angle) - radiusSmallCircle + 'px';
    newCircle.style.top = radius + radius * Math.cos(newCircle.angle) - radiusSmallCircle + 'px';
    newCircle.innerHTML = '<img class="icon icons8-Гроб" width="70" height="70" src="data:image/png;base64,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">    ';
}

function animation() {
    if (counter < continuance) {
        for (var i = 0; i < circles.length; i++) {
            redrawing(circles[i]);
        }
        counter++;
        requestAnimationFrame(animation);
    } else {
        textField.style.visibility = 'hidden';
        sweetObject.style.visibility = 'hidden';
        pistoleteObject.style.visibility = 'hidden';
        avtomateObject.style.visibility = 'hidden';
        pulemetObject.style.visibility = 'hidden';
        knifeObject.style.visibility = 'hidden';
        counter = 0;
        startButton.addEventListener('click', startClick);
        gainCircle = getGainCircle();
        numberGeneration = gainCircle.addEventListener('click', randomGeneration);
    }
}
/*перерисовка*/ 
function redrawing(circle) {  
    circle.style.left = (radius + radius * Math.sin(circle.angle) - radiusSmallCircle) / 4 + '%';
    circle.style.top = (radius + radius * Math.cos(circle.angle) - radiusSmallCircle) / 4 + '%';
    circle.angle = circle.angle + s / 16;
}
/*получение выигрышного кружка*/ 
function getGainCircle() {
    for (var i = 0; i < circles.length; i++) {
        var top = parseInt(circles[i].style.top);
        if (top < (-6) && top > (-8)) {
            arrowObject.style.visibility = 'visible';
            return circles[i];
        }
    }
}
/*инициализация шанса*/ 
function initChance() {
    for (var i = 0; i < chance.length; i++) {
        range[i + 1] = range[i] + chance[i] * max;
    }
}
/*рандом*/ 
function randomGeneration() {
    var chislo = Math.round(Math.random() * (max - min)) + min;
    console.log(chislo);
    this.removeEventListener('click', randomGeneration);
    findGain(chislo);
};
/*поиск выигрыша*/ 
function findGain(numberGeneration) {
    for (var i = range.length - 1; i > 0; i--) {
        if (numberGeneration > range[i - 1] && numberGeneration < range[i]) {
            setGainUser(chance[i - 1]);
            console.log(chance[i - 1]);
        }
    }
}
/*получение выигрыша*/ 
function setGainUser(gainUser) {
    textField.style.visibility = 'visible';
    if (gainUser == 0.4) {
        sweetObject.style.visibility = 'visible';
        sweetObject.innerHTML = '<img class="icon icons8-Конфета" width="100" height="100" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADvklEQVRoQ+2ZW2hURxzGf4N5EVcMKPqmRa0Kgu4+iclus0ow9QJeEC9PJih4SyxWg4SojSnWO3h/MhhREDVGg7cogUQ3BImWRAr6kMSaKrRaqrEqFGoycubkGGPO6jlnZy+BzNOynJ35ff/vm5kzs4J+3kQ/52dAQLIdHHAgmgMyxHxgARI/Aj9nKmCor4sN62p48vg676kSd3kSq4PaHZAVhbuYNn0zP65P468/e/hq6s3P2UHruw4kB0njkKijw6sQrQJkiJMUFueSMxuOH4bK8ybX1AAcOAIPmmBTQW/WzUV/0/GmQKw4es6LCG0CZJCDCH4g4zso/QVaW2BNnsm0aAms2wA3b8C+nT2chcUosS+ed7F3T1gcaYy4FaFPQIjfgW8UwOVq8PlgdR60tYAFarniGwprCyBnDrx9a7rS2tJMGjPcxkmnACPHw5QAC7jyAhw/ZMbHiJEB2tYK+w/D+G974A2RRpPsEPWUuHFBn4AgJQh+6pX5X+/9y5aNKxhEnVFZGSRMcUkZM7PHfqy8BW9Sd/A/ATerkzYBqoCGCMhFkM620mYxa3vYrpry4pZqrlTmqHhZzYjVFD+MHHVMbKrId+qCVgFOB+0WW4c/kMWUAGSGzEgZrbXlHzE5b4TTvpIn4FrJVrKzf+4FaiyzjY0vRf7p4SkvQLnwsFyqvaG5CRrufGQWEecvmUlzQAkIIe0q3S8EyBALgEt9BEhui3psJ7+tWKdZ0/2c/K3sFRMmpvfp9/69NpG5cbzT8ZISIVm7p4mMTL8t5JWq3WLxvqKUFSBD5AInbQEl7aK++3XEoYKEOvBFeBN4oYhw2SG7eixhAhzAnxIR5Y6rlhABsqroBN/PXRmV7NnTd2Lccp8r8u6H4y7gq/B/tP/H7YZJYtWx9pQTEHWtt0glD0gj7PYM8KnQuDkgM/AziFqg71qvtuHY4eM2iRMFHxcB8lT+UubNO4vPZ++ucYS8enWZ10P85/NEa4QSDa/Vga/GBl7TSVg00OxltYn2Gy0OyDDpdKpbCfsJGyd4LQ4o+PfUquvDaK2TgO7KW0PF5IA8sX4MWRmPGD1mcFT46mtlYv6uVTpjo2UfSAV4zxFyFBvIExHK41V5zxFKJXhPDsigmrDRz6wergdjccnVJJa3SuvImpkVdUCX59lYwD1FSL682cWQIfaikwDvOkIypP5JMW+gezdPp6nEO/DpDXTP6EmDd+2Aeo23bqBNAeVu7/N1VF3LRqYbxGt/rlYhr4PE83cDAuJZXSd993sHPgAcTUFAE8KGWQAAAABJRU5ErkJggg==">';
    }
    else if (gainUser == 0.3) {
        pistoleteObject.style.visibility = 'visible';
        pistoleteObject.innerHTML = '<img class="icon icons8-Пистолет" width="100" height="100" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAD4ElEQVRoQ+1YQU8TURD+XkvBgmBBRUS0gNEYYyIkJl4wgtJo9AB6kkYjSD2LJ72pv0C8mVhiD6Z4UiTRQ4sRI17wYEk8YECBiGAkSi0KStsd81YWrd3t7nZbKrE97s77Zr6Z783MlmGV/9gqjx9ZApmuYLYC2QoYzEBWQgYTaPi4pgo4nC765Yk8fm9Xm2GvGgG0+FUk0Hnn3ksANRp9LZs9fPRI8cjxY8f0wsXZd5w+GRNzIgJLWdfnc9UTeDYwgFAoFMe6qKgIB+rq9GVDxjrtFTAcoQqAZgKXO91JSShdBMo2lIjQ/w+B3y0sXTnVhyt1MM0V+BcJEGHo4pmTMa1dsY06nOdrQIIHjO0NLy5ienwUJAiKaVtftgVrbcX60qrVmmjI390lO5MSTuL65lZbTr45wMDsM1OTmA8FZV1a1xaitMIOInyJhL/fXJibu0RETwd9vfX8AMexWM2dYOysOM+Ba31e91Wt8SeyU10lHM5zrYDp9uL3BUyPv5HFKt1aBWtBAQChbWbqc09eHs0SITjoe7BcEpFEfs4sBwgLkar+u57xFSHwp+OJ4VeyPu279ojPw/OR4v4eT3D/kSYenF0g6nzh673I3x1uaW82MXYfCeSQDCHVCtSfaq20mHLGOLgaAb/XLeLtO9pcbyZ6IsqFEBj0Pah1tLRzCV1IpXw4viqBRqfrKgOufA3O4tOH9zFJyrMWYP3mLbDk5v6qwB/SWCLhIaLgoK+3xtHSHuANgQQ09N119yeTbbkzqpfYYjW/BGOVHybG8GPhWwxGefVONDQcAmMA34H4uh0Wotfk9C21ZUlmK0JAyv586Atmpt7F+ZQI8BcDzzkBTb+A3+uu1WSpwUixAkstdIyB2SZHXyMaCcfBSe1Tg5/fJit1iRtbXB2M4bqc9qVoCotLULKpnN/UoTBFm1PVGvUkRLECjc72cT7AlLLPnWyu3I7cNVYIRCced3f16HGcKltZAtLwUtK+2L5MJmzbuTum/6cqKD04sgQana4eBjR9nJzAwtc5Wbz8Ihs2lleI8lHaU/QEkqxtHAFp8kajEUyODCviLi9vRDf83V0dyQZg9FwcAWnkJ7q83GnFjl0wm3Myqn9Ryn9nQBr5ieTDJ3CZvSrj+lcg4OoHw0G5ySuRtZWWYV3JhozrX5aA1D6VFjd+iE9gvv+kejFL5j7ES2jpb8SptyMIL/6Iw7Tk5qG8eof4PNWLWUoISBVQA+NfX33dbpuaXbrfy1TgfA2B+ArdpOic8BSMdfi9twLpDlANX/V7QA0g0++zBLIVMJiBrIQMJtDw8WwFDKfQIMCqr8BP1lCiQAk/sHEAAAAASUVORK5CYII=">';
    }
    else if (gainUser == 0.2) {
        pulemetObject.style.visibility = 'visible';
        pulemetObject.innerHTML = '<img class="icon icons8-Пистолет-пулемет" width="100" height="100" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFBklEQVRoQ+1Y309bdRT/fG+LTNExpjiZiQVlOqIIi4MuxmTjYeDLCvsLdnnxdfAAJoZGFogm9AGeffHuPyjlZZREMVkWKSQrzoBRHGDmNjRCcdkySnuP+bb93t57e1su/bFmpvfttt/vOedzfnzOOZfhOX/Yc24/KgDKHcFKBCoRKNAD/98U6uz2hBljbUTwR6OsPzzvjxTorJJczxoBd08vCY1EiABqfyg44y+JFTaFcqcCjELB6TPiii0A4vDC7HRZU044VW+HwSB5ZOI2GGu36ZBnfmw1dDOhMzsAr09Lm0KsC3wzie2t+xkijp84Cc9ng3mLfmYAlLGhrEbKXl/BAPRRMKSQvnDz1pIMcdbr7p7eQkSDCGAsnUYagGIZz627c+t7PHn0b4ahL71yFK0fdxUEwEwoJQFQFAtzCMlaxMWMQqlA8BQKBdN0bqTRIrGQMF6whhUYIroejUoD5g7fcbGvXZLoNr+jquzM4pw/fO7TvkZVVUcZY1cOTaNPnzxGfD+Kmtq6Qzs1FwDGWNOPN/wbZqHcWCJa57/rz+h/P1QfeLy7g+Wb3+H4iQY0t52Fs+oF20ByAcjW1d09lwYAaTKpRB1cmJ2ZEgoP7MT8oOydkEGYAmO14uIvS7ewvfUA9W+6cKr9bEkBdHZ75hlj57kSIvohFAxcyKXQcrZJgAD7VlyM7UextryEhsZTqH2tvqQAzERy0PxlDWB08hjisR3blmY5mF8Kpadgc8FaqbEEoGeCZCiT3Q9EcTB2D4BLVdX+xbkZJZ2fHj/AevV5K6dYTQBp6fxEs0EZG7LUXZQIuHs8UwC7mkbMZzwGIvUuEcYkSeLptbEwO93Ez+gZYm+P1QlqlL2+MIC2tfAi9qN7CRKoqj6SFEvoUsaH5s1eLRKAXk5vLiGciDilQSW6vhgMyMnFgjeUQGL07uz2cI7+knN7KBiQxT3ZOzEPsPObqz8lRou3Trei5miKG0oFwJw+KTZIACCitWhU6jA3H3dPEnCcsa6lG37Nq/LIBGezq/d+W8GjnW00NDXjWP0bIgLXlPGhUXMExCqb0rssnJStHjPyMDN9kjXAY85B5Hg2F2anG/X/Czbbfvgntv5YR+2rr+PkO++mAFBYGR/WVsN8CcMCgDF9hGBVxc+MUZwv+hbKNlWV9fG2bwAw+nUj4s71/b2nCRqWHE6899G59BGHs04ZHSzoY4EBgFX66OrAkN92PSaP+DbA4BKFbKoDyzSyK5ufMy00ZvZJizLTpl0lstc3AGBSpFFVdTWa2zrE9QgczqZComDeyAzsozdSTIZ2DdeYKJVG/F1EwU4x29WjAciVPlzYQS09l0J5xKeA4Urk74d4sL6WqAXX6Q9wpOblVEGrl5Xxz/P65qTbyLKnj52hKicAXRTu//4rdv/5KwGCNzaH08mvRhCnLuWrYQMJ2ImCBqDzoifKJFbFmxYvDT1jEtG1UDCQwdl2FGiplOoJ/F00tuoXa/B2q8akEWVs6NBLhw7ApRUmSS16owQYQL1c6GdFmQ+IsViYM1I8FsPm6h04nA64Wj5MqaR+ZWxYm63sOseCRlU+SvcZRgmVVkJzgfftCs12Tv5ioh0OllgXtYdoFwwD+RifQaN6ucmiToIhoshBLd0uOMOuwY1XcSGf3Bf6yvKxVtv6CjQ+ZwTserTc58oSgWKCrgAopjfzkVWJQD5eK+adSgSK6c18ZP0HJLhiTxuWhRUAAAAASUVORK5CYII=">';
    }
    else if (gainUser == 0.095) {
        avtomateObject.style.visibility = 'visible';
        avtomateObject.innerHTML = '<img class="icon icons8-Штурмовой-автомат" width="100" height="100" src="data:image/png;base64,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">';
    }
    else if (gainUser == 0.005) {
        knifeObject.style.visibility = 'visible';
        knifeObject.innerHTML = '<img class="icon icons8-Пехотный-нож" width="100" height="100" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEC0lEQVRoQ+2YX2hTVxzHv+c05jZtqmncmtiwtlrQF8VWaWQk0wiNjIEaZIj2wbb+wwehDnzX9yG2D4Ph6NLtoZENtpb5suVh7ViFKcxUnwzMKv4Z6LSJVdokbc84kcSY3D8n7b3pLXgfk1/O/XzO73fO7+QQrPKHrHJ+vBdY6QyaPgO3bk07ZjOp7kUg5Pe69xZPmGkFfok+8TvXVZ0A0JOD9nldJbymEgj/POVg6fRBwnCxtsaa9LhrthfOuGkFwj/E27CIPgAhAA4Ovda+5oa7ocZreoFwJN4DgnBxbTc22Mbtduue3OeMYdK/y9VmqjWgBM8hW1vq4lWUbs4DM4z6drl4ht55VmwNqMFbLPTxpqY6TyEpI+wLf4e73xQCavAcsMlTO1EtWXyFsHSNdePH7fX3TSEw/NM/LJVekO2BkkTjzZ66t6WTjWLjPq87IPeDipbQj9fufVIrWXfa6yyXHz15jWIJSsnLTc32fymhW0Rmn8dUTCBXNq4GG9bZrchkFjH1cCbPqQQPsAGf131O6chSMYHCsvlwfTUkqQo8C/xRgVcsnZyQ4QJLLRu+79darYH29vqE2oHRUIGllo0ovOFrYCllUw68YQJGl01hSS2rhDqCoTZC2O8A7qfTZG9sbCRRibLRTcC770CMEJI98jKG2JFD57+pd7i+yr1AdLcpt2x0E+gI7u+hlOZPkuudjTjw6RlIkq1k41DaKpcDr8saEJEwCl4XgWDX8Z70XCo89/pVftaLMyF3OFvuzOvSyDg88KaE0nOzUJJwOqr//MApbQNYDAwtDCQh0qTUGtiyBQrhc4MpSVglW3Ktzbb784Mf3eax/KZBq8OKwC+5hOTg1SQ+23dq4mzvDr8oVDlxZfcBNXglCWf9hoVGz9bWwUtnH5QDJxJbloAIvJIECLmTmsNu3uxEwERjhAU6j548RwguFw985lgXNrgacOHLkr+rJQsbwNhfv46W3K6JwsrFCQkEj54YAiHdcgME9/jR2tyEr78fLv2ascnE86dXKKHZ7swYkjd+G83e++j1aAqowatCMDaZmV0IjI0MJXizI4T2M0YCN6MjMb3gNXchPeD1hC2rhFYDvGIGOrtOXiTAhWLjvtO92VuA/islN4FvQgvKxuiZz40vuwY6u07NEDC7nAD/bEBOgGE8Mzsf4jVfKXjZDPCb4ugfwzefvXhkEQZh7LtoZDB/jy/8Ox0CSzIQvnp3ajr5rCU6EcH8fEr7FSsIL5+Bq3Hekfqmk0+hKbHC8IqL+NtIfIgQdKtKmABetQ+oSpgEXrORFUpc//vaYnLmPwrGBqKRQcW7Su1Fo2+E5lGCS4AgRCgCvYc363oM0ENFU0CPlxg5xnsBI2dXZOxVn4H/ATQvBE/OuljTAAAAAElFTkSuQmCC">';
    }
}





