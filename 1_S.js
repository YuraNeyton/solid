// Single Responsibility Principe
/*
Один клас має відповідати за один функціонал, одну сутність, не нарушати абстракцію одної відоповідальності,
тобто клас не має робити багато речей, а тільки одну.
*/


class Post {

    constructor(title, text) {
        this.title = title;
        this.text = text
        this.modified = false;
    }

    update(text) {
        this.text = text;
        this.modified = true;
    }

    // BAD
    // toHTML() {
    //     return `
    //     <div class="news">
    //         <h1>${this.title}</h1>
    //         <p>${this.text}</p>
    //     </div>`
    // }
    //
    // toJSON() {
    //     return JSON.stringify({
    //         title: this.title,
    //         text: this.text,
    //         modified: this.modified
    //     }, null, 2);
    // }
}

// GOOD
class PostPrinter {
    constructor(post) {
        this.post = post
    }


    toHTML() {
        return `
        <div class="news">
            <h1>${this.post.title}</h1>
            <p>${this.post.text}</p>
        </div>`
    }

    toJSON() {
        return JSON.stringify(this.post, null, 2);
    }
}

const post = new Post('bmw', 'new engine for w201');

const postPrinter = new PostPrinter(post);

console.log(postPrinter.toJSON());

