
document.getElementById('toggleButton').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open'); 

    if (sidebar.classList.contains('open')) {
        sidebar.style.display = 'block'; 
    } else {
        sidebar.style.display = 'none';
    }
});

//  hide the sidebar
document.getElementById('togglehidden').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('open'); 
    sidebar.style.display = 'none';
});



fetch('data.json')
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();  
})
.then(data => {
    console.log(data);  




    document.getElementById('title').innerHTML = `<h2>${data.title}</h2> `;   
    document.getElementById('task_title').innerHTML = `<h3>${data.tasks[0].task_title}</h3> `; 
    document.getElementById('task_title1').innerHTML = `<h3>${data.tasks[0].task_title}</h3> `; 
    document.getElementById('task_description').innerHTML = `<p>${data.tasks[0].task_description}</p> `; 
    document.getElementById('asset_title').innerHTML = `<h3>${data.tasks[0].assets[0].asset_title}</h3> `; 
    document.getElementById('asset_title-h').innerHTML = `<li>${data.tasks[0].assets[0].asset_title}</li> `; 
    document.getElementById('asset_title-h1').innerHTML = `<li>${data.tasks[0].assets[1].asset_title}</li> `; 
    document.getElementById('asset_title-h2').innerHTML = `<li>${data.tasks[0].assets[2].asset_title}</li> `; 
    document.getElementById('asset_title-h3').innerHTML = `<li>${data.tasks[0].assets[3].asset_title}</li> `; 
    document.getElementById('asset_description').innerHTML = `<span>${data.tasks[0].assets[0].asset_description}</span> `;
    document.getElementById('asset_content').innerHTML = `<img src="${data.tasks[0].assets[0].asset_content}" alt="Asset Image" />`;
    document.getElementById('asset_title1').innerHTML = `<h3>${data.tasks[0].assets[1].asset_title}</h3> `; 
    document.getElementById('asset_description1').innerHTML = `<span>${data.tasks[0].assets[1].asset_description}</span> `;
    document.getElementById('asset_title2').innerHTML = `<h3>${data.tasks[0].assets[2].asset_title}</h3> `; 
    document.getElementById('asset_description2').innerHTML = `<span>${data.tasks[0].assets[2].asset_description}</span> `;
    document.getElementById('asset_title3').innerHTML = `<h3>${data.tasks[0].assets[3].asset_title}</h3> `; 
    document.getElementById('asset_description3').innerHTML = `<span>${data.tasks[0].assets[3].asset_description}</span> `;
    document.getElementById('description').innerHTML = `<p>${data.description.trim().substring(0, 140)}</p>`; 

})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});