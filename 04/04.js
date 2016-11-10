function xor(BoolA,BoolB){
    if (BoolA==true && BoolB==true) {
        return false;
    }else if (BoolA==false &&  BoolB==false){
        return false;
    }else if (BoolA==true &&BoolB==false){
        return true;
    }else if (BoolA==false && BoolB==true){
        return true;
    }
}
