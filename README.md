ez-confirm
==========

Angular confirm dialog

Demo
====

http://embed.plnkr.co/EL6foG/preview


Usage
=====

Example 1: (no customization with confirmation callback)

```js
EzConfirm.create(function() {
  alert('You confirmed!');
});
```

Example 2: (no customization with confirmation and dismissal callbacks)

```js
EzConfirm.create(function() {
  alert('You confirmed!');
}, function() {
  alert('You cancelled or dismissed.');
});
```

Example 3: (custom text with confirmation callback)

```js
EzConfirm.create('Are you sure?', function() {
  alert('You confirmed!');
});
```

Example 4: (custom text with confirmation and dismissal callbacks)

```js
EzConfirm.create('Are you sure?', function() {
  alert('You confirmed!');
}, function() {
  alert('You cancelled or dismissed.');
});
```

Example 5: (custom header and text with confirmation callback)
```js
EzConfirm.create('Confirm Action', 'Are you sure?', function() {
  alert('You confirmed!');
});
```

Example 6: (custom header and text with confirmation and dismissal callbacks)
```js
EzConfirm.create('Confirm Action', 'Are you sure?', function() {
  alert('You confirmed!');
}, function() {
  alert('You cancelled or dismissed.');
});
```