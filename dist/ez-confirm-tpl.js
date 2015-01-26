angular.module('ez.confirm').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('ez-confirm-tpl.html',
    "<div class=\"ez-confirm\">\n" +
    "  <div class=\"modal-header\">\n" +
    "    <a type=\"button\" class=\"close\" ng-click=\"dismiss()\" aria-hidden=\"true\">&times;</a>\n" +
    "    <h3 class=\"modal-title\">{{ options.heading }}</h3>\n" +
    "  </div>\n" +
    "  <div class=\"modal-body\">\n" +
    "    <p class=\"lead\">{{ options.text }}</p>\n" +
    "  </div>\n" +
    "  <div class=\"modal-footer\">\n" +
    "    <a class=\"cancel-btn btn btn-default\" ng-click=\"dismiss()\">\n" +
    "      <i class=\"glyphicon glyphicon-remove\"></i>\n" +
    "      {{ options.cancelBtn }}\n" +
    "    </a>\n" +
    "    <button ng-click=\"close()\" class=\"confirm-btn btn btn-lg btn-primary\" ez-focus>\n" +
    "      <i class=\"glyphicon glyphicon-ok\"></i>\n" +
    "      {{ options.confirmBtn }}\n" +
    "    </button>\n" +
    "  </div>\n" +
    "</div>\n"
  );

}]);
