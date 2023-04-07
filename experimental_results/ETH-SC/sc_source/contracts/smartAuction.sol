// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


contract smartAuction {

  event assetCreated(uint asset_id, string[]  asset_capabilities, address sender);
  event rfqCreated(uint rfq_id, string[]  rfq_capabilities, address sender);
  event bidCreated(uint request_id, uint  bid_count, address sender);
  struct asset {
        uint asset_id;
        string[] asset_capabilities;
        address owner;
    }

    struct request {
        uint rfq_id;
        string[] rfq_capabilities;
        //address rfq_owner;
        bool isSet;
        uint number_of_bids;
    }

    struct bid{
        uint bid_id;
        uint bidasset_id;
        uint request_id;
    }


  //  bid[]   bids_array;
    mapping (uint => asset[]) rfq_to_asset_map;
    mapping (uint => request) public requests;
    mapping (uint => asset) public assets;
    mapping (uint => bid) public bids;
    mapping (uint => address) original_asset_owner;
    mapping (uint => uint) public number_of_bids_per_rfq;
  //  mapping (uint => asset) public bid_asset_map;
  //  mapping (uint => uint) public bid_rfq_map;
  //  uint public asset_count;
    uint public bid_count;
    uint public request_count;

    constructor() public{
      //  asset_count = 0;
        request_count = 0;
        bid_count = 0;
    }


    function createasset(uint asset_id, string[] memory asset_capabilities) public   {
        //address owner = msg.sender;
        assets[asset_id] = asset(asset_id, asset_capabilities, msg.sender);

      //  asset_count++;
        emit assetCreated(asset_id, asset_capabilities, msg.sender);

    }

    function createrfq(uint rfq_id, string[] memory rfq_capabilities) public {
        requests[rfq_id] = request(rfq_id, rfq_capabilities, true, 0);
        request_count++;
        emit rfqCreated(rfq_id, rfq_capabilities, msg.sender);

    }

    /* function getRFQ(uint request_id) public view returns (uint) {
         return request_count;
    } */

    function createbid(uint bidasset_id, uint request_id) public payable {
        if (!requests[request_id].isSet) {
            revert("Request does not exist.");
        }

        uint flag = 0;
        uint bid_asset_temp;

         for (uint i = 0; i < requests[request_id].rfq_capabilities.length; i++) {
            for (uint j = 0; j < assets[bidasset_id].asset_capabilities.length; j++) {
                if (compareStrings(requests[request_id].rfq_capabilities[i], assets[bidasset_id].asset_capabilities[j])) {
                    flag++;
                    bid_asset_temp = bidasset_id;
                }
            }
        }

        if (flag >= requests[request_id].rfq_capabilities.length) {
            bids[bid_count] = bid(bid_count, bidasset_id, request_id);
            bid_count++;
            /* bid memory m;
            m.bid_id = bid_count;
            m.bidasset_id = bidasset_id;
            m.request_id = request_id; */
          //  bids_array.push(m);

          //  bid_asset_map[bid_count] = asset(bid_asset_temp, assets[bid_asset_temp].asset_capabilities, msg.sender);
          //  bid_rfq_map[request_id] = bid_count;
            rfq_to_asset_map[request_id].push(assets[bidasset_id]);
            requests[request_id].number_of_bids++;
            original_asset_owner[bidasset_id] = msg.sender;
            assets[bidasset_id].owner = address(this);
        }
        emit bidCreated(bidasset_id, bid_count, msg.sender);


    }

    function compareStrings(string memory a, string memory b) public view returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }


    function getAllBidsAssets() public view returns(asset[] memory) {
        asset[] memory a_array = new asset[](bid_count);
        for (uint i = 0; i < bid_count; i++) {
       //     asset storage _oneasset = bid_asset_map[0];
        //    a_array[i] = assets_array[];
        }
        return (a_array);
    }


    function getAllBidsCount() public view returns(uint) {
        return bid_count;
        /* asset[] memory a_array = new asset[](bid_count);
        for (uint i = 0; i < bids_array.length; i++) {

            a_array[i] = bid_asset_map[bids_array[i].bid_id];
        }
        return (a_array); */
    }


    /* function getAllBidsForRFQ(uint request_id) public view returns (asset memory) {
        return bid_asset_map[bid_rfq_map[request_id]];//bid_rfq_map[request_id];
    } */




    function getAssetOwnership(uint asset_id) public view returns (address owner){
        return assets[asset_id].owner;
    }




    function tranferasset(address new_owner,uint rfq_id, uint asset_id) public payable {
        /* if (!requests[request_id].isSet) {
            revert("Bid does not exist.");
        } */
        uint i = 0;
        for(i=0; i<requests[rfq_id].number_of_bids; i++)
        {
          if(rfq_to_asset_map[rfq_id][i].asset_id == asset_id)
          {
            assets[asset_id].owner = new_owner;
          }

          else
          {
            assets[rfq_to_asset_map[rfq_id][i].asset_id].owner = original_asset_owner[rfq_to_asset_map[rfq_id][i].asset_id];
           //console.log("!!!!original owner", assets[rfq_to_asset_map[rfq_id][i].asset_id].owner);
          }
        }



    }
    function getAllRequestsCount() public returns (uint) {
        return request_count;

    }
}