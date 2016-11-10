function isLeapYear(yearInAd){
    if ((yearInAd%4)!==0){
        return false;
    }else if ((yearInAd%100)!==0){
        return true;
    }else if ((yearInAd%400)!==0){
        return false;
    }else{
        return true;
    }
}
