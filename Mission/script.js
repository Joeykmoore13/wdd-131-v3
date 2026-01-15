let selector = document.querySelector('#theme');
selector.addEventListener('change', ChangeTheme);


function ChangeTheme() {
    let current_theme = selector.value;
    let logo = document.getElementById("logo").querySelector('img');
    console.log(logo)
    if (current_theme == "dark")
    {
        logo.setAttribute('src', 'images/byui-logo-dark.png');
        document.body.style.backgroundColor = "#000000";
        document.body.style.border = '1px solid white';
        document.getElementById('core').classList.add('dark-text')
        document.getElementById('by').classList.add('dark-text')
        document.querySelector('h1').classList.add('dark-text')
        const list_items = document.querySelectorAll('li')
        list_items.forEach(element => {element.classList.add('dark-text')});
        document.querySelector('hr').classList.add('dark-text');
        // TODO 
        // Change hr color
    }
    else
    {
        document.body.style.backgroundColor = "#ffffff";
        logo.setAttribute('src', 'images/byui-logo-blue.webp');
        document.body.style.border = '1px solid black';
        document.getElementById('core').classList.remove('dark-text')
        document.getElementById('by').classList.remove('dark-text')
        document.querySelector('h1').classList.remove('dark-text')
        const list_items = document.querySelectorAll('li')
        list_items.forEach(element => {element.classList.remove('dark-text')});
        document.querySelector('hr').classList.remove('dark-text');
    }
    
}