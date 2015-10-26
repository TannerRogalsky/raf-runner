// fill in for missing phantomjs funcationality
require('core-js');

// require all tests
(function(r) { r.keys().forEach(r); })(require.context('./', true, /_spec\.js$/));
