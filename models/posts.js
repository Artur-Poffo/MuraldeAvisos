module.exports = {
  mural: [
    {
      id: "dawiodhjoawihd",
      title: "Title teste mural",
      desc: "description teste mural",
    },
  ],

  getALL() {
    return this.mural;
  },

  NewPost(title, desc) {
    this.mural.push({ id: generateID(), title, desc });
  },
};

function generateID() {
  return Math.random().toString(36).substring(2, 9);
}
