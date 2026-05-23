import crypto from "crypto";

const guestMiddleware = (req, res, next) => {
  try {
    // Existing session
    const existingSessionId = req.cookies?.sessionId;

    if (existingSessionId) {
      req.sessionId = existingSessionId;

      return next();
    }

    if (!existingSessionId) {
      // Create new session
      const sessionId = crypto.randomUUID();

      req.sessionId = sessionId;

      res.cookie("sessionId", sessionId, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      next();
    }
  } catch (error) {
    next(error);
  }
};

export default guestMiddleware;
