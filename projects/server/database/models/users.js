module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
        iduser:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        imgProfile: DataTypes.STRING
    }, {
        schema: 'data_sampling'
    })

    return users
}