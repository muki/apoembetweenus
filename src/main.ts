import './style.scss'

// highlight menu
const urlParams = new URLSearchParams(document.location.search);
for (const [key, _value] of urlParams) {
    const menuItem = document.getElementById(key);
    if (menuItem) {
        menuItem.classList.add('visited');
    }
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
