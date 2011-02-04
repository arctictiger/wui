 /*
 * Create a menubar
 * Dependencies: 
 *  wui.js
 *  wui_controls.js
 *  wui_controls_menu.js
 * 
 *  wui_menuBar.css
 */
wui.controls.menu.menuBar = function() {
    var that = wui.controls.control("nav");
    var items = [];
    var i;
    that.css.addClass("wui_position_hbox");
    that.css.addClass("wui_control_menuBar");

    that.setActive = function(menuItem) {
        for (i = 0; i < items.length; i++) {
            items[i].deselect();
        }
        menuItem.select();
    };
    
    that.menuItems = (function() {
        var add = function(menuItem) {
            menuItem.setOnClick( function() {
                that.setActive(menuItem);
            });
            items.push(menuItem);
            that.appendControl(menuItem);
        };
        return{
            add: add
        };
    }());
    
    return that;
};