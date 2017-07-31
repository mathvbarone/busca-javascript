function filter() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("input");
    filter = input.value.toUpperCase();
    ul = document.getElementById("ul");
    li = ul.getElementsByTagName("li");


    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (!input.value) {
            li[i].style.display = "none";
        } else if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }

    }
}