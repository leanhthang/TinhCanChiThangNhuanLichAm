const tinhCanChi = {
  nam: 1900,
  thang: 1,
  thienCan: ['canh','tân','nhâm','quý','giáp','ất','bính','đinh','mậu','kỷ'],
  dia_chi_nam: ['Thân','Dậu','Tuất','Hợi', 'Tý','Sửu','Dần','Mão','Thìn','Tỵ','Ngọ','Mùi'],
  dia_chi_thang: ['Dần','Mão','Thìn','Tỵ','Ngọ','Mùi','Thân','Dậu','Tuất','Hợi', 'Tý','Sửu'],
  canChiNam: function(){
    return_str = [this.thienCan[this.nam%10], this.dia_chi_nam[this.nam%12]].join(' ')
    return return_str.toLowerCase()
  },
  canChiThang: function(){
    newThienCan = []
    tmpThienCan = this.thienCan.concat(this.thienCan).concat(this.thienCan);
    switch(this.thienCan[this.nam%10]) {
      case 'giáp', 'kỷ':
        beginIndex = this.thienCan.indexOf('bính');
        break;
      case 'ất', 'canh':
        beginIndex = this.thienCan.indexOf('mậu');
        break;
      case 'bính', 'tân':
        beginIndex = this.thienCan.indexOf('canh');
        break;
      case 'đinh', 'nhâm':
        beginIndex = this.thienCan.indexOf('nhâm');
        break;
      case 'mậu', 'quý':
        beginIndex = this.thienCan.indexOf('giáp');
        break;
    }
    diaChi = this.dia_chi_thang[this.thang-1];
    newThienCan = tmpThienCan.slice(beginIndex, beginIndex+12);
    return_str = [newThienCan[this.thang-1], diaChi].join(' ');
    return return_str.toLowerCase()
  },
  convertSolar2Lunar: function(day, month, year) {
      [ngayAm, thangAm, namAm, nhuan] = convertSolar2Lunar(day, month, year, 7);
      this.nam = namAm;
      this.thang = thangAm;
      this.nhuan = nhuan == 1 ? '(Nhuận)' : ''
  }
}
