import './style.scss'

// highlight menu
const urlParams = new URLSearchParams(document.location.search);
for (const [key, _value] of urlParams) {
    const menuItem = document.getElementById(key);
    if (menuItem) {
        console.log(menuItem);
        menuItem.classList.add('visited');
    }
}

function menuClick(menuItem:String) {
    window.location.href = window.location.href + `${menuItem}`;

    return false;
}

document.addEventListener('click', (event:any) => {
    if (event.target.classList.contains('menu-item')) {
        event.preventDefault();
        if (!urlParams.has(event.target.id)) {
            urlParams.append(event.target.id, 'visited');
        }
        document.location.href = `${document.location.origin}/${event.target.id}/?${urlParams.toString()}`
    }
});