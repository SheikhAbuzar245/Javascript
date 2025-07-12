let insert = document.getElementById('insert');

document.addEventListener('keyup', (e) => {
  console.log(e.key);
  insert.innerHTML = `<table>
  <tr>
    <th>Property</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>Key</td>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
  </tr>
  <tr>
    <td>Code</td>
    <td>${e.code}</td>
  </tr>
</table>`;
});
