ez-confirm
==========

Angular confirm dialog

Demo
====

View <a href="http://cdn.rawgit.com/jdewit/ez-confirm/master/index.html">DEMO</a>.

Dependencies
============

- Either <a href="http://angular-ui.github.io/bootstrap">angular-bootstrap</a> or <a href="http://github.com/jdewit/ez-modal">ez-modal</a>
- <a href="http://github.com/jdewit/ez-focus">ez-focus</a> to focus confirm button on modal show

Usage
=====

Default
```js
EzConfirm.create().then(function() {
  alert('You confirmed!');
}, function() {
  alert('You cancelled or dismissed.');
});
```

Custom heading & text config
```js
EzConfirm.create({heading: 'Ok but...', text: 'Are you sure Steven?'}).then(function() {
  alert('Fire the missiles!');
}, function() {
  alert('Ok maybe next time?');
});
```

EzConfirmConfig Constant
========================
Set the config globally

app.run(function(EzConfirmConfig) {
  EzConfirmConfig.heading = 'My site-wide confirm heading';
  EzConfirmConfig.text = 'My site-wide confirm heading';
  EzConfirmConfig.confirmBtn = 'Yes yes';
  EzConfirmConfig.cancelBtn = 'No no';
});
