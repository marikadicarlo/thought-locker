const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYY [at] hh:mm a')
    },

    username: {
        type: String,
        required: true
    },

    reactions: [reactionSchema]
},
{
    toJSON: {
        virtuals: true
    },
    id: false
});

thoughtSchema.vitual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;