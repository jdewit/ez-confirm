angular.module('ez.confirm').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('ez-confirm-tpl.html',
    "<div class=\"ez-confirm\">\n" +
    "  <div class=\"modal-header\">\n" +
    "    <a ng-if=\"!options.hideCloseButton\" type=\"button\" class=\"close\" ng-click=\"dismiss()\" aria-hidden=\"true\">&times;</a>\n" +
    "    <h3 class=\"modal-title\">{{ options.heading }}</h3>\n" +
    "  </div>\n" +
    "  <div class=\"modal-body\">\n" +
    "    <p class=\"lead\">\n" +
    "      {{ !data.html ? options.text : '' }}\n" +
    "      <span ng-bind-html=\"data.html\" ng-if=\"data.html\"></span>\n" +
    "    </p>\n" +
    "  </div>\n" +
    "  <div class=\"modal-footer\">\n" +
    "    <a ng-click=\"dismiss()\" class=\"{{ options.cancelBtnCss }}\">\n" +
    "      <i class=\"{{ options.cancelIconCss }}\"></i>\n" +
    "      {{ options.cancelBtn }}\n" +
    "    </a>\n" +
    "    <button ng-click=\"close()\" class=\"{{ options.confirmBtnCss }}\" ez-focus>\n" +
    "      <i class=\"{{ options.confirmIconCss }}\"></i>\n" +
    "      {{ options.confirmBtn }}\n" +
    "    </button>\n" +
    "  </div>\n" +
    "</div>\n"
  );

}]);
