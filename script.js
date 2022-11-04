const bottom = document.getElementById("buttom-sub");

var form = document.getElementById("form");
function handleForm(e) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);


bottom.addEventListener("click", () => {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let n3 = parseInt(document.getElementById("n3").value);
    let n4 = parseInt(document.getElementById("n4").value);

    if (!(nome = "" || n1 == "" || n2 == "" || n3 == "" || n4 == "" )) {

        let mean = (n1 + n2 + n3 + n4) / 4
        
        console.log(nome.value)
        if (mean > 69) {
            swal.fire({
                position: 'center',
                icon: 'success',
                title: `Parabéns, ${document.getElementById("nome").value}, APROVADO(A)!`,
                text: `Média: ${mean}`,
            })
        } else if (mean < 40) {
            swal.fire({
                icon: 'error',
                title: `F, ${document.getElementById("nome").value}, reprovado(a)!`,
                text: `Média: ${mean}`,
            }) 
        } else {

            let final = (50 - (mean * 6)) / 4
            swal.fire({
                icon: 'warning',
                title: `Ainda há esperanças, ${document.getElementById("nome").value}, você irá fazer final, precisa de: ${ final }`,
                text: `Média: ${mean}`,
            })
        }
    } 
})
