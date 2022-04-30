// prettier-ignore
const abi = [ { inputs: [], stateMutability: "nonpayable", type: "constructor", }, { inputs: [], name: "EthValueTooLow", type: "error", },
{ inputs: [], name: "NotAuthorized", type: "error", }, { inputs: [], name: "TransferFailed", type: "error", }, { anonymous: false,
  inputs: [ { indexed: true, internalType: "address", name: "owner", type: "address", }, { indexed: true, internalType: "address",
  name: "approved", type: "address", }, { indexed: true, internalType: "uint256", name: "tokenId", type: "uint256", }, ], name: "Approval",
  type: "event", }, { anonymous: false, inputs: [ { indexed: true, internalType: "address", name: "owner", type: "address", }, { indexed: true,
    internalType: "address", name: "operator", type: "address", }, { indexed: false, internalType: "bool", name: "approved", type: "bool", }, ],
    name: "ApprovalForAll", type: "event", }, { anonymous: false, inputs: [ { indexed: true, internalType: "address", name: "from", type: "address", },
    { indexed: true, internalType: "address", name: "to", type: "address", }, { indexed: true, internalType: "uint256", name: "tokenId",
    type: "uint256", }, ], name: "Transfer", type: "event", }, { inputs: [], name: "COLLECTION_SIZE", outputs: [ { internalType: "uint256", name: "",
    type: "uint256", }, ], stateMutability: "view", type: "function", }, { inputs: [], name: "PUBLIC_PRICE", outputs: [ { internalType: "uint256", name: "",
    type: "uint256", }, ], stateMutability: "view", type: "function", }, { inputs: [ { internalType: "address", name: "to", type: "address", },
    { internalType: "uint256", name: "tokenId", type: "uint256", }, ], name: "approve", outputs: [], stateMutability: "nonpayable", type: "function", },
    { inputs: [ { internalType: "address", name: "_owner", type: "address", }, ], name: "balanceOf", outputs: [ { internalType: "uint256", name: "_balance",
    type: "uint256", }, ], stateMutability: "view", type: "function", }, { inputs: [ { internalType: "uint256", name: "tokenId", type: "uint256", }, ],
    name:"getApproved", outputs: [ { internalType: "address", name: "operator", type: "address", }, ], stateMutability: "view", type: "function", },
    { inputs: [ { internalType: "address", name: "owner", type: "address", }, { internalType: "address", name: "operator", type: "address", }, ],
    name: "isApprovedForAll", outputs: [ { internalType: "bool", name: "approvedForAll", type: "bool", }, ], stateMutability: "view", type: "function", },
    { inputs: [], name: "name", outputs: [ { internalType: "string", name: "", type: "string", }, ], stateMutability: "view", type: "function", },
    { inputs: [], name: "owner", outputs: [ { internalType: "address", name: "", type: "address", }, ], stateMutability: "view", type: "function", },
    { inputs: [ { internalType: "uint256", name: "_tokenId", type: "uint256", }, ], name: "ownerOf", outputs: [ { internalType: "address", name: "_owner",
    type: "address", }, ], stateMutability: "view", type: "function", }, { inputs: [], name: "publicMint", outputs: [], stateMutability: "payable",
    type: "function", }, { inputs: [ { internalType: "bytes", name: "_data", type: "bytes", }, ], name: "publicMint", outputs: [], stateMutability: "payable",
    type: "function", }, { inputs: [ { internalType: "address", name: "to", type: "address", }, ], name: "safeMint", outputs: [], stateMutability:
    "payable", type: "function", }, { inputs: [ { internalType: "address", name: "to", type: "address", }, { internalType: "bytes", name: "_data",
    type: "bytes", }, ], name: "safeMint", outputs: [], stateMutability: "payable", type: "function", }, { inputs: [ { internalType: "address", name: "from",
    type: "address", }, { internalType: "address", name: "to", type: "address", }, { internalType: "uint256", name: "tokenId", type: "uint256", }, ],
    name: "safeTransferFrom", outputs: [], stateMutability: "nonpayable", type: "function", }, { inputs: [ { internalType: "address", name: "from",
    type: "address", }, { internalType: "address", name: "to", type: "address", }, { internalType: "uint256", name: "tokenId", type: "uint256", },
    { internalType: "bytes", name: "data", type: "bytes", }, ], name: "safeTransferFrom", outputs: [], stateMutability: "nonpayable", type: "function", },
    { inputs: [ { internalType: "address", name: "operator", type: "address", }, { internalType: "bool", name: "_approved", type: "bool", }, ],
    name: "setApprovalForAll", outputs: [], stateMutability: "nonpayable", type: "function", }, { inputs: [ { internalType: "string", name: "_baseUri",
    type: "string", }, ], name: "setBaseURI", outputs: [], stateMutability: "nonpayable", type: "function", }, { inputs: [ { internalType: "bytes4",
    name: "interfaceId", type: "bytes4", }, ], name: "supportsInterface", outputs: [ { internalType: "bool", name: "", type: "bool", }, ],
    stateMutability: "view", type: "function", }, { inputs: [], name: "symbol", outputs: [ { internalType: "string", name: "", type: "string", }, ],
    stateMutability: "view", type: "function", }, { inputs: [], name: "tokenCounter", outputs: [ { internalType: "uint256", name: "", type: "uint256", }, ],
    stateMutability: "view", type: "function", }, { inputs: [ { internalType: "uint256", name: "id", type: "uint256", }, ], name: "tokenURI",
    outputs: [ { internalType: "string", name: "", type: "string", }, ], stateMutability: "view", type: "function", }, { inputs: [ { internalType: "address",
    name: "from", type: "address", }, { internalType: "address", name: "to", type: "address", }, { internalType: "uint256", name: "tokenId", type: "uint256", }, ],
    name: "transferFrom", outputs: [], stateMutability: "nonpayable", type: "function", }, { inputs: [ { internalType: "address", name: "", type: "address", }, ],
    name: "whiteList", outputs: [ { internalType: "uint256", name: "", type: "uint256", }, ], stateMutability: "view", type: "function", }, { inputs: [],
      name: "withdrawMoney", outputs: [], stateMutability: "nonpayable", type: "function", }, ];

// solc --strict-assembly --optimize --optimize-runs 200 ./contracts/ERC721Y.yul --bin
const bytecode =
  "33600055656d794e616d6560d01b600155671b5e54de5b589bdb60c21b60025560016003556113886007556107dd806100396000396000f3fe60003560e01c806326092b8314610216578063de6" +
  "892c8146101f457806370a08231146101e05780636352211e146101cc57806342842e0e146101ab578063b88d4fde1461018257806323b872dd14610161578063095ea7b314610148578063a22cb" +
  "4651461012f578063081812fc1461011b578063e985e9c5146100e2578063d082e381146100d657806306fdde03146100ca57806395d89b41146100be57638da5cb5b146100b3576100b16102ea5" +
  "65b005b6100b16000546102df565b506100b16002546102df565b506100b16001546102df565b506100b16003546102df565b506100b16101166100f1610264565b6100f9610220565b906000526" +
  "005602052604060002060205260005260406000205490565b6102df565b506100b161011661012a61026c565b61063b565b506100b161013b6102b2565b610143610220565b6105ee565b506100b" +
  "16101546102b2565b61015c610220565b61053f565b506100b161016d6102a4565b610175610264565b61017d610220565b61043b565b506100b161018e6102d0565b6101966102a4565b61019e6" +
  "10264565b6101a6610220565b610427565b506100b16101b76102a4565b6101bf610264565b6101c7610220565b6103ef565b506100b16101166101db61026c565b6103b8565b506100b16101166" +
  "101ef610220565b610381565b506102066102006102c0565b33610742565b61020e61032a565b6100b1610359565b5061020633610681565b61022861026c565b906001600160a01b03198216610" +
  "23a57565b7f617267756d656e74206e6f74206164647265737300000000000000000000000060005260206000fd5b6102286102b2565b6024361061027a5760043590565b7f617267756d656e742" +
  "06f7574206f6620626f756e64730000000000000000000060005260206000fd5b6064361061027a5760443590565b6044361061027a5760243590565b608090600435601b190160248337565b608" +
  "09060446064350160848337565b905060005260206000f35b507f696e76616c69642066756e6374696f6e2073656c6563746f720000000000000060005260206000fd5b60008051602061079d833" +
  "981519152600080a4565b6706f05b59d3b20000341061033b57565b7076616c75652062656c6f7720707269636560781b60005260206000fd5b32330361036257565b7118d85b1b195c881a5cc81" +
  "8dbdb9d1c9858dd60721b60005260206000fd5b90816000526006602052604060002054911561039957565b713d32b9379030b2323932b9b99033b4bb32b760711b60005260206000fd5b6008015" +
  "49081156103c557565b7f746f6b656e206e6f74206d696e7465642079657400000000000000000000000060005260206000fd5b61040292826103fd9261043b565b610756565b1561040957565b7" +
  "03737903b30b634b2103932b1b2b4bb32b960791b60005260206000fd5b6104029392826104369261043b565b610777565b9190610446826103b8565b61046781336000526005602052604060002" +
  "060205260005260406000205490565b336104718561063b565b14918460080154156103c557331417171561053a5761052c610492836103b8565b928261049d826103b8565b95826000809882825" +
  "260056020528160408120556000805160206107bd8339815191528280a46104f06000196104de83600052600660205260406000205490565b01826000526006602052604060002055565b61051c6" +
  "00161050a84600052600660205260406000205490565b01836000526006602052604060002055565b610527828460080155565b610315565b159015176105375750565b80fd5b600080fd5b61054" +
  "8826103b8565b9061056a33836000526005602052604060002060205260005260406000205490565b610573846103b8565b938260009582875260056020528160408820556000805160206107bd8" +
  "339815191528780a433831417156105c657146105a95750565b807131b0b73a1030b8383937bb329037bbb732b960711b60209252fd5b6020837f63616c6c6572206e6f7420617574686f72697a6" +
  "56400000000000000000000008152fd5b600091818352600560205260408320602052338352806040842055825280337f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b59376" +
  "96c31602085a333146105a95750565b9081600052600560205260406000205491600801541561065757565b7f6e6f20617070726f76656d656e7420666f756e64000000000000000000000000600" +
  "05260206000fd5b600354906001820160035561069581610756565b60008281526006602052604081208054600101905592909190818160080155818460008051602061079d8339815191528180a" +
  "415610725571561070857611389600354146106e05750565b807f6d617820616d6f756e74206f6620746f6b656e73206d696e746564000000000060209252fd5b80713d32b9379030b2323932b9b" +
  "99033b4bb32b760711b60209252fd5b602082713d32b9379030b2323932b9b99033b4bb32b760711b8152fd5b610695600354926001840160035582610777565b90600191803b6107635750565b6" +
  "000805192935091829160209034905af190565b9190600192803b610786575050565b60009293509082916020825192019034905af19056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c" +
  "4a11628f55a4df523b3ef8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925";

const { expect } = require("chai");
const { ethers, network } = require("hardhat");

const PRICE = 0.5 * 10 ** 18;
const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

// https://hardhat.org/tutorial/testing-contracts.html

describe("erc721Y testing", function () {
  let erc721Contract;
  let erc721;
  let owner;
  let addr1;
  let addr2;
  let addr3;
  let addrs;

  // `beforeEach` will run before each test, re-deploying the contract every time
  beforeEach(async function () {
    erc721Contract = await ethers.getContractFactory(abi, bytecode);
    [owner, addr1, addr2, addr3, ...addrs] = await ethers.getSigners();
    erc721 = await erc721Contract.deploy();
  });

  describe("deployment", function () {
    it("Should set the right contract owner", async function () {
      expect(await erc721.owner()).to.equal(owner.address);
    });
  });

  describe("ERC721Y tests", function () {
    it("Should mint a single token", async function () {
      const mintTx = await erc721.connect(addr1)["publicMint()"]({
        value: ethers.BigNumber.from(`${PRICE}`),
      });

      await expect(mintTx)
        .to.emit(erc721, "Transfer")
        .withArgs(ZERO_ADDRESS, addr1.address, 1);

      const nftOwnerBalance = await erc721["balanceOf(address)"](addr1.address);
      expect(nftOwnerBalance).to.equal(1);
    });

    it("token 2 should not be minted (revert)", async function () {
      const mintTx = await erc721.connect(addr1)["publicMint()"]({
        value: ethers.BigNumber.from(`${PRICE}`),
      });

      await expect(mintTx)
        .to.emit(erc721, "Transfer")
        .withArgs(ZERO_ADDRESS, addr1.address, 1);

      const nftOwnerBalance = await erc721["balanceOf(address)"](addr1.address);
      expect(nftOwnerBalance).to.equal(1);

      const ownerOf1 = await erc721["ownerOf(uint256)"](1);
      expect(ownerOf1).to.equal(addr1.address);
      await expect(erc721["ownerOf(uint256)"](2)).to.be.reverted;
    });

    it("Should mint 3 tokens", async function () {
      const mintTx = await erc721.connect(addr1)["publicMint()"]({
        value: ethers.BigNumber.from(`${PRICE}`),
      });

      await expect(mintTx)
        .to.emit(erc721, "Transfer")
        .withArgs(ZERO_ADDRESS, addr1.address, 1);

      const mint2Tx = await erc721.connect(addr1)["publicMint()"]({
        value: ethers.BigNumber.from(`${PRICE}`),
      });

      await expect(mint2Tx)
        .to.emit(erc721, "Transfer")
        .withArgs(ZERO_ADDRESS, addr1.address, 2);

      const mint3Tx = await erc721.connect(addr1)["publicMint()"]({
        value: ethers.BigNumber.from(`${PRICE}`),
      });

      await expect(mint3Tx)
        .to.emit(erc721, "Transfer")
        .withArgs(ZERO_ADDRESS, addr1.address, 3);

      const nftOwnerBalance = await erc721["balanceOf(address)"](addr1.address);
      expect(nftOwnerBalance).to.equal(3);

      const ownerOf1 = await erc721["ownerOf(uint256)"](1);
      expect(ownerOf1).to.equal(addr1.address);
      const ownerOf2 = await erc721["ownerOf(uint256)"](2);
      expect(ownerOf2).to.equal(addr1.address);
      const ownerOf3 = await erc721["ownerOf(uint256)"](3);
      expect(ownerOf3).to.equal(addr1.address);
    });

    it("It should revert the publicMint because the price was set too low", async function () {
      const price = 0.01 * 10 ** 18;

      await expect(
        erc721["publicMint()"]({
          value: ethers.BigNumber.from(`${price * 1}`),
        })
      ).to.be.reverted;
    });

    it("it should revert the withdraw tx because the caller is not the owner", async function () {
      await expect(erc721.connect(addr1).withdrawMoney()).to.be.reverted;
    });

    it("it should revert the publicMint because zero address given", async function () {
      await expect(
        erc721["publicMint()"]({
          from: ZERO_ADDRESS,
          value: ethers.BigNumber.from(`${PRICE}`),
        })
      ).to.be.reverted;
    });

    it("address should get approved", async function () {
      const counter = await erc721.tokenCounter();
      const mintTx = await erc721.connect(addr1)["publicMint()"]({
        value: ethers.BigNumber.from(`${PRICE}`),
      });

      await expect(mintTx)
        .to.emit(erc721, "Transfer")
        .withArgs(ZERO_ADDRESS, addr1.address, 1);

      const approveTx = await erc721
        .connect(addr1)
        .approve(addr2.address, counter);

      await expect(approveTx)
        .to.emit(erc721, "Approval")
        .withArgs(addr1.address, addr2.address, counter);

      const approvedAddress = await erc721.getApproved(counter);
      expect(approvedAddress).to.equal(addr2.address);
    });

    it("owner address should not get approved (revert)", async function () {
      const counter = await erc721.tokenCounter();

      await erc721.connect(owner)["publicMint()"]({
        value: ethers.BigNumber.from(`${PRICE}`),
      });
      await expect(erc721.connect(owner).approve(owner.address, counter)).to.be
        .reverted;
    });

    it("approved address should be able to transfer", async function () {
      const counter = await erc721.tokenCounter();

      await erc721.connect(addr1)["publicMint()"]({
        value: ethers.BigNumber.from(`${PRICE}`),
      });
      await erc721.connect(addr1).approve(addr2.address, counter);
      const approvedAddress = await erc721.getApproved(counter);
      expect(approvedAddress).to.equal(addr2.address);

      const mintTx = await erc721
        .connect(addr2)
        ["safeTransferFrom(address,address,uint256)"](
          addr1.address,
          addr3.address,
          counter
        );

      await expect(mintTx)
        .to.emit(erc721, "Transfer")
        .withArgs(addr1.address, addr3.address, counter);

      const ownerOfToken = await erc721.ownerOf(counter);
      expect(ownerOfToken).to.equal(addr3.address);
    });

    it("address should not be able to transfer", async function () {
      const counter = await erc721.tokenCounter();

      await erc721.connect(addr1)["publicMint()"]({
        value: ethers.BigNumber.from(`${PRICE}`),
      });

      await expect(
        erc721
          .connect(addr2)
          ["safeTransferFrom(address,address,uint256)"](
            addr1.address,
            addr3.address,
            counter
          )
      ).to.be.reverted;

      const ownerOfToken = await erc721.ownerOf(counter);
      expect(ownerOfToken).to.be.not.equal(addr3.address);
    });

    it("address should get approved for all", async function () {
      const mintTx = await erc721.connect(addr1)["publicMint()"]({
        value: ethers.BigNumber.from(`${PRICE}`),
      });

      await expect(mintTx)
        .to.emit(erc721, "Transfer")
        .withArgs(ZERO_ADDRESS, addr1.address, 1);

      const approveTx = await erc721
        .connect(addr1)
        .setApprovalForAll(addr2.address, true);

      await expect(approveTx)
        .to.emit(erc721, "ApprovalForAll")
        .withArgs(addr1.address, addr2.address, true);

      const approvedForAll = await erc721.isApprovedForAll(
        addr1.address,
        addr2.address
      );
      expect(approvedForAll).to.equal(true);
    });

    it("address should not be approved for all", async function () {
      const mintTx = await erc721.connect(addr1)["publicMint()"]({
        value: ethers.BigNumber.from(`${PRICE}`),
      });

      await expect(mintTx)
        .to.emit(erc721, "Transfer")
        .withArgs(ZERO_ADDRESS, addr1.address, 1);

      const approvedForAll = await erc721.isApprovedForAll(
        addr1.address,
        addr2.address
      );
      expect(approvedForAll).to.equal(false);
    });

    it("approved for all address should be able to transfer", async function () {
      const counter = await erc721.tokenCounter();
      const mintTx = await erc721.connect(addr1)["publicMint()"]({
        value: ethers.BigNumber.from(`${PRICE}`),
      });

      await expect(mintTx)
        .to.emit(erc721, "Transfer")
        .withArgs(ZERO_ADDRESS, addr1.address, counter);

      const approveTx = await erc721
        .connect(addr1)
        .setApprovalForAll(addr2.address, true);

      await expect(approveTx)
        .to.emit(erc721, "ApprovalForAll")
        .withArgs(addr1.address, addr2.address, true);

      const approvedForAll = await erc721.isApprovedForAll(
        addr1.address,
        addr2.address
      );
      expect(approvedForAll).to.equal(true);

      const transferTx = await erc721
        .connect(addr2)
        ["safeTransferFrom(address,address,uint256)"](
          addr1.address,
          addr3.address,
          counter
        );

      await expect(transferTx)
        .to.emit(erc721, "Transfer")
        .withArgs(addr1.address, addr3.address, counter);
    });
  });
});
