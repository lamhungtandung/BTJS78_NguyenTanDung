var control = document.querySelectorAll('.control');
for (var i = 0; i < control.length; i++) {
    const a = control[i];
    var btn = a.querySelector('.content');
    btn.addEventListener('click', () => {
        showInput(a)
    })
};

function showInput(element) {
    for (var i = 0; i < control.length; i++) {

        if (element !== control[i]) {
            control[i].classList.remove('show-text');
        }
    }
    element.classList.toggle('show-text');
}

//Them so
var themSO = document.getElementById('themso1');
const array = [];
themSO.onclick = function () {
    //input
    var soThem = Number(document.getElementById('sothem').value);
    //output

    var arrays = thuchienThemSo(soThem, array)
    SoThemVao.innerHTML = array;
}
function thuchienThemSo(number, array) {
    array.push(Number(number));
    return array;
}

//tinh tong
var tinhTong = document.getElementById('sum');
tinhTong.onclick = function () {
    var mangSo = thuchien(array);
    var hienThi = document.getElementById('txtResult1');
    hienThi.innerHTML = mangSo;
}
function thuchien(array) {
    var ketQua = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            ketQua += array[i];
        }
    }
    return ketQua;
}


//Đếm số dương 
var demsoDuongg = document.getElementById('demso');
demsoDuongg.onclick = function () {
    var hienThi = demsoDuong(array);
    document.getElementById('txtResult2').innerHTML = 'Số dương:  ' + hienThi;
}
function demsoDuong(array) {
    var soDuong = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            soDuong++;
        }
    }
    return soDuong;
}

//số nhỏ nhất
var soNhoNhat = document.getElementById('nhonhat');
soNhoNhat.onclick = function () {
    var sosanh = NhoNhat(array);
    document.getElementById('txtResult3').innerHTML = ' Số nhỏ nhất:  ' + sosanh;
}
function NhoNhat(array) {
    var soNhoNhat2 = array[0];
    for (var i = 1; i < array.length; i++) {
        if (soNhoNhat2 > array[i]) {
            soNhoNhat2 = array[i]
        }
    }
    return soNhoNhat2;
}

//số dương nhỏ nhất
var duongNhoNhat = document.getElementById('timso');
duongNhoNhat.onclick = function () {
    var sosanh = soDuongNN(array, NhoNhat);
    document.getElementById('txtResult4').innerHTML = ' Số dương nhỏ nhất: ' + sosanh;
}
function soDuongNN(array, callback) {
    
    var soDuong = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            soDuong.push(array[i]);
        }
    }
    var soDuongnhonhat = callback(soDuong)
    return soDuongnhonhat;
}

//Tìm số chẵn cuối cùng
var soChan = document.getElementById('timso2');
soChan.onclick = function () {
    //input
    document.getElementById('txtResult5');
    //output
    var ketQua = 0;
    var timso = soChanCuoi(array);
    if (timso.length === 0) {
        return document.getElementById('txtResult5').innerHTML = -1;
    } else {
        ketQua = timso.pop();

    }
    document.getElementById('txtResult5').innerHTML = ' Số chẵn cuối cùng là:  ' + ketQua

}
function soChanCuoi(array) {
    var chanCuoi = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            chanCuoi.push(array[i]);
        }
    }
    return chanCuoi;
}

// Đổi số
var DoiSo = document.getElementById('doiso');
DoiSo.onclick = function () {
    //input
    var soThu1 = Number(document.getElementById('number1').value);

    var soThu2 = Number(document.getElementById('number2').value);

    var ketQua = doiSo(array, soThu1, soThu2);
    document.getElementById('txtResult8').innerHTML = ' Mảng sau khi đổi: ' + ketQua;
}
function doiSo(array, soThu1, soThu2) {

    var element = array[soThu1];
    
    array[soThu1] = array[soThu2];
    array[soThu2] = element
    return array;
}
// Sắp xếp

var sapXep = document.getElementById('sapxep');
sapXep.onclick = function () {
    //input

    var ketQua = sapXepso(array);
    document.getElementById('txtResult6').innerHTML = 'sắp xếp: ' + ketQua;
}
function sapXepso(array) {
    for (var i = 0; i < array.length; i++) {
        var min = i;
        for (var u = i + 1; u < array.length; u++) {
            if (array[min] > array[u]) {
                min = u;
            }
        }
        var number1 = array[i];
        array[i] = array[min];
        array[min] = number1
    }

    return array;
}


// Tìm số nguyên tố đầu tiên

var timso = document.getElementById('timsonguyen');
timso.onclick = function () {
    //input
    var xuat = document.getElementById('txtResult7');
    //xu li

    var ketQua = soNguyenDauTien(array, kiemtraso);
    xuat.innerHTML = ' Số nguyên đầu tiên là: ' + ketQua
}
function soNguyenDauTien(array, xuli) {

    var array2 = [];
    for (var i = 0; i < array.length; i++) {
        var kiemtra = xuli(array[i]);
        if (kiemtra) {
            array2.push(array[i])
        }
    }
    if (array2.length === 0) {
        return -1
    }
    var dautien = array2.shift();
    return dautien
}
function kiemtraso(number) {
    var kt = true;
    var soBiChia = 2;
    if (number <= 1) {
        kt = false;
        return kt
    }
    for (soBiChia; soBiChia <= Math.sqrt(number); soBiChia++) {
        if (number % soBiChia == 0) {
            kt = false;
            break;
        }
    }
    return kt;
}


// Đếm sô nguyên
var chuaSo = [];
var themSo = document.getElementById('themso');
themSo.onclick = function () {
    //input
    var soN = Number(document.getElementById('soN').value);
    themso(soN, chuaSo);
    
    var ketQua = 0;
    
    document.getElementById('txtResult9').innerHTML = chuaSo;

}


var demSo = document.getElementById('demsonguyen');
demSo.onclick = function () {
    //input
    var hienThi = document.getElementById('txtResult10');

    var thucHien = soSanh(chuaSo);
    var u = thucHien.length
    if (u === 0) {
        return hienThi.innerHTML = 'Error!'
    }
    hienThi.innerHTML = 'Có ' + u + ' số nguyên';
}
function soSanh(array) {
    var soHienThi = [];

    for (var i = 0; i < array.length; i++) {
        if (Number.isInteger(array[i])) {
            soHienThi.push(array[i]);
        }
    }
    return soHienThi;
}

// So sánh số lượng số âm và dương.
var sosanhluong = document.getElementById('SSso');
sosanhluong.onclick = function () {

    var hienThi = document.getElementById('txtResult11');

    var xuat = sosanhso(array);

    hienThi.innerHTML = xuat;
}
function sosanhso(array) {
    var array1 = [];
    var array2 = [];
//output
    var ketQua = '';
    //xu lí
    for (var i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            array1.push(array[i]);
        } else {
            array2.push(array[i]);
        }
    }
    if (array1.length > array2.length) {
        ketQua = 'Số dương > Số âm';
    } else if (array1.length < array2.length) {
        ketQua = ' Số âm > Số dương';

    } else if (array1.length == array2.length) {
        ketQua = 'Số dương = Số âm';

    }
    return ketQua;
}
