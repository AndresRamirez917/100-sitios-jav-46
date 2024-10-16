async function getData(){
    const result = await fetch('https://rickandmortyapi.com/api/character');
    const character = await result.json();
    const characterArr = character.results.map(elemento => Object.entries(elemento));
    const characterArrSliced = characterArr.slice(0,4);
    console.log(characterArr);
    character.results.forEach(element => {
        const ranInt = randomData(1, characterArr.length);
        const ranIndex = ranInt;
        for(i = 0; i < characterArrSliced.length; i++){
            if(element.id == i){
                const box = document.createRange().createContextualFragment(`
                    
              
            <div class="box">
                <img src="${characterArr[ranIndex][8][1]}" alt="">
                <h2>Bussiness</h2>
                <p>Lorem ipsum dolor sit amet consectetur. In pretium pretium feugiat mus sed. Semper laoreet odio tincidunt praesent amet egestas porttitor scelerisque ut.</p>
                <a href="" id="linksito">get started</a>
            </div>
            
                    
                    
                    `)
                    const courses_row = document.querySelector('.courses-row1');
                    courses_row.append(box);
            }
        }
        function randomData(min, max) {
            return Math.floor(Math.random() * (min - max + 1) + max)
        }
    });
}
getData()

async function getData2(){
    const result = await fetch('https://rickandmortyapi.com/api/character');
    const character = await result.json();
    const characterArr = character.results.map(elemento => Object.entries(elemento));
    const characterArrSliced = characterArr.slice(0,5);
    console.log(characterArr);
    character.results.forEach(element => {
        const ranInt = randomData(1, characterArr.length);
        const ranIndex = ranInt;
        for(i = 0; i < characterArrSliced.length; i++){
            if(element.id == i){
                const box = document.createRange().createContextualFragment(`
                    
                    
                <div class="box">
                    <img src="${characterArr[ranIndex][8][1]}" alt="">
                    <h2>Bussiness</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. In pretium pretium feugiat mus sed. Semper laoreet odio tincidunt praesent amet egestas porttitor scelerisque ut.</p>
                    <a href="" id="linksito">get started</a>
                </div>
                
                
                
                `)
                const courses_row = document.querySelector('.courses-row2');
                courses_row.append(box);
            }
        }
        function randomData(min, max) {
            return Math.floor(Math.random() * (min - max + 1) + max)
        }
    });
}

getData2()





