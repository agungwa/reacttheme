<?php
  $TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH);
?>
<!DOCTYPE html>
<html lang="en">
<head>
<?php $BRC_TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH); ?>
<script src='<?php echo $BRC_TEMPLATE_PATH; ?>/react-src/node_modules/@devloco/create-react-wptheme-utils/wpThemeClient.js'></script>

<script src='<?php echo $BRC_TEMPLATE_PATH; ?>/react-src/node_modules/@devloco/create-react-wptheme-utils/wpThemeErrorOverlay.js'></script>

<script> wpThemeClient.start("ws", "127.0.0.1", "8090"); </script>

<meta charset="utf-8" />
    <link rel="shortcut icon" href="/wp-content/themes/reacttheme/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-wptheme"
    />
    <link rel="apple-touch-icon" href="<?php echo $TEMPLATE_PATH; ?>/logo192.png" />
   
    <link rel="manifest" href="<?php echo $TEMPLATE_PATH; ?>/manifest.json" />
    
    
    <title>React WordPress Theme</title>
<link href="/wp-content/themes/reacttheme/static/css/main.chunk.css?61b47dcafe732765af05" rel="stylesheet"></head>
    <body>
    <noscript>
        You need to enable JavaScript to run this app.
    </noscript>
    <div id="root"></div>
    
    <script src="/wp-content/themes/reacttheme/static/js/bundle.js?61b47dcafe732765af05"></script><script src="/wp-content/themes/reacttheme/static/js/1.chunk.js?61b47dcafe732765af05"></script><script src="/wp-content/themes/reacttheme/static/js/main.chunk.js?61b47dcafe732765af05"></script></body>
</html>
