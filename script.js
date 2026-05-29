const blogPosts = [
    {
        title: "Learning JavaScript",
        content: "JavaScript makes website interactive and powerful."
    },

    {
        title: "My Coding Journey",
        content: "I started coding and built my first stopwatch app",
        image:"https://picsum.photos/300"
    },

    {
        title: "Future of Ai",
        content: "Artificial Intelligence is changing the world."
    }
];

const postContainer = document.getElementById("posts");

blogPosts.forEach(post => {

    const postElement = document.createElement("div");

    postElement.classList.add("post-card");

    postElement.innerHTML = `
    <img src="${post.image}" width="100%">
    <h3>${post.title}</h3>
    <p>${post.content}</p>
    `;

    postsContainer.appendChild(postElement);
});