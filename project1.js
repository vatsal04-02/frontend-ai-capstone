const users = [
  {
    name: "Vatsal Tripathi",
    pic: "https://randomuser.me/api/portraits/men/1.jpg",
    bio: "I am a web developer and a CSE student."
  },
  {
    name: "Aarav Sharma",
    pic: "https://randomuser.me/api/portraits/men/2.jpg",
    bio: "Frontend developer passionate about React and UI."
  },
  {
    name: "Ananya Gupta",
    pic: "https://randomuser.me/api/portraits/women/3.jpg",
    bio: "Machine learning enthusiast and data scientist."
  },
  {
    name: "Rohan Mehta",
    pic: "https://randomuser.me/api/portraits/men/4.jpg",
    bio: "Backend developer exploring Node.js and Express."
  },
  {
    name: "Priya Verma",
    pic: "https://randomuser.me/api/portraits/women/5.jpg",
    bio: "UI/UX designer who loves creating beautiful interfaces."
  },
  {
    name: "Kabir Singh",
    pic: "https://randomuser.me/api/portraits/men/6.jpg",
    bio: "Cybersecurity enthusiast and ethical hacker."
  },
  {
    name: "Sneha Kapoor",
    pic: "https://randomuser.me/api/portraits/women/7.jpg",
    bio: "Android developer and open-source contributor."
  },
  {
    name: "Aditya Rao",
    pic: "https://randomuser.me/api/portraits/men/8.jpg",
    bio: "Competitive programmer and CSE undergraduate."
  },
  

];


function showUsers(arr){

    arr.forEach(function(user){

        // Outer div
        const card = document.createElement("div");
        card.classList.add("card");

        // create image
        const img = document.createElement("img");
        img.src = user.pic;
        img.classList.add("bg-img");

        // create content div
        const content = document.createElement("div");
        content.classList.add("content");

        //h1 and p
        const heading = document.createElement("h1");
        heading.textContent = user.name;

        const para = document.createElement("p");
        para.textContent= user.bio;


        // append h1 and p to content
        content.appendChild(heading);
        content.appendChild(para);

        // append all to card
        card.appendChild(img);
        card.appendChild(content);

        document.querySelector(".cards").appendChild(card);



    });


}

showUsers(users);