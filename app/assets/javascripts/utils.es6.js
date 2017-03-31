function amountFormat(amount, currency) {
  if (typeof currency === 'undefined') {
    currency = "$";
  }
  amount = Number(amount);
  if (amount < 0) {
    return "-" + currency + (-amount).toFixed(2);
  } else {
    return currency + amount.toFixed(2);
  }
}

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

function sum (arr) {
  return arr.reduce(function (acc, record) {
    return acc + Number(record.amount)
  }, 0);
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
