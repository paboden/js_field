(function ($) {

  Drupal.behaviors.js_field = {
    attach: function (context, settings) {
      // Load and init ace editor asynchronous to support ajax forms.
      $('textarea[data-ace-editor-js]').each(function () {
        var textarea = $(this);
        var theme = textarea.attr('data-ace-editor-js-theme');

        textarea.removeAttr('data-ace-editor-js');

        // Hide Drupal textarea grippie so its not part of the height calculation.
        textarea.siblings('.grippie').hide();

        // Build our placeholder div with matching attributes of the original textarea.
        var editDiv = $('<div>', {width: '100%', 'class': textarea.attr('class')}).css('min-height', textarea.height()).insertBefore(textarea);

        // Hide Drupal textarea.
        textarea.addClass('element-invisible');

        // Init ace editor.
        var editor = ace.edit(editDiv[0]);
        editor.getSession().setValue(textarea.val());
        editor.getSession().setMode('ace/mode/javascript');
        editor.getSession().setTabSize(2);
        editor.setTheme('ace/theme/' + theme);
        editor.setOptions({
          minLines: 1,
          maxLines: 500
        });

        // Update Drupal textarea value.
        editor.getSession().on('change', function(){
          textarea.val(editor.getSession().getValue());
        });

      });
    }
  };

  Drupal.behaviors.js_field_display = {
    attach: function (context, settings) {
      // Load and init ace editor asynchronous to support ajax forms.
      $('textarea[data-ace-editor-js-readonly]').each(function () {
        var textarea = $(this);
        var theme = textarea.attr('data-ace-editor-js-theme');
        textarea.removeAttr('data-ace-editor-js-readonly');

        // Hide Drupal textarea grippie so its not part of the height calculation.
        textarea.siblings('.grippie').hide();

        // Build our placeholder div with matching attributes of the original textarea.
        var editDiv = $('<div>', {width: '100%', 'class': textarea.attr('class')}).css('min-height', textarea.height()).insertBefore(textarea);

        // Hide Drupal textarea
        textarea.addClass('element-invisible');

        // Init ace editor.
        var editor = ace.edit(editDiv[0]);
        editor.getSession().setValue(textarea.val());
        editor.getSession().setMode('ace/mode/javascript');
        editor.getSession().setTabSize(2);
        editor.setTheme('ace/theme/' + theme);
        editor.setReadOnly(true);
        editor.setOptions({
          minLines: 1,
          maxLines: 500
        });

        // Update Drupal textarea value.
        editor.getSession().on('change', function(){
          textarea.val(editor.getSession().getValue());
        });

      });
    }
  };

})(jQuery);
