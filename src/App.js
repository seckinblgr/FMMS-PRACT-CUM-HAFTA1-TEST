import axios from  'axios'


  async function getData(id) {
    const {data:userData} = await axios(`https://jsonplaceholder.typicode.com/users/${id}`)
    const {data:postData} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    console.log("Users" ,userData)
    console.log("Posts",postData)
}

export default getData;