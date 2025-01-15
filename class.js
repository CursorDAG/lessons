class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }

    static mergeComments(first, second) {
        return `${first} ${second}`
    }
}

const firstComment = new Comment('First comment')

console.log(firstComment)

firstComment.upvote()

console.log(firstComment.votesQty)

console.log(Comment.mergeComments('First comment', 'Second comment'))
