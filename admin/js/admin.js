
/*
<tr>
  <th scope="row">1</th>
  <td>Feró Noel</td>
  <td>feronoel20060709@gmail.com</td>
    <td>Bp 1214 Kossuth Lajos utca 150</td>
      <td>
        <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-info">Modositas</button>
          <button type="button" class="btn btn-danger btn-info">Törles</button>
         </div>
      </td>
  </th>
</tr> 
*/

let users = [
  {id: "5cffj36347", name: "Feró Noel", email: "feronoel20060709@gmail.com", address: "Budapest 1214 Kossuth Lajos utca 150"},
  {id: "75438hvsdb", name: "Végh Anna", email: "veghanna47@gmail.com", address: "Bp 1211 Teller ede utca 28"},
  {id: "453giehtu5", name: "Tordai Valentin", email: "tordaivalentin@gmail.com", address: "Bp 1193 szigligeti utca 39/A"}
];

let tableBody = document.querySelector('#userTable tbody');
console.log(tableBody);


let createTD = (html, parent) => {
  let td = document.createElement('td');
  td.innerHTML = html;
  parent.appendChild(td);
}

for (let k in users) {
  let tr = document.createElement('tr');
  createTD(parseInt(k)+1, tr);
  for(let value of Object.values(users[k])){
    createTD(value, tr);
  }
  tableBody.appendChild(tr);
}