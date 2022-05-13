
  const url = 'data1.json';
  window.addEventListener('DOMContentLoaded', () => {
    loadData();
  })

  function loadData() {
    fetch(url).then(rep => rep.json())
      .then((data) => {
        //console.log(data);
        addtoPage(data);
      })
  }

function addtoPage(arr) {
  arr.forEach((el) => {
    console.log(el);
    const li = document.createElement('li');
    const span = document.createElement('span');
    const a = document.createElement('a');
    const p = document.createElement('p');

    var switchpageattr = el.name + "/" + el.name + ".html"
    console.log(switchpageattr);
    a.setAttribute("target", "_parent");
    a.setAttribute("href", switchpageattr);
    a.textContent = "•" + el.title;
    p.textContent = "•" + el.title;
    li.classList.add("tabbed" + el.tabbed);
    li.classList.add("searchableitem");
    ul.append(li);
    li.append(span);
    if (el.linkless == 1) {
      span.append(p);
    } else {
      span.append(a);

    }


  });
}
