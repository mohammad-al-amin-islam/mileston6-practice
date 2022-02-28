//৭. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে। 
const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayImg(data));
}
loadData()
const displayImg = (data) => {
    const cardHolder = document.getElementById('card-holder');
    data.forEach(element => {
        console.log(element.id);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="getId('${element.id}')" class="card">
            <img src="${element.thumbnailUrl}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
            </div>
        </div>
    
    `
        cardHolder.appendChild(div);
    });
}
//৮. প্রত্যেকটা ফটোতে ক্লিক করলে উপরে আরেকটা div থাকবে। ক্লিক করার পর ডাইনামিকভাবে ওই ফটো এর ডাটা লোড করবে। সেটা করার জন্য আগের ডাটা লোড করার API এর লিংক এর পরে photos এর পরে ডাইনামিকভাবে ${id} বসিয়ে দিবে। এরপর ডিটেইল অংশে photo এর url দিয়ে মেইন ইমেজ এবং thumbnail ইমেজ দুইটাই দেখাবে। সাথে সাথে title প্রপার্টিও দেখাবে। 
const getId = (id) => {
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => viewDetails(data));
}
const viewDetails = (data) => {
    const detailHolder = document.getElementById('view-details-holder');
    const div = document.createElement('div');
    detailHolder.textContent = "";
    div.classList.add('card');
    div.innerHTML = `
            <img src="${data.url}" class="card-img-top mb-5" alt="...">
            <img src="${data.thumbnailUrl}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data.title}</h5>
            </div>
    `
    detailHolder.appendChild(div);
}