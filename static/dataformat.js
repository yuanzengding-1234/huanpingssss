//日期格式转换
Date.prototype.format = function(formatStr){
    var str = formatStr;
    str=str.replace(/yyyy|YYYY/,this.getFullYear());
    str=str.replace(/MM/,(this.getMonth()+1)>9?(this.getMonth()+1).toString():'0' + (this.getMonth()+1));
    str=str.replace(/dd|DD/,this.getDate()>9?this.getDate().toString():'0' + this.getDate());
    str=str.replace(/hh|HH/,this.getHours()>9?this.getHours().toString():'0' + this.getHours());
    str=str.replace(/mm/,this.getMinutes()>9?this.getMinutes().toString():'0' + this.getMinutes());
    str=str.replace(/ss/,this.getSeconds()>9?this.getSeconds().toString():'0' + this.getSeconds());
    return str;
}
