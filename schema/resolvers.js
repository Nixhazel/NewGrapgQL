const { UserList } = require("../FakeData");

const resolvers = {
    Query: {
        users() {
            console.log(UserList[1].age);
            return UserList;
        }
    }
}

module.exports = {resolvers};