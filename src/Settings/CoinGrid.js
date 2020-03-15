import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";
//import CoinTile from "./CoinTile";

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-gap: 15px;
  margin-top: 40px; */
`;

export default function() {
  return (
    <AppContext.Consumer>
      {({ coinList }) => (
        <CoinGridStyled>
          {Object.keys(coinList).map(coinKey => (
            <div>{coinKey}</div>
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
