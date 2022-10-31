const { User } = require('../../models/index');


module.exports = {
    getAllUsers: async () => {
        try {
            const usersFetched = await User.find();
            return usersFetched;
        } catch (error) {
            throw error;
        }
    },

    createUser: async args => {
        debugger;
        try {
            const { username, age, posts } = args.user;
            const user = new User({
                username,
                age,
                posts,
            })
            const newUser = await user.save();
            // return { ...newUser._doc, _id: newUser.id }
            return newUser;
        } catch (error) {
            throw error
        }
    },
}
