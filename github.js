function get_template(obj) {
  var result = "<a target='_blank' href='" + obj['html_url'] + "' class='repo " + obj['language'] + "'>";
  result += "<div class='lang'>" + obj['language'] + "</div>";
  result += "<div class='title'>" + obj['name'] + "</div>";
  result += "<div class='description'>" + obj['description'] + "</div>";
  result += "</a>";
  return result;
}

function fetchRepos(user) {

  jQuery(document).ready(function() {
    console.log("pulling github repos for " + user);
    jQuery.getJSON("https://api.github.com/users/" + user + "/repos?callback=?", function(result) {
      for (var x in result.data) {
        console.log(result.data);
        obj = result.data[x];
        jQuery(".repos-" + user).append(get_template(obj));
      }
    }).fail(function(result) {
      console.log(arguments);
    });
  });
}