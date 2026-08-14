import ratelimiter from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    // In real-world-app you'd like to put the userId or IP address as the key for rate limiting. Here we are using a static key for demonstration purposes.
    const { success } = await ratelimiter.limit("my-rate-limit");

    if (!success) {
      return res.status(429).json({
        message: "Too many requests, please try again later.",
      });
    }
    next();
  } catch (error) {
    console.error("Rate limiting error:", error);
    next(error);
  }
};

export default rateLimiter;
