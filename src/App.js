import axios from  'axios'     //axios işlemini yapabilmek için kütüphaneyi ekliyoruz.

  async function getData(id) {         // asenkron fonksiyonumuzu oluşturuyoruz.
    const {data:userData} = await axios(`https://jsonplaceholder.typicode.com/users/${id}`)       // user veri çekme işlemleri
    const {data:postData} = await axios(`https://jsonplaceholder.typicode.com/posts/${id}`)    // post veri çekme işlemleri
    console.log("Users" ,userData)            //çekilen user verilerni konsolo yazdırma
    console.log("Posts",postData)           //çekilen post verilerni konsolo yazdırma
}

export default getData;         // fonskiyonumuzu başka sayfalar üzerinde kullanmak için export ediyoruz