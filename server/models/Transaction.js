import {model,Schema} from "mongoose"

const  TransactionSchema = new Schema ({
    amount:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        default:"Others",
    },
    type:{
        type:String,
        required: true,
    },
    User:{
        type:Schema.Types.ObjectId,
        ref:"User",
        enum:["debit"]
    }
}, {
    timestamps:true,
});

const Transaction = model("Transaction",TransactionSchema)

export default Transaction;