const reviews = [
    {
      id: 1,
      name: "Susan Smith",
      job: "Web Developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "Anna Johnson",
      job: "Web Designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "Peter Jones",
      job: "Intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "Bill Anderson",
      job: "The Boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

const nextPerson = document.querySelector('.next');
const prevPerson = document.querySelector('.prev');
const surprisePerson = document.querySelector('.surprise');

let i = 1;
let d = 3;

function nextReview() {
    nextPerson.addEventListener('click', handleNext)
}

function handleNext() {
    if(i >= 4){
        i = 0
    }
    if (i <= 3) {
     reviewsHtml(i++)
    }   
}

function prevReview() {
    prevPerson.addEventListener('click', handlePrev)
}

function handlePrev() {
    if(d < 0){
        d = 3
    }
    if (d >= 0) {
        reviewsHtml(d--)
    }   
}

function randomReviews(){
    surprisePerson.addEventListener('click', handleSurprise)
}

function handleSurprise() {
    console.log(Math.floor(Math.random() * 4));
    reviewsHtml(Math.floor(Math.random() * 4))
}

function startReviews() {
    reviewsHtml(0)
}

function reviewsHtml(index){


    document.querySelector('.card').innerHTML = `
        <div class="img">
            <img src="${reviews[index].img}" alt="">
        </div>

        <h4>${reviews[index].name}</h4>
        <p>${reviews[index].job}</p>

        <span>
            ${reviews[index].text}
        </span>
    `
}


startReviews()

nextReview()
prevReview()
randomReviews()