document.getElementById('leadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Save lead information (you can send it to your backend here)
    console.log(`Lead captured: ${name}, ${email}`);

// Send the data to the backend
    fetch('/optin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'name': name,
            'email': email
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data.message); // Log the success message
        // You can also provide user feedback in the UI here
    })
    .catch(error => console.error('Error:', error));
});


const cardImages = {
    "The Fool": "images/cardmock.png",
    "The Magician": "images/cardmock.png",
    "The High Priestess": "images/cardmock.png",
    "The Empress": "images/cardmock.png",
    "The Emperor": "images/cardmock.png",
    "The Hierophant": "images/cardmock.png",
    "The Lovers": "images/cardmock.png",
    "The Chariot": "images/cardmock.png",
    "Strength": "images/cardmock.png",
    "The Hermit": "images/cardmock.png",
    "Wheel of Fortune": "images/cardmock.png",
    "Justice": "images/cardmock.png",
    "The Hanged Man": "images/cardmock.png",
    "Death": "images/cardmock.png",
    "Temperance": "images/cardmock.png",
    "The Devil": "images/cardmock.png",
    "The Tower": "images/cardmock.png",
    "The Star": "images/cardmock.png",
    "The Moon": "images/cardmock.png",
    "The Sun": "images/cardmock.png",
    "Judgment": "images/cardmock.png",
    "The World": "images/cardmock.png",
    "Ace of Wands": "images/cardmock.png",
    "Two of Wands": "images/cardmock.png",
    "Three of Wands": "images/cardmock.png",
    "Four of Wands": "images/cardmock.png",
    "Five of Wands": "images/cardmock.png",
    "Six of Wands": "images/cardmock.png",
    "Seven of Wands": "images/cardmock.png",
    "Eight of Wands": "images/cardmock.png",
    "Nine of Wands": "images/cardmock.png",
    "Ten of Wands": "images/cardmock.png",
    "Page of Wands": "images/cardmock.png",
    "Knight of Wands": "images/cardmock.png",
    "Queen of Wands": "images/cardmock.png",
    "King of Wands": "images/cardmock.png",
    "Ace of Cups": "images/cardmock.png",
    "Two of Cups": "images/cardmock.png",
    "Three of Cups": "images/cardmock.png",
    "Four of Cups": "images/cardmock.png",
    "Five of Cups": "images/cardmock.png",
    "Six of Cups": "images/cardmock.png",
    "Seven of Cups": "images/cardmock.png",
    "Eight of Cups": "images/cardmock.png",
    "Nine of Cups": "images/cardmock.png",
    "Ten of Cups": "images/cardmock.png",
    "Page of Cups": "images/cardmock.png",
    "Knight of Cups": "images/cardmock.png",
    "Queen of Cups": "images/cardmock.png",
    "King of Cups": "images/cardmock.png",
    "Ace of Swords": "images/cardmock.png",
    "Two of Swords": "images/cardmock.png",
    "Three of Swords": "images/cardmock.png",
    "Four of Swords": "images/cardmock.png",
    "Five of Swords": "images/cardmock.png",
    "Six of Swords": "images/cardmock.png",
    "Seven of Swords": "images/cardmock.png",
    "Eight of Swords": "images/cardmock.png",
    "Nine of Swords": "images/cardmock.png",
    "Ten of Swords": "images/cardmock.png",
    "Page of Swords": "images/cardmock.png",
    "Knight of Swords": "images/cardmock.png",
    "Queen of Swords": "images/cardmock.png",
    "King of Swords": "images/cardmock.png",
    "Ace of Pentacles": "images/cardmock.png",
    "Two of Pentacles": "images/cardmock.png",
    "Three of Pentacles": "images/cardmock.png",
    "Four of Pentacles": "images/cardmock.png",
    "Five of Pentacles": "images/cardmock.png",
    "Six of Pentacles": "images/cardmock.png",
    "Seven of Pentacles": "images/cardmock.png",
    "Eight of Pentacles": "images/cardmock.png",
    "Nine of Pentacles": "images/cardmock.png",
    "Ten of Pentacles": "images/cardmock.png",
    "Page of Pentacles": "images/cardmock.png",
    "Knight of Pentacles": "images/cardmock.png",
    "Queen of Pentacles": "images/cardmock.png",
    "King of Pentacles": "images/cardmock.png"
};

    // Display a simple tarot reading
const readings = [
    "The Fool: New beginnings and adventures await you.",
    "The Magician: You have the resources to manifest your desires.",
    "The High Priestess: Trust your intuition and inner voice.",
    "The Empress: Abundance and nurturing energy are coming your way.",
    "The Emperor: Stability and structure are on the horizon.",
    "The Hierophant: Seek wisdom and guidance from tradition.",
    "The Lovers: A meaningful relationship or choice is coming.",
    "The Chariot: Triumph through determination and willpower.",
    "Strength: Inner strength and courage will guide you.",
    "The Hermit: Time for reflection and soul-searching.",
    "Wheel of Fortune: A turning point is approaching.",
    "Justice: Fairness and truth will prevail in your situation.",
    "The Hanged Man: A new perspective will bring clarity.",
    "Death: Transformation and new beginnings await.",
    "Temperance: Balance and moderation are key.",
    "The Devil: Confront your fears and unhealthy habits.",
    "The Tower: A revelation or unexpected change is imminent.",
    "The Star: Hope and inspiration are on the horizon.",
    "The Moon: Trust your intuition and look beneath the surface.",
    "The Sun: Joy, success, and positivity will come your way.",
    "Judgment: A time for reflection and reckoning with your past.",
    "The World: Completion and the realization of your goals.",
    "Ace of Wands: Creative energy and new passions will emerge.",
    "Two of Wands: Planning for the future is essential.",
    "Three of Wands: Expansion and foresight in your endeavors.",
    "Four of Wands: Celebration and harmony in relationships.",
    "Five of Wands: Conflict or competition may arise.",
    "Six of Wands: Victory and recognition are yours.",
    "Seven of Wands: Stand your ground and defend your beliefs.",
    "Eight of Wands: Swift movement or progress is imminent.",
    "Nine of Wands: Resilience and determination are required.",
    "Ten of Wands: You're carrying heavy burdens; seek support.",
    "Page of Wands: Adventure and enthusiasm await.",
    "Knight of Wands: Action-oriented and passionate energy surrounds you.",
    "Queen of Wands: Confidence and charisma define your approach.",
    "King of Wands: Leadership and vision will guide your way.",
    "Ace of Cups: Emotional fulfillment and new relationships.",
    "Two of Cups: A strong partnership is developing.",
    "Three of Cups: Friendship and community bring joy.",
    "Four of Cups: Contemplation and reevaluation of your feelings.",
    "Five of Cups: Focus on what you have rather than what you’ve lost.",
    "Six of Cups: Nostalgia and pleasant memories surface.",
    "Seven of Cups: Choices and possibilities can be overwhelming.",
    "Eight of Cups: Letting go and moving on is necessary.",
    "Nine of Cups: Contentment and satisfaction are at hand.",
    "Ten of Cups: Happiness and fulfillment in family and relationships.",
    "Page of Cups: A message of love or creativity is coming.",
    "Knight of Cups: Romance and idealism are on the rise.",
    "Queen of Cups: Emotional intelligence and compassion guide you.",
    "King of Cups: Balance between emotion and reason is essential.",
    "Ace of Swords: Clarity and a breakthrough in understanding.",
    "Two of Swords: Difficult decisions require careful thought.",
    "Three of Swords: Heartbreak or emotional pain may linger.",
    "Four of Swords: Rest and recovery are needed.",
    "Five of Swords: Tension and conflict may arise; choose your battles.",
    "Six of Swords: Moving away from difficulty towards better times.",
    "Seven of Swords: Caution against deception and trickery.",
    "Eight of Swords: Feeling trapped; seek the way out.",
    "Nine of Swords: Anxiety or worry may cloud your mind.",
    "Ten of Swords: A painful ending will lead to new beginnings.",
    "Page of Swords: New ideas or messages require your attention.",
    "Knight of Swords: Quick action and decisive thought are essential.",
    "Queen of Swords: Independence and clear thinking define you.",
    "King of Swords: Authority and intellect guide your path.",
    "Ace of Pentacles: New opportunities for prosperity are emerging.",
    "Two of Pentacles: Balance and adaptability in managing resources.",
    "Three of Pentacles: Collaboration and teamwork will benefit you.",
    "Four of Pentacles: Holding on to what you have might limit you.",
    "Five of Pentacles: Financial hardship may challenge you.",
    "Six of Pentacles: Generosity and support from others will come.",
    "Seven of Pentacles: Patience and assessment are needed.",
    "Eight of Pentacles: Skill development and hard work bring rewards.",
    "Nine of Pentacles: Enjoying the fruits of your labor.",
    "Ten of Pentacles: Wealth and family legacy are significant.",
    "Page of Pentacles: New opportunities for learning and growth.",
    "Knight of Pentacles: Steady progress and reliability are essential.",
    "Queen of Pentacles: Nurturing and practicality complement your approach.",
    "King of Pentacles: Financial success and stability are within reach."
];


const randomReading = readings[Math.floor(Math.random() * readings.length)];
const cardName = randomReading.split(":")[0];

// Update the card image and reading text
document.getElementById('cardImage').src = cardImages[cardName];
document.getElementById('greetingText').innerText = `Hello, ${name}!`;
document.getElementById('readingText').innerText = ` Today's card is: ${randomReading}`;

    // Show the reading section
    const readingDiv = document.getElementById('reading');
    readingDiv.classList.remove('hidden');

  

