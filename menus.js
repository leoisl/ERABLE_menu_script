jQuery(document).ready(function(){
	linkSplit = jQuery("[hreflang=en]")[0].href.split("/")
	page = linkSplit[linkSplit.indexOf("en")+1].toUpperCase()
	navMenus = jQuery("[id^=nav_menu-]")
	navMenus.each(function(index) {
		menuTitle = jQuery(navMenus[index]).children('h3').html().toUpperCase()
		if (page==menuTitle) {
			jQuery(navMenus[index]).css('display', "")
			console.log("showing " + menuTitle)
		}
		else {
			jQuery(navMenus[index]).css('display', "none")
			console.log("hiding " + menuTitle)
		}
	});
})