const smartAuction = artifacts.require("smartAuction");
const { toBN } = web3.utils;

//const rfq_count = 20;
//const asset_count=25;
//const bid_count = 25;

const rfq_count = 5;
const asset_count=1;
const bid_count = 1;

let account_num = rfq_count + 1;
let assetId = 201;
let rfqId = 101;

contract('smartAuction', function(accounts) {
  for(let i = 1; i <= rfq_count; i++)
  {
    it('should create rfq #' + i, async () => {
      console.log("Start: " + new Date().getTime());  
      let smartAuctionInstance = await smartAuction.deployed();
        
      const capMapRequest = new Map();
      capMapRequest.set(1, ["PlasticDeformingFixating", "Mating", "Taping", "Punching", "Grinding", "Moulding", "Casting", "LaserAdding", "Forming", "ArcWelding"]);
      capMapRequest.set(2, ["Placing", "Shrinking", "ColdWelding", "Turning", "Sewing", "Pressing", "PlasticWelding", "Clamping", "Plastics_Manufacturing", "3D_Printing"]);
      capMapRequest.set(3, ["Pocket_machining", "FrictionWelding", "MetalWelding", "MaterialConserving", "MaterialRemoving", "Qualifying", "Logistic", "Manipulation", "UltrasonicWelding", "AdhesiveCuring"]);
      capMapRequest.set(4, ["Boring", "Milling", "Threading", "Soldering", "Fastening", "HeatedAirWelding", "ResistanceWelding", "Nailing", "Riveting", "SpringFastening"]);
      capMapRequest.set(5, ["ElasticDeformingFixating", "DeformingFixating", "SolderPasteApplication", "Loading", "Marking", "Fixturing", "Packaging", "SurfaceFinishing", "Cleaning", "Unloading"]);


        /*10 CAPABILITIES*/
        //const rfqCapability = ["PlasticDeformingFixating", "Mating", "Taping", "Punching", "Grinding", "Moulding", "Casting", "LaserAdding", "Forming", "ArcWelding"];


        /*30 CAPABILITIES*/
        //const rfqCapability = ["PlasticDeformingFixating", "Mating", "Taping", "Punching", "Grinding", "Moulding", "Casting", "LaserAdding", "Forming", "ArcWelding", "Placing", "Shrinking", "ColdWelding", "Turning", "Sewing", "Pressing", "PlasticWelding", "Clamping", "Plastics_Manufacturing", "3D_Printing", "Pocket_machining", "FrictionWelding", "MetalWelding", "MaterialConserving", "MaterialRemoving", "Qualifying", "Logistic", "Manipulation", "UltrasonicWelding", "AdhesiveCuring"];
        
        /*15 CAPABILITIES*/
        // const rfqCapability = ["PlasticDeformingFixating", "Mating", "Taping", "Punching", "Grinding", "Moulding", "Casting", "LaserAdding", "Forming", "ArcWelding", "Placing", "Shrinking", "ColdWelding", "Turning", "Sewing"];

        /*45 CAPABILITIES*/
        // const rfqCapability = ["PlasticDeformingFixating", "Mating", "Taping", "Punching", "Grinding", "Moulding", "Casting", "LaserAdding", "Forming", "ArcWelding", "Placing", "Shrinking", "ColdWelding", "Turning", "Sewing", "Pressing", "PlasticWelding", "Clamping", "Plastics_Manufacturing", "3D_Printing", "Pocket_machining", "FrictionWelding", "MetalWelding", "MaterialConserving", "MaterialRemoving", "Qualifying", "Logistic", "Manipulation", "UltrasonicWelding", "AdhesiveCuring", "Boring", "Milling", "Threading", "Soldering", "Fastening", "HeatedAirWelding", "ResistanceWelding", "Nailing", "Riveting", "SpringFastening", "ElasticDeformingFixating", "DeformingFixating", "SolderPasteApplication", "Loading", "Marking"];
        
        await smartAuctionInstance.createrfq(rfqId, capMapRequest.get(i), { from: accounts[i] });
        console.log("End: " + new Date().getTime());
        console.log("RFQ Id: " + (rfqId) + " Account num: " + accounts[i]);
        console.log("Cap Map: " + capMapRequest.get(i));
      });

     for (let j = 1; j <= asset_count; j++) {
       it('should create asset #' + j, async () => {
        console.log("Start: " + new Date().getTime());   
        smartAuctionInstance = await smartAuction.deployed();
           //const assetId = asset_id_num;

           /*10 CAPABILITIES*/
            //const assetCapabilities = ["PlasticDeformingFixating", "Mating", "Taping", "Punching", "Grinding", "Moulding", "Casting", "LaserAdding", "Forming", "ArcWelding"];

            const capMap = new Map();
            capMap.set(1, ["PlasticDeformingFixating", "Mating", "Taping", "Punching", "Grinding", "Moulding", "Casting", "LaserAdding", "Forming", "ArcWelding"]);
            capMap.set(2, ["Placing", "Shrinking", "ColdWelding", "Turning", "Sewing", "Pressing", "PlasticWelding", "Clamping", "Plastics_Manufacturing", "3D_Printing"]);
            capMap.set(3, ["Pocket_machining", "FrictionWelding", "MetalWelding", "MaterialConserving", "MaterialRemoving", "Qualifying", "Logistic", "Manipulation", "UltrasonicWelding", "AdhesiveCuring"]);
            capMap.set(4, ["Boring", "Milling", "Threading", "Soldering", "Fastening", "HeatedAirWelding", "ResistanceWelding", "Nailing", "Riveting", "SpringFastening"]);
            capMap.set(5, ["ElasticDeformingFixating", "DeformingFixating", "SolderPasteApplication", "Loading", "Marking", "Fixturing", "Packaging", "SurfaceFinishing", "Cleaning", "Unloading"]);

          //"Boring", "Milling", "Threading", "Soldering", "Fastening", "HeatedAirWelding", "ResistanceWelding", "Nailing", "Riveting", "SpringFastening",
          //"ElasticDeformingFixating", "DeformingFixating", "SolderPasteApplication", "Loading", "Marking", "Fixturing", "Packaging", "SurfaceFinishing", "Cleaning", "Unloading", "Machining", "LaserCutting", "TorchSoldering", "IronSoldering", "UV-curing", "Gluing", "Wedging", "Clipping", "Folding", "Twisting"

           /*30 CAPABILITIES*/
           // const assetCapabilities = ["PlasticDeformingFixating", "Mating", "Taping", "Punching", "Grinding", "Moulding", "Casting", "LaserAdding", "Forming", "ArcWelding", 
           // "Placing", "Shrinking", "ColdWelding", "Turning", "Sewing", "Pressing", "PlasticWelding", "Clamping", "Plastics_Manufacturing", "3D_Printing", "Pocket_machining", 
           //"Pocket_machining", "FrictionWelding", "MetalWelding", "MaterialConserving", "MaterialRemoving", "Qualifying", "Logistic", "Manipulation", "UltrasonicWelding", "AdhesiveCuring"];
           //const t = Date.now();
           
           /*15 CAPABILITIES*/
           // const assetCapabilities = ["PlasticDeformingFixating", "Mating", "Taping", "Punching", "Grinding", "Moulding", "Casting", "LaserAdding", "Forming", "ArcWelding", "Placing", "Shrinking", "ColdWelding", "Turning", "Sewing"];
           
           /*45 CAPABILITIES*/
           // const assetCapabilities = ["PlasticDeformingFixating", "Mating", "Taping", "Punching", "Grinding", "Moulding", "Casting", "LaserAdding", "Forming", "ArcWelding", "Placing", "Shrinking", "ColdWelding", "Turning", "Sewing", "Pressing", "PlasticWelding", "Clamping", "Plastics_Manufacturing", "3D_Printing", "Pocket_machining", "FrictionWelding", "MetalWelding", "MaterialConserving", "MaterialRemoving", "Qualifying", "Logistic", "Manipulation", "UltrasonicWelding", "AdhesiveCuring", "Boring", "Milling", "Threading", "Soldering", "Fastening", "HeatedAirWelding", "ResistanceWelding", "Nailing", "Riveting", "SpringFastening", "ElasticDeformingFixating", "DeformingFixating", "SolderPasteApplication", "Loading", "Marking"];
           
           await smartAuctionInstance.createasset(assetId, capMap.get(i), { from: accounts[account_num] });
           console.log("End: " + new Date().getTime());
           console.log("Asset Id: " + (assetId) + " Account num: " + account_num);
           console.log("Cap Map: " + capMap.get(i));
        });

        it('should create bid #' + j, async () => {
          console.log("Start: " + new Date().getTime()); 
          smartAuctionInstance = await smartAuction.deployed();
           //const assetId = asset_id_num;
           await smartAuctionInstance.createbid(assetId, rfqId, { from: accounts[account_num] });
           console.log("End: " + new Date().getTime());
           console.log("Asset Id: " + (assetId) + " RFQ Id: " + (rfqId) + " Account num: " + account_num);
           account_num = account_num + 1;
           assetId = assetId + 1;
           
        });

     }

     it('should activate accept #' + i, async () => {
      console.log("Start: " + new Date().getTime()); 
      smartAuctionInstance = await smartAuction.deployed();

       temp = await(smartAuctionInstance.tranferasset(accounts[i],rfqId, assetId-1));
       console.log("End: " + new Date().getTime());
       //const address = await smartAuctionInstance.getAssetOwnership(assetId);
       //console.log("Ownership of asset assetOriginal#1: ", address);
       console.log("RFQ Id: " + (rfqId) + " Asset Id: " + (assetId-1) + " Account num: " + accounts[i]);
     });
     rfqId = rfqId + 1;

  }

//////////////////////////////////////


});
