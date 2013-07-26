/**
 * Created with JetBrains WebStorm.
 * User: rrovirosa
 * Date: 7/1/13
 * Time: 3:02 PM
 * To change this template use File | Settings | File Templates.
 */
$(function() {
    $("#instaButton").click(function() {
        $(location).attr('href',"instagram.html");
    });

    $("#menuButton").click(function() {
        $(location).attr('href'," menu.html");
    });


    $(document).on("pagebeforeshow", "#index", function() {
        $(location).attr('href'," index.html");
    });
});