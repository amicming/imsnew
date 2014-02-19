// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require jquery.tag
//= require_tree .

/**
 * Global initializer -- execute each initializer in the Init struct.
 */
$(document).ready(function init() {
    /* execute each initializer */
    $.each(Init, function(i, initializer){
        initializer()
    });
});

/**
 * A collection of page initialization functions.
 */
var Init = {
    tagHelpers:function(){
        $('#post_tag_list').tagSuggest({
            tags: gon.tags
            //tags: ["agile","ajax","apache","api","apml","applescript","architecture","auth","autocomplete","beautify","bug","bugs","C","canvas","cheatsheet","closure","Cocoa","code","codedump","comet","compiler","compression","compressor","Computer","crossdomain","csrf","css3","D","dashcode","debug","debugger","debugging","development","dom","ext","firebug","firefox","flash","flex","framework","functions","greasemonkey","hack","hacks","howto","html","html5","ie","iframe","iframes","innerhtml","input","Java","javascript","jquery","js","js2","keycodes","keypress","LAMP","language","languages","leak","leaks","livesearch","memory","memoryleak","minify","moo","mootools","namespace","nu","oauth","obfuscate","obfuscator","objective-c","onload","oop","opml","optimisation","optimised","optimization","pack","packer","performance","perl","php","plugin","plugins","programming","prototype","prototyping","rail","rails","regexp","replacehtml","reserved","rest","ruby","scripting","scroll","scrolling","sdk","snippet"]
//            url: '/abbreviations/1.json',
//            delay: 250
        });
    }
};