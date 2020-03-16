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
  */
`;

function getCoinsToDisplay(coinList, topSection, favorites) {
  return topSection
    ? favorites
    : Object.keys(coinList).slice(0, topSection ? 10 : 100);
}

export default function(topSection) {
  return (
    <AppContext.Consumer>
      {({ coinList, favorites }) => (
        <CoinGridStyled>
          {getCoinsToDisplay(coinList, topSection, favorites).map(coinKey => (
            <CoinTile topSection={topSection} coinKey={coinKey} />
          ))}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  );
}

// function getLowerSectionCoins(coinList, filteredCoins) {
//   return (
//     (filteredCoins && Object.keys(filteredCoins)) ||
//     Object.keys(coinList).slice(0, 100)
//   );
// }

// function getCoinsToDisplay(coinList, topSection, favorites, filterCoins) {
//   return topSection ? favorites : getLowerSectionCoins(coinList, filterCoins);
// }

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
