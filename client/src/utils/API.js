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
};
