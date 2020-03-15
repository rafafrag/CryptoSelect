import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";
//import { SelectableTile } from "../Shared/Tile";
import CoinTile from "./CoinTile";

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 40px;
  /* grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  
  margin-top: 40px; */
`;

function getCoinsToDisplay(coinList) {
  return Object.keys(coinList).slice(0, 100);
}

export default function() {
  return (
    <AppContext.Consumer>
      {({ coinList }) => (
        <CoinGridStyled>
          {getCoinsToDisplay(coinList).map(coinKey => (
            <CoinTile coinKey={coinKey} />
          ))}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  );
}

// function coinGridTop({ topSection }) {
//   return (
//     <AppContext.Consumer>
//       {({ coinList, favorites, filteredCoins }) => {
//         if (topSection) {
//           console.log({ coinList });
//         }
//         return (
//           <CoinGridStyled>
//             {getCoinsToDisplay(
//               coinList,
//               topSection,
//               favorites,
//               filteredCoins
//             ).map(coinKey => (
//               <CoinTile
//                 key={coinKey}
//                 topSection={topSection}
//                 coinKey={coinKey}
//               />
//             ))}
//           </CoinGridStyled>
//         );
//       }}
//     </AppContext.Consumer>
//   );
// }
// export default coinGridTop;
