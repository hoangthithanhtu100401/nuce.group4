let arr = [];
let arr_search = [];
let arr_max = [];
let cnt = 0;
let n;
let div_bubbleSort = document.getElementsByClassName('bubbleSort')[0];
let div_selectSort = document.getElementsByClassName('selectSort')[0];
let div_insertSort = document.getElementsByClassName('insertSort')[0];
let div_mergeSort = document.getElementsByClassName('mergeSort')[0];
let div_binarySearch = document.getElementsByClassName('binarySearch')[0];
let div_linearSearch = document.getElementsByClassName('linearSearch')[0];
let swapDiv = document.getElementsByClassName('swapCount')[0];
let div_maxBinary = document.getElementsByClassName('maxBinary')[0];
let div_maxLinear = document.getElementsByClassName('maxLinear')[0];
let target;
let i_target;
// let modal = document.getElementsByClassName('modal')[0];
// console.time('swapElements');

function createDiv(div_array, name, arr) {
    for (i = 0; i < arr.length; i++) {
        const div = document.createElement('div');
        // div.innerText = arr[i];
        div.classList = ['elements'];
        div.id = name + i;
        // div.style.marginLeft=`${60*i}px`;
        if (window.innerWidth >= 1024) div.style.width = `${window.innerWidth / (2 * (arr.length + 5))}px`;
        else div.style.width = `${window.innerWidth / (arr.length + 5)}px`;
        div.style.height = `${arr[i]}px`;
        div.style.borderBottomLeftRadius = '50px';
        div.style.borderBottomRightRadius = '50px';
        div_array.appendChild(div);
    }
}

const generateElements = () => {
    cnt = 0;
    document.getElementById('sortBtn').disabled = false;
    arr = [];

    div_bubbleSort.innerHTML = "";
    div_selectSort.innerHTML = "";
    div_insertSort.innerHTML = "";
    div_mergeSort.innerHTML = "";

    n = document.getElementById('num').value;
    if (n == "") alert("Enter number of elements to continue...");
    // console.log(n);

    const method = document.getElementById('data').value;
    for (i = 0; i < n; i++) arr.push(Math.ceil(Math.random() * 150));

    if (method == 0) alert("Nhập dữ liệu đầu vào trước!");
    else if (method == 1) {

    }

    else if (method == 2) {
        arr = arr.sort(function (a, b) { return a - b });
        arr[n - 5] = 10;
    }

    else if (method == 3) {
        arr = arr.sort(function (a, b) { return b - a });
    }

    else if (method == 4) {
        arr = arr.sort(function (a, b) { return a - b });
    }


    console.log(arr);
    createDiv(div_bubbleSort, "bubble", arr);
    createDiv(div_selectSort, "select", arr);
    createDiv(div_insertSort, "insert", arr);
    createDiv(div_mergeSort, "", arr);
}

const generateMaxElements = () => {
    document.getElementById('sortBtn').disabled = false;
    arr_max = [];

    n_max = document.getElementById('numMax').value;
    // if (n == "") alert("Enter number of elements to continue...");

    div_maxBinary.innerHTML = "";
    div_maxLinear.innerHTML = "";
    for (i = 0; i < n_max; i++) arr_max.push(Math.ceil(Math.random() * 250));

    console.log(arr_max);
    createDiv(div_maxBinary, "maxBinary", arr_max);
    createDiv(div_maxLinear, "maxLinear", arr_max);


}

const generateSearchElements = () => {
    cnt = 0;
    document.getElementById('searchBtn').disabled = false;
    arr_search = [];

    div_linearSearch.innerHTML = "";
    div_binarySearch.innerHTML = "";

    n = document.getElementById('numSearch').value;
    target = document.getElementById('numTagert').value;
    i_target = Math.floor(Math.random() * n);
    console.log(i_target);
    if (n == "") alert("Enter number of elements to continue...");
    // console.log(n);

    for (i = 0; i < n; i++) {
        if (i == i_target) {
            arr_search.push(parseInt(target));
        } else {
            arr_search.push(Math.ceil(Math.random() * 250));
        }
    }



    console.log(arr_search);

    createDiv(div_linearSearch, "linear", arr_search);
    let array_sorted = arr_search.sort(function (a, b) { return a - b })
    createDiv(div_binarySearch, "binary", array_sorted);

    document.getElementById("binary" + i_target).style.background = 'red';
    document.getElementById("linear" + i_target).style.background = 'red';
}
function checkAge(age) {
    return age == 18;
}


const maxElements = async () => {
    document.getElementById('searchBtn').disabled = true;
    const n_max = arr_max.length;

    linearMax(n_max);

    let max_binary = await binaryMax(0, n_max - 1);
    // const isLargeNumber = ;
    let i_max_binary = arr_max.findIndex((element) => element == max_binary);
    document.getElementById("maxBinary" + i_max_binary).style.background = 'green';
    // console.log(arr_max.findIndex(isLargeNumber));
}

const searchElements = async () => {
    document.getElementById('searchBtn').disabled = true;
    const n = arr_search.length;

    linearSearch(n, target);
    binarySearch(0, n - 1, target, i_target);

}
const sortElements = async () => {

    document.getElementById('sortBtn').disabled = true;
    const n = arr.length;

    mergeSort(0, n - 1);
    bubbleSort(n);
    insertionSort(n);
    selectionSort(n);

}


// Swap by Id
const swapById = async (i, j) => {
    let a = document.getElementById(i).style.height;
    let b = document.getElementById(j).style.height;

    if (Number(a.slice(0, -2)) > Number(b.slice(0, -2))) {
        cnt++;
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve("done!"), 1 / n);
        });

        let result = await promise.then(() => {
            const tmp = a;
            // console.log(a,b);
            document.getElementById(i).style.height = b;
            // document.getElementById(j).id=i;
            document.getElementById(j).style.height = tmp;
            // document.getElementById(i).id=j;
        });
    }

}

const correctPos = (n) => {
    document.getElementById(n).style.background = "#2ecc72";
}

const showPicked = (i, j) => {
    document.getElementById(i).style.background = '#00CCCD';
    document.getElementById(j).style.background = '#00CCCD';
}


const remPicked = (i, j) => {
    document.getElementById(i).style.background = '#99AAAB';
    document.getElementById(j).style.background = '#99AAAB';
}

const wait = async (t) => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1 / n)
    });

    let result = await promise;
}


const showVisual = (i, j) => {

}

$(document).ready(function () {

    $("#owl-screen").owlCarousel({

        navigation: true, // Show next and prev buttons
        slideSpeed: 800,
        paginationSpeed: 400,
        singleItem: true,
        items: 1,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false

    });

});