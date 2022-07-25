var question = document.querySelectorAll('.question');
for (var i = 0; i < question.length; i++) {
    const questions = question[i];
    var btn = questions.querySelector('.wrap-question');
    btn.addEventListener('click', () => {
        showInput(questions)
    })
}

function showInput(element) {
    for (var i = 0; i < question.length; i++) {

        if (element !== question[i]) {
            question[i].classList.remove('show-text');
        }
    }
    element.classList.toggle('show-text');
}

//Add number
var addNumber = document.getElementById('addNumber');
const array = [];
addNumber.onclick = function () {
    //input
    var numberAdds = Number(document.getElementById('numberAdds').value);
    //output

    //progress
    var arrays = addNumbers(numberAdds, array)
    resultNumberAdd.innerHTML = array
}
function addNumbers(number, array) {
    array.push(Number(number));
    return array
}

//Sum
var sum = document.getElementById('sum');
sum.onclick = function () {
    var sumresult = sumPlus(array);
    var resultSum = document.getElementById('resultSum');
    resultSum.innerHTML = sumresult
}
function sumPlus(array) {
    var ketQua = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            ketQua += array[i];
        }
    }
    return ketQua;
}


//Đếm số dương 
var countPlus = document.getElementById('demso');
countPlus.onclick = function () {
    var sumresult = demsoDuong(array);
    document.getElementById('txtResult2').innerHTML = sumresult
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

//số nhỏ nhất trong mảng
var soNhoNhat = document.getElementById('nhonhat');
soNhoNhat.onclick = function () {
    var sosanh = NhoNhat(array);
    document.getElementById('txtResult3').innerHTML = ' Số nhỏ nhất trong mảng:  ' + sosanh;
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

//số dương nhỏ nhất trong mảng
var duongNhoNhat = document.getElementById('timso');
duongNhoNhat.onclick = function () {
    var sosanh = soDuongNN(array, NhoNhat);
    document.getElementById('txtResult4').innerHTML = ' Số dương nhỏ nhất trong mảng: ' + sosanh;
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
console.log(-10 % 2 == 0);
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
    var number1 = Number(document.getElementById('number1').value);

    var number2 = Number(document.getElementById('number2').value);
    //progresss

    var replaceresult = replaceNumbers(array, number1, number2);
    var resultReplace = document.getElementById('resultReplace');
    resultReplace.innerHTML = ' Mảng sau khi đổi: ' + replaceresult
}
function replaceNumbers(array, number1, number2) {

    var element = array[number1];
    
    array[number1] = array[number2];
    array[number2] = element
    return array;
}
// Sắp xếp theo thứ tự tăng dần

var sortNumber = document.getElementById('sortNumber');
sortNumber.onclick = function () {
    //input
    //progresss

    var sortResults = sortNumbers(array);
    var resultSort = document.getElementById('resultSort');
    resultSort.innerHTML = ' Mảng sau khi sắp xếp: ' + sortResults
}
function sortNumbers(array) {

    //C1:Dùng hàm sort:
    // array.sort(function (a, b) {
    //     return a - b
    // })

    //C2:lấy từng số trong mảng so sánh với các số còn lại
    for (var i = 0; i < array.length; i++) {
        var indexMin = i;
        for (var j = i + 1; j < array.length; j++) {
            if (array[indexMin] > array[j]) {
                indexMin = j;
            }
        }
        var number1 = array[i];
        array[i] = array[indexMin];
        array[indexMin] = number1
    }

    return array;
}


// Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1

var intergerNumber = document.getElementById('intergerNumber');
intergerNumber.onclick = function () {
    //input
    var resultInterger = document.getElementById('resultInterger');
    //progresss

    var interResults = firstNumber(array, checkSNT);
    resultInterger.innerHTML = ' Số nguyên đầu tiên là: ' + interResults
}
function firstNumber(array, callback) {

    var arraySNT = [];
    for (var i = 0; i < array.length; i++) {
        var checkSNTS = callback(array[i]);
        if (checkSNTS) {
            arraySNT.push(array[i])
        }
    }
    if (arraySNT.length === 0) {
        return -1
    }
    var firstInterger = arraySNT.shift();
    return firstInterger
}
function checkSNT(number) {
    var checkSNTs = true;
    var soBiChia = 2;
    if (number <= 1) {
        checkSNTs = false;
        return checkSNTs
    }
    for (soBiChia; soBiChia <= Math.sqrt(number); soBiChia++) {
        if (number % soBiChia == 0) {
            checkSNTs = false;
            break;
        }
    }
    return checkSNTs;
}


// Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
var arrayRealNumber = [];
var addRealNumber = document.getElementById('addRealNumber');
addRealNumber.onclick = function () {
    //input
    var realNumbers = Number(document.getElementById('realNumbers').value);
    addNumbers(realNumbers, arrayRealNumber);
    //output
    var output = 0;
    //progress
    var resultaddReal = document.getElementById('resultaddReal');

    resultaddReal.innerHTML = arrayRealNumber

}



var realNumber = document.getElementById('realNumber');
realNumber.onclick = function () {
    //input
    var resultReal = document.getElementById('resultReal');
    //progress

    var interResults = isInter(arrayRealNumber);
    var lengthinter = interResults.length
    if (lengthinter === 0) {
        return resultReal.innerHTML = 'Không có số nguyên nào cả'
    }
    resultReal.innerHTML = 'Có ' + lengthinter + ' số nguyên';
}
function isInter(array) {
    var intergerNumberss = [];
    for (var i = 0; i < array.length; i++) {
        if (Number.isInteger(array[i])) {
            intergerNumberss.push(array[i]);
        }
    }
    return intergerNumberss
}

// So sánh số lượng số âm và dương xem số nào nhiều hơn.
var compareNumber = document.getElementById('compareNumber');
compareNumber.onclick = function () {
    //input
    var resultCompare = document.getElementById('resultCompare');
    //progress

    var interResults = compare(array);

    resultCompare.innerHTML = interResults
}
function compare(array) {
    var arrayPlus = [];
    var arrayMinus = [];
    var output = '';
    for (var i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            arrayPlus.push(array[i]);
        } else {
            arrayMinus.push(array[i]);
        }
    }
    if (arrayPlus.length > arrayMinus.length) {
        output = 'Số dương > Số âm'
    } else if (arrayPlus.length < arrayMinus.length) {
        output = ' Số âm > Số dương'

    } else if (arrayPlus.length == arrayMinus.length) {
        output = 'Số dương = Số âm'

    }
    return output
}
