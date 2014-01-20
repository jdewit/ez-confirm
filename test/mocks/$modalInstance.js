window.$modalInstance = {
  closeData: null,
  closed: false,
  dismissed: false,
  close: function(data) {
    this.closeData = data;
    this.closed = true;
  },
  dismiss: function() {
    this.dismissed = true;
  }
};
