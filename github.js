function get_template(obj) {
  if(obj['language'] === null) {
    obj['language']="";
  }
  var result = "<a target='_blank' href='" + obj['html_url'] + "' class='repo " + obj['language'].toLowerCase() + "'>";
  result += "<div class='lang'>" + obj['language'] + "</div>";
  result += "<div class='title'>" + obj['name'] + "</div>";
  result += "<div class='description'>" + obj['description'] + "</div>";
  result += "</a>";
  return result;
}

function fetchRepos(user) {

  jQuery(document).ready(function() {
    console.log("pulling github repos for " + user);
    jQuery.getJSON("https://api.github.com/users/" + user + "/repos?sort=updated&callback=?", function(result) {
      console.log(result.data);
      for (var x in result.data) {
        obj = result.data[x];
        jQuery(".repos-" + user).append(get_template(obj));
      }
    }).fail(function(result) {
      console.log(arguments);
    });
  });
}