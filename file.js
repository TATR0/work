


var table = document.getElementById('table1');
table.innerHTML=''
var tr = document.createElement('tr');
var th1 = document.createElement('th');
var th2 = document.createElement('th');
var th3 = document.createElement('th');
th1.innerHTML="Имя";
tr.appendChild(th1);
th2.innerHTML="Состояние";
tr.appendChild(th2);
th3.innerHTML="Дата";
tr.appendChild(th3);
table.appendChild(tr);


var tr = document.createElement('tr');
var td = document.createElement('td');
var ul = document.createElement('ul');
ul.setAttribute("id", "myUL");
  var li = document.createElement('li');

    var span = document.createElement('span');
    span.className = "caret";
    span.innerHTML="Напитки";
    li.appendChild(span);

      var ul2 = document.createElement('ul');
        ul2.className = "nested";

        var li2 = document.createElement('li');
        li2.innerHTML = "water";
        ul2.appendChild(li2);

        var li3 = document.createElement('li');
        li3.innerHTML = "Кофе";
      ul2.appendChild(li3);

  li.appendChild(ul2);
ul.appendChild(li);
td.appendChild(ul);
tr.appendChild(td);

var td = document.createElement('td');
var ul = document.createElement('ul');
ul.setAttribute("id", "myUL");
  var li = document.createElement('li');

    var span = document.createElement('span');
    span.className = "caret";
    span.innerHTML="Напитки";
    li.appendChild(span);

      var ul2 = document.createElement('ul');
        ul2.className = "nested";

        var li2 = document.createElement('li');
        li2.innerHTML = "water";
        ul2.appendChild(li2);

        var li3 = document.createElement('li');
        li3.innerHTML = "Кофе";
      ul2.appendChild(li3);

  li.appendChild(ul2);
ul.appendChild(li);
td.appendChild(ul);
tr.appendChild(td);

var td = document.createElement('td');
var ul = document.createElement('ul');
ul.setAttribute("id", "myUL");
  var li = document.createElement('li');

    var span = document.createElement('span');
    span.className = "caret";
    span.innerHTML="Напитки";
    li.appendChild(span);

      var ul2 = document.createElement('ul');
        ul2.className = "nested";

        var li2 = document.createElement('li');
        li2.innerHTML = "water";
        ul2.appendChild(li2);

        var li3 = document.createElement('li');
        li3.innerHTML = "Кофе";
      ul2.appendChild(li3);

  li.appendChild(ul2);
ul.appendChild(li);
td.appendChild(ul);
tr.appendChild(td);
table.appendChild(tr);


console.log(table.outerHTML)

abcad();

function abcad()
{
      const ot = document.querySelector('table')
    ot.addEventListener('click', e => {
      const o = e.target
      if (!o.classList.contains('caret')) return
      const ob = o.closest('li').querySelector('.nested')
      ob.classList.toggle("active")
      ob.classList.toggle("caret-down")
      const a = [...o.closest('td').querySelectorAll('.nested')].map(o => o.className)
      ot.querySelectorAll('td').forEach(o => {
        o.querySelectorAll('.nested').forEach((o, i) => {
          o.className = a[i]
        })
      })
    })
}