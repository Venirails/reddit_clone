const knex = require('knex');

const config = require('../knexfile.js');

const db = knex(config);

module.exports = {
    getAll(table) {
        return table == 'users' ? db.table('users').select('id', 'username') : db(table);
    },

    getAllComments(id) {
        return db.select([
            'comments.id',
            'comments.post_id',
            'comments.body',
            'users.username',
        ]).from('comments').innerJoin('users', 'users.id', '=', 'comments.user_id')
            .where('comments.post_id', '=', id).orderBy('comments.id', 'asc');
    },

    getAllPosts() {
        return db.select([
            'posts.id',
            'posts.user_id',
            'posts.title',
            'posts.content',
            'users.username'
        ]).from('posts').innerJoin('users', 'users.id', '=', 'posts.user_id').orderBy('posts.id', 'desc');
    },

    getOne(table, id) {
        return table == 'users' ? db.table('users').select('id', 'username').first() : db(table).where('id', id).first();
    },

    getPostByUser(id) {
        return db.table('posts').where('user_id', id);
    },

    async createUser(username, email, password) {
        try {
            //let password_hash = await argon.hash(password);
            return db('users').returning(['username', 'email']).insert({ username: username, email: email, password_hash: password_hash });
        } catch (error) {
            process.exit(1);
        }
    },

    async createPost(title, content, userid) {
        return db('posts').insert({ title: title, content: content, user_id: userid });
    },

    createComment(postId, userId, body) {
        return db('comments').returning(['body']).insert({ post_id: postId, user_id: userId, body: body });
    },

    async login(username, password) {
        let getUser = await db('users').where('username', username);
        let user = getUser[0];

        try {
            if (await argon.verify(user.password_hash, password)) {
                return user;
            }
            throw Error('Wrong username or password');
        } catch (e) {
            throw Error('Wrong username or password');
        }
    },

    async getToken(token) {
        newToken = auth.decodeToken(token)
        return newToken;
    }
}