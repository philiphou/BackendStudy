function renderStatus(url) {
    var urlArr = ["/home", "/list","/api/list"];
    return urlArr.includes(url) ? 200 : 404;
  }
  exports.renderStatus=renderStatus