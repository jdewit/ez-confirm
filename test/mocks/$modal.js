var $modal = {
  openCount: 0,
  open: function(ob) {
    for (var i in ob.resolve) {
      this[i] = ob.resolve[i]();
    }
    this.openCount++;
    this.templateUrl = ob.templateUrl;
    this.controller = ob.controller;
    return this;
  },
  result:  {
    then: function(callback) {
      $modal.callback = callback;
    }
  },
  then: function(data) {
    this.callback(data);
  }
};

window.$modal = $modal;
