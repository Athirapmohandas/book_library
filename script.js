class BookLibrary{
    addToDb(){
       let name=bk_name.value;
       let author=bk_author.value;
       let price=bk_price.value;
       let copies=bk_copies.value;
       let newbook={
        name,author,price,copies
       }
      // console.log(newbook);
       localStorage.setItem(name,JSON.stringify(newbook));
       alert("Book has been added");
       location.href = "./search.html";
    }
    findBook(){
        let search_book=document.querySelector("#find").value
         if(search_book in localStorage){
             let data=JSON.parse(localStorage.getItem(search_book))
           result.innerHTML=`<br><br>Book Name:${data.name},Book author:${data.author},Price:${data.price}, No of copies:${data.copies}`
         }
         else{
             alert(" book is not available")
         }
    }
}
var book= new BookLibrary();