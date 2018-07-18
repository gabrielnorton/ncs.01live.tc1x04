/**
 * @file
 * Preview for the Primary theme.
 */
(function ($, Drupal, drupalSettings) {
  'use strict';
  Drupal.color = {
    logoChanged: false,
    pairs: {
      backgroundColors: {
      '.color-preview': 'bg',
      '.region-top-bar': 'topbar',
      '#page-header': 'headerfull',
      '.region-header': 'headerinner',
      '.region-primary-menu': 'primary',
      '.region-secondary-menu': 'secondary',
      '.region-highlighted': 'highlighted',
      '.region-breadcrumb': 'breadcrumb',
      '#page-features-top': 'featuredtop',
      '.region-right-content': 'contentright',
      '.region-content': 'contentmain',
      '.region-left-content': 'contentleft',
      '#page-features-bottom': 'featuredbottom',
      '.region-footer': 'footer',
      },
      textColors: {
        '.block-title': 'blocktitle',
        '.site-name': 'titleslogan',
        '#page-content a': 'link',
        '#page-content': 'text'
      },
      borderColors: {
        '.demo-block .block-title': 'primary_hover',
      }
    },
    callback: function (context, settings, $form) {
      
      var font_import = drupalSettings.color.display_font;
      var font_stack = drupalSettings.color.display_font_stack;

      // Change the logo to be the real one.
      if (!this.logoChanged) {
        $('.color-preview .color-preview-logo img').attr('src', drupalSettings.color.logo);
        this.logoChanged = true;
      }
      // Remove the logo if the setting is toggled off.
      if (drupalSettings.color.logo === null) {
        $('div').remove('.color-preview-logo');
      }

      var textColors = this.pairs.textColors;
      Object.keys(textColors).forEach(function(key) {
          $form.find(key).css('color', $form.find('.js-color-palette input[name="palette[' + textColors[key] + ']"]').val()) 
      });

      var bgColors = this.pairs.backgroundColors;
      Object.keys(bgColors).forEach(function(key) {
          $form.find(key).css('background-color', $form.find('.js-color-palette input[name="palette[' + bgColors[key] + ']"]').val()) 
      });

      var borderColors = this.pairs.borderColors;
      Object.keys(borderColors).forEach(function(key) {
          $form.find(key).css('border-color', $form.find('.js-color-palette input[name="palette[' + borderColors[key] + ']"]').val()) 
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
