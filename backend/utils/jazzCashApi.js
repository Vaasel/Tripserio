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


    async getDetails(amount,mobileNumber,cnic,desc) {
        let pp_TxnDateTime = dayjs().format('YYYYMMDDHHmmss');
        let pp_TxnExpiryDateTime = dayjs(pp_TxnDateTime).add(1, 'hour').format('YYYYMMDDHHmmss');
        let pp_Amount = amount * 100;
        let pp_TxnRefNo = "T" + pp_TxnDateTime;
        // let token = crypto.randomBytes(20).toString("hex");
        // let secureHash = crypto.createHash("sha256").update(token).digest("hex")
        // let pp_SecureHash = secureHash;
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
            "ppmpf_1": mobileNumber,
        }

        function sortObjectKeysAlphabetically(obj) {
            const sortedKeys = Object.keys(obj).sort();
            const sortedObject = {};

            for (const key of sortedKeys) {
                sortedObject[key] = obj[key];
            }

            return sortedObject;
        }
        let sortedObject = sortObjectKeysAlphabetically(data)
        
        function str() {
            let str = `${process.env.JAZZCASH_INTEGRITY_SALT}&`
            let flag = false;
            return new Promise((resolve, reject) => {
                for (let i in sortedObject) {
                   str = str + `${data[i]}`
                    
                    if (i == "ppmpf_1") {
                        flag = true;
                    } else {
                        str = str + `&`;
                    }
                }

                if (flag) {
                    resolve(str);
                }
            })
        }

   
      
        let dataString = await str();
       
        let pp_SecureHash = crypto.createHmac('sha256', process.env.JAZZCASH_INTEGRITY_SALT).update(dataString).digest("hex");
        data["pp_SecureHash"] = pp_SecureHash
       return data

    }
}

module.exports = new JazzCash();