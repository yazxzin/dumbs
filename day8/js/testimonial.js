const TestimonialData = [
    {
        user:"Rayaski",
        quote:"Kelaz pake z!",
        image:"https://img.freepik.com/free-photo/portrait-young-man-yellow-scene_23-2148184818.jpg?size=626&ext=jpg&ga=GA1.1.1402411070.1690135116&semt=ais",
        rating: 5
    },
    {
        user:"Yass.sinn",
        quote:"Gokil parsss!",
        image:"https://img.freepik.com/free-photo/portrait-handsome-asian-man_23-2149086961.jpg?size=626&ext=jpg&ga=GA1.1.1402411070.1690135116&semt=ais",
        rating:4
    },
    {
        user:"Haqi Ayass",
        quote:"Mantul, MANTap ipUL",
        image:"https://img.freepik.com/free-photo/trendy-woman-wearing-bucket-hat-medium-shot_23-2149356043.jpg?size=626&ext=jpg&ga=GA1.1.1402411070.1690135116&semt=ais",
        rating:4
    },
    {
        user:"Rani",
        quote:"Ya boleh lahh!",
        image:"https://images.unsplash.com/photo-1606406054219-619c4c2e2100?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a29yZWFuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        rating:3
    },
    {
        user:"Barudak Well",
        quote:"Maksudnya apa ini?!",
        image:"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbiUyMG1vZGVsJTIwMTYlM0E5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        rating:1
    },

]

let TestimonialHTML = ""

TestimonialData.forEach((card)=>{
    TestimonialHTML += 
    `<div class="testimonial">
        <img src="${card.image}" class="profile-testimonial" />
        <p class="quote">"${card.quote}"</p>
        <p class="author">- ${card.user}</p>
        <p class="author">${card.rating} <i class="fa-solid fa-star"></i></p>
    </div>`
})

document.getElementById("testimonials").innerHTML = TestimonialHTML

//Filter testimonial by rating

function filterTestimonial(rating){
    
    let FilteredTestimonialHTML = ""

    const filteredData = TestimonialData.filter((card)=>{
        return card.rating === rating
    })

    filteredData.forEach((card)=>{
        FilteredTestimonialHTML += 
        `<div class="testimonial">
            <img src="${card.image}" class="profile-testimonial" />
            <p class="quote">"${card.quote}"</p>
            <p class="author">- ${card.user}</p>
            <p class="author">${card.rating} <i class="fa-solid fa-star"></i></p>
        </div>`
    })

    document.getElementById("testimonials").innerHTML = FilteredTestimonialHTML
}

//Show all the data

function allTestimonial(){
    
    let FilteredTestimonialHTML = ""

    TestimonialData.forEach((card)=>{
        FilteredTestimonialHTML += 
        `<div class="testimonial">
            <img src="${card.image}" class="profile-testimonial" />
            <p class="quote">"${card.quote}"</p>
            <p class="author">- ${card.user}</p>
            <p class="author">${card.rating} <i class="fa-solid fa-star"></i></p>
        </div>`
    })

    document.getElementById("testimonials").innerHTML = FilteredTestimonialHTML
}