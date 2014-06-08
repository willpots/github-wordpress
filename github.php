<?php
/**
 * @package Github
 * @version 0.1
 */
/*
Plugin Name: Github Wordpress
Plugin URI: http://willpotter.co/projects/github-wordpress
Description: Wordpress interface for pulling in information from Github.
Author: Will Potter
Version: 0.1
Author URI: http://willpotter.co/
*/
// Add Shortcode
function get_user_repos( $atts ) {

  // Attributes
  extract( shortcode_atts(
    array(
      'user'=>''
    ), $atts )
  );

return <<<EOD
  <div class='repos repos-{$user}'></div>
  <script type="text/javascript">
    fetchRepos('{$user}');
  </script> 
EOD;

}
wp_enqueue_style("github.css", plugins_url() . "/github/github.css");
wp_enqueue_script("github.js", plugins_url() . "/github/github.js");
add_shortcode( 'github-repos', 'get_user_repos' );

?>