import axios from "axios";

export default {
  // Gets all lessons
  getLessons: function () {
    return axios.get("/api/lessons");
  },
  // Gets the lesson with the given id
  getLesson: function (id) {
    return axios.get("/api/lessons/" + id);
  },
  // Deletes the lesson with the given id
  deleteLesson: function (id) {
    return axios.delete("/api/lessons/" + id);
  },
  // Saves a lesson to the database
  saveLesson: function (lessonData) {
    return axios.post("/api/lessons", lessonData);
  },
  // update a lesson in the database
  updateLesson: function (lessonData, id) {
    return axios.put("/api/lessons/" + id, lessonData);
  },

  // Login
  login: function (userData) {
    return axios.post("/api/users/login", userData);
  },

  isLoggedIn: function () {
    return axios.get("/api/users/isLoggedIn");
  },

  logout: function () {
    return axios.get("/api/users/logout");
  },

  // Registration
  register: function (userData) {
    return axios.post("/api/users/register", userData);
  },

  // Gets all users
  getStudents: function () {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getStudent: function (id) {
    return axios.get("/api/users/" + id);
  },

  // Deletes the user with the given id
  deleteStudent: function (id) {
    return axios.delete("/api/users/" + id);
  },
};
