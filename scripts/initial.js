addEventListener('load', () => {
    const screen = document.querySelector("#root #home")
    screen.onclick = () => {
        goToNextScreen('home', 'options')
        screen.onclick = () => {}
    }
})  

/**
 * 
 * @param {HTMLElement} prev 
 * @param {string} next 
 * @param {HTMLElement} root
 */

function goToNextScreen(prev, next) {
    const root = document.querySelector('#root')
    const div = document.createElement('div')
    const screen = document.querySelector(`#root #${prev}`)

    div.innerHTML = pages[next]
    div.id = next
    div.setAttribute('hide', 'false')
    screen.setAttribute('hide', 'true')
    
    setTimeout(() => root.appendChild(div), 300)
    setTimeout(() => root.removeChild(screen), 300)

    if (next === 'obrigado-avalia' || next === 'obrigado') {
        setTimeout(() => goToNextScreen(next, 'options'), 3000)
    }

    if (next === 'procura') {
        setTimeout(() => goToNextScreen(next, 'dormiu'), 2000)
    }
}

const pages = {
    "home": `
            <h1>Seja bem vindo</h1>
            <p>Toque na tela para começar o seu atendimento</p>
    `,
    "options": `
            <h1>Escolha uma opção</h1>

            <div class="cards">
                <div class="card" onclick="goToNextScreen('options', 'name')">
                    <img src="./images/porta.svg" alt="">
                    <span>Check-in</span>
                </div>

                <div class="card" onclick="goToNextScreen('options', 'cabine')">
                    <img src="./images/caixa.svg" alt="">
                    <span>Solicitar Cabine</span>
                </div>

                <div class="card" onclick="goToNextScreen('options', 'avaliar-1')">
                    <img src="./images/comentario.svg" alt="">
                    <span>Avaliar Sistema</span>
                </div>
            </div>
    `,
    "name": `
            <button class="home-button" onclick="goToNextScreen('name', 'options')">
                <img src="./images/casa.svg" alt="">

                Voltar à tela inicial
            </button>

            <h1>Responda algumas perguntas 🤔</h1>
            <input type="text" placeholder="Qual é o nome do paciente?">

            <div class="button-area" style="justify-content: end">
                <button class="next button" onclick="goToNextScreen('name', 'time')">
                    <img src="./images/arrowR.svg" alt="">
                </button>
            </div>
`,
    "time": `
            <button class="home-button" onclick="goToNextScreen('time', 'options')">
                <img src="./images/casa.svg" alt="">

                Voltar à tela inicial
            </button>

            <h1>Responda algumas perguntas 🤔</h1>

            <div>
                <p>Qual é o horário da consulta?</p>
                
                <div class="time-input">
                    <input class="hr" type="number" max="24" min="0" placeholder="00">
                    :
                    <input class="mn" type="number" max="60" min="0" placeholder="00">
                </div>

            </div>

            <div class="button-area">
                <button class="back button" onclick="goToNextScreen('time', 'name')">
                    <img src="./images/arrowL.svg" alt="">
                </button>

                <button class="next button">
                    <img src="./images/arrowR.svg" onclick="goToNextScreen('time', 'procura')" alt="">
                </button>
            </div>
    `,
    "procura": `
        <h1>Procurando Consulta</h1>
        <div id="loading">
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="#FFF" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </div>
    `,
    "dormiu": `
            <button class="home-button" onclick="goToNextScreen('dormiu', 'options')">
                <img src="./images/casa.svg" alt="">

                Voltar à tela inicial
            </button>

            <h1>Agora... Sobre o paciente 🤔</h1>

            <div>
                <p>O paciente dormiu bem?</p>
                
                <div class="facial-cards">
                    <div class="facial" onclick="goToNextScreen('dormiu', 'alimento')">
                        <img src="./images/triste.svg" alt="">
                        Não
                    </div>
                    <div class="facial" onclick="goToNextScreen('dormiu', 'alimento')">
                        <img src="./images/mediano.svg" alt="">
                        Mediano
                    </div>
                    <div class="facial" onclick="goToNextScreen('dormiu', 'alimento')">
                        <img src="./images/feliz.svg" alt="">
                        Sim
                    </div>
                </div>
            </div>

            <div class="button-area">
                <button class="back button" onclick="goToNextScreen('dormiu', 'time')">
                    <img src="./images/arrowL.svg" alt="">
                </button>
            </div>
        `,
    "alimento": `
            <button class="home-button" onclick="goToNextScreen('alimento', 'options')">
                <img src="./images/casa.svg" alt="">

                Voltar à tela inicial
            </button>

            <h1>Agora... Sobre o paciente 🤔</h1>

            <div>
                <p>O paciente se alimentou corretamente?</p>
                
                <div class="facial-cards">
                    <div class="facial" onclick="goToNextScreen('alimento', 'doente')">
                        <img src="./images/triste.svg" alt="">
                        Não
                    </div>
                    <div class="facial" onclick="goToNextScreen('alimento', 'doente')">
                        <img src="./images/mediano.svg" alt="">
                        Mediano
                    </div>
                    <div class="facial" onclick="goToNextScreen('alimento', 'doente')">
                        <img src="./images/feliz.svg" alt="">
                        Sim
                    </div>
                </div>
            </div>

            <div class="button-area" onclick="goToNextScreen('alimento', 'dormiu')">
                <button class="back button">
                    <img src="./images/arrowL.svg" alt="">
                </button>
            </div>
    `,
    "doente": `
            <button class="home-button" onclick="goToNextScreen('doente', 'options')">
                <img src="./images/casa.svg" alt="">

                Voltar à tela inicial
            </button>

            <h1>Agora... Sobre o paciente 🤔</h1>

            <div>
                <p>O paciente está doente?</p>
                
                <div class="facial-cards">
                    <div class="facial" onclick="goToNextScreen('doente', 'estresse')">
                        <img src="./images/nao.svg" alt="">
                        Não
                    </div>
                    <div class="facial" onclick="goToNextScreen('doente', 'estresse')">
                        <img src="./images/sim.svg" alt="">
                        Sim
                    </div>
                </div>
            </div>

            <div class="button-area">
                <button class="back button" onclick="goToNextScreen('doente', 'alimento')">
                    <img src="./images/arrowL.svg" alt="">
                </button>
            </div>
    `,
    "estresse": `
            <button class="home-button" onclick="goToNextScreen('estesse', 'options')">
                <img src="./images/casa.svg" alt="">

                Voltar à tela inicial
            </button>

            <h1>Agora... Sobre o paciente 🤔</h1>

            <div>
                <p>O paciente teve algum momento de estresse no percurso?</p>
                
                <div class="facial-cards">
                    <div class="facial" onclick="goToNextScreen('estresse', 'obrigado')">
                        <img src="./images/nao.svg" alt="">
                        Não
                    </div>
                    <div class="facial" onclick="goToNextScreen('estresse', 'obrigado')">
                        <img src="./images/sim.svg" alt="">
                        Sim
                    </div>
                </div>
            </div>

            <div class="button-area">
                <button class="back button" onclick="goToNextScreen('estresse', 'doente')">
                    <img src="./images/arrowL.svg" alt="">
                </button>
            </div>
    `,
    "obrigado": `
            <h1>Obrigado 😄</h1>
    `,
    "cabine": `
            <h1>Cabine 1 livre!</h1>
            <button class="button" onclick="goToNextScreen('cabine', 'options')">Estou indo</button>
    `,
    'avaliar-1': `
            <h1>Algum problema ocorreu durante seu auto-atendimento?</h1>

            <div>                
                <div class="facial-cards">
                    <div class="facial" onclick="goToNextScreen('avaliar-1', 'avaliar-2')">
                        <img src="./images/nao.svg" alt="">
                        Não
                    </div>
                    <div class="facial" onclick="goToNextScreen('avaliar-1', 'avaliar-2')">
                        <img src="./images/sim.svg" alt="">
                        Sim
                    </div>
                </div>
            </div>
    `,
    'avaliar-2': `
            <h1>Você recomendaria este sistema para seus amigos?</h1>

            <div>                
                <div class="facial-cards">
                    <div class="facial" onclick="goToNextScreen('avaliar-2', 'obrigado-avalia')">
                        <img src="./images/nao.svg" alt="">
                        Não
                    </div>
                    <div class="facial" onclick="goToNextScreen('avaliar-2', 'obrigado-avalia')">
                        <img src="./images/sim.svg" alt="">
                        Sim
                    </div>
                </div>
            </div>
    `,
    "obrigado-avalia": `
            <h1>Obrigado pela avaliação!</h1>
    `
}