import { DataTypes, Model, Optional } from "sequelize"

import sequelizeConnection from '../database'

import { encrypt } from '../../utils/encrypt-utils'

class User extends Model {
    public id!: string
    public username!: string
    public password!: string
}

User.init({
    id: {
        type: DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            len: [8, 20]
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8, 20]
        }
    }
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
    tableName: 'user',
    underscored: true,
    hooks: {
        beforeSave: (user: any, options: any) => {
            user.password = encrypt(user.password)
        }
    }
})

export default User
