import { ethers } from "ethers";
import { useState } from "react";

const CreateWallet = () => {
    const [wallet, setWallet] = useState("");
    const [address, setAddress] = useState("");
    const [publicKey, setPublicKey] = useState("");
/*    const [privateKey, setPrivateKey] = useState("");*/

    const createWallet = async () => {
        const newWallet = ethers.Wallet.createRandom();
        setWallet(JSON.stringify(newWallet.mnemonic.phrase));
        setAddress(JSON.stringify(newWallet.address));
        setPublicKey(JSON.stringify(newWallet.publicKey));
     /*   setPrivateKey(JSON.stringify(newWallet._BaseWallet.privateKey));*/
        console.log(newWallet)
    };

    return (
        <div>
            <div>
                <button onClick={createWallet}>Create Wallet</button>
            </div>

            <div>
                <h2>Key: {wallet}</h2>
                <h2>Address: {address}</h2>
                <h2>Public Key: {publicKey}</h2>
{/*                <h2>Private Key: {privateKey}</h2>*/}

            </div>
        </div>
    );
};

export default CreateWallet;
