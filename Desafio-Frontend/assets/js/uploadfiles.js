function FileUp(input) {
  this.input       = document.querySelector(input);
  this.fileupList  = this.input.getElementsByClassName('fileup-list')[0];
  this.fileupInput = this.input.getElementsByClassName('fileup-input')[0];
  this.watch();
}

FileUp.prototype.watch = function () {
  var that = this;
  this.fileupInput.addEventListener('change', function() {
    that.loop(that.fileupInput.files);
  });
};

FileUp.prototype.loop = function (files) {
  var list = [];
  this.fileupList.innerHTML = "";

  for(var i = 0; i < files.length; i++) {
      list.push(
        '<div class="file-resume">' +
            '<div>' +
              '<span class="icon-file"></span>' +
              '<p class="name-file">' + files.item(i).name + '</p>' +
            '</div>' +
            '<p>' +(files.item(i).size / 1024 / 1024).toFixed(2) + 'MB</p>' +
        '</div>'
      );
  }
  this.fileupList.innerHTML = list.join('');
  return list;
};

var f = new FileUp('#fileup');



