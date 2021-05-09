const UUID = require('uuid');

const {getAll, getById, removeById, save, update} =
    require('../dal/posts.dao');

let createPost = async ({name, description}) => {
    let post = {
        id: UUID.v4(),
        name,
        description,
        postedDate: new Date()
    };
    return await save(post);
};

let getPosts = async () => {
    return await getAll();
};

let getPost = async (id) => {
    return await getById(id);
};

let deletePost = async (id) => {
    return await removeById(id);
};

let updatePost = async (id, {name, description}) => {
    let post = {
        name,
        description,
        postedDate: new Date()
    };
    return await update(id, post);
};

module.exports = {
    createPost,
    getPosts,
    getPost,
    deletePost,
    updatePost
};

