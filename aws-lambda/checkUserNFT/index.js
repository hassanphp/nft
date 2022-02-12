const Ethers = require('ethers');
const { ethers } = Ethers;
const { abi } = require('./Buildspace.json');

const decode = (encrypted) => {
    let bufferObj = Buffer.from(encrypted, "base64");
    return bufferObj.toString("utf8");
};

const checkContract = async (address, cohort_id) => {
    try {
        const web3Provider = new ethers.providers.AlchemyProvider("matic", process.env.ALCHEMY_MATIC_API);
        const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, web3Provider);
        const tx = await contract.claimed(address, cohort_id);
        foundAddress = true;
        console.log("NFT exists!", tx);
        let token_id = tx.toNumber();
        if (token_id > 0) {
            let uri = await contract.tokenURI(tx.toString());
            console.log("Found token", cohort, token_id, uri);
            return uri;
        } else {
            return true;
        }
    } catch (error) {
        console.log("NFT not found :(", error);
        return false;
    }
}

exports.handler = async (event) => {
    try {
        console.log("Processing:", event);
        let decoded = decode(event.body);
        var obj = JSON.parse(decoded);
        let address = obj.address;
        let cohort_id = (obj.cohort_id) ? obj.cohort_id : '';
        
        const response = await checkContract(address, cohort_id);
        return {
            statusCode: 200,
            body: response
        };
    } catch (error) {
        console.log("error", error);
        return {
            statusCode: 400,
            body: false
        };
    }
};