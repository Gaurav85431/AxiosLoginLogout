const user = require('../Model/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Register = async (req, res) => {
  try {
    // const { name, email, password, mobile } = req.body;
    console.log("Re ", req.body)
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const mobile = req.body.mobile;


    const sPassword = await bcrypt.hash(password, 10);

    const ExistEmail = await user.findOne({ email });
    if (ExistEmail) {
      res.status(200).json({
        status: false,
        message: "Email already register",

      })
    }


    const Data = new user({
      name,
      mobile,
      email,
      password: sPassword
    })

    const SaveData = await Data.save();
    res.status(200).json({
      status: true,
      message: "User Register",
      data: SaveData
    })



  } catch (error) {
    res.status(400).json({
      success: false,
      message: "An error occur",
      error: error.message
    })
  }
}





const Login = async (req, res) => {
  try {

    const { email, password } = req.body;
    const isEmail = await user.findOne({ email });
    if (!isEmail) {
      res.status(500).json({
        success: false,
        message: "Email doesn't exist "
      })
    }

    const StoredPassword = isEmail.password;
    const MatchPassword = await bcrypt.compare(password, StoredPassword)

    //      JWT: TOKEN
    const id = await isEmail._id;
    const token = jwt.sign({ id, isEmail }, "ThisismyScecreatekey", { expiresIn: '3h' })
    //

    if (MatchPassword) {
      res.status(200).json({
        success: true,
        message: "Login successfully",
        token: token
      })
    }
    if (!MatchPassword) {
      res.status(500).json({
        success: false,
        message: "Incorrect Email or Password"

      })
    }


  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error while Login',
      error: error.message
    })
  }
}




const Logout = async (req, res) => {
  try {
    // Normally you don't need to do anything server-side for JWT logout
    // Tokens are invalidated by removing them from client side.
    res.json({ success: true, message: 'Logged out successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error while Login',
      error: error.message
    })
  }
}


module.exports = { Register, Login }