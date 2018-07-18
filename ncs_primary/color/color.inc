<?php

/**
 * @file
 * Lists available colors and color schemes for the Primary theme.
 */

$info = [
  // Available colors and color labels used in theme.
  'fields' => [
    'bg' => t('Body Background'),
    'topbar' => t('Top bar'),
    'headerfull' => t('Full Header'),
    'headerinner' => t('Inner Header'),
    'primary' => t('Primary Menu'),
    'primary_hover' => t('Primary Color'),
    'secondary' => t('Secondary Menu'),
    'highlighted' => t('Highlighted'),
    'breadcrumb' => t('Breadcrumb'),
    'featuredtop' => t('Featured Top'),
    'contentleft' => t('Left Content'),
    'contentmain' =>t('Main Content'),
    'contentright' => t('Right Content'),
    'blocktitle' => t('Block title'),
    'footer' => t('Footer background'),
    'featuredbottom' => ('Featured Bottom'),
    'titleslogan' => t('Title and slogan'),
    'text' => t('Text color'),
    'link' => t('Link color'),
  ],
  // Pre-defined color schemes.
  'schemes' => [
    'default' => [
      'title' => t('Light (default)'),
      'colors' => [
        'bg' => '#ffffff',
        'topbar' => '#fafafa',
        'headerfull' => '#fbfbfb',
        'headerinner' => '#fcfcfc',
        'primary' => '#fdfdfd',
        'primary_hover' => '#48b9da',
        'secondary' => '#fefefe',
        'breadcrumb' => '#f3f3f3',
        'highlighted' => '#fdfefe',
        'featuredtop' => '#fcfefe',
        'contentleft' => '#f7f7f7',
        'contentmain' => '#f2f3f1',
        'contentright' => '#f6f6f2',
        'blocktitle' => '#333333',
        'featuredbottom' => '#fffefe',
        'footer' => '#f4f4f4',
        'titleslogan' => '#272727',
        'text' => '#888888',
        'link' => '#1b82b4',
      ],
    ],
    'dark' => [
      'title' => t('Dark'),
      'colors' => [
        'bg' => '#ffffff',
        'topbar' => '#fafafa',
        'headerfull' => '#fbfbfb',
        'headerinner' => '#fcfcfc',
        'primary' => '#fdfdfd',
        'primary_hover' => '#48b9da',
        'secondary' => '#fefefe',
        'highlighted' => '#fdfefe',
        'breadcrumb' => '#f3f3f3',
        'featuredtop' => '#fcfefe',
        'contentright' => '#f1f4f0',
        'contentmain' => '#f2f3f1',
        'contentleft' => '#f7f7f7',
        'blocktitle' => '#333333',
        'featuredbottom' => '#fffefe',
        'footer' => '#f4f4f4',
        'titleslogan' => '#272727',
        'text' => '#888888',
        'link' => '#1b82b4',
      ],
    ],
  ],

  // CSS files (excluding @import) to rewrite with new color scheme.
  'css' => [
    'css/colors.css',
  ],

  // Files to copy.
  'copy' => [
    'logo.svg',
  ],

  // Gradient definitions.
  'gradients' => [
    [
      // (x, y, width, height).
      'dimension' => [0, 0, 0, 0],
      // Direction of gradient ('vertical' or 'horizontal').
      'direction' => 'vertical',
      // Keys of colors to use for the gradient.
      'colors' => ['top', 'bottom'],
    ],
  ],

  // Preview files.
  'preview_library' => 'ncs_primary/color.preview',
  'preview_html' => 'color/preview.html',

  // Attachments.
  '#attached' => [
    'drupalSettings' => [
      'color' => [
        // Put the logo path into JavaScript for the live preview.
        //'logo' => theme_get_setting('logo.path', 'ncs_primary'),
        'display_font' => theme_get_setting('custom_styles.display_font', 'ncs_primary'),
        'display_font_stack' => theme_get_setting('custom_styles.display_font_stack', 'ncs_primary'),
        'body_font' => theme_get_setting('custom_styles.body_font', 'ncs_primary'),
        'body_font_stack' => theme_get_setting('custom_styles.body_font_stack', 'ncs_primary'),
      ],
    ],
  ],
];
