const dayjs = require("dayjs");
const crypto = require("crypto");

class JazzCash{

    constructor() {
        this.merchant_id = process.env.JAZZCASH_MERCHANT_ID;
        this.password =  process.env.JAZZCASH_PASSWORD
        this.integrity_salt = process.env.JAZZCASH_INTEGRITY_SALT
        this.currency = process.env.JAZZCASH_CURRENCY
        this.post_url = process.env.JAZZCASH_POST_URL;
        this.language = process.env.JAZZCASH_LANGUAGE;
        this.version = process.env.JAZZCASH_VERSION;
    }


    getDetails(amount,mobileNumber,cnic,desc) {
        let pp_TxnDateTime = dayjs().format('YYYYMMDDHHmmss');
        let pp_TxnExpiryDateTime = dayjs(pp_TxnDateTime).add(1, 'hour').format('YYYYMMDDHHmmss');
        let pp_Amount = amount * 100;
        let pp_TxnRefNo = "T" + pp_TxnDateTime;
        let token = crypto.randomBytes(20).toString("hex");
        let secureHash = crypto.createHash("sha256").update(token).digest("hex")
        let pp_SecureHash = secureHash;
        let pp_ReturnURL = "http://localhost/payment/jazzcash"


        let data = {
            "pp_Version": this.version,
            "pp_TxnType": "MWALLET",
            "pp_Language": this.language,
            "pp_MerchantID": this.merchant_id,
            "pp_Password": this.password,
            "pp_TxnRefNo": pp_TxnRefNo,
            "pp_Amount": amount * 100,
            "pp_TxnCurrency": this.currency,
            "pp_TxnDateTime": pp_TxnDateTime,
            "pp_BillReference": "billref",
            "pp_Description": desc,
            "pp_TxnExpiryDateTime": pp_TxnExpiryDateTime,
            "pp_ReturnURL":process.env.JAZZCASH_RETURN_URL,
            "pp_SecureHash": "4474757FEC7996E50E874DD9266DA3EE73E878FEB929943BC77136D449BA7D2A",
            "ppmpf_1": mobileNumber,
            "ppmpf_2": "",
            "ppmpf_3": "",
            "ppmpf_4": "",
            "ppmpf_5": ""
       
        }

       return data

    }
}

module.exports = new JazzCash();