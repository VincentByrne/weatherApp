import { userStore } from "../models/user-store.js";

export const accountsController = {
  index(request, response) {
    const viewData = {
      title: "Login or Signup",
    };
    response.render("index", viewData);
  },

  login(request, response) {
    const viewData = {
      title: "Login to the Service",
    };
    response.render("login-view", viewData);
  },

  logout(request, response) {
    response.cookie("station", "");
    response.redirect("/");
  },

  signup(request, response) {
    const viewData = {
      title: "Sign Up",
    };
    response.render("signup-view", viewData);
  },

  async register(request, response) {
    const user = request.body;
    await userStore.addUser(user);
    console.log(`Registering ${user.email}`);
    response.redirect("/");
  },

  async authenticate(request, response) {
    const user = await userStore.getUserByEmail(request.body.email);
    if (user && request.body.password === user.password) {
      response.cookie("station", user.email);
      console.log(`Logging in ${user.email}`);
      return response.redirect("/dashboard");
    }
    console.log('Authentication failed');
    response.redirect("/login");
  },

  async getLoggedInUser(request) {
    const userEmail = request.cookies.station;
    return await userStore.getUserByEmail(userEmail);
  },
  
  async renderProfile(request, response) {
    const userEmail = request.cookies.station;
    if (!userEmail) {
      return response.redirect("/login");
    }

    const user = await userStore.getUserByEmail(userEmail);
    if (!user) {
      return response.redirect("/login");
    }

    const viewData = {
      title: "Profile",
      user: user,
    };

    response.render("profile-view", viewData);
  },

  async renderEditProfile(request, response) {
    const userEmail = request.cookies.station;
    if (!userEmail) {
      return response.redirect("/login");
    }

    const user = await userStore.getUserByEmail(userEmail);
    if (!user) {
      return response.redirect("/login");
    }

    const viewData = {
      title: "Edit Profile",
      user: user,
    };

    response.render("edit-profile", viewData);
  },

  async updateProfile(request, response) {
    const userEmail = request.cookies.station;
    const user = await userStore.getUserByEmail(userEmail);

    if (user) {
      const updatedDetails = {
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        password: request.body.password 
      };
      await userStore.updateUser(user._id, updatedDetails);
      console.log(`Updating profile for ${user.email}`);
      response.redirect("/profile");
    } else {
      response.redirect("/profile/edit");
    }
  }
};
