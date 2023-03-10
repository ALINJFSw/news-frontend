window.onload = () => {
    var post_id
    const title = $("#title");
    const image = $("#image");
    const date = $("#date");
    const author = $("#author");
    const p1 = $("#p1");
    const p2 = $("#p2");
    const p3 = $("#p3");
    const submit = $("#submit");
    axios.get("http://localhost//news/backend/get_news_api.php").then(response => {
        const news = response.data
        if(news.result == "succes"){
            console.log(news);
            title.text(news.title);
            date.text("date:" + news.date);
            author.text("author: " + news.author);
            p1.text(news.p1);
            p2.text(news.p2);
            p3.text(news.p3);
            image.attr("src",news.image);
            submit.click(()=>{
                const comment = $("#comment").val();
                const data = new FormData();
                data.append("post_id",news.id);
                data.append("post_text", comment);
                axios.post("http://localhost//news/backend/add_comment_api.php",data).then(response =>console.log(response.data.result) ).catch(error => console.log(erro))
            })
        }
}).catch(error => console.log(error))

  
    
}


