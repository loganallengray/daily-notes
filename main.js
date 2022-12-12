/*
    Define a variable named `notes` and assign a value of an empty array
*/

const notes = [
    {
        id: 1,
        text: "Algorithms are cool",
        author: "Logan",
        date: "11/8/2022",
        topics: ["coding", "programming", "algorithms"]
    },
    {
        id: 2,
        text: "Not a fan of arrays",
        author: "Bob",
        date: "11/9/2022",
        topics: ["coding", "programming", "arrays"]
    },
    {
        id: 3,
        text: "Well I like arrays",
        author: "Logan",
        date: "11/10/2022",
        topics: ["coding", "programming", "arrays"]
    }
];

/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/

// push three objects to the notes array
notes.push({
    id: 4,
    text: "Well I dont",
    author: "Bob",
    date: "11/11/2022",
    topics: ["coding", "programming", "sass"]
});
notes.push({
    id: 5,
    text: "Well arrays dont like you either",
    author: "Logan",
    date: "11/12/2022",
    topics: ["coding", "programming", "arrays"]
});
notes.push({
    id: 6,
    text: "If you like them so much you should marry them",
    author: "Bob",
    date: "11/13/2022",
    topics: ["coding", "programming", "wedding bells"]
});

// use a for of to iterate through notes and log all of the text values
/*
for (const note of notes) {
    console.log(note.text);
}
*/

// use a for of inside of another for of to log all of the topics
/*
console.log("*** All Topic Notes ***")
for (const note of notes) {
    for (const topic of note.topics) {
        console.log(topic);
    }
}
*/

/* use a for loop to iterate through notes and store the lengths of the 
topics arrays, then divide the topic total by the number of notes */
/*
let totalTopics = 0;

console.log("*** Average Topic Count Per Note ***")
for (const note of notes) {
    totalTopics += note.topics.length;
}

console.log(totalTopics / notes.length);
*/

/* iterate thhrough notes, through topics, if the topic equals criteria, 
push the whole note to filtered notes array */
/* i did it by iterating twice, but you could also iterate once and 
then use .includes() on topics to find if it has the criteria */
/*
const filteredNotes = [];
const criteria = "arrays";

for (const note of notes) {
    for (const topic of note.topics) {
        if (topic === criteria) {
            filteredNotes.push(note);
        }
    }
}

console.log(filteredNotes);
*/

// iterate through notes, log the text values surrounded by article tags
/* iterate through topics, put them in section tags, and push them into
a container array. use linebreaks and horizontal tabs to format properly in a console.log */

console.log("*** Note Articles ***");
for (const note of notes) {
    const topicContainer = [];
    for (const topic of note.topics) {
        topicContainer.push(`<section>${topic}</section>`);
    }
    console.log(`<article>\n\t${note.text}\n\t${topicContainer.join("\n\t")}\n</article>`);
}