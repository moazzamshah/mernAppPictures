/*
local strategy: user can login using email and password
third party authentication

 */
const User = require('../models/User'); //importing user database because we will use these credentials

const LocalStrategy = require('passport-local').Strategy;
const GitHubStrategy = require('passport-github').Strategy;

module.exports = function (passport) {
  // local check of authentication process

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(null, user);
    });
  });

  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      User.findOne({ email: email }, (error, user) => {
        if (error) throw error;
        if (!user) {
          return done(null, false);
        }
        if (password != user.password) {
          return done(null, false);
        }
        return done(null, user);
      });
    })
  );

  passport.use(
    new GitHubStrategy(
      {
        clientID: '6f2ec07875fdba9abeb5',
        clientSecret: '0c7121ee2a324f297b65b7cbd1b25a96117be679',
        callbackURL: 'http://localhost:5000/auth/github/callback',
      },
      (accessToken, refreshToken, profile, done) => {
        User.findOne({ github_id: profile.id }, (error, user) => {
          if (error) throw error;
          if (user) {
            return done(null, user);
          } else {
            let newUser = new User({
              github_id: profile.id,
            });
            newUser.save((error, doc) => {
              return done(null, doc);
            });
          }
        });
      }
    )
  );
};
