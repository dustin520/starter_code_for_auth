// post.js


function Post(sequelize, DataTypes){

    /* sequelize.define(modelName, attributes, options);
        create a  model like `post`
        with attributes like `body` and `title`
    */
    var Post = sequelize.define('post',{
        title: DataTypes.STRING,
        body: DataTypes.TEXT,
        userId: {
            type: DataTypes.INTEGER,
            foreignKey: true
        }
    },
    {
      classMethods: { // classMethods is a req keyword, not taco - same as static methods
        associate: function(db){
          Post.belongsTo(db.user);
        }
      }
    })
    return Post;
}

module.exports = Post;
