const mongoose = require( "mongoose" );
const Schema = mongoose.Schema;

const NoteSchema = new Schema( {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    tag: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
} );
const Note = mongoose.model( 'note', NoteSchema );

module.exports = Note;