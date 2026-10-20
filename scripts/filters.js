function searchBar() {
  var filters, list;
  filters = document.getElementById('searchBar').value.toUpperCase().split(" ");
  list = document.getElementsByClassName('list-box');

  for(var i in list) {
    for(var j in filters) {
        var v = list[i];
        var j = filters[j];

        if(v.textContent !== undefined && v.textContent.toUpperCase().indexOf(j) > -1) {
            if(v.style !== undefined) v.style.display = "";
        } else {
            if(v.style !== undefined) v.style.display = "none";
            break;
        }
    }
  }
}