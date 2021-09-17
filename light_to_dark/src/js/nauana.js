const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change',() => {
        //musar o tema do site
        document.body.classList.toggle('dark');
    });