angular.module('ez.confirm').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('ez-confirm-tpl.html',
    "<div class=\"ez-confirm\">\n" +
    "  <div class=\"modal-header\">\n" +
    "    <a type=\"button\" class=\"close\" ng-click=\"cancel()\" aria-hidden=\"true\">&times;</a>\n" +
    "    <h3>{{ heading }}</h3>\n" +
    "  </div>\n" +
    "  <div class=\"modal-body\">\n" +
    "    <p class=\"lead\">{{ text }}</p>\n" +
    "  </div>\n" +
    "  <div class=\"modal-footer\">\n" +
    "    <a class=\"btn btn-default\" ng-click=\"cancel()\"><i class=\"fa fa-times\"></i>Cancel</a>\n" +
    "    <button ng-click=\"ok()\" class=\"btn btn-lg btn-primary\"><i class=\"fa fa-check\"></i>Yes</button>\n" +
    "  </div>\n" +
    "</div>\n"
  );

}]);
