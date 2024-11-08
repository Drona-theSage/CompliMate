

function generateCompliment() {
    let num=0
    console.log(num);
    const compliments=[
        "You have a fantastic sense of humor",
        "You light up every room you walk into.",
        "You're an amazing friend.",
        "You have such a kind heart.",
        "Your positivity is infectious.",
        "You're a great listener and truly make people feel heard.",
        "You are so thoughtful and considerate.",
        "You always know how to bring out the best in others.",
        "You make the world a better place just by being in it.",
        "You are so creative and talented!",
        "Your perspective is refreshing and inspiring.",
        "You have a wonderful energy about you.",
        "You are stronger and more resilient than you know.",
        "You have an incredible ability to make people feel valued.",
        "You are an inspiration to those around you.",
        "You handle challenges with such grace and strength.",
        "You are an absolute joy to be around.",
        "You bring out the best in everyone you meet.",
        "You have a beautiful way of making others feel loved and appreciated.",
        "You are so talented at what you do!",
        "Your kindness is a balm to everyone who encounters it.",
        "You're one of a kind!",
        "Your compassion for others is inspiring.",
        "You are a breath of fresh air!",
        "Your laughter is truly the best medicine.",
        "You make people feel so comfortable around you.",
        "You have an amazing ability to make people feel special.",
        "You're a natural at making people feel welcome.",
        "You bring so much joy to those around you."
        ];

    const randomCompliment= compliments[Math.floor(Math.random() * compliments.length)];
     
    //display compliments
    const compliment_box= document.getElementById("compliment_output_box");
    compliment_box.textContent= randomCompliment;
    
    compliment_box.style.display="block"; //show the div

};
