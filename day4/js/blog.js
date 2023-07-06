let dataBlog = []

const addBlog = (event) => {
    event.preventDefault()

    let title = document.getElementById("input-blog-title").value
    let content = document.getElementById("input-blog-content").value
    let image = document.getElementById("input-blog-image").files
 
    // console.log(title)
    // console.log(content)
    // console.log(image)

    // untuk membuat object file menjadi URL secara sementara, agar tampil
    image = URL.createObjectURL(image[0])

    let blog = {
        title,
        content,
        image, // bentuknya blob url (sementara)
        postAt: "04 Juli 2023",
        author: "Surya Gans"
    }

    dataBlog.push(blog)
    renderBlog()

    console.log(dataBlog)
}

function renderBlog() {
    document.getElementById("contents").innerHTML = ''
    // misal dataBlog = 3 object
    for (let index = 0; index < dataBlog.length; index++) {
        document.getElementById("contents").innerHTML += `
        <div class="blog-list-item">
            <div class="blog-image">
            <img src="${dataBlog[index].image}" alt="" />
            </div>
            <div class="blog-content">
            <div class="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-post">Delete Post</button>
            </div>
            <h1>
                <a href="blog-detail.html" target="_blank">${dataBlog[index].title}</a>
            </h1>
            <div class="detail-blog-content">
                ${dataBlog[index].postAt} | ${dataBlog[index].author}
            </div>
            <p>
                ${dataBlog[index].content}
            </p>
            </div>
        </div>
        `
    }
}