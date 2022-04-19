// Hien dau cham
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}
// Nhap cac thong tin sach vao mang
var arrGH = [
    ['Nhung giac mo o hieu sach Morisaki',5,39000],
    ['Hoa van no moi ngay',2,188000],
    ['Cay cam ngot cua toi',3,108000],
    ['Anne toc do o dao Hoang tu Edward',5,80000],
];

function hienthi(){
    var ttgh = '';
    for(let i = 0; i < 4;i++){
        var tongtien = arrGH[i][1] * arrGH[i][2];
        ttgh += `
            <tr>
                <td>${i + 1}</td>
                <td>${arrGH[i][0]}</td>
                <td><input type="number" min="0" max="10" value="${arrGH[i][1]}" onchange="tinhlai(this)"></td>
                <td><span>${formatNumber(arrGH[i][2])}</span> VND</td>
                <td class="tt"></td>
            </tr>
        `;
    }
    document.getElementById('mycart').innerHTML = ttgh;
}
hienthi();

function tinhtien() {
    var tr = document.querySelectorAll('tr');
    console.log(tr);
    var tt_gh = '';
    for(let i = 1; i < tr.length;i++){
        var td_sl = tr[i].children[2].children[0].value;
        console.log(td_sl);
        var td_dg = tr[i].children[3].children[0].innerHTML * 1000;
        console.log(td_dg);
        var tt = Number(td_dg * td_sl);
        var td_tt = tr[i].children[4];
        td_tt.innerHTML = `${formatNumber(tt)} VND`;
    }
}

function reset(){
    var tr = document.querySelectorAll('tr');
    for(let i = 1; i < tr.length;i++){
        var td_sl = tr[i].children[2].children[0];
        td_sl.setAttribute("value", 1);
        var td_dg = tr[i].children[3].children[0].innerHTML * 1000;
        var td_tt = tr[i].children[4].innerHTML = `${formatNumber(td_dg)} VND`;
    }
}

function tinhlai(x){
    var tr = x.parentElement.parentElement;
    var td_dg = parseInt(tr.children[3].children[0].innerHTML) * 1000;
    var td_sl = x.value;
    var td_tt = tr.children[4];
    var dongy;
    if(td_sl == 0){
        dongy = confirm('Ban muon xoa san pham?');
        if(dongy == true) tr.remove();
        else{
            x.value = 1;
        }
    }
    td_sl = x.value;
    // alert(td_sl);
    td_tt.innerHTML = `${formatNumber(td_dg * td_sl)} VND`;
}
