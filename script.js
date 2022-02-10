const vardi = ['Jana Bērziņa', 'Rūdolfs Liepa', 'Jānis Ozols', 'Rita Pipare', 'Fredis Bumba']
const balvas = ['Auto', 'Mobilais', 'PC', 'Pica', 'Kebabs', 'Miljons']
const naudasKopa = 100000;//kopējā summa
let uzvaretajuSkaits = 5;
let rindas = document.querySelector('.rindas');
rindas.innerHTML = '';
for (let i = 0; i < uzvaretajuSkaits; i++) {
    let rand = Math.random() * vardi.length;
    rand = Math.floor(rand);//noapaļo uz leju

    let uzvaretajs = vardi[rand];//izvada konsolee
    let laimesti = balvas[rand];


    rindas.innerHTML += `

    <tr>
    <td>${i+1}</td>
    <td>${uzvaretajs}</td>
    <td>${laimesti}</td>
    </tr>`
}