class User {
    constructor(name, phon) {
        this.name = name;
        this.phon = phon;
    }
    editUser(user) {
        this.name = user.name;
        this.phon = user.phon;
    }
}