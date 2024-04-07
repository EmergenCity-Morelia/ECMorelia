
const Mongoose=require ("mongoose");
const bcrypt = require ("bcrypt");

const UserSchema = new Mongoose.Schema({
    id: { type: Object },
    username: { type: String, requiered: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    fechaNacimiento: { type: Date},
});

UserSchema.pre('save',function(next){
    if(this.isModified('password') || this.isNew){
        const document = this;

        bcrypt.hash(document.password,10
            ,(err,hash) =>{
            if(err){
                next(err);
            }else{
                document.password = hash;
                next();
            }
        }
    );
    }else{
        next();
    }
});

UserSchema.methods.emailExist = async function (email) {
    const result = await Mongoose.model("User").find({email});

    return result.lenght>0;    
};

UserSchema.methods.comparePasword = async function (password, hash){
    const same = await bcrypt.compare(password,hash);
    return same;
}

module.exports= Mongoose.model("User", UserSchema);