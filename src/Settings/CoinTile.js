import React from "react";
import { AppContext } from "../App/AppProvider";
import { SelectableTile } from "../Shared/Tile";
// import { SelectableTile, DisabledTile, DeletableTile } from "../Shared/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "../Shared/CoinImage";

// function clickCoinHandler(topSection, coinKey, addCoin, removeCoin) {
//   return topSection
//     ? () => {
//         removeCoin(coinKey);
//       }
//     : () => {
//         addCoin(coinKey);
//       };
// }


export default function({ coinKey }) {
    return (
      <AppContext.Consumer>
        {({ coinList}) => {
          let coin = coinList[coinKey];
  
          const TileClass = SelectableTile;
          return <TileClass>
          <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol}/>
          <CoinImage coin={coin} />
            </TileClass>
            }}
      </AppContext.Consumer>
  }
  

// function keyTopSection({ coinKey, topSection }) {
//   return (
//     <AppContext.Consumer>
//       {({ coinList, addCoin, removeCoin, isInFavorites }) => {
//         let coin = coinList[coinKey];

//         let TileClass = SelectableTile;
//         if (topSection) {
//           TileClass = DeletableTile;
//         } else if (isInFavorites(coinKey)) {
//           TileClass = DisabledTile;
//         }

//         return (
//           <TileClass
//             onClick={clickCoinHandler(topSection, coinKey, addCoin, removeCoin)}
//           >
//             <CoinHeaderGrid
//               topSection={topSection}
//               name={coin.CoinName}
//               symbol={coin.Symbol}
//             />
//             <CoinImage coin={coin} />
//           </TileClass>
//         );
//       }}
//     </AppContext.Consumer>
//   );
// }
// export default keyTopSection;
