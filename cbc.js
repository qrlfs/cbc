// (document).ready() runs when the page has loaded
$(document).ready(function() {
  // configure login
  $("#login_box form input").attr("onfocus", "activate_login();")  
  $("#login_box button[type='submit']").after("<a href='ForgotPassword' class='pw_help glyphicon glyphicon-question-sign'></a>");
  $("#login_box button[type='submit']").html("<i class='fa fa-lock' aria-hidden='true'></i>Login");
  if ($(".hide-login").length) {
    $("#login_box").addClass("invis");
  };
  // fix small viewport menus
  if ($(".hide-menu").length) {
    $("ul#mynav").addClass("invis");
    $("nav.navbar>.container>.navbar-header").addClass("invis");
  };
  // configure contact form
  if ($(".contact-form").length) {
    $(".panel>.panel-body>form").attr("id", "qrl-contact-form");
    $(".panel>.primary_color_bk").css("display", "none");
    $("#bodypanel .col-md-12 .panel.panel-default").addClass("body-wrap-fix");
  };
  // configure footer
  $("span.gray_text:contains('© Copyright')").html("&copy; " + (new Date).getFullYear() + " CBC Mortgage @ First Federal Bank");
  $("body>div.container-full").last().attr("id", "qrl-footer"); 
  $("body").children().wrapAll("<div id='qrl-wrapper'></div>"); 
  $("#qrl-footer *:contains('|')").each(function() {    
    $(this).html($(this).html().replace(/\|/g, ""));
  });
  $("a[href*='.cbcnationalbankmortgage.com']").addClass("bypass-bump");
  $("a[href$='security-privacy']").attr("href", "https://www.cbcnationalbankmortgage.com/privacy-and-security/");
  // redirects privacy_statement to https://www.cbcnationalbankmortgage.com/privacy-and-security/
  if ($(".privacy_statement_redirect").length) {
    window.location = "https://www.cbcnationalbankmortgage.com/privacy-and-security/"; 
  }
  $("a[href$='accessibility-statement']").attr("href", "https://www.cbcnationalbankmortgage.com/accessibility-statement/");  
  // redirects accessibility to https://www.cbcnationalbankmortgage.com/accessibility-statement/
  if ($(".accessibility_redirect").length) {
    window.location = "https://www.cbcnationalbankmortgage.com/accessibility-statement/"; 
  }
  $("#qrl-footer a").each(function() {
    $(this).text($(this).text().trim());
  });  
  // add favicon
  var fav = "data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAAAKxf8KCsX/AArF/wAKxf8BCsX/AArF/wAKxf8ACsX/BgrF/zMKxf9WCsX/UgrF/ywKxf8GCsX/AAAAAAAAAAAACsX/RgrF/zIKxf8GCsX/CQrF/zMKxf9GCsX/SwrF/1gKxf9yCsX/eQrF/3cKxf9oCsX/NArF/wkKxf8ACsX/AArF/w8Kxf9UCsX/egrF/14Kxf9JCsX/UwrF/2EKxf9rCsX/cArF/3sKxf+CCsX/gQrF/4cKxf+ECsX/PgrF/wIKxf8ADML/AQnH/CAMwvZiCcf+jwnG/6gKxv+xCsX/tgrF/7wKxf/GCsX/zwrF/9AKxf+7CsX/jgrF/3AKxf8iAAAAAF43AABfNwAZXjcAUFZCDkI6cGMuHaK/LAnI/ycKxf8nCsX/KwrF/zcKxf9SCsX/gwrF/8IKxf+vCsX/LVs9AQBbPQEAWz0BVVo8AXFaPAG6WDoAVFc5ACdYOQAAAAAAAAAAAAAAAAAAAP//AA+09wAJyvgPC8P6dQrF/5RbPQEAWz0BCVs9AWlYOwFeWTwBylg7AVVXOgEoVzoBB1k7ASFaPAEQWTsBFFo8AQhaPAAKXDoARFhCEk4PvO+CWz0BAFs9ARZbPQFmWTsBGlo8AaFYOwFYVzoBJVc6ATtZOwHgWjwBgFk7Ab9aPAFeWjwBRVo8ATddOgBOMYSGYVs9AQBbPQEXWz0BZlk7ARBaPAGZWDsBWFc6ASZXOgEsWTsBrFo8AWZZOwGgWjwBUlo8AVBaPAEIWz0BVVZFEDlbPQEAWz0BC1s9AW1aPAEaWjwBmFg7AVhXOgElVzoBMlk7AcJaPAFzWTsBu1o8AV5aPAFOWjwBCls9AWZbPQEiWz0BAFs9AQBbPQFdWz0BN1o8AWBYOwFVVzoBJVc6ATdZOwHGWjwBbFk7AZlaPAFIWjwBTls9ASVbPQFsWz0BBgAAAABbPQEAWz0BIls9AW9cPgEPVzoBPlc6ATdYOgECWTsBDlo8AQVYOwEDWjwBMlo8AVhbPQFmWz0BOVs9AQAAAAAAWz0BAFs9AQBbPQFFWz0BZVk7AR9XOgFZVzoBE1g6AQBZOgEAWTwBGlo8AWRbPQFhWz0BWls9AQNbPQEAAAAAAAAAAABbPQEAWz0BAls9AT9bPQFwWjwBaFg7AV5XOwEEWTsBO1k8AXhaPAFwWz0BS1s9AQdbPQEAAAAAAAAAAAAAAAAAAAAAAFs9AQBbPQEAWz0BFls9AUNZPAFVWDsBX1k7AWBZPAFoWTwBKlQ6AQBbPQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGJDAQBYOwEAWDsBBlg7AUdYOwEUUDIBAFk8AQBZPAEAAAAAAAAAAAAAAAAAZgcAAAADAAAAAAAAgAAAAMAAAADB+AAAgAAAAIAAAACAAAAAgAAAAMAAAADAAQAA4IEAAOADAAD4DwAA/i8AAA==";
  $("head").prepend("<link rel='shortcut icon' href='" + fav + "' />");
  // redirects contact_us to contact
  if ($(".contact-redirect").length) {
    window.location = "/contact"; 
  }
  // wraps the resource page for css helpers
  if ($(".resources_wrap").length) {
    var r = window.location.hash.replace("#", "");
    $("#resource" + r).collapse("show");
  }
  // fix the speed bump modal arrangement
  if ($("#modal_leavingPage").length) {
    var t = $("#modal_leavingPage .modal-title");
    var h = $("#modal_leavingPage .modal-header");
    h.after("<div class='modal-body'><p>" + t.text() + "</p><p>Would you like to continue?</p></div>");
    t.text("You're about to leave the CBC Mortgage website.");
  }
  // fixes to upload_file page
  if ($('upload-loan').length) {
    // remove MISMO option
    $('#file_type option[value="ftMismoAUS"]').remove();
    // fix css
    $(".question_label").removeClass("question_label").css("font-weight","normal");
    $("h3.caption.ng-scope").replaceWith('<h1>' + $("h3.caption.ng-scope").html() + '</h1>');
    $(".nav-upload").addClass("active");
  }
  // allows manual bypass of speedbump for approvedfast or ffbf-hosted content
  $(".bypass-bump").each(function() {
    var anchor = $(this);
    anchor.unbind("click");
  });
  // add title to known pipeline reports
  if (window.location.pathname == "/summary") { 
    var qid = getParameterByName("query_id");
    var qtitle = "";
    switch(qid) {
      case "11079966":
        qtitle = "Active Pipeline";
        break;
      case "11079967":
        qtitle = "Cancelled &amp; Denied (Last 90 Days)";
        break;
      case "11079968":
        qtitle = "Funded (Last 30 Days)";
        break;
      case "11079969":
        qtitle = "Locked Loans";
        break;
      case "11079970":
        qtitle = "Originations (Last 60 Days)";
        break;
      case "11079971":
        qtitle = "Pended Loans (UW &amp; PC)";
        break;
    }
    if (qtitle != "") {
      $("#bodypanel input[name='columns']").before("<h2 style='margin-top:0;'>" + qtitle + "</h2>");
    }
  }
});
// end (document).ready()
// activate_login() highlights the login area
function activate_login() {
  if ($("#login_box.login_active").length) {
  //login is already active; do nothing
  } else {
    //configure the login animation
    //dim background
    $("body").prepend("<div id='login_active_bg' class='login_active' onclick='deactivate_login();'></div>")
    //move login
    $("#login_box").addClass("login_active"); 
  }   
}
// deactivate_login() un-highlights the login area
function deactivate_login() {
  //remove animated login elements
  $("#login_active_bg").remove();
  $("#login_box").removeClass("login_active"); 
}
// determines if the login form is available
function login_available() {
  var login = $("#login_box");  
  if (login.find('button[type="submit"]').length) {
    return true;
  } else {
    return false;
  }
}
// utility to get query string parameter by name
function getParameterByName(name) {
  var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
// loan search fixes
// loan number search
if ($("#loan_search").length) {
  $("#ihm_query_loan_number").attr("type", "number"); // make sure only loan numbers can be entered
  $("#ihm_query_loan_number").keypress(function(e) {
    if (e.which == 13) {
      window.location = "summary?query_id=11076646&searchCall=leftmenu&columns=Loan+Number%2CBorrower+Name%2CLoan+Amount%2C%2CRate%2CChannel%2CStatus%2CLock+Expires&ihm_query_loan_number=" + encodeURIComponent(this.value);
    }
  });
}
// last name search
if ($("#loan-query").length) {
  $("#loan-query input[name='query_id']").val("11074519"); // fix blank query_id
  $("#loan-query input[name='columns']").val("Loan Number,Borrower Name,Loan Amount,Rate,Channel,Status,Lock Expires"); // hard-code columns
  $("#ihm_query_last_name").keypress(function(e) {
    if (e.which == 13) {
      window.location = "summary?query_id=11074519&searchCall=leftmenu&columns=Loan+Number%2CBorrower+Name%2CLoan+Amount%2C%2CRate%2CChannel%2CStatus%2CLock+Expires&ihm_query_last_name=" + encodeURIComponent(this.value);
    }
  });  
}
