let isleapyear = false;
let isdiv4 = year % 4 == 0;
if (isdiv4) {
    let isdiv100 = year % 100 ==0;
    if (isdiv100) {
        let isdiv400 = year % 400 ==0;
        if (isdiv400) {
            isleapyear = true;
        }
    } else
        isleapyear = true;
}
if (isleapyear) {
    alert(year + "isleapyear is a");
}
else {
    alert(year + "isleapyear not is a");
}


