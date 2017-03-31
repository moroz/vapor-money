function amountFormat(amount, currency) {
  if (typeof currency === 'undefined') {
    currency = "$";
  }
  return currency + Number(amount).toFixed(2);
}

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

var CSRF = {
  // https://github.com/shakacode/react_on_rails/issues/16
  getCSRFToken: function() {
    const metas = document.getElementsByTagName('meta');
    for (var i = 0; i < metas.length; i++) {
      const meta = metas[i];
      if (meta.getAttribute('name') === 'csrf-token') {
        return meta.getAttribute('content');
      }
    }
  },

  getHeaders: function () {
    return {
      'X-CSRF-Token': this.getCSRFToken()
    };
  }
}
