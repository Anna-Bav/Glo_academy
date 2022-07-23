export const partners = () => {
    const renderItems = (data) => {
        // console.log(data);
        data.forEach((elem, index) => {
            console.log(elem);
        })
    }
    
    
    fetch('https://glotest-d41b8-default-rtdb.firebaseio.com/db/partners.json')
    .then((response) => response.json())
    .then((data) => {
        renderItems(data)
    })
    .catch((error) => {
        console.log(error)
    })
}




