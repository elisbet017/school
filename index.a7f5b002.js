const e={button:document.querySelector("#btn"),input:document.querySelector("#user-num-input"),result:document.querySelector("#result")},t=Math.floor(100*Math.random());let u=0;e.button.addEventListener("click",(function(){u+=1,Number(e.input.value)>t&&alert("Введене число більше");Number(e.input.value)<t&&(e.result.innerHTML+="Введене число менше",alert("Введене число менше"));Number(e.input.value)===t&&(e.result.innerHTML+="Вгадали",alert("Вгадали"));alert(`Кількість спроб: ${u}`)}));
//# sourceMappingURL=index.a7f5b002.js.map
