(function() {
  return document.write('<meta name="viewport" content="' + (/iPad/i.test(navigator.userAgent) ? 'width=1000' : 'width=device-width') + ', initial-scale=1.0, minimal-ui" />');
})();
