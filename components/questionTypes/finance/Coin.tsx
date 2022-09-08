import React from "react";

export enum CoinType {
  PENNY,
  NICKEL,
  DIME,
  QUARTER,
  LOONIE,
  TOONIE,
}
export interface CoinProp {
  coinType: CoinType;
}

export const Coin: React.FC<CoinProp> = ({ coinType }) => {
  return (
    <div className="flex flex-col space-y-8">
      {coinType === CoinType.PENNY && (
        <img src="/images/money/penny.png" className="w-14 h-14" />
      )}
      {coinType === CoinType.NICKEL && (
        <img src="/images/money/nickel.png" className="w-16 h-16" />
      )}
      {coinType === CoinType.LOONIE && (
        <img src="/images/money/loonie.png" className="w-24" />
      )}
      {coinType === CoinType.TOONIE && (
        <img src="/images/money/toonie.png" className="w-28" />
      )}
      {coinType === CoinType.DIME && (
        <img src="/images/money/dime.png" className="w-12 h-12" />
      )}
      {coinType === CoinType.QUARTER && (
        <img src="/images/money/quarter.png" className="w-20 h-20" />
      )}
    </div>
  );
};
