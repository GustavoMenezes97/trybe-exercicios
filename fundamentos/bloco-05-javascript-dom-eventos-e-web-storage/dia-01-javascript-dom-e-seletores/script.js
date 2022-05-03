 /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
        1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
        2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
        3. Crie uma função que mude a cor do quadrado vermelho para branco.
        4. Crie uma função que corrija o texto da tag <h1>.
        5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
        6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

        function changeP() {
        let getP = document.getElementsByTagName('p')[0];
        getP.innerText = 'Me vejo trabalhando em uma empresa legal, com um salário maneiro.';
    }

        function changeBackgroundColor() {
        let getMain = document.getElementsByClassName('main-content')[0];
        getMain.style.backgroundColor = 'rgb(76,164,109)';
    }

        function changeBackgroundColorCenter() {
        let getCenter = document.getElementsByClassName('center-content')[0];
        getCenter.style.backgroundColor = 'white';
    }

        function correctTitle() {
        let getTitle = document.getElementsByClassName('title')[0];
        getTitle.innerText = 'Exercício 5.1 - JavaScript';
    }

        function allTextP() {
        let getCenter = document.getElementsByClassName('center-content')[0];
        getCenter.style.textTransform = 'upperCase';
    }

        function displayAllContentP() {
        let getCenter = document.getElementsByClassName('center-content')[0];
        console.log(getCenter.innerText);
    }

        changeP()
        changeBackgroundColor()
        changeBackgroundColorCenter()
        correctTitle()
        allTextP()
        displayAllContentP()