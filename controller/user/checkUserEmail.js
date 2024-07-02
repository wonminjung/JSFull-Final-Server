import userSchema from '../../models/userSchema.js';

const checkUserEmail = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ message: "Invalid request" });
        }
        const result = await userSchema.exists({ email });
        if (result) {
            return res.status(200).json({ message: true });
        } else {
            return res.status(200).json({ message: false });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export default checkUserEmail;