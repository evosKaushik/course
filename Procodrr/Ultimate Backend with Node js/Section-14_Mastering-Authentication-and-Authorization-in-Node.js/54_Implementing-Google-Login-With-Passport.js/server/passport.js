import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";


const callbackURL = "http://localhost:4000/auth/google/callback";

passport.use(
  new GoogleStrategy(
    {
      clientID,
      clientSecret,
      callbackURL,
    },
    function (accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
    },
  ),
);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email", "openid"],
    prompt: "consent",
  }),
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:5500/callback.html?error=true",
    session: false,
  }),
  async function (req, res) {
    console.log(req.user._json);
    const { sub, email, name, picture } = req.user._json;
    const existingUser = users.find(({ id }) => id === sub);

    if (existingUser) {
      const existingSessionIndex = sessions.findIndex(
        ({ userId }) => userId === sub,
      );

      const sessionId = crypto.randomUUID();

      if (existingSessionIndex === -1) {
        sessions.push({ sessionId, userId: sub });
      } else {
        sessions[existingSessionIndex].sessionId = sessionId;
      }

      await writeFile("sessionsDB.json", JSON.stringify(sessions, null, 2));
      res.redirect(`http://localhost:5500/callback.html?sid=${sessionId}`);
      return res.end();
    }

    const newUser = { id: sub, email, name, picture };
    users.push(newUser);
    await writeFile("usersDB.json", JSON.stringify(users, null, 2));
    const sessionId = crypto.randomUUID();
    sessions.push({ sessionId, userId: sub });
    await writeFile("sessionsDB.json", JSON.stringify(sessions, null, 2));
    res.redirect(`http://localhost:5500/callback.html?sid=${sessionId}`);
    return res.end();
    res.redirect("/");
  },
);
