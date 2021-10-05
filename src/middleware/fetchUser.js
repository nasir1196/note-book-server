const jwt = require( "jsonwebtoken" );
// require( "dotenv" ).config( { path: "../../.env" } );
const JWT_SECRETE = "helloAnu";
// const User = require( "../models/Users" );

const fetchUser = async ( req, res, next ) =>
{
    // get the user from the jwt token  and add id  to req object
    // const headers = await res.setHeader( 'Content-Type', 'application/json' );
    const token = await req.header( "User-Token" );

    if ( !token )
    {
        res.status( 401 ).send( { error: "Please Authenticate" } );
    }
    try
    {
        const data = jwt.verify( token, JWT_SECRETE );
        req.user = data.data.user;
        next();
    } catch ( error )
    {
        res.status( 401 ).json( { error: " use the valid token" } );
    }
};

module.exports = fetchUser;