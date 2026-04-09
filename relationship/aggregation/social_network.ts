class User {
    private name: string;
    private followers: User[] = [];
    private following: User[] = [];
    private messages: Message[] = [];

    constructor(name: string) {
        this.name = name;
    }

    follow(user: User) {
        if (!this.following.includes(user)) {
            this.following.push(user);
            user.addFollower(this); 
        }
    }

    private addFollower(user: User) {
        this.followers.push(user);
    }

    sendMessage(receiver: User, content: string) {
        const msg = new Message(this, receiver, content, new Date());
        this.messages.push(msg);
        receiver.receiveMessage(msg);
    }

    private receiveMessage(message: Message) {
        this.messages.push(message);
    }

    showFollowers() {
        console.log(`${this.name}'s followers:`);
        this.followers.forEach(f => console.log(f.name));
    }

    showFollowing() {
        console.log(`${this.name} follows:`);
        this.following.forEach(f => console.log(f.name));
    }
}

class Message {
    constructor(
        private sender: User,
        private receiver: User,
        private content: string,
        private timestamp: Date
    ) {}

    showMessage() {
        console.log(`${this.content} at ${this.timestamp}`);
    }
}