/*
1. Desenvolva uma página HTML que replique a imagem acima,
contendo um formulário com todos os itens mostrados.

2. Todos os campos de dados pessoais devem ser preenchidos
obrigatoriamente pelo usuário.

3. Ao carregar a página deve vir previamente marcado um dos radios
buttons.

4. O usuário deve marcar ao menos um checkbox. Deve ser validado o
preenchimento desse input.

5. O campo de texto de label “mini-curriculo” não é obrigatório o
preenchimento pelo usuário.

6. Capture os dados preenchidos no formulário utilizando os métodos
de manipulação do DOM. Ao final, mostre no console.log os dados
preenchidos pelo usuário. 
*/

const cargos = document.querySelectorAll('input[name="cargo"]')

cargos.forEach(cargo => {
    cargo.addEventListener('change', () => {
        console.log(`Opção escolhida: ${cargo.value}`)
    })
})

                //4

function validarCheckbox() {
    const checkboxes = document.querySelectorAll('input[name="interesse"]')
    
    let marcado = false
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            marcado = true
        }
    });

    if (!marcado) {
        alert('Por favor, marque pelo menos uma área de interesse.')
        return false
    }

    return true
}