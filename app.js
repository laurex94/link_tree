const containerTree = document.getElementById('container-tree');

containerTree.addEventListener('click', (e) => {
    const btnDetected = e.target.classList[1];
    if (btnDetected === 'linkedin'){
        console.log('le diste click al link de linkedin');
    }
    if (btnDetected === 'github'){
        console.log('le diste click al link de github');
    }
    if (btnDetected === 'cv'){
        console.log('diste click para descargar mi cv');
    }
    if (btnDetected === 'portofolio'){
        console.log('le diste click al link de portofolio');
        alert("Proximamente");
    }
})