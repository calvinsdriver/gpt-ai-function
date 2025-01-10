export default async function handler(req, res) {
    if (req.method === "POST") {
        // Parse the request body
        const { name } = req.body;

        // Return a greeting message
        res.status(200).json({
            message: `Hello, ${name || "World"}!`
        });
    } else {
        // Handle unsupported HTTP methods
        res.status(405).json({ error: "Method not allowed" });
    }
}
