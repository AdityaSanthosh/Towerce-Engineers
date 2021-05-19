function onMenuMouseEnter(item) {
    item.classList.remove("text-black-50");
}
function onMenuMouseLeave(item) {
    item.classList.add("text-black-50");
}

const menuItems = document.getElementsByClassName("nav-link");
for(const menuItem of menuItems) {
    menuItem.onmouseenter = () => onMenuMouseEnter(menuItem);
    menuItem.onmouseleave = () => onMenuMouseLeave(menuItem);
}

