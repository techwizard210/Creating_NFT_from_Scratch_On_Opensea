// migrations/2_deploy_token.js
// SPDX-License-Identifier: MIT

const ERC721PresetMinterPauserAutoId = artifacts.require("ERC721PresetMinterPauserAutoId");
module.exports = function (deployer) {
    deployer.deploy(ERC721PresetMinterPauserAutoId, "My NFT", "NFT", "https://gateway.pinata.cloud/ipfs/QmcdnHCTuPoazQG8ft3tsRQ6RZTob6EDgAR5Mo3LV2Weif/");
};