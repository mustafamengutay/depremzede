const User = require('../models/user')

// Create a middleware function to check posting frequency
const checkPostFrequency = async (req, res, next) => {
    try {
        const { email } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });

        if (user) {
            // Check the time difference between the last two posts
            const lastTwoPosts = user.posts.slice(-2);
            const timeDifference = Date.now() - lastTwoPosts[1].createdAt;

            if (lastTwoPosts.length === 2 && timeDifference < 5 * 60 * 1000) {
                return res.status(429).send({ error: 'Too many posts within a 5-minute window' });
            }
        }

        // Continue to the next middleware or route handler
        next();
    } catch (e) {
        res.status(500).send(e);
    }
};

module.exports = checkPostFrequency