const containers = document.querySelectorAll('.content-container');

for (let i = 0; i < containers.length; i++) {
    containers[i].addEventListener('click', function() {
        this.classList.toggle('active');
    });
}