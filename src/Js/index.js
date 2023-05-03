const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () =>{

        const idSelecionado = personagem.attributes.id.value;
        const personagemSelecionado = document.querySelector('.selecionado');
        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        const nomeJogador1 = document.getElementById('nome-jogador-1'); 
        const nomeSelecionado = personagem.getAttribute('data-name');
               
        if(idSelecionado === 'shao-kahn') return;
       
        personagemSelecionado.classList.remove('selecionado');
        personagem.classList.add('selecionado');
        
        imagemJogador1.src = `./src/image/${idSelecionado}.png`;
        nomeJogador1.innerHTML = nomeSelecionado;
    })
});