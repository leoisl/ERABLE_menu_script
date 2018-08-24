function showMenu(menuName) {
	jQuery(document).ready(function(){
		navMenus = jQuery("[id^=nav_menu-]")
		navMenus.each(function(index) {
			menuTitle = jQuery(navMenus[index]).children('h3').html().toUpperCase()
			if (menuName==menuTitle) {
				jQuery(navMenus[index]).css('display', "")
			}
			else {
				jQuery(navMenus[index]).css('display', "none")
			}
		});
	})
}
